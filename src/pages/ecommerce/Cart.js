import React from "react"; 
import { Link } from "react-router-dom";     
import CartTable from "../../components/eCommerce/CartTable";

const Cart = () => {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-card">
        <h5>Cart</h5>

        <ul className="breadcrumb">
          <li>
            <Link to="/dashboard/ecommerce/">
              <i className="material-symbols-outlined">home</i>
              Dashboard
            </Link>
          </li>
          <li>eCommerce</li>
          <li>Cart</li>
        </ul>
      </div>

      <CartTable />
    </>
  );
};

export default Cart;
