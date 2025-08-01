import React from "react"; 
import { Link } from "react-router-dom"; 
import EditCourseForm from "../../components/LMS/EditCourseForm";

const EditCourse = () => {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-card">
        <h5>Edit Course</h5>
 
        <ul className="breadcrumb">
          <li>
            <Link to="/dashboard/ecommerce/">
              <i className="material-symbols-outlined">home</i>
              Dashboard
            </Link>
          </li>
          <li>LMS</li>
          <li>Courses</li>
          <li>Edit Course</li>
        </ul>
      </div>

      <EditCourseForm />
    </>
  );
};

export default EditCourse;
