"use client";

import React, { useEffect, useState } from "react";
import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";
import { Card, Box, Typography } from "@mui/material";
import CustomDropdown from "./CustomDropdown";

// Dynamically import react-apexcharts with Next.js dynamic import
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const GrossRevenue: React.FC = () => {
  // Chart
  const [isChartLoaded, setChartLoaded] = useState(false);

  useEffect(() => {
    setChartLoaded(true);
  }, []);

  const series = [
    {
      name: "Sales Revenue",
      data: [35, 50, 55, 60, 50, 60, 55, 60, 78, 40],
    },
    {
      name: "Sales Volume",
      data: [80, 60, 50, 50, 72, 65, 90, 50, 70, 63],
    },
    {
      name: "Order Value",
      data: [70, 50, 40, 40, 95, 52, 80, 40, 60, 53],
    },
  ];

  const options: ApexOptions = {
    chart: {
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },
    colors: ["#757DFF", "#E9D5FF", "#37D80A"],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "straight",
      width: [3, 3, 3],
      dashArray: [0, 6, 6],
    },
    grid: {
      borderColor: "#ECF0FF",
    },
    fill: {
      type: "gradient",
      gradient: {
        stops: [0, 90, 100],
        shadeIntensity: 1,
        opacityFrom: 0,
        opacityTo: 0,
      },
    },
    xaxis: {
      categories: [
        "Oct 01",
        "Oct 04",
        "Oct 08",
        "Oct 12",
        "Oct 16",
        "Oct 20",
        "Oct 24",
        "Oct 28",
        "Nov 02",
        "Nov 06",
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
        style: {
          colors: "#8695AA",
          fontSize: "12px",
          fontFamily: "Inter",
        },
      },
    },
    yaxis: {
      tickAmount: 5,
      max: 100,
      min: 0,
      labels: {
        formatter: (val) => {
          return "$" + val / 1 + "K";
        },
        style: {
          colors: "#8695AA",
          fontSize: "12px",
          fontFamily: "Inter",
        },
      },
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
            mb: "10px",
          }}
        >
          <Box>
            <Typography>Gross Revenue</Typography>
          </Box>

          <Box>
            <CustomDropdown
              options={["This Day", "This Week", "This Month", "This Year"]} // Need to change the options also in CustomDropdown file
              onSelect={(value) => console.log(value)}
              defaultLabel="Last Week"
            />
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            mb: "10px",
          }}
        >
          <Typography
            variant="h3"
            className="text-black"
            sx={{
              fontSize: { xs: "24px", md: "32px" },
              fontWeight: 700,
              mb: 0,
            }}
          >
            $1,528
          </Typography>

          <Box
            sx={{
              bgcolor: "#37d80a1a",
              color: "success.500",
              border: "1px solid",
              borderColor: "success.500",
              padding: "3px 8px",
              borderRadius: "30px",
              fontSize: "12px",
              fontWeight: "500",
              display: "flex",
              alignItems: "center",
              gap: "3px",
              lineHeight: 1,
            }}
          >
            +5.4%
            <i className="ri-arrow-up-line"></i>
          </Box>
        </Box>

        <Typography sx={{ fontSize: "12px", mb: "20px" }}>
          vs previous 30 days
        </Typography>

        <Box
          sx={{
            margin: "-24px -10px -28px -17px",
          }}
        >
          {isChartLoaded && (
            <Chart
              options={options}
              series={series}
              type="area"
              height={340}
              width={"100%"}
            />
          )}
        </Box>
      </Card>
    </>
  );
};

export default GrossRevenue;
