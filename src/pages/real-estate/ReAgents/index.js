import React from "react"; 
import { Link } from "react-router-dom";  
import Agents from "../../../components/RealEstate/Agents";

const ReAgents = () => {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-card">
        <h5>Agents</h5>

        <ul className="breadcrumb">
          <li>
            <Link to="/dashboard/ecommerce/">
              <i className="material-symbols-outlined">home</i>
              Dashboard
            </Link>
          </li>
          <li>Real Estate</li> 
          <li>Agents</li>
        </ul>
      </div>

      <Agents />
    </>
  );
};

export default ReAgents;
