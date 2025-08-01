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

const InterestChargeFees = () => {
  // Dropdown state and handlers
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // Chart loading state
  const [isChartLoaded, setChartLoaded] = useState(false);

  useEffect(() => {
    setChartLoaded(true);
  }, []);

  // Chart data
  const series = [
    {
      name: "Interest Charge",
      data: [28, 15, 18, 25],
    },
    {
      name: "Fees",
      data: [5, 8, 8, 9],
    },
  ];

  const categories = ["2022", "2023", "2024", "2025"];

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

  // Chart options
  const options = {
    chart: {
      toolbar: {
        show: false,
      },
    },
    colors: ["#605DFF", "#FF4023"],
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "70%",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: 2,
      show: true,
      colors: ["transparent"],
    },
    xaxis: {
      categories: categories,
      axisTicks: {
        show: false,
        color: "#ECEEF2",
      },
      axisBorder: {
        show: false,
        color: "#ECEEF2",
      },
      labels: {
        show: true,
        style: {
          colors: "#3A4252",
          fontSize: "12px",
          fontFamily: "Inter",
        },
      },
    },
    yaxis: {
      max: 40,
      min: 0,
      labels: {
        formatter: function (val) {
          return val + "%";
        },
        style: {
          colors: "#3A4252",
          fontSize: "12px",
          fontFamily: "Inter",
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
    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return val + "%";
        },
      },
    },
    legend: {
      show: true,
      position: "bottom",
      fontSize: "12px",
      fontFamily: "Inter",
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
    grid: {
      show: true,
      borderColor: "#ECEEF2",
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
            Interest Charge & Fees
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
            <MenuItem onClick={handleClose}>This Day</MenuItem>
            <MenuItem onClick={handleClose}>This Week</MenuItem>
            <MenuItem onClick={handleClose}>This Month</MenuItem>
            <MenuItem onClick={handleClose}>This Year</MenuItem>
          </Menu>
        </Box>
      </Box>

      <Box sx={{ mt: "-20px", mb: "-18px" }}>
        {isChartLoaded && (
          <Chart options={options} series={series} type="bar" height={300} />
        )}
      </Box>
    </Card>
  );
};

export default InterestChargeFees;
