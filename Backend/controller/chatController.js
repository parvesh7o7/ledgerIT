import { analyzeChatMessage } from "../services/aiService.js";
import Transaction from "../model/transactions.js";
import reminder from "../model/reminders.js";
import user from "../model/users.js";

export const processChat = async (req, res, next) => {
    try {
        const { message } = req.body;
        if (!message) {
            return res.status(400).json({
                success: false,
                error: "Message is required"
            })
        };

        const analysis = await analyzeChatMessage(message);

        if (analysis.actionType === "record_transaction") {
            const transactionId = await Transaction.create({
                user_id: req.user.id, //to be changed
                type: analysis.transactionType,
                contact_name: analysis.contactName,
                amount: analysis.amount,
                description: analysis.description || null,
            })

            if (analysis.reminderRequired === true) {
                const intervalDays = analysis.reminderIntervalDays || 7;

                const nextReminderDate = new Date();
                nextReminderDate.setDate(nextReminderDate.getDate() + intervalDays);

                await reminder.create({
                    user_id: req.user.id,
                    transaction_id: transactionId,
                    contact_name: analysis.contactName,
                    contact_phone: analysis.contactPhone || null,
                    amount: analysis.amount,
                    interval_days: intervalDays,
                    next_reminder_date: nextReminderDate,
                })
            }
            return res.status(201).json({
                success: true,
                action: "record_transaction",
                data: { transactionId, ...analysis }
            })
        };

        if (analysis.actionType === "get_summary") {
            const userID = req.user.id;

            const [transactions, summary] = await Promise.all([
                Transaction.findTransactionByID(userID),
                Transaction.getFinancialSummary(userID)
            ]);

            return res.status(200).json({
                success: true,
                action: "get_summary",
                summary,
                transactions
            });
        };

        return res.status(200).json({
            success: false,
            action: "unknown",
            message: "I didn't quite catch that. Try saying 'I lent $15 to Ravi for lunch'."
        })
    } catch (e) {
        next(e);
    }
}