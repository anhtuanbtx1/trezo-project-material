import React from "react"; 
import { Link } from "react-router-dom";      
import UsersListTable from "../../components/Users/UsersListTable";

const UsersList = () => {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-card">
        <h5>Users List</h5>

        <ul className="breadcrumb">
          <li>
            <Link to="/dashboard/ecommerce/">
              <i className="material-symbols-outlined">home</i>
              Dashboard
            </Link>
          </li>
          <li>Users</li> 
          <li>Users List</li>
        </ul>
      </div>

      <UsersListTable /> 
    </>
  );
};

export default UsersList;
