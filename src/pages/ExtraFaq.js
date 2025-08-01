import React from "react";
import { Link } from "react-router-dom"; 
import FaqContent from "../components/Faq/FaqContent";

const ExtraFaq = () => {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-card">
        <h5>Faq's</h5>

        <ul className="breadcrumb">
          <li>
            <Link to="/dashboard/ecommerce/">
              <i className="material-symbols-outlined">home</i>
              Dashboard
            </Link>
          </li>
          <li>Faq's</li>
        </ul>
      </div>

      <FaqContent />
    </>
  );
};

export default ExtraFaq;
