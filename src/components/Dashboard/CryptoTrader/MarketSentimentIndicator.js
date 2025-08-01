"use client";

import React, { useEffect, useState } from "react";
import { Card, Box, Typography } from "@mui/material";
import Chart from "react-apexcharts";

const MarketSentimentIndicator = () => {
  // Chart
  const [isChartLoaded, setChartLoaded] = useState(false);

  useEffect(() => {
    setChartLoaded(true);
  }, []);

  const series = [100];

  const options = {
    plotOptions: {
      radialBar: {
        startAngle: -90,
        endAngle: 90,
        track: {
          background: "#ffffff",
          strokeWidth: "100%",
        },
        dataLabels: {
          show: false,
        },
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        type: "horizontal",
        gradientToColors: ["#FF3D00"],
        stops: [0, 50, 100],
        colorStops: [
          { offset: 0, color: "#00C851", opacity: 1 }, // Extreme Greed (Green)
          { offset: 25, color: "#8BC34A", opacity: 1 }, // Greed (Light Green)
          { offset: 50, color: "#FFC107", opacity: 1 }, // Neutral (Yellow)
          { offset: 75, color: "#FF9800", opacity: 1 }, // Fear (Orange)
          { offset: 100, color: "#FF3D00", opacity: 1 }, // Extreme Fear (Red)
        ],
      },
    },
    stroke: {
      lineCap: "round",
    },
    labels: ["Market Sentiment"],
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
            mb: "15px",
          }}
        >
          Market Sentiment Indicator
        </Typography>

        <Box
          sx={{
            mt: "-30px",
          }}
        >
          {isChartLoaded && (
            <Chart
              options={options}
              series={series}
              type="radialBar"
              height={323}
              width={"100%"}
            />
          )}
        </Box>

        <Box
          sx={{
            gap: "13px",
            maxWidth: "315px",
            mt: "-15px",
            mx: "auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            fontSize: "12px",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
            <span>🟢</span>
            Extreme Greed
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
            <span>🟢</span>
            Greed
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
            <span>🟡</span>
            Neutral
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
            <span>🟠</span>
            Fear
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
            <span>🔴</span>
            Extreme Fear
          </Box>
        </Box>
      </Card>
    </>
  );
};

export default MarketSentimentIndicator;
