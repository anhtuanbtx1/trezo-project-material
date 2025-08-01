import React from "react"; 
import { Link } from "react-router-dom";       
import OrdersTable from "../../../components/eCommerce/OrdersTable";

const Orders = () => {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-card">
        <h5>Orders</h5>

        <ul className="breadcrumb">
          <li>
            <Link to="/dashboard/ecommerce/">
              <i className="material-symbols-outlined">home</i>
              Dashboard
            </Link>
          </li>
          <li>eCommerce</li>
          <li>Orders</li>
        </ul>
      </div>

      <OrdersTable />
    </>
  );
};

export default Orders;
