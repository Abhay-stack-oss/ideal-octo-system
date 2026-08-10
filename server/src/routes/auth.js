import {Router} from "express";
import bcrypt from "bcryptjs";
import db from "../db.js";
import {signToken,requireAuth,currentUser} from "../auth.js";
const router=Router();
router.post("/register",async(req,res)=>{const{name,email,password}=req.body;if(!name||!email||!password||password.length<6)return res.status(400).json({message:"Name, email and 6+ character password are required"});try{const count=db.prepare("SELECT COUNT(*) c FROM users").get().c;const hash=await bcrypt.hash(password,10);const r=db.prepare("INSERT INTO users(name,email,password,role) VALUES(?,?,?,?)").run(name.trim(),email.toLowerCase().trim(),hash,count===0?"admin":"member");const user=currentUser(r.lastInsertRowid);res.status(201).json({user,token:signToken(user)});}catch{res.status(409).json({message:"Email already registered"});}});
router.post("/login",async(req,res)=>{const{email,password}=req.body;const user=db.prepare("SELECT * FROM users WHERE email=?").get((email||"").toLowerCase().trim());if(!user||!(await bcrypt.compare(password||"",user.password)))return res.status(401).json({message:"Invalid email or password"});const safe=currentUser(user.id);res.json({user:safe,token:signToken(safe)});});
router.get("/me",requireAuth,(req,res)=>res.json({user:currentUser(req.user.id)}));
export default router;
