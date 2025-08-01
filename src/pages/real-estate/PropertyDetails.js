import React from "react"; 
import { Link } from "react-router-dom";
import PropertyDetailsContent from "../../components/RealEstate/PropertyDetailsContent";

const PropertyDetails = () => {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-card">
        <h5>Property Details</h5>

        <ul className="breadcrumb">
          <li>
            <Link to="/dashboard/ecommerce/">
              <i className="material-symbols-outlined">home</i>
              Dashboard
            </Link>
          </li>
          <li>Real Estate</li> 
          <li>Property Details</li>
        </ul>
      </div>

      <PropertyDetailsContent />
    </>
  );
};

export default PropertyDetails;
