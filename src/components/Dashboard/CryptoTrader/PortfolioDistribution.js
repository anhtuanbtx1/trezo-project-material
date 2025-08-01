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

const PortfolioDistribution = () => {
  // Dropdown state and handlers
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // Chart loading state
  const [isChartLoaded, setChartLoaded] = useState(false);

  useEffect(() => {
    setChartLoaded(true);
  }, []);

  // Chart data - now properly typed
  const chartData = {
    series: [30, 20, 12, 10, 8, 6],
    labels: ["Bitcoin", "Ethereum", "BNB", "Tether", "Ripple", "Others"],
    colors: ["#9135E8", "#AD63F6", "#BF85FB", "#D7B5FD", "#E9D5FF", "#F3E8FF"],
  };

  // Custom menu paper props
  const menuPaperProps = {
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
  };

  // Chart options with proper typing
  const options = {
    labels: chartData.labels,
    colors: chartData.colors,
    stroke: {
      width: 2,
      show: true,
      colors: ["#ffffff"],
    },
    dataLabels: {
      enabled: false,
    },
    plotOptions: {
      pie: {
        expandOnClick: false,
        donut: {
          labels: {
            show: false,
            name: {
              color: "#64748B",
            },
            value: {
              show: true,
              color: "#3A4252",
              fontSize: "28px",
              fontWeight: "600",
              formatter: (val, opts) => {
                if (opts?.w?.globals?.seriesTotals) {
                  const total = opts.w.globals.seriesTotals.reduce(
                    (a, b) => a + b,
                    0
                  );
                  const percentage = ((Number(val) / total) * 100).toFixed(1);
                  return `${val}k (${percentage}%)`;
                }
                return `${val}k`;
              },
            },
            total: {
              show: true,
              color: "#64748B",
              formatter: (w) => {
                return `${w.globals.seriesTotals.reduce((a, b) => a + b, 0)}k`;
              },
            },
          },
        },
      },
    },
    legend: {
      show: true,
      offsetY: 0,
      fontSize: "12px",
      position: "left",
      horizontalAlign: "center",
      itemMargin: {
        horizontal: 0,
        vertical: 5,
      },
      labels: {
        colors: "#64748B",
      },
      markers: {
        size: 7,
        offsetX: -4,
        offsetY: -0.5,
        shape: "star",
      },
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return `${val}%`;
        },
      },
    },
  };

  return (
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
            Portfolio Distribution
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
            PaperProps={menuPaperProps}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          >
            {["This Day", "This Week", "This Month", "This Year"].map(
              (item) => (
                <MenuItem key={item} onClick={handleClose}>
                  {item}
                </MenuItem>
              )
            )}
          </Menu>
        </Box>
      </Box>

      <Box sx={{ mt: "-10px", mb: "-10px" }}>
        {isChartLoaded && (
          <Chart
            options={options}
            series={chartData.series}
            type="donut"
            height={200}
          />
        )}
      </Box>
    </Card>
  );
};

export default PortfolioDistribution;
