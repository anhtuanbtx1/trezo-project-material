import React from "react"; 
import { Link } from "react-router-dom";    
import AllProjects from "../../components/ProjectManagement/ProjectsList/AllProjects";

const ProjectsList = () => {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-card">
        <h5>Projects List</h5>

        <ul className="breadcrumb">
          <li>
            <Link to="/dashboard/ecommerce/">
              <i className="material-symbols-outlined">home</i>
              Dashboard
            </Link>
          </li>
          <li>Project Management</li>
          <li>Projects List</li>
        </ul>
      </div>

      <AllProjects />
    </>
  );
};

export default ProjectsList;
