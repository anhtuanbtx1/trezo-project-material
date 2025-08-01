import React from "react"; 
import { Link } from "react-router-dom";   
import DetailsContent from "../../../components/RealEstate/Agents/DetailsContent";

const ReAgentsDetails = () => {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-card">
        <h5>Agents Details</h5>

        <ul className="breadcrumb">
          <li>
            <Link to="/dashboard/ecommerce/">
              <i className="material-symbols-outlined">home</i>
              Dashboard
            </Link>
          </li>
          <li>Real Estate</li> 
          <li>Agents Details</li>
        </ul>
      </div>

      <DetailsContent />
    </>
  );
};

export default ReAgentsDetails;
