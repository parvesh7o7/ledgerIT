import { getDashboardSummary, createTransaction } from "../controller/transactionController.js";
import { authenticateToken } from "../middleware/authMiddleware.js";
import express from "express";

const router = express.Router();

router.use(authenticateToken);
router.post('/', createTransaction);
router.get('/dashboard', getDashboardSummary);

export default router;