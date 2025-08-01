import React from "react"; 
import { Link } from "react-router-dom";
import ToDoListTable from "../../components/Apps/ToDoListTable/index.js";

const ToDoList = () => {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-card">
        <h5>To Do List</h5>

        <ul className="breadcrumb">
          <li>
            <Link to="/dashboard/ecommerce/">
              <i className="material-symbols-outlined">home</i>
              Dashboard
            </Link>
          </li>
          <li>Apps</li>
          <li>To Do List</li>
        </ul>
      </div>

      <ToDoListTable />
    </>
  );
};

export default ToDoList;
