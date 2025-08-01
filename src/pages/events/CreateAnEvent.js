import React from "react";  
import { Link } from "react-router-dom"; 
import CreateAnEventForm from "../../components/Events/CreateAnEventForm";

const CreateAnEvent = () => {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-card">
        <h5>Create An Event</h5>

        <ul className="breadcrumb">
          <li>
            <Link to="/dashboard/ecommerce/">
              <i className="material-symbols-outlined">home</i>
              Dashboard
            </Link>
          </li>
          <li>Events</li> 
          <li>Create An Event</li>
        </ul>
      </div>

      <CreateAnEventForm />
    </>
  );
};

export default CreateAnEvent;
