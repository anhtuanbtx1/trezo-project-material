import React from "react"; 
import { Link } from "react-router-dom";   
import GuestsListTable from "../../../components/Hotel/GuestsListTable";


const RoomsList = () => {
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

      <GuestsListTable />
    </>
  );
};

export default RoomsList;
