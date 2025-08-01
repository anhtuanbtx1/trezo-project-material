import React from "react"; 
import { Link } from "react-router-dom";     
import InvoicesDetailsContent from "../../components/Invoices/InvoicesDetailsContent";

const InvoicesDetails = () => {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-card">
        <h5>Invoice Details</h5>

        <ul className="breadcrumb">
          <li>
            <Link to="/dashboard/ecommerce/">
              <i className="material-symbols-outlined">home</i>
              Dashboard
            </Link>
          </li> 
          <li>Invoice Details</li>
        </ul>
      </div>

      <InvoicesDetailsContent />
    </>
  );
};

export default InvoicesDetails;
