"use client";

import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import CustomDropdown from "./CustomDropdown";
import SalesByGender from "./SalesByGender";
import Chart from "react-apexcharts";

const ListenerAnalytics = () => {
  // Chart
  const [isChartLoaded, setChartLoaded] = useState(false);

  useEffect(() => {
    setChartLoaded(true);
  }, []);

  const series = [
    {
      name: "Men",
      data: [50, 30, 40, 35, 30],
    },
    {
      name: "Woman",
      data: [25, 40, 30, 45, 25],
    },
  ];

  const options = {
    chart: {
      toolbar: {
        show: false,
      },
    },
    colors: ["#605DFF", "#9CAAFF"],
    plotOptions: {
      bar: {
        columnWidth: "32%",
        borderRadius: 6,
        borderRadiusApplication: "end",
      },
    },
    fill: {
      type: ["gradient", "solid"], // Apply gradient only to the first series
      gradient: {
        shade: "light",
        type: "vertical",
        shadeIntensity: 0.5,
        gradientToColors: ["#9747FF"], // End color for the gradient
        inverseColors: false,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100],
      },
    },
    grid: {
      borderColor: "#ECEEF2",
      strokeDashArray: 8,
      xaxis: {
        lines: {
          show: false,
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: 3,
      show: true,
      colors: ["transparent"],
    },
    xaxis: {
      categories: ["18-24", "25-34", "35-44", "45-65", "65+"],
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
          fontFamily: "Inter",
        },
      },
    },
    yaxis: {
      tickAmount: 3,
      max: 60,
      min: 0,
      labels: {
        style: {
          colors: "#64748B",
          fontSize: "12px",
          fontFamily: "Inter",
        },
        formatter: (val) => {
          return "" + val / 1 + "%";
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
      fontFamily: "Inter",
      fontWeight: 400,
      offsetY: 10,
      itemMargin: {
        horizontal: 8,
        vertical: 60,
      },
      labels: {
        colors: "#3A4252",
      },
      markers: {
        offsetX: -2,
        offsetY: -0.5,
        shape: "diamond",
      },
    },
  };

  return (
    <>
      <Box
        className="bg-white border"
        sx={{
          boxShadow: "0px 3px 4px 0px rgba(0, 0, 0, 0.05)",
          borderRadius: "7px",
          padding: { xs: "18px", sm: "20px", lg: "25px" },
          position: "relative",
          overflow: "hidden",
          mb: "25px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "10px",
            mb: "15px",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              mb: "0",
              fontSize: { xs: "16px", md: "18px" },
              fontWeight: 600,
            }}
          >
            Listener Analytics
          </Typography>

          <Box className="-mr-10">
            <CustomDropdown
              options={[
                "Last 28 Day",
                "Last 48 Day",
                "Last 90 Day",
                "Last Year",
              ]} // Need to change the options also in CustomDropdown file
              onSelect={(value) => console.log(value)}
              defaultLabel="Last 28 Day"
            />
          </Box>
        </Box>

        <Box
          sx={{
            margin: "-16px -27px -28px -16px",
          }}
        >
          {isChartLoaded && (
            <Chart
              options={options}
              series={series}
              type="bar"
              height={400}
              width={"100%"}
            />
          )}
        </Box>

        <Box
          // className="po-right-20"
          sx={{
            position: "absolute",
            top: "92px",
            right: "20px",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box sx={{ width: "80px" }}>
              <SalesByGender />
            </Box>

            <Box sx={{ mt: "-10px" }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  my: "5px",
                  gap: "5px",
                }}
              >
                <Box
                  sx={{
                    backgroundColor: "purple.main",
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                  }}
                ></Box>

                <Typography fontSize={12} className="text-black">
                  Men:{" "}
                  <Typography component={"span"} fontSize={12} fontWeight={500}>
                    75%
                  </Typography>
                </Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  my: "5px",
                  gap: "5px",
                }}
              >
                <Box
                  sx={{
                    backgroundColor: "primary.main",
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                  }}
                ></Box>

                <Typography fontSize={12} className="text-black">
                  Woman:{" "}
                  <Typography component={"span"} fontSize={12} fontWeight={500}>
                    25%
                  </Typography>
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ListenerAnalytics;
