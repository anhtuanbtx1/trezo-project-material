"use client";

import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { Card, Typography } from "@mui/material";

const PolygonRadarChart = () => {
  // Chart
  const [isChartLoaded, setChartLoaded] = useState(false);

  useEffect(() => {
    setChartLoaded(true);
  }, []);

  const series = [
    {
      name: "Series 1",
      data: [20, 100, 40, 30, 50, 80, 33],
    },
  ];

  const options = {
    dataLabels: {
      enabled: true,
    },
    plotOptions: {
      radar: {
        size: 140,
        polygons: {
          fill: {
            colors: ["#f8f8f8", "#ffffff"],
          },
        },
      },
    },
    title: {
      text: "Radar with Polygon Fill",
      align: "left",
      offsetX: -9,
      style: {
        fontWeight: "500",
        fontSize: "14px",
        color: "#64748B",
      },
    },
    colors: ["#605DFF"],
    markers: {
      size: 4,
      colors: ["#ffffff"],
      strokeColors: ["#0f79f3"],
      strokeWidth: 2,
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return val;
        },
      },
    },
    xaxis: {
      categories: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
    },
    yaxis: {
      tickAmount: 7,
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
          Polygon Radar Chart
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

export default PolygonRadarChart;
