import React from "react"; 
import { Link } from "react-router-dom";   
import RoomsDataDemo from "../../../components/Hotel/RoomsDataDemo";

const DataTest = () => {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-card">
        <h5>Hotel Data Test</h5>

        <ul className="breadcrumb">
          <li>
            <Link to="/dashboard/ecommerce/">
              <i className="material-symbols-outlined">home</i>
              Dashboard
            </Link>
          </li> 
          <li>Hotel</li>
          <li>Data Test</li>
        </ul>
      </div>

      <RoomsDataDemo />
    </>
  );
};

export default DataTest;
