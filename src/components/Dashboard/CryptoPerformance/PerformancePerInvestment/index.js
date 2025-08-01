"use client";

import { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import { Box, Typography, Card } from "@mui/material";
import CustomDropdown from "./CustomDropdown";

const PerformancePerInvestment = () => {
  // Chart state
  const [isChartLoaded, setChartLoaded] = useState(false);

  useEffect(() => {
    setChartLoaded(true);
  }, []);

  const series = [
    {
      name: "Coin",
      data: [
        { x: "Bitcoin", y: [8, 2] },
        { x: "Ethereum", y: [5, 3] },
        { x: "Solana", y: [4, 8] },
        { x: "Tether", y: [3, 5] },
        { x: "USDC", y: [2, 5] },
        { x: "XRP", y: [1, 2] },
      ],
    },
  ];

  const options = {
    chart: {
      toolbar: {
        show: false,
      },
    },
    colors: ["#3584FC"],
    plotOptions: {
      bar: {
        horizontal: false,
      },
    },
    dataLabels: {
      enabled: true,
      formatter: function (val) {
        return val + "%";
      },
      style: {
        fontSize: "12px",
        fontWeight: "400",
      },
    },
    legend: {
      show: false,
      fontSize: "12px",
      position: "bottom",
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
    grid: {
      show: true,
      borderColor: "#ECEEF2",
    },
    xaxis: {
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
      tickAmount: 5,
      // max: 3000,
      min: 0,
      labels: {
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
    tooltip: {
      y: {
        formatter: function (val) {
          return val + "%";
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
            Performance Per Investment
          </Typography>

          <CustomDropdown
            options={["Last Day", "Last Week", "Last Month", "Last Year"]} // Need to change the options also in CustomDropdown file
            onSelect={(value) => console.log(value)}
            defaultLabel="Last Month"
          />
        </Box>

        <Box
          sx={{
            mt: "-15px",
            mb: "-15px",
          }}
        >
          {isChartLoaded && (
            <Chart
              options={options}
              series={series}
              type="rangeBar"
              height={407}
              width={"100%"}
            />
          )}
        </Box>
      </Card>
    </>
  );
};

export default PerformancePerInvestment;
