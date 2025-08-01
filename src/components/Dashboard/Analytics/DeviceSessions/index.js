"use client";

import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import {
  Card,
  Box,
  Typography,
  Menu,
  MenuItem,
  Grid,
  IconButton,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import styles from "./DeviceSessions.module.css";

const DeviceSessions = () => {
  // Dropdown state
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleMenuClick = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  // Chart state
  const [isChartLoaded, setChartLoaded] = useState(false);

  useEffect(() => {
    setChartLoaded(true);
  }, []);

  // Chart data
  const series = [55, 44, 30, 12];
  const options = {
    labels: ["Desktop", "Mobile", "Tablet", "Others"],
    colors: ["#37D80A", "#605DFF", "#BF85FB", "#FE7A36"],
    dataLabels: { enabled: false },
    plotOptions: { pie: { expandOnClick: false } },
    stroke: { width: 1, colors: ["#ffffff"] },
    legend: {
      show: false,
      position: "bottom",
      horizontalAlign: "center",
      itemMargin: { horizontal: 8, vertical: 7 },
      markers: { shape: "diamond" },
    },
    tooltip: {
      y: { formatter: (val) => `${val}%` },
    },
  };

  // Device data
  const deviceData = [
    {
      label: "Desktop",
      percentage: "45.2%",
      sessions: 8732,
      color: "success.main",
    },
    {
      label: "Mobile",
      percentage: "48.7%",
      sessions: 9416,
      color: "primary.main",
    },
    {
      label: "Tablet",
      percentage: "32.3%",
      sessions: 1042,
      color: "info.main",
    },
    {
      label: "Others",
      percentage: "15.4%",
      sessions: 135,
      color: "error.main",
    },
  ];

  return (
    <Card
      sx={{
        boxShadow: "none",
        borderRadius: "7px",
        mb: "25px",
        padding: { xs: "18px", sm: "20px", lg: "25px" },
      }}
    >
      {/* Header */}
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
        >
          Device Sessions
        </Typography>

        <IconButton
          onClick={handleMenuClick}
          size="small"
          aria-controls={open ? "account-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
        >
          Last Week <KeyboardArrowDownIcon sx={{ fontSize: "20px" }} />
        </IconButton>

        {/* Dropdown menu */}
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleMenuClose}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: "visible",
              boxShadow: "0 4px 45px #0000001a",
            },
          }}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          {["Last Day", "Last Week", "Last Month", "Last Year"].map(
            (period) => (
              <MenuItem key={period} onClick={handleMenuClose}>
                {period}
              </MenuItem>
            )
          )}
        </Menu>
      </Box>

      {/* Content */}
      <Grid
        container
        columnSpacing={{ xs: 1, sm: 2, md: 3, lg: 3 }}
        alignItems="center"
      >
        {/* Chart */}
        <Grid size={{ xs: 12, md: 5 }}>
          {isChartLoaded && (
            <Chart options={options} series={series} type="pie" height={400} />
          )}
        </Grid>

        {/* Details */}
        <Grid size={{ xs: 12, md: 7 }}>
          <Box className={styles.content}>
            {deviceData.map((device) => (
              <Box
                key={device.label}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
                className={`ds-item ${styles.item}`}
              >
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: "10px" }}
                >
                  <Box
                    sx={{
                      bgcolor: device.color,
                      width: "10px",
                      height: "10px",
                      borderRadius: "50%",
                    }}
                  ></Box>
                  <Box>
                    <Typography sx={{ fontSize: "12px" }}>
                      {device.label}
                    </Typography>
                    <Typography sx={{ fontWeight: 600, fontSize: "16px" }} className="text-black">
                      {device.percentage}
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <Typography sx={{ fontSize: "12px" }}>Sessions</Typography>
                  <Typography sx={{ fontWeight: 600, fontSize: "14px" }}>
                    {device.sessions}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Grid>
      </Grid>

      {/* Footer */}
      <Typography sx={{ fontSize: "12px", mt: "25px" }}>
        This data helps you understand which devices are most commonly used and
        how engagement metrics vary between them.
      </Typography>
    </Card>
  );
};

export default DeviceSessions;
