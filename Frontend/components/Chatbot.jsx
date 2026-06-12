import "./Chatbot.css"
import { Send } from 'lucide-react';
function Chatbot() {
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

                <div className="flex-1 mt-4 rounded-2xl bg-blue-800/5 border border-slate-800/40 shadow-inner overflow-y-auto p-4">

                </div>

                <div className="mt-3 rounded-2xl bg-slate-950/50 border border-slate-800/60 focus-within:border-sky-500/40 transition-colors duration-200">
                    <form className="flex items-center gap-4 p-2">
                        <input type="text" placeholder="Enter your query" className="w-full bg-transparent outline-none py-2 px-3 text-slate-100 placeholder-slate-500 text-lg" />
                        <button className="p-3 bg-linear-to-r from-[#00F2FE] via-[#38BDF8] to-[#A18CD1] text-[#07080d] rounded-full cursor-pointer hover:scale-95 transition-transform duration-200"><Send size={20} /></button>
                    </form>
                </div>
            </div >
        </>
    )
}

export default Chatbot;