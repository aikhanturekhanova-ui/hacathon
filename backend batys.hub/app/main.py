from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.database import engine
from app import models
from app.routers import jobs, ats, resume

models.Base.metadata.create_all(bind=engine)

app = FastAPI(title="Jobs API")


app.include_router(jobs.router)
app.include_router(ats.router)
app.include_router(resume.router)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=False,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(jobs.router)