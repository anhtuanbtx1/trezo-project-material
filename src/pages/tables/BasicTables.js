import React from "react";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";  
import TopSellingProducts from "../../components/Tables/TopSellingProducts";
import RecentOrders from "../../components/Tables/RecentOrders";
import TopPerformers from "../../components/Tables/TopPerformers";
import RecentLeads from "../../components/Tables/RecentLeads";
import AllProjects from "../../components/Tables/AllProjects";
import MyTasks from "../../components/Tables/MyTasks";
import StudentsProgress from "../../components/Tables/StudentsProgress";
import GroupLessons from "../../components/Tables/GroupLessons";
import RecentCustomerRatings from "../../components/Tables/RecentCustomerRatings";

const BasicTables = () => {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-card">
        <h5>Basic Tables</h5>

        <ul className="breadcrumb">
          <li>
            <Link to="/dashboard/ecommerce/">
              <i className="material-symbols-outlined">home</i>
              Dashboard
            </Link>
          </li>
          <li>Social</li>
          <li>Basic Tables</li>
        </ul>
      </div>
 
      <Grid container columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}>
        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 6 }}>
          <TopSellingProducts />
        </Grid>

        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 6 }}>
          <RecentOrders />
        </Grid>
      </Grid>

      <Grid container columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}>
        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 4 }}>
          <TopPerformers />
        </Grid>

        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 8 }}>
          <RecentLeads />
        </Grid>
      </Grid>

      <AllProjects />

      <Grid container columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}>
        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 6 }}>
          <StudentsProgress />
        </Grid>

        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 6 }}>
          <GroupLessons />
        </Grid>
      </Grid>

      <Grid container columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}>
        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 6 }}>
          <MyTasks />
        </Grid>

        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 6 }}>
          <RecentCustomerRatings />
        </Grid>
      </Grid>
    </>
  );
};

export default BasicTables;
