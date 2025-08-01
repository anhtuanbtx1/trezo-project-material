"use client";

import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { Card, Box, Typography, Button } from "@mui/material";

const EthereumRate = () => {
  // Chart
  const [isChartLoaded, setChartLoaded] = useState(false);

  useEffect(() => {
    setChartLoaded(true);
  }, []);

  const series = [
    {
      name: "Earnings",
      data: [20, 40, 60, 60, 50, 30, 40, 30, 40, 40, 60, 60],
    },
  ];

  const options = {
    chart: {
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },
    colors: ["#3584FC"],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "stepline", //curve: ['straight', 'smooth', 'monotoneCubic', 'stepline']
      width: 3,
      // lineCap: "10",
    },
    grid: {
      borderColor: "#ECF0FF",
      strokeDashArray: 10,
      xaxis: {
        lines: {
          show: false,
        },
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        stops: [0, 90, 100],
        shadeIntensity: 1,
        opacityFrom: 0,
        opacityTo: 0.8,
      },
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
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
      tickAmount: 4,
      show: false,
      max: 80,
      min: 0,
      labels: {
        formatter: (val) => {
          return "$" + val + "K";
        },
        style: {
          colors: "#64748B",
          fontSize: "12px",
        },
      },
      axisBorder: {
        show: false,
        color: "#ECEEF2",
      },
      axisTicks: {
        show: false,
        color: "#ECEEF2",
      },
    },
    legend: {
      show: false,
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
        shape: "circle",
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
        <Typography component="span" sx={{ display: "block", mb: "7px" }}>
          Ethereum Rate
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <Typography
            component="h3"
            sx={{
              lineHeight: "none",
              fontSize: { xs: "24px", md: "28px", lg: "32px" },
              mb: "0",
              fontWeight: "700",
            }}
          >
            $1,528
          </Typography>

          <Typography
            component="span"
            sx={{
              display: "inline-block",
              fontSize: "12px",
              px: "9px",
              color: "success.700",
              border: "1px solid",
              borderColor: "success.300",
              bgcolor: "success.100",
              borderRadius: "100px",
            }}
          >
            +5.4%
          </Typography>
        </Box>

        <Typography
          component="span"
          sx={{ display: "block", fontSize: "12px", mt: "9px" }}
        >
          vs previous 30 days
        </Typography>

        <Box
          sx={{
            mt: { xs: "20px", md: "25px" },
            display: "flex",
            alignItems: "center",
            gap: "30px",
          }}
        >
          <Button
            type="button"
            className="text-body"
            sx={{
              bgcolor: "primary.main",
              color: "#fff !important",
              display: "inline-block",
              borderRadius: "4px",
              width: "34px",
              height: "28px",
              border: "none",
              padding: "0",
              minWidth: "auto",

              "&:hover": {
                bgcolor: "primary.main",
                color: "#fff !important",
              },
            }}
          >
            1d
          </Button>

          <Button
            type="button"
            className="text-body"
            sx={{
              display: "inline-block",
              borderRadius: "4px",
              width: "34px",
              height: "28px",
              border: "none",
              padding: "0",
              minWidth: "auto",

              "&:hover": {
                bgcolor: "primary.main",
                color: "#fff !important",
              },
            }}
          >
            15d
          </Button>

          <Button
            type="button"
            className="text-body"
            sx={{
              display: "inline-block",
              borderRadius: "4px",
              width: "34px",
              height: "28px",
              border: "none",
              padding: "0",
              minWidth: "auto",

              "&:hover": {
                bgcolor: "primary.main",
                color: "#fff !important",
              },
            }}
          >
            1m
          </Button>

          <Button
            type="button"
            className="text-body"
            sx={{
              display: "inline-block",
              borderRadius: "4px",
              width: "34px",
              height: "28px",
              border: "none",
              padding: "0",
              minWidth: "auto",

              "&:hover": {
                bgcolor: "primary.main",
                color: "#fff !important",
              },
            }}
          >
            6m
          </Button>

          <Button
            type="button"
            className="text-body"
            sx={{
              display: "inline-block",
              borderRadius: "4px",
              width: "34px",
              height: "28px",
              border: "none",
              padding: "0",
              minWidth: "auto",

              "&:hover": {
                bgcolor: "primary.main",
                color: "#fff !important",
              },
            }}
          >
            1y
          </Button>
        </Box>

        <Box>
          {isChartLoaded && (
            <Chart
              options={options}
              series={series}
              type="area"
              height={221}
              width={"100%"}
            />
          )}
        </Box>

        <Box>
          <Box
            className="lcbpm-none"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              mb: "18px",
            }}
          >
            <Typography
              sx={{ display: "block", fontSize: "12px", fontWeight: "600" }}
            >
              11:30 AM
            </Typography>

            <Typography
              className="text-black"
              sx={{
                display: "block",
                fontSize: "12px",
                fontWeight: "600",
              }}
            >
              $3,605.08
            </Typography>

            <Typography
              sx={{
                display: "block",
                fontSize: "12px",
                fontWeight: "600",
                color: "success.700",
              }}
            >
              +5.4%
            </Typography>
          </Box>

          <Box
            className="lcbpm-none"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              mb: "18px",
            }}
          >
            <Typography
              sx={{ display: "block", fontSize: "12px", fontWeight: "600" }}
            >
              01:20 PM
            </Typography>
            <Typography
              className="text-black"
              sx={{
                display: "block",
                fontSize: "12px",
                fontWeight: "600",
              }}
            >
              $3,615.50
            </Typography>
            <Typography
              sx={{
                display: "block",
                fontSize: "12px",
                fontWeight: "600",
                color: "error.main",
              }}
            >
              -3.21%
            </Typography>
          </Box>

          <Box
            className="lcbpm-none"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              mb: "18px",
            }}
          >
            <Typography
              sx={{ display: "block", fontSize: "12px", fontWeight: "600" }}
            >
              03:33 AM
            </Typography>
            <Typography
              className="text-black"
              sx={{
                display: "block",
                fontSize: "12px",
                fontWeight: "600",
              }}
            >
              $3,831.13
            </Typography>
            <Typography
              sx={{
                display: "block",
                fontSize: "12px",
                fontWeight: "600",
                color: "success.700",
              }}
            >
              +7.32%
            </Typography>
          </Box>
        </Box>
      </Card>
    </>
  );
};

export default EthereumRate;
