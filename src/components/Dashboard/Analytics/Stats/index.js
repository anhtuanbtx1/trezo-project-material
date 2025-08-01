"use client";

import React from "react";
import { Card, Box} from "@mui/material";
import Grid from "@mui/material/Grid";
import WebsiteVisits from "./WebsiteVisits";
import NewRegisters from "./NewRegisters";
import styles from "./Stats.module.css"

const Stats = () => {
  return (
    <>
      <Card
        sx={{
          position: "relative",
          boxShadow: "none",
          borderRadius: "7px",
          mb: "25px",
          padding: { xs: "18px", sm: "20px", lg: "25px" },
        }}
        className="rmui-card"
      >
        <Grid
          container
          columnSpacing={{ xs: 1, sm: 2, md: 3, lg: 2 }} 
        >
          <Grid size={{ xs: 12, sm: 6, lg: 4 }} className={styles.gridItem}>
            <WebsiteVisits />
          </Grid>

          <Grid size={{ xs: 12, sm: 6, lg: 4 }} className={styles.gridItem}>
            <NewRegisters />
          </Grid> 
        </Grid>

        <Box 
          className={styles.shape}
          sx={{
            display: {xs: 'none', lg: 'block'}
          }}
        >
          <img
            src="/images/spring-fat.png"
            alt="spring-fat"
            width={230}
            height={130}
          />
        </Box>
      </Card>
    </>
  );
};

export default Stats;
