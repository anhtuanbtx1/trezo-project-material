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

const SalesOverview = () => {
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
      data: [80, 50, 30, 40, 100, 20],
    },
    {
      name: "Sales",
      data: [20, 30, 40, 80, 20, 80],
    },
    {
      name: "Sales",
      data: [30, 70, 80, 15, 45, 10],
    },
  ];

  const options = {
    chart: {
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ["2019", "2020", "2021", "2022", "2023", "2024"],
      labels: {
        show: true,
        style: {
          colors: "#64748B",
          fontSize: "12px",
        },
      },
    },
    markers: {
      colors: "transparent",
      strokeWidth: 0,
    },
    colors: ["#605DFF", "#37D80A", "#FD5812"],
    yaxis: {
      show: false,
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return val + "%";
        },
      },
    },
    legend: {
      show: false,
      position: "top",
      fontSize: "12px",
      horizontalAlign: "center",
      itemMargin: {
        horizontal: 8,
        vertical: 0,
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
          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: "16px", md: "18px" },
              fontWeight: 700,
            }}
            className="text-black"
          >
            Sales Overview
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
            marginTop: "-13px",
            marginBottom: "-40px",
          }}
        >
          {isChartLoaded && (
            <Chart
              options={options}
              series={series}
              type="radar"
              height={340}
              width={"100%"}
            />
          )}
        </Box>
      </Card>
    </>
  );
};

export default SalesOverview;
