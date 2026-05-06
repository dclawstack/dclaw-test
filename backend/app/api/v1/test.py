"""Test API routes."""

import random
import uuid
from datetime import datetime, timezone

from fastapi import APIRouter
from pydantic import BaseModel

router = APIRouter()


class SuiteRequest(BaseModel):
    name: str


class SuiteResponse(BaseModel):
    id: str
    name: str
    pass_rate: int
    failed_count: int
    coverage_percent: int
    flaky_predictions: list[str]
    created_at: str


class ReportResponse(BaseModel):
    total_tests: int
    passed: int
    failed: int
    skipped: int
    duration_seconds: float


@router.post("/suites", response_model=SuiteResponse)
async def create_suite(request: SuiteRequest) -> SuiteResponse:
    return SuiteResponse(
        id=str(uuid.uuid4()),
        name=request.name,
        pass_rate=random.randint(70, 100),
        failed_count=random.randint(0, 5),
        coverage_percent=random.randint(60, 95),
        flaky_predictions=["test_login"],
        created_at=datetime.now(timezone.utc).isoformat(),
    )


@router.get("/suites/{id}/report", response_model=ReportResponse)
async def get_report(id: str) -> ReportResponse:
    return ReportResponse(
        total_tests=42,
        passed=38,
        failed=2,
        skipped=2,
        duration_seconds=12.4,
    )
