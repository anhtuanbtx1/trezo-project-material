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

const SessionsByChannel = () => {
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
  const series = [976, 651, 818, 459, 320, 209];
  const options = {
    labels: [
      "Email",
      "Organic Search",
      "Direct Browse",
      "Paid Search",
      "Social",
      "Referral",
    ],
    colors: ["#3584FC", "#37D80A", "#BF85FB", "#90C7FF", "#605DFF", "#FE7A36"],
    stroke: { width: 1, colors: ["#ffffff"] },
    legend: { show: false },
    plotOptions: {
      pie: {
        expandOnClick: false,
        donut: {
          labels: {
            show: true,
            name: { color: "#64748B" },
            value: { color: "#3A4252", fontSize: "28px", fontWeight: "600" },
            total: { show: true, color: "#64748B" },
          },
        },
      },
    },
    dataLabels: { enabled: false },
    tooltip: { enabled: false },
  };

  // Channel data for the legend
  const channels = [
    { label: "Email", value: 976, color: "bg-primary" },
    { label: "Organic Search", value: 651, color: "bg-secondary" },
    { label: "Direct Browse", value: 818, color: "bg-purple" },
    { label: "Paid Search", value: 459, color: "bg-info" },
    { label: "Social", value: 320, color: "bg-success" },
    { label: "Referral", value: 209, color: "bg-orange" },
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
          Sessions By Channel
        </Typography>

        <IconButton
          onClick={handleMenuClick}
          size="small"
          aria-controls={open ? "account-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
        >
          Last 30 Days <KeyboardArrowDownIcon sx={{ fontSize: "20px" }} />
        </IconButton>

        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleMenuClose}
          PaperProps={{
            elevation: 0,
            sx: { overflow: "visible", boxShadow: "0 4px 45px #0000001a" },
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

      {/* Chart */}
      <Box sx={{ marginTop: "-15px" }}>
        {isChartLoaded && (
          <Chart
            options={options}
            series={series}
            type="donut"
            height={300}
            width="100%"
          />
        )}
      </Box>

      {/* Legend */}
      <Box sx={{ textAlign: "center" }}>
        {channels.map((channel) => (
          <Box
            key={channel.label}
            sx={{
              display: "inline-block",
              textAlign: "start",
              margin: "15px 15px 0",
            }}
          >
            <Typography
              component="span"
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                fontSize: "13px",
                mb: "8px",
              }}
            >
              <Typography
                component="span"
                className={channel.color}
                sx={{
                  width: "11px",
                  height: "11px",
                  borderRadius: "3px",
                }}
              ></Typography>
              {channel.label}
            </Typography>
            <Typography
              variant="h6"
              mb={0}
              fontSize={18}
              fontWeight={500}
              lineHeight={1}
            >
              {channel.value}
            </Typography>
          </Box>
        ))}
      </Box>
    </Card>
  );
};

export default SessionsByChannel;
