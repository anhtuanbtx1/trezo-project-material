"use client";

import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { Box, Typography, Card } from "@mui/material";

const OnTimeDelivery = () => {
  // State for chart loading
  const [isChartLoaded, setChartLoaded] = useState(false);

  useEffect(() => {
    setChartLoaded(true);
  }, []);

  // Data series for the chart
  const series = [85, 15];

  // Chart configuration options
  const options = {
    labels: ["Delivered", "Canceled"],
    colors: ["#37D80A", "#FF4023"],
    dataLabels: {
      enabled: true,
      style: {
        fontSize: "11px",
      },
      dropShadow: {
        enabled: false,
      },
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
      position: "left",
      fontSize: "12px", 
      offsetX: -25,
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
        <Typography component="span" sx={{ fontSize: "14px" }}>
          On-Time Delivery
        </Typography>
      </Box>

      <Box
        sx={{
          mt: "-5px",
          mb: "-8px",
          maxWidth: "310px",
          mx: "auto",
        }}
        className="otd-charts"
      >
        {isChartLoaded && (
          <Chart
            options={options}
            series={series}
            type="pie"
            height={180}
            width="100%"
          />
        )}
      </Box>
    </Card>
  );
};

export default OnTimeDelivery;
