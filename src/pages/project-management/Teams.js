import React from "react"; 
import { Link } from "react-router-dom";         
import TeamsCard from "../../components/ProjectManagement/TeamsCard";

const Teams = () => {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-card">
        <h5>Teams</h5>

        <ul className="breadcrumb">
          <li>
            <Link to="/dashboard/ecommerce/">
              <i className="material-symbols-outlined">home</i>
              Dashboard
            </Link>
          </li>
          <li>Project Management</li>
          <li>Teams</li>
        </ul>
      </div>

      <TeamsCard />
    </>
  );
};

export default Teams;
