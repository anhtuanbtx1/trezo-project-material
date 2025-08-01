import React from "react"; 
import { Link } from "react-router-dom";   
import ProductsGridContent from "../../components/eCommerce/ProductsGridContent";

const ProductsGrid = () => {
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
          <li>Products Grid</li>
        </ul>
      </div>

      <ProductsGridContent />
    </>
  );
};

export default ProductsGrid;
