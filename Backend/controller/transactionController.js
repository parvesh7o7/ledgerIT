import Transaction from "../model/transactions.js";

export const createTransaction = async (req, res, next) => {
    try {
        const { type, contact_name, amount, description } = req.body;
        if (!type || !contact_name || !amount) {
            return res.status(400).json({
                success: false,
                error: "Type or ContactName or Amount field are mandatory!"
            });
        };
        if (type !== "debit" && type !== "credit") {
            return res.status(400).json({
                success: false,
                error: "Type must be debit or credit"
            });
        }

        const transaction_ID = Transaction.create({
            user_id: req.user.id,
            type,
            contact_name,
            amount,
            description: description || null
        });

        
        return res.status(201).json({
            success: true,
            message: "Transaction recorded successfully!"
        });
    } catch (e) {
        next(e);
    }
};

export const getDashboardSummary = async (req, res, next) => {
    try {
        const userID = req.user.id;

        const [transactions, summary] = await Promise.all([
            Transaction.findTransactionByID(userID),
            Transaction.getFinancialSummary(userID)
        ]);

        return res.status(200).json({
            success: true,
            summary,
            transactions
        });

    } catch (error) {
        next(error);
    }
};
