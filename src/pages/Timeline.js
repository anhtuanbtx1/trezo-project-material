import React from "react";
import { Link } from "react-router-dom";
import BasicTimeline from "../components/Timeline/BasicTimeline";
import AdvancedTimeline from "../components/Timeline/AdvancedTimeline";

const Timeline = () => {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-card">
        <h5>Timeline</h5>

        <ul className="breadcrumb">
          <li>
            <Link to="/dashboard/ecommerce/">
              <i className="material-symbols-outlined">home</i>
              Dashboard
            </Link>
          </li>
          <li>Timeline</li>
        </ul>
      </div>

      <BasicTimeline />

      <AdvancedTimeline />
    </>
  );
};

export default Timeline;
