from sqlalchemy import Column, Integer, String, Boolean, DateTime
from sqlalchemy.ext.declarative import declarative_base
from datetime import datetime, timezone

Base = declarative_base()

class Job(Base):
    __tablename__ = "jobs"

    id         = Column(Integer, primary_key=True, index=True)
    title      = Column(String(255), nullable=False)
    company    = Column(String(255), nullable=False)
    salary     = Column(String(100))
    location   = Column(String(255))
    type       = Column(String(100))
    remote     = Column(Boolean, default=False)
    logo       = Column(String(10))
    posted     = Column(String(100))
    description = Column(String, nullable=True)
    created_at = Column(DateTime, default=lambda: datetime.now(timezone.utc))
    updated_at = Column(DateTime, default=lambda: datetime.now(timezone.utc),
                        onupdate=lambda: datetime.now(timezone.utc))