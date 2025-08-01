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

const RiskExposure = () => {
  // Dropdown
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
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
    { name: "Risk", data: [80, 50, 30, 40, 100, 20] },
    { name: "Risk", data: [20, 30, 40, 80, 20, 80] },
    { name: "Risk", data: [30, 70, 80, 15, 45, 10] },
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
      categories: [
        "Market",
        "Technology",
        "Compliance",
        "Liquidity",
        "Operational",
        "Credit",
      ],
      labels: {
        show: true,
        style: {
          colors: "#3A4252",
          fontSize: "12px",
        },
      },
    },
    markers: {
      size: 3,
      strokeWidth: 0,
    },
    colors: ["#FD5812", "#37D80A", "#605DFF"],
    fill: {
      type: "gradient",
      gradient: {
        stops: [0, 90, 100],
        shadeIntensity: 1,
        opacityFrom: 0,
        opacityTo: 0.4,
      },
    },
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
          <Box>
            <Typography
              variant="h3"
              sx={{
                fontSize: { xs: "16px", md: "18px" },
                fontWeight: 700,
              }}
              className="text-black"
            >
              Risk Exposure
            </Typography>
          </Box>

          <Box sx={{ position: "relative", zIndex: 1 }}>
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
              <MenuItem>Daily</MenuItem>
              <MenuItem>Weekly</MenuItem>
              <MenuItem>Monthly</MenuItem>
              <MenuItem>Yearly</MenuItem>
            </Menu>
          </Box>
        </Box>

        <Box
          sx={{
            mt: "-50px",
            ml: "-17px",
            mr: "-17px",
            mb: "-45px",
          }}
        >
          {isChartLoaded && (
            <Chart
              options={options}
              series={series}
              type="radar"
              height={333}
              width={"100%"}
            />
          )}
        </Box>
      </Card>
    </>
  );
};

export default RiskExposure;
