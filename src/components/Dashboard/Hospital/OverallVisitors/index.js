"use client";

import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { Card, Box, Typography } from "@mui/material";

const OverallVisitors = () => {
  const [isChartLoaded, setChartLoaded] = useState(false);

  useEffect(() => {
    setChartLoaded(true);
  }, []);

  const series = [
    {
      name: "Visitors",
      data: [30, 70, 50, 75, 40, 80, 50, 100],
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
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "straight",
      width: 2,
    },
    colors: ["#9747FF"],
    fill: {
      type: "gradient",
      gradient: {
        stops: [0, 90, 100],
        shadeIntensity: 1,
        opacityFrom: 0.5,
        opacityTo: 0.9,
      },
    },
    xaxis: {
      categories: [
        "01 Jan",
        "02 Jan",
        "03 Jan",
        "04 Jan",
        "05 Jan",
        "06 Jan",
        "07 Jan",
        "08 Jan",
      ],
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
      tickAmount: 5,
      show: false,
      max: 100,
      min: 0,
      labels: {
        show: true,
        style: {
          colors: "#64748B",
          fontSize: "12px",
        },
      },
      axisBorder: {
        show: true,
        color: "#ECEEF2",
      },
      axisTicks: {
        show: true,
        color: "#ECEEF2",
      },
    },
    grid: {
      show: false,
      borderColor: "#ECEEF2",
    },
    legend: {
      show: true,
      position: "top",
      fontSize: "12px",
      horizontalAlign: "center",
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
          bgcolor: "#e9d5ff",
          position: "relative",
          boxShadow: "none",
          borderRadius: "7px",
          mb: "25px",
          paddingTop: { xs: "18px", sm: "20px", lg: "25px" },
          paddingX: { xs: "18px", sm: "20px", lg: "25px" },
          paddingBottom: "100px",
        }}
        className="rmui-card"
      >
        <Typography component="span" sx={{ display: "block", mb: "10px" }}>
          Overall Visitors
        </Typography>

        <Typography
          component="h3"
          sx={{
            display: "flex",
            alignItems: "center",
            fontSize: "24px",
            fontWeight: "500",
            gap: "10px",
          }}
        >
          45,745
          <Box
            sx={{
              bgcolor: "#D8FFC8",
              border: "1px solid #82FC5A",
              color: "success.main",
              borderRadius: "100px",
              fontSize: "11px",
              padding: "1.5px 7px",
              fontWeight: "500",
              display: "flex",
              alignItems: "center",
              gap: "2px",
            }}
          >
            <i
              className="ri-arrow-up-fill"
              style={{
                fontSize: "14px",
                flexShrink: "0",
                lineHeight: "0",
              }}
            ></i>
            7%
          </Box>
        </Typography>

        <Box
          sx={{
            position: "absolute",
            left: "0",
            right: "0",
            bottom: "-38px",
            ml: "-12px",
            mr: "-10px",
          }}
        >
          {isChartLoaded && (
            <Chart
              options={options}
              series={series}
              type="area"
              height={160}
              width={"100%"}
            />
          )}
        </Box>
      </Card>
    </>
  );
};

export default OverallVisitors;
