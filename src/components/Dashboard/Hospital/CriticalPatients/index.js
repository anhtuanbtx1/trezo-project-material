"use client";

import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { Card, Box, Typography } from "@mui/material";

const CriticalPatients = () => {
  const [isChartLoaded, setChartLoaded] = useState(false);

  useEffect(() => {
    setChartLoaded(true);
  }, []);

  const series = [
    {
      name: "Orthopedics",
      data: [
        10, 15, 21, 25, 19, 15, 25, 20, 20, 15, 21, 25, 17, 18, 15, 20, 15, 20,
        18, 13,
      ],
    },
    {
      name: "Cardiology",
      data: [3, 7, 7, 10, 9, 7, 15, 3, 7, 7, 10, 9, 7, 13, 3, 7, 7, 10, 9, 7],
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
    colors: ["#FD5812", "#796DF6"],
    dataLabels: {
      enabled: false,
    },
    grid: {
      show: false,
      borderColor: "#ECEEF2",
    },
    stroke: {
      curve: "straight",
      width: 2,
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
      // tickAmount: 6,
      show: false,
      max: 25,
      min: 0,
      labels: {
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
          position: "relative",
          boxShadow: "none",
          borderRadius: "7px",
          mb: "25px",
          padding: { xs: "18px", sm: "20px", lg: "25px" },
        }}
        className="rmui-card"
      >
        <Box>
          <Typography component="span">Critical Patients</Typography>

          <Typography
            variant="h5"
            sx={{
              fontSize: 20,
              fontWeight: 700,
              mt: "2px !important",
            }}
            className="text-black"
          >
            780
          </Typography>
        </Box>

        <div
          style={{
            position: "absolute",
            top: "100px",
            left: "10px",
            right: "10px",
          }}
        >
          {isChartLoaded && (
            <Chart
              options={options}
              series={series}
              type="area"
              height={120}
              width={"100%"}
            />
          )}
        </div>

        <Box
          sx={{
            mt: "164px",
          }}
        >
          <Box
            sx={{
              mt: "4px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <Box
                sx={{
                  bgcolor: "#605dff",
                  width: "12px",
                  height: "2px",
                }}
              ></Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                }}
              >
                <Typography sx={{ fontSize: "13px" }}>Cardiology:</Typography>
                <Typography
                  sx={{ fontSize: "13px", fontWeight: "600" }}
                  className="text-black"
                >
                  280
                </Typography>
              </Box>
            </Box>
          </Box>

          <Box
            sx={{
              mt: "4px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <Box
                sx={{
                  bgcolor: "#c2cdff",
                  width: "12px",
                  height: "2px",
                }}
              ></Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                }}
              >
                <Typography sx={{ fontSize: "13px" }}>Orthopedics:</Typography>
                <Typography
                  sx={{ fontSize: "13px", fontWeight: "600" }}
                  className="text-black"
                >
                  600
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Card>
    </>
  );
};

export default CriticalPatients;
