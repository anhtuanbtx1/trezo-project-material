import React from "react"; 
import { Link } from "react-router-dom";    
import ProductsListContent from "../../../components/eCommerce/ProductsListContent";

const ProductsList = () => {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-card">
        <h5>Products Grid</h5>

        <ul className="breadcrumb">
          <li>
            <Link to="/dashboard/ecommerce/">
              <i className="material-symbols-outlined">home</i>
              Dashboard
            </Link>
          </li>
          <li>eCommerce</li>
          <li>Products List</li>
        </ul>
      </div>

      <ProductsListContent />
    </>
  );
};

export default ProductsList;
