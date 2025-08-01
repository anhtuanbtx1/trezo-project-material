import React from "react";
import { Grid } from "@mui/material";
import TotalRevenue from "../../components/Dashboard/Shipment/TotalRevenue";
import TotalShipment from "../../components/Dashboard/Shipment/TotalShipment";
import TotalCustomer from "../../components/Dashboard/Shipment/TotalCustomer";
import TotalOrder from "../../components/Dashboard/Shipment/TotalOrder";
import ShipmentDelivered from "../../components/Dashboard/Shipment/ShipmentDelivered";
import AverageDeliveryTime from "../../components/Dashboard/Shipment/AverageDeliveryTime";
import LiveShipmentStatus from "../../components/Dashboard/Shipment/LiveShipmentStatus";
import TrackingOrder from "../../components/Dashboard/Shipment/TrackingOrder";
import ShipmentToTopCountries from "../../components/Dashboard/Shipment/ShipmentToTopCountries";
import TopShippingMethods from "../../components/Dashboard/Shipment/TopShippingMethods";
import TodaysShipments from "../../components/Dashboard/Shipment/TodaysShipments";
import OnTimeDelivery from "../../components/Dashboard/Shipment/OnTimeDelivery";
import ShipmentList from "../../components/Dashboard/Shipment/ShipmentList";
import Chat from "../../components/Dashboard/Shipment/Chat";

const Shipment = () => {
  return (
    <>
      <Grid container columnSpacing={{ xs: 3 }}>
        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 6 }}>
          <Grid container columnSpacing={{ xs: 3 }}>
            <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 6 }}>
              <TotalRevenue />
            </Grid>

            <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 6 }}>
              <TotalShipment />
            </Grid>

            <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 6 }}>
              <TotalCustomer />
            </Grid>

            <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 6 }}>
              <TotalOrder />
            </Grid>
          </Grid>
        </Grid>

        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 6 }}>
          <ShipmentDelivered />
        </Grid>
      </Grid>

      <Grid container columnSpacing={{ xs: 3 }}>
        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 8 }}>
          <Grid container columnSpacing={{ xs: 3 }}>
            <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 6 }}>
              <AverageDeliveryTime />
            </Grid>

            <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 6 }}>
              <LiveShipmentStatus />
            </Grid>
          </Grid>

          <TrackingOrder />
        </Grid>

        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 4 }}>
          <ShipmentToTopCountries />

          <Chat />
        </Grid>
      </Grid>

      <Grid container columnSpacing={{ xs: 3 }} justifyContent={"center"}>
        <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 4 }}>
          <TopShippingMethods />
        </Grid>

        <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 4 }}>
          <TodaysShipments />
        </Grid>

        <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 4 }}>
          <OnTimeDelivery />
        </Grid>
      </Grid>

      <ShipmentList />
    </>
  );
};

export default Shipment;
