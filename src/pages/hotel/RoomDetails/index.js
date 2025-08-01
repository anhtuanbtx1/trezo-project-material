import React from "react";
import { Link } from "react-router-dom";
import RoomDetailsContent from "../../../components/Hotel/RoomDetailsContent";
import Reviews from "../../../components/Hotel/Reviews";

const RoomDetails = () => {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-card">
        <h5>Room Details</h5>

        <ul className="breadcrumb">
          <li>
            <Link to="/dashboard/ecommerce/">
              <i className="material-symbols-outlined">home</i>
              Dashboard
            </Link>
          </li>
          <li>Hotel</li>
          <li>Room Details</li>
        </ul>
      </div>

      <RoomDetailsContent />

      <Reviews />
    </>
  );
};

export default RoomDetails;
