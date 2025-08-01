"use client";

import React, { useEffect, useState } from "react";
import Chart from 'react-apexcharts';
import { Card, Typography } from "@mui/material";

const BasicTreemapChart = () => {
  // Chart
  const [isChartLoaded, setChartLoaded] = useState(false);

  useEffect(() => {
    setChartLoaded(true);
  }, []);

  const series = [
    {
      data: [
        {
          x: "London",
          y: 218,
        },
        {
          x: "New York",
          y: 149,
        },
        {
          x: "Tokyo",
          y: 184,
        },
        {
          x: "Beijing",
          y: 55,
        },
        {
          x: "Paris",
          y: 84,
        },
        {
          x: "Chicago",
          y: 31,
        },
        {
          x: "Osaka",
          y: 70,
        },
        {
          x: "İstanbul",
          y: 30,
        },
        {
          x: "Bangkok",
          y: 44,
        },
        {
          x: "Madrid",
          y: 68,
        },
        {
          x: "Barcelona",
          y: 28,
        },
        {
          x: "Toronto",
          y: 19,
        },
        {
          x: "Shanghai",
          y: 29,
        },
      ],
    },
  ];

  const options = {
    chart: {
      toolbar: {
        show: true,
      },
    },
    title: {
      text: "Basic Treemap",
      align: "left",
      offsetX: -9,
      style: {
        fontWeight: "500",
        fontSize: "14px",
        color: "#64748B",
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
          Basic Treemap Chart
        </Typography>

        {isChartLoaded && (
          <Chart
            options={options}
            series={series}
            type="treemap"
            height={350}
            width={"100%"}
          />
        )}
      </Card>
    </>
  );
};

export default BasicTreemapChart;
