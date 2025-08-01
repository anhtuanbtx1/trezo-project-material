import React from "react";
import { Link } from "react-router-dom";
import { Grid } from "@mui/material";
import BasicColumnChart from "../../components/Charts/Column/BasicColumnChart";
import StackedColumnChart from "../../components/Charts/Column/StackedColumnChart";
import RotatedLabelsColumnChart from "../../components/Charts/Column/RotatedLabelsColumnChart";
import DataLabelsColumnChart from "../../components/Charts/Column/DataLabelsColumnChart";
import RangeColumnChart from "../../components/Charts/Column/RangeColumnChart";
import DistributedColumnChart from "../../components/Charts/Column/DistributedColumnChart";

const Column = () => {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-card">
        <h5>Column</h5>

        <ul className="breadcrumb">
          <li>
            <Link to="/dashboard/ecommerce/">
              <i className="material-symbols-outlined">home</i>
              Dashboard
            </Link>
          </li>
          <li>Charts</li>
          <li>Column</li>
        </ul>
      </div>

      <Grid container columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}>
        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 6 }}>
          <BasicColumnChart />

          <StackedColumnChart />

          <RotatedLabelsColumnChart />
        </Grid>

        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 6 }}>
          <DataLabelsColumnChart />

          <RangeColumnChart />

          <DistributedColumnChart />
        </Grid>
      </Grid>
    </>
  );
};

export default Column;
