# WorkSphere API Reference

Base URL: `http://localhost:5000/api`

## Authentication

### Register
`POST /auth/register`

```json
{
  "name": "Demo User",
  "email": "demo@example.com",
  "password": "password123"
}
```

### Login
`POST /auth/login`

Returns a JWT token. Send it as:
`Authorization: Bearer <token>`

## Projects

- `GET /projects` — list projects
- `POST /projects` — create project
- `PATCH /projects/:id` — update project
- `DELETE /projects/:id` — delete project

## Tasks

- `GET /tasks` — list tasks
- `GET /tasks?status=todo` — filter by status
- `GET /tasks?priority=high` — filter by priority
- `GET /tasks?search=dashboard` — search title/description
- `POST /tasks` — create task
- `PATCH /tasks/:id` — update task
- `DELETE /tasks/:id` — delete task

## Analytics

`GET /analytics/overview`

Returns workspace totals, task status distribution, priority distribution and project completion rates.

## Team

`GET /users`

Returns workspace members without password fields.

## Activity

`GET /activity`

Returns the authenticated user's recent audit activity.
