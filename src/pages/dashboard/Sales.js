import React from "react";
import { Grid, Card } from "@mui/material";
import Stats from "../../components/Dashboard/Sales/Stats";
import RecentEarnings from "../../components/Dashboard/Sales/RecentEarnings";
import SalesByLocations from "../../components/Dashboard/Sales/SalesByLocations";
import TransactionHistory from "../../components/Dashboard/Sales/TransactionHistory";
import RecentOrders from "../../components/Dashboard/Sales/RecentOrders";
import RealTimeSales from "../../components/Dashboard/Sales/RealTimeSales";
import SalesOverview from "../../components/Dashboard/Sales/SalesOverview";
import GrossEarnings from "../../components/Dashboard/Sales/GrossEarnings";

const Sales = () => {
  return (
    <>
      <Card
        sx={{
          position: "relative",
          boxShadow: "none",
          borderRadius: "7px",
          mb: "25px",
          paddingTop: { xs: "18px", sm: "20px", lg: "25px" },
          paddingX: { xs: "18px", sm: "20px", lg: "25px" },
        }}
        className="rmui-card"
      >
        <Stats />

        <Grid container columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}>
          <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 8 }}>
            <RecentEarnings />
          </Grid>

          <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 4 }}>
            <SalesByLocations />
          </Grid>
        </Grid>
      </Card>

      <Grid container columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}>
        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 4 }}>
          <TransactionHistory />
        </Grid>

        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 8 }}>
          <RecentOrders />
        </Grid>
      </Grid>

      <Grid
        container
        columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}
        justifyContent="center"
      >
        <Grid size={{ xs: 12, sm: 12, md: 6, lg: 12, xl: 4 }}>
          <RealTimeSales />
        </Grid>

        <Grid size={{ xs: 12, sm: 12, md: 6, lg: 12, xl: 4 }}>
          <SalesOverview />
        </Grid>

        <Grid size={{ xs: 12, sm: 12, md: 6, lg: 12, xl: 4 }}>
          <GrossEarnings />
        </Grid>
      </Grid>
    </>
  );
};

export default Sales;
