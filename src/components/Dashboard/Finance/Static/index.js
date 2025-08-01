"use client";

import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { Box, Typography, Card } from "@mui/material";
import CustomDropdown from "./CustomDropdown";

const Static = () => {
  // Chart
  const [isChartLoaded, setChartLoaded] = useState(false);

  useEffect(() => {
    setChartLoaded(true);
  }, []);

  const series = [
    {
      name: "Income",
      data: [450, 540, 560, 540, 600, 570, 630, 600, 660],
    },
    {
      name: "Expenses",
      data: [760, 850, 1000, 970, 850, 1050, 900, 1130, 950],
    },
  ];

  const options = {
    chart: {
      toolbar: {
        show: false,
      },
    },
    colors: ["#9CAAFF", "#605DFF"],
    plotOptions: {
      bar: {
        columnWidth: "19.96px",
      },
    },
    grid: {
      show: true,
      borderColor: "#F6F7F9",
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: 4,
      show: true,
      colors: ["transparent"],
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
      ],
      axisTicks: {
        show: true,
        color: "#F6F7F9",
      },
      axisBorder: {
        show: false,
        color: "#F6F7F9",
      },
      labels: {
        show: true,
        style: {
          colors: "#64748B",
          fontSize: "12px",
        },
      },
    },
    yaxis: {
      tickAmount: 6,
      max: 1200,
      min: 0,
      labels: {
        formatter: (val) => {
          return "$" + val;
        },
        style: {
          colors: "#64748B",
          fontSize: "12px",
        },
      },
      axisBorder: {
        show: false,
        color: "#F6F7F9",
      },
      axisTicks: {
        show: false,
        color: "#F6F7F9",
      },
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return "$" + val;
        },
      },
    },
    legend: {
      show: true,
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
        shape: "square",
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
            Static
          </Typography>

          <Box>
            <CustomDropdown
              options={["Weekly", "Monthly", "Yearly"]} // Need to change the options also in CustomDropdown file
              onSelect={(value) => console.log(value)}
              defaultLabel="Select"
            />
          </Box>
        </Box>

        <Box
          sx={{
            mb: "-22px",
            mt: "-20px",
            ml: "-15px",
          }}
        >
          {isChartLoaded && (
            <Chart
              options={options}
              series={series}
              type="bar"
              height={402}
              width={"100%"}
            />
          )}
        </Box>
      </Card>
    </>
  );
};

export default Static;
