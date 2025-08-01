import React from "react"; 
import { Link } from "react-router-dom";    
import CreateProductForm from "../../components/eCommerce/CreateProductForm";

const CreateProduct = () => {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-card">
        <h5>Create Product</h5>

        <ul className="breadcrumb">
          <li>
            <Link to="/dashboard/ecommerce/">
              <i className="material-symbols-outlined">home</i>
              Dashboard
            </Link>
          </li>
          <li>eCommerce</li>
          <li>Create Product</li>
        </ul>
      </div>

      <CreateProductForm />
    </>
  );
};

export default CreateProduct;
