"use client";

import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { Card, Box, Typography } from "@mui/material";

const PieMonochromeChart = () => {
  // Chart
  const [isChartLoaded, setChartLoaded] = useState(false);

  useEffect(() => {
    setChartLoaded(true);
  }, []);

  const series = [25, 15, 44, 55, 41, 17];

  const options = {
    labels: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    theme: {
      monochrome: {
        enabled: true,
      },
    },
    legend: {
      show: true,
      offsetY: 0,
      fontSize: "12px",
      labels: {
        colors: "#64748B",
      },
      itemMargin: {
        horizontal: 0,
        vertical: 5,
      },
      markers: {
        shape: "diamond",
        offsetX: -2,
        offsetY: -0.5,
      },
    },
    dataLabels: {
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
          padding: { xs: "18px", sm: "20px", lg: "25px" },
        }}
        className="rmui-card"
      >
        <Typography
          variant="h3"
          sx={{
            fontSize: { xs: "16px", md: "18px" },
            fontWeight: 700,
            mb: "25px",
          }}
          className="text-black"
        >
          Pie Monochrome Chart
        </Typography>

        <Box
          sx={{
            marginTop: "-10px",
          }}
        >
          {isChartLoaded && (
            <Chart
              options={options}
              series={series}
              type="pie"
              height={360}
              width={"100%"}
            />
          )}
        </Box>
      </Card>
    </>
  );
};

export default PieMonochromeChart;
