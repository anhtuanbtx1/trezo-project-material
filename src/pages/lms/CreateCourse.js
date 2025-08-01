import React from "react"; 
import { Link } from "react-router-dom";
import CreateCourseForm from "../../components/LMS/CreateCourseForm";

const CreateCourse = () => {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-card">
        <h5>Create Course</h5>

        <ul className="breadcrumb">
          <li>
            <Link to="/dashboard/ecommerce/">
              <i className="material-symbols-outlined">home</i>
              Dashboard
            </Link>
          </li>
          <li>LMS</li>
          <li>Courses</li>
          <li>Create Course</li>
        </ul>
      </div>

      <CreateCourseForm />
    </>
  );
};

export default CreateCourse;
