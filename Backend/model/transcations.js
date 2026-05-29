import pool from "../config/db";
const transcation = {
    create: async (transcationData) => {
        const { user_id, type, contact_name, amount, description } = transcationData;
        const query = `
            INSERT INTO transactions (user_id, type, contact_name, amount, description) 
            VALUES (?, ?, ?, ?, ?);
        `;
        const [result] = await db.execute(query, [user_id, type, contact_name, amount, description]);
        return result.insertId;
    },
    findTransactionByID: async (userID) => {
        const query = `
            SELECT id, type, contact_name, amount, description, timestamp 
            FROM transactions 
            WHERE user_id = ? 
            ORDER BY timestamp DESC
        `;
        const [rows] = await db.execute(query, [userId]);
        return rows;
    },

    getFinancialSummary: async (userId) => {
        const query = `
            SELECT 
                SUM(CASE WHEN type = 'debit' THEN amount ELSE 0 END) AS total_lent,
                SUM(CASE WHEN type = 'credit' THEN amount ELSE 0 END) AS total_owed
            FROM transactions 
            WHERE user_id = ?
        `;
        const [rows] = await db.execute(query, [userId]);

        return {
            total_lent: parseFloat(rows[0].total_lent) || 0,
            total_owed: parseFloat(rows[0].total_owed) || 0
        };
    }
}

export default transcation;