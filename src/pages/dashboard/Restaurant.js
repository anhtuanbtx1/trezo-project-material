import * as React from "react";
import { Grid } from "@mui/material";
import Welcome from "../../components/Dashboard/Restaurant/Welcome";
import Revenue from "../../components/Dashboard/Restaurant/Revenue";
import Expense from "../../components/Dashboard/Restaurant/Expense";
import TotalOrders from "../../components/Dashboard/Restaurant/TotalOrders";
import PendingOrders from "../../components/Dashboard/Restaurant/PendingOrders";
import TopSellingItems from "../../components/Dashboard/Restaurant/TopSellingItems";
import RecentOrdersList from "../../components/Dashboard/Restaurant/RecentOrdersList";
import OrderSummary from "../../components/Dashboard/Restaurant/OrderSummary";
import RevenueVSExpense from "../../components/Dashboard/Restaurant/RevenueVSExpense";
import LowStockAlerts from "../../components/Dashboard/Restaurant/LowStockAlerts";
import StaffPerformanceScores from "../../components/Dashboard/Restaurant/StaffPerformanceScores";
import Tickets from "../../components/Dashboard/Restaurant/Tickets";
import RevenueByBranches from "../../components/Dashboard/Restaurant/RevenueByBranches/index.js";
import CustomerRatings from "../../components/Dashboard/Restaurant/CustomerRatings";

const Restaurant = () => {
  return (
    <>
      <Grid container columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}>
        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 6 }}>
          <Welcome />

          <Grid container columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}>
            <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6 }}>
              <TotalOrders />
            </Grid>

            <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6 }}>
              <PendingOrders />
            </Grid>
          </Grid>
        </Grid>

        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 6 }}>
          <Grid container columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}>
            <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6 }}>
              <Revenue />
            </Grid>

            <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6 }}>
              <Expense />
            </Grid>
          </Grid>

          <TopSellingItems />
        </Grid>
      </Grid>

      <RecentOrdersList />

      <Grid
        container
        justifyContent={"center"}
        columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}
      >
        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 6, xl: 3 }}>
          <OrderSummary />
        </Grid>

        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 6, xl: 6 }}>
          <RevenueVSExpense />
        </Grid>

        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 6, xl: 3 }}>
          <LowStockAlerts />
        </Grid>
      </Grid>

      <Grid
        container
        justifyContent={"center"}
        columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}
      >
        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 6, xl: 4 }}>
          <StaffPerformanceScores />
        </Grid>

        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 6, xl: 4 }}>
          <RevenueByBranches />
        </Grid>

        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 6, xl: 4 }}>
          <Tickets />
        </Grid>
      </Grid>

      <CustomerRatings />
    </>
  );
};

export default Restaurant;
