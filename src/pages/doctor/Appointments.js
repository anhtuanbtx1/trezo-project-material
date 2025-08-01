import React from "react"; 
import { Link } from "react-router-dom";     
import AppointmentsContent from "../../components/Doctor/AppointmentsContent";

const Appointments = () => {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-card">
        <h5>Appointments</h5>

        <ul className="breadcrumb">
          <li>
            <Link to="/dashboard/ecommerce/">
              <i className="material-symbols-outlined">home</i>
              Dashboard
            </Link>
          </li>
          <li>Doctor</li> 
          <li>Appointments</li>
        </ul>
      </div>

      <AppointmentsContent />
    </>
  );
};

export default Appointments;
