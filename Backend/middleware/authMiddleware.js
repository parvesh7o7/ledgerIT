import jwt from "jsonwebtoken";

export const authenticateToken = async (req, res, next) => {
    const authHeader = req.header("authorization");
    const token = authHeader && authHeader.split(" ")[1];

    if (!token) {
        return res.status(401).json({
            success: false,
            error: "Access denied. No auth token provided"
        })
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();

    } catch (e) {
        return res.status(403).json({
            success: false,
            error: "Invalid or expired session token"
        })
    }
}