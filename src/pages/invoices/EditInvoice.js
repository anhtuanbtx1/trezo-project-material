import React from "react";  
import { Link } from "react-router-dom";
import EditInvoiceForm from "../../components/Invoices/EditInvoiceForm";

const EditInvoice = () => {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-card">
        <h5>Edit Invoice</h5>

        <ul className="breadcrumb">
          <li>
            <Link to="/dashboard/ecommerce/">
              <i className="material-symbols-outlined">home</i>
              Dashboard
            </Link>
          </li> 
          <li>Edit Invoice</li>
        </ul>
      </div>

      <EditInvoiceForm />
    </>
  );
};

export default EditInvoice;
