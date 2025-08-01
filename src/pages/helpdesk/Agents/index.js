import React from "react"; 
import { Link } from "react-router-dom";
import PerformanceOfAgents from "../../../components/HelpDesk/PerformanceOfAgents";

const Agents = () => {
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
          <li>HelpDesk</li>
          <li>Agents</li>
        </ul>
      </div>

      <PerformanceOfAgents />
    </>
  );
};

export default Agents;
