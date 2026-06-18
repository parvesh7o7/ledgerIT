import "./About.css";
function About() {
    return (
        <>
            <div className="hero-section flex flex-col lg:flex-row items-center justify-center min-h-screen w-full bg-[#050507] px-10 md:px-20 lg:px-28 py-20 gap-30 lg:gap-50 overflow-hidden">
                <div className="left w-full lg:w-[30%] shrink-0" >
                    <img src="../assets/about.png" alt="LedgeIT" className="w-200 h-200 rounded-xl object-cover shadow-[0_20px_80px_-15px_rgba(0,0,0,0.8)] border border-white/5" />
                </div>
                <div className="right flex flex-col gap-7">
                    <h1 className="font-[Humane] text-[15rem] md:text-[9rem] lg:text-[20rem] font-black uppercase leading-[0.82] tracking-wide text-white drop-shadow-[0_4px_30px_rgba(255,255,255,0.06)]">LedgeIT</h1>
                    <p className="text-sm md:text-base font-bold uppercase tracking-[0.25em] text-red-500">"We built the ledger that texts."</p>
                    <p className="text-xs md:text-sm leading-relaxed text-white/40 uppercase tracking-[0.15em] max-w-md">LedgeIT is your smart, conversational micro-finance ledger designed to make tracking IOUs effortless. Stop wasting time with rigid forms—simply state what you lent or borrowed, and our AI automatically converts your words into structured data. With built-in intelligent tracking, LedgeIT ensures you always have complete, stress-free control over your dynamic financial records.</p>
                </div>
            </div>
        </>
    )
};

export default About;