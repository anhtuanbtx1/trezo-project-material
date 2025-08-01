import React from "react"; 
import { Link } from "react-router-dom";   
import LessonPreviewContent from "../../components/LMS/LessonPreviewContent";

const LessonPreview = () => {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-card">
        <h5>Lesson Preview</h5>

        <ul className="breadcrumb">
          <li>
            <Link to="/dashboard/ecommerce/">
              <i className="material-symbols-outlined">home</i>
              Dashboard
            </Link>
          </li>
          <li>LMS</li>
          <li>Courses</li>
          <li>Lesson Preview</li>
        </ul>
      </div>

      <LessonPreviewContent />
    </>
  );
};

export default LessonPreview;
