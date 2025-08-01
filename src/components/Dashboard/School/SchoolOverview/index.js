"use client";

import React from "react";
import { Grid, Box, Typography } from "@mui/material";
import Stats from "./Stats";
import UpcomingEvents from "../UpcomingEvents";

const SchoolOverview = () => {
  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <>
      <Box sx={{ mb: "25px" }}>
        <Box
          sx={{
            display: { xs: "block", md: "flex" },
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box>
            <Typography
              variant="h5"
              sx={{
                mb: { xs: "6px", md: "3px" },
                fontWeight: 600,
                fontSize: "20px",
              }}
            >
              School Overview Dashboard
            </Typography>

            <Typography>
              Manage Students, Teachers, and School Data Seamlessly!
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              mt: { xs: "12px", lg: 0 },
            }}
          >
            <Box
              sx={{
                borderRadius: "7px",
                display: "flex",
                alignItems: "center",
                color: "primary.500",
                py: "3.5px",
                px: "15px",
                bgcolor: "primary.50",
                border: "1px solid",
                borderColor: "primary.100",
                gap: "5px",
              }}
            >
              <i className="ri-calendar-line" style={{ fontSize: "16px" }}></i>
              Today - {formattedDate}
            </Box>
          </Box>
        </Box>
      </Box>

      <Grid container columnSpacing={{ xs: 3 }}>
        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 8, xl: 8 }}>
          <Stats />
        </Grid>

        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 4, xl: 4 }}>
          <UpcomingEvents />
        </Grid>
      </Grid>
    </>
  );
};

export default SchoolOverview;
