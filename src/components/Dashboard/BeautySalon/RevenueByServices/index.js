"use client";

import React, { useEffect, useState } from "react";
import { Card, Box, Typography } from "@mui/material";
import CustomDropdown from "./CustomDropdown";
import Chart from "react-apexcharts";

const RevenueByServices = () => {
  // Chart
  const [isChartLoaded, setChartLoaded] = useState(false);

  useEffect(() => {
    setChartLoaded(true);
  }, []);

  const series = [
    {
      name: "Facial",
      data: [44, 22, 7, 57, 44, 57, 18, 43, 24],
    },
    {
      name: "Manicure",
      data: [13, 23, 10, 13, 13, 13, 13, 13, 13],
    },
    {
      name: "Pedicure",
      data: [11, 17, 6, 15, 11, 15, 11, 11, 11],
    },
    {
      name: "Hair Cut",
      data: [21, 7, 25, 21, 21, 21, 21, 21, 21],
    },
  ];

  const options = {
    chart: {
      stacked: true,
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: true,
      },
    },
    colors: ["#82FC5A", "#D7B5FD", "#90C7FF", "#9CAAFF"],
    dataLabels: {
      style: {
        fontSize: "10px",
        fontFamily: "Inter",
        fontWeight: "700",
        colors: ["#343A46"],
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "55%",
        borderRadius: 6,
        borderRadiusApplication: "end", // 'around', 'end'
        borderRadiusWhenStacked: "last", // 'all', 'last'
        dataLabels: {
          total: {
            enabled: false,
          },
        },
      },
    },
    xaxis: {
      categories: [
        "Oct 01",
        "Oct 02",
        "Oct 03",
        "Oct 04",
        "Oct 05",
        "Oct 06",
        "Oct 07",
        "Oct 08",
        "Oct 09",
      ],
      axisTicks: {
        show: false,
        color: "#B1BBC8",
      },
      axisBorder: {
        show: false,
        color: "#B1BBC8",
      },
      labels: {
        show: true,
        style: {
          colors: "#8695AA",
          fontSize: "12px",
        },
      },
    },
    yaxis: {
      show: true,
      tickAmount: 6,
      //max: 100,
      min: 0,
      labels: {
        style: {
          colors: "#8695AA",
          fontSize: "12px",
        },
      },
    },
    grid: {
      borderColor: "#ECF0FF",
    },
    legend: {
      show: true,
      position: "bottom",
      fontSize: "12px",
      horizontalAlign: "center",
      fontFamily: "Inter",
      fontWeight: 400,
      offsetY: 10,
      itemMargin: {
        horizontal: 8,
        vertical: 10,
      },
      labels: {
        colors: "#64748B",
      },
      markers: {
        offsetX: -2,
        offsetY: -0.5,

        shape: "diamond",
      },
    },
    fill: {
      opacity: 1,
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
            Revenue By Services
          </Typography>

          <CustomDropdown
            options={["This Day", "This Week", "This Month", "This Year"]} // Need to change the options also in CustomDropdown file
            onSelect={(value) => console.log(value)}
            defaultLabel="This Month"
          />
        </Box>

        <Box sx={{ margin: "-24px -24px -20px -17px" }}>
          {isChartLoaded && (
            <Chart
              options={options}
              series={series}
              type="bar"
              height={310}
              width={"100%"}
            />
          )}
        </Box>
      </Card>
    </>
  );
};

export default RevenueByServices;
