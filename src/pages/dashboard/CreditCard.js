import * as React from "react";
import { Grid } from "@mui/material";
import MyCards from "../../components/Dashboard/CreditCard/MyCards";
import TotalBalance from "../../components/Dashboard/CreditCard/TotalBalance";
import TotalExpense from "../../components/Dashboard/CreditCard/TotalExpense";
import CardsWithAmount from "../../components/Dashboard/CreditCard/CardsWithAmount";
import DailyLimit from "../../components/Dashboard/CreditCard/DailyLimit";
import QuickTransfer from "../../components/Dashboard/CreditCard/QuickTransfer";
import RecentTransactions from "../../components/Dashboard/CreditCard/RecentTransactions";
import CreditUtilizationRatio from "../../components/Dashboard/CreditCard/CreditUtilizationRatio";
import MonthlySpending from "../../components/Dashboard/CreditCard/MonthlySpending";
import SpendingBreakdown from "../../components/Dashboard/CreditCard/SpendingBreakdown";
import InterestChargeFees from "../../components/Dashboard/CreditCard/InterestChargeFees";
import Statistics from "../../components/Dashboard/CreditCard/Statistics";

export default function Page() {
  return (
    <>
      <Grid container columnSpacing={{ xs: 3 }}>
        <Grid size={{ xs: 12, sm: 12, md: 8, lg: 8, xl: 8 }}>
          <MyCards />
        </Grid>

        <Grid size={{ xs: 12, sm: 12, md: 4, lg: 4, xl: 4 }}>
          <Grid container columnSpacing={{ xs: 3 }}>
            <Grid size={{ xs: 12, sm: 6, md: 12, lg: 12, xl: 12 }}>
              <TotalBalance />
            </Grid>

            <Grid size={{ xs: 12, sm: 6, md: 12, lg: 12, xl: 12 }}>
              <TotalExpense />
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid container columnSpacing={{ xs: 3 }}>
        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 4, xl: 4 }}>
          <CardsWithAmount />
        </Grid>

        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 4, xl: 4 }}>
          <DailyLimit />
        </Grid>

        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 4, xl: 4 }}>
          <QuickTransfer />
        </Grid>
      </Grid>

      <Grid container columnSpacing={{ xs: 3 }}>
        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 9 }}>
          <RecentTransactions />
        </Grid>

        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 3 }}>
          <Grid container columnSpacing={{ xs: 3 }}>
            <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 12 }}>
              <CreditUtilizationRatio />
            </Grid>

            <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 12 }}>
              <MonthlySpending />
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid container columnSpacing={{ xs: 3 }} justifyContent={"center"}>
        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 6, xl: 4 }}>
          <SpendingBreakdown />
        </Grid>

        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 6, xl: 4 }}>
          <InterestChargeFees />
        </Grid>

        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 6, xl: 4 }}>
          <Statistics />
        </Grid>
      </Grid>
    </>
  );
}
