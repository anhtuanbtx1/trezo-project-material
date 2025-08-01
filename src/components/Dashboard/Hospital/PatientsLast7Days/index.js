"use client";

import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { Card, Box, Typography } from "@mui/material";

const PatientsLast7Days = () => {
  const [isChartLoaded, setChartLoaded] = useState(false);

  useEffect(() => {
    setChartLoaded(true);
  }, []);

  const series = [
    {
      name: "Patients",
      data: [60, 50, 40, 50, 45, 40, 60],
    },
  ];

  const options = {
    chart: {
      toolbar: {
        show: false,
      },
    },
    colors: ["#FE7A36"],
    plotOptions: {
      bar: {
        borderRadius: 3,
        columnWidth: "9px",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: 2,
      show: true,
      colors: ["transparent"],
    },
    xaxis: {
      categories: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
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
      max: 60,
      min: 0,
      labels: {
        show: false,
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
    fill: {
      opacity: 1,
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
    grid: {
      show: false,
      borderColor: "#ECEEF2",
    },
  };

  return (
    <>
      <Card
        sx={{
          bgcolor: "#FFE8D4",
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
          Patients last 7 days
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
          768
          <Box
            sx={{
              bgcolor: "#ffc8c0",
              border: "1px solid #ffa294",
              color: "error.main",
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
              className="ri-arrow-down-fill"
              style={{
                fontSize: "14px",
                flexShrink: "0",
                lineHeight: "0",
              }}
            ></i>
            3%
          </Box>
        </Typography>

        <Box
          sx={{
            position: "absolute",
            left: "0",
            right: "0",
            bottom: "-5px",
          }}
        >
          {isChartLoaded && (
            <Chart
              options={options}
              series={series}
              type="bar"
              height={100}
              width={"100%"}
            />
          )}
        </Box>
      </Card>
    </>
  );
};

export default PatientsLast7Days;
