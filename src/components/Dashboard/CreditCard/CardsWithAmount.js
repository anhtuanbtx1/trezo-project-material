"use client";

import React, { useEffect, useState } from "react";
import { Card, Box, Typography } from "@mui/material";
import Chart from "react-apexcharts";

const CardsWithAmount = () => {
  // Chart state
  const [isChartLoaded, setChartLoaded] = useState(false);

  useEffect(() => {
    setChartLoaded(true);
  }, []);

  const series = [
    {
      name: "Projects",
      data: [1870, 2000, 1490, 1410, 1680],
    },
  ];

  const options = {
    chart: {
      toolbar: {
        show: false,
      },
    },
    colors: ["#605DFF"],
    plotOptions: {
      bar: {
        horizontal: true,
      },
    },
    grid: {
      show: true,
      borderColor: "#ECEEF2",
    },
    dataLabels: {
      enabled: true,
      style: {
        fontSize: "11px",
        fontWeight: "normal",
      },
    },
    fill: {
      opacity: 1,
    },
    xaxis: {
      categories: [
        "Rewards Card",
        "Cashback Card",
        "Travel Card",
        "Student Card",
        "Business Card",
      ],
      axisTicks: {
        show: true,
        color: "#ECEEF2",
      },
      axisBorder: {
        show: true,
        color: "#ECEEF2",
      },
      labels: {
        show: true,
        style: {
          colors: "#64748B",
          fontSize: "11px",
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: "#64748B",
          fontSize: "11px",
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
        <Typography
          variant="h3"
          sx={{
            fontSize: { xs: "16px", md: "18px" },
            fontWeight: 700,
            mb: "25px",
          }}
          className="text-black"
        >
          Cards With Amount
        </Typography>

        <Box
          sx={{
            mt: "-25px",
            ml: "-10px",
            mb: "-22px",
          }}
        >
          {isChartLoaded && (
            <Chart
              options={options}
              series={series}
              type="bar"
              height={212}
              width={"100%"}
            />
          )}
        </Box>
      </Card>
    </>
  );
};

export default CardsWithAmount;
