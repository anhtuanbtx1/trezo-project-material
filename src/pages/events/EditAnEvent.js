import React from "react";  
import { Link } from "react-router-dom"; 
import EditAnEventForm from "../../components/Events/EditAnEventForm";

const EditAnEvent = () => {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-card">
        <h5>Edit An Event</h5>

        <ul className="breadcrumb">
          <li>
            <Link to="/dashboard/ecommerce/">
              <i className="material-symbols-outlined">home</i>
              Dashboard
            </Link>
          </li>
          <li>Events</li> 
          <li>Edit An Event</li>
        </ul>
      </div>

      <EditAnEventForm />
    </>
  );
};

export default EditAnEvent;
