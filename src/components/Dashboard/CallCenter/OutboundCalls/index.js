"use client";

import React, { useEffect, useState } from "react";
import Chart from 'react-apexcharts';
import { Box, Typography, Card } from "@mui/material";
import CustomDropdown from "./CustomDropdown";

const OutboundCalls = () => {
  // Chart
  const [isChartLoaded, setChartLoaded] = useState(false);

  useEffect(() => {
    setChartLoaded(true);
  }, []);

  const series = [
    {
      name: "Outbound Calls",
      data: [
        100, 130, 115, 170, 110, 120, 160, 100, 200, 105, 130, 130, 170, 150,
        155, 190, 165,
      ],
    },
  ];

  const options = {
    chart: {
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: 1,
    },
    colors: ["#9135E8"],
    fill: {
      type: "gradient",
      gradient: {
        stops: [0, 90, 100],
        shadeIntensity: 1,
        opacityFrom: 0.5,
        opacityTo: 0.5,
      },
    },
    xaxis: {
      categories: [
        "01 Jan",
        "02 Jan",
        "03 Jan",
        "04 Jan",
        "05 Jan",
        "06 Jan",
        "07 Jan",
        "08 Jan",
        "09 Jan",
        "10 Jan",
        "11 Jan",
        "12 Jan",
        "13 Jan",
        "14 Jan",
        "15 Jan",
        "16 Jan",
        "17 Jan",
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
        show: false,
        style: {
          colors: "#8695AA",
          fontSize: "12px",
        },
      },
    },
    yaxis: {
      tickAmount: 5,
      show: false,
      max: 220,
      min: 0,
      labels: {
        show: true,
        style: {
          colors: "#64748B",
          fontSize: "12px",
        },
      },
      axisBorder: {
        show: true,
        color: "#ECEEF2",
      },
      axisTicks: {
        show: true,
        color: "#ECEEF2",
      },
    },
    grid: {
      show: false,
      borderColor: "#ECEEF2",
    },
    legend: {
      show: true,
      position: "top",
      fontSize: "12px",
      horizontalAlign: "center",
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
                mb: "5px",
              }}
              className="text-black"
            >
              Outbound Calls
            </Typography>

            <Typography fontSize={"12px"}>
              Summary of outgoing call efforts
            </Typography>
          </Box>

          <Box>
            <CustomDropdown
              options={["Last Day", "Last Week", "Last Month", "Last Year"]} // Need to change the options also in CustomDropdown file
              onSelect={(value) => console.log(value)}
              defaultLabel="Today"
            />
          </Box>
        </Box>

        <Box
          sx={{
            mb: "-25px",
            mt: "-45px",
          }}
        >
          {isChartLoaded && (
            <Chart
              options={options}
              series={series}
              type="area"
              height={162}
              width={"100%"}
            />
          )}
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: "30px" }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: "15px" }}>
            <Box
              className="border"
              sx={{
                bgcolor: "grey.50",
                width: "48px",
                height: "48px",
                borderRadius: "5px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src="/images/icons/call2.svg"
                alt="call"
                width={26}
                height={26}
              />
            </Box>

            <Box>
              <Typography
                variant="h5"
                sx={{
                  fontSize: { xs: "24px", md: "28px" },
                  lineHeight: 1,
                  fontWeight: 600,
                }}
              >
                890
              </Typography>
              <Typography component={"span"} display={"block"}>
                Last month
              </Typography>
            </Box>
          </Box>

          <Box
            className="text-black"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "5px",
              fontWeight: 500,
            }}
          >
            <i
              className="material-symbols-outlined text-orange-600"
              style={{ fontSize: "20px" }}
            >
              trending_down
            </i>
            -5.8%
          </Box>
        </Box>
      </Card>
    </>
  );
};

export default OutboundCalls;
