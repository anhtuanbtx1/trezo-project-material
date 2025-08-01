import React from "react";
import Grid from "@mui/material/Grid";
import RevenueGrowth from "../../components/Dashboard/Crm/RevenueGrowth";
import LeadConversion from "../../components/Dashboard/Crm/LeadConversion";
import TotalOrders from "../../components/Dashboard/Crm/TotalOrders";
import AnnualProfit from "../../components/Dashboard/Crm/AnnualProfit";
import BalanceOverview from "../../components/Dashboard/Crm/BalanceOverview";
import LeadsBySource from "../../components/Dashboard/Crm/LeadsBySource";
import TopPerformers from "../../components/Dashboard/Crm/TopPerformers";
import RecentLeads from "../../components/Dashboard/Crm/RecentLeads";
import SalesReport from "../../components/Dashboard/Crm/SalesReport";
import TopProductsBySales from "../../components/Dashboard/Crm/TopProductsBySales";

const CRM = () => {
  return (
    <>
      <Grid container columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}>
        <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 3 }}>
          <RevenueGrowth />
        </Grid>

        <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 3 }}>
          <LeadConversion />
        </Grid>

        <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 3 }}>
          <TotalOrders />
        </Grid>

        <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 3 }}>
          <AnnualProfit />
        </Grid>
      </Grid>

      <Grid container columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}>
        <Grid size={{ xs: 12, sm: 12, md: 7, lg: 7, xl: 8 }}>
          <BalanceOverview />
        </Grid>

        <Grid size={{ xs: 12, sm: 12, md: 5, lg: 5, xl: 4 }}>
          <LeadsBySource />
        </Grid>
      </Grid>

      <Grid container columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}>
        <Grid size={{ xs: 12, sm: 12, md: 5, lg: 5, xl: 4 }}>
          <TopPerformers />
        </Grid>

        <Grid size={{ xs: 12, sm: 12, md: 7, lg: 7, xl: 8 }}>
          <RecentLeads />
        </Grid>
      </Grid>

      <Grid container columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}>
        <Grid size={{ xs: 12, sm: 12, md: 7, lg: 7, xl: 8 }}>
          <SalesReport />
        </Grid>

        <Grid size={{ xs: 12, sm: 12, md: 5, lg: 5, xl: 4 }}>
          <TopProductsBySales />
        </Grid>
      </Grid>
    </>
  );
};

export default CRM;
