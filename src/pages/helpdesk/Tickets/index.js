import React from "react"; 
import { Link } from "react-router-dom";   
import Grid from "@mui/material/Grid";
import TicketsResolved from "../../../components/HelpDesk/Tickets/TicketsResolved/index.js";
import TicketsInProgress from "../../../components/HelpDesk/Tickets/TicketsInProgress/index.js";
import TicketsDue from "../../../components/HelpDesk/Tickets/TicketsDue/index.js";
import TicketsNewOpen from "../../../components/HelpDesk/Tickets/TicketsNewOpen/index.js";
import AllTickets from "../../../components/HelpDesk/Tickets/AllTickets/index.js";

const Tickets = () => {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-card">
        <h5>Tickets</h5>

        <ul className="breadcrumb">
          <li>
            <Link to="/dashboard/ecommerce/">
              <i className="material-symbols-outlined">home</i>
              Dashboard
            </Link>
          </li> 
          <li>HelpDesk</li>
          <li>Tickets</li>
        </ul>
      </div>

      <Grid container columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}>
        <Grid size={{ xs: 12, sm: 6, md: 3, lg: 3, xl: 3 }}>
          <TicketsResolved />
        </Grid>

        <Grid size={{ xs: 12, sm: 6, md: 3, lg: 3, xl: 3 }}>
          <TicketsInProgress />
        </Grid>

        <Grid size={{ xs: 12, sm: 6, md: 3, lg: 3, xl: 3 }}>
          <TicketsDue />
        </Grid>

        <Grid size={{ xs: 12, sm: 6, md: 3, lg: 3, xl: 3 }}>
          <TicketsNewOpen />
        </Grid>
      </Grid>

      <AllTickets />
    </>
  );
};

export default Tickets;
