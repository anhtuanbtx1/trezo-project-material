import React from "react";
import { Link } from "react-router-dom";
import { Grid } from "@mui/material"; 
import LineColumnChart from "../../components/Charts/Mixed/LineColumnChart";
import LineAreaChart from "../../components/Charts/Mixed/LineAreaChart";
import MultipleYAxisChart from "../../components/Charts/Mixed/MultipleYAxisChart";
import LineColumnAreaChart from "../../components/Charts/Mixed/LineColumnAreaChart";

const Mixed = () => {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-card">
        <h5>Mixed</h5>

        <ul className="breadcrumb">
          <li>
            <Link to="/dashboard/ecommerce/">
              <i className="material-symbols-outlined">home</i>
              Dashboard
            </Link>
          </li>
          <li>Charts</li>
          <li>Mixed</li>
        </ul>
      </div>

      <Grid container columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}>
        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 6 }}>
          <LineColumnChart />

          <LineAreaChart />
        </Grid>

        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 6 }}>
          <MultipleYAxisChart />

          <LineColumnAreaChart />
        </Grid>
      </Grid>
    </>
  );
};

export default Mixed;
