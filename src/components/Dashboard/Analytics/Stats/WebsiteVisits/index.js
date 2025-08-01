"use client";

import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { Box, Typography } from "@mui/material";
import styles from "../Stats.module.css"

const WebsiteVisits = () => {
  const [isChartLoaded, setChartLoaded] = useState(false);

  useEffect(() => {
    setChartLoaded(true);
  }, []);

  const series = [
    {
      name: "Revenue Growth",
      data: [3, 7, 7, 10, 9, 11, 15],
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

    colors: ["#3584FC"],
    dataLabels: {
      enabled: false,
    },
    grid: {
      show: false,
      borderColor: "#ECEEF2",
    },
    stroke: {
      curve: "straight",
      width: 1,
    },
    xaxis: {
      categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
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
      show: false,
      labels: {
        formatter: (val) => {
          return "$" + val + "k";
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
      show: false,
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
        shape: 'diamond',
        offsetX: -2,
        offsetY: -0.5, 
      },
    },
  };

  return (
    <>
      <Box className={styles.item}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mb: "12px",
            position: "relative",
          }}
        >
          <Box>
            <Typography component="span" sx={{ mb: "3px", display: "block" }}>
              Website Visits
            </Typography>

            <Typography
              variant="h5"
              sx={{
                fontSize: { xs: "18px", lg: "20px" },
                fontWeight: 700,
              }}
              className="text-black"
            >
              215.2k
            </Typography>
          </Box>

          <Box
            sx={{
              position: "absolute",
              top: "-28px",
              right: "-9px",
              maxWidth: "120px",
            }}
            className="crm-rg"
          >
            {isChartLoaded && (
              <Chart
                options={options}
                series={series}
                type="area"
                height={95}
                width={"100%"}
              />
            )}
          </Box>
        </Box>

        <Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              mt: "5px",
            }}
          >
            <Box  
              sx={{
                bgcolor: "#d8ffc8",
                color: 'success.main',
                border: "1px solid #82FC5A",
                borderRadius: "100px",
                fontSize: "12px",
                padding: "1px 9px",
                lineHeight: 'normal'
              }}
            >
              +10% Increase
            </Box>

            <Typography component="span" sx={{ fontSize: "12px" }}>
              Last 7 days
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default WebsiteVisits;
