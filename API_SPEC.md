# API_SPEC.md — Job Portal with ATS

**Version:** 1.0  
**Base URL (backend):** `http://localhost:5000/api`  
**Base URL (ML service):** `http://localhost:5001`  
**Database:** MongoDB Atlas  
**Auth:** JWT (Bearer token in `Authorization` header)

> This document is the **single source of truth** for all three services.  
> Frontend, Backend, and ML must not deviate from these contracts.  
> If a change is needed, update this file first, then implement.

## Implementation Notes
- Frontend should read runtime secrets from environment variables (for example `VITE_STITCH_API_KEY`).
- Never commit real API keys; commit templates only (for example `.env.example`).
- Backend and frontend pull requests that alter payloads must reference this spec update.

---

## Table of Contents

1. [Auth](#1-auth)
2. [Candidate — Profile & Feed](#2-candidate--profile--feed)
3. [Employer — Jobs](#3-employer--jobs)
4. [Applications](#4-applications)
5. [Status Tracking](#5-status-tracking)
6. [ML Service (Internal)](#6-ml-service-internal)
7. [Data Models (MongoDB Schemas)](#7-data-models-mongodb-schemas)
8. [Error Format](#8-error-format)
9. [Who Calls What](#9-who-calls-what)

---

## 1. Auth

### `POST /api/auth/register`
Register a new user (candidate or employer).

**Request:**
```json
{
  "email": "user@example.com",
  "password": "SecurePass123",
  "role": "candidate"  // "candidate" | "employer"
}
```

**Response `201`:**
```json
{
  "token": "<jwt>",
  "user": {
    "user_id": "64f...",
    "email": "user@example.com",
    "role": "candidate",
    "onboarding_complete": false
  }
}
```

---

### `POST /api/auth/login`

**Request:**
```json
{
  "email": "user@example.com",
  "password": "SecurePass123"
}
```

**Response `200`:**
```json
{
  "token": "<jwt>",
  "user": {
    "user_id": "64f...",
    "email": "user@example.com",
    "role": "candidate",
    "onboarding_complete": true
  }
}
```

---

## 2. Candidate — Profile & Feed

### `POST /api/candidate/onboarding`
Submit onboarding profile. Only called once; sets `onboarding_complete: true`.

**Auth:** Required (candidate JWT)

**Request:**
```json
{
  "name": "Ananya Rao",
  "skills": ["Python", "Machine Learning", "SQL"],
  "experience": "2 years as ML engineer at a fintech startup",
  "education": "B.Tech Computer Science, NIT Surathkal",
  "preferred_roles": ["ML Engineer", "Data Scientist"],
  "location": "Bangalore, India",
  "bio": "Passionate about building intelligent systems.",
  "resume_url": "https://..."
}
```

**Response `200`:**
```json
{
  "message": "Onboarding complete",
  "candidate_id": "64f..."
}
```

---

### `GET /api/candidate/profile`
Get the logged-in candidate's profile.

**Auth:** Required (candidate JWT)

**Response `200`:**
```json
{
  "candidate_id": "64f...",
  "name": "Ananya Rao",
  "skills": ["Python", "Machine Learning", "SQL"],
  "experience": "2 years as ML engineer ...",
  "education": "B.Tech Computer Science",
  "preferred_roles": ["ML Engineer", "Data Scientist"],
  "location": "Bangalore, India",
  "bio": "...",
  "resume_url": "https://..."
}
```

---

### `PATCH /api/candidate/profile`
Update profile fields (partial update).

**Auth:** Required (candidate JWT)

**Request:** (any subset of profile fields)
```json
{
  "skills": ["Python", "Machine Learning", "SQL", "PyTorch"],
  "bio": "Updated bio."
}
```

**Response `200`:**
```json
{ "message": "Profile updated" }
```

---

### `GET /api/candidate/feed`
Get personalized ranked job feed for the logged-in candidate.

**Auth:** Required (candidate JWT)

**How it works (backend logic):**
1. Fetch candidate profile from DB.
2. Fetch all active job listings from DB.
3. Call ML service `POST /match/jobs` with candidate + jobs.
4. Return ranked list.

**Response `200`:**
```json
{
  "jobs": [
    {
      "job_id": "64a...",
      "title": "ML Engineer",
      "company": "TechCorp",
      "location": "Bangalore",
      "role_type": "Full-time",
      "description": "First 200 chars of description...",
      "required_skills": ["Python", "TensorFlow"],
      "match_score": 0.91,
      "application_deadline": "2025-07-01T00:00:00Z",
      "posted_at": "2025-06-01T10:00:00Z"
    }
  ]
}
```

---

### `GET /api/jobs/:job_id`
Get full details of a specific job (candidate clicks a tile).

**Auth:** Required

**Response `200`:**
```json
{
  "job_id": "64a...",
  "title": "ML Engineer",
  "company": "TechCorp",
  "description": "Full description...",
  "required_skills": ["Python", "TensorFlow", "MLOps"],
  "nice_to_have": ["Docker", "Kubernetes"],
  "experience_required": "1-3 years",
  "location": "Bangalore, India",
  "role_type": "Full-time",
  "salary_range": "12-18 LPA",
  "openings": 5,
  "application_deadline": "2025-07-01T00:00:00Z",
  "employer_contact": {
    "name": "HR Team",
    "email": "hr@techcorp.com"
  }
}
```

---

## 3. Employer — Jobs

### `POST /api/employer/onboarding`
Submit employer onboarding details.

**Auth:** Required (employer JWT)

**Request:**
```json
{
  "company_name": "TechCorp",
  "industry": "Technology",
  "website": "https://techcorp.com",
  "description": "We build intelligent software.",
  "location": "Bangalore, India",
  "size": "51-200"
}
```

**Response `200`:**
```json
{ "message": "Employer onboarding complete" }
```

---

### `POST /api/employer/jobs`
Post a new job listing.

**Auth:** Required (employer JWT)

**Ghost Hiring Guard:** If `openings > 50`, a warning flag is stored internally  
and the employer is notified of the anti-ghost-hiring policy.

**Request:**
```json
{
  "title": "ML Engineer",
  "description": "Full job description here...",
  "required_skills": ["Python", "TensorFlow", "MLOps"],
  "nice_to_have": ["Docker"],
  "experience_required": "1-3 years",
  "location": "Bangalore, India",
  "role_type": "Full-time",
  "salary_range": "12-18 LPA",
  "openings": 5,
  "application_deadline": "2025-07-01T00:00:00Z"
}
```

**Response `201`:**
```json
{
  "message": "Job posted successfully",
  "job_id": "64a..."
}
```

---

### `GET /api/employer/jobs`
Get all jobs posted by the logged-in employer.

**Auth:** Required (employer JWT)

**Response `200`:**
```json
{
  "jobs": [
    {
      "job_id": "64a...",
      "title": "ML Engineer",
      "status": "active",  // "active" | "closed" | "draft"
      "openings": 5,
      "applicant_count": 42,
      "application_deadline": "2025-07-01T00:00:00Z",
      "posted_at": "2025-06-01T10:00:00Z"
    }
  ]
}
```

---

### `GET /api/employer/jobs/:job_id/applicants`
Get all applicants for a specific job. Called after application period closes.

**Auth:** Required (employer JWT)

**Response `200`:**
```json
{
  "job_id": "64a...",
  "applicants": [
    {
      "application_id": "app001",
      "candidate_id": "64f...",
      "name": "Ananya Rao",
      "skills": ["Python", "ML"],
      "experience": "2 years...",
      "application_type": "proposal",  // "proposal" | "simulation"
      "proposal_text": "I am applying because...",
      "match_score": 0.91,
      "submitted_at": "2025-06-10T14:00:00Z",
      "current_status": "pending"
    }
  ]
}
```

---

### `PATCH /api/employer/applicants/:application_id/status`
Update an applicant's status (shortlist or reject).

**Auth:** Required (employer JWT)

**Request:**
```json
{
  "status": "verified"  // "verified" | "rejected" | "pending"
}
```

**Response `200`:**
```json
{ "message": "Status updated", "application_id": "app001", "status": "verified" }
```

**Side effects (backend handles automatically):**
- If `status = "verified"`: sends congratulations email with GMeet link + calendar invite via Gmail API.
- If `status = "rejected"`: sends polite rejection email.

---

## 4. Applications

### `POST /api/applications/proposal`
Submit a text proposal for a job (free, no payment).

**Auth:** Required (candidate JWT)

**Request:**
```json
{
  "job_id": "64a...",
  "proposal_text": "I am applying because I have 2 years of relevant experience in..."
}
```

**Response `201`:**
```json
{
  "message": "Proposal submitted",
  "application_id": "app001",
  "status": "pending"
}
```

---

### `POST /api/applications/simulation`
Initiate a paid job simulation application.

**Auth:** Required (candidate JWT)

**Request:**
```json
{
  "job_id": "64a...",
  "payment_token": "<razorpay_or_stripe_token>"
}
```

**Response `201`:**
```json
{
  "message": "Payment verified. Simulation session created.",
  "application_id": "app002",
  "seb_launch_url": "https://...",  // Safe Exam Browser deep link
  "status": "pending"
}
```

---

## 5. Status Tracking

### `GET /api/candidate/applications`
Get all applications submitted by the logged-in candidate and their statuses.

**Auth:** Required (candidate JWT)

**Response `200`:**
```json
{
  "applications": [
    {
      "application_id": "app001",
      "job_id": "64a...",
      "job_title": "ML Engineer",
      "company": "TechCorp",
      "application_type": "proposal",
      "status": "pending",     // "pending" | "verified" | "rejected"
      "submitted_at": "2025-06-10T14:00:00Z",
      "updated_at": "2025-06-12T09:00:00Z"
    },
    {
      "application_id": "app002",
      "job_id": "64b...",
      "job_title": "Data Scientist",
      "company": "AnalyticsHub",
      "application_type": "simulation",
      "status": "verified",
      "submitted_at": "2025-06-08T11:00:00Z",
      "updated_at": "2025-06-14T16:00:00Z"
    }
  ]
}
```

**Status meanings:**
| Status | Color | Meaning |
|---|---|---|
| `pending` | Grey | Under review |
| `verified` | Green | Shortlisted — email sent |
| `rejected` | Red | Not selected |

---

## 6. ML Service (Internal)

> These endpoints are called **only by the backend**. Frontend never calls ML directly.

### `POST /match/jobs` (ML service, port 5001)
Get ranked jobs for a candidate.

**Request:**
```json
{
  "candidate": {
    "candidate_id": "64f...",
    "skills": ["Python", "ML"],
    "experience": "2 years backend ...",
    "education": "B.Tech CS",
    "preferred_roles": ["ML Engineer"]
  },
  "jobs": [{ "job_id": "...", "title": "...", "description": "...", "required_skills": [...] }],
  "top_k": 10
}
```

**Response:**
```json
{
  "matches": [
    { "job_id": "64a...", "title": "ML Engineer", "company": "TechCorp", "score": 0.91 }
  ]
}
```

---

### `POST /match/candidates` (ML service, port 5001)
Get ranked candidates for a job (for recruiter dashboard).

**Request:**
```json
{
  "job": { "job_id": "...", "title": "...", "description": "...", "required_skills": [...] },
  "candidates": [{ "candidate_id": "...", "name": "...", "skills": [...], "experience": "..." }],
  "top_k": 20
}
```

**Response:**
```json
{
  "matches": [
    { "candidate_id": "64f...", "name": "Ananya Rao", "skills": ["Python"], "score": 0.91 }
  ]
}
```

---

### `GET /health` (ML service, port 5001)
```json
{ "status": "ok", "service": "job-matcher-ml" }
```

---

## 7. Data Models (MongoDB Schemas)

### `users` collection
```json
{
  "_id": "ObjectId",
  "email": "string",
  "password_hash": "string",
  "role": "candidate | employer",
  "onboarding_complete": "boolean",
  "created_at": "Date"
}
```

### `candidates` collection
```json
{
  "_id": "ObjectId",
  "user_id": "ObjectId (ref: users)",
  "name": "string",
  "skills": ["string"],
  "experience": "string",
  "education": "string",
  "preferred_roles": ["string"],
  "location": "string",
  "bio": "string",
  "resume_url": "string",
  "updated_at": "Date"
}
```

### `employers` collection
```json
{
  "_id": "ObjectId",
  "user_id": "ObjectId (ref: users)",
  "company_name": "string",
  "industry": "string",
  "website": "string",
  "description": "string",
  "location": "string",
  "size": "string",
  "is_blacklisted": "boolean",
  "warning_count": "number"
}
```

### `jobs` collection
```json
{
  "_id": "ObjectId",
  "employer_id": "ObjectId (ref: employers)",
  "title": "string",
  "description": "string",
  "required_skills": ["string"],
  "nice_to_have": ["string"],
  "experience_required": "string",
  "location": "string",
  "role_type": "string",
  "salary_range": "string",
  "openings": "number",
  "status": "active | closed | draft",
  "application_deadline": "Date",
  "posted_at": "Date"
}
```

### `applications` collection
```json
{
  "_id": "ObjectId",
  "job_id": "ObjectId (ref: jobs)",
  "candidate_id": "ObjectId (ref: candidates)",
  "application_type": "proposal | simulation",
  "proposal_text": "string | null",
  "simulation_score": "number | null",
  "match_score": "number",
  "status": "pending | verified | rejected",
  "payment_verified": "boolean",
  "submitted_at": "Date",
  "updated_at": "Date"
}
```

---

## 8. Error Format

All errors follow this consistent shape:

```json
{
  "error": "Short error message",
  "detail": "Optional longer explanation"
}
```

| HTTP Code | Meaning |
|---|---|
| `400` | Bad request — missing or invalid fields |
| `401` | Unauthorized — missing or invalid JWT |
| `403` | Forbidden — wrong role (e.g., candidate hitting employer endpoint) |
| `404` | Resource not found |
| `500` | Internal server error |

---

## 9. Who Calls What

| Caller | Calls | Purpose |
|---|---|---|
| Frontend | `POST /api/auth/register` | Register user |
| Frontend | `POST /api/auth/login` | Login |
| Frontend | `POST /api/candidate/onboarding` | First-time profile setup |
| Frontend | `GET /api/candidate/feed` | Load personalized job feed |
| Frontend | `GET /api/jobs/:job_id` | View full job details |
| Frontend | `POST /api/applications/proposal` | Apply via proposal |
| Frontend | `POST /api/applications/simulation` | Apply via paid simulation |
| Frontend | `GET /api/candidate/applications` | Track application statuses |
| Frontend | `POST /api/employer/jobs` | Post a new job |
| Frontend | `GET /api/employer/jobs/:job_id/applicants` | View applicants |
| Frontend | `PATCH /api/employer/applicants/:id/status` | Shortlist or reject |
| **Backend** | `POST /match/jobs` (ML) | Get job matches for feed |
| **Backend** | `POST /match/candidates` (ML) | Rank applicants for recruiter |
| **Backend** | Gmail API | Send status emails automatically |

---

*Last updated: June 2025*  
*Owner: Team Lead — update this file before changing any contract.*
