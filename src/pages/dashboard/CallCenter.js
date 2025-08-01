import React from "react";
import Grid from "@mui/material/Grid";
import Overview from "../../components/Dashboard/CallCenter/Overview"; 
import InboundCalls from "../../components/Dashboard/CallCenter/InboundCalls";
import OutboundCalls from "../../components/Dashboard/CallCenter/OutboundCalls"; 
import AgentsPerformanceOverview from "../../components/Dashboard/CallCenter/AgentsPerformanceOverview";
import CallCenterGeography from "../../components/Dashboard/CallCenter/CallCenterGeography";
import AgentAvgEarnings from "../../components/Dashboard/CallCenter/AgentAvgEarnings"; 
import RecentCalls from "../../components/Dashboard/CallCenter/RecentCalls";

const CallCenter = () => {
  return (
    <>
      <Grid container columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}>
        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 8 }}>
          <Overview />
        </Grid>

        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 4 }}>
          <InboundCalls />

          <OutboundCalls />
        </Grid>
      </Grid>

      <Grid container columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}>
        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 7, xl: 6 }}>
          <AgentsPerformanceOverview />
        </Grid>

        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 5, xl: 6 }}>
          <CallCenterGeography />
        </Grid>
      </Grid>

      <Grid container columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}>
        <Grid size={{ xs: 12, sm: 12, md: 5, lg: 5, xl: 4 }}>
          <AgentAvgEarnings />
        </Grid>

        <Grid size={{ xs: 12, sm: 12, md: 7, lg: 7, xl: 8 }}>
          <RecentCalls />
        </Grid>
      </Grid>
    </>
  );
};

export default CallCenter;
