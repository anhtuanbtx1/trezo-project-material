import React from "react";
import Grid from "@mui/material/Grid";
import AnalyticsOverview from "../../components/Dashboard/Analytics/AnalyticsOverview";
import RealtimeActiveUsers from "../../components/Dashboard/Analytics/RealtimeActiveUsers";
import Stats from "../../components/Dashboard/Analytics/Stats";
import BrowserUsedByUsers from "../../components/Dashboard/Analytics/BrowserUsedByUsers";
import DeviceSessions from "../../components/Dashboard/Analytics/DeviceSessions";
import Clicks from "../../components/Dashboard/Analytics/Clicks";
import Impressions from "../../components/Dashboard/Analytics/Impressions";
import Sessions from "../../components/Dashboard/Analytics/Sessions";
import SessionsByChannel from "../../components/Dashboard/Analytics/SessionsByChannel";
import ClicksByKeywords from "../../components/Dashboard/Analytics/ClicksByKeywords";
import UsersByCountry from "../../components/Dashboard/Analytics/UsersByCountry";
import TopBrowsingPagesToday from "../../components/Dashboard/Analytics/TopBrowsingPagesToday";

const Analytics = () => {
  return (
    <>
      <Grid
        container
        columnSpacing={{ xs: 1, sm: 2, md: 3, lg: 3 }}
        justifyContent="center"
      >
        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 8 }}>
          <AnalyticsOverview />

          <Stats />
        </Grid>

        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 4 }}>
          <RealtimeActiveUsers />
        </Grid>
      </Grid>

      <Grid
        container
        columnSpacing={{ xs: 1, sm: 2, md: 3, lg: 3 }}
        justifyContent="center"
      >
        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 7 }}>
          <BrowserUsedByUsers />
        </Grid>

        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 5 }}>
          <DeviceSessions />
        </Grid>
      </Grid>

      <Grid
        container
        columnSpacing={{ xs: 1, sm: 2, md: 3, lg: 3 }}
        justifyContent="center"
      >
        <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 4 }}>
          <Clicks />
        </Grid>

        <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 4 }}>
          <Impressions />
        </Grid>

        <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 4 }}>
          <Sessions />
        </Grid>
      </Grid>

      <Grid
        container
        columnSpacing={{ xs: 1, sm: 2, md: 3, lg: 3 }}
        justifyContent="center"
      >
        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 5 }}>
          <SessionsByChannel />
        </Grid>

        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 7 }}>
          <ClicksByKeywords />
        </Grid>
      </Grid>

      <Grid
        container
        columnSpacing={{ xs: 1, sm: 2, md: 3, lg: 3 }}
        justifyContent="center"
      >
        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 8 }}>
          <TopBrowsingPagesToday />
        </Grid>

        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 4 }}>
          <UsersByCountry />
        </Grid>
      </Grid>
    </>
  );
};

export default Analytics;
