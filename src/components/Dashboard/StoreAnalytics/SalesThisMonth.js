"use client";

import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { Card, Box, Typography } from "@mui/material"; 

const SalesThisMonth = () => {
  // Chart
  const [isChartLoaded, setChartLoaded] = useState(false);

  useEffect(() => {
    setChartLoaded(true);
  }, []);

  const series = [
    {
      name: "Sales This Month",
      data: [10, 31, 25, 40, 50, 50, 100, 90, 90],
    },
  ];

  const options = {
    chart: {
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },
    markers: {
      size: 0,
      strokeWidth: 0,
      hover: {
        size: 0,
      },
    },
    colors: ["#37D80A"],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "straight",
      width: 6,
    },
    grid: {
      borderColor: "#ECF0FF",
    },
    xaxis: {
      categories: ["3am", "6am", "9am", "12pm", "3pm", "6pm", "9pm", "12am"],
      axisTicks: {
        show: false,
        color: "#B1BBC8",
      },
      axisBorder: {
        show: false,
        color: "#B1BBC8",
      },
      labels: {
        show: false,
        style: {
          colors: "#8695AA",
          fontSize: "12px",
          fontFamily: "Inter",
        },
      },
    },
    yaxis: {
      show: false,
      tickAmount: 3,
      labels: {
        style: {
          colors: "#8695AA",
          fontSize: "12px",
        },
      },
    },
    tooltip: {
      y: {
        formatter: (val) => {
          return "$" + val + "K";
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
        <Box mb={"15px"}>
          <Typography sx={{ mb: "5px" }}>Sales This Month</Typography>

          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: "24px", md: "28px" },
              fontWeight: 700,
              mb: "5px",
            }}
            className="text-black"
          >
            $64.5K
          </Typography>

          <Box
            sx={{
              bgcolor: "#fd58121a",
              color: "error.500",
              border: "1px solid",
              borderColor: "error.500",
              padding: "3px 8px",
              borderRadius: "30px",
              fontSize: "12px",
              fontWeight: "500",
              display: "inline-block",
              lineHeight: 1,
            }}
          >
            -1.4%
          </Box>
        </Box>

        <Box sx={{ margin: "-29px -11px -29px -11px" }}>
          {isChartLoaded && (
            <Chart
              options={options}
              series={series}
              type="line"
              height={170}
              width={"100%"}
            />
          )}
        </Box>
      </Card>
    </>
  );
};

export default SalesThisMonth;
