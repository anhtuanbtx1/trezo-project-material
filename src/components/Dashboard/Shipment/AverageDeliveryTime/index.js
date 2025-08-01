"use client";

import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { Box, Typography, Card } from "@mui/material";

const AverageDeliveryTime = () => {
  // Chart
  const [isChartLoaded, setChartLoaded] = useState(false);

  useEffect(() => {
    setChartLoaded(true);
  }, []);

  const data = [70, 60, 80, 100, 70, 40, 80];
  const middleIndex = Math.floor(data.length / 2);

  const options = {
    chart: {
      toolbar: {
        show: false,
      },
    },
    colors: data.map((_, index) =>
      index === middleIndex ? "#3584FC" : "#BDDCFF"
    ),
    plotOptions: {
      bar: {
        columnWidth: "18.35px",
        borderRadius: 0,
        distributed: true,
        horizontal: false,
      },
    },
    grid: {
      show: true,
      strokeDashArray: 5,
      borderColor: "#EEF1FF",
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
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
          colors: "#8695AA",
          fontSize: "12px",
        },
      },
    },
    yaxis: {
      show: false,
      tickAmount: 5,
      labels: {
        formatter: (val) => `${val} minutes`,
        style: {
          colors: "#64748B",
          fontSize: "12px",
        },
      },
      axisBorder: {
        show: false,
        color: "#ECEEF2",
      },
      axisTicks: {
        show: false,
        color: "#ECEEF2",
      },
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return `${val} minutes`;
        },
      },
    },
    legend: {
      show: false,
      position: "top",
      fontSize: "12px",
      horizontalAlign: "left",
      itemMargin: {
        horizontal: 8,
        vertical: 0,
      },
      labels: {
        colors: "#64748B",
      },
      markers: {
        size: 6,
        offsetX: -2,
        offsetY: -0.5,
        shape: "square",
      },
    },
  };

  const series = [
    {
      name: "Time",
      data: data,
    },
  ];

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
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mb: "25px",
          }}
        >
          <Typography component={"span"}>Average Delivery Time</Typography>

          <Box>
            <Typography component={"span"}>Per Week</Typography>
          </Box>
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
              type="bar"
              height={186}
              width={"100%"}
            />
          )}
        </Box>
      </Card>
    </>
  );
};

export default AverageDeliveryTime;
