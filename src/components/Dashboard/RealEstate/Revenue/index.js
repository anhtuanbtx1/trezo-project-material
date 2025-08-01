"use client";

import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { Box, Typography, Card } from "@mui/material";

const Revenue = () => {
  // Chart state
  const [isChartLoaded, setChartLoaded] = useState(false);

  useEffect(() => {
    setChartLoaded(true);
  }, []);

  const series = [
    {
      name: "Income",
      data: [
        {
          x: "2019",
          y: 1292,
          goals: [
            {
              name: "Expenses",
              value: 1400,
              strokeHeight: 5,
              strokeColor: "#FFCEA9",
            },
          ],
        },
        {
          x: "2018",
          y: 4432,
          goals: [
            {
              name: "Expenses",
              value: 5400,
              strokeHeight: 5,
              strokeColor: "#FFCEA9",
            },
          ],
        },
        {
          x: "2020",
          y: 5423,
          goals: [
            {
              name: "Expenses",
              value: 5200,
              strokeHeight: 5,
              strokeColor: "#FFCEA9",
            },
          ],
        },
        {
          x: "2021",
          y: 6653,
          goals: [
            {
              name: "Expenses",
              value: 6500,
              strokeHeight: 5,
              strokeColor: "#FFCEA9",
            },
          ],
        },
        {
          x: "2022",
          y: 8133,
          goals: [
            {
              name: "Expenses",
              value: 6600,
              strokeHeight: 13,
              strokeWidth: 0,
              strokeLineCap: "round",
              strokeColor: "#FFCEA9",
            },
          ],
        },
        {
          x: "2023",
          y: 7132,
          goals: [
            {
              name: "Expenses",
              value: 7500,
              strokeHeight: 5,
              strokeColor: "#FFCEA9",
            },
          ],
        },
        {
          x: "2024",
          y: 7332,
          goals: [
            {
              name: "Expenses",
              value: 8700,
              strokeHeight: 5,
              strokeColor: "#FFCEA9",
            },
          ],
        },
      ],
    },
  ];

  const options = {
    chart: {
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        columnWidth: "15.41px",
      },
    },
    colors: ["#FD5812"],
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: true,
      showForSingleSeries: true,
      customLegendItems: ["Income", "Expenses"],
      position: "right",
      fontSize: "12px",
      offsetX: -17,
      offsetY: 52,
      itemMargin: {
        horizontal: 0,
        vertical: 4,
      },
      labels: {
        colors: "#64748B",
      },
      markers: {
        size: 5,
        offsetX: -2,
        offsetY: 0,
        shape: "square",
        fillColors: ["#FD5812", "#FFCEA9"],
      },
    },
    xaxis: {
      axisTicks: {
        show: false,
        color: "#DDE4FF",
      },
      axisBorder: {
        show: false,
        color: "#DDE4FF",
      },
      labels: {
        show: false,
        style: {
          colors: "#64748B",
          fontSize: "12px",
        },
      },
    },
    yaxis: {
      labels: {
        show: false,
        style: {
          colors: "#64748B",
          fontSize: "12px",
        },
      },
      axisBorder: {
        show: false,
        color: "#DDE4FF",
      },
      axisTicks: {
        show: false,
        color: "#DDE4FF",
      },
    },
    grid: {
      show: false,
      borderColor: "#ECEEF2",
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return "$" + val + "k";
        },
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
          padding: { xs: "25px" },
        }}
        className="rmui-card"
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mt: "-3px",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: "15px" }}>
            <Box>
              <Typography component="span" sx={{ display: "block", mb: "2px" }}>
                Revenue
              </Typography>
              <Typography
                component="h3"
                sx={{ mb: "0", fontSize: "20px", fontWeight: "700" }}
              >
                $194,712
              </Typography>
            </Box>

            <Box
              sx={{
                display: "inline-block",
                px: "8.5px",
                color: "success.700",
                border: "1px solid",
                borderColor: "success.300",
                backgroundColor: "success.100",
                borderRadius: "100px",
                fontSize: "12px",
              }}
            >
              +60%
            </Box>
          </Box>

          <Typography
            component="span"
            sx={{ display: "block", fontSize: "12px" }}
          >
            Last 7 days
          </Typography>
        </Box>

        <Box
          sx={{
            mb: "-38px",
            mt: "-17px",
            maxWidth: "310px",
            mx: "auto",
          }}
        >
          {isChartLoaded && (
            <Chart
              options={options}
              series={series}
              type="bar"
              height={135}
              width={"100%"}
            />
          )}
        </Box>
      </Card>
    </>
  );
};

export default Revenue;
