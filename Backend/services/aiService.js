import { z } from "zod";
import { ChatGoogleGenerativeAI } from "@langchain/google-genai"
import { ChatPromptTemplate } from "@langchain/core/prompts";
//zod schema building
const ledgerActionSchema = z.object({
    actionType: z.enum(["record_transaction", "get_summary", "unknown"]).describe("Whether the user wants to record a transaction, view the summary, or if the intent is unclear"),
    transactionType: z.enum(["debit", "credit"]).optional().describe("debit if user lent money or paid someone, credit if they borrowed or received money"),
    contactName: z.string().optional().describe("The name of person involved in the transaction"),
    amount: z.number().optional().describe("Monetary amount of the transcation"),
    description: z.string().optional().describe("Reason or the context of the transcation (eg. dinner, tickets)"),
})

//ai model creation
const model = new ChatGoogleGenerativeAI({
    model: "gemini-2.5-flash",
    apiKey: process.env.GEMINI_API_KEY
});

//prompt creation
const prompt = ChatPromptTemplate.fromMessages([
    ["system", "You are an AI assistant for a personal ledger. Extract the transaction action details from the user's input."],
    ["human", "{input}"]
]);

const structuredModel = model.withStructuredOutput(ledgerActionSchema);

const chain = model.pipe(structuredModel)

export const analyzeChatMessage = async (userText) => {
    return await chain.invoke({ input: userText });
}