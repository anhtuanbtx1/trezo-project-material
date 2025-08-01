import React from "react"; 
import { Link } from "react-router-dom";    
import InvoiceTable from "../../components/Invoices/InvoiceTable";

const Invoices = () => {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-card">
        <h5>Invoices</h5>

        <ul className="breadcrumb">
          <li>
            <Link to="/dashboard/ecommerce/">
              <i className="material-symbols-outlined">home</i>
              Dashboard
            </Link>
          </li> 
          <li>Invoices</li>
        </ul>
      </div>

      <InvoiceTable />
    </>
  );
};

export default Invoices;
