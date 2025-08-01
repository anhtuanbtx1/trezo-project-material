import React from "react"; 
import { Link } from "react-router-dom";      
import ProductDetailsContent from "../../../../components/eCommerce/ProductDetailsContent";

const ProductsDetails = () => {
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
          <li>Products</li>
          <li>Product Details</li>
        </ul>
      </div>
       
      <ProductDetailsContent />
    </>
  );
};

export default ProductsDetails;
