import React from "react"; 
import { Link } from "react-router-dom";   
import Customers from "../../components/RealEstate/Customers";

const ReCustomers = () => {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-card">
        <h5>Customers</h5>

        <ul className="breadcrumb">
          <li>
            <Link to="/dashboard/ecommerce/">
              <i className="material-symbols-outlined">home</i>
              Dashboard
            </Link>
          </li>
          <li>Real Estate</li> 
          <li>Customers</li>
        </ul>
      </div>

      <Customers />
    </>
  );
};

export default ReCustomers;
