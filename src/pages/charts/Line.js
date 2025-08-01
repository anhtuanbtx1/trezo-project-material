import React from "react";
import { Link } from "react-router-dom";
import { Grid } from "@mui/material";  
import BasicLineChart from "../../components/Charts/LineCharts/BasicLineChart";
import GradientLineChart from "../../components/Charts/LineCharts/GradientLineChart";
import SteplineLineChart from "../../components/Charts/LineCharts/SteplineLineChart";
import DashedLineChart from "../../components/Charts/LineCharts/DashedLineChart";

const Line = () => {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-card">
        <h5>Line</h5>

        <ul className="breadcrumb">
          <li>
            <Link to="/dashboard/ecommerce/">
              <i className="material-symbols-outlined">home</i>
              Dashboard
            </Link>
          </li>
          <li>Charts</li>
          <li>Line</li>
        </ul>
      </div>

      <Grid container columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}>
        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 6 }}>
          <BasicLineChart />

          <GradientLineChart /> 
        </Grid>

        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 6 }}>
          <DashedLineChart />

          <SteplineLineChart />
        </Grid>
      </Grid>
    </>
  );
};

export default Line;
