"use client";

import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { Box, Typography, Card } from "@mui/material";

const TotalOrders = () => {
  // Chart
  const [isChartLoaded, setChartLoaded] = useState(false);

  useEffect(() => {
    setChartLoaded(true);
  }, []);

  const series = [
    {
      name: "Orders",
      data: [8, 10, 7, 10, 9, 11, 10],
    },
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
    colors: ["#3584FC"],
    dataLabels: {
      enabled: false,
    },
    grid: {
      show: false,
      borderColor: "#ECEEF2",
    },
    stroke: {
      curve: "smooth",
      width: 2,
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
        show: false,
        style: {
          colors: "#8695AA",
          fontSize: "12px",
        },
      },
    },
    yaxis: {
      // tickAmount: 6,
      show: false,
      // max: 150,
      // min: 0,
      labels: {
        // formatter: (val:any) => {
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
          position: "relative",
        }}
        className="rmui-card"
      >
        <Typography mb={"3px"}>Total Orders</Typography>

        <Typography
          variant="h3"
          sx={{
            fontWeight: 700,
            fontSize: { xs: "24px", md: "32px" },
            letterSpacing: "-0.01em",
            mb: "5px",
          }}
        >
          1250
        </Typography>

        <Box
          sx={{
            bgcolor: "success.100",
            color: "success.main",
            borderRadius: "30px",
            display: "inline-block",
            fontSize: "12px",
            fontWeight: 500,
            padding: "4px 7px",
            lineHeight: 1,
            mb: "5px",
          }}
        >
          +5.4%
        </Box>

        <Typography sx={{ fontSize: "12px" }}>vs previous 30 days</Typography>

        <Box
          sx={{
            position: "absolute",
            top: "50%",
            right: "10px",
            transform: "translateY(-50%)",
            width: "120px",
          }}
          className="po-right-10"
        >
          {isChartLoaded && (
            <Chart
              options={options}
              series={series}
              type="area"
              height={125}
              width={"100%"}
            />
          )}
        </Box>
      </Card>
    </>
  );
};

export default TotalOrders;
