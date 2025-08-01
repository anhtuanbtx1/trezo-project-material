import React from "react"; 
import { Link } from "react-router-dom"; 
import Grid from "@mui/material/Grid";
import WorkingSchedule from "../../components/Apps/Calendar/WorkingSchedule";
import FullCalendarDemo from "../../components/Apps/Calendar/FullCalendarDemo";

const Calendar = () => {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-card">
        <h5>Calendar</h5>

        <ul className="breadcrumb">
          <li>
            <Link to="/dashboard/ecommerce/">
              <i className="material-symbols-outlined">home</i>
              Dashboard
            </Link>
          </li>
          <li>Apps</li>
          <li>Calendar</li>
        </ul>
      </div>

      <Grid container columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}>
        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 8 }}>
         <FullCalendarDemo />
        </Grid>

        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 4 }}>
          <WorkingSchedule />
        </Grid>
      </Grid>
    </>
  );
};

export default Calendar;
