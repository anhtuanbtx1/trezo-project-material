"use client";

import React, { useEffect, useState } from "react";
import { Box, Typography, Card } from "@mui/material";
import CustomDropdown from "./CustomDropdown";
import Chart from "react-apexcharts";

const GuestActivity = () => {
  // Chart
  const [isChartLoaded, setChartLoaded] = useState(false);

  useEffect(() => {
    setChartLoaded(true);
  }, []);

  const series = [
    { name: "Check In", data: [15, 30, 20, 40, 35, 30, 25] },
    { name: "Check Out", data: [10, 20, 15, 25, 30, 40, 30] },
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
    colors: ["#ffffff", "#D8FFC8"],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: [2, 2, 0],
      dashArray: [0, 6, 0],
    },
    grid: {
      show: true,
      borderColor: "#ffffff1a",
    },
    fill: {
      type: "gradient",
      gradient: {
        stops: [0, 90, 100],
        shadeIntensity: 1,
        opacityFrom: 0.5,
        opacityTo: 0.2,
      },
    },
    xaxis: {
      categories: [
        "09:00",
        "10:00",
        "11:00",
        "12:00",
        "13:00",
        "14:00",
        "15:00",
      ],
      axisTicks: {
        show: false,
        color: "#ffffff1a",
      },
      axisBorder: {
        show: false,
        color: "#ffffff1a",
      },
      labels: {
        show: true,
        style: {
          colors: "#B1BBC8",
          fontSize: "12px",
        },
      },
    },
    yaxis: {
      tickAmount: 5,
      // max: 100,
      min: 0,
      labels: {
        style: {
          colors: "#B1BBC8",
          fontSize: "12px",
        },
      },
      axisBorder: {
        show: true,
        color: "#ffffff1a",
      },
      axisTicks: {
        show: false,
        color: "#ffffff1a",
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
        shape: "circle",
      },
    },
  };

  return (
    <>
      <Card
        sx={{
          backgroundColor: "primary.600",
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
            className="text-white"
          >
            Guest Activity
          </Typography>

          <Box>
            <CustomDropdown
              options={["Daily", "Weekly", "Monthly", "Yearly"]} // Need to change the options also in CustomDropdown file
              onSelect={(value) => console.log(value)}
              defaultLabel="Daily"
            />
          </Box>
        </Box>

        <Box
          sx={{
            marginTop: "-20px",
            marginLeft: "-12px",
            marginRight: "-20px",
            marginBottom: "-22px",
          }}
        >
          {isChartLoaded && (
            <Chart
              options={options}
              series={series}
              type="area"
              height={284}
              width={"100%"}
            />
          )}
        </Box>
      </Card>
    </>
  );
};

export default GuestActivity;
