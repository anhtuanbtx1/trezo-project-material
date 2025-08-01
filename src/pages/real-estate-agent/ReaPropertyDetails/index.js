import React from "react";
import { Link } from "react-router-dom";
import PropertyDetailsContent from "../../../components/RealEstateAgent/PropertyDetailsContent";
import Reviews from "../../../components/RealEstateAgent/Reviews";

const ReaPropertyDetails = () => {
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
          <li>Real Estate Agent</li>
          <li>Property Details</li>
        </ul>
      </div>

      <PropertyDetailsContent />

      <Reviews />
    </>
  );
};

export default ReaPropertyDetails;
