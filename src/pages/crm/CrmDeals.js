import React from "react"; 
import { Link } from "react-router-dom"; 
import DealsTable from "../../components/CRM/DealsTable";

const CrmDeals = () => {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-card">
        <h5>Deals</h5>

        <ul className="breadcrumb">
          <li>
            <Link to="/dashboard/ecommerce/">
              <i className="material-symbols-outlined">home</i>
              Dashboard
            </Link>
          </li>
          <li>CRM</li>
          <li>Deals</li>
        </ul>
      </div>

      <DealsTable />
    </>
  );
};

export default CrmDeals;
