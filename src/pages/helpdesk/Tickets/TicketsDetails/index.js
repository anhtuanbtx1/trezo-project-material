import React from "react";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Ticket from "../../../../components/HelpDesk/TicketDetails/Ticket";
import TicketDescription from "../../../../components/HelpDesk/TicketDetails/TicketDescription";
import Comments from "../../../../components/HelpDesk/TicketDetails/TicketDescription/Comments";
import Attachments from "../../../../components/HelpDesk/TicketDetails/Attachments";

const TicketsDetails = () => {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-card">
        <h5>Tickets Details</h5>

        <ul className="breadcrumb">
          <li>
            <Link to="/dashboard/ecommerce/">
              <i className="material-symbols-outlined">home</i>
              Dashboard
            </Link>
          </li>
          <li>HelpDesk</li>
          <li>Tickets</li>
          <li>Tickets Details</li>
        </ul>
      </div>

      <Ticket />

      <Grid container columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}>
        <Grid size={{ xs: 12, sm: 12, md: 7, lg: 7, xl: 8 }}>
          <TicketDescription />

          <Comments />
        </Grid>

        <Grid size={{ xs: 12, sm: 12, md: 5, lg: 5, xl: 4 }}>
          <Attachments />
        </Grid>
      </Grid>
    </>
  );
};

export default TicketsDetails;
