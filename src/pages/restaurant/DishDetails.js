import React from "react"; 
import { Link } from "react-router-dom";     
import DishDetailsContent from "../../components/Restaurant/DishDetailsContent";

const DishDetails = () => {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-card">
        <h5>Dish Details</h5>

        <ul className="breadcrumb">
          <li>
            <Link to="/dashboard/ecommerce/">
              <i className="material-symbols-outlined">home</i>
              Dashboard
            </Link>
          </li>
          <li>Restaurant</li> 
          <li>Dish Details</li>
        </ul>
      </div>

      <DishDetailsContent />
    </>
  );
};

export default DishDetails;
