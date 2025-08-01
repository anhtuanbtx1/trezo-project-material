import React from "react"; 
import { Link } from "react-router-dom";   
import EventsListTable from "../../components/Events/EventsListTable";  

const EventsList = () => {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-card">
        <h5>EventsList</h5>

        <ul className="breadcrumb">
          <li>
            <Link to="/dashboard/ecommerce/">
              <i className="material-symbols-outlined">home</i>
              Dashboard
            </Link>
          </li>
          <li>Events</li> 
          <li>EventsList</li>
        </ul>
      </div>

      <EventsListTable />
    </>
  );
};

export default EventsList;
