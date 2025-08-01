import React from "react";
import { Link } from "react-router-dom";
import { Grid } from "@mui/material";  
import BasicRadialBarChart from "../../components/Charts/RadialBar/BasicRadialBarChart";
import MultipleRadialBarChart from "../../components/Charts/RadialBar/MultipleRadialBarChart";
import CustomAngleCircleRadialBarChart from "../../components/Charts/RadialBar/CustomAngleCircleRadialBarChart";
import GradientRadialBarChart from "../../components/Charts/RadialBar/GradientRadialBarChart";
import StrockedCircularGaugeRadialBarChart from "../../components/Charts/RadialBar/StrockedCircularGaugeRadialBarChart";
import SemiCircularGaugeRadialBarChart from "../../components/Charts/RadialBar/SemiCircularGaugeRadialBarChart";

const Radialbar = () => {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-card">
        <h5>Radialbar</h5>

        <ul className="breadcrumb">
          <li>
            <Link to="/dashboard/ecommerce/">
              <i className="material-symbols-outlined">home</i>
              Dashboard
            </Link>
          </li>
          <li>charts</li>
          <li>Radialbar</li>
        </ul>
      </div>

      <Grid container columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}>
        <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 4 }}>
          <BasicRadialBarChart />
        </Grid>

        <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 4 }}>
          <MultipleRadialBarChart />
        </Grid>

        <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 4 }}>
          <CustomAngleCircleRadialBarChart />
        </Grid>

        <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 4 }}>
          <GradientRadialBarChart />
        </Grid>

        <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 4 }}>
          <StrockedCircularGaugeRadialBarChart />
        </Grid>

        <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 4 }}>
          <SemiCircularGaugeRadialBarChart />
        </Grid>
      </Grid>
    </>
  );
};

export default Radialbar;
