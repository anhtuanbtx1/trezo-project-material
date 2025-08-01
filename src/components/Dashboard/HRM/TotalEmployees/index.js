"use client";

import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { Card, Box, Typography } from "@mui/material";

const TotalEmployees = () => {
  // Chart
  const [isChartLoaded, setChartLoaded] = useState(false);

  useEffect(() => {
    setChartLoaded(true);
  }, []);

  const series = [
    {
      name: "Employees",
      data: [3, 12, 8, 13, 8, 10, 16],
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
    colors: ["#4936F5"],
    dataLabels: {
      enabled: false,
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100, 100],
      },
    },
    grid: {
      show: false,
      borderColor: "#ECEEF2",
    },
    stroke: {
      curve: "monotoneCubic",
      width: 0,
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
      // tickAmount: 6,
      show: false,
      // max: 150,
      // min: 0,
      labels: {
        // formatter: (val) => {
        //     return val + 'k'
        // },
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
                bgcolor: "primary.700",
                borderRadius: "4px",
                width: "44px",
                height: "44px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
              }}
            >
              <i className="material-symbols-outlined">group</i>
            </Box>

            <Box>
              <Typography component={"span"} sx={{ display: "block" }}>
                Total Employees
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
                15,720
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
                bgcolor: "success.100",
                color: "success.700",
                borderRadius: "4px",
                width: "26px",
                height: "26px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "18px",
              }}
            >
              <i className="ri-arrow-right-up-line"></i>
            </Box>

            <Box className="text-gray-600 dark:text-gray-400">
              <Typography
                component={"span"}
                sx={{ fontWeight: "500", color: "grey.700" }}
              >
                +12%
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
                type="area"
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

export default TotalEmployees;
