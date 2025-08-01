import React from "react";
import { Grid } from "@mui/material";
import Welcome from "../../components/Dashboard/HRM/Welcome";
import TotalEmployees from "../../components/Dashboard/HRM/TotalEmployees";
import ResignedEmployees from "../../components/Dashboard/HRM/ResignedEmployees";
import NewEmployees from "../../components/Dashboard/HRM/NewEmployees";
import EmployeeAttendanceTrends from "../../components/Dashboard/HRM/EmployeeAttendanceTrends";
import EmployeeWorkFormat from "../../components/Dashboard/HRM/EmployeeWorkFormat";
import EmployeeSalary from "../../components/Dashboard/HRM/EmployeeSalary";
import EmployeeLeaveRequest from "../../components/Dashboard/HRM/EmployeeLeaveRequest";
import EmployeeList from "../../components/Dashboard/HRM/EmployeeList";

const HRM = () => {
  return (
    <>
      <Welcome />

      <Grid container columnSpacing={{ xs: 3 }} justifyContent={"center"}>
        <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 4 }}>
          <TotalEmployees />
        </Grid>

        <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 4 }}>
          <ResignedEmployees />
        </Grid>

        <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 4 }}>
          <NewEmployees />
        </Grid>
      </Grid>

      <Grid container columnSpacing={{ xs: 3 }}>
        <Grid size={{ xs: 12, sm: 12, md: 8, lg: 8, xl: 8 }}>
          <EmployeeAttendanceTrends />
        </Grid>

        <Grid size={{ xs: 12, sm: 12, md: 4, lg: 4, xl: 4 }}>
          <EmployeeWorkFormat />
        </Grid>
      </Grid>

      <Grid container columnSpacing={{ xs: 3 }}>
        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 4 }}>
          <EmployeeSalary />
        </Grid>

        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 8 }}>
          <EmployeeLeaveRequest />
        </Grid>
      </Grid>

      <EmployeeList />
    </>
  );
};

export default HRM;
