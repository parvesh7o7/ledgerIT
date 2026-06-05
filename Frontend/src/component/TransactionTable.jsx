import React from 'react';
import './TransactionTable.css';
import { ArrowUpRight, ArrowDownLeft } from 'lucide-react';

const DUMMY_TRANSACTIONS = [
  { id: 101, type: "debit", contact_name: "Sarah Connor", amount: 1250.00, description: "Lent for server hardware setup", timestamp: "2026-06-04T10:15:30.000Z" },
  { id: 102, type: "credit", contact_name: "John Doe", amount: 450.00, description: "Borrowed for office supplies reimbursement", timestamp: "2026-06-03T15:20:00.000Z" },
  { id: 103, type: "debit", contact_name: "Tony Stark", amount: 9500.00, description: "Advanced payment for IoT equipment", timestamp: "2026-06-02T09:00:00.000Z" },
  { id: 104, type: "credit", contact_name: "Bruce Banner", amount: 320.00, description: "Borrowed for lab shipping expenses", timestamp: "2026-05-31T14:45:00.000Z" }
];

export function TransactionTable() {
  const formatAmount = (amt) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amt);
  };

  const formatDate = (dateStr) => {
    return new Date(dateStr).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <div className="table-container">
      <div className="table-header-row">
        <h2>Recent Transactions</h2>
        <div className="summary-badges">
          <div className="summary-badge lent">
            <span>Total Lent:</span> <strong>$10,750.00</strong>
          </div>
          <div className="summary-badge owed">
            <span>Total Owed:</span> <strong>$770.00</strong>
          </div>
        </div>
      </div>
      
      <div className="table-wrapper">
        <table className="ledger-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Contact Name</th>
              <th>Type</th>
              <th>Amount</th>
              <th>Description</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {DUMMY_TRANSACTIONS.map((tx) => (
              <tr key={tx.id}>
                <td><span className="tx-id">#{tx.id}</span></td>
                <td>
                  <div className="contact-info">
                    <span className="contact-name">{tx.contact_name}</span>
                  </div>
                </td>
                <td>
                  <span className={`badge ${tx.type === 'debit' ? 'badge-debit' : 'badge-credit'}`}>
                    {tx.type === 'debit' ? (
                      <>
                        <ArrowUpRight size={14} className="badge-icon" />
                        Lent
                      </>
                    ) : (
                      <>
                        <ArrowDownLeft size={14} className="badge-icon" />
                        Owed
                      </>
                    )}
                  </span>
                </td>
                <td>
                  <span className={`amount ${tx.type === 'debit' ? 'amount-debit' : 'amount-credit'}`}>
                    {tx.type === 'debit' ? `+ ${formatAmount(tx.amount)}` : `- ${formatAmount(tx.amount)}`}
                  </span>
                </td>
                <td><span className="description">{tx.description}</span></td>
                <td><span className="date">{formatDate(tx.timestamp)}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TransactionTable;
