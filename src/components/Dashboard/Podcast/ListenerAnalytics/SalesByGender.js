"use client";

import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";

const SalesByGender = () => {
  // Chart
  const [isChartLoaded, setChartLoaded] = useState(false);

  useEffect(() => {
    setChartLoaded(true);
  }, []);

  const series = [70, 30];

  const options = {
    labels: ["Men", "Woman"],
    colors: ["#605DFF", "#AD63F6"],
    stroke: {
      width: 0,
      show: true,
      colors: ["#ffffff"],
      lineCap: "round",
    },
    legend: {
      show: false,
      position: "right",
      fontSize: "12px",
      horizontalAlign: "center",
      fontFamily: "Inter",
      fontWeight: 400,
      offsetY: 10,
      itemMargin: {
        horizontal: 0,
        vertical: 5,
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
    plotOptions: {
      pie: {
        expandOnClick: false,
        donut: {
          size: "80%",
          labels: {
            show: false,
            name: {
              color: "#64748B",
            },
            value: {
              show: false,
              color: "#000",
              fontSize: "36px",
              fontWeight: "700",
              fontFamily: "Inter",
              offsetY: 10,
              formatter: (val) => {
                return "" + val / 1 + "%";
              },
            },
            total: {
              show: false,
              color: "#64748B",
              fontSize: "14px",
              fontWeight: "400",
              fontFamily: "Inter",
            },
          },
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    tooltip: {
      enabled: true,
      y: {
        formatter: (val) => {
          return "" + val / 1 + "%";
        },
      },
    },
  };

  return (
    <div>
      {isChartLoaded && (
        <Chart
          options={options}
          series={series}
          type="donut"
          height={60}
          width={"100%"}
        />
      )}
    </div>
  );
};

export default SalesByGender;
