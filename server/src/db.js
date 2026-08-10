import Database from "better-sqlite3";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const db = new Database(path.join(__dirname, "../worksphere.db"));
db.pragma("foreign_keys = ON");
db.exec(`
CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT,name TEXT NOT NULL,email TEXT UNIQUE NOT NULL,password TEXT NOT NULL,role TEXT NOT NULL DEFAULT 'member',created_at TEXT DEFAULT CURRENT_TIMESTAMP);
CREATE TABLE IF NOT EXISTS projects (id INTEGER PRIMARY KEY AUTOINCREMENT,name TEXT NOT NULL,description TEXT DEFAULT '',status TEXT NOT NULL DEFAULT 'active',owner_id INTEGER NOT NULL,created_at TEXT DEFAULT CURRENT_TIMESTAMP,FOREIGN KEY(owner_id) REFERENCES users(id) ON DELETE CASCADE);
CREATE TABLE IF NOT EXISTS tasks (id INTEGER PRIMARY KEY AUTOINCREMENT,project_id INTEGER NOT NULL,title TEXT NOT NULL,description TEXT DEFAULT '',status TEXT NOT NULL DEFAULT 'todo',priority TEXT NOT NULL DEFAULT 'medium',due_date TEXT,assignee_id INTEGER,created_at TEXT DEFAULT CURRENT_TIMESTAMP,FOREIGN KEY(project_id) REFERENCES projects(id) ON DELETE CASCADE,FOREIGN KEY(assignee_id) REFERENCES users(id) ON DELETE SET NULL);
CREATE TABLE IF NOT EXISTS activity (id INTEGER PRIMARY KEY AUTOINCREMENT,user_id INTEGER,action TEXT NOT NULL,entity TEXT NOT NULL,entity_id INTEGER,created_at TEXT DEFAULT CURRENT_TIMESTAMP,FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE SET NULL);
`);
export default db;
