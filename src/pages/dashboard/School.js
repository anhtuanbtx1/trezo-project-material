import React from "react";
import { Grid } from "@mui/material";
import SchoolOverview from "../../components/Dashboard/School/SchoolOverview";
import AttendanceAnalytics from "../../components/Dashboard/School/AttendanceAnalytics";
import Teachers from "../../components/Dashboard/School/Teachers";
import StudentsOverview from "../../components/Dashboard/School/StudentsOverview";
import NewAdmissions from "../../components/Dashboard/School/NewAdmissions";
import NoticeBoard from "../../components/Dashboard/School/NoticeBoard";
import StudentsList from "../../components/Dashboard/School/StudentsList";

const School = () => {
  return (
    <>
      <SchoolOverview />

      <Grid container columnSpacing={{ xs: 3 }} justifyContent={"center"}>
        <Grid size={{ xs: 12, sm: 12, md: 7, lg: 6, xl: 8 }}>
          <AttendanceAnalytics />
        </Grid>

        <Grid size={{ xs: 12, sm: 12, md: 5, lg: 6, xl: 4 }}>
          <Teachers />
        </Grid>
      </Grid>

      <Grid container columnSpacing={{ xs: 3 }} justifyContent={"center"}>
        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 6, xl: 4 }}>
          <StudentsOverview />
        </Grid>

        <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 4 }}>
          <NewAdmissions />
        </Grid>

        <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 4 }}>
          <NoticeBoard />
        </Grid>
      </Grid>

      <StudentsList />
    </>
  );
};

export default School;
