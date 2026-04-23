# Frontend Style Guide

## Principles
- Keep page-level files in `frontend/src/pages`.
- Keep reusable primitives in `frontend/src/components`.
- Co-locate route constants and reuse them.

## UI Rules
- Prefer shared color variables over one-off color literals where possible.
- Keep layout responsive for desktop and mobile widths.
- Use concise component props and avoid dead props.

## Quality
- Ensure each new page exports a default React component.
- Keep route additions synchronized with `App.tsx`.
