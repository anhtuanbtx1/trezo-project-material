import React from "react"; 
import { Link } from "react-router-dom";     
import Grid from "@mui/material/Grid";    
import OrderTracking from "../../../../components/eCommerce/OrderTracking";
import OrderSummary from "../../../../components/eCommerce/OrderDetails/OrderSummary";

const Tracking = () => {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-card">
        <h5>Tracking</h5>

        <ul className="breadcrumb">
          <li>
            <Link to="/dashboard/ecommerce/">
              <i className="material-symbols-outlined">home</i>
              Dashboard
            </Link>
          </li>
          <li>eCommerce</li>
          <li>Tracking</li>
        </ul>
      </div>
      
      <Grid container columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}>
        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 8 }}>
          <OrderTracking />
        </Grid>

        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 4 }}>
          <OrderSummary />
        </Grid>
      </Grid>
    </>
  );
};

export default Tracking;
