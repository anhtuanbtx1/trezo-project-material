"use client";

import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { Box, Typography, Card } from "@mui/material";

const ExpenseBreakdown = () => {
  // Chart
  const [isChartLoaded, setChartLoaded] = useState(false);

  useEffect(() => {
    setChartLoaded(true);
  }, []);

  const series = [30, 25, 20, 25];

  const options = {
    labels: ["Sales", "Salaries", "Miscellaneous", "Marketing"],
    colors: ["#AD63F6", "#BF85FB", "#D7B5FD", "#E9D5FF"],
    legend: {
      show: true,
      position: "bottom",
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
        size: 6,
        offsetX: -2,
        offsetY: -0.5,
        shape: "square",
      },
    },
    dataLabels: {
      enabled: true,
      style: {
        fontSize: "12px",
      },
      dropShadow: {
        enabled: false,
      },
    },
    stroke: {
      width: 0,
    },
    tooltip: {
      enabled: true,
      y: {
        formatter: function (val) {
          return val + "%";
        },
      },
    },
    plotOptions: {
      pie: {
        dataLabels: {
          offset: -5,
        },
        expandOnClick: true,
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
            Expense Breakdown
          </Typography>
        </Box>

        <Box
          sx={{
            mt: "-10px",
          }}
          className="eb-chart"
        >
          {isChartLoaded && (
            <Chart
              options={options}
              series={series}
              type="pie"
              height={230}
              width={"100%"}
            />
          )}
        </Box>
      </Card>
    </>
  );
};

export default ExpenseBreakdown;
