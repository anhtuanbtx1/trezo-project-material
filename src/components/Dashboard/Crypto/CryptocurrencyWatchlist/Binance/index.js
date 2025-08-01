"use client";

import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { Box, Typography } from "@mui/material";

const Binance = () => {
  const [isChartLoaded, setChartLoaded] = useState(false);

  useEffect(() => {
    setChartLoaded(true);
  }, []);

  const series = [
    {
      name: "Price",
      data: [110, 120, 85, 170, 90, 130, 95, 140],
    },
  ];

  const options = {
    chart: {
      zoom: { enabled: false },
      toolbar: { show: false },
    },
    dataLabels: { enabled: false },
    stroke: { curve: "straight", width: 2 },
    colors: ["#37D80A"],
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.5,
        opacityTo: 0.9,
        stops: [0, 90, 100],
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
      tickAmount: 5,
      labels: {
        style: { colors: "#64748B", fontSize: "12px" },
        formatter: (val) => `$${val}K`,
      },
    },
    grid: { show: false },
    legend: {
      show: true,
      position: "top",
      horizontalAlign: "center",
      labels: { colors: "#64748B" },
      markers: { shape: "diamond" },
    },
  };

  return (
    <Box
      sx={{
        bgcolor: "#eeffe5",
        borderRadius: "5px",
        padding: "23px",
      }}
      className="watchlist-card"
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <img
          src="/images/watchlist/binance.svg"
          alt="binance"
          width={48}
          height={48}
          style={{ borderRadius: "100px" }}
        />
        <Box>
          <Typography
            component="span"
            className="text-black"
            sx={{
              display: "block",
              textTransform: "uppercase",
              fontWeight: "500",
            }}
          >
            Binance{" "}
            <Typography
              component="span"
              sx={{ fontWeight: "400" }}
              className="text-body"
            >
              (BNB)
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
            $250
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
              <i className="bx bx-trending-up" style={{ fontSize: "20px" }}></i>{" "}
              +1.5%
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
          $40B
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
          $1.8B
        </Box>
      </Box>
    </Box>
  );
};

export default Binance;
