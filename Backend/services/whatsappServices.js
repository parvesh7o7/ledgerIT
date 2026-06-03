import twilio from "twilio";
const client = twilio(process.env.TWILIO_SID, process.env.TWILIO_TOKEN);

export const sendMessage = async (to, message) => {
    try {
        const response = await client.messages.create({
            from: process.env.TWILIO_WHATSAPP_NUMBER,
            to: `whatsapp:${to}`,
            body: message
        })

        return response;
    } catch (e) {
        console.log("Error sending message. ", e);
        throw e;
    }
}