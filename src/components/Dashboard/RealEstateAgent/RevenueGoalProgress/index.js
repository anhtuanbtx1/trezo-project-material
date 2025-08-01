"use client";

import React, { useEffect, useState } from "react";
import { Box, Typography, Card } from "@mui/material";
import CustomDropdown from "./CustomDropdown";
import Chart from "react-apexcharts";

const RevenueGoalProgress = () => {
  // Chart state
  const [isChartLoaded, setChartLoaded] = useState(false);

  useEffect(() => {
    setChartLoaded(true);
  }, []);

  const series = [
    {
      name: "Prediction",
      data: [108, 130, 110, 140, 130, 115, 125, 115, 125, 140, 140, 130],
    },
    {
      name: "Gained",
      data: [135, 115, 128, 120, 125, 130, 135, 130, 135, 145, 120, 125],
    },
  ];

  const options = {
    chart: {
      toolbar: {
        show: false,
      },
    },
    colors: ["#757DFF", "#E9D5FF"],
    stroke: {
      width: 4,
      curve: "straight",
      dashArray: [0, 8],
    },
    grid: {
      show: true,
      borderColor: "#ECF0FF",
    },
    dataLabels: {
      enabled: false,
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
        color: "#DDE4FF",
      },
      axisBorder: {
        show: false,
        color: "#DDE4FF",
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
      // tickAmount: 5,
      // max: 150,
      // min: 100,
      labels: {
        formatter: (val) => {
          return "$" + val + "K";
        },
        style: {
          colors: "#8695AA",
          fontSize: "12px",
        },
      },
      axisBorder: {
        show: false,
        color: "#DDE4FF",
      },
      axisTicks: {
        show: false,
        color: "#DDE4FF",
      },
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return val + "k";
        },
      },
    },
    fill: {
      opacity: 1,
    },
    legend: {
      show: true,
      fontSize: "12px",
      position: "bottom",
      horizontalAlign: "left",
      itemMargin: {
        horizontal: 8,
        vertical: 8,
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
            gap: "15px",
            mb: "10px",
            position: "relative",
            zIndex: 1,
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
            Revenue Goal Progress
          </Typography>

          <CustomDropdown
            options={["Daily", "Weekly", "Monthly", "Yearly"]} // Need to change the options also in CustomDropdown file
            onSelect={(value) => console.log(value)}
            defaultLabel="Monthly"
          />
        </Box>

        <Box sx={{ margin: "-5px -15px -25px" }}>
          {isChartLoaded && (
            <Chart
              options={options}
              series={series}
              type="line"
              height={400}
              width={"100%"}
            />
          )}
        </Box>
      </Card>
    </>
  );
};

export default RevenueGoalProgress;
