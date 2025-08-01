import React from "react";
import { Link } from "react-router-dom";
import { Grid } from "@mui/material";   
import BasicRadarChart from "../../components/Charts/Radar/BasicRadarChart";
import MultipleRadarChart from "../../components/Charts/Radar/MultipleRadarChart";
import PolygonRadarChart from "../../components/Charts/Radar/PolygonRadarChart";

const Radar = () => {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-card">
        <h5>Radar</h5>

        <ul className="breadcrumb">
          <li>
            <Link to="/dashboard/ecommerce/">
              <i className="material-symbols-outlined">home</i>
              Dashboard
            </Link>
          </li>
          <li>charts</li>
          <li>Radar</li>
        </ul>
      </div>

      <Grid container columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}>
        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 6, xl: 6 }}>
          <BasicRadarChart />
        </Grid>

        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 6, xl: 6 }}>
          <MultipleRadarChart />
        </Grid>

        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 12 }}>
          <PolygonRadarChart />
        </Grid>
      </Grid>
    </>
  );
};

export default Radar;
