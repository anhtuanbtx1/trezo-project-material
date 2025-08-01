import * as React from "react";
import Grid from "@mui/material/Grid";
import Welcome from "../../components/Dashboard/Doctor/Welcome";
import Stats from "../../components/Dashboard/Doctor/Stats";
import PatientRetention from "../../components/Dashboard/Doctor/PatientRetention";
import PatientDistribution from "../../components/Dashboard/Doctor/PatientDistribution";
import UpgragePlan from "../../components/Dashboard/Doctor/UpgragePlan";
import IncomeVSExpense from "../../components/Dashboard/Doctor/IncomeVSExpense";
import TodaysSchedule from "../../components/Dashboard/Doctor/TodaysSchedule";
import RecentLabReports from "../../components/Dashboard/Doctor/RecentLabReports";
import MyRecentPatients from "../../components/Dashboard/Doctor/MyRecentPatients";

const Doctor = () => {
  return (
    <>
      <Welcome />

      <div className="doctor-content">
        <Stats />

        <Grid
          container
          columnSpacing={{ xs: 1, sm: 2, md: 3, lg: 3 }}
          justifyContent="center"
        >
          <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 8 }}>
            <Grid
              container
              columnSpacing={{ xs: 1, sm: 2, md: 3, lg: 3 }}
              justifyContent="center"
            >
              <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
                <PatientRetention />
              </Grid>

              <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
                <PatientDistribution />
              </Grid>

              <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12 }}>
                <UpgragePlan />

                <IncomeVSExpense />
              </Grid>
            </Grid>
          </Grid>

          <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 4 }}>
            <TodaysSchedule />
          </Grid>
        </Grid>

        <Grid
          container
          columnSpacing={{ xs: 1, sm: 2, md: 3, lg: 3 }}
          justifyContent="center"
        >
          <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 9 }}>
            <MyRecentPatients />
          </Grid>

          <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 3 }}>
            <RecentLabReports />
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default Doctor;
