import { Router } from "express";
import db from "../db.js";
import { requireAuth } from "../auth.js";

const router = Router();
router.use(requireAuth);

router.get("/overview", (req, res) => {
  const userId = req.user.id;
  const totals = db.prepare(`
    SELECT
      (SELECT COUNT(*) FROM projects WHERE owner_id=?) AS projects,
      (SELECT COUNT(*) FROM tasks t JOIN projects p ON p.id=t.project_id WHERE p.owner_id=?) AS tasks,
      (SELECT COUNT(*) FROM tasks t JOIN projects p ON p.id=t.project_id WHERE p.owner_id=? AND t.status='done') AS completed,
      (SELECT COUNT(*) FROM tasks t JOIN projects p ON p.id=t.project_id WHERE p.owner_id=? AND t.priority='high' AND t.status!='done') AS high_priority
  `).get(userId,userId,userId,userId);

  const byStatus = db.prepare(`
    SELECT t.status, COUNT(*) AS count
    FROM tasks t JOIN projects p ON p.id=t.project_id
    WHERE p.owner_id=? GROUP BY t.status ORDER BY count DESC
  `).all(userId);

  const byPriority = db.prepare(`
    SELECT t.priority, COUNT(*) AS count
    FROM tasks t JOIN projects p ON p.id=t.project_id
    WHERE p.owner_id=? GROUP BY t.priority ORDER BY count DESC
  `).all(userId);

  const projectPerformance = db.prepare(`
    SELECT p.id, p.name,
      COUNT(t.id) AS total_tasks,
      COALESCE(SUM(CASE WHEN t.status='done' THEN 1 ELSE 0 END),0) AS completed_tasks
    FROM projects p LEFT JOIN tasks t ON t.project_id=p.id
    WHERE p.owner_id=? GROUP BY p.id ORDER BY completed_tasks DESC, p.name
  `).all(userId).map(p => ({
    ...p,
    completion_rate: p.total_tasks ? Math.round(p.completed_tasks / p.total_tasks * 100) : 0
  }));

  res.json({ totals, byStatus, byPriority, projectPerformance });
});

export default router;
