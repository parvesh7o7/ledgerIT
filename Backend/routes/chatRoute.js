import express from "express";
import { authenticateToken } from "../middleware/authMiddleware.js";
import { processChat } from "../controller/chatController.js";
const router = express.Router();


router.post("/message", authenticateToken ,processChat);
export default router;
