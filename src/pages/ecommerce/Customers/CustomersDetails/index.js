import React from "react"; 
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import TransactionsHistory from "../../../../components/eCommerce/CustomerDetails/TransactionsHistory";
import CustomerId from "../../../../components/eCommerce/CustomerDetails/CustomerId";

const CustomersDetails = () => {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-card">
        <h5>Customers Details</h5>

        <ul className="breadcrumb">
          <li>
            <Link to="/dashboard/ecommerce/">
              <i className="material-symbols-outlined">home</i>
              Dashboard
            </Link>
          </li>
          <li>eCommerce</li>
          <li>Customers</li>
          <li>Customers Details</li>
        </ul>
      </div>

      <Grid container columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}>
        <Grid size={{ xs: 12, sm: 12, md: 8, lg: 8, xl: 9 }}>
          <TransactionsHistory />
        </Grid>

        <Grid size={{ xs: 12, sm: 12, md: 4, lg: 4, xl: 3 }}>
          <CustomerId />
        </Grid>
      </Grid>
    </>
  );
};

export default CustomersDetails;
