"use client";

import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { Box, Typography, Card } from "@mui/material";
import CustomDropdown from "./CustomDropdown";

const TodaysPayment = () => {
  // Chart
  const [isChartLoaded, setChartLoaded] = useState(false);

  useEffect(() => {
    setChartLoaded(true);
  }, []);

  const series = [
    {
      name: "Payment",
      data: [40, 50, 80, 50, 40, 30, 40, 50, 60, 70, 50, 65],
    },
  ];

  const options = {
    chart: {
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },
    colors: ["#ffffff"],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: [2, 2, 0],
      dashArray: [0, 6, 0],
    },
    grid: {
      show: true,
      borderColor: "#ffffff1a",
    },
    fill: {
      type: "gradient",
      gradient: {
        stops: [0, 90, 100],
        shadeIntensity: 1,
        opacityFrom: 0.5,
        opacityTo: 0.2,
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
        color: "#ffffff1a",
      },
      axisBorder: {
        show: false,
        color: "#ffffff1a",
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
          colors: "#8695AA",
          fontSize: "12px",
        },
      },
      axisBorder: {
        show: false,
        color: "#ffffff1a",
      },
      axisTicks: {
        show: false,
        color: "#ffffff1a",
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
        size: 6,
        offsetX: -2,
        offsetY: -0.5,
        shape: "circle",
      },
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return val + "k";
        },
      },
      marker: {
        show: true,
        fillColors: ["#BE84F9"],
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
        style={{
          background: "linear-gradient(104deg, #361E7D 2.4%, #403CFF 112.33%)",
        }}
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
              component="span"
              sx={{
                display: "block",
                mb: "7px",
              }}
              className="text-white"
            >
              Today's Payment
            </Typography>

            <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <Typography
                component="h3"
                className="text-white"
                sx={{
                  fontSize: { xs: "16px", md: "18px", lg: "32px" },
                  lineHeight: "1",
                  mb: "0",
                  fontWeight: "700",
                }}
              >
                $1,528
              </Typography>

              <Typography
                component="span"
                sx={{
                  display: "inline-block",
                  fontSize: "11px",
                  px: "9px",
                  py: "1px",
                  color: "success.700",
                  border: "1px solid",
                  borderColor: "success.300",
                  bgcolor: "success.100",
                  borderRadius: "100px",
                }}
              >
                +5.4%
              </Typography>
            </Box>
          </Box>

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
            mb: "-18px",
            mt: "-15px",
            ml: "-18px",
          }}
        >
          {isChartLoaded && (
            <Chart
              options={options}
              series={series}
              type="area"
              height={323}
              width={"100%"}
            />
          )}
        </Box>
      </Card>
    </>
  );
};

export default TodaysPayment;
