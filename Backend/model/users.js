import pool from "../config/db";

const user = {
    create: async (userData) => {
        const { id, name, email, avatar_url } = userData;
        const query = `
            INSERT INTO users (id, name, email, avatar_url)
            VALUES (?, ?, ?, ?)
            ON DUPLICATE KEY UPDATE name = ?, avatar_url = ?;
        `;
        const [result] = await pool.execute(query, [id, name, email, avatar_url, name, avatar_url]);
        return result;
    },
    findUserByID: async (id) => {
        const query = `SELECT * FROM users WHERE id = ?`;
        const [rows] = await pool.execute(query, [id]);
        return rows[0];
    }
};

export default user;