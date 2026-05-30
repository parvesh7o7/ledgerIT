import { getDashboardSummary, createTransaction } from "../controller/transactionController.js";

import express from "express";

const router = express.Router();

router.post('/', createTransaction);
router.get('/dashboard', getDashboardSummary);

export default router;