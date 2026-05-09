# DClaw Test — v1.2 Feature Roadmap

> Based on: Y Combinator vertical SaaS principles, trending GitHub repos (cypress, playwright), AI product research (Applitools, Mabl, Testim, Rainforest QA)

## Pre-Flight Checklist

- [ ] `frontend/package-lock.json` committed after any `npm install` / dependency change
- [ ] `frontend/next-env.d.ts` exists and is committed
- [ ] `docker-compose.yml` healthchecks correct
- [ ] `frontend/Dockerfile` declares `ARG NEXT_PUBLIC_API_URL` before `RUN npm run build`

## v1.0 Feature Inventory (Current)

- [ ] Test case management
- [ ] Test run execution
- [ ] Results dashboard
- [ ] Basic reporting
- [ ] Real backend CRUD (no mocks)
- [ ] Docker + Helm deployment
- [ ] Alembic migrations
- [ ] Backend tests

---

## v1.2 Roadmap

### P0 — Must Have (Ship in v1.0, demo-ready)

#### 1. AI Test Copilot (QA Engineer)
**Description:** AI assistant that writes test cases from requirements, analyzes failures, and suggests fixes. "Generate test cases for the checkout flow."
- **AI Angle:** Requirement-to-test generation (LLM). Failure analysis.
- **Backend:** `/api/v1/ai/test-chat` endpoint. Test generation engine.
- **Frontend:** AI panel with generated test previews.
- **Files:** `backend/app/services/test_ai.py`, `frontend/src/components/test-copilot.tsx`

#### 2. Visual Test Automation
**Description:** Record and replay UI tests with screenshot comparison. No-code test builder.
- **Backend:** Test execution engine (Playwright/Selenium). Screenshot diff.
- **Frontend:** Test recorder overlay. Step editor with screenshots.
- **Files:** `backend/app/services/visual_test.py`

#### 3. Test Case Management
**Description:** Organize tests into suites, folders, and projects. Link to requirements.
- **Backend:** Hierarchical test organization. Requirement traceability.
- **Frontend:** Test explorer with tree view. Test detail page.
- **Files:** `backend/app/services/test_cases.py`

#### 4. CI/CD Test Execution
**Description:** Trigger test runs from CI pipelines. Parallel execution. Flaky test detection.
- **Backend:** CI webhook handler. Test runner orchestration.
- **Frontend:** Run history with trends. Flakiness report.
- **Files:** `backend/app/services/ci_integration.py`

### P1 — Should Have (v1.1–1.2)

#### 5. AI-Generated API Tests
**Description:** Auto-generate API tests from OpenAPI specs with positive/negative cases.
- **Backend:** OpenAPI parser + test generator.
- **Frontend:** Generated test suite with run button.

#### 6. Cross-Browser & Mobile Testing
**Description:** Run tests across browsers and devices in cloud grid.
- **Backend:** Grid orchestration. Device farm integration.
- **Frontend:** Browser matrix with pass/fail badges.

#### 7. Performance & Load Testing
**Description:** Load testing with configurable concurrency. Latency and throughput analysis.
- **Backend:** Load generator (k6/Locust integration).
- **Frontend:** Performance report with percentiles.

#### 8. Bug Tracking Integration
**Description:** Auto-create tickets in Jira/Linear/GitHub Issues on test failure.
- **Backend:** Issue tracker API integration.
- **Frontend:** Failure-to-ticket mapping view.

### P2 — Could Have (v1.3+)

#### 9. Self-Healing Tests
**Description:** AI updates test selectors automatically when UI changes.

#### 10. Accessibility Testing
**Description:** Automated WCAG compliance checks with remediation suggestions.

#### 11. Chaos Testing Integration
**Description:** Inject failures during test runs to validate resilience.

#### 12. Crowd Testing Marketplace
**Description:** On-demand human testers for exploratory testing.

---

## Implementation Priority

1. **Week 1–2:** AI Test Copilot (P0.1) + Visual Test Automation (P0.2)
2. **Week 3–4:** Test Case Management (P0.3) + CI/CD Execution (P0.4)
3. **Week 5–6:** API Test Generation (P1.5) + Cross-Browser Testing (P1.6)
4. **Week 7–8:** Performance Testing (P1.7) + Bug Tracking (P1.8)
