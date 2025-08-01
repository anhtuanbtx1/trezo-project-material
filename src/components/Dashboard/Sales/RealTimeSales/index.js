"use client";

import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import {
  Card,
  Box,
  Typography,
  Menu,
  MenuItem,
  IconButton,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const RealTimeSales = () => {
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
      name: "Sales",
      data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3],
    },
  ];

  const options = {
    chart: {
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        borderRadius: 5,
        horizontal: false,
        columnWidth: "22px",
        borderRadiusApplication: "around",
        borderRadiusWhenStacked: "all",
        dataLabels: {
          position: "top", // top, center, bottom
        },
      },
    },
    dataLabels: {
      enabled: true,
      formatter: (val) => `${val}%`,
      offsetY: -20,
      style: {
        fontSize: "10px",
        colors: ["#64748B"],
      },
    },
    xaxis: {
      // show: false,
      categories: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
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
        },
      },
    },
    colors: ["#3584FC"],
    yaxis: {
      tickAmount: 5,
      show: false,
      max: 11,
      min: 0,
      labels: {
        formatter: (val) => `${val}%`,
        style: {
          colors: "#64748B",
          fontSize: "12px",
        },
      },
      axisBorder: {
        show: false,
        color: "#ECEEF2",
      },
      axisTicks: {
        show: false,
        color: "#ECEEF2",
      },
    },
    grid: {
      show: false,
      borderColor: "#ECEEF2",
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
          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: "16px", md: "18px" },
              fontWeight: 700,
            }}
            className="text-black"
          >
            Real-Time Sales
          </Typography>

          <Box>
            <IconButton
              onClick={handleClick}
              size="small"
              aria-controls={open ? "account-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              sx={{
                borderRadius: "0px",
                padding: "1px 2px",
                fontSize: "14px",
              }}
            >
              Today <KeyboardArrowDownIcon sx={{ fontSize: "20px" }} />
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
            marginTop: "-25px",
          }}
        >
          {isChartLoaded && (
            <Chart
              options={options}
              series={series}
              type="bar"
              height={240}
              width={"100%"}
            />
          )}
        </Box>

        <Box
          className="border-top"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            paddingTop: "25px",
          }}
        >
          <Box>
            <Typography
              component="span"
              sx={{
                fontSize: "12px",
                display: "block",
              }}
            >
              Total Sales
            </Typography>

            <Typography
              component="h3"
              sx={{
                fontWeight: "500",
                fontSize: "18px",
              }}
            >
              $150.7k{" "}
              <Typography
                component="span"
                sx={{
                  color: "success.main",
                  fontSize: "12px",
                }}
              >
                <i
                  className="ri-arrow-up-fill"
                  style={{ fontSize: "16px" }}
                ></i>
                12%
              </Typography>
            </Typography>
          </Box>

          <Box>
            <Typography
              component="span"
              sx={{
                fontSize: "12px",
                display: "block",
              }}
            >
              Avg. Sales Per Day
            </Typography>

            <Typography
              component="h3"
              sx={{
                fontWeight: "500",
                fontSize: "18px",
              }}
            >
              $19.2k {"  "}
              <Typography
                component="span"
                sx={{
                  color: "error.main",
                  fontSize: "12px",
                }}
              >
                <i
                  className="ri-arrow-down-fill"
                  style={{ fontSize: "16px" }}
                ></i>
                7%
              </Typography>
            </Typography>
          </Box>
        </Box>
      </Card>
    </>
  );
};

export default RealTimeSales;
