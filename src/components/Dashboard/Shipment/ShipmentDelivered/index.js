"use client";

import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { Box, Typography, Card } from "@mui/material";

const ShipmentDelivered = () => {
  // Chart
  const [isChartLoaded, setChartLoaded] = useState(false);

  useEffect(() => {
    setChartLoaded(true);
  }, []);

  const series = [
    {
      name: "Car Box",
      type: "column",
      data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
    },
    {
      name: "Truck Cargo",
      type: "area",
      data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
    },
    {
      name: "Ship Cargo",
      type: "line",
      data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
    },
  ];

  const options = {
    chart: {
      stacked: false,
      toolbar: {
        show: false,
      },
    },
    colors: ["#605DFF", "#FD5812", "#37D80A"],
    stroke: {
      width: [0, 1, 5],
      curve: "smooth",
    },
    plotOptions: {
      bar: {
        columnWidth: "18.14px",
      },
    },
    fill: {
      opacity: [1, 0.08, 1],
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
        color: "#DDE4FF",
      },
      axisBorder: {
        show: true,
        color: "#DDE4FF",
      },
      labels: {
        show: true,
        style: {
          colors: "#64748B",
          fontSize: "12px",
        },
      },
    },
    yaxis: {
      tickAmount: 4,
      max: 80,
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
        color: "#DDE4FF",
      },
      axisTicks: {
        show: false,
        color: "#DDE4FF",
      },
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: function (y) {
          if (typeof y !== "undefined") {
            return y.toFixed(0) + "%";
          }
          return y;
        },
      },
    },
    legend: {
      show: true,
      fontSize: "12px",
      position: "bottom",
      horizontalAlign: "center",
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
    grid: {
      show: true,
      strokeDashArray: 5,
      borderColor: "#EEF1FF",
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
            Shipment Delivered
          </Typography>

          <Box>
            <Typography component={"span"}>Last 30 days</Typography>
          </Box>
        </Box>

        <Box
          sx={{
            mt: "-14px",
            mb: "-20px",
            ml: "-15px",
          }}
        >
          {isChartLoaded && (
            <Chart
              options={options}
              series={series}
              type="line"
              height={292}
              width={"100%"}
            />
          )}
        </Box>
      </Card>
    </>
  );
};

export default ShipmentDelivered;
