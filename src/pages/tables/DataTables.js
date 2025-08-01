import React from "react";
import { Link } from "react-router-dom";
import TopSellingProducts from "../../components/Tables/TopSellingProducts";
import RecentOrders from "../../components/Tables/RecentOrders"; 
import RecentLeads from "../../components/Tables/RecentLeads";
import AllProjects from "../../components/Tables/AllProjects";
import MyTasks from "../../components/Tables/MyTasks";  
import RecentCustomerRatings from "../../components/Tables/RecentCustomerRatings";
import ToDoList from "../../components/Tables/ToDoList";
import PerformanceOfAgents from "../../components/Tables/PerformanceOfAgents";

const DataTables = () => {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-card">
        <h5>Data Tables</h5>

        <ul className="breadcrumb">
          <li>
            <Link to="/dashboard/ecommerce/">
              <i className="material-symbols-outlined">home</i>
              Dashboard
            </Link>
          </li>
          <li>Social</li>
          <li>Data Tables</li>
        </ul>
      </div>
 
      <AllProjects />

      <TopSellingProducts />
  
      <RecentOrders />
  
      <RecentLeads />
     
      <MyTasks />

      <PerformanceOfAgents />

      <RecentCustomerRatings />

      <ToDoList />
    </>
  );
};

export default DataTables;
