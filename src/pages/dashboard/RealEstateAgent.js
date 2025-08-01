import * as React from "react";
import { Grid } from "@mui/material";
import Welcome from "../../components/Dashboard/RealEstateAgent/Welcome";
import Stats from "../../components/Dashboard/RealEstateAgent/Stats";
import TotalRevenue from "../../components/Dashboard/RealEstateAgent/TotalRevenue";
import TopChannels from "../../components/Dashboard/RealEstateAgent/TopChannels";
import RecentClients from "../../components/Dashboard/RealEstateAgent/RecentClients";
import MyFeaturedListings from "../../components/Dashboard/RealEstateAgent/MyFeaturedListings";
import RevenueGoalProgress from "../../components/Dashboard/RealEstateAgent/RevenueGoalProgress";
import PropertiesByCountry from "../../components/Dashboard/RealEstateAgent/PropertiesByCountry";
import MobileApp from "../../components/Dashboard/RealEstateAgent/MobileApp";
import LatestTransactions from "../../components/Dashboard/RealEstateAgent/LatestTransactions";
import ClientRatings from "../../components/Dashboard/RealEstateAgent/ClientRatings";

export default function Page() {
  return (
    <>
      <Welcome />

      <Stats />

      <Grid container columnSpacing={{ xs: 3 }}>
        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 8 }}>
          <TotalRevenue />
        </Grid>

        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 4 }}>
          <TopChannels />
        </Grid>
      </Grid>

      <Grid container columnSpacing={{ xs: 3 }}>
        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 4 }}>
          <RecentClients />
        </Grid>

        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 8 }}>
          <MyFeaturedListings />
        </Grid>
      </Grid>

      <Grid container columnSpacing={{ xs: 3 }}>
        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 8 }}>
          <RevenueGoalProgress />
        </Grid>

        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 4 }}>
          <PropertiesByCountry />
        </Grid>
      </Grid>

      <Grid container columnSpacing={{ xs: 3 }}>
        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 3 }}>
          <MobileApp />
        </Grid>

        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 9 }}>
          <LatestTransactions />
        </Grid>
      </Grid>

      <ClientRatings />
    </>
  );
}
