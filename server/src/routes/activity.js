import {Router} from "express";
import db from "../db.js";
import {requireAuth} from "../auth.js";
const router=Router();router.get("/",requireAuth,(req,res)=>res.json(db.prepare(`SELECT a.*,u.name user_name FROM activity a LEFT JOIN users u ON u.id=a.user_id WHERE a.user_id=? ORDER BY a.created_at DESC LIMIT 25`).all(req.user.id)));
export default router;
