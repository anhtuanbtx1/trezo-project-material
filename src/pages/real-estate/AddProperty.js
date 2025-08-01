import React from "react"; 
import { Link } from "react-router-dom"; 
import AddPropertyForm from "../../components/RealEstate/AddPropertyForm";

const AddProperty = () => {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-card">
        <h5>Add Property</h5>

        <ul className="breadcrumb">
          <li>
            <Link to="/dashboard/ecommerce/">
              <i className="material-symbols-outlined">home</i>
              Dashboard
            </Link>
          </li>
          <li>Real Estate</li> 
          <li>Add Property</li>
        </ul>
      </div>

      <AddPropertyForm />
    </>
  );
};

export default AddProperty;
