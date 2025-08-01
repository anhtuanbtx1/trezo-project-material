import React from "react";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Sidebar from "../../../components/Apps/Email/Sidebar";
import ComposeEmail from "../../../components/Apps/Email/ComposeEmail";

const Compose = () => {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-card">
        <h5>Compose</h5>

        <ul className="breadcrumb">
          <li>
            <Link to="/dashboard/ecommerce/">
              <i className="material-symbols-outlined">home</i>
              Dashboard
            </Link>
          </li>
          <li>Apps</li>
          <li>Compose</li>
        </ul>
      </div>

      <Grid container columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}>
        <Grid size={{ xs: 12, sm: 12, md: 4, lg: 4, xl: 4 }}>
          <Sidebar />
        </Grid>

        <Grid size={{ xs: 12, sm: 12, md: 8, lg: 8, xl: 8 }}>
          <ComposeEmail />
        </Grid>
      </Grid>
    </>
  );
};

export default Compose;
