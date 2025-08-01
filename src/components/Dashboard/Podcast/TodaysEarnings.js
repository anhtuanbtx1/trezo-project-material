"use client";

import React, { useEffect, useState } from "react";
import { Box, Typography, MenuItem, IconButton, Menu } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert"; 
import Chart from "react-apexcharts";

const TodaysEarnings = () => {
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
    {
      name: "Today’s Earnings",
      data: [
        100, 130, 115, 170, 110, 120, 85, 140, 150, 100, 110, 90, 160, 125, 105,
        130, 145, 120, 150, 155, 220, 165,
      ],
    },
  ];

  const options = {
    chart: {
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth", // ['straight', 'smooth', 'monotoneCubic', 'stepline']
      width: 1,
    },
    colors: ["#9135E8"],
    fill: {
      type: "gradient",
      gradient: {
        stops: [0, 100, 100],
        shadeIntensity: 1,
        opacityFrom: 0.5,
        opacityTo: 0.6,
      },
    },
    xaxis: {
      categories: [
        "01 Jan",
        "02 Jan",
        "03 Jan",
        "04 Jan",
        "05 Jan",
        "06 Jan",
        "07 Jan",
        "08 Jan",
        "09 Jan",
        "10 Jan",
        "11 Jan",
        "12 Jan",
        "13 Jan",
        "14 Jan",
        "15 Jan",
        "16 Jan",
        "17 Jan",
        "18 Jan",
        "19 Jan",
        "20 Jan",
        "21 Jan",
        "22 Jan",
      ],
      axisTicks: {
        show: false,
        color: "#ECEEF2",
      },
      axisBorder: {
        show: false,
        color: "#ECEEF2",
      },
      labels: {
        show: false,
        style: {
          colors: "#8695AA",
          fontSize: "12px",
          fontFamily: "Inter",
        },
      },
    },
    yaxis: {
      tickAmount: 5,
      show: false,
      max: 250,
      min: 0,
      labels: {
        show: true,
        style: {
          colors: "#64748B",
          fontSize: "12px",
          fontFamily: "Inter",
        },
      },
      axisBorder: {
        show: true,
        color: "#ECEEF2",
      },
      axisTicks: {
        show: true,
        color: "#ECEEF2",
      },
    },
    grid: {
      show: false,
      borderColor: "#ECEEF2",
    },
    legend: {
      show: true,
      position: "top",
      fontSize: "12px",
      horizontalAlign: "center",
      fontFamily: "Inter",
      fontWeight: 400,
      itemMargin: {
        horizontal: 8,
        vertical: 0,
      },
      labels: {
        colors: "#64748B",
      },
      markers: {
        offsetX: -2,
        offsetY: -0.5,
        shape: "diamond",
      },
    },
    tooltip: {
      enabled: true,
      y: {
        formatter: (val) => {
          return "$" + val / 1 + "";
        },
      },
    },
  };

  return (
    <>
      <Box
        className="bg-white border"
        sx={{
          boxShadow: "0px 3px 4px 0px rgba(0, 0, 0, 0.05)",
          borderRadius: "7px",
          padding: { xs: "18px", sm: "20px", lg: "25px" },
          position: "relative",
          overflow: "hidden",
          mb: "25px",
        }}
      >
        <Box
          sx={{
            display: "flex", 
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "10px",
            mb: "15px",
          }}
        >
          <Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <Typography
                variant="h3"
                sx={{
                  fontSize: { xs: "17px", md: "20px" },
                  fontWeight: 600,
                  mb: "0",
                }}
              >
                $3,425.78
              </Typography>

              <Box
                sx={{
                  backgroundColor: "#D8FFC8",
                  color: "success.700",
                  padding: "0.5px 8px",
                  borderRadius: "3px",
                  fontSize: "12px",
                }}
              >
                +9.1%
              </Box>
            </Box>

            <Typography>Today’s Earnings</Typography>
          </Box>

          <Box className="-mr-10">
            <IconButton
              onClick={handleClick}
              size="small"
              aria-controls={open ? "account-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              sx={{
                padding: "0",
              }}
            >
              <MoreVertIcon sx={{ fontSize: "22px" }} />
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
              <MenuItem>Today</MenuItem>
              <MenuItem>Last 7 Days</MenuItem>
              <MenuItem>Last Month</MenuItem>
            </Menu>
          </Box>
        </Box>

        <Box
          sx={{
            margin: "-53px -35px -45px -37px",
          }}
        >
          {isChartLoaded && (
            <Chart
              options={options}
              series={series}
              type="area"
              height={164}
              width={"100%"}
            />
          )}
        </Box>
      </Box>
    </>
  );
};

export default TodaysEarnings;
