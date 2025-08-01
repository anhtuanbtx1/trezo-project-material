import React from "react";  
import { Link } from "react-router-dom";
import EventsDetailsContent from "../../components/Events/EventsDetailsContent";

const EventsDetails = () => {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-card">
        <h5>Events Details</h5>

        <ul className="breadcrumb">
          <li>
            <Link to="/dashboard/ecommerce/">
              <i className="material-symbols-outlined">home</i>
              Dashboard
            </Link>
          </li>
          <li>Events</li> 
          <li>Events Details</li>
        </ul>
      </div>

      <EventsDetailsContent />
    </>
  );
};

export default EventsDetails;
