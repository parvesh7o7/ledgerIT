import pool from "../config/db.js";

const reminder = {
    create: async (reminderData) => {
        const { user_id, transaction_id, contact_name, contact_phone, amount, interval_days, next_reminder_date } = reminderData;

        const query = `
            INSERT INTO reminders (user_id, transaction_id, contact_name, contact_phone, amount, interval_days, next_reminder_date)
            VALUES (?, ?, ?, ?, ?, ?, ?);
        `;
        const [result] = await pool.execute(query, [user_id, transaction_id, contact_name, contact_phone, amount, interval_days, next_reminder_date]);
        return result.insertId;
    },
    getDueReminder: async () => {
        const query = `
            SELECT * FROM reminders 
            WHERE status = 'active' AND next_reminder_date <= CURDATE();
        `;
        const [rows] = await pool.execute(query);
        return rows;
    },
    updateNextDate: async (id, intervalDays) => {
        const query = `
            UPDATE reminders 
            SET next_reminder_date = DATE_ADD(next_reminder_date, INTERVAL ? DAY)
            WHERE id = ?;
        `;
        const [result] = await pool.execute(query, [intervalDays, id]);
        return result;
    },
}

export default reminder;