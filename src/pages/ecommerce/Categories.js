import React from "react"; 
import { Link } from "react-router-dom";       
import CategoriesTable from "../../components/eCommerce/Categories/CategoriesTable";

const Categories = () => {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-card">
        <h5>Categories</h5>

        <ul className="breadcrumb">
          <li>
            <Link to="/dashboard/ecommerce/">
              <i className="material-symbols-outlined">home</i>
              Dashboard
            </Link>
          </li>
          <li>eCommerce</li>
          <li>Categories</li>
        </ul>
      </div> 

      <CategoriesTable />
    </>
  );
};

export default Categories;
