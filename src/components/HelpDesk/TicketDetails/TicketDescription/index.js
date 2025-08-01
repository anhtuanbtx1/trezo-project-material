"use client";

import * as React from "react";
import { Card } from "@mui/material";
import styles from "./TicketDescription.module.css";

const TicketDescription = () => {
  return (
    <>
      <Card
        sx={{
          boxShadow: "none",
          borderRadius: "7px",
          mb: "25px",
          padding: { xs: "18px", sm: "20px", lg: "25px" },
        }}
        className="rmui-card"
      >
        <div className={styles.ticketDetailsCard}>
          <h6>Ticket Description</h6>

          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>

          <h6>Network Infrastructure for Trezo</h6>

          <ul>
            <li>Login Issues</li>
            <li>Cloud Migration</li>
            <li>Website Revamp</li>
            <li>Mobile Application</li>
            <li>System Deployment</li>
          </ul>

          <h6>Here is the Code:</h6>
          <code>
            &lt;<span className="red">span</span>
            <span className="green">class</span>=
            <span className="blue">&quot;material-symbols-outlined&quot;</span>
            &gt;search&lt;/<span className="red">span</span>&gt;
          </code>
        </div>
      </Card>
    </>
  );
};

export default TicketDescription;
