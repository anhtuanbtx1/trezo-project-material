import React from "react"; 
import { Link } from "react-router-dom";        
import SellersContent from "../../../components/eCommerce/Sellers/SellersContent";

const Sellers = () => {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-card">
        <h5>Sellers</h5>

        <ul className="breadcrumb">
          <li>
            <Link to="/dashboard/ecommerce/">
              <i className="material-symbols-outlined">home</i>
              Dashboard
            </Link>
          </li>
          <li>eCommerce</li>
          <li>Sellers</li>
        </ul>
      </div> 

      <SellersContent />
    </>
  );
};

export default Sellers;
