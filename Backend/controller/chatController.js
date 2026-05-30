import { analyzeChatMessage } from "../services/aiService.js";
import Transaction from "../model/transactions.js";

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
            const transactionId = Transaction.create({
                user_id: "user123", //to be changed
                type: analysis.transactionType,
                contact_name: analysis.contactName,
                amount: analysis.amount,
                description: analysis.description || null,
            })

            return res.status(201).json({
                success: true,
                action: "record_transaction",
                data: { transactionId, ...analysis }
            })
        };

        if (analysis.actionType === "get_summary") {
            const mockUserId = "user123";

            const [transactions, summary] = await Promise.all([
                Transaction.findTransactionByID(mockUserId),
                Transaction.getFinancialSummary(mockUserId)
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