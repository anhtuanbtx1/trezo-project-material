"use client";

import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { Box, Typography, Card } from "@mui/material";

const WeeklyExpenses = () => {
  // Chart state
  const [isChartLoaded, setChartLoaded] = useState(false);

  useEffect(() => {
    setChartLoaded(true);
  }, []);

  const series = [
    {
      name: "Expenses",
      data: [20, 100, 150, 100, 220, 180, 300],
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
    colors: ["#3584FC"],
    fill: {
      type: "gradient",
      gradient: {
        stops: [0, 90, 100],
        shadeIntensity: 1,
        opacityFrom: 0.5,
        opacityTo: 0.5,
      },
    },
    dataLabels: {
      enabled: false,
    },
    grid: {
      show: true,
      borderColor: "#F6F7F9",
    },
    stroke: {
      curve: "smooth",
      width: 2,
    },
    xaxis: {
      categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      axisTicks: {
        show: true,
        color: "#F6F7F9",
      },
      axisBorder: {
        show: true,
        color: "#F6F7F9",
      },
      labels: {
        show: true,
        style: {
          colors: "#64748B",
          fontSize: "12px",
        },
      },
    },
    yaxis: {
      tickAmount: 3,
      max: 300,
      min: 0,
      opposite: true,
      labels: {
        formatter: (val) => {
          return "$" + val;
        },
        style: {
          colors: "#64748B",
          fontSize: "12px",
        },
      },
      axisBorder: {
        show: false,
        color: "#F6F7F9",
      },
      axisTicks: {
        show: false,
        color: "#F6F7F9",
      },
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return "$" + val;
        },
      },
    },
    legend: {
      show: false,
      position: "top",
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
            mb: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: "15px" }}>
            <Box>
              <Typography
                component={"span"}
                sx={{ display: "block", mb: "4px" }}
              >
                Weekly Expenses
              </Typography>

              <Typography
                variant="h5"
                sx={{ mb: "0", fontSize: "20px", fontWeight: "700" }}
              >
                $1,200
              </Typography>
            </Box>

            <Box
              sx={{
                display: "inline-block",
                px: "8.5px",
                color: "error.600",
                border: "1px solid",
                borderColor: "error.300",
                bgcolor: "error.100",
                fontSize: "12px",
                borderRadius: "100px",
              }}
            >
              -5.1%
            </Box>
          </Box>

          <Box>
            <Typography>Last 7 days</Typography>
          </Box>
        </Box>

        <Box
          sx={{
            mt: "-32px",
            mb: "-28px",
          }}
        >
          {isChartLoaded && (
            <Chart
              options={options}
              series={series}
              type="area"
              height={160}
              width={"100%"}
            />
          )}
        </Box>
      </Card>
    </>
  );
};

export default WeeklyExpenses;
