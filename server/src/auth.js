import jwt from "jsonwebtoken";
import db from "./db.js";
export function signToken(user){return jwt.sign({id:user.id,role:user.role,email:user.email},process.env.JWT_SECRET,{expiresIn:"7d"});}
export function requireAuth(req,res,next){const h=req.headers.authorization||"";const token=h.startsWith("Bearer ")?h.slice(7):null;if(!token)return res.status(401).json({message:"Authentication required"});try{req.user=jwt.verify(token,process.env.JWT_SECRET);next();}catch{return res.status(401).json({message:"Invalid or expired token"});}}
export function requireAdmin(req,res,next){if(req.user?.role!=="admin")return res.status(403).json({message:"Admin access required"});next();}
export function currentUser(id){return db.prepare("SELECT id,name,email,role,created_at FROM users WHERE id=?").get(id);}
