# Backend Contract Guidelines

## API Discipline
- Do not change request/response fields without updating `API_SPEC.md`.
- Use consistent error shape and status code semantics.

## Auth
- Protect candidate and employer scoped endpoints with JWT.
- Validate role authorization explicitly in handlers.

## Integrations
- Backend calls ML scoring endpoint internally.
- Fail gracefully when ML service is unavailable.
