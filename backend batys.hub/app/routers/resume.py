from fastapi import APIRouter, HTTPException
from fastapi.responses import StreamingResponse
from pydantic import BaseModel
from typing import Optional
import httpx
import json
import io
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import mm
from reportlab.lib import colors
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, HRFlowable, Table, TableStyle
from reportlab.lib.enums import TA_LEFT, TA_CENTER
from app.core.config import settings

OPENROUTER_API_KEY = settings.openrouter_api_key
OPENROUTER_URL = "https://openrouter.ai/api/v1/chat/completions"
MODEL = "deepseek/deepseek-chat-v3-0324:free "

router = APIRouter(prefix="/resume", tags=["Resume"])


class ResumeRequest(BaseModel):
    full_name: str
    email: str
    phone: str
    location: Optional[str] = None
    position: str
    experience: str
    skills: str
    education: str
    languages: Optional[str] = None
    job_description: Optional[str] = None


class ResumeResponse(BaseModel):
    summary: str
    experience: str
    skills: list[str]
    suggestions: list[str]


# ── AI enhance ────────────────────────────────────────────────────────────────

@router.post("/enhance", response_model=ResumeResponse)
async def enhance_resume(payload: ResumeRequest):
    job_context = f"\n\nOptimize for this job:\n{payload.job_description}" if payload.job_description else ""

    async with httpx.AsyncClient() as client:
        res = await client.post(
            OPENROUTER_URL,
            headers={
                "Authorization": f"Bearer {OPENROUTER_API_KEY}",
                "Content-Type": "application/json",
            },
            json={
                "model": MODEL,
                "messages": [
                    {
                        "role": "system",
                        "content": "You are a professional resume writer. Respond in Russian. Respond ONLY with valid JSON, no markdown, no extra text."
                    },
                    {
                        "role": "user",
                        "content": f"""Enhance this resume content and return improved text.

NAME: {payload.full_name}
POSITION: {payload.position}
EXPERIENCE: {payload.experience}
SKILLS: {payload.skills}
EDUCATION: {payload.education}{job_context}

Respond ONLY with this exact JSON:
{{
  "summary": "<2-3 sentence professional summary>",
  "experience": "<improved experience description>",
  "skills": ["skill1", "skill2", "skill3"],
  "suggestions": ["suggestion1", "suggestion2"]
}}"""
                    }
                ],
            },
            timeout=60,
        )

    if res.status_code != 200:
        raise HTTPException(status_code=502, detail=f"OpenRouter error: {res.text}")

    content = res.json()["choices"][0]["message"]["content"]
    content = content.strip().removeprefix("```json").removeprefix("```").removesuffix("```").strip()

    try:
        parsed = json.loads(content)
    except json.JSONDecodeError:
        raise HTTPException(status_code=500, detail=f"Failed to parse AI response: {content}")

    return ResumeResponse(**parsed)


# ── PDF export ────────────────────────────────────────────────────────────────

@router.post("/export/pdf")
async def export_pdf(payload: ResumeRequest):
    buffer = io.BytesIO()

    doc = SimpleDocTemplate(
        buffer,
        pagesize=A4,
        rightMargin=15 * mm,
        leftMargin=15 * mm,
        topMargin=15 * mm,
        bottomMargin=15 * mm,
    )

    BLUE = colors.HexColor("#0052FF")
    DARK = colors.HexColor("#1a1a2e")
    GRAY = colors.HexColor("#6b7280")
    LIGHT = colors.HexColor("#f3f4f6")

    styles = getSampleStyleSheet()

    name_style = ParagraphStyle("Name", fontSize=24, textColor=DARK, fontName="Helvetica-Bold", spaceAfter=2)
    position_style = ParagraphStyle("Position", fontSize=13, textColor=BLUE, fontName="Helvetica", spaceAfter=6)
    contact_style = ParagraphStyle("Contact", fontSize=9, textColor=GRAY, fontName="Helvetica", spaceAfter=2)
    section_style = ParagraphStyle("Section", fontSize=11, textColor=BLUE, fontName="Helvetica-Bold", spaceBefore=12, spaceAfter=4)
    body_style = ParagraphStyle("Body", fontSize=10, textColor=DARK, fontName="Helvetica", leading=14, spaceAfter=4)
    skill_style = ParagraphStyle("Skill", fontSize=9, textColor=BLUE, fontName="Helvetica-Bold", backColor=LIGHT)

    story = []

    # ── header ──
    story.append(Paragraph(payload.full_name, name_style))
    story.append(Paragraph(payload.position, position_style))

    contacts = []
    if payload.email:    contacts.append(payload.email)
    if payload.phone:    contacts.append(payload.phone)
    if payload.location: contacts.append(payload.location)
    story.append(Paragraph("  ·  ".join(contacts), contact_style))
    story.append(HRFlowable(width="100%", thickness=1.5, color=BLUE, spaceAfter=8))

    # ── summary ──
    if payload.experience:
        story.append(Paragraph("О себе", section_style))
        story.append(Paragraph(payload.experience, body_style))

    # ── experience ──
    story.append(Paragraph("Опыт работы", section_style))
    story.append(Paragraph(payload.experience, body_style))

    # ── skills ──
    if payload.skills:
        story.append(Paragraph("Навыки", section_style))
        skill_list = [s.strip() for s in payload.skills.split(",") if s.strip()]
        # render as pill-like table row
        if skill_list:
            skill_data = [[Paragraph(f"  {s}  ", skill_style) for s in skill_list]]
            skill_table = Table(skill_data, hAlign="LEFT")
            skill_table.setStyle(TableStyle([
                ("BACKGROUND", (0, 0), (-1, -1), LIGHT),
                ("ROUNDEDCORNERS", [4]),
                ("PADDING", (0, 0), (-1, -1), 4),
                ("GRID", (0, 0), (-1, -1), 0.5, colors.HexColor("#e5e7eb")),
            ]))
            story.append(skill_table)
            story.append(Spacer(1, 6))

    # ── education ──
    if payload.education:
        story.append(Paragraph("Образование", section_style))
        story.append(Paragraph(payload.education, body_style))

    # ── languages ──
    if payload.languages:
        story.append(Paragraph("Языки", section_style))
        story.append(Paragraph(payload.languages, body_style))

    doc.build(story)
    buffer.seek(0)

    filename = f"resume_{payload.full_name.replace(' ', '_')}.pdf"
    return StreamingResponse(
        buffer,
        media_type="application/pdf",
        headers={"Content-Disposition": f"attachment; filename={filename}"}
    )