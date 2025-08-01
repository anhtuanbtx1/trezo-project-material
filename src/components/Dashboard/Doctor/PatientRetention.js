"use client";

import React, { useEffect, useState } from "react";
import {
  Card,
  Box,
  Typography,
  Menu,
  MenuItem,
  IconButton,
} from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Chart from "react-apexcharts";

const PatientRetention = () => {
  // Dropdown
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // Chart
  const [isChartLoaded, setChartLoaded] = useState(false);

  useEffect(() => {
    setChartLoaded(true);
  }, []);

  const series = [
    { name: "Old Patient", data: [12, 15, 10, 8, 14, 9, 13] },
    { name: "New Patient", data: [9, 11, 8, 6, 12, 7, 10] },
  ];

  const categories = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const options = {
    chart: {
      toolbar: {
        show: false,
      },
    },
    colors: ["#26A0FC", "#26E7A6"],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: 5,
      curve: "straight",
      dashArray: [0, 8, 5],
    },
    grid: {
      show: true,
      borderColor: "#ECF0FF",
    },
    xaxis: {
      categories: categories,
      axisTicks: {
        show: true,
        color: "#E0E0E0",
      },
      axisBorder: {
        show: true,
        color: "#E0E0E0",
      },
      labels: {
        show: true,
        style: {
          colors: "#8695AA",
          fontSize: "12px",
        },
      },
    },
    yaxis: {
      // tickAmount: 5,
      // max: 110,
      min: 0,
      labels: {
        show: true,
        style: {
          colors: "#8695AA",
          fontSize: "12px",
        },
      },
      axisBorder: {
        show: false,
        color: "#E0E0E0",
      },
      axisTicks: {
        show: false,
        color: "#E0E0E0",
      },
    },
    legend: {
      show: true,
      fontSize: "12px",
      position: "bottom",
      horizontalAlign: "center",
      itemMargin: {
        horizontal: 8,
        vertical: 10,
      },
      labels: {
        colors: "#64748B",
      },
      markers: {
        size: 7,
        offsetX: -2,
        offsetY: -0.5,
        shape: "diamond",
      },
    },
  };

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
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mb: "25px",
          }}
        >
          <Box>
            <Typography
              variant="h3"
              sx={{
                fontSize: { xs: "16px", md: "18px" },
                fontWeight: 700,
              }}
              className="text-black"
            >
              Patient Retention
            </Typography>
          </Box>

          <Box>
            <IconButton
              onClick={handleClick}
              size="small"
              aria-controls={open ? "account-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              sx={{ padding: "0" }}
            >
              <MoreHorizIcon sx={{ fontSize: "25px" }} />
            </IconButton>

            <Menu
              anchorEl={anchorEl}
              id="account-menu"
              open={open}
              onClose={handleClose}
              onClick={handleClose}
              PaperProps={{
                elevation: 0,

                sx: {
                  overflow: "visible",
                  boxShadow: "0 4px 45px #0000001a",
                  mt: 0,
                  "& .MuiAvatar-root": {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                },
              }}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
              <MenuItem>This Day</MenuItem>
              <MenuItem>This Week</MenuItem>
              <MenuItem>This Month</MenuItem>
              <MenuItem>This Year</MenuItem>
            </Menu>
          </Box>
        </Box>

        <Box
          sx={{
            mt: "-22px",
            ml: "-15px",
            mb: "-25px",
          }}
        >
          {isChartLoaded && (
            <Chart
              options={options}
              series={series}
              type="line"
              height={330}
              width={"100%"}
            />
          )}
        </Box>
      </Card>
    </>
  );
};

export default PatientRetention;
