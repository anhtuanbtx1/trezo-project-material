"use client";

import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { Card, Box, Typography } from "@mui/material";
import CustomDropdown from "./CustomDropdown";

const ProjectsAnalysis = () => {
  // Chart
  const [isChartLoaded, setChartLoaded] = useState(false);

  useEffect(() => {
    setChartLoaded(true);
  }, []);

  const series = [
    {
      name: "Budgets",
      data: [40, 60, 55, 30, 60, 130, 63],
    },
    {
      name: "Expenses",
      data: [15, 65, 100, 40, 90, 90, 91],
    },
    {
      name: "Revenue",
      data: [55, 70, 30, 50, 110, 60, 52],
    },
  ];

  const options = {
    chart: {
      toolbar: {
        show: true,
      },
    },

    colors: ["#605DFF", "#AD63F6", "#3584FC"],
    plotOptions: {
      bar: {
        columnWidth: "60%",
      },
    },
    grid: {
      show: true,
      borderColor: "#ECEEF2",
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: 4,
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
        show: true,
        style: {
          colors: "#8695AA",
          fontSize: "12px",
        },
      },
    },
    yaxis: {
      tickAmount: 6,
      max: 150,
      min: 0,
      labels: {
        // formatter: (val) => {
        //     return '$' + val + 'k'
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
    tooltip: {
      y: {
        formatter: function (val) {
          return "$" + val + "k";
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
            Projects Analysis
          </Typography>

          <Box>
            <CustomDropdown
              options={["This Day", "This Week", "This Month", "This Year"]} // Need to change the options also in CustomDropdown file
              onSelect={(value) => console.log(value)}
              defaultLabel="Last 7 Days"
            />
          </Box>
        </Box>

        <Box
          sx={{
            marginTop: "-5px",
            marginLeft: "-12px",
            marginBottom: "-20px",
          }}
        >
          {isChartLoaded && (
            <Chart
              options={options}
              series={series}
              type="bar"
              height={416}
              width={"100%"}
            />
          )}
        </Box>
      </Card>
    </>
  );
};

export default ProjectsAnalysis;
