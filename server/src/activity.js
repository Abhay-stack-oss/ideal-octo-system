import db from "./db.js";
export function logActivity(userId,action,entity,entityId=null){db.prepare("INSERT INTO activity (user_id,action,entity,entity_id) VALUES (?,?,?,?)").run(userId,action,entity,entityId);}
