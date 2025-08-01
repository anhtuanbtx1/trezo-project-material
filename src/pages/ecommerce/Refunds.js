import React from "react";  
import { Link } from "react-router-dom"; 
import RefundsTable from "../../components/eCommerce/Refunds/RefundsTable";

const Refunds = () => {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-card">
        <h5>Refunds</h5>

        <ul className="breadcrumb">
          <li>
            <Link to="/dashboard/ecommerce/">
              <i className="material-symbols-outlined">home</i>
              Dashboard
            </Link>
          </li>
          <li>eCommerce</li>
          <li>Refunds</li>
        </ul>
      </div>

      <RefundsTable />
    </>
  );
};

export default Refunds;
