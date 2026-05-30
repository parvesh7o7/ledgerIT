import pool from "../config/db.js";
const Transaction = {
    create: async (transactionData) => {
        const { user_id, type, contact_name, amount, description } = transactionData;
        const query = `
            INSERT INTO transactions (user_id, type, contact_name, amount, description) 
            VALUES (?, ?, ?, ?, ?);
        `;
        const [result] = await pool.execute(query, [user_id, type, contact_name, amount, description]);
        return result.insertId;
    },
    findTransactionByID: async (userID) => {
        const query = `
            SELECT id, type, contact_name, amount, description, timestamp 
            FROM transactions  
            WHERE user_id = ? 
            ORDER BY timestamp DESC
        `;
        const [rows] = await pool.execute(query, [userID]);
        return rows;
    },

    getFinancialSummary: async (userID) => {
        const query = `
            SELECT 
                SUM(CASE WHEN type = 'debit' THEN amount ELSE 0 END) AS total_lent,
                SUM(CASE WHEN type = 'credit' THEN amount ELSE 0 END) AS total_owed
            FROM transactions 
            WHERE user_id = ?
        `;
        const [rows] = await pool.execute(query, [userID]);

        return {
            total_lent: parseFloat(rows[0].total_lent) || 0,
            total_owed: parseFloat(rows[0].total_owed) || 0
        };
    }
}

export default Transaction;