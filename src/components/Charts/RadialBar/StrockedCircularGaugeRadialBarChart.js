"use client";

import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { Card, Typography } from "@mui/material";

const StrockedCircularGaugeRadialBarChart = () => {
  // Chart
  const [isChartLoaded, setChartLoaded] = useState(false);

  useEffect(() => {
    setChartLoaded(true);
  }, []);

  const series = [67];

  const options = {
    chart: {
      offsetY: -10,
    },
    plotOptions: {
      radialBar: {
        startAngle: -135,
        endAngle: 135,
        dataLabels: {
          name: {
            fontSize: "16px",
            color: undefined,
            offsetY: 120,
          },
          value: {
            offsetY: 76,
            fontSize: "22px",
            color: undefined,
            formatter: function (val) {
              return val + "%";
            },
          },
        },
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        shadeIntensity: 0.15,
        inverseColors: false,
        opacityFrom: 1,
        opacityTo: 1,
        // stops: [0, 50, 65, 91]
      },
    },
    stroke: {
      dashArray: 4,
    },
    labels: ["Median Ratio"],
    colors: ["#605DFF"],
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
          Strocked Circular Gauge RadialBar Chart
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

export default StrockedCircularGaugeRadialBarChart;
