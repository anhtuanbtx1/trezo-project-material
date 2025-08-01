import React from "react";
import Grid from "@mui/material/Grid";
import Welcome from "../../components/Dashboard/LMS/Welcome";
import TotalCourses from "../../components/Dashboard/LMS/TotalCourses";
import TotalEnrolled from "../../components/Dashboard/LMS/TotalEnrolled";
import TotalMentors from "../../components/Dashboard/LMS/TotalMentors";
import StudentsInterestedTopics from "../../components/Dashboard/LMS/StudentsInterestedTopics";
import TopInstructors from "../../components/Dashboard/LMS/TopInstructors";
import StudentsProgress from "../../components/Dashboard/LMS/StudentsProgress";
import GroupLessons from "../../components/Dashboard/LMS/GroupLessons";
import EnrolledByCountries from "../../components/Dashboard/LMS/EnrolledByCountries";
import Courses from "../../components/Dashboard/LMS/Courses";
import CoursesSales from "../../components/Dashboard/LMS/CoursesSales";
import TimeSpent from "../../components/Dashboard/LMS/TimeSpent";
import OurTopCourses from "../../components/Dashboard/LMS/OurTopCourses";

const LMS = () => {
  return (
    <>
      <Grid container columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}>
        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 6 }}>
          <Welcome />
        </Grid>

        <Grid size={{ xs: 12, sm: 4, md: 4, lg: 4, xl: 2 }}>
          <TotalCourses />
        </Grid>

        <Grid size={{ xs: 12, sm: 4, md: 4, lg: 4, xl: 2 }}>
          <TotalEnrolled />
        </Grid>

        <Grid size={{ xs: 12, sm: 4, md: 4, lg: 4, xl: 2 }}>
          <TotalMentors />
        </Grid>
      </Grid>

      <Grid container columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}>
        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 6, xl: 7 }}>
          <StudentsInterestedTopics />
        </Grid>

        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 6, xl: 5 }}>
          <TopInstructors />
        </Grid>
      </Grid>

      <Grid
        container
        columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}
        justifyContent={"center"}
      >
        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 6, xl: 4 }}>
          <StudentsProgress />
        </Grid>

        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 6, xl: 4 }}>
          <GroupLessons />
        </Grid>

        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 6, xl: 4 }}>
          <EnrolledByCountries />
        </Grid>
      </Grid>

      <Courses />

      <Grid container columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}>
        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 4 }}>
          <CoursesSales />
        </Grid>

        <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 4 }}>
          <TimeSpent />
        </Grid>

        <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 4 }}>
          <OurTopCourses />
        </Grid>
      </Grid>
    </>
  );
};

export default LMS;
