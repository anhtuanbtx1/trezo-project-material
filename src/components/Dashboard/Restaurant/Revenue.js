"use client";

import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { Box, Typography, Card } from "@mui/material";

const Revenue = () => {
  // Chart
  const [isChartLoaded, setChartLoaded] = useState(false);

  useEffect(() => {
    setChartLoaded(true);
  }, []);

  const series = [80, 20];

  const options = {
    labels: ["Revenue", "Revenue"],
    colors: ["#58F229", "#D8FFC8"],
    tooltip: {
      y: {
        formatter: function (val) {
          return "$" + val + "M";
        },
      },
    },
    stroke: {
      width: 0,
    },
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
          }}
        >
          <Box>
            <Typography mb={"3px"}>Revenue</Typography>

            <Typography
              variant="h3"
              sx={{
                fontWeight: 700,
                fontSize: { xs: "24px", md: "32px" },
                letterSpacing: "-0.01em",
                mb: "5px",
              }}
            >
              $3M
            </Typography>

            <Box
              sx={{
                background: "#D8FFC8",
                color: "success.main",
                borderRadius: "30px",
                display: "inline-block",
                fontSize: "12px",
                fontWeight: 500,
                padding: "4px 7px",
                lineHeight: 1,
                mb: "5px",
              }}
            >
              +3.4%
            </Box>

            <Typography sx={{ fontSize: "12px" }}>
              vs previous 30 days
            </Typography>
          </Box>

          <Box sx={{ width: "90px" }}>
            {isChartLoaded && (
              <Chart
                options={options}
                series={series}
                type="donut"
                height={90}
                width={"100%"}
              />
            )}
          </Box>
        </Box>
      </Card>
    </>
  );
};

export default Revenue;
