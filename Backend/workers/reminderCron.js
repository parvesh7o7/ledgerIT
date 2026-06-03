import cron from "node-cron";
import reminder from "../model/reminders.js";
import { sendMessage } from "../services/whatsappServices.js";

cron.schedule("*/1 * * * *", async () => { //to be changed, timing to check
    console.log("Checking for reminders...");
    try {
        const dueReminders = await reminder.getDueReminder();

        for (const r of dueReminders) {
            const message = `Hi ${r.contact_name}, this is a friendly reminder regarding the outstanding amount of $${r.amount}.`;

            if (r.contact_phone) {
                await sendMessage(r.contact_phone, message);
                console.log(`Reminder sent to ${r.contact_name} at ${r.contact_phone}`);
            }

            await reminder.updateNextDate(r.id, r.interval_days);
        }
    } catch (e) {
        console.log("Failed to run reminder cron job. ", e);
    }
})