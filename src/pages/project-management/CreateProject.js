import React from "react"; 
import { Link } from "react-router-dom";     
import CreateProjectForm from "../../components/ProjectManagement/CreateProjectForm";

const CreateProject = () => {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-card">
        <h5>Create Project</h5>

        <ul className="breadcrumb">
          <li>
            <Link to="/dashboard/ecommerce/">
              <i className="material-symbols-outlined">home</i>
              Dashboard
            </Link>
          </li>
          <li>Project Management</li>
          <li>Create Project</li>
        </ul>
      </div>

      <CreateProjectForm />
    </>
  );
};

export default CreateProject;
