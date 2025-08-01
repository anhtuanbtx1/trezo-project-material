import React from "react"; 
import { Link } from "react-router-dom";     
import AddPatientForm from "../../components/Doctor/AddPatientForm";

const AddPatient = () => {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-card">
        <h5>Add Patient</h5>

        <ul className="breadcrumb">
          <li>
            <Link to="/dashboard/ecommerce/">
              <i className="material-symbols-outlined">home</i>
              Dashboard
            </Link>
          </li>
          <li>Doctor</li> 
          <li>Add Patient</li>
        </ul>
      </div>

      <AddPatientForm />
    </>
  );
};

export default AddPatient;
