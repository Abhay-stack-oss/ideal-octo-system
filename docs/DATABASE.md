# Database Design

WorkSphere uses SQLite with foreign-key enforcement.

## Entities

### users
- id (PK)
- name
- email (unique)
- password (bcrypt hash)
- role
- created_at

### projects
- id (PK)
- name
- description
- status
- owner_id (FK → users.id)
- created_at

### tasks
- id (PK)
- project_id (FK → projects.id)
- title
- description
- status
- priority
- due_date
- assignee_id (FK → users.id)
- created_at

### activity
- id (PK)
- user_id (FK → users.id)
- action
- entity
- entity_id
- created_at

## Relationships

`users 1:N projects`

`projects 1:N tasks`

`users 1:N tasks` through `assignee_id`

`users 1:N activity`
