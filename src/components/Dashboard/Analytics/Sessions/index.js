"use client";

import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { Card, Box, Typography } from "@mui/material";

const Sessions = () => {
  const [isChartLoaded, setChartLoaded] = useState(false);

  useEffect(() => {
    setChartLoaded(true);
  }, []);

  const series = [
    {
      name: "Clicks",
      data: [
        100, 130, 115, 170, 110, 120, 85, 140, 150, 100, 110, 90, 160, 125, 105,
        130, 145, 120, 150, 155, 220, 165,
      ],
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
    colors: ["#9135E8"],
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
        "09 Jan",
        "10 Jan",
        "11 Jan",
        "12 Jan",
        "13 Jan",
        "14 Jan",
        "15 Jan",
        "16 Jan",
        "17 Jan",
        "18 Jan",
        "19 Jan",
        "20 Jan",
        "21 Jan",
        "22 Jan",
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
      max: 250,
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
        shape: 'diamond',
        offsetX: -2,
        offsetY: -0.5,
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
            justifyContent: "space-between",
            position: "relative",
            alignItems: "center",
          }}
        >
          <Box>
            <Typography component="span" sx={{ mb: "3px", display: "block" }}>
              Sessions
            </Typography>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  fontSize: { xs: "18px", lg: "20px" },
                  fontWeight: 700,
                }}
                className="text-black"
              >
                3,800
              </Typography>

              <Box 
                sx={{
                  bgcolor: "#d8ffc8",
                  color: "success.main",
                  borderRadius: "2px",
                  fontSize: "10px",
                  padding: "1.5px 7px",
                  fontWeight: "500",
                  display: "flex",
                  alignItems: "center",
                  gap: "2px",
                }}
              >
                <i
                  className="ri-arrow-up-s-fill"
                  style={{
                    fontSize: "20px",
                    flexShrink: "0",
                    lineHeight: "0",
                  }}
                ></i>
                17.8%
              </Box>
            </Box>

            <Typography
              component="span"
              sx={{ fontSize: "12px", display: "block", mt: "22px" }}
            >
              Last 30 days
            </Typography>
          </Box>

          <Box
            sx={{
              position: "absolute",
              top: "50%",
              transform: "translateY(-50%)",
              right: "-9px",
              maxWidth: "160px",
            }}
            className="crm-rg"
          >
            {isChartLoaded && (
              <Chart
                options={options}
                series={series}
                type="area"
                height={150}
                width={"100%"}
              />
            )}
          </Box>
        </Box>
      </Card>
    </>
  );
};

export default Sessions;
