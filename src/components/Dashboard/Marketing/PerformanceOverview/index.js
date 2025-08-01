"use client";

import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { Card, Box, Typography } from "@mui/material";
import CustomDropdown from "./CustomDropdown";

const PerformanceOverview = () => {
  // Chart
  const [isChartLoaded, setChartLoaded] = useState(false);

  useEffect(() => {
    setChartLoaded(true);
  }, []);

  const series = [
    {
      name: "Social Campaigns",
      data: [[100, 20, 50]],
    },
    {
      name: "Email Newsletter",
      data: [[300, 50, 70]],
    },
    {
      name: "TV Campaign",
      data: [[500, 80, 80]],
    },
    {
      name: "Google Ads",
      data: [[650, 40, 50]],
    },
    {
      name: "Courses",
      data: [[850, 60, 70]],
    },
    {
      name: "Radio",
      data: [[900, 20, 60]],
    },
  ];

  const options = {
    chart: {
      toolbar: {
        show: false,
      },
    },
    colors: ["#757DFF", "#5DA8FF", "#BF85FB", "#1E8308", "#FE7A36", "#174EDE"],
    dataLabels: {
      enabled: false,
    },
    grid: {
      show: true,
      strokeDashArray: 7,
      borderColor: "#ECEEF2",
    },
    xaxis: {
      min: 0,
      max: 1000,
      axisTicks: {
        show: false,
        color: "#DDE4FF",
      },
      axisBorder: {
        show: true,
        color: "#DDE4FF",
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
      tickAmount: 5,
      max: 100,
      min: 0,
      labels: {
        formatter: (val) => {
          return "$" + val + "K";
        },
        style: {
          colors: "#8695AA",
          fontSize: "12px",
        },
      },
      axisBorder: {
        show: true,
        color: "#DDE4FF",
      },
      axisTicks: {
        show: false,
        color: "#DDE4FF",
      },
    },
    legend: {
      show: true,
      position: "bottom",
      fontSize: "12px",
      horizontalAlign: "left",
      itemMargin: {
        horizontal: 8,
        vertical: 8,
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
          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: "16px", md: "18px" },
              fontWeight: 700,
            }}
            className="text-black"
          >
            Performance Overview
          </Typography>

          <Box>
            <CustomDropdown
              options={["This Week", "This Month", "This Year"]} // Need to change the options also in CustomDropdown file
              onSelect={(value) => console.log(value)}
              defaultLabel="This Week"
            />
          </Box>
        </Box>

        <Box
          sx={{
            marginTop: "-22px",
            marginBottom: "-20px",
          }}
        >
          {isChartLoaded && (
            <Chart
              options={options}
              series={series}
              type="bubble"
              height={370}
              width={"100%"}
            />
          )}
        </Box>
      </Card>
    </>
  );
};

export default PerformanceOverview;
