# WorkSphere — Full-Stack Project Management & Analytics Platform

WorkSphere is an advanced internship-ready full-stack application for managing projects, tasks, users, activity and workspace analytics from one responsive dashboard.

## Project Links

- **Frontend:** [Task Manager Frontend](https://github.com/Abhay-stack-oss/ideal-octo-system/tree/agent/task-manager-upload/task-manager/frontend)
- **Backend:** [Task Manager Backend](https://github.com/Abhay-stack-oss/ideal-octo-system/tree/agent/task-manager-upload/task-manager/backend)
- **Task Manager README:** [Setup & API Documentation](https://github.com/Abhay-stack-oss/ideal-octo-system/blob/agent/task-manager-upload/task-manager/README.md)

> Note: These links point to the current upload branch. After the pull request is merged into `main`, the links will be available from the main repository as well.

## Core Features
- User registration and login with JWT authentication
- Password hashing with bcrypt
- Admin/member roles
- Project creation, status and progress tracking
- Task creation, completion, priority and due dates
- Task search and filtering
- Workspace analytics and completion metrics
- Activity/audit history
- Team/user API
- RESTful backend API
- SQLite relational database
- Responsive React dashboard
- GitHub Actions CI configuration

## Technology Stack
- **Frontend:** React 18, Vite 5, JavaScript, CSS
- **Backend:** Node.js, Express 4
- **Database:** SQLite with better-sqlite3
- **Authentication:** JWT + bcryptjs
- **Icons:** Lucide React

## Project Structure
```text
ideal-octo-system/
├── client/
│   ├── src/main.jsx
│   ├── src/styles.css
│   ├── package.json
│   └── vite.config.js
├── server/
│   ├── src/
│   │   ├── db.js
│   │   ├── auth.js
│   │   ├── activity.js
│   │   ├── server.js
│   │   └── routes/
│   │       ├── auth.js
│   │       ├── projects.js
│   │       ├── tasks.js
│   │       ├── analytics.js
│   │       ├── users.js
│   │       └── activity.js
│   ├── package.json
│   └── .env.example
├── task-manager/
│   ├── frontend/
│   ├── backend/
│   └── README.md
├── docs/
└── .github/workflows/ci.yml
```

## Requirements
- Node.js 18 or newer
- npm 9 or newer

## Run the Backend (Windows)
Open a terminal in the project root:

```powershell
cd server
npm install
Copy-Item .env.example .env
npm run dev
```

The API should start at:

`http://localhost:5000`

Test it in your browser:

`http://localhost:5000/api/health`

Expected response:

```json
{
  "status": "ok",
  "service": "WorkSphere API",
  "version": "1.0.0"
}
```

## Run the Frontend
Open a **second terminal** in the project root:

```powershell
cd client
npm install
npm run dev
```

Open the URL printed by Vite, normally:

`http://localhost:5173`

## First Login
Open the registration page and create an account. The first registered account is assigned the Admin role.

## API Endpoints
### Authentication
- `POST /api/auth/register`
- `POST /api/auth/login`
- `GET /api/auth/me`

### Projects
- `GET /api/projects`
- `POST /api/projects`
- `PATCH /api/projects/:id`
- `DELETE /api/projects/:id`

### Tasks
- `GET /api/tasks`
- `POST /api/tasks`
- `PATCH /api/tasks/:id`
- `DELETE /api/tasks/:id`

### Analytics & Workspace
- `GET /api/analytics/summary`
- `GET /api/users`
- `GET /api/activity`

## Environment
Create `server/.env` from `.env.example`:

```env
PORT=5000
JWT_SECRET=replace_with_a_long_random_secret
CLIENT_URL=http://localhost:5173
```

Never commit the real `.env` file.

## Internship Submission
Project: **WorkSphere – Full-Stack Project Management & Analytics Platform**

The repository contains both frontend and backend source code, database logic, API documentation and setup instructions.
