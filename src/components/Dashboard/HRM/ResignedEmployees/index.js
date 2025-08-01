"use client";

import React, { useEffect, useState } from "react";
import { Card, Box, Typography } from "@mui/material";
import Chart from "react-apexcharts";

const ResignedEmployees = () => {
  // Chart
  const [isChartLoaded, setChartLoaded] = useState(false);

  useEffect(() => {
    setChartLoaded(true);
  }, []);

  const series = [
    {
      name: "Employees",
      data: [60, 35, 55, 30, 45, 30, 55],
    },
  ];

  const options = {
    chart: {
      toolbar: {
        show: false,
      },
    },
    colors: ["#FD5812"],
    plotOptions: {
      bar: {
        borderRadius: 3,
        columnWidth: "8px",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: 2,
      show: true,
      colors: ["transparent"],
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
      labels: {
        show: false,
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
    fill: {
      opacity: 1,
    },
    grid: {
      show: false,
      borderColor: "#ECEEF2",
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

  return (
    <>
      <Card
        sx={{
          boxShadow: "none",
          borderRadius: "7px",
          mb: "25px",
          padding: { xs: "18px", sm: "20px", lg: "30px" },
        }}
        className="rmui-card"
      >
        <Box
          sx={{
            position: "relative",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <Box
              sx={{
                bgcolor: "orange.600",
                borderRadius: "4px",
                width: "44px",
                height: "44px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
              }}
            >
              <i className="material-symbols-outlined">person_remove</i>
            </Box>

            <Box>
              <Typography component={"span"} sx={{ display: "block" }}>
                Resigned Employees
              </Typography>

              <Typography
                variant="h5"
                sx={{
                  mb: "0",
                  mt: "2px",
                  fontSize: "20px",
                  fontWeight: "600",
                }}
              >
                3,18
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{
              mt: "32px",
              display: "flex",
              alignItems: "center",
              gap: "7px",
            }}
          >
            <Box
              sx={{
                bgcolor: "orange.100",
                color: "orange.700",
                borderRadius: "4px",
                width: "26px",
                height: "26px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "18px",
              }}
            >
              <i className="ri-arrow-right-down-line"></i>
            </Box>

            <Box className="text-gray-600 dark:text-gray-400">
              <Typography
                component={"span"}
                sx={{ fontWeight: "500", color: "grey.700" }}
              >
                -5%
              </Typography>{" "}
              last year
            </Box>
          </Box>

          <Box
            sx={{
              position: "absolute",
              top: "50%",
              transform: "translateY(-50%)",
              maxWidth: "125px",
            }}
            className="po-right-0 -mr-10"
          >
            {isChartLoaded && (
              <Chart
                options={options}
                series={series}
                type="bar"
                height={140}
                width={"100%"}
              />
            )}
          </Box>
        </Box>
      </Card>
    </>
  );
};

export default ResignedEmployees;
