import React from "react";  
import { Link } from "react-router-dom";
import CreateInvoiceForm from "../../components/Invoices/CreateInvoiceForm";

const CreateInvoice = () => {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-card">
        <h5>Create Invoice</h5>

        <ul className="breadcrumb">
          <li>
            <Link to="/dashboard/ecommerce/">
              <i className="material-symbols-outlined">home</i>
              Dashboard
            </Link>
          </li> 
          <li>Create Invoice</li>
        </ul>
      </div>

      <CreateInvoiceForm />
    </>
  );
};

export default CreateInvoice;
