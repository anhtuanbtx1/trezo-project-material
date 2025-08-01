"use client";

import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { Box, Typography, Card } from "@mui/material";
import CustomDropdown from "./CustomDropdown";

const OrderSummary  = () => {
  // Chart
  const [isChartLoaded, setChartLoaded] = useState(false);

  useEffect(() => {
    setChartLoaded(true);
  }, []);

  const series = [10, 30, 45];

  const options = {
    labels: ["Served", "Processing", "Cancelled"],
    colors: ["#5DA8FF", "#FE7A36", "#BF85FB"],
    stroke: {
      width: 5,
      show: true,
      colors: ["#ffffff"],
    },
    dataLabels: {
      enabled: false,
    },
    plotOptions: {
      pie: {
        expandOnClick: false,
        donut: {
          labels: {
            show: true,
            name: {
              color: "#64748B",
            },
            value: {
              show: true,
              color: "#3A4252",
              fontSize: "28px",
              fontWeight: "600",
              formatter: (val) => {
                const total = series.reduce((a, b) => a + b, 0);
                const percentage = ((Number(val) / total) * 100).toFixed(1); // Calculate percentage
                return `${val}k (${percentage}%)`; // Show value in currency + percentage
              }
            },
            total: {
              show: true,
              color: "#64748B",
              formatter: (w) => {
                return `${w.globals.seriesTotals.reduce(
                  (a, b) => a + b,
                  0
                )}k`; // Show total in currency
              },
            },
          },
        },
      },
    },
    legend: {
      show: true,
      fontSize: "12px",
      position: "bottom",
      horizontalAlign: "center",
      itemMargin: {
        horizontal: 8,
        vertical: 2,
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
    tooltip: {
      y: {
        formatter: function (val) {
          return val + "k";
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
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mb: "25px",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: "16px", md: "18px" },
              fontWeight: 700,
            }}
            className="text-black"
          >
            Order Summary
          </Typography>

          <Box>
            <CustomDropdown
              options={["Weekly", "Monthly", "Yearly"]} // Need to change the options also in CustomDropdown file
              onSelect={(value) => console.log(value)}
              defaultLabel="Weekly"
            />
          </Box>
        </Box>

        {isChartLoaded && (
          <Chart
            options={options}
            series={series}
            type="donut"
            height={320}
            width={"100%"}
          />
        )}
      </Card>
    </>
  );
};

export default OrderSummary;
