import React from "react"; 
import { Link } from "react-router-dom";    
import EditProductForm from "../../components/eCommerce/EditProductForm";

const EditProduct = () => {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-card">
        <h5>Edit Product</h5>

        <ul className="breadcrumb">
          <li>
            <Link to="/dashboard/ecommerce/">
              <i className="material-symbols-outlined">home</i>
              Dashboard
            </Link>
          </li>
          <li>eCommerce</li>
          <li>Edit Product</li>
        </ul>
      </div>

      <EditProductForm />
    </>
  );
};

export default EditProduct;
