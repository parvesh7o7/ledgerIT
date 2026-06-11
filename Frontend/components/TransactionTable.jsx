import { useState, useMemo } from "react";

function TransactionTable() {
    const FILTERS = ["all", "lent", "borrow", "settled"];
    const table_heads = ["#", "Person", "Type", "Amount", "Date", "Note", "Status"];
    const transactions = [
        { id: 1, name: "Joshua Reeves", profile_url: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", type: "lent", amount: 700, date: "Jun 08, 2026", note: "Groceries & fuel", status: "pending" },
        { id: 2, name: "Amara Osei", profile_url: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", type: "lent", amount: 1500, date: "Jun 05, 2026", note: "Medical bills", status: "pending" },
        { id: 3, name: "James Liu", profile_url: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", type: "borrow", amount: 60, date: "Jun 04, 2026", note: "Dinner split", status: "settled" },
        { id: 4, name: "Priya Nair", profile_url: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", type: "lent", amount: 300, date: "Jun 01, 2026", note: "Bus pass", status: "pending" },
        { id: 5, name: "Priya sain", profile_url: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", type: "lent", amount: 800, date: "Jun 01, 2026", note: "gate pass", status: "settled" },
        { id: 6, name: "Sanjana", profile_url: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", type: "lent", amount: 800, date: "Jun 01, 2026", note: "gate pass", status: "settled" },
        { id: 7, name: "Pradhan", profile_url: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", type: "lent", amount: 800, date: "Jun 01, 2026", note: "gate pass", status: "settled" }
    ];

    const activeTable = transactions;
    const [activeFilter, setActiveFilter] = useState("all");
    const filtered = useMemo(() => {
        return activeFilter === "all" ?
            transactions :
            activeTable.filter((t) => {
                if (activeFilter != "settled") {
                    return t.type === activeFilter;
                } else {
                    return t.status === "settled";
                }
            })
    }, [activeFilter]);

    const [currentPage, setCurrentPage] = useState(1);
    const PAGE_SIZE = 5;
    const TOTAT_PAGES = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
    const paginated = filtered.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);
    const emptyRowsCount = PAGE_SIZE - paginated.length;
    return (
        <>
            <div className="table-container w-full max-w-full px-9 md:px-8 mb-24 z-10 relative bg-slate-950/40 backdrop-blur-3xl border border-slate-800/80 rounded-3xl p-6 md:p-8 shadow-2xl">
                <div className="header flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8 pb-6 border-b border-slate-800/80">
                    <div className="header-text">
                        <p className="font-display text-2xl font-bold text-white mb-1">All transactions</p>
                        <p className="font-sans text-lg text-slate-400 font-medium">{transactions.length} records</p>
                    </div>
                    <div className="header-options flex bg-slate-900/80 p-1 rounded-xl border border-slate-800/80 w-full sm:w-auto overflow-x-auto">
                        {FILTERS.map((f) => (
                            <button className={`px-4 py-1.5 rounded-lg text-lg font-bold tracking-wide uppercase transition-all duration-200 cursor-pointer whitespace-nowrap ${activeFilter === f
                                ? "bg-slate-800/80 text-white border border-slate-700/60"
                                : "text-slate-400 hover:text-white border border-transparent"
                                }`}
                                key={f}
                                onClick={() => {
                                    setActiveFilter(f);
                                    setCurrentPage(1);
                                }}
                            >{f}</button>
                        ))}
                    </div>
                </div>

                <div className="table-main overflow-x-auto">
                    <table className="w-full border-collapse text-left">
                        <thead>
                            <tr className="border-b border-slate-800/80">
                                {table_heads.map((t) => (
                                    <th key={t} className="pb-4 text-xl font-bold text-slate-500 tracking-wider uppercase first:pl-4">{t}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-800/40">
                            {paginated.map((t) => (

                                <tr key={t.id} className="group hover:bg-slate-900/20 transition-all duration-150">
                                    {/* serialnumber */}
                                    <td className="py-4 text-lg font-semibold text-slate-500 pl-4">{t.id}</td>

                                    {/* name */}
                                    <td className="py-4">
                                        <div className="profile flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full overflow-hidden border border-slate-700/60 bg-slate-800/80 shadow-inner flex items-center justify-center text-lg font-bold text-slate-300">
                                                <img
                                                    src={t.profile_url}
                                                    alt="image"
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                            <span className="font-sans text-lg font-semibold text-slate-100 group-hover:text-white transition-colors duration-150">{t.name}</span>
                                        </div>
                                    </td>

                                    {/* type */}
                                    <td className="py-4">
                                        <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-lg font-semibold uppercase tracking-wider ${t.type === 'lent'
                                            ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                                            : 'bg-rose-500/10 text-rose-400 border border-rose-500/20'
                                            }`}>
                                            {t.type}
                                        </span>
                                    </td>

                                    {/* amount */}
                                    <td className="py-4 font-display text-lg font-bold">
                                        <span className={t.type === 'lent' ? 'text-emerald-400' : 'text-rose-400'}>
                                            {t.type === 'lent' ? '+' : '-'}${t.amount.toLocaleString()}
                                        </span>
                                    </td>

                                    {/* date */}
                                    <td className="py-4 text-lg font-medium text-slate-400 font-sans">{t.date}</td>

                                    {/* description */}
                                    <td className="py-4 text-lg text-slate-300 font-sans max-w-xs truncate">{t.note}</td>

                                    {/* status */}
                                    <td className="py-4">
                                        <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xl text-lg font-bold uppercase ${t.status === 'settled'
                                            ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                                            : 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                                            }`}>
                                            <span className={`w-1.5 h-1.5 rounded-full ${t.status === 'settled' ? 'bg-emerald-400' : 'bg-amber-400 animate-pulse'
                                                }`} />
                                            {t.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                            {emptyRowsCount > 0 && Array.from({ length: emptyRowsCount }).map((_, index) => (
                                <tr key={`empty-${index}`} className="h-18.25">
                                    <td colSpan={7}>&nbsp;</td>
                                </tr>
                            ))}
                        </tbody>
                        <tr>
                            <td colSpan={7} className="text-right ">
                                <div className="page-button inline-flex rounded-lg bg-slate-900/80 backdrop-blur-3xl w-xl justify-between border border-slate-800/80 h-15 mt-2">
                                    <button className="text-xl cursor-pointer text-center w-sm text-slate-400 hover:text-white transition-all duration-200 hover:tracking-widest disabled:text-slate-600 disabled:cursor-default disabled:tracking-normal" onClick={() => setCurrentPage(prev => prev - 1)} disabled={currentPage === 1}>Previous</button>
                                    <div className="hidden md:block w-px bg-slate-800/80 self-stretch z-10" />
                                    <div className="block md:hidden h-px bg-slate-800/80 w-full z-10" />
                                    <button className="text-xl cursor-pointer text-center w-sm text-slate-400 hover:text-white transition-all duration-200 hover:tracking-widest disabled:text-slate-600 disabled:cursor-default disabled:tracking-normal" onClick={() => setCurrentPage(prev => prev + 1)} disabled={currentPage === TOTAT_PAGES}>Next</button>
                                </div>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </>
    )
}

export default TransactionTable;