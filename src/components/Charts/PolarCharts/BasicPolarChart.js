"use client";

import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { Card, Typography } from "@mui/material";

const BasicPolarChart = () => {
  // Chart
  const [isChartLoaded, setChartLoaded] = useState(false);

  useEffect(() => {
    setChartLoaded(true);
  }, []);

  const series = [14, 23, 21, 17, 15, 10, 12, 17, 21];

  const options = {
    stroke: {
      colors: ["#ffffff"],
    },
    fill: {
      opacity: 0.8,
    },
    labels: [
      "Bananas",
      "Apples",
      "Grapes",
      "Papayas",
      "Mangos",
      "Blueberrys",
      "Cherrys",
      "Oranges",
      "Pineapples",
    ],
    grid: {
      show: true,
      borderColor: "#ECEEF2",
    },
    legend: {
      show: true,
      position: "bottom",
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
        shape: "diamond",
        offsetX: -2,
        offsetY: -0.5,
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
        <Typography
          variant="h3"
          sx={{
            fontSize: { xs: "16px", md: "18px" },
            fontWeight: 700,
            mb: "25px",
          }}
          className="text-black"
        >
          Basic Polar Chart
        </Typography>

        {isChartLoaded && (
          <Chart
            options={options}
            series={series}
            type="polarArea"
            height={500}
            width={"100%"}
          />
        )}
      </Card>
    </>
  );
};

export default BasicPolarChart;
