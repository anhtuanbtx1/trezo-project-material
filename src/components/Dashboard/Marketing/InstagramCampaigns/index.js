"use client";

import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { Card, Box, Typography } from "@mui/material";

const InstagramCampaigns = () => {
  // State for chart loading status
  const [isChartLoaded, setChartLoaded] = useState(false);

  useEffect(() => {
    setChartLoaded(true);
  }, []);

  // Chart data series
  const series = [
    {
      name: "Budget",
      data: [80, 200, 90, 220, 110, 220, 85],
    },
    {
      name: "Followers",
      data: [20, 120, 155, 90, 165, 100, 120],
    },
  ];

  // Chart options
  const options = {
    chart: {
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: 2,
    },
    colors: ["#AD63F6", "#FF6D57"],
    fill: {
      type: "gradient",
      gradient: {
        stops: [0, 90, 100],
        shadeIntensity: 1,
        opacityFrom: 0.5,
        opacityTo: 0.5,
      },
    },
    xaxis: {
      categories: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      axisTicks: {
        show: false,
        color: "#ECEEF2",
      },
      axisBorder: {
        show: false,
        color: "#ECEEF2",
      },
      labels: {
        show: false,
        style: {
          colors: "#8695AA",
          fontSize: "12px",
        },
      },
    },
    yaxis: {
      show: false,
      max: 250,
      labels: {
        style: {
          colors: "#64748B",
          fontSize: "12px",
        },
      },
      axisBorder: {
        show: true,
        color: "#ECEEF2",
      },
      axisTicks: {
        show: true,
        color: "#ECEEF2",
      },
    },
    grid: {
      show: false,
      borderColor: "#ECEEF2",
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
        size: 6,
        offsetX: -2,
        offsetY: -0.5,
        shape: "circle",
      },
    },
    tooltip: {
      y: {
        formatter: (value, { seriesIndex }) => {
          if (seriesIndex === 0) {
            return `$${value}`;
          }
          return `${value}`;
        },
      },
    },
  };

  return (
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
          mb: "25px",
          gap: "10px",
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
          Instagram Campaigns
        </Typography>

        <Typography
          component="span"
          className="bg-orange-100 text-orange-600"
          sx={{
            px: "8px",
            py: "3px",
            display: "inline-block",
            borderRadius: "6px",
            fontWeight: "500",
            fontSize: "12px",
          }}
        >
          Live Now
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "25px",
        }}
      >
        <Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "5px",
              mb: "5px",
            }}
          >
            <Typography
              component="div"
              className="bg-purple-500"
              sx={{
                display: "block",
                width: "10px",
                height: "10px",
                borderRadius: "100%",
              }}
            ></Typography>
            <Typography component="div" sx={{ fontSize: "12px" }}>
              Campaign Budget
            </Typography>
          </Box>
          <Typography
            component="h3"
            sx={{
              mb: "0",
              lineHeight: "1",
              fontSize: "20px",
              fontWeight: "700",
            }}
          >
            $3200
          </Typography>
        </Box>
        <Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "5px",
              mb: "5px",
            }}
          >
            <Typography
              className="bg-orange-400"
              sx={{
                display: "block",
                width: "10px",
                height: "10px",
                borderRadius: "100%",
              }}
            ></Typography>
            <Typography component="div" sx={{ fontSize: "12px" }}>
              Followers Goal
            </Typography>
          </Box>
          <Typography
            component="h3"
            sx={{
              mb: "0",
              lineHeight: "1",
              fontSize: "20px",
              fontWeight: "700",
            }}
          >
            140,000
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          height: "76px",
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            left: "0",
            right: "0",
            bottom: "-55px",
            marginLeft: "-37px",
            marginRight: "-35px",
          }}
        >
          {isChartLoaded && (
            <Chart
              options={options}
              series={series}
              type="area"
              height={140}
              width={"100%"}
            />
          )}
        </Box>
      </Box>
    </Card>
  );
};

export default InstagramCampaigns;
