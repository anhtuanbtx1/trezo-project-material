import * as React from "react";
import { Grid } from "@mui/material";
import Stats from "../../components/Dashboard/Hotel/Stats";
import RoomsAvailability from "../../components/Dashboard/Hotel/RoomsAvailability";
import GuestActivity from "../../components/Dashboard/Hotel/GuestActivity";
import UpcomingVIPReservations from "../../components/Dashboard/Hotel/UpcomingVIPReservations";
import RecentBookings from "../../components/Dashboard/Hotel/RecentBookings";
import PopularRooms from "../../components/Dashboard/Hotel/PopularRooms";
import CustomerRatings from "../../components/Dashboard/Hotel/CustomerRatings";

export default function Page() {
  return (
    <>
      <Grid container columnSpacing={{ xs: 3 }}>
        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 8 }}>
          <Stats />

          <Grid container columnSpacing={{ xs: 3 }}>
            <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 6 }}>
              <RoomsAvailability />
            </Grid>

            <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 6 }}>
              <GuestActivity />
            </Grid>
          </Grid>

          <UpcomingVIPReservations />
        </Grid>

        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 4 }}>
          <RecentBookings />
        </Grid>
      </Grid>

      <PopularRooms />

      <CustomerRatings />
    </>
  );
}
