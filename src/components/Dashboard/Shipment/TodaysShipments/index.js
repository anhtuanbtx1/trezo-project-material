"use client";

import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { Box, Typography, Card } from "@mui/material";

const TodaysShipments = () => {
  // State for chart loading
  const [isChartLoaded, setChartLoaded] = useState(false);

  useEffect(() => {
    setChartLoaded(true);
  }, []);

  // Data series for the chart
  const series = [
    {
      name: "Shipment",
      data: [10, 31, 25, 40, 50, 50, 100],
    },
  ];

  // Chart configuration options
  const options = {
    chart: {
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },
    colors: ["#5C61F2"],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "straight",
      width: 2,
    },
    grid: {
      show: true,
      strokeDashArray: 5,
      borderColor: "#EEF1FF",
    },
    xaxis: {
      categories: ["3am", "6am", "9am", "12pm", "3pm", "6pm", "9pm", "12am"],
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
          colors: "#64748B",
          fontSize: "12px",
        },
      },
    },
    yaxis: {
      tickAmount: 3,
      max: 150,
      min: 0,
      labels: {
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
      y: {
        formatter: (val) => {
          return val + " Ton";
        },
      },
    },
  };

  return (
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
        <Box>
          <Typography component={"span"} sx={{ display: "block", mb: "4px" }}>
            Todays Shipments
          </Typography>

          <Typography
            component={"h5"}
            sx={{ mb: "0", fontSize: "20px", fontWeight: 700 }}
          >
            9,120 Ton
          </Typography>
        </Box>

        <Box
          sx={{
            display: "inline-block",
            px: "8.5px",
            color: "success.600",
            border: "1px solid",
            borderColor: "success.300",
            bgcolor: "success.100",
            fontSize: "12px",
            borderRadius: "100px",
          }}
        >
          +5%
        </Box>
      </Box>

      <Box
        sx={{
          mt: "-35px",
          mb: "-29px",
          ml: "-15px",
          mr: "-15px",
        }}
      >
        {isChartLoaded && (
          <Chart
            options={options}
            series={series}
            type="line"
            height={187}
            width="100%"
          />
        )}
      </Box>
    </Card>
  );
};

export default TodaysShipments;
