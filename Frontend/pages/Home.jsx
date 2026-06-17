import './Home.css';
import Aurora from '../src/component/Aurora.jsx';
import { motion } from "motion/react"
import vdo from '../assets/bg-video.mp4'
import { CirclePlus, CircleMinus } from 'lucide-react';
import { useEffect, useState } from 'react';
import TransactionTable from '../components/TransactionTable.jsx';
function Home({ isLoggedIn }) {
    const handleGetStarted = () => {
        const googleBtn = document.querySelector("#google-signin-btn div[role='button']");
        if (googleBtn) googleBtn.click();
    };

    const [total_lent, setTotalLent] = useState(0);
    const [total_owed, setTotalOwed] = useState(0);
    const [lastLent, setLastLent] = useState(null);
    const [lastBorrowed, setLastBorrowed] = useState(null);
    const [total_customers, setTotalCustomers] = useState(0);
    const [netBalance, setNetBalance] = useState(0);
    const [customerGrowth, setCustomerGrowth] = useState(0);
    const [transactions_data, setTransactionsData] = useState([]);

    useEffect(() => {
        if (!isLoggedIn) {
            console.log("User not logged in");
            return;
        };

        const fetchDashboard = async () => {
            try {
                const token = localStorage.getItem("token");
                const res = await fetch("http://localhost:3000/api/transactions/dashboard", {
                    method: "GET",
                    headers: {
                        "Authorization": `Bearer ${token}`,
                        "Content-Type": "application/json"
                    }
                });

                const data = await res.json();

                if (data.success) {
                    setTotalLent(data.summary.total_lent || 0);
                    setTotalOwed(data.summary.total_owed || 0);

                    // Get the most recent debit (lent) and credit (borrowed) transactions
                    const lastDebit = data.transactions.find(t => t.type === 'debit');
                    const lastCredit = data.transactions.find(t => t.type === 'credit');
                    setLastLent(lastDebit || null);
                    setLastBorrowed(lastCredit || null);

                    const customerLength = data.transactions.length;
                    setTotalCustomers(customerLength);

                    const net = (data.summary.total_lent || 0) - (data.summary.total_owed || 0);
                    setNetBalance(net);

                    setCustomerGrowth(data.customerGrowth.percent_change || 0);

                    setTransactionsData(data.transactions);
                } else {
                    console.error("Dashboard fetch failed:", data.error);
                }
            } catch (error) {
                console.error("Error fetching dashboard:", error);
            }
        };

        fetchDashboard();
    }, [isLoggedIn])

    return (
        <>
            <div className="welcome-section relative h-screen">
                <div className="welcome-bg absolute w-full h-full -z-1">
                    <Aurora />
                </div >
                <motion.div className="welcome-title h-full w-full absolute flex flex-col justify-center items-center"
                    initial={{
                        opacity: 0,
                        scale: 0.8
                    }}
                    whileInView={{
                        opacity: 1,
                        scale: 1
                    }}
                    transition={{
                        duration: 1,
                        ease: "easeInOut"
                    }}
                >
                    <h1 className="text-7xl font-bold text-center"
                    >Welcome to <span className='bg-linear-to-r from-[#00F2FE] via-[#38BDF8] to-[#A18CD1] py-2 text-transparent bg-clip-text block'>the World of LedgeIT</span></h1>
                    <p className="text-center text-xl font-bold italic m-8 text-gray-400">Track who owes what, automatically.<br />No spreadsheets required.</p>
                    {!isLoggedIn && (
                        <button
                            className='bg-[#00368d] rounded-3xl p-3 text-2xl w-xl font-semibold text-[#E0F2FE] hover:bg-[#004dc9] hover:scale-95 transition duration-200 ease-out'
                            onClick={handleGetStarted}
                        >Get Started</button>
                    )}
                </motion.div>
            </div >
            {isLoggedIn && (
                <>
                    <motion.div className="dashboard-container relative min-h-screen w-full flex flex-col items-center py-20 px-6 overflow-hidden"
                        initial={{
                            opacity: 0
                        }}
                        whileInView={{
                            opacity: 1
                        }}
                        transition={{
                            ease: "easeIn",
                            duration: 1
                        }}
                    >
                        {/* Background Video Wrapper */}
                        <div className="absolute inset-0 -z-10 w-full h-full overflow-hidden">
                            <video src={vdo} autoPlay loop muted className='w-full h-full object-cover opacity-20'></video>
                        </div>

                        {/* Dark Vignette/Gradient Overlay */}
                        <div className="absolute inset-0 -z-10 bg-linear-to-b from-[#07080d] via-transparent to-[#07080d] pointer-events-none"></div>

                        {/* Dashboard Title & Subtitle */}
                        <div className="text-center mb-12 z-10">
                            <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight mb-3 bg-linear-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
                                Financial Dashboard
                            </h2>
                            <p className="font-sans text-slate-400 text-lg max-w-xl mx-auto">
                                Overview of your current ledger assets, liabilities, and recent activity.
                            </p>
                        </div>

                        {/* Cards Container Stack */}
                        <div className="flex flex-col gap-8 w-full max-w-7xl z-10">
                            {/* Total Lent Card */}
                            <div className="group relative flex flex-col md:flex-row justify-between items-stretch p-9 bg-linear-to-br from-emerald-500/10 to-slate-950/80 hover:from-emerald-500/15 hover:to-slate-950/90 border border-emerald-500/20 hover:border-emerald-500/40 rounded-3xl backdrop-blur-2xl shadow-2xl hover:shadow-emerald-500/5 transition-all duration-300 gap-8 overflow-hidden w-full h-60">
                                {/* Background radial highlight glow */}
                                <div className="absolute -right-16 -top-16 w-40 h-40 bg-emerald-500/10 rounded-full blur-3xl group-hover:bg-emerald-500/15 transition-all duration-300 pointer-events-none" />

                                {/* Left Half */}
                                <div className="flex-1 flex flex-col justify-center gap-6 z-10">
                                    <div className="flex justify-between items-center w-full">
                                        <span className="font-display text-slate-400 text-xl font-medium tracking-wide">Total Lent</span>
                                        <span className="px-3 py-1 rounded-full text-30 font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                                            Owed to you
                                        </span>
                                    </div>


                                    <div className="flex justify-between items-center w-full">
                                        <span className="font-display text-5xl md:text-6xl font-extrabold tracking-tight text-white group-hover:text-emerald-300 transition-colors duration-300">${total_lent}</span>
                                        <div className="p-3.5 bg-emerald-500/10 rounded-2xl border border-emerald-500/30 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-black transition-all duration-300 cursor-pointer shadow-lg shadow-emerald-950/20">
                                            <CirclePlus size={26} strokeWidth={2.5} />
                                        </div>
                                    </div>
                                </div>

                                {/* Divider Line */}
                                <div className="hidden md:block w-px bg-slate-800/80 self-stretch z-10" />
                                <div className="block md:hidden h-px bg-slate-800/80 w-full z-10" />

                                {/* Right Half */}
                                <div className="flex-1 flex flex-col justify-center gap-3 md:pl-8 z-10">
                                    <span className="text-70 font-bold text-slate-500 tracking-wider uppercase">Recent Activity</span>
                                    <div className="flex items-center gap-2.5 bg-slate-900/45 border border-slate-800/50 rounded-2xl p-4 shadow-inner h-20">
                                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                                        <span className="font-sans text-slate-200 text-xl font-semibold">{lastLent ? `$${lastLent.amount} to ${lastLent.contact_name}` : 'No activity yet'}</span>
                                        <span className="font-sans text-[15px] text-slate-400 ml-auto font-bold">{lastLent ? 'Active' : '—'}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Total Borrow Card */}
                            <div className="group relative flex flex-col md:flex-row justify-between items-stretch p-8 bg-linear-to-br from-rose-500/10 to-slate-950/80 hover:from-rose-500/15 hover:to-slate-950/90 border border-rose-500/20 hover:border-rose-500/40 rounded-3xl backdrop-blur-2xl shadow-2xl hover:shadow-rose-500/5 transition-all duration-300 gap-8 overflow-hidden w-full h-60">
                                {/* Background radial highlight glow */}
                                <div className="absolute -right-16 -top-16 w-40 h-40 bg-rose-500/10 rounded-full blur-3xl group-hover:bg-rose-500/15 transition-all duration-300 pointer-events-none" />

                                {/* Left Half */}
                                <div className="flex-1 flex flex-col justify-center gap-6 z-10">
                                    <div className="flex justify-between items-center w-full">
                                        <span className="font-display text-slate-400 text-xl font-medium tracking-wide">Total Borrow</span>
                                        <span className="px-3 py-1 rounded-full text-30 font-semibold bg-rose-500/10 text-rose-400 border border-rose-500/20">
                                            Owed to others
                                        </span>
                                    </div>



                                    <div className="flex justify-between items-center w-full">
                                        <span className="font-display text-5xl md:text-6xl font-extrabold tracking-tight text-white group-hover:text-rose-300 transition-colors duration-300">${total_owed}</span>
                                        <div className="p-3.5 bg-rose-500/10 rounded-2xl border border-rose-500/30 text-rose-400 group-hover:bg-rose-500 group-hover:text-black transition-all duration-300 cursor-pointer shadow-lg shadow-rose-950/20">
                                            <CircleMinus size={26} strokeWidth={2.5} />
                                        </div>
                                    </div>
                                </div>

                                {/* Divider Line */}
                                <div className="hidden md:block w-px bg-slate-800/80 self-stretch z-10" />
                                <div className="block md:hidden h-px bg-slate-800/80 w-full z-10" />

                                {/* Right Half */}
                                <div className="flex-1 flex flex-col justify-center gap-3 md:pl-8 z-10">
                                    <span className="text-70 font-bold text-slate-500 tracking-wider uppercase">Recent Activity</span>
                                    <div className="flex items-center gap-2.5 bg-slate-900/45 border border-slate-800/50 rounded-2xl p-4 shadow-inner h-20">
                                        <span className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-pulse" />
                                        <span className="font-sans text-slate-200 text-xl font-semibold">{lastBorrowed ? `$${lastBorrowed.amount} from ${lastBorrowed.contact_name}` : 'No activity yet'}</span>
                                        <span className="font-sans text-[15px] text-slate-400 ml-auto font-bold">{lastBorrowed ? 'Pending' : '—'}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Summary Stats Section */}
                        <div className="w-full max-w-7xl z-10 mt-8 mb-16">
                            <div className="bg-slate-50/90 backdrop-blur-xl border border-white/10 rounded-3xl p-5 text-slate-900 shadow-2xl flex flex-col md:flex-row justify-around items-center gap-8 md:gap-4 transition-all duration-300 hover:shadow-white/5 h-70 mt-9">
                                {/* Stat 1: Total Customers */}
                                <div className="flex flex-col items-center text-center px-6">
                                    <span className="text-base font-bold text-slate-500 tracking-wider uppercase mb-2">Total Customers</span>
                                    <span className="font-display text-7xl md:text-6xl font-extrabold text-slate-900">{total_customers}</span>
                                    <span className={`text-lg font-semibold mt-1 font-sans ${customerGrowth >= 0 ? 'text-emerald-600' : 'text-rose-600'}`}>{customerGrowth >= 0 ? '+' : ''}{customerGrowth}% from last month</span>
                                </div>

                                {/* Divider */}
                                <div className="hidden md:block w-px h-16 bg-slate-200" />
                                <div className="block md:hidden h-px w-2/3 bg-slate-200" />

                                {/* Stat 2: Net Balance */}
                                <div className="flex flex-col items-center text-center px-6">
                                    <span className="text-base font-bold text-slate-500 tracking-wider uppercase mb-2">Net Balance</span>
                                    <span className="font-display text-7xl md:text-6xl font-extrabold text-slate-900">{netBalance >= 0 ? '+' : '-'}${Math.abs(netBalance)}</span>
                                    <span className="text-lg text-slate-500 font-semibold mt-1 font-sans">Lent vs. Borrowed</span>
                                </div>

                                {/* Divider */}
                                <div className="hidden md:block w-px h-16 bg-slate-200" />
                                <div className="block md:hidden h-px w-2/3 bg-slate-200" />

                                {/* Stat 3: Total Active Loans */}
                                <div className="flex flex-col items-center text-center px-6">
                                    <span className="text-base font-bold text-slate-500 tracking-wider uppercase mb-2">Active Loans</span>
                                    <span className="font-display text-7xl md:text-6xl font-extrabold text-slate-900">feature soon!</span>
                                    <span className="text-lg text-indigo-600 font-semibold mt-1 font-sans">Currently active</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div className='m-9'>
                        <TransactionTable transactions_data={transactions_data} />
                    </motion.div>
                </>
            )}
        </>
    )
}
export default Home;