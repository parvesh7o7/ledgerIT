import { useState, useRef, useEffect } from "react";
import "./Chatbot.css"
import { Key, Send } from 'lucide-react';
function Chatbot({ onTransactionRecorded }) {
    const [message, setMessage] = useState([]);
    const [input, setInput] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);

    useEffect(() => {
        if (message.length > 0) {
            messagesEndRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
        }
    }, [message]);

    const handleSendButton = async () => {
        // don't send empty messages
        if (!input.trim()) return;

        const userMessage = input.trim();

        // add user message
        setMessage(prev => [...prev, {
            id: Date.now(),
            role: "user",
            text: userMessage
        }]);

        // clear input
        setInput("");
        setIsTyping(true);

        try {
            const token = localStorage.getItem("token");
            const res = await fetch("http://localhost:3000/api/chat/message", {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ message: userMessage })
            });

            const data = await res.json();

            let botReply = "";

            if (data.success && data.action === "record_transaction") {
                const d = data.data;
                const typeLabel = d.transactionType === "debit" ? "lent to" : "borrowed from";
                botReply = `✅ ${d.contactName} ${typeLabel === "lent to" ? "owes you" : "gave you"} $${d.amount}${d.description ? ` for ${d.description}` : ""}. Transaction recorded successfully!`;
                // Refresh dashboard to update transaction table
                if (onTransactionRecorded) onTransactionRecorded();
            } else if (data.success && data.action === "get_summary") {
                botReply = `📊 Here's your summary:\n• Total Lent: $${data.summary.total_lent}\n• Total Owed: $${data.summary.total_owed}\n• Transactions: ${data.transactions.length} records`;
            } else {
                botReply = data.message || data.error || "Something went wrong. Please try again.";
            }

            setMessage(prev => [...prev, {
                id: Date.now() + 1,
                role: "bot",
                text: botReply
            }]);
        } catch (error) {
            setMessage(prev => [...prev, {
                id: Date.now() + 1,
                role: "bot",
                text: `❌ Error: ${error.message || "Could not connect to the server."}`
            }]);
        } finally {
            setIsTyping(false);
        }
    };

    return (
        <>
            <div className="flex flex-col h-screen w-full p-6 bg-[#07080d] font-sans">
                <div className="flex w-full border-b border-slate-800/60 items-center gap-4 pb-4">
                    <div>
                        <img src="https://images.unsplash.com/photo-1586374579358-9d19d632b6df?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Bot" className="h-12 w-12 rounded-full object-cover border border-slate-700/50" />
                    </div>
                    <div className="text-left">
                        <p className="font-display bg-linear-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent text-2xl tracking-normal font-black">Querier - Manages your query</p>
                        <span className="text-emerald-400 text-sm tracking-tight font-medium">Online - replies instantly</span>
                    </div>
                </div>

                <div className="flex-1 min-h-0 mt-4 rounded-2xl bg-blue-800/5 border border-slate-800/40 shadow-inner overflow-y-auto p-4 scrollbar-thin [scrollbar-color:#a18cd1_rgba(15,23,42,0.3)] [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-slate-900/30 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-purple-400/70 hover:[&::-webkit-scrollbar-thumb]:bg-purple-300">
                    {message.map((msg) => (
                        <div className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`} key={msg.id}>
                            <div className={`px-4 py-2 mt-3 rounded-2xl max-w-[75%] text-2xl whitespace-pre-line
                                    ${msg.role === "user"
                                    ? "bg-purple-600 text-white rounded-br-sm"
                                    : "bg-slate-100 text-slate-900 rounded-bl-sm"
                                }`}>{msg.text}</div>
                        </div>
                    ))}
                    {isTyping && (
                        <div className="flex justify-start">
                            <div className="px-4 py-3 mt-3 rounded-2xl bg-slate-100 text-slate-900 rounded-bl-sm text-2xl flex items-center gap-1">
                                <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce [animation-delay:0ms]"></span>
                                <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce [animation-delay:150ms]"></span>
                                <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce [animation-delay:300ms]"></span>
                            </div>
                        </div>
                    )}
                    <div ref={messagesEndRef} />
                </div>

                <div className="mt-3 rounded-2xl bg-slate-950/50 border border-slate-800/60 focus-within:border-sky-500/40 transition-colors duration-200">
                    <form className="flex items-center gap-4 p-2" onSubmit={(e) => {
                        e.preventDefault();
                        handleSendButton();
                    }}>
                        <input value={input} type="text" placeholder="Enter your query" className="w-full bg-transparent outline-none py-2 px-3 text-slate-100 placeholder-slate-500 text-lg" onChange={(e) => setInput(e.target.value)} />
                        <button className="p-3 bg-linear-to-r from-[#00F2FE] via-[#38BDF8] to-[#A18CD1] text-[#07080d] rounded-full cursor-pointer hover:scale-95 transition-transform duration-200" type="submit"><Send size={20} /></button>
                    </form>
                </div>
            </div >
        </>
    )
}
export default Chatbot;