import React from "react";
import { Grid } from "@mui/material";
import TodaysPayment from "../../components/Dashboard/SaaS/TodaysPayment";
import ActiveUser from "../../components/Dashboard/SaaS/ActiveUser";
import Revenue from "../../components/Dashboard/SaaS/Revenue";
import Conversion from "../../components/Dashboard/SaaS/Conversion";
import ActiveUsers from "../../components/Dashboard/SaaS/ActiveUsers";
import TopRefers from "../../components/Dashboard/SaaS/TopRefers";
import GrossRevenue from "../../components/Dashboard/SaaS/GrossRevenue";
import SalesByCountry from "../../components/Dashboard/SaaS/SalesByCountry";
import LatestTransactions from "../../components/Dashboard/SaaS/LatestTransactions";
import UpgradePlans from "../../components/Dashboard/SaaS/UpgradePlans";
import ProductTradeConditions from "../../components/Dashboard/SaaS/ProductTradeConditions";
import ActiveUsersList from "../../components/Dashboard/SaaS/ActiveUsersList";

const Saas = () => {
  return (
    <>
      <Grid container columnSpacing={{ xs: 3 }}>
        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 9 }}>
          <TodaysPayment />
        </Grid>

        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 3 }}>
          <Grid container columnSpacing={{ xs: 3 }} justifyContent={"center"}>
            <Grid size={{ xs: 12, sm: 6, md: 4, lg: 4, xl: 12 }}>
              <ActiveUser />
            </Grid>

            <Grid size={{ xs: 12, sm: 6, md: 4, lg: 4, xl: 12 }}>
              <Revenue />
            </Grid>

            <Grid size={{ xs: 12, sm: 6, md: 4, lg: 4, xl: 12 }}>
              <Conversion />
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid container columnSpacing={{ xs: 3 }}>
        <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 4 }}>
          <TopRefers />
        </Grid>

        <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 8 }}>
          <ActiveUsers />
        </Grid>
      </Grid>

      <Grid container columnSpacing={{ xs: 3 }}>
        <Grid size={{ xs: 12, sm: 12, md: 8, lg: 8, xl: 9 }}>
          <LatestTransactions />
        </Grid>

        <Grid size={{ xs: 12, sm: 12, md: 4, lg: 4, xl: 3 }}>
          <UpgradePlans />
        </Grid>
      </Grid>

      <Grid container columnSpacing={{ xs: 3 }}>
        <Grid size={{ xs: 12, sm: 12, md: 4, lg: 4, xl: 4 }}>
          <ActiveUsersList />
        </Grid>

        <Grid size={{ xs: 12, sm: 12, md: 8, lg: 8, xl: 8 }}>
          <ProductTradeConditions />
        </Grid>
      </Grid>

      <Grid container columnSpacing={{ xs: 3 }}>
        <Grid size={{ xs: 12, sm: 12, md: 6, lg: 8, xl: 8 }}>
          <GrossRevenue />
        </Grid>

        <Grid size={{ xs: 12, sm: 12, md: 6, lg: 4, xl: 4 }}>
          <SalesByCountry />
        </Grid>
      </Grid>
    </>
  );
};

export default Saas;
