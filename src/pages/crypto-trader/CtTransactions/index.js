import React from "react";
import { Link } from "react-router-dom";
import TransactionsTable from "../../../components/CryptoTrader/TransactionsTable";

const CtTransactions = () => {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-card">
        <h5>Transactions</h5>

        <ul className="breadcrumb">
          <li>
            <Link to="/dashboard/ecommerce/">
              <i className="material-symbols-outlined">home</i>
              Dashboard
            </Link>
          </li>
          <li>Crypto Trader</li>
          <li>Transactions</li>
        </ul>
      </div>

      <TransactionsTable />
    </>
  );
};

export default CtTransactions;
