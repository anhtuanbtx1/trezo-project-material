import React from "react";  
import { Link } from "react-router-dom";
import ReviewsTable from "../../components/eCommerce/Reviews/ReviewsTable";

const Reviews = () => {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-card">
        <h5>Reviews</h5>

        <ul className="breadcrumb">
          <li>
            <Link to="/dashboard/ecommerce/">
              <i className="material-symbols-outlined">home</i>
              Dashboard
            </Link>
          </li>
          <li>eCommerce</li>
          <li>Reviews</li>
        </ul>
      </div>

      <ReviewsTable />
    </>
  );
};

export default Reviews;
