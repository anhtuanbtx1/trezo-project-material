import React from "react"; 
import { Link } from "react-router-dom";    
import EventsGrid from "../../components/Events/EventsGrid";

const Events = () => {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-card">
        <h5>Events Grid</h5>

        <ul className="breadcrumb">
          <li>
            <Link to="/dashboard/ecommerce/">
              <i className="material-symbols-outlined">home</i>
              Dashboard
            </Link>
          </li>
          <li>Events</li> 
          <li>Events Grid</li>
        </ul>
      </div>

      <EventsGrid />
    </>
  );
};

export default Events;
