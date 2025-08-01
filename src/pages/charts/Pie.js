import React from "react";
import { Link } from "react-router-dom";
import { Grid } from "@mui/material";    
import BasicPieChart from "../../components/Charts/PieCharts/BasicPieChart";
import PieDonutChart from "../../components/Charts/PieCharts/PieDonutChart";
import PieMonochromeChart from "../../components/Charts/PieCharts/PieMonochromeChart";

const Pie = () => {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-card">
        <h5>Pie</h5>

        <ul className="breadcrumb">
          <li>
            <Link to="/dashboard/ecommerce/">
              <i className="material-symbols-outlined">home</i>
              Dashboard
            </Link>
          </li>
          <li>Charts</li>
          <li>Pie</li>
        </ul>
      </div>

      <Grid container columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}>
        <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 4 }}>
          <BasicPieChart />
        </Grid>

        <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 4 }}>
          <PieDonutChart />
        </Grid>

        <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 4 }}>
          <PieMonochromeChart />
        </Grid>
      </Grid>
    </>
  );
};

export default Pie;
