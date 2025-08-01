import React from "react"; 
import { Link } from "react-router-dom";     
import WritePrescriptionForm from "../../components/Doctor/WritePrescriptionForm";

const WritePrescription = () => {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-card">
        <h5>Write Prescription</h5>

        <ul className="breadcrumb">
          <li>
            <Link to="/dashboard/ecommerce/">
              <i className="material-symbols-outlined">home</i>
              Dashboard
            </Link>
          </li>
          <li>Doctor</li> 
          <li>Write Prescription</li>
        </ul>
      </div>

      <WritePrescriptionForm />
    </>
  );
};

export default WritePrescription;
