"use client";

import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { Card, Box, Typography } from "@mui/material";

const TradingVolume = () => {
  // Chart state
  const [isChartLoaded, setChartLoaded] = useState(false);

  useEffect(() => {
    setChartLoaded(true);
  }, []);

  const series = [
    {
      name: "Volume",
      data: [130, 200, 160, 80, 70, 120, 140],
    },
  ];

  const options = {
    chart: {
      toolbar: {
        show: false,
      },
    },
    colors: ["#757DFF"],
    plotOptions: {
      bar: {
        columnWidth: "15px",
        colors: {
          backgroundBarColors: ["#DDE4FF"],
          backgroundBarOpacity: 0.2,
        },
      },
    },
    grid: {
      show: true,
      borderColor: "#F6F7F9",
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
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
      tickAmount: 4,
      max: 200,
      min: 0,
      labels: {
        formatter: (val) => {
          return "$" + val;
        },
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
    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return "$" + val + "k";
        },
      },
    },
    legend: {
      show: true,
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
        size: 6,
        offsetX: -2,
        offsetY: -0.5,
        shape: "square",
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
            gap: "10px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "15px",
            }}
          >
            <Box>
              <Typography mb={"5px"}>Trading Volume</Typography>
              <Typography
                variant="h3"
                sx={{
                  fontSize: { xs: "16px", md: "20px" },
                  fontWeight: 700,
                }}
              >
                $117,950
              </Typography>
            </Box>
            <Box
              sx={{
                border: "1px solid",
                borderRadius: "30px",
                backgroundColor: "success.100",
                color: "success.700",
                borderColor: "success.300",
                lineHeight: 1,
                fontSize: "12px",
                display: "inline-block",
                fontWeight: 500,
                p: "3.5px 9px",
                textTransform: "capitalize",
              }}
            >
              +7.6%
            </Box>
          </Box>

          <Box>
            <Typography>Last 7 days</Typography>
          </Box>
        </Box>

        <Box sx={{ mb: "-25px" }}>
          {isChartLoaded && (
            <Chart
              options={options}
              series={series}
              type="bar"
              height={195}
              width={"100%"}
            />
          )}
        </Box>
      </Card>
    </>
  );
};

export default TradingVolume;
