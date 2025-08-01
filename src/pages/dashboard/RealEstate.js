import React from "react";
import { Grid } from "@mui/material";
import ActiveTotalProperty from "../../components/Dashboard/RealEstate/ActiveTotalProperty";
import Revenue from "../../components/Dashboard/RealEstate/Revenue";
import NewListingsVSSoldProperties from "../../components/Dashboard/RealEstate/NewListingsVSSoldProperties";
import PropertiesForSale from "../../components/Dashboard/RealEstate/PropertiesForSale";
import PropertiesForRent from "../../components/Dashboard/RealEstate/PropertiesForRent";
import NewCustomersThisMonth from "../../components/Dashboard/RealEstate/NewCustomersThisMonth";
import MostSalesLocation from "../../components/Dashboard/RealEstate/MostSalesLocation";
import RentalIncome from "../../components/Dashboard/RealEstate/RentalIncome";
import SocialSearch from "../../components/Dashboard/RealEstate/SocialSearch";
import RecentProperty from "../../components/Dashboard/RealEstate/RecentProperty";
import CustomerReviews from "../../components/Dashboard/RealEstate/CustomerReviews";
import TopProperty from "../../components/Dashboard/RealEstate/TopProperty";
import LatestTransactions from "../../components/Dashboard/RealEstate/LatestTransactions";

const RealEstate = () => {
  return (
    <>
      <Grid container columnSpacing={{ xs: 3 }}>
        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 4 }}>
          <Grid container columnSpacing={{ xs: 3 }}>
            <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 12 }}>
              <ActiveTotalProperty />
            </Grid>

            <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 12 }}>
              <Revenue />
            </Grid>
          </Grid>
        </Grid>

        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 8 }}>
          <NewListingsVSSoldProperties />
        </Grid>
      </Grid>

      <Grid container columnSpacing={{ xs: 3 }} justifyContent={"center"}>
        <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 4 }}>
          <PropertiesForSale />
        </Grid>

        <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 4 }}>
          <PropertiesForRent />
        </Grid>

        <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 4 }}>
          <NewCustomersThisMonth />
        </Grid>
      </Grid>

      <Grid container columnSpacing={{ xs: 3 }}>
        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 4 }}>
          <MostSalesLocation />
        </Grid>

        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 8 }}>
          <RentalIncome />

          <Grid container columnSpacing={{ xs: 3 }}>
            <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 6 }}>
              <SocialSearch />
            </Grid>

            <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 6 }}>
              <RecentProperty />
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid container columnSpacing={{ xs: 3 }}>
        <Grid size={{ xs: 12, sm: 12, md: 7, lg: 6, xl: 8 }}>
          <CustomerReviews />
        </Grid>

        <Grid size={{ xs: 12, sm: 12, md: 5, lg: 6, xl: 4 }}>
          <TopProperty />
        </Grid>
      </Grid>

      <LatestTransactions />
    </>
  );
};

export default RealEstate;
