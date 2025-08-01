import React from "react"; 
import { Link } from "react-router-dom";        
import Grid from "@mui/material/Grid";
import TrackingID from "../../../../components/eCommerce/OrderDetails/TrackingID"; 
import RecentOrders from "../../../../components/eCommerce/OrderDetails/RecentOrders";
import OrderSummary from "../../../../components/eCommerce/OrderDetails/OrderSummary";
import BillingDetails from "../../../../components/eCommerce/OrderDetails/BillingDetails";
import ShippingDetails from "../../../../components/eCommerce/OrderDetails/ShippingDetails";
import DeliveryDetails from "../../../../components/eCommerce/OrderDetails/DeliveryDetails";

const OrderDetails = () => {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-card">
        <h5>Order Details</h5>

        <ul className="breadcrumb">
          <li>
            <Link to="/dashboard/ecommerce/">
              <i className="material-symbols-outlined">home</i>
              Dashboard
            </Link>
          </li>
          <li>eCommerce</li>
          <li>Order Details</li>
        </ul>
      </div>

      <Grid container columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}>
        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 8 }}>
          <TrackingID />

          <RecentOrders />
        </Grid>

        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 4 }}>
          <OrderSummary />
        </Grid>
      </Grid>

      <Grid container columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}>
        <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 4 }}>
          <BillingDetails />
        </Grid>

        <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 4 }}>
          <ShippingDetails />
        </Grid>

        <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 4 }}>
          <DeliveryDetails />
        </Grid> 
      </Grid>
    </>
  );
};

export default OrderDetails;
