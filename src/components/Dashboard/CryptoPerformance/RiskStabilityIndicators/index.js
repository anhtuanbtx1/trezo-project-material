"use client";

import { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import { Box, Typography, Card } from "@mui/material";

const RiskStabilityIndicators = () => {
  // Chart state
  const [isChartLoaded, setChartLoaded] = useState(false);

  useEffect(() => {
    setChartLoaded(true);
  }, []);

  const series = [
    {
      name: "Liquidity",
      data: [60, 80, 100, 120, 140, 150],
    },
    {
      name: "Volatility",
      data: [180, 160, 80, 140, 100, 80],
    },
    {
      name: "Operational",
      data: [100, 130, 140, 60, 40, 20],
    },
  ];

  const options = {
    chart: {
      toolbar: {
        show: false,
      },
    },
    xaxis: {
      labels: {
        show: false,
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        stops: [0, 90, 100],
        shadeIntensity: 1,
        opacityFrom: 0,
        opacityTo: 0.4,
      },
    },
    colors: ["#AD63F6", "#605DFF", "#37D80A"],
    yaxis: {
      show: true,
      tickAmount: 4,
    },
    legend: {
      show: true,
      fontSize: "12px",
      position: "bottom",
      horizontalAlign: "center",
      itemMargin: {
        horizontal: 8,
        vertical: 6,
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
      customLegendItems: ["Liquidity 50%", "Volatility 20%", "Operational 30%"],
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
            mb: "25px",
          }}
          className="text-black"
        >
          Risk & Stability Indicators
        </Typography>

        <Box>
          {isChartLoaded && (
            <Chart
              options={options}
              series={series}
              type="radar"
              height={355}
              width={"100%"}
            />
          )}
        </Box>
      </Card>
    </>
  );
};

export default RiskStabilityIndicators;
