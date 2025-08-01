import React from "react";
import { Link } from "react-router-dom";    
import NotificationsTable from "../components/Notifications/NotificationsTable";

const Notifications = () => {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-card">
        <h5>Notifications</h5>

        <ul className="breadcrumb">
          <li>
            <Link to="/dashboard/ecommerce/">
              <i className="material-symbols-outlined">home</i>
              Dashboard
            </Link>
          </li>
          <li>Notifications</li>
        </ul>
      </div>

      <NotificationsTable />
    </>
  );
};

export default Notifications;
