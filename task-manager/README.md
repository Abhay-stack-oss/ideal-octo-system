# Task Manager Backend

Express + MongoDB backend for the Task Manager application.

## Stack
- Node.js
- Express
- MongoDB / Mongoose
- JWT authentication
- bcryptjs

## Run

```bash
cd task-manager/backend
npm install
```

Create `.env` from `.env.example`, then start:

```bash
npm run dev
```

The API runs on `http://localhost:5000` by default.

## API
- `POST /api/auth/register`
- `POST /api/auth/login`
- `GET /api/auth/me`
- `GET /api/tasks`
- `POST /api/tasks`
- `PUT /api/tasks/:id`
- `DELETE /api/tasks/:id`
