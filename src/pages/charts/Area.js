import React from "react";
import { Link } from "react-router-dom";
import { Grid } from "@mui/material";   
import BasicAreaChart from "../../components/Charts/Area/BasicAreaChart";
import SplineAreaChart from "../../components/Charts/Area/SplineAreaChart";
import NegativeValuesAreaChart from "../../components/Charts/Area/NegativeValuesAreaChart";
import MissingNullValuesAreaChart from "../../components/Charts/Area/MissingNullValuesAreaChart";
import StackedAreaChart from "../../components/Charts/Area/StackedAreaChart";

const Area = () => {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-card">
        <h5>Area</h5>

        <ul className="breadcrumb">
          <li>
            <Link to="/dashboard/ecommerce/">
              <i className="material-symbols-outlined">home</i>
              Dashboard
            </Link>
          </li>
          <li>Charts</li>
          <li>Area</li>
        </ul>
      </div>

      <Grid container columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}>
        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 6 }}>
          <BasicAreaChart />

          <StackedAreaChart /> 

          <SplineAreaChart />
        </Grid>

        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 6 }}> 
          <NegativeValuesAreaChart />

          <MissingNullValuesAreaChart />
        </Grid>
      </Grid>
    </>
  );
};

export default Area;
