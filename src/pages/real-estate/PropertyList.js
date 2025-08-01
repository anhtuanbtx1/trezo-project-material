import React from "react"; 
import { Link } from "react-router-dom";  
import PropertyListContent from "../../components/RealEstate/PropertyListContent";

const PropertyList = () => {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-card">
        <h5>Property List</h5>

        <ul className="breadcrumb">
          <li>
            <Link to="/dashboard/ecommerce/">
              <i className="material-symbols-outlined">home</i>
              Dashboard
            </Link>
          </li>
          <li>Real Estate</li> 
          <li>Property List</li>
        </ul>
      </div>

      <PropertyListContent />
    </>
  );
};

export default PropertyList;
