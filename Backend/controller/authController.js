import { OAuth2Client } from "google-auth-library";
import jwt from "jsonwebtoken";
import user from "../model/users.js";

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

export const googleLogin = async (req, res, next) => {
    try {
        const { idToken } = req.body;
        if (!idToken) {
            return res.status(400).json({
                success: false,
                error: "Google ID Token is required"
            })
        }

        const ticket = await client.verifyIdToken({
            idToken,
            audience: process.env.GOOGLE_CLIENT_ID,
        });

        const payload = ticket.getPayload();
        if (!payload) {
            return res.status(400).json({
                success: false,
                error: "Invalid Google Token!"
            })
        }
        const { sub, email, name, picture } = payload;

        await user.create({
            id: sub,
            name,
            email,
            avatar_url: picture || null
        })

        const token = jwt.sign(
            {
                id: sub,
                email,
                name,
                avatar_url: picture
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "7d"
            }
        )

        return res.status(200).json({
            success: true,
            message: "Authentication successful",
            token,
            user: {
                id: sub,
                name,
                email,
                avatar_url: picture
            }
        })
    } catch (e) {
        console.log("OAuth Authentication error: ", e);
        return res.status(401).json({
            success: false,
            error: "Authentication failed. Invalid google id token"
        })
    }
}