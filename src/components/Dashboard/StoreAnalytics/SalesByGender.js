"use client";

import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { Card, Box, Typography } from "@mui/material"; 

const SalesByGender = () => {
  // Chart
  const [isChartLoaded, setChartLoaded] = useState(false);

  useEffect(() => {
    setChartLoaded(true);
  }, []);

  const series = [70, 30];

  const options = {
    labels: ["Male", "Female"],
    colors: ["#605DFF", "#AD63F6"],
    stroke: {
      width: 5,
      show: true,
      colors: ["#ffffff"],
      lineCap: "round",
    },
    legend: {
      show: true,
      position: "right",
      fontSize: "12px",
      horizontalAlign: "center",
      fontFamily: "Inter",
      fontWeight: 400,
      offsetY: 10,
      itemMargin: {
        horizontal: 0,
        vertical: 5,
      },
      labels: {
        colors: "#64748B",
      },
      markers: {
        offsetX: -2,
        offsetY: -0.5,
        shape: "diamond",
      },
    },
    plotOptions: {
      pie: {
        expandOnClick: false,
        donut: {
          size: "60%",
          labels: {
            show: false,
            name: {
              color: "#64748B",
            },
            value: {
              show: false,
              color: "#000",
              fontSize: "36px",
              fontWeight: "700",
              offsetY: 10,
              formatter: (val) => {
                return "" + val / 1 + "%";
              },
            },
            total: {
              show: false,
              color: "#64748B",
              fontSize: "14px",
              fontWeight: "400",
            },
          },
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    tooltip: {
      enabled: true,
      y: {
        formatter: (val) => {
          return "" + val / 1 + "%";
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
        <Typography
          variant="h3"
          sx={{
            fontSize: { xs: "16px", md: "18px" },
            fontWeight: 700,
            mb: "22px",
          }}
          className="text-black"
        >
          Sales By Gender
        </Typography>

        <Box>
          {isChartLoaded && (
            <Chart
              options={options}
              series={series}
              type="donut"
              height={110}
              width={"100%"}
            />
          )}
        </Box>
      </Card>
    </>
  );
};

export default SalesByGender;
