import React from "react";
import { Link } from "react-router-dom";    
import { Grid } from "@mui/material";  
import BasicMap from "../components/Maps/BasicMap";
import MarkersMap from "../components/Maps/MarkersMap";
import SatelliteMap from "../components/Maps/SatelliteMap";
import InfoWindowMap from "../components/Maps/InfoWindowMap";

const Maps = () => {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-card">
        <h5>Maps</h5>

        <ul className="breadcrumb">
          <li>
            <Link to="/dashboard/ecommerce/">
              <i className="material-symbols-outlined">home</i>
              Dashboard
            </Link>
          </li>
          <li>Maps</li>
        </ul>
      </div>

      <Grid container columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}>
        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 6, xl: 6 }}>
          <BasicMap />

          <SatelliteMap />
        </Grid>

        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 6, xl: 6 }}>
          <MarkersMap />

          <InfoWindowMap />
        </Grid>
      </Grid> 
    </>
  );
};

export default Maps;
