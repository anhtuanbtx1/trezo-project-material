"use client";

import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { Box, Typography, Card } from "@mui/material";

const Expense = () => {
  // Chart
  const [isChartLoaded, setChartLoaded] = useState(false);

  useEffect(() => {
    setChartLoaded(true);
  }, []);

  const series = [
    {
      name: "Up",
      data: [70, 42, 70, 120, 40, 70],
    },
    {
      name: "Down",
      data: [-70, -44, -70, -120, -40, -70],
    },
  ];

  const options = {
    chart: {
      stacked: true,
      toolbar: {
        show: false,
      },
    },
    colors: ["#BF85FB", "#5DA8FF"],
    plotOptions: {
      bar: {
        borderRadius: 2,
        columnWidth: "4px",
        borderRadiusApplication: "end",
        borderRadiusWhenStacked: "all",
      },
    },
    dataLabels: {
      enabled: false,
    },
    grid: {
      strokeDashArray: 7,
      borderColor: "#ECEEF2",
      xaxis: {
        lines: {
          show: false,
        },
      },
      yaxis: {
        lines: {
          show: false,
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
        size: 7,
        offsetX: -2,
        offsetY: -0.5,
        shape: "diamond",
      },
    },
    xaxis: {
      categories: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri"],
      axisTicks: {
        show: false,
        color: "#ECEEF2",
      },
      axisBorder: {
        show: false,
        color: "#ECEEF2",
      },
      labels: {
        show: false,
        style: {
          colors: "#8695AA",
          fontSize: "12px",
        },
      },
    },
    yaxis: {
      show: false,
      labels: {
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
        formatter: function (value) {
          return `${Math.abs(value).toFixed(2)}%`; // Ensure that negative values appear as positive in the tooltip
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
          position: "relative",
        }}
        className="rmui-card"
      >
        <Typography mb={"3px"}>Expense</Typography>

        <Typography
          variant="h3"
          sx={{
            fontWeight: 700,
            fontSize: { xs: "24px", md: "32px" },
            letterSpacing: "-0.01em",
            mb: "5px",
          }}
        >
          $132K
        </Typography>

        <Box
          sx={{
            bgcolor: "error.50",
            color: "error.main",
            borderRadius: "30px",
            display: "inline-block",
            fontSize: "12px",
            fontWeight: 500,
            padding: "4px 7px",
            lineHeight: 1,
            mb: "5px",
          }}
        >
          -1.2%
        </Box>

        <Typography sx={{ fontSize: "12px" }}>vs previous 30 days</Typography>

        <Box
          sx={{
            position: "absolute",
            top: "50%",
            right: "10px",
            transform: "translateY(-50%)",
            width: "120px",
          }}
          className="po-right-10"
        >
          {isChartLoaded && (
            <Chart
              options={options}
              series={series}
              type="bar"
              height={180}
              width={"100%"}
            />
          )}
        </Box>
      </Card>
    </>
  );
};

export default Expense;
