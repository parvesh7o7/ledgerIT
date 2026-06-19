import "./About.css";
function About() {
    return (
        <>
            <div className="hero-section relative flex flex-col lg:flex-row items-center justify-center min-h-screen w-full bg-[#050507] px-10 md:px-20 lg:px-28 py-20 gap-30 lg:gap-50 overflow-hidden">
                <img src="../assets/background_galaxy.png" alt="background" className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none" />
                <div className="left w-full lg:w-[30%] shrink-0 relative z-10" >
                    <img src="../assets/about.png" alt="LedgeIT" className="w-200 h-150 rounded-2xl object-cover drop-shadow-[0_0_20px_rgba(155,24,231,0.2)] border border-white/5" />
                </div>
                <div className="right flex flex-col gap-7 relative z-10">
                    <h1 className="font-[Humane] text-[15rem] md:text-[9rem] lg:text-[20rem] font-black uppercase leading-[0.82] tracking-wide text-white drop-shadow-[0_4px_30px_rgba(255,255,255,0.06)]">LedgeIT</h1>
                    <p className="text-sm md:text-base font-bold uppercase tracking-[0.25em] text-red-500 drop-shadow-[0_0_8px_rgba(255,0,0,0.8)]">"We built the ledger that texts."</p>
                    <p className="text-xs md:text-sm leading-relaxed text-white/40 uppercase tracking-[0.15em] max-w-md">LedgeIT is your smart, conversational micro-finance ledger designed to make tracking IOUs effortless. Stop wasting time with rigid forms—simply state what you lent or borrowed, and our AI automatically converts your words into structured data. With built-in intelligent tracking, LedgeIT ensures you always have complete, stress-free control over your dynamic financial records.</p>
                </div>
            </div>

            <div className="offer-section relative w-full bg-[#050507] px-10 md:px-20 lg:px-28 py-24 flex flex-col items-center justify-center min-h-screen overflow-hidden">
                <img src="../assets/background_galaxy.png" alt="background" className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none opacity-80 transform scale-y-[-1]" />

                <h2 className="font-[Humane] text-[8rem] md:text-[6rem] lg:text-[12rem] font-black uppercase leading-[0.82] tracking-wide text-white drop-shadow-[0_4px_30px_rgba(255,255,255,0.06)] relative z-10 mb-20 text-center">
                    What do we offer?
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12 w-full max-w-7xl relative z-10">
                    {/* Feature 1 */}
                    <div className="group relative flex flex-col justify-between p-8 md:p-10 bg-[#0c0c12]/60 hover:bg-[#12121e]/80 border border-white/5 hover:border-purple-500/20 rounded-3xl backdrop-blur-md shadow-2xl transition-all duration-300 gap-8 overflow-hidden">
                        <div className="absolute -right-16 -top-16 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl group-hover:bg-purple-500/20 transition-all duration-300 pointer-events-none" />
                        <div className="flex flex-col gap-6">
                            <span className="text-5xl md:text-6xl font-black text-purple-500/20 group-hover:text-purple-500/40 transition-colors duration-300 font-[Humane] tracking-wider">01</span>
                            <h3 className="text-2xl font-bold text-white tracking-wide leading-snug">The Conversational Ledger (Statement-to-Data)</h3>

                            <div className="flex flex-col gap-2">
                                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-red-500/90 drop-shadow-[0_0_8px_rgba(239,68,68,0.3)]">The Pitch</span>
                                <p className="text-xs md:text-sm leading-relaxed text-white/80">
                                    We replaced forms with a conversation. The core of LedgeIT is our advanced Natural Language Processing (NLP) engine. You don't have to fill out clunky input fields; you just speak or type a normal sentence.
                                </p>
                            </div>

                            <div className="flex flex-col gap-2 mt-2 border-t border-white/5 pt-4">
                                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.3)]">What it does</span>
                                <p className="text-xs md:text-sm leading-relaxed text-white/50">
                                    Simply enter a statement like, <span className="text-cyan-300 italic">"I gave 30$ to Josh for his party."</span> LedgeIT instantly parses this sentence, extracts the key data points—the person (Josh), the amount ($30.00), the type (Lent), and the purpose (Party)—and automatically records it in your structured ledger.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Feature 2 */}
                    <div className="group relative flex flex-col justify-between p-8 md:p-10 bg-[#0c0c12]/60 hover:bg-[#12121e]/80 border border-white/5 hover:border-cyan-500/20 rounded-3xl backdrop-blur-md shadow-2xl transition-all duration-300 gap-8 overflow-hidden">
                        <div className="absolute -right-16 -top-16 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl group-hover:bg-cyan-500/20 transition-all duration-300 pointer-events-none" />
                        <div className="flex flex-col gap-6">
                            <span className="text-5xl md:text-6xl font-black text-cyan-500/20 group-hover:text-cyan-500/40 transition-colors duration-300 font-[Humane] tracking-wider">02</span>
                            <h3 className="text-2xl font-bold text-white tracking-wide leading-snug">Intuitively Structured Ledger & Summary</h3>

                            <div className="flex flex-col gap-2">
                                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-red-500/90 drop-shadow-[0_0_8px_rgba(239,68,68,0.3)]">The Pitch</span>
                                <p className="text-xs md:text-sm leading-relaxed text-white/80">
                                    A crystal-clear view of your financial dynamic. We don't just record data; we visualize your relationships with money.
                                </p>
                            </div>

                            <div className="flex flex-col gap-2 mt-2 border-t border-white/5 pt-4">
                                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-400 drop-shadow-[0_0_8px_rgba(52,211,153,0.3)]">What it does</span>
                                <p className="text-xs md:text-sm leading-relaxed text-white/50">
                                    The dashboard instantly visualizes your "Total Lent" and "Total Borrow" metrics using vibrant color-coding (<span className="text-cyan-400 font-semibold">Electric Cyan</span> for Lent, <span className="text-emerald-400 font-semibold">Emerald Green</span> for Borrow). This summary, paired with a detailed, filterable transaction table and dynamic graph, ensures you always know exactly where you stand with everyone you interact with.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Feature 3 */}
                    <div className="group relative flex flex-col justify-between p-8 md:p-10 bg-[#0c0c12]/60 hover:bg-[#12121e]/80 border border-white/5 hover:border-emerald-500/20 rounded-3xl backdrop-blur-md shadow-2xl transition-all duration-300 gap-8 overflow-hidden">
                        <div className="absolute -right-16 -top-16 w-40 h-40 bg-emerald-500/10 rounded-full blur-3xl group-hover:bg-emerald-500/20 transition-all duration-300 pointer-events-none" />
                        <div className="flex flex-col gap-6">
                            <span className="text-5xl md:text-6xl font-black text-emerald-500/20 group-hover:text-emerald-500/40 transition-colors duration-300 font-[Humane] tracking-wider">03</span>
                            <h3 className="text-2xl font-bold text-white tracking-wide leading-snug">Relationship-First Organization</h3>

                            <div className="flex flex-col gap-2">
                                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-red-500/90 drop-shadow-[0_0_8px_rgba(239,68,68,0.3)]">The Pitch</span>
                                <p className="text-xs md:text-sm leading-relaxed text-white/80">
                                    Understand your money through the people in your life. LedgeIT organizes your records around people, not just numbers.
                                </p>
                            </div>

                            <div className="flex flex-col gap-2 mt-2 border-t border-white/5 pt-4">
                                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.3)]">What it does</span>
                                <p className="text-xs md:text-sm leading-relaxed text-white/50">
                                    You can easily view your transaction history filtered by person. Want to know the overall balance with <span className="text-cyan-300 italic">'Josh'</span>? One click shows you everything you've ever recorded between the two of you, giving you an overview of your financial dynamic over time.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <footer className="w-full bg-[#030303] border-t border-white/5 px-10 md:px-20 lg:px-28 py-10 relative z-10 flex flex-col gap-8">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                    {/* Brand and Copyright */}
                    <div className="flex flex-col gap-1">
                        <span className="font-sans text-3xl font-semibold text-white tracking-[-0.1rem]">LedgeIT</span>
                        <span className="text-[10px] text-white/40 uppercase tracking-[0.1em]">© {new Date().getFullYear()} LedgeIT. All rights reserved.</span>
                    </div>

                    {/* Socials / Connect */}
                    <div className="flex flex-wrap gap-6 items-center">
                        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=parveshsharma8910@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs uppercase tracking-widest text-white/50 hover:text-white transition duration-200">Email</a>
                        <a href="https://github.com/parvesh7o7" target="_blank" rel="noopener noreferrer" className="text-xs uppercase tracking-widest text-white/50 hover:text-white transition duration-200">GitHub</a>
                        <a href="https://www.linkedin.com/in/parvesh-kumar-sharma-5b35332a5/overlay/about-this-profile/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3B61cKsdd9Qw%2BhrWbYbC3Fow%3D%3D" target="_blank" rel="noopener noreferrer" className="text-xs uppercase tracking-widest text-white/50 hover:text-white transition duration-200">LinkedIn</a>
                        <a href="https://www.instagram.com/parvesh_7o7/#" target="_blank" rel="noopener noreferrer" className="text-xs uppercase tracking-widest text-white/50 hover:text-white transition duration-200">Instagram</a>
                    </div>
                </div>
                {/* Legal T&C */}
                <div className="border-t border-white/20 pt-6">
                    <p className="text-[10px] leading-relaxed text-white/50 uppercase tracking-[0.08em] text-justify font-sans">
                        By using LedgeIT, you agree that this platform is a digital record-keeping tool for personal use to track conversational transactions, and does not provide financial or banking services. Users are solely responsible for the accuracy of their entered statements, data inputs, and the management of their personal records. All user data, credentials, and ledger details are processed in accordance with the Information Technology Act, 2000, and Indian privacy regulations. LedgeIT disclaims any liability for financial disputes, data loss, or misunderstandings between users arising from the platform's summaries, tables, or relationship tracking. Any legal disputes arising out of your use of this service shall be governed by the laws of India and subject to the exclusive jurisdiction of the courts in Jaipur.
                    </p>
                </div>
            </footer>
        </>
    )
};

export default About;