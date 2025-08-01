"use client";

import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { Card, Box, Typography } from "@mui/material";

const Conversion = () => {
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
        size: 6,
        offsetX: -2,
        offsetY: -0.5,
        shape: "square",
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
        }}
        className="rmui-card"
      >
        <Box
          sx={{
            position: "relative",
          }}
        >
          <Typography sx={{ display: "block", mb: "5px" }}>
            Conversion
          </Typography>

          <Typography
            component="h3"
            sx={{
              fontSize: { xs: "20px", md: "28px", lg: "24px" },
              mb: "8px",
              fontWeight: 700,
              lineHeight: "1",
            }}
          >
            32.5%
          </Typography>

          <Box
            sx={{
              bgcolor: "success.100",
              color: "success.700",
              border: "1px solid",
              borderColor: "success.300",
              borderRadius: "100px",
              fontSize: "12px",
              padding: "3px 9px",
              display: "inline-block",
              lineHeight: "1",
            }}
          >
            +1.4%
          </Box>

          <Box
            sx={{
              position: "absolute",
              mt: "5px",
              top: "50%",
              transform: "translateY(-50%)",
            }}
            className="po-right-0"
          >
            {isChartLoaded && (
              <Chart
                options={options}
                series={series}
                type="bar"
                height={150}
                width={120}
              />
            )}
          </Box>
        </Box>
      </Card>
    </>
  );
};

export default Conversion;
