import React from "react"; 
import { Link } from "react-router-dom";     
import TeamMembers from "../../components/Users/TeamMembers";

const Users = () => {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-card">
        <h5>Team Members</h5>

        <ul className="breadcrumb">
          <li>
            <Link to="/dashboard/ecommerce/">
              <i className="material-symbols-outlined">home</i>
              Dashboard
            </Link>
          </li>
          <li>Users</li> 
          <li>Team Members</li>
        </ul>
      </div>

      <TeamMembers />
    </>
  );
};

export default Users;
