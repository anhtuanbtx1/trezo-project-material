"use client";

import React, { useEffect, useState } from "react";
import { Card, Box, Typography } from "@mui/material";
import CustomDropdown from "./CustomDropdown";
import Chart from "react-apexcharts";

const TotalSales = () => {
  // Chart
  const [isChartLoaded, setChartLoaded] = useState(false);

  useEffect(() => {
    setChartLoaded(true);
  }, []);

  const series = [
    {
      name: "Current Sale",
      data: [35, 50, 55, 60, 50, 60, 55, 60, 78, 40, 95, 80],
    },
    {
      name: "Last Year Sale",
      data: [70, 50, 40, 40, 62, 52, 80, 40, 60, 53, 70, 70],
    },
  ];

  const options = {
    chart: {
      zoom: {
        enabled: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "40%",
        borderRadius: 4,
      },
    },
    colors: ["#605DFF", "#DDE4FF"],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: [2, 2, 0],
      dashArray: [0, 6, 0],
    },
    grid: {
      show: false,
      borderColor: "#ECEEF2",
    },
    fill: {
      type: "gradient",
      gradient: {
        stops: [0, 90, 100],
        shadeIntensity: 1,
        opacityFrom: 0,
        opacityTo: 0.5,
      },
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
        "Oct",
        "Nov",
        "Dec",
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
      tickAmount: 5,
      max: 100,
      min: 0,
      labels: {
        formatter: (val) => {
          return "$" + val + "K";
        },
        style: {
          colors: "#64748B",
          fontSize: "12px",
        },
      },
      axisBorder: {
        show: false,
        color: "#ECEEF2",
      },
      axisTicks: {
        show: false,
        color: "#ECEEF2",
      },
    },
    legend: {
      show: true,
      position: "top",
      fontSize: "12px",
      horizontalAlign: "left",
      itemMargin: {
        horizontal: 8,
        vertical: 0,
      },
      labels: {
        colors: "#64748B",
      },
      markers: {
        shape: "diamond",
        offsetX: -2,
        offsetY: -0.5,
      },
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
            Total Sales
          </Typography>

          <Box>
            <CustomDropdown
              options={["Weekly", "Monthly", "Yearly"]}
              onSelect={(value) => console.log(value)}
              defaultLabel="Monthly"
            />
          </Box>
        </Box>

        <div
          style={{
            marginBottom: "-15px",
            marginLeft: "-10px",
            marginRight: "-10px",
            marginTop: "-5px",
          }}
        >
          {isChartLoaded && (
            <Chart
              options={options}
              series={series}
              type="area"
              height={363}
              width={"100%"}
            />
          )}
        </div>
      </Card>
    </>
  );
};

export default TotalSales;
