import React from "react";
import { Link } from "react-router-dom";
import { Grid } from "@mui/material";
import BasicRangeAreaChart from "../../components/Charts/MoreCharts/BasicRangeAreaChart";
import BasicTimelineChart from "../../components/Charts/MoreCharts/BasicTimelineChart";
import BasicCandlestickChart from "../../components/Charts/MoreCharts/BasicCandlestickChart";
import BasicBoxplotChart from "../../components/Charts/MoreCharts/BasicBoxplotChart";
import BasicBubbleChart from "../../components/Charts/MoreCharts/BasicBubbleChart";
import BasicScatterChart from "../../components/Charts/MoreCharts/BasicScatterChart";
import BasicTreemapChart from "../../components/Charts/MoreCharts/BasicTreemapChart";

const More = () => {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-card">
        <h5>More</h5>

        <ul className="breadcrumb">
          <li>
            <Link to="/dashboard/ecommerce/">
              <i className="material-symbols-outlined">home</i>
              Dashboard
            </Link>
          </li>
          <li>Charts</li>
          <li>More</li>
        </ul>
      </div>

      <Grid container columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}>
        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 6 }}>
          <BasicRangeAreaChart />

          <BasicCandlestickChart />

          <BasicBubbleChart /> 
        </Grid>

        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 6 }}>
          <BasicTimelineChart />

          <BasicBoxplotChart />

          <BasicScatterChart />
        </Grid>
      </Grid>

      <BasicTreemapChart />
    </>
  );
};

export default More;
