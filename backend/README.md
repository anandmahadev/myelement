# Backend Workspace

This folder is reserved for the JoByte API implementation described in `../API_SPEC.md`.

## Responsibilities
- Authentication and authorization
- Candidate and employer onboarding endpoints
- Job posting, listing, and application state transitions
- Integration with the internal ML scoring service

## Conventions
- Keep endpoint contracts aligned with `API_SPEC.md`
- Validate role-based access for every protected route
- Use consistent error payloads across all handlers

## Next Steps
1. Initialize backend framework and folder layout
2. Add JWT auth middleware
3. Implement core resource routes from the API spec
