import React from "react"; 
import { Link } from "react-router-dom";        
import CreateOrderForm from "../../../../components/eCommerce/CreateOrderForm";

const CreateOrder = () => {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-card">
        <h5>Order Details</h5>

        <ul className="breadcrumb">
          <li>
            <Link to="/dashboard/ecommerce/">
              <i className="material-symbols-outlined">home</i>
              Dashboard
            </Link>
          </li>
          <li>eCommerce</li>
          <li>Order Details</li>
        </ul>
      </div>

      <CreateOrderForm />
    </>
  );
};

export default CreateOrder;
