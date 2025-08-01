"use client";

import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { Box, Typography, Card } from "@mui/material";
import CustomDropdown from "./CustomDropdown";

const RevenueVSExpense = () => {
  // Chart
  const [isChartLoaded, setChartLoaded] = useState(false);

  useEffect(() => {
    setChartLoaded(true);
  }, []);

  const series = [
    { name: "Revenue", data: [5, 7, 8, 6, 9, 10, 7] },
    { name: "Expense", data: [4, 6, 7, 5, 8, 9, 6] },
  ];

  const options = {
    chart: {
      toolbar: {
        show: false,
      },
    },
    colors: ["#FFAA72", "#90C7FF"],
    plotOptions: {
      bar: {
        borderRadius: 5,
        horizontal: false,
        columnWidth: "50%",
        borderRadiusApplication: "end",
        borderRadiusWhenStacked: "all",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: 5,
      show: true,
      colors: ["transparent"],
    },
    grid: {
      show: true,
      borderColor: "#ECF0FF",
    },
    xaxis: {
      categories: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      axisTicks: {
        show: true,
        color: "#DDE4FF",
      },
      axisBorder: {
        show: true,
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
      // max: 90,
      min: 0,
      labels: {
        formatter: (val) => {
          return "$" + val + "k";
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
          return "$" + val + "k";
        },
      },
    },
    legend: {
      show: true,
      position: "bottom",
      fontSize: "12px",
      horizontalAlign: "center",
      itemMargin: {
        horizontal: 8,
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
            Revenue vs Expense
          </Typography>

          <Box>
            <CustomDropdown
              options={["Weekly", "Monthly", "Yearly"]} // Need to change the options also in CustomDropdown file
              onSelect={(value) => console.log(value)}
              defaultLabel="Monthly"
            />
          </Box>
        </Box>

        <Box
          sx={{
            marginTop: "-20px",
            marginBottom: "-25px",
          }}
        >
          {isChartLoaded && (
            <Chart
              options={options}
              series={series}
              type="bar"
              height={343}
              width={"100%"}
            />
          )}
        </Box>
      </Card>
    </>
  );
};

export default RevenueVSExpense;
