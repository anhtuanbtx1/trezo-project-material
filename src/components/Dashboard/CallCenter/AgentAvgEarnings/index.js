"use client";

import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { Card, Box, Typography, Button } from "@mui/material";
import CustomDropdown from "./CustomDropdown";

const AgentAvgEarnings = () => {
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
    colors: ["#9135E8"],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "stepline", //curve: ['straight', 'smooth', 'monotoneCubic', 'stepline']
      width: 3,
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
            Agent Avg. Earnings
          </Typography>

          <Box className="-mr-10">
            <CustomDropdown
              options={["This Day", "This Week", "This Month", "This Year"]} // Need to change the options also in CustomDropdown file
              onSelect={(value) => console.log(value)}
              defaultLabel="Today"
            />
          </Box>
        </Box>

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

        <Box sx={{ mb: "-3px" }}>
          {isChartLoaded && (
            <Chart
              options={options}
              series={series}
              type="area"
              height={275}
              width={"100%"}
            />
          )}
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: "30px" }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: "15px" }}>
            <Box
              className="border bg-gray-50"
              sx={{
                width: "48px",
                height: "48px",
                borderRadius: "5px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src="/images/icons/money.svg"
                alt="money"
                width={26}
                height={26}
              />
            </Box>

            <Box>
              <Typography
                variant="h5"
                sx={{ fontSize: "28px", lineHeight: "none", fontWeight: 600 }}
              >
                $2,534
              </Typography>
              <Typography>Last month earning</Typography>
            </Box>
          </Box>

          <Box
            className="text-black"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "5px",
              fontWeight: "500",
            }}
          >
            <i
              className="material-symbols-outlined text-success-600"
              style={{ fontSize: "20px" }}
            >
              trending_up
            </i>
            +8.7%
          </Box>
        </Box>
      </Card>
    </>
  );
};

export default AgentAvgEarnings;
