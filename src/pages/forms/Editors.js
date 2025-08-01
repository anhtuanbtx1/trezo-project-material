import React from "react";
import { Link } from "react-router-dom"; 
import RteEditors from "../../components/Forms/Editors/RteEditors";

const Editors = () => {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-card">
        <h5>Editors</h5>

        <ul className="breadcrumb">
          <li>
            <Link to="/dashboard/ecommerce/">
              <i className="material-symbols-outlined">home</i>
              Dashboard
            </Link>
          </li>
          <li>Forms</li>
          <li>Editors</li>
        </ul>
      </div>

      <RteEditors />
    </>
  );
};

export default Editors;
