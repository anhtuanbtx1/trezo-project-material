"use client";

import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { Box, Typography } from "@mui/material";

const Ethereum = () => {
  const [isChartLoaded, setChartLoaded] = useState(false);

  useEffect(() => {
    setChartLoaded(true);
  }, []);

  const series = [
    {
      name: "Price",
      data: [90, 130, 140, 110, 120, 95, 85, 170],
    },
  ];

  const options = {
    chart: {
      zoom: { enabled: false },
      toolbar: { show: false },
    },
    dataLabels: { enabled: false },
    stroke: { curve: "straight", width: 2 },
    colors: ["#AD63F6"],
    fill: {
      type: "gradient",
      gradient: {
        stops: [0, 90, 100],
        shadeIntensity: 1,
        opacityFrom: 0.5,
        opacityTo: 0.9,
      },
    },
    xaxis: {
      categories: [
        "01 Jan",
        "02 Jan",
        "03 Jan",
        "04 Jan",
        "05 Jan",
        "06 Jan",
        "07 Jan",
        "08 Jan",
      ],
      axisTicks: { show: false },
      axisBorder: { show: false },
      labels: { show: false },
    },
    yaxis: {
      show: false,
      max: 170,
      min: 0,
      labels: {
        style: { colors: "#64748B", fontSize: "12px" },
        formatter: (val) => `$${val}K`,
      },
    },
    grid: { show: false },
    legend: {
      show: true,
      position: "top",
      labels: { colors: "#64748B" },
      markers: { shape: "diamond" },
    },
  };

  return (
    <Box
      sx={{
        bgcolor: "#faf5ff",
        borderRadius: "5px",
        padding: "23px",
      }}
      className="watchlist-card"
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <img
          src="/images/watchlist/ethereum.svg"
          alt="ethereum"
          width={48}
          height={48}
          style={{ borderRadius: "100px" }}
        />
        <Box>
          <Typography
            component="span"
            sx={{ textTransform: "uppercase", fontWeight: "500" }}
            className="text-black"
          >
            Ethereum{" "}
            <Typography
              component="span"
              sx={{ fontWeight: "400" }}
              className="text-body"
            >
              (ETH)
            </Typography>
          </Typography>
          <Typography
            component="h4"
            sx={{
              fontWeight: "600",
              fontSize: "20px",
              mt: "5px",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            $1,750
            <Typography
              component="span"
              sx={{
                color: "#1E8308",
                fontWeight: "500",
                fontSize: "14px",
                display: "flex",
                alignItems: "center",
                gap: "2px",
              }}
            >
              <i
                className="bx bx-trending-down"
                style={{ fontSize: "20px" }}
              ></i>
              -1.2%
            </Typography>
          </Typography>
        </Box>
      </Box>

      <Box sx={{ mt: "-20px", ml: "-11px", mb: "-20px" }}>
        {isChartLoaded && (
          <Chart
            options={options}
            series={series}
            type="area"
            height={120}
            width="100%"
          />
        )}
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box
          className="text-black"
          sx={{
            fontWeight: "600",
            fontSize: "12px",
          }}
        >
          <Typography
            component="span"
            sx={{
              display: "block",
              fontWeight: "500",
              fontSize: "12px",
              mb: "3px",
            }}
            className="text-body"
          >
            Market Cap:
          </Typography>
          $210B
        </Box>

        <Box
          className="text-black"
          sx={{
            fontWeight: "600",
            fontSize: "12px",
          }}
        >
          <Typography
            component="span"
            sx={{
              display: "block",
              fontWeight: "500",
              fontSize: "12px",
              mb: "3px",
            }}
            className="text-body"
          >
            Volume (24h):
          </Typography>
          $20B
        </Box>
      </Box>
    </Box>
  );
};

export default Ethereum;
