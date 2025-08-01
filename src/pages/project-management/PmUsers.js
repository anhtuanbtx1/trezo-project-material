import React from "react"; 
import { Link } from "react-router-dom"; 
import UsersTable from "../../components/ProjectManagement/UsersTable";

const PmUsers = () => {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-card">
        <h5>Users</h5>

        <ul className="breadcrumb">
          <li>
            <Link to="/dashboard/ecommerce/">
              <i className="material-symbols-outlined">home</i>
              Dashboard
            </Link>
          </li>
          <li>Project Management</li>
          <li>Users</li>
        </ul>
      </div>

      <UsersTable />
    </>
  );
};

export default PmUsers;
