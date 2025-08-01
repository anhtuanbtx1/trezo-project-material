import React from "react"; 
import { Link } from "react-router-dom";      
import CheckoutContent from "../../components/eCommerce/CheckoutContent";

const Checkout = () => {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-card">
        <h5>Checkout</h5>

        <ul className="breadcrumb">
          <li>
            <Link to="/dashboard/ecommerce/">
              <i className="material-symbols-outlined">home</i>
              Dashboard
            </Link>
          </li>
          <li>eCommerce</li>
          <li>Checkout</li>
        </ul>
      </div>

      <CheckoutContent />
    </>
  );
};

export default Checkout;
