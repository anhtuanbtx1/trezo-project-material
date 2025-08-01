import React from "react"; 
import { Link } from "react-router-dom";         
import CreateSellerContent from "../../../../components/eCommerce/Sellers/CreateSellerContent";

const CreateSeller = () => {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-card">
        <h5>Create Seller</h5>

        <ul className="breadcrumb">
          <li>
            <Link to="/dashboard/ecommerce/">
              <i className="material-symbols-outlined">home</i>
              Dashboard
            </Link>
          </li>
          <li>eCommerce</li>
          <li>Sellers</li>
          <li>Create Seller</li>
        </ul>
      </div> 

      <CreateSellerContent />
    </>
  );
};

export default CreateSeller;
