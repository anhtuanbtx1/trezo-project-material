"use client";

import React, { useEffect, useState } from "react";
import { Card, Box, Typography, Button } from "@mui/material";
import Chart from "react-apexcharts";

const PriceMovement = () => {
  // Chart state
  const [isChartLoaded, setChartLoaded] = useState(false);

  useEffect(() => {
    setChartLoaded(true);
  }, []);

  const series = [
    {
      name: "Price",
      data: [
        { x: new Date(2016, 1, 1), y: [51.98, 56.29, 51.59, 53.85] },
        { x: new Date(2016, 2, 1), y: [53.66, 54.99, 51.35, 52.95] },
        { x: new Date(2016, 3, 1), y: [52.96, 53.78, 51.54, 52.48] },
        { x: new Date(2016, 4, 1), y: [52.54, 52.79, 47.88, 49.24] },
        { x: new Date(2016, 5, 1), y: [49.1, 52.86, 47.7, 52.78] },
        { x: new Date(2016, 6, 1), y: [52.83, 53.48, 50.32, 52.29] },
        { x: new Date(2016, 7, 1), y: [52.2, 54.48, 51.64, 52.58] },
        { x: new Date(2016, 8, 1), y: [52.76, 57.35, 52.15, 57.03] },
        { x: new Date(2016, 9, 1), y: [57.04, 58.15, 48.88, 56.19] },
        { x: new Date(2016, 10, 1), y: [56.09, 58.85, 55.48, 58.79] },
        { x: new Date(2016, 11, 1), y: [58.78, 59.65, 58.23, 59.05] },
        { x: new Date(2017, 0, 1), y: [59.37, 61.11, 59.35, 60.34] },
        { x: new Date(2017, 1, 1), y: [60.4, 60.52, 56.71, 56.93] },
        { x: new Date(2017, 2, 1), y: [57.02, 59.71, 56.04, 56.82] },
        { x: new Date(2017, 3, 1), y: [66.97, 69.62, 54.77, 59.3] },
        { x: new Date(2017, 4, 1), y: [59.11, 62.29, 59.1, 59.85] },
        { x: new Date(2017, 5, 1), y: [59.97, 60.11, 55.66, 58.42] },
        { x: new Date(2017, 6, 1), y: [58.34, 60.93, 56.75, 57.42] },
        { x: new Date(2017, 7, 1), y: [57.76, 58.08, 51.18, 54.71] },
        { x: new Date(2017, 8, 1), y: [64.8, 71.42, 53.18, 57.35] },
        { x: new Date(2017, 9, 1), y: [57.56, 63.09, 57.0, 62.99] },
        { x: new Date(2017, 10, 1), y: [62.89, 63.42, 59.72, 61.76] },
        { x: new Date(2017, 11, 1), y: [61.71, 64.15, 61.29, 63.04] },
      ],
    },
  ];

  const options = {
    chart: {
      toolbar: { show: false },
      zoom: { enabled: false },
    },
    plotOptions: {
      candlestick: {
        colors: {
          upward: "#37D80A",
          downward: "#FF4023",
        },
        wick: { useFillColor: true },
      },
    },
    fill: { opacity: 1 },
    xaxis: {
      type: "datetime",
      axisTicks: { show: true, color: "#64748B" },
      axisBorder: { show: true, color: "#64748B" },
      labels: {
        style: { colors: "#3A4252", fontSize: "12px", fontFamily: "Inter" },
      },
    },
    yaxis: {
      tooltip: { enabled: true },
      labels: {
        style: { colors: "#3A4252", fontSize: "12px", fontFamily: "Inter" },
      },
      axisBorder: { show: false },
      axisTicks: { show: false },
    },
    grid: {
      show: true,
      borderColor: "#F6F7F9",
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
            mb: "15px",
            gap: "10px",
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
              Price Movement
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "5px",
            }}
          >
            <Button
              className="border"
              variant="outlined"
              sx={{
                padding: "0px",
                minWidth: "40px",
                height: "30px",
                borderRadius: "5px",
                backgroundColor: "primary.main",
                color: "#fff !important",
              }}
            >
              1h
            </Button>

            <Button
              className="border text-body"
              variant="outlined"
              sx={{
                padding: "0px",
                minWidth: "40px",
                height: "30px",
                borderRadius: "5px",
              }}
            >
              1d
            </Button>

            <Button
              className="border text-body"
              variant="outlined"
              sx={{
                padding: "0px",
                minWidth: "40px",
                height: "30px",
                borderRadius: "5px",
              }}
            >
              1w
            </Button>

            <Button
              className="border text-body"
              variant="outlined"
              sx={{
                padding: "0px",
                minWidth: "40px",
                height: "30px",
                borderRadius: "5px",
              }}
            >
              1m
            </Button>
          </Box>
        </Box>

        <Box
          sx={{
            mt: "-18px",
            mb: "-15px",
          }}
        >
          {isChartLoaded && (
            <Chart
              options={options}
              series={series}
              type="candlestick"
              height={515}
              width={"100%"}
            />
          )}
        </Box>
      </Card>
    </>
  );
};

export default PriceMovement;
