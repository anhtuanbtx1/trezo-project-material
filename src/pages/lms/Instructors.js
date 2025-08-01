import React from "react"; 
import { Link } from "react-router-dom";  
import InstructorsTable from "../../components/LMS/InstructorsTable";

const Instructors = () => {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-card">
        <h5>Instructors</h5>
 
        <ul className="breadcrumb">
          <li>
            <Link to="/dashboard/ecommerce/">
              <i className="material-symbols-outlined">home</i>
              Dashboard
            </Link>
          </li>
          <li>LMS</li>
          <li>Courses</li>
          <li>Instructors</li>
        </ul>
      </div>

      <InstructorsTable />
    </>
  );
};

export default Instructors;
