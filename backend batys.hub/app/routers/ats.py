from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
import httpx
import json
from app.core.config import settings

OPENROUTER_API_KEY = settings.openrouter_api_key
OPENROUTER_URL = "https://openrouter.ai/api/v1/chat/completions"
MODEL = "deepseek/deepseek-chat-v3-0324:free "

router = APIRouter(prefix="/ats", tags=["ATS"])


class ATSRequest(BaseModel):
    resume: str
    job_description: str


class ATSResponse(BaseModel):
    score: int
    summary: str
    matched_keywords: list[str]
    missing_keywords: list[str]
    suggestions: list[str]


@router.get("/debug")
async def debug():
    return {
        "key_loaded": bool(OPENROUTER_API_KEY),
        "key_preview": OPENROUTER_API_KEY[:8] if OPENROUTER_API_KEY else None,
    }


@router.post("/scan", response_model=ATSResponse)
async def scan_resume(payload: ATSRequest):
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
                        "content": "You are an ATS expert. Respond in Russian, in second person, exclusively ONLY with valid JSON, no markdown, no extra text.",
                    },
                    {
                        "role": "user",
                        "content": f'Analyze this resume against the job description.\n\nJOB DESCRIPTION:\n{payload.job_description}\n\nRESUME:\n{payload.resume}\n\nRespond ONLY with this exact JSON format:\n{{"score": <int 0-100>, "summary": "<assessment>", "matched_keywords": [], "missing_keywords": [], "suggestions": []}}',
                    },
                ],
            },
            timeout=60,
        )

    print("STATUS:", res.status_code)
    print("BODY:", res.text)

    if res.status_code != 200:
        raise HTTPException(
            status_code=502, detail=f"OpenRouter error {res.status_code}: {res.text}"
        )

    content = res.json()["choices"][0]["message"]["content"]

    # strip markdown code blocks if model wraps response
    content = (
        content.strip()
        .removeprefix("```json")
        .removeprefix("```")
        .removesuffix("```")
        .strip()
    )

    try:
        parsed = json.loads(content)
    except json.JSONDecodeError:
        raise HTTPException(
            status_code=500, detail=f"Failed to parse AI response: {content}"
        )

    return ATSResponse(**parsed)
