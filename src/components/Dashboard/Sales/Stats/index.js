"use client";

import React from "react";
import { Box, Typography, Button } from "@mui/material";
import Grid from "@mui/material/Grid";
import TotalSales from "./TotalSales";
import TotalOrders from "./TotalOrders";
import TotalProfit from "./TotalProfit";
import TotalRevenue from "./TotalRevenue";
import DateTimePickerDemo from "./DateTimePickerDemo";

const Stats = () => {
  return (
    <>
      <Box>
        <Box
          sx={{
            display: { md: "flex" },
            alignItems: "center",
            justifyContent: "space-between",
            mb: "25px",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: "16px", md: "24px" },
              fontWeight: "normal",
              display: "flex",
              alignItems: "center",
              gap: '5px'
            }}
            className="text-black"
          >
            Welcome Back,{" "}
            <Box
              sx={{ color: "primary.main", fontWeight: "500" }}
            >
              Olivia!
            </Box>{" "}
            <img
              src="/images/icons/dog.svg"
              alt="dog"
              width={32}
              height={32}
            />
          </Typography>

          <Box 
            sx={{
              display: {sm: 'flex'},
              alignItems: 'center',
              gap: '10px',
              mt: {xs: '10px', md: "0"}
            }}
          >
            <DateTimePickerDemo />

            <Button 
              type="button" 
              variant="contained" 
              color="primary"
              sx={{
                boxShadow: 'none',
                textTransform: 'capitalize',
                padding: '3px 17px',
                fontSize: '14px',
                fontWeight: '400',
                borderRadius: '5px',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                color: '#fff !important',
                mt: {xs: '10px', sm: "0"}
              }}
            >
              <i className="ri-download-2-line" style={{ fontSize: '18px', lineHeight: '0' }}></i>
              Export CSV
            </Button>
          </Box>
        </Box>

        <Box>
          <Grid
            container
            columnSpacing={{ xs: 1, sm: 2, md: 3, lg: 2 }}
          >
            <Grid size={{ xs: 12, md: 6, lg: 6, xl: 3 }}>
              <TotalSales />
            </Grid>

            <Grid size={{ xs: 12, md: 6, lg: 6, xl: 3 }}>
              <TotalOrders />
            </Grid>

            <Grid size={{ xs: 12, md: 6, lg: 6, xl: 3 }}>
              <TotalProfit />
            </Grid>

            <Grid size={{ xs: 12, md: 6, lg: 6, xl: 3 }}>
              <TotalRevenue />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Stats;
