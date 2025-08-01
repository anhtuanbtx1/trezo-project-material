import React from "react";
import { Grid } from "@mui/material";
import TotalSales from "../../components/Dashboard/PosSystem/TotalSales";
import TotalTransactions from "../../components/Dashboard/PosSystem/TotalTransactions";
import AverageOrderValue from "../../components/Dashboard/PosSystem/AverageOrderValue";
import TotalDiscount from "../../components/Dashboard/PosSystem/TotalDiscount";
import SalesAnalytics from "../../components/Dashboard/PosSystem/SalesAnalytics";
import CustomerSegmentation from "../../components/Dashboard/PosSystem/CustomerSegmentation";
import Categories from "../../components/Dashboard/PosSystem/Categories";
import OrderDetails from "../../components/Dashboard/PosSystem/OrderDetails";

const PosSystem = () => {
  return (
    <>
      <Grid container columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}>
        <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 3 }}>
          <TotalSales />
        </Grid>

        <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 3 }}>
          <TotalTransactions />
        </Grid>

        <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 3 }}>
          <AverageOrderValue />
        </Grid>

        <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 3 }}>
          <TotalDiscount />
        </Grid>
      </Grid>

      <Grid container columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}>
        <Grid size={{ xs: 12, sm: 12, md: 7, lg: 7, xl: 8 }}>
          <SalesAnalytics />
        </Grid>

        <Grid size={{ xs: 12, sm: 12, md: 5, lg: 5, xl: 4 }}>
          <CustomerSegmentation />
        </Grid>
      </Grid>

      <Grid container columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}>
        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 8 }}>
          <Categories />
        </Grid>

        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 4 }}>
          <OrderDetails />
        </Grid>
      </Grid>
    </>
  );
};

export default PosSystem;
