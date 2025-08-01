"use client";

import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { Card, Typography } from "@mui/material";

const BasicRadarChart = () => {
  // Chart
  const [isChartLoaded, setChartLoaded] = useState(false);

  useEffect(() => {
    setChartLoaded(true);
  }, []);

  const series = [
    {
      name: "Trezo",
      data: [80, 50, 30, 40, 100, 20],
    },
  ];

  const options = {
    chart: {
      toolbar: {
        show: true,
      },
    },
    title: {
      text: "Basic Radar Chart",
      align: "left",
      offsetX: -9,
      style: {
        fontWeight: "500",
        fontSize: "14px",
        color: "#64748B",
      },
    },
    xaxis: {
      categories: ["January", "February", "March", "April", "May", "June"],
    },
    colors: ["#605DFF"],
    yaxis: {
      show: true,
      tickAmount: 4,
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
          Basic Radar Chart
        </Typography>

        {isChartLoaded && (
          <Chart
            options={options}
            series={series}
            type="radar"
            height={400}
            width={"100%"}
          />
        )}
      </Card>
    </>
  );
};

export default BasicRadarChart;
