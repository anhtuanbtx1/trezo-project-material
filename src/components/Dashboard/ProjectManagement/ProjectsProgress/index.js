"use client";

import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { Card, Box, Typography } from "@mui/material";
import CustomDropdown from "./CustomDropdown"; 

const ProjectsProgress = () => {
  // Chart
  const [isChartLoaded, setChartLoaded] = useState(false);

  useEffect(() => {
    setChartLoaded(true);
  }, []);

  const series = [
    {
      name: "Completed",
      data: [70, 23, 45, 30, 62, 70],
    },
    {
      name: "In Progress",
      data: [15, 40, 37, 38, 80, 45],
    },
    {
      name: "Not Start Yet",
      data: [50, 11, 60, 15, 31, 30],
    },
    {
      name: "Cancelled",
      data: [30, 60, 25, 22, 50, 15],
    },
  ];

  const options = {
    chart: {
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: true,
      },
    },

    dataLabels: {
      enabled: false,
    },
    colors: ["#605DFF", "#FE7A36", "#AD63F6", "#D71C00"],
    stroke: {
      curve: "smooth",
      width: 2,
    },
    grid: {
      show: true,
      borderColor: "#ECEEF2",
    },
    markers: {
      size: 4,
      strokeWidth: 0,
      shape: ["circle", "square", "circle", "square"],
      hover: {
        size: 5,
      },
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
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
      tickAmount: 5,
      max: 100,
      min: 0,
      labels: {
        formatter: (val) => {
          return val + "%";
        },
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
        shape: "diamond",
        offsetX: -2,
        offsetY: -0.5,
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
            Projects Progress
          </Typography>

          <Box>
            <CustomDropdown
              options={["This Day", "This Week", "This Month", "This Year"]} // Need to change the options also in CustomDropdown file
              onSelect={(value) => console.log(value)}
              defaultLabel="Last 6 Months"
            />
          </Box>
        </Box>

        <Box
          sx={{
            marginTop: "-8px",
            marginLeft: "-13px",
            marginBottom: "-20px",
          }}
        >
          {isChartLoaded && (
            <Chart
              options={options}
              series={series}
              type="line"
              height={332}
              width={"100%"}
            />
          )}
        </Box>
      </Card>
    </>
  );
};

export default ProjectsProgress;
