import React from "react"; 
import { Link } from "react-router-dom";  
import AddAgentForm from "../../components/RealEstate/AddAgentForm";

const AddAgents = () => {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-card">
        <h5>Add Agents</h5>

        <ul className="breadcrumb">
          <li>
            <Link to="/dashboard/ecommerce/">
              <i className="material-symbols-outlined">home</i>
              Dashboard
            </Link>
          </li>
          <li>Real Estate</li> 
          <li>Add Agents</li>
        </ul>
      </div>

      <AddAgentForm />
    </>
  );
};

export default AddAgents;
