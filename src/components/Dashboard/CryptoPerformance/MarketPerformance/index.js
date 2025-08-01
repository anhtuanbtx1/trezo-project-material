"use client";

import { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import { Box, Typography, Card } from "@mui/material";
import CustomDropdown from "./CustomDropdown";

const MarketPerformance = () => {
  // Chart state
  const [isChartLoaded, setChartLoaded] = useState(false);

  useEffect(() => {
    setChartLoaded(true);
  }, []);

  const series = [25, 18, 22, 35, 15, 28];

  const options = {
    labels: [
      "Revenue Growth",
      "Profit Margins",
      "Cost of Goods Sold",
      "Market Share",
      "Sales Volume",
      "Return on Investment",
    ],
    colors: ["#37D80A", "#3584FC", "#FE7A36", "#AD63F6", "#FF4023", "#605DFF"],
    stroke: {
      width: 0,
      show: true,
      colors: ["#ffffff"],
    },
    legend: {
      show: true,
      fontSize: "12px",
      position: "bottom",
      horizontalAlign: "center",
      itemMargin: {
        horizontal: 8,
        vertical: 6,
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
    dataLabels: {
      enabled: false,
    },
    tooltip: {
      y: {
        formatter: (val) => {
          return val + "%";
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
            Market Performance
          </Typography>

          <CustomDropdown
            options={["Last Day", "Last Week", "Last Month", "Last Year"]} // Need to change the options also in CustomDropdown file
            onSelect={(value) => console.log(value)}
            defaultLabel="Last Month"
          />
        </Box>

        <Box>
          {isChartLoaded && (
            <Chart
              options={options}
              series={series}
              type="pie"
              height={340}
              width={"100%"}
            />
          )}
        </Box>
      </Card>
    </>
  );
};

export default MarketPerformance;
