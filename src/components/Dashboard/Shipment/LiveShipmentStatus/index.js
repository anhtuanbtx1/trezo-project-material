"use client";

import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { Box, Typography, Card } from "@mui/material";

const LiveShipmentStatus = () => {
  // State for chart loading
  const [isChartLoaded, setChartLoaded] = useState(false);

  useEffect(() => {
    setChartLoaded(true);
  }, []);

  // Data series for the chart
  const series = [
    {
      name: "In Transit",
      data: [70, 60, 40, 40, 35, 30, 40],
    },
    {
      name: "Delivered",
      data: [30, 45, 50, 55, 60, 70, 65],
    },
    {
      name: "Delayed",
      data: [15, 20, 25, 30, 25, 20, 15],
    },
    {
      name: "Canceled",
      data: [5, 10, 15, 20, 15, 10, 5],
    },
  ];

  // Chart configuration options
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
    colors: ["#3584FC", "#37D80A", "#FD5812", "#EE3E08"],
    stroke: {
      curve: "straight",
      width: 2,
    },
    grid: {
      show: true,
      strokeDashArray: 5,
      borderColor: "#EEF1FF",
    },
    markers: {
      size: 3,
      strokeWidth: 0,
      hover: {
        size: 4,
      },
    },
    xaxis: {
      categories: ["D1", "D2", "D3", "D4", "D5", "D6", "D7"],
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
          colors: "#64748B",
          fontSize: "12px",
        },
      },
    },
    yaxis: {
      tickAmount: 4,
      max: 80,
      min: 0,
      labels: {
        style: {
          colors: "#64748B",
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
    legend: {
      show: true,
      position: "left",
      fontSize: "12px", 
      offsetX: -26,
      offsetY: 0,
      itemMargin: {
        horizontal: 0,
        vertical: 5,
      },
      labels: {
        colors: "#64748B",
      },
      markers: {
        size: 6,
        offsetX: -2,
        offsetY: 0.5,
        shape: "square",
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
        <Typography
          component="span"
          sx={{ fontSize: "14px" }}
        >
          Live Shipment Status
        </Typography>

        <Typography component="span" sx={{ fontSize: "14px" }}>
          Last 7 days
        </Typography>
      </Box>

      <Box
        sx={{
          mt: "-28px",
          mb: "-22px",
        }}
      >
        {isChartLoaded && (
          <Chart
            options={options}
            series={series}
            type="line"
            height={180}
            width="100%"
          />
        )}
      </Box>
    </Card>
  );
};

export default LiveShipmentStatus;
