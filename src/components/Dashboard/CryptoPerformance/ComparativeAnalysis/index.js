"use client";

import { useState, useEffect } from "react";
import { Box, Typography, Card } from "@mui/material";
import CustomDropdown from "./CustomDropdown";
import Chart from "react-apexcharts";

const ComparativeAnalysis = () => {
  // Chart state
  const [isChartLoaded, setChartLoaded] = useState(false);

  useEffect(() => {
    setChartLoaded(true);
  }, []);

  const monthlyData = {
    series: [
      { name: "Bitcoin", data: [[100, 20, 50]] },
      { name: "Ethereum", data: [[300, 50, 70]] },
      { name: "Cardano", data: [[500, 80, 80]] },
      { name: "Solana", data: [[650, 40, 50]] },
      { name: "Tether", data: [[850, 60, 70]] },
      { name: "XRP", data: [[900, 20, 60]] },
    ],
    xaxisRange: { min: 0, max: 1000 },
  };

  const options = {
    chart: {
      type: "bubble",
      height: 381,
      toolbar: {
        show: false,
      },
    },
    colors: ["#757DFF", "#5DA8FF", "#BF85FB", "#1E8308", "#FE7A36", "#174EDE"],
    dataLabels: {
      enabled: false,
    },
    grid: {
      show: true,
      borderColor: "#ECEEF2",
    },
    fill: {
      opacity: 1,
    },
    xaxis: {
      tickAmount: 8,
      min: monthlyData.xaxisRange.min,
      max: monthlyData.xaxisRange.max,
      axisTicks: {
        show: true,
        color: "#64748B",
      },
      axisBorder: {
        show: true,
        color: "#64748B",
      },
      labels: {
        show: true,
        style: {
          colors: "#3A4252",
          fontSize: "12px",
        },
      },
    },
    yaxis: {
      // tickAmount: 5,
      // max: 3000,
      min: 0,
      labels: {
        formatter: (val) => {
          return "$" + val + "k";
        },
        style: {
          colors: "#3A4252",
          fontSize: "12px",
        },
      },
      axisBorder: {
        show: false,
        color: "#64748B",
      },
      axisTicks: {
        show: false,
        color: "#64748B",
      },
    },
    legend: {
      show: true,
      position: "top",
      fontSize: "12px",
      horizontalAlign: "center",
      itemMargin: {
        horizontal: 10,
        vertical: 8,
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
            flexWrap: "wrap",
            gap: "15px",
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
            Comparative Analysis
          </Typography>

          <CustomDropdown
            options={["Weekly", "Monthly", "Yearly"]} // Need to change the options also in CustomDropdown file
            onSelect={(value) => console.log(value)}
            defaultLabel="Last Month"
          />
        </Box>

        <Box
          sx={{
            mt: "-10px",
            mb: "-20px",
          }}
        >
          {isChartLoaded && (
            <Chart
              options={options}
              series={monthlyData.series}
              type="bubble"
              height={380}
              width={"100%"}
            />
          )}
        </Box>
      </Card>
    </>
  );
};

export default ComparativeAnalysis;
