"use client";

import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { Box, Typography, Card } from "@mui/material";

const TopShippingMethods = () => {
  // State for chart loading
  const [isChartLoaded, setChartLoaded] = useState(false);

  useEffect(() => {
    setChartLoaded(true);
  }, []);

  // Data series for the chart
  const series = [45, 30, 15, 10];

  // Chart configuration options
  const options = {
    labels: ["Air", "Road", "Sea", "Rail"],
    colors: ["#3584FC", "#FD5812", "#605DFF", "#37D80A"],
    dataLabels: {
      enabled: true,
      style: {
        fontSize: "11px",
      },
      dropShadow: {
        enabled: false,
      },
    },
    plotOptions: {
      pie: {
        expandOnClick: false,
      },
    },
    stroke: {
      width: 1,
      show: true,
      colors: ["#ffffff"],
    },
    legend: {
      show: true,
      position: "right",
      fontSize: "12px",
      offsetX: 0,
      offsetY: -15,
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
    tooltip: {
      y: {
        formatter: function (val) {
          return val + "%";
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
        <Typography component="span" sx={{ fontSize: "14px" }}>
          Top Shipping Methods
        </Typography>
      </Box>

      <Box
        sx={{
          mt: "-5px",
          mb: "-8px",
          maxWidth: "310px",
          mx: "auto",
        }}
        className="tsm-charts"
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

export default TopShippingMethods;
