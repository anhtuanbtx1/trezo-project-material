import React from "react";
import { Link } from "react-router-dom";   
import TestimonialsStyle1 from "../components/Testimonials/TestimonialsStyle1";
import TestimonialsStyle2 from "../components/Testimonials/TestimonialsStyle2";
import TestimonialsStyle3 from "../components/Testimonials/TestimonialsStyle3";
import TestimonialsStyle4 from "../components/Testimonials/TestimonialsStyle4";
import TestimonialsStyle5 from "../components/Testimonials/TestimonialsStyle5";
import TestimonialsStyle6 from "../components/Testimonials/TestimonialsStyle6";
import TestimonialsStyle7 from "../components/Testimonials/TestimonialsStyle7";
import TestimonialsStyle8 from "../components/Testimonials/TestimonialsStyle8";

const Testimonials = () => {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-card">
        <h5>Testimonials</h5>

        <ul className="breadcrumb">
          <li>
            <Link to="/dashboard/ecommerce/">
              <i className="material-symbols-outlined">home</i>
              Dashboard
            </Link>
          </li>
          <li>Testimonials</li>
        </ul>
      </div>

      <TestimonialsStyle1 />

      <TestimonialsStyle2 />

      <TestimonialsStyle3 />

      <TestimonialsStyle4 />

      <TestimonialsStyle5 />

      <TestimonialsStyle6 />

      <TestimonialsStyle7 />

      <TestimonialsStyle8 />
    </>
  );
};

export default Testimonials;
