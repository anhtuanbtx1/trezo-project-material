"use client";

import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { Card, Box, Typography } from "@mui/material";

const ActiveUser = () => {
  // Chart
  const [isChartLoaded, setChartLoaded] = useState(false);

  useEffect(() => {
    setChartLoaded(true);
  }, []);

  const series = [60, 40, 50];

  const options = {
    labels: ["Online User", "Offline User", "None"],
    colors: ["#757DFF", "#58F229", "#5DA8FF"],
    legend: {
      show: false,
      position: "top",
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
        shape: "circle",
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
            position: "relative",
          }}
        >
          <Typography sx={{ display: "block", mb: "5px" }}>
            Active User
          </Typography>

          <Typography
            component="h3"
            sx={{
              fontSize: { xs: "20px", md: "28px", lg: "24px" },
              mb: "8px",
              fontWeight: 700,
              lineHeight: "1",
            }}
          >
            241K
          </Typography>

          <Box
            sx={{
              bgcolor: "success.100",
              color: "success.700",
              border: "1px solid",
              borderColor: "success.300",
              borderRadius: "100px",
              fontSize: "12px",
              padding: "3px 9px",
              display: "inline-block",
              lineHeight: "1",
            }}
          >
            +5.4%
          </Box>

          <Box
            sx={{
              position: "absolute",
              mt: "5px",
              top: "50%",
              transform: "translateY(-50%)",
            }}
            className="po-right-0"
          >
            {isChartLoaded && (
              <Chart
                options={options}
                series={series}
                type="donut"
                height={90}
                width={90}
              />
            )}
          </Box>
        </Box>
      </Card>
    </>
  );
};

export default ActiveUser;
