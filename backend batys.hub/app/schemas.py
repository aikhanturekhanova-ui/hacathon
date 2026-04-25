# schemas.py
from pydantic import BaseModel
from datetime import datetime
from typing import Optional

class JobBase(BaseModel):
    title:       str
    company:     str
    salary:      Optional[str] = None
    location:    Optional[str] = None
    type:        Optional[str] = None
    remote:      bool = False
    logo:        Optional[str] = None
    posted:      Optional[str] = None
    description: Optional[str] = None

class JobCreate(JobBase):
    pass

class JobUpdate(JobBase):
    title:   Optional[str] = None
    company: Optional[str] = None

class JobOut(JobBase):
    id:         int
    created_at: datetime
    updated_at: datetime
    model_config = {"from_attributes": True}