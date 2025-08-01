import React from "react";
import { Grid } from "@mui/material";
import TotalIncome from "../../components/Dashboard/Finance/TotalIncome";
import TotalExpenses from "../../components/Dashboard/Finance/TotalExpenses";
import AccountsReceivable from "../../components/Dashboard/Finance/AccountsReceivable";
import AccountPayable from "../../components/Dashboard/Finance/AccountPayable";
import Static from "../../components/Dashboard/Finance/Static";
import CashAtEndOfTheMonth from "../../components/Dashboard/Finance/CashAtEndOfTheMonth";
import WeeklyExpenses from "../../components/Dashboard/Finance/WeeklyExpenses";
import IncomeSource from "../../components/Dashboard/Finance/IncomeSource";
import NetProfit from "../../components/Dashboard/Finance/NetProfit";
import TransactionHistory from "../../components/Dashboard/Finance/TransactionHistory";
import ExpenseBreakdown from "../../components/Dashboard/Finance/ExpenseBreakdown";
import Cards from "../../components/Dashboard/Finance/Cards";

const Finance = () => {
  return (
    <>
      <Grid container columnSpacing={{ xs: 3 }}>
        <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 3 }}>
          <TotalIncome />
        </Grid>

        <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 3 }}>
          <TotalExpenses />
        </Grid>

        <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 3 }}>
          <AccountsReceivable />
        </Grid>

        <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 3 }}>
          <AccountPayable />
        </Grid>
      </Grid>

      <Grid container columnSpacing={{ xs: 3 }}>
        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 8 }}>
          <Static />
        </Grid>

        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 4 }}>
          <Grid container columnSpacing={{ xs: 3 }}>
            <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 12 }}>
              <CashAtEndOfTheMonth />
            </Grid>

            <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 12 }}>
              <WeeklyExpenses />
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid container columnSpacing={{ xs: 3 }}>
        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 4 }}>
          <Grid container columnSpacing={{ xs: 3 }}>
            <Grid size={{ xs: 12, sm: 12, md: 5, lg: 5, xl: 12 }}>
              <IncomeSource />
            </Grid>

            <Grid size={{ xs: 12, sm: 12, md: 7, lg: 7, xl: 12 }}>
              <NetProfit />
            </Grid>
          </Grid>
        </Grid>

        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 8 }}>
          <TransactionHistory />
        </Grid>
      </Grid>

      <Grid container columnSpacing={{ xs: 3 }} justifyContent={"center"}>
        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 8 }}>
          <Cards />
        </Grid>

        <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 4 }}>
          <ExpenseBreakdown />
        </Grid>
      </Grid>
    </>
  );
};

export default Finance;
