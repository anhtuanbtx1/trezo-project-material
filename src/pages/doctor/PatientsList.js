import React from "react"; 
import { Link } from "react-router-dom";     
import PatientsListTable from "../../components/Doctor/PatientsListTable";

const PatientsList = () => {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-card">
        <h5>Patients List</h5>

        <ul className="breadcrumb">
          <li>
            <Link to="/dashboard/ecommerce/">
              <i className="material-symbols-outlined">home</i>
              Dashboard
            </Link>
          </li>
          <li>Doctor</li> 
          <li>Patients List</li>
        </ul>
      </div>

      <PatientsListTable />
    </>
  );
};

export default PatientsList;
