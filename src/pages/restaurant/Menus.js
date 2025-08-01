import React from "react"; 
import { Link } from "react-router-dom";     
import MenusTable from "../../components/Restaurant/MenusTable";

const Menus = () => {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-card">
        <h5>Menus</h5>

        <ul className="breadcrumb">
          <li>
            <Link to="/dashboard/ecommerce/">
              <i className="material-symbols-outlined">home</i>
              Dashboard
            </Link>
          </li>
          <li>Restaurant</li> 
          <li>Menus</li>
        </ul>
      </div>

      <MenusTable />
    </>
  );
};

export default Menus;
