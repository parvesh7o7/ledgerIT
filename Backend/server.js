import express, { json } from "express";
import cors from "cors";
import morgan from "morgan";
import pool from "./config/db.js";
import transactionRoute from "./routes/transactionRoute.js";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use("/api/transactions", transactionRoute);

app.use((err, req, res, next) => {
    console.error("Server Error:", err.stack);
    res.status(500).json({
        success: false,
        error: "Something went wrong on the server!"
    });
});

async function startServer() {
    try {
        await pool.query("SELECT 1");
        console.log("MySQL Database connected successfully via Pool!");

        app.listen(PORT, () => {
            console.log(`Ledger Backend Server is running on port ${PORT}`);
        });
    } catch (error) {
        console.error("Database connection failed at startup!");
        console.error(error.message);
        process.exit(1);
    }
}

startServer();