import React from "react";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import NewTicketsSolvedTickets from "../../../components/HelpDesk/Reports/NewTicketsSolvedTickets";
import TicketsStatus from "../../../components/HelpDesk/Reports/TicketsStatus";
import SupportOverview from "../../../components/HelpDesk/Reports/SupportOverview";
import CustomerSatisfaction from "../../../components/HelpDesk/Reports/CustomerSatisfaction";
import ResponseTime from "../../../components/HelpDesk/Reports/ResponseTime";
import PerformanceOfAgents from "../../../components/Dashboard/HelpDesk/PerformanceOfAgents";

const Reports = () => {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-card">
        <h5>Reports</h5>

        <ul className="breadcrumb">
          <li>
            <Link to="/dashboard/ecommerce/">
              <i className="material-symbols-outlined">home</i>
              Dashboard
            </Link>
          </li>
          <li>HelpDesk</li>
          <li>Reports</li>
        </ul>
      </div>

      <Grid container columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}>
        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 4 }}>
          <NewTicketsSolvedTickets />
        </Grid>

        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 8 }}>
          <TicketsStatus />
        </Grid>
      </Grid>

      <Grid container columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}>
        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 4 }}>
          <SupportOverview />
        </Grid>

        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 4 }}>
          <CustomerSatisfaction />
        </Grid>

        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 4 }}>
          <ResponseTime />
        </Grid>
      </Grid>

      <PerformanceOfAgents />
    </>
  );
};

export default Reports;
