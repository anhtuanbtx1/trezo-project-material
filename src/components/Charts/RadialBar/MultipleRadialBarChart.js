"use client";

import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { Card, Typography } from "@mui/material";

const MultipleRadialBarChart = () => {
  // Chart
  const [isChartLoaded, setChartLoaded] = useState(false);

  useEffect(() => {
    setChartLoaded(true);
  }, []);

  const series = [44, 55, 67, 83];

  const options = {
    plotOptions: {
      radialBar: {
        dataLabels: {
          name: {
            fontSize: "22px",
          },
          value: {
            fontSize: "16px",
          },
          total: {
            show: true,
            label: "Total",
            formatter: function (w) {
              return "249";
            },
          },
        },
      },
    },
    labels: ["Apples", "Oranges", "Bananas", "Berries"],
    colors: ["#3584FC", "#FF4023", "#ffc107", "#605DFF"],
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
          Multiple RadialBar Chart
        </Typography>

        {isChartLoaded && (
          <Chart
            options={options}
            series={series}
            type="radialBar"
            height={350}
            width={"100%"}
          />
        )}
      </Card>
    </>
  );
};

export default MultipleRadialBarChart;
