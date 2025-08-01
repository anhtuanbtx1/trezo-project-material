"use client";

import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { Card, Box, Typography } from "@mui/material";

const Revenue = () => {
  // Chart
  const [isChartLoaded, setChartLoaded] = useState(false);

  useEffect(() => {
    setChartLoaded(true);
  }, []);

  const series = [
    {
      name: "Revenue",
      data: [35, 70, 35, 65, 45, 98, 80],
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
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "straight",
      width: 2,
    },
    colors: ["#605DFF"],
    fill: {
      type: "gradient",
      gradient: {
        stops: [0, 90, 100],
        shadeIntensity: 1,
        opacityFrom: 0.5,
        opacityTo: 0.5,
      },
    },
    xaxis: {
      categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
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
      tickAmount: 5,
      show: false,
      max: 100,
      min: 0,
      labels: {
        show: true,
        style: {
          colors: "#64748B",
          fontSize: "12px",
        },
      },
      axisBorder: {
        show: true,
        color: "#ECEEF2",
      },
      axisTicks: {
        show: true,
        color: "#ECEEF2",
      },
    },
    grid: {
      show: false,
      borderColor: "#ECEEF2",
    },
    legend: {
      show: true,
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
        shape: "circle",
      },
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return val + "k";
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
          <Typography sx={{ display: "block", mb: "5px" }}>Revenue</Typography>

          <Typography
            component="h3"
            sx={{
              fontSize: { xs: "20px", md: "28px", lg: "24px" },
              mb: "8px",
              fontWeight: 700,
              lineHeight: "1",
            }}
          >
            $1.2M
          </Typography>

          <Box
            sx={{
              bgcolor: "error.100",
              color: "error.700",
              border: "1px solid",
              borderColor: "error.300",
              borderRadius: "100px",
              fontSize: "12px",
              padding: "3px 9px",
              display: "inline-block",
              lineHeight: "1",
            }}
          >
            - 3.2%
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
                type="area"
                height={120}
                width={130}
              />
            )}
          </Box>
        </Box>
      </Card>
    </>
  );
};

export default Revenue;
