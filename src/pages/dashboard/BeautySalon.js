import React from "react";
import { Grid } from "@mui/material";
import Welcome from "../../components/Dashboard/BeautySalon/Welcome";
import CustomerSatisfactionRate from "../../components/Dashboard/BeautySalon/CustomerSatisfactionRate";
import NewCustomerThisMonth from "../../components/Dashboard/BeautySalon/NewCustomerThisMonth";
import TopSellingProducts from "../../components/Dashboard/BeautySalon/TopSellingProducts";
import CustomersFromChannels from "../../components/Dashboard/BeautySalon/CustomersFromChannels";
import FeaturedServices from "../../components/Dashboard/BeautySalon/FeaturedServices";
import RecentAppointment from "../../components/Dashboard/BeautySalon/RecentAppointment";
import RevenueByServices from "../../components/Dashboard/BeautySalon/RevenueByServices";
import TopStylistPerformance from "../../components/Dashboard/BeautySalon/TopStylistPerformance";
import TopCustomers from "../../components/Dashboard/BeautySalon/TopCustomers";

const BeautySalon = () => {
  return (
    <>
      <Grid
        container
        columnSpacing={{ xs: 1, sm: 2, md: 3, lg: 3 }}
        justifyContent="center"
      >
        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 6 }}>
          <Welcome />
        </Grid>

        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 6 }}>
          <Grid
            container
            columnSpacing={{ xs: 1, sm: 2, md: 3, lg: 3 }}
            justifyContent="center"
          >
            <Grid size={{ xs: 12, sm: 6 }}>
              <CustomerSatisfactionRate />
            </Grid>

            <Grid size={{ xs: 12, sm: 6 }}>
              <NewCustomerThisMonth />
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid
        container
        columnSpacing={{ xs: 1, sm: 2, md: 3, lg: 3 }}
        justifyContent="center"
      >
        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 8 }}>
          <TopSellingProducts />
        </Grid>

        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 4 }}>
          <CustomersFromChannels />
        </Grid>
      </Grid>

      <Grid
        container
        columnSpacing={{ xs: 1, sm: 2, md: 3, lg: 3 }}
        justifyContent="center"
      >
        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 4 }}>
          <FeaturedServices />
        </Grid>

        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 8 }}>
          <RecentAppointment />
        </Grid>
      </Grid>

      <Grid
        container
        columnSpacing={{ xs: 1, sm: 2, md: 3, lg: 3 }}
        justifyContent="center"
      >
        <Grid size={{ xs: 12, sm: 12, md: 7, lg: 12, xl: 8 }}>
          <RevenueByServices />
        </Grid>

        <Grid size={{ xs: 12, sm: 12, md: 5, lg: 12, xl: 4 }}>
          <TopStylistPerformance />
        </Grid>
      </Grid>

      <TopCustomers />
    </>
  );
};

export default BeautySalon;
