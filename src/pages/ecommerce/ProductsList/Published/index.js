import React from "react"; 
import { Link } from "react-router-dom";     
import PublishedProducts from "../../../../components/eCommerce/ProductsListContent/PublishedProducts";

const Published = () => {
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
      
      <PublishedProducts />
    </>
  );
};

export default Published;
