import React from "react"; 
import { Link } from "react-router-dom";     
import PrescriptionsContent from "../../components/Doctor/PrescriptionsContent";

const Prescriptions = () => {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-card">
        <h5>Prescriptions</h5>

        <ul className="breadcrumb">
          <li>
            <Link to="/dashboard/ecommerce/">
              <i className="material-symbols-outlined">home</i>
              Dashboard
            </Link>
          </li>
          <li>Doctor</li> 
          <li>Prescriptions</li>
        </ul>
      </div>

      <PrescriptionsContent />
    </>
  );
};

export default Prescriptions;
