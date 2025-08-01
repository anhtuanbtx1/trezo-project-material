import React from "react";
import { Link } from "react-router-dom";
import RoomsListTable from "../../../components/Hotel/RoomsListTable";

const GuestsList = () => {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-card">
        <h5>Guests List</h5>

        <ul className="breadcrumb">
          <li>
            <Link to="/dashboard/ecommerce/">
              <i className="material-symbols-outlined">home</i>
              Dashboard
            </Link>
          </li>
          <li>Hotel</li>
          <li>Guests List</li>
        </ul>
      </div>

      <RoomsListTable />
    </>
  );
};

export default GuestsList;
