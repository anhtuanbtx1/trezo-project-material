import React from "react";
import { Link } from "react-router-dom";
import PropertiesTable from "../../../components/RealEstateAgent/PropertiesTable";

const Properties = () => {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-card">
        <h5>Properties</h5>

        <ul className="breadcrumb">
          <li>
            <Link to="/dashboard/ecommerce/">
              <i className="material-symbols-outlined">home</i>
              Dashboard
            </Link>
          </li>
          <li>Real Estate Agent</li>
          <li>Properties</li>
        </ul>
      </div>

      <PropertiesTable />
    </>
  );
};

export default Properties;
