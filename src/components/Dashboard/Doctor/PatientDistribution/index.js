"use client";

import React, { useEffect, useState } from "react";
import { Card, Box, Typography } from "@mui/material";
import Chart from "react-apexcharts";
import CustomDropdown from "./CustomDropdown";

const PatientDistribution = () => {
  // Chart
  const [isChartLoaded, setChartLoaded] = useState(false);

  useEffect(() => {
    setChartLoaded(true);
  }, []);

  const series = [24.5, 23.5, 24.5];

  const options = {
    labels: ["Male", "Female", "Children"],
    colors: ["#605DFF", "#58F229", "#5DA8FF"],
    stroke: {
      width: 5,
      show: true,
      colors: ["#ffffff"],
      lineCap: "round",
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
    plotOptions: {
      pie: {
        expandOnClick: false,
        donut: {
          size: "62%",
          labels: {
            show: true,
            name: {
              color: "#64748B",
            },
            value: {
              show: true,
              color: "#000",
              fontSize: "36px",
              fontWeight: "700",
              offsetY: 10,
              formatter: (val) => {
                return "" + parseFloat(val) / 1 + "K";
              },
            },
            total: {
              show: true,
              color: "#64748B",
              fontSize: "14px",
              fontWeight: "400",
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
          return "" + val / 1 + "K";
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
          <Box>
            <Typography
              variant="h3"
              sx={{
                fontSize: { xs: "16px", md: "18px" },
                fontWeight: 700,
              }}
              className="text-black"
            >
              Patient Distribution
            </Typography>
          </Box>

          <Box>
            <CustomDropdown
              options={["Daily", "Weekly", "Monthly", "Yearly"]} // Need to change the options also in CustomDropdown file
              onSelect={(value) => console.log(value)}
              defaultLabel="Weekly"
            />
          </Box>
        </Box>

        <Box>
          {isChartLoaded && (
            <Chart
              options={options}
              series={series}
              type="donut"
              height={300}
              width={"100%"}
            />
          )}
        </Box>
      </Card>
    </>
  );
};

export default PatientDistribution;
