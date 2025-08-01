"use client";

import React, { useEffect, useState } from "react";
import { Card, Box, Typography } from "@mui/material";
import Chart from "react-apexcharts";
import CustomDropdown from "./CustomDropdown";

const IncomeVSExpense = () => {
  // Chart
  const [isChartLoaded, setChartLoaded] = useState(false);

  useEffect(() => {
    setChartLoaded(true);
  }, []);

  const series = [
    {
      name: "Income",
      data: [70, 42, 70, 120, 40, 70, 90, 20, 60],
    },
    {
      name: "Expense",
      data: [-70, -44, -70, -120, -40, -70, -90, -20, -40],
    },
  ];

  const options = {
    chart: {
      stacked: true,
      toolbar: {
        show: false,
      },
    },
    colors: ["#4936F5", "#C2CDFF"],
    plotOptions: {
      bar: {
        borderRadius: 3,
        columnWidth: "24px",
        borderRadiusApplication: "end",
        borderRadiusWhenStacked: "all",
      },
    },
    dataLabels: {
      enabled: false,
    },
    grid: {
      show: true,
      strokeDashArray: 7,
      borderColor: "#ECEEF2",
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
        color: "#ECEEF2",
      },
      axisBorder: {
        show: false,
        color: "#ECEEF2",
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
      // tickAmount: 5,
      // max: 50,
      // min: 0,
      labels: {
        formatter: (val) => {
          return val + "K";
        },
        style: {
          colors: "#8695AA",
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
    legend: {
      show: true,
      fontSize: "12px",
      position: "bottom",
      horizontalAlign: "center",
      itemMargin: {
        horizontal: 8,
        vertical: 15,
      },
      labels: {
        colors: "#64748B",
      },
      markers: {
        size: 7,
        offsetX: -2,
        offsetY: -0.5,
        shape: "diamond",
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
          <Box>
            <Typography
              variant="h3"
              sx={{
                fontSize: { xs: "16px", md: "18px" },
                fontWeight: 700,
              }}
              className="text-black"
            >
              Income vs Expense
            </Typography>
          </Box>

          <Box>
            <CustomDropdown
              options={["This Daily", "This Weekly", "This Monthly", "This Yearly"]} // Need to change the options also in CustomDropdown file
              onSelect={(value) => console.log(value)}
              defaultLabel="This Weekly"
            />
          </Box>
        </Box>

        <Box
          sx={{
            marginTop: "-20px",
            marginLeft: "-15px",
            marginBottom: "-15px",
          }}
        >
          {isChartLoaded && (
            <Chart
              options={options}
              series={series}
              type="bar"
              height={324}
              width={"100%"}
            />
          )}
        </Box>
      </Card>
    </>
  );
};

export default IncomeVSExpense;
