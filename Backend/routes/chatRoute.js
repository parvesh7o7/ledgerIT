import express from "express";
import { processChat } from "../controller/chatController.js";
const router = express.Router();
router.post("/message", processChat);
export default router;
