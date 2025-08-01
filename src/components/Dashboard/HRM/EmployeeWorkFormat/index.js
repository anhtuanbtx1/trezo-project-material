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
import MoreVertIcon from "@mui/icons-material/MoreVert";

const EmployeeWorkFormat = () => {
  // Dropdown
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // Dynamic data
  const workFormats = [
    {
      label: "Remote",
      percentage: 34,
      trend: "up",
      value: 120,
      color: "orange.500",
    },
    {
      label: "In-office",
      percentage: 46,
      trend: "down",
      value: 160,
      color: "primary.500",
    },
    {
      label: "Hybrid",
      percentage: 15,
      trend: "up",
      value: 50,
      color: "success.500",
    },
    {
      label: "Shift",
      percentage: 5,
      trend: "down",
      value: 20,
      color: "purple.main",
    },
  ];

  // Chart
  const [isChartLoaded, setChartLoaded] = useState(false);

  useEffect(() => {
    setChartLoaded(true);
  }, []);

  const series = [120, 160, 50, 20];

  const options = {
    labels: ["Remote", "In-office", "Hybrid", "Shift"],
    colors: ["#FD5812", "#605DFF", "#37D80A", "#AD63F6"],
    stroke: {
      width: 1,
      show: true,
      colors: ["#ffffff"],
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
        size: 6,
        offsetX: -2,
        offsetY: -0.5,
        shape: "square",
      },
    },
    plotOptions: {
      pie: {
        expandOnClick: false,
        donut: {
          labels: {
            show: true,
            name: {
              color: "#64748B",
            },
            value: {
              show: true,
              color: "#3A4252",
              fontSize: "22px",
              fontWeight: "600",
              offsetY: 2,
            },
            total: {
              show: true,
              fontSize: "14px",
              color: "#64748B",
            },
          },
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    tooltip: {
      enabled: false,
    },
  };

  return (
    <>
      <Card
        sx={{
          boxShadow: "none",
          borderRadius: "7px",
          mb: "25px",
          px: { xs: "18px", sm: "20px", lg: "25px" },
          pt: { xs: "18px", sm: "20px", lg: "25px" },
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
            Employee Work Format
          </Typography>

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
              <MoreVertIcon sx={{ fontSize: "25px" }} />
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
                  width: "150px",
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

        <Box>
          {isChartLoaded && (
            <Chart
              options={options}
              series={series}
              type="donut"
              height={230}
              width={"100%"}
            />
          )}
        </Box>

        <Box
          sx={{
            mt: { xs: "10px", md: "15px", lg: "40px" },
            mx: { xs: "-20px", md: "-25px" },
          }}
        >
          {workFormats.map((format, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "8px",
                py: "13px",
                px: { xs: "15px", md: "20px", lg: "25px" },
              }}
              className="border-top"
            >
              <Box
                sx={{ display: "flex", alignItems: "center", gap: "8px" }}
                className="text-black"
              >
                <Box
                  sx={{
                    bgcolor: format.color,
                    width: "8px",
                    height: "8px",
                    display: "inline-block",
                  }}
                ></Box>
                {format.label}
              </Box>

              <Box
                sx={{
                  color: format.trend === "up" ? "success.600" : "error.600",
                  display: "flex",
                  gap: "4px",
                  alignItems: "center",
                }}
              >
                {format.percentage}%
                <i
                  className="material-symbols-outlined"
                  style={{ fontSize: "18px" }}
                >
                  {format.trend === "up" ? "trending_up" : "trending_down"}
                </i>
              </Box>

              <Box className="text-black" sx={{ fontWeight: "bold" }}>
                {format.value}
              </Box>
            </Box>
          ))}
        </Box>
      </Card>
    </>
  );
};

export default EmployeeWorkFormat;
