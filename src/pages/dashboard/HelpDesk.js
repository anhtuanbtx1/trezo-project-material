import React from "react";
import Grid from "@mui/material/Grid";
import Congratulations from "../../components/Dashboard/HelpDesk/Congratulations";
import TicketsResolved from "../../components/Dashboard/HelpDesk/TicketsResolved";
import TicketsInProgress from "../../components/Dashboard/HelpDesk/TicketsInProgress";
import TicketsDue from "../../components/Dashboard/HelpDesk/TicketsDue";
import TicketsNewOpen from "../../components/Dashboard/HelpDesk/TicketsNewOpen";
import TicketsStatus from "../../components/Dashboard/HelpDesk/TicketsStatus";
import CustomerSatisfaction from "../../components/Dashboard/HelpDesk/CustomerSatisfaction";
import ResponseTime from "../../components/Dashboard/HelpDesk/ResponseTime";
import PerformanceOfAgents from "../../components/Dashboard/HelpDesk/PerformanceOfAgents";
import NewTicketsSolvedTickets from "../../components/Dashboard/HelpDesk/NewTicketsSolvedTickets";
import RecentCustomerRatings from "../../components/Dashboard/HelpDesk/RecentCustomerRatings";
import ToDoList from "../../components/Dashboard/HelpDesk/ToDoList";
import SupportOverview from "../../components/Dashboard/HelpDesk/SupportOverview";

const HelpDesk = () => {
  return (
    <>
      <Grid container columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}>
        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 4, xl: 4 }}>
          <Congratulations />

          <Grid container columnSpacing={{ xs: 1, sm: 3, md: 3, lg: 3 }}>
            <Grid size={{ xs: 12, sm: 6, md: 6, lg: 12, xl: 6 }}>
              <TicketsResolved />
            </Grid>

            <Grid size={{ xs: 12, sm: 6, md: 6, lg: 12, xl: 6 }}>
              <TicketsInProgress />
            </Grid>

            <Grid size={{ xs: 12, sm: 6, md: 6, lg: 12, xl: 6 }}>
              <TicketsDue />
            </Grid>

            <Grid size={{ xs: 12, sm: 6, md: 6, lg: 12, xl: 6 }}>
              <TicketsNewOpen />
            </Grid>
          </Grid>
        </Grid>

        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 8, xl: 8 }}>
          <TicketsStatus />

          <Grid container columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}>
            <Grid size={{ xs: 12, sm: 6, md: 6, lg: 12, xl: 6 }}>
              <CustomerSatisfaction />
            </Grid>

            <Grid size={{ xs: 12, sm: 6, md: 6, lg: 12, xl: 6 }}>
              <ResponseTime />
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <PerformanceOfAgents />

      <Grid container columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}>
        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 7 }}>
          <NewTicketsSolvedTickets />
        </Grid>

        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 5 }}>
          <RecentCustomerRatings />
        </Grid>
      </Grid>

      <Grid container columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}>
        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 8 }}>
          <ToDoList />
        </Grid>

        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 4 }}>
          <SupportOverview />
        </Grid>
      </Grid>
    </>
  );
};

export default HelpDesk;
