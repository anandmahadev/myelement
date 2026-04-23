# Architecture Overview

JoByte is split into three layers:

1. Frontend (Vite + React + TypeScript)
- Candidate and employer experiences
- Route-driven pages for onboarding, job feed, and dashboards

2. Backend API (Node service)
- JWT auth
- Candidate profile and employer job endpoints
- Application status management

3. ML Matching Service
- Internal scoring endpoint for candidate-job relevance
- Returns ranked results consumed by backend

## Contract Rule
`API_SPEC.md` is the contract source of truth. Frontend and backend must align with it before implementation.
