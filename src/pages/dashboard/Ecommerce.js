import React from "react";
import Grid from "@mui/material/Grid";
import Welcome from "../../components/Dashboard/eCommerce/Welcome";
import TotalSales from "../../components/Dashboard/eCommerce/TotalSales";
import TotalOrders from "../../components/Dashboard/eCommerce/TotalOrders";
import TotalCustomers from "../../components/Dashboard/eCommerce/TotalCustomers";
import TotalRevenue from "../../components/Dashboard/eCommerce/TotalRevenue";
import SalesByLocations from "../../components/Dashboard/eCommerce/SalesByLocations";
import TopSellingProducts from "../../components/Dashboard/eCommerce/TopSellingProducts";
import RecentOrders from "../../components/Dashboard/eCommerce/RecentOrders";
import OrderSummary from "../../components/Dashboard/eCommerce/OrderSummary";
import RecentTransactions from "../../components/Dashboard/eCommerce/RecentTransactions";
import ReturningCustomerRate from "../../components/Dashboard/eCommerce/ReturningCustomerRate";

const Ecommerce = () => {
  return (
    <>
      <Grid container columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}>
        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 8 }}>
          <Welcome />

          <TotalSales />
        </Grid>

        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 4 }}>
          <Grid
            container
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            justifyContent="center"
          >
            <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 12 }}>
              <TotalOrders />
            </Grid>

            <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 12 }}>
              <TotalCustomers />
            </Grid>

            <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 12 }}>
              <TotalRevenue />
            </Grid>
          </Grid>
        </Grid>

        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 5 }}>
          <SalesByLocations />
        </Grid>

        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 7 }}>
          <TopSellingProducts />
        </Grid>

        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 8 }}>
          <RecentOrders />
        </Grid>

        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 4 }}>
          <OrderSummary />
        </Grid>

        <Grid size={{ xs: 12, sm: 12, md: 5, lg: 5, xl: 4 }}>
          <RecentTransactions />
        </Grid>

        <Grid size={{ xs: 12, sm: 12, md: 7, lg: 7, xl: 8 }}>
          <ReturningCustomerRate />
        </Grid>
      </Grid>
    </>
  );
};

export default Ecommerce;
