function TransactionTable() {
    const FILTERS = ["all", "lent", "borrow", "settled"];
    const table_heads = ["#", "Person", "Type", "Amount", "Date", "Note", "Status"];
    const transactions = [
        { id: 1, name: "Joshua Reeves", profile_url: "https://unsplash.com/photos/silhouette-of-man-illustration-2LowviVHZ-E", type: "lent", amount: 700, date: "Jun 08, 2026", note: "Groceries & fuel", status: "pending" },
        { id: 2, name: "Amara Osei", profile_url: "https://in.pinterest.com/pin/19281104652327982/", type: "lent", amount: 1500, date: "Jun 05, 2026", note: "Medical bills", status: "pending" },
        { id: 3, name: "James Liu", profile_url: "https://in.pinterest.com/pin/19281104652327982/", type: "borrow", amount: 60, date: "Jun 04, 2026", note: "Dinner split", status: "settled" },
        { id: 4, name: "Priya Nair", profile_url: "https://in.pinterest.com/pin/19281104652327982/", type: "lent", amount: 300, date: "Jun 01, 2026", note: "Bus pass", status: "pending" }
    ];
    return (
        <>
            <div className="table-container w-full max-w-7xl mx-auto px-6 md:px-8 mb-24 z-10 relative bg-slate-950/40 backdrop-blur-3xl border border-slate-800/80 rounded-3xl p-6 md:p-8 shadow-2xl">
                <div className="header flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8 pb-6 border-b border-slate-800/80">
                    <div className="header-text">
                        <p className="font-display text-2xl font-bold text-white mb-1">All transactions</p>
                        <p className="font-sans text-sm text-slate-400 font-medium">30 records</p>
                    </div>
                    <div className="header-options flex bg-slate-900/80 p-1 rounded-xl border border-slate-800/80 w-full sm:w-auto overflow-x-auto">
                        {FILTERS.map((f) => (
                            <button className="px-4 py-1.5 rounded-lg text-xs font-bold tracking-wide uppercase text-slate-400 hover:text-white transition-all duration-200 cursor-pointer whitespace-nowrap"
                                key={f}
                            >{f}</button>
                        ))}
                    </div>
                </div>

                <div className="table-main overflow-x-auto">
                    <table className="w-full border-collapse text-left">
                        <thead>
                            <tr className="border-b border-slate-800/80">
                                {table_heads.map((t) => (
                                    <th key={t} className="pb-4 text-[10px] font-bold text-slate-500 tracking-wider uppercase first:pl-4">{t}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-800/40">
                            {transactions.map((t) => (

                                <tr key={t.id} className="group hover:bg-slate-900/20 transition-all duration-150">
                                    {/* serialnumber */}
                                    <td className="py-4 text-sm font-semibold text-slate-500 pl-4">{t.id}</td>

                                    {/* name */}
                                    <td className="py-4">
                                        <div className="profile flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full overflow-hidden border border-slate-700/60 bg-slate-800/80 shadow-inner flex items-center justify-center text-xs font-bold text-slate-300">
                                                <img
                                                    src={t.profile_url.includes('unsplash.com/photos') || t.profile_url.includes('pinterest.com')
                                                        ? `https://ui-avatars.com/api/?name=${encodeURIComponent(t.name)}&background=random`
                                                        : t.profile_url
                                                    }
                                                    alt="image"
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                            <span className="font-sans text-sm font-semibold text-slate-100 group-hover:text-white transition-colors duration-150">{t.name}</span>
                                        </div>
                                    </td>

                                    {/* type */}
                                    <td className="py-4">
                                        <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold uppercase tracking-wider ${t.type === 'lent'
                                                ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                                                : 'bg-rose-500/10 text-rose-400 border border-rose-500/20'
                                            }`}>
                                            {t.type}
                                        </span>
                                    </td>

                                    {/* amount */}
                                    <td className="py-4 font-display text-base font-bold">
                                        <span className={t.type === 'lent' ? 'text-emerald-400' : 'text-rose-400'}>
                                            {t.type === 'lent' ? '+' : '-'}${t.amount.toLocaleString()}
                                        </span>
                                    </td>

                                    {/* date */}
                                    <td className="py-4 text-sm font-medium text-slate-400 font-sans">{t.date}</td>

                                    {/* description */}
                                    <td className="py-4 text-sm text-slate-300 font-sans max-w-xs truncate">{t.note}</td>

                                    {/* status */}
                                    <td className="py-4">
                                        <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xl text-xs font-bold uppercase ${t.status === 'settled'
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
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default TransactionTable;