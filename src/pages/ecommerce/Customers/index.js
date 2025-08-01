import React from "react"; 
import { Link } from "react-router-dom";        
import CustomersTable from "../../../components/eCommerce/Customers/CustomersTable";

const Customers = () => {
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
          <li>eCommerce</li>
          <li>Customers</li>
        </ul>
      </div>

      <CustomersTable />
    </>
  );
};

export default Customers;
