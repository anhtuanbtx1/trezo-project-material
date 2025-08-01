import React from "react";
import { Link } from "react-router-dom";     
import MembersTable from "../components/Members/MembersTable";

const Members = () => {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-card">
        <h5>Members</h5>

        <ul className="breadcrumb">
          <li>
            <Link to="/dashboard/ecommerce/">
              <i className="material-symbols-outlined">home</i>
              Dashboard
            </Link>
          </li>
          <li>Members</li>
        </ul>
      </div>

      <MembersTable />
    </>
  );
};

export default Members;
