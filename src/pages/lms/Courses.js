import React from "react"; 
import { Link } from "react-router-dom";  
import CoursesTable from "../../components/LMS/CoursesTable";

const Courses = () => {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-card">
        <h5>Courses List</h5>

        <ul className="breadcrumb">
          <li>
            <Link to="/dashboard/ecommerce/">
              <i className="material-symbols-outlined">home</i>
              Dashboard
            </Link>
          </li>
          <li>LMS</li>
          <li>Courses</li>
          <li>Courses List</li>
        </ul>
      </div>

      <CoursesTable />
    </>
  );
};

export default Courses;
