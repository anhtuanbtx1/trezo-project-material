"use client";

import React, { useEffect, useState } from "react";
import { Card, Box, Typography } from "@mui/material";
import Chart from "react-apexcharts";
import CustomDropdown from "./CustomDropdown";

const LinkedinNetFollowers = () => {
  // Chart
  const [isChartLoaded, setChartLoaded] = useState(false);

  useEffect(() => {
    setChartLoaded(true);
  }, []);

  const series = [
    {
      name: "Followers",
      data: [250, 150, 250, 120, 350, 150, 250],
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
      dropShadow: {
        enabled: true,
        enabledOnSeries: [0], // Apply shadow to the correct series index
        top: 5,
        left: 5,
        blur: 3,
        opacity: 0.6,
        color: "#605DFF", // Custom color for the shadow
      },
    },

    colors: ["#605DFF", "#DDE4FF"],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: [1],
    },
    grid: {
      borderColor: "#ECEEF2",
      strokeDashArray: 8,
      xaxis: {
        lines: {
          show: false,
        },
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        stops: [0, 90, 100],
        shadeIntensity: 1,
        opacityFrom: 0.4,
        opacityTo: 0.0,
      },
    },
    xaxis: {
      categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      axisTicks: {
        show: false,
        color: "#B1BBC8",
      },
      axisBorder: {
        show: true,
        color: "#D5D9E2",
      },
      labels: {
        style: {
          colors: "#8695AA",
          fontSize: "12px",
        },
      },
    },
    yaxis: {
      tickAmount: 5,
      max: 450,
      min: 0,
      axisBorder: {
        show: true,
        color: "#D5D9E2",
      },
      labels: {
        style: {
          colors: "#8695AA",
          fontSize: "12px",
        },
      },
    },
    legend: {
      show: true,
      position: "top",
      fontSize: "12px",
      horizontalAlign: "left",
      fontFamily: "Inter",
      fontWeight: 400,
      itemMargin: {
        horizontal: 8,
        vertical: 0,
      },
      labels: {
        colors: "#64748B",
      },
      markers: {
        offsetX: -2,
        offsetY: -0.5,
        shape: "diamond",
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
        className="rmui-card border"
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mb: "25px",
          }}
        >
          <Box>
            <Typography
              variant="h3"
              sx={{
                fontSize: { xs: "16px", md: "20px" },
                fontWeight: 700,
              }}
              className="text-black"
            >
              Linkedin Net Followers
            </Typography>

            <Typography sx={{ color: "#8695aa" }}>
              Net followers growth: +275
            </Typography>
          </Box>

          <Box>
            <CustomDropdown
              options={["This Day", "This Week", "This Month", "This Year"]} // Need to change the options also in CustomDropdown file
              onSelect={(value) => console.log(value)}
              defaultLabel="Last Week"
            />
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mb: "25px",
            gap: "10px",
            flexWrap: "wrap",
          }}
        >
          <Box>
            <Typography
              variant="h3"
              sx={{
                fontSize: "14px",
                fontWeight: 500,
                mb: "0",
              }}
            >
              56,100
            </Typography>

            <Typography fontSize={"12px"} mb={"0"} sx={{ color: "#8695aa" }}>
              Starting Followers
            </Typography>
          </Box>

          <Box>
            <Typography
              variant="h3"
              sx={{
                fontSize: "14px",
                fontWeight: 500,
                mb: "0",
              }}
            >
              300
            </Typography>
            <Typography fontSize={"12px"} mb={"0"} sx={{ color: "#8695aa" }}>
              New Followers
            </Typography>
          </Box>

          <Box>
            <Typography
              variant="h3"
              sx={{
                fontSize: "14px",
                fontWeight: 500,
                mb: "0",
              }}
            >
              25
            </Typography>
            <Typography fontSize={"12px"} mb={"0"} sx={{ color: "#8695aa" }}>
              Unfollows
            </Typography>
          </Box>

          <Box>
            <Typography
              variant="h3"
              sx={{
                fontSize: "14px",
                fontWeight: 500,
                mb: "0",
              }}
            >
              56,375
            </Typography>
            <Typography fontSize={"12px"} mb={"0"} sx={{ color: "#8695aa" }}>
              Ending Followers
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            margin: "-24px -10px -28px -17px",
          }}
        >
          {isChartLoaded && (
            <Chart
              options={options}
              series={series}
              type="area"
              height={310}
              width={"100%"}
            />
          )}
        </Box>
      </Card>
    </>
  );
};

export default LinkedinNetFollowers;
