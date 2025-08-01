"use client";

import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { Box, Typography, Card } from "@mui/material";

const NetProfit = () => {
  // Chart state
  const [isChartLoaded, setChartLoaded] = useState(false);

  useEffect(() => {
    setChartLoaded(true);
  }, []);

  const series = [
    {
      name: "Net Profit",
      data: [130, 200, 160, 80, 70, 120, 140],
    },
  ];

  const options = {
    chart: {
      toolbar: {
        show: false,
      },
    },
    colors: ["#37D80A"],
    plotOptions: {
      bar: {
        columnWidth: "15px",
        colors: {
          backgroundBarColors: ["#37D80A"],
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
        color: "#F6F7F9",
      },
      axisBorder: {
        show: true,
        color: "#F6F7F9",
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
      max: 200,
      min: 0,
      labels: {
        formatter: (val) => {
          return "$" + val;
        },
        style: {
          colors: "#64748B",
          fontSize: "12px",
        },
      },
      axisBorder: {
        show: false,
        color: "#F6F7F9",
      },
      axisTicks: {
        show: false,
        color: "#F6F7F9",
      },
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
            mb: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: "15px" }}>
            <Box>
              <Typography
                component={"span"}
                sx={{ display: "block", mb: "4px" }}
              >
                Net Profit
              </Typography>

              <Typography
                variant="h5"
                sx={{ mb: "0", fontSize: "20px", fontWeight: "700" }}
              >
                $42,458
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
              +7.6%
            </Box>
          </Box>

          <Box>
            <Typography>Last 7 days</Typography>
          </Box>
        </Box>

        <Box
          sx={{
            mt: "-25px",
            mb: "-25px",
            ml: "-15px",
            mr: "-15px",
          }}
        >
          {isChartLoaded && (
            <Chart
              options={options}
              series={series}
              type="bar"
              height={200}
              width={"100%"}
            />
          )}
        </Box>
      </Card>
    </>
  );
};

export default NetProfit;
