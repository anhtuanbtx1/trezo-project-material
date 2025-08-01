import React from "react";
import { Grid } from "@mui/material";
import Welcome from "../../components/Dashboard/StoreAnalytics/Welcome";
import CustomerVisit from "../../components/Dashboard/StoreAnalytics/CustomerVisit";
import TopSellingProduct from "../../components/Dashboard/StoreAnalytics/TopSellingProduct";
import GrossRevenue from "../../components/Dashboard/StoreAnalytics/GrossRevenue";
import RecentSales from "../../components/Dashboard/StoreAnalytics/RecentSales";
import SalesByGender from "../../components/Dashboard/StoreAnalytics/SalesByGender";
import SalesThisMonth from "../../components/Dashboard/StoreAnalytics/SalesThisMonth";
import SalesByCategory from "../../components/Dashboard/StoreAnalytics/SalesByCategory";
import StockAlert from "../../components/Dashboard/StoreAnalytics/StockAlert";

const StoreAnalytics = () => {
  return (
    <>
      <Grid
        container
        columnSpacing={{ xs: 1, sm: 2, md: 3, lg: 3 }}
        justifyContent="center"
      >
        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 9 }}>
          <Welcome />
        </Grid>

        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 3 }}>
          <CustomerVisit />
        </Grid>
      </Grid>

      <Grid
        container
        columnSpacing={{ xs: 1, sm: 2, md: 3, lg: 3 }}
        justifyContent="center"
      >
        <Grid size={{ xs: 12, sm: 12, md: 5, lg: 12, xl: 4 }}>
          <TopSellingProduct />
        </Grid>

        <Grid size={{ xs: 12, sm: 12, md: 7, lg: 12, xl: 8 }}>
          <GrossRevenue />
        </Grid>
      </Grid>

      <Grid
        container
        columnSpacing={{ xs: 1, sm: 2, md: 3, lg: 3 }}
        justifyContent="center"
      >
        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 9 }}>
          <RecentSales />
        </Grid>

        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 3 }}>
          <SalesByGender />

          <SalesThisMonth />
        </Grid>
      </Grid>

      <Grid
        container
        columnSpacing={{ xs: 1, sm: 2, md: 3, lg: 3 }}
        justifyContent="center"
      >
        <Grid size={{ xs: 12, sm: 12, md: 5, lg: 12, xl: 4 }}>
          <SalesByCategory />
        </Grid>

        <Grid size={{ xs: 12, sm: 12, md: 7, lg: 12, xl: 8 }}>
          <StockAlert />
        </Grid>
      </Grid>
    </>
  );
};

export default StoreAnalytics;
