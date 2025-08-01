import React from "react";
import Grid from "@mui/material/Grid";
import ProjectsOverview from "../../components/Dashboard/ProjectManagement/ProjectsOverview";
import ProjectsRoadmap from "../../components/Dashboard/ProjectManagement/ProjectsRoadmap";
import ProjectsProgress from "../../components/Dashboard/ProjectManagement/ProjectsProgress";
import MyTasks from "../../components/Dashboard/ProjectManagement/MyTasks";
import AllProjects from "../../components/Dashboard/ProjectManagement/AllProjects";
import ProjectsAnalysis from "../../components/Dashboard/ProjectManagement/ProjectsAnalysis";
import TeamMembers from "../../components/Dashboard/ProjectManagement/TeamMembers";
import WorkingSchedule from "../../components/Dashboard/ProjectManagement/WorkingSchedule";
import ToDoList from "../../components/Dashboard/ProjectManagement/ToDoList";
import TasksOverview from "../../components/Dashboard/ProjectManagement/TasksOverview";

const ProjectManagement = () => {
  return (
    <>
      <Grid container columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}>
        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 6 }}>
          <ProjectsOverview />
        </Grid>

        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 6 }}>
          <ProjectsRoadmap />
        </Grid>
      </Grid>

      <Grid container columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}>
        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 7 }}>
          <ProjectsProgress />
        </Grid>

        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 5 }}>
          <MyTasks />
        </Grid>
      </Grid>

      <AllProjects />

      <Grid container columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}>
        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 4 }}>
          <ProjectsAnalysis />
        </Grid>

        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 4 }}>
          <TeamMembers />
        </Grid>

        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 4 }}>
          <WorkingSchedule />
        </Grid>
      </Grid>

      <Grid container columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}>
        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 8 }}>
          <ToDoList />
        </Grid>

        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 4 }}>
          <TasksOverview />
        </Grid>
      </Grid>
    </>
  );
};

export default ProjectManagement;
