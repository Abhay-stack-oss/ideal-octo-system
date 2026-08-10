import { Router } from "express";
import db from "../db.js";
import { requireAuth } from "../auth.js";

const router = Router();
router.use(requireAuth);

router.get("/", (req, res) => {
  const users = db.prepare(`
    SELECT id, name, email, role, created_at
    FROM users ORDER BY name ASC
  `).all();
  res.json(users);
});

export default router;
