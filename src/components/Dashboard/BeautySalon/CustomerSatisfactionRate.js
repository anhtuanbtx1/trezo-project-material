"use client";

import React, { useEffect, useState } from "react";
import {
  Card,
  Box,
  Typography,
} from "@mui/material";
import Chart from "react-apexcharts";

const CustomerSatisfactionRate = () => {
  // Chart
  const [isChartLoaded, setChartLoaded] = useState(false);

  useEffect(() => {
    setChartLoaded(true);
  }, []);

  const series = [85, 15];

  const options = {
    labels: ["Positive", "Negative"],
    colors: ["#9CAAFF", "#FFAA72"],
    dataLabels: {
      enabled: false,
      style: {
        fontSize: "10px",
        fontFamily: "Inter",
        colors: ["#fff"],
      },
      dropShadow: {
        enabled: true,
        top: 0,
        left: 0,
        blur: 0,
        color: "#000",
        opacity: 0,
      },
    },
    plotOptions: {
      pie: {
        expandOnClick: false,
      },
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return val + "%";
        },
      },
    },
    stroke: {
      width: 1,
      show: true,
      colors: ["#ffffff"],
    },
    legend: {
      position: "bottom",
      horizontalAlign: "center",
      fontWeight: 400,
      fontFamily: "Inter",
      fontSize: "12",
      offsetY: 0,
      labels: {
        colors: ["#64748B", "#64748B"],
      },
      itemMargin: {
        horizontal: 10,
        vertical: 5,
      },
      markers: {
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
        <Typography
          className="fs-14 d-block mb-2"
          sx={{
            fontSize: "14px",
            mb: "10px",
          }}
        >
          Customer Satisfaction Rate
        </Typography>

        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: "24px", md: "32px" },
            lineHeight: 1,
            fontWeight: 700,
          }}
        >
          88.5%
        </Typography>

        <Box sx={{ margin: "-6px 0 -11px 0" }}>
          {isChartLoaded && (
            <Chart
              options={options}
              series={series}
              type="pie"
              height={200}
              width={"100%"}
            />
          )}
        </Box>
      </Card>
    </>
  );
};

export default CustomerSatisfactionRate;
