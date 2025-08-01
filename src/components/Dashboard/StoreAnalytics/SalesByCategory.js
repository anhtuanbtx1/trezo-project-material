"use client";

import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { Card, Box, Typography } from "@mui/material"; 

const SalesByCategory = () => {
  // Chart
  const [isChartLoaded, setChartLoaded] = useState(false);

  useEffect(() => {
    setChartLoaded(true);
  }, []);

  const series = [
    {
      name: "Electronics",
      data: [50, 60, 80, 25, 10, 80],
    },
    {
      name: "Non-electronics",
      data: [20, 100, 40, 30, 80, 33],
    },
  ];

  const options = {
    chart: {
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: true,
    },
    legend: {
      position: "bottom",
      horizontalAlign: "center",
      fontWeight: 400,
      fontFamily: "Inter",
      fontSize: "12",
      offsetY: 0,
      labels: {
        colors: ["#64748B", "#64748B"],
      },
      itemMargin: {
        horizontal: 10,
        vertical: 5,
      },
      markers: {
        offsetX: -2,
        offsetY: -0.5,
        shape: "diamond",
      },
    },
    plotOptions: {
      radar: {
        size: 115,
        polygons: {
          strokeColors: "#E9E9E9",
          fill: {
            colors: ["#F8F8F8", "#ffffff"],
          },
        },
      },
    },
    colors: ["#757DFF", "#FC6829"],
    tooltip: {
      y: {
        formatter: function (val) {
          return `${val}`;
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
      labels: {
        style: {
          colors: "#A8A8A8",
          fontSize: "11px",
          fontFamily: "Inter",
          fontWeight: 400,
        },
      },
    },
    yaxis: {
      tickAmount: 5,
      labels: {
        formatter: function (val, i) {
          if (i % 2 === 0) {
            return val.toString();
          } else {
            return "";
          }
        },
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
            mb: "22px",
          }}
          className="text-black"
        >
          Sales By Category
        </Typography>

        <Box sx={{ margin: "-43px 0 -25px 0" }}>
          {isChartLoaded && (
            <Chart
              options={options}
              series={series}
              type="radar"
              height={400}
              width={"100%"}
            />
          )}
        </Box>
      </Card>
    </>
  );
};

export default SalesByCategory;
