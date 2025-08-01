"use client";

import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { Box, Typography, Card } from "@mui/material";
import CustomDropdown from "./CustomDropdown";

const AttendanceAnalytics = () => {
  // Chart
  const [isChartLoaded, setChartLoaded] = useState(false);

  useEffect(() => {
    setChartLoaded(true);
  }, []);

  const series = [
    {
      name: "Teachers",
      data: [500, 600, 250, 600, 200, 500, 600, 120, 250, 500, 200, 250],
    },
    {
      name: "Boys",
      data: [200, 300, 200, 400, 200, 250, 350, 120, 250, 300, 120, 200],
    },
    {
      name: "Girls",
      data: [150, 250, 200, 300, 300, 150, 200, 300, 200, 250, 400, 200],
    },
  ];

  const options = {
    chart: {
      stacked: true,
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: true,
      },
    },
    plotOptions: {
      bar: {
        borderRadius: 7,
        horizontal: false,
        columnWidth: "15px",
        borderRadiusApplication: "end",
      },
    },
    dataLabels: {
      enabled: false,
    },
    colors: ["#605DFF", "#9CAAFF", "#DDE4FF"],
    grid: {
      show: true,
      strokeDashArray: 7,
      borderColor: "#ECEEF2",
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      axisTicks: {
        show: false,
        color: "#D5D9E2",
      },
      axisBorder: {
        show: true,
        color: "#D5D9E2",
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
      min: 0,
      labels: {
        style: {
          colors: "#64748B",
          fontSize: "12px",
        },
      },
      axisBorder: {
        show: true,
        color: "#D5D9E2",
      },
      axisTicks: {
        show: false,
        color: "#D5D9E2",
      },
    },
    legend: {
      show: true,
      position: "top",
      fontSize: "12px",
      horizontalAlign: "left",
      itemMargin: {
        horizontal: 8,
        vertical: 5,
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
            Attendance Analytics
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
            mb: "-20px",
            mt: "-15px",
            ml: "-15px",
          }}
        >
          {isChartLoaded && (
            <Chart
              options={options}
              series={series}
              type="bar"
              height={358}
              width={"100%"}
            />
          )}
        </Box>
      </Card>
    </>
  );
};

export default AttendanceAnalytics;
