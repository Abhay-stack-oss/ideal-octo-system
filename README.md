# WorkSphere — Full-Stack Project Management & Analytics Platform

WorkSphere is an advanced full-stack web application for managing teams, projects, tasks and project activity from a single dashboard.

## Features
- JWT authentication and protected routes
- Role-based access: Admin and Member
- Project creation and management
- Task CRUD with priority, status, due dates and assignees
- Search and filtering
- Project progress analytics
- Activity/audit log
- Responsive dashboard UI
- REST API
- SQLite database for easy local setup

## Tech Stack
Frontend: React + Vite + CSS
Backend: Node.js + Express.js
Database: SQLite + better-sqlite3
Authentication: JWT + bcryptjs

## Run locally

### 1. Backend
```bash
cd server
npm install
copy .env.example .env
npm run dev
```

### 2. Frontend
Open another terminal:
```bash
cd client
npm install
npm run dev
```

Frontend: http://localhost:5173
Backend: http://localhost:5000

## API
- POST /api/auth/register
- POST /api/auth/login
- GET /api/auth/me
- GET /api/projects
- POST /api/projects
- PATCH /api/projects/:id
- DELETE /api/projects/:id
- GET /api/tasks
- POST /api/tasks
- PATCH /api/tasks/:id
- DELETE /api/tasks/:id
- GET /api/activity

## Environment
`server/.env`
```env
PORT=5000
JWT_SECRET=change_this_to_a_long_random_secret
CLIENT_URL=http://localhost:5173
```
