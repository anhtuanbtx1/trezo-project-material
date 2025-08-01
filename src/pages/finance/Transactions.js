import React from "react"; 
import { Link } from "react-router-dom";    
import TransactionsTable from "../../components/Finance/TransactionsTable";

const Transactions = () => {
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
          <li>Finance</li> 
          <li>Transactions</li>
        </ul>
      </div>

      <TransactionsTable />
    </>
  );
};

export default Transactions;
