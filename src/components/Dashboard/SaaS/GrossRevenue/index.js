"use client";

import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import {
  Box,
  IconButton,
  Typography,
  Card,
  Menu,
  MenuItem,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const GrossRevenue = () => {
  // Dropdown
  const [anchorEl, setAnchorEl] = useState(null);
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
      name: "October",
      data: [108, 130, 110, 140, 130, 115, 125, 115, 125, 140],
    },
    {
      name: "September",
      data: [135, 115, 128, 120, 125, 130, 135, 130, 135, 145],
    },
  ];

  const options = {
    chart: {
      toolbar: {
        show: false,
      },
    },
    colors: ["#757DFF", "#E9D5FF"],
    stroke: {
      width: 4,
      curve: "straight",
      dashArray: [0, 8],
    },
    grid: {
      show: true,
      borderColor: "#ECF0FF",
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: [
        "Oct 01",
        "Oct 02",
        "Oct 03",
        "Oct 04",
        "Oct 05",
        "Oct 06",
        "Oct 07",
        "Oct 08",
        "Oct 09",
        "Oct 10",
      ],
      axisTicks: {
        show: false,
        color: "#DDE4FF",
      },
      axisBorder: {
        show: false,
        color: "#DDE4FF",
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
      tickAmount: 5,
      max: 150,
      min: 100,
      labels: {
        formatter: (val) => {
          return "$" + val + "K";
        },
        style: {
          colors: "#8695AA",
          fontSize: "12px",
        },
      },
      axisBorder: {
        show: false,
        color: "#DDE4FF",
      },
      axisTicks: {
        show: false,
        color: "#DDE4FF",
      },
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return val + "k";
        },
      },
    },
    legend: {
      show: true,
      fontSize: "12px",
      position: "bottom",
      horizontalAlign: "left",
      itemMargin: {
        horizontal: 8,
        vertical: 8,
      },
      labels: {
        colors: "#64748B",
      },
      markers: {
        size: 6,
        offsetX: -2,
        offsetY: -0.5,
        shape: "square",
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
              component="span"
              sx={{
                display: "block",
                mb: "7px",
              }}
            >
              Gross Revenue
            </Typography>

            <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <Typography
                component="h3"
                sx={{
                  fontSize: { xs: "16px", md: "18px", lg: "32px" },
                  lineHeight: "1",
                  mb: "0",
                  fontWeight: "700",
                }}
              >
                $1,528
              </Typography>

              <Box
                sx={{
                  display: "inline-block",
                  fontSize: "11px",
                  px: "9px",
                  py: "1px",
                  color: "success.700",
                  border: "1px solid",
                  borderColor: "success.300",
                  bgcolor: "success.100",
                  borderRadius: "100px",
                }}
              >
                +5.4%
              </Box>
            </Box>

            <Typography
              component="span"
              sx={{ display: "block", fontSize: "12px", mt: "9px" }}
            >
              vs previous 30 days
            </Typography>
          </Box>

          <Box>
            <IconButton
              onClick={handleClick}
              size="small"
              aria-controls={open ? "account-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              sx={{
                borderRadius: "0.375rem",
                fontSize: "14px",
                p: "8px 19.5px",
                display: "flex",
                alignItems: "center",
                gap: "5px",
              }}
              className="bg-eceef2"
            >
              Monthly <KeyboardArrowDownIcon sx={{ fontSize: "20px" }} />
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
                  width: "160px",
                },
              }}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
              <MenuItem>Weekly</MenuItem>
              <MenuItem>Monthly</MenuItem>
              <MenuItem>Yearly</MenuItem>
            </Menu>
          </Box>
        </Box>

        <Box
          sx={{
            mt: "-25px",
            mb: "-20px",
            ml: "-13px",
            mr: "-13px",
          }}
        >
          {isChartLoaded && (
            <Chart
              options={options}
              series={series}
              type="line"
              height={340}
              width={"100%"}
            />
          )}
        </Box>
      </Card>
    </>
  );
};

export default GrossRevenue;
