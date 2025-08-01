import React from "react"; 
import { Link } from "react-router-dom";        
import PmClients from "../../components/ProjectManagement/PmClients";

const Clients = () => {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-card">
        <h5>Clients</h5>

        <ul className="breadcrumb">
          <li>
            <Link to="/dashboard/ecommerce/">
              <i className="material-symbols-outlined">home</i>
              Dashboard
            </Link>
          </li>
          <li>Project Management</li>
          <li>Clients</li>
        </ul>
      </div>

      <PmClients />
    </>
  );
};

export default Clients;
