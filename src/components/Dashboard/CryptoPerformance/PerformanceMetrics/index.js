"use client";

import { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import { Box, Typography, Card } from "@mui/material";
import CustomDropdown from "./CustomDropdown";

const PerformanceMetrics = () => {
  // Chart state
  const [isChartLoaded, setChartLoaded] = useState(false);

  useEffect(() => {
    setChartLoaded(true);
  }, []);

  const series = [
    {
      name: "Revenue",
      data: [120, 130, 140, 155, 165, 175, 185, 190, 200, 205, 200, 225],
    },
    {
      name: "Expenses",
      data: [10, 20, 30, 40, 50, 60, 70, 70, 90, 100, 110, 90],
    },
    { name: "Profit", data: [0, 5, 10, 15, 20, 25, 30, 35, 25, 45, 50, 55] },
  ];

  const options = {
    chart: {
      toolbar: {
        show: false,
      },
    },
    colors: ["#37D80A", "#FF4023", "#605DFF"],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: 2,
      curve: "smooth",
      dashArray: [0, 0, 0],
    },
    markers: {
      size: 3,
      hover: {
        sizeOffset: 3,
      },
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return "$" + val + "k";
        },
      },
    },
    grid: {
      show: true,
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
        show: true,
        color: "#64748B",
      },
      axisBorder: {
        show: true,
        color: "#64748B",
      },
      labels: {
        show: true,
        style: {
          colors: "#3A4252",
          fontSize: "12px",
        },
      },
    },
    yaxis: {
      // tickAmount: 5,
      // max: 3000,
      min: 0,
      labels: {
        formatter: (val) => {
          return "$" + val + "k";
        },
        style: {
          colors: "#3A4252",
          fontSize: "12px",
        },
      },
      axisBorder: {
        show: false,
        color: "#64748B",
      },
      axisTicks: {
        show: false,
        color: "#64748B",
      },
    },
    legend: {
      show: true,
      position: "bottom",
      fontSize: "12px",
      horizontalAlign: "center",
      itemMargin: {
        horizontal: 10,
        vertical: 10,
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
            flexWrap: "wrap",
            gap: "15px",
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
            Performance Metrics
          </Typography>

          <CustomDropdown
            options={["Daily", "Weekly", "Monthly", "Yearly"]} // Need to change the options also in CustomDropdown file
            onSelect={(value) => console.log(value)}
            defaultLabel="Monthly"
          />
        </Box>

        <Box
          sx={{
            mt: "-20px",
            mb: "-22px",
          }}
        >
          {isChartLoaded && (
            <Chart
              options={options}
              series={series}
              type="line"
              height={370}
              width={"100%"}
            />
          )}
        </Box>
      </Card>
    </>
  );
};

export default PerformanceMetrics;
