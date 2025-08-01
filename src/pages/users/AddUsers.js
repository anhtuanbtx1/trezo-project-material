import React from "react"; 
import { Link } from "react-router-dom";
import AddUserForm from "../../components/Users/AddUserForm";

const AddUsers = () => {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-card">
        <h5>Add Users</h5>

        <ul className="breadcrumb">
          <li>
            <Link to="/dashboard/ecommerce/">
              <i className="material-symbols-outlined">home</i>
              Dashboard
            </Link>
          </li>
          <li>Users</li> 
          <li>AddUsers</li>
        </ul>
      </div>

      <AddUserForm />
    </>
  );
};

export default AddUsers;
