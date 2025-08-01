"use client";

import React, { useEffect, useState } from "react";
import { Card, Box, Typography } from "@mui/material";
import Chart from "react-apexcharts";

const AssetAllocation = () => {
  // Chart
  const [isChartLoaded, setChartLoaded] = useState(false);

  useEffect(() => {
    setChartLoaded(true);
  }, []);

  const series = [30, 25, 20, 15, 10];

  const options = {
    labels: ["BTC 30%", "ETH 25%", "USDC 20%", "ADA 15%", "SHIB 10%"],
    colors: ["#605DFF", "#757DFF", "#9CAAFF", "#C2CDFF", "#DDE4FF"],
    legend: {
      show: true,
      fontSize: "12px",
      position: "bottom",
      horizontalAlign: "center",
      itemMargin: {
        horizontal: 8,
        vertical: 8,
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
    dataLabels: {
      enabled: false,
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
          <Box>
            <Typography
              variant="h3"
              sx={{
                fontSize: { xs: "16px", md: "18px" },
                fontWeight: 700,
              }}
              className="text-black"
            >
              Asset Allocation
            </Typography>
          </Box>

          <Box>
            <Typography>Last 30 days</Typography>
          </Box>
        </Box>

        <Typography sx={{ mb: "2px" }}>Total Value</Typography>

        <Typography variant="h5" sx={{ fontSize: "20px", fontWeight: 700 }}>
          $17,485
        </Typography>

        <Box
          sx={{
            mt: "-15px",
          }}
        >
          {isChartLoaded && (
            <Chart
              options={options}
              series={series}
              type="pie"
              height={210}
              width={"100%"}
            />
          )}
        </Box>
      </Card>
    </>
  );
};

export default AssetAllocation;
