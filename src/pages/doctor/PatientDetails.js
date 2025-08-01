import React from "react"; 
import { Link } from "react-router-dom";     
import PatientDetailsContent from "../../components/Doctor/PatientDetailsContent";

const PatientDetails = () => {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-card">
        <h5>Patient Details</h5>

        <ul className="breadcrumb">
          <li>
            <Link to="/dashboard/ecommerce/">
              <i className="material-symbols-outlined">home</i>
              Dashboard
            </Link>
          </li>
          <li>Doctor</li> 
          <li>Patient Details</li>
        </ul>
      </div>

      <PatientDetailsContent />
    </>
  );
};

export default PatientDetails;
