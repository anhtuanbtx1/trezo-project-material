"use client";

import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { Box, Typography, Card } from "@mui/material";
import CustomDropdown from "./CustomDropdown";

const StudentsOverview = () => {
  // Chart
  const [isChartLoaded, setChartLoaded] = useState(false);

  useEffect(() => {
    setChartLoaded(true);
  }, []);

  const series = [
    {
      name: "Boys",
      data: [70, 42, 70, 120, 40, 70, 90],
    },
    {
      name: "Girls",
      data: [-70, -44, -70, -120, -40, -70, -90],
    },
  ];

  const options = {
    chart: {
      stacked: true,
      toolbar: {
        show: false,
      },
    },
    colors: ["#3584FC", "#FD5812"],
    plotOptions: {
      bar: {
        borderRadius: 6,
        columnWidth: "12px",
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
          show: true,
        },
      },
      yaxis: {
        lines: {
          show: false,
        },
      },
    },
    legend: {
      show: true,
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
          return `Math.abs(value)`; // Ensure that negative values appear as positive in the tooltip
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
          padding: { xs: "18px", sm: "20px", lg: "22px" },
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
            Students Overview
          </Typography>

          <Box>
            <CustomDropdown
              options={["Weekly", "Monthly", "Yearly"]} // Need to change the options also in CustomDropdown file
              onSelect={(value) => console.log(value)}
              defaultLabel="Select"
            />
          </Box>
        </Box>

        <Box
          sx={{
            ml: "-10px",
          }}
        >
          {isChartLoaded && (
            <Chart
              options={options}
              series={series}
              type="bar"
              height={303}
              width={"100%"}
            />
          )}
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: { xs: "20px", xl: "30px" },
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                bgcolor: "primary.100",
                borderRadius: "4px",
                width: "42px",
                height: "42px",
              }}
            >
              <img
                src="/images/icons/boys.svg"
                alt="boys"
                width={30}
                height={30}
              />
            </Box>
            <Box>
              <Typography component={"span"} sx={{ display: "block" }}>
                Boys
              </Typography>

              <Typography
                variant="h5"
                sx={{ mb: "0", fontSize: "20px", fontWeight: 600 }}
                className="text-black"
              >
                980
              </Typography>
            </Box>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                bgcolor: "orange.100",
                borderRadius: "4px",
                width: "42px",
                height: "42px",
              }}
            >
              <img
                src="/images/icons/girls.svg"
                alt="girls"
                width={30}
                height={30}
              />
            </Box>
            <Box>
              <Typography component={"span"} sx={{ display: "block" }}>
                Girls
              </Typography>
              <Typography
                component={"span"}
                sx={{ mb: "0", fontSize: "20px", fontWeight: 600 }}
                className="text-black"
              >
                675
              </Typography>
            </Box>
          </Box>
        </Box>
      </Card>
    </>
  );
};

export default StudentsOverview;
