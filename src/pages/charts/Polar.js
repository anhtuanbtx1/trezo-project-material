import React from "react";
import { Link } from "react-router-dom";
import { Grid } from "@mui/material";     
import BasicPolarChart from "../../components/Charts/PolarCharts/BasicPolarChart";
import MonochromePolarChart from "../../components/Charts/PolarCharts/MonochromePolarChart";

const Polar = () => {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-card">
        <h5>Polar</h5>

        <ul className="breadcrumb">
          <li>
            <Link to="/dashboard/ecommerce/">
              <i className="material-symbols-outlined">home</i>
              Dashboard
            </Link>
          </li>
          <li>Charts</li>
          <li>Polar</li>
        </ul>
      </div>

      <Grid container columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}>
        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 6 }}>
          <BasicPolarChart />
        </Grid>

        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 6 }}>
          <MonochromePolarChart />
        </Grid>
      </Grid>
    </>
  );
};

export default Polar;
