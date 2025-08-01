import React from "react"; 
import { Link } from "react-router-dom";   
import Grid from "@mui/material/Grid";
import TotalBalance from "../../components/Finance/Wallet/TotalBalance";
import TotalIncome from "../../components/Finance/Wallet/TotalIncome";
import TotalExpenses from "../../components/Finance/Wallet/TotalExpenses";
import Static from "../../components/Dashboard/Finance/Static";
import TransactionHistory from "../../components/Dashboard/Finance/TransactionHistory";
import Cards from "../../components/Finance/Wallet/Cards";

const Wallet = () => {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-card">
        <h5>Wallet</h5>

        <ul className="breadcrumb">
          <li>
            <Link to="/dashboard/ecommerce/">
              <i className="material-symbols-outlined">home</i>
              Dashboard
            </Link>
          </li>
          <li>Finance</li> 
          <li>Wallet</li>
        </ul>
      </div>

      <Grid
        container
        columnSpacing={{ xs: 1, sm: 2, md: 3, lg: 3 }}
        justifyContent="center"
      >
        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 4 }}>
          <Grid
            container
            columnSpacing={{ xs: 1, sm: 2, md: 3, lg: 3 }}
            justifyContent="center"
          >
            <Grid size={{ xs: 12, sm: 6, md: 4, lg: 4, xl: 12 }}>
              <TotalBalance />
            </Grid>

            <Grid size={{ xs: 12, sm: 6, md: 4, lg: 4, xl: 12 }}>
              <TotalIncome />
            </Grid>

            <Grid size={{ xs: 12, sm: 6, md: 4, lg: 4, xl: 12 }}>
              <TotalExpenses />
            </Grid>
          </Grid>
        </Grid>

        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 8 }}>
          <Static />
        </Grid>
      </Grid>

      <Grid
        container
        columnSpacing={{ xs: 1, sm: 2, md: 3, lg: 3 }}
        justifyContent="center"
      >
        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 8 }}>
          <TransactionHistory />
        </Grid>

        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 4 }}>
          <Cards />
        </Grid>
      </Grid>
    </>
  );
};

export default Wallet;
