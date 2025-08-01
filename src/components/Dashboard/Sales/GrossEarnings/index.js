"use client";

import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { Card, Box, Typography } from "@mui/material";

const GrossEarnings = () => {
  // Chart
  const [isChartLoaded, setChartLoaded] = useState(false);

  useEffect(() => {
    setChartLoaded(true);
  }, []);

  const series = [
    {
      name: "Earnings",
      data: [4, 3, 10, 9, 29, 19, 22, 9, 12, 7],
    },
  ];

  const options = {
    chart: {
      toolbar: {
        show: false,
      },
    },
    stroke: {
      width: 4,
      curve: "smooth",
    },
    xaxis: {
      categories: ["1W", "2W", "3W", "4W", "5W", "6W", "7W", "8W", "9W", "10W"],
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
    grid: {
      show: false,
      borderColor: "#ECEEF2",
    },
    colors: ["#9135E8"],
    yaxis: {
      show: false,
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
  };

  return (
    <>
      <Card
        sx={{
          bgcolor: "#F3E8FF",
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
            gap: "10px",
          }}
        >
          <img
            src="/images/icons/gross-earnings.svg"
            alt="total-balance"
            width={41}
            height={41}
          />

          <Box>
            <Typography
              component="span"
              sx={{
                display: "block",
                textTransform: "uppercase",
              }}
            >
              Gross Earnings
            </Typography>

            <Typography
              component="h4"
              sx={{
                fontWeight: "600",
                fontSize: "20px", 
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              $78,350.00
              <Typography
                component="span"
                sx={{
                  color: "success.main",
                  fontWeight: "500",
                  fontSize: "14px",
                  display: "flex",
                  alignItems: "center",
                  gap: "2px",
                }}
              >
                <i
                  className="bx bx-trending-up"
                  style={{ fontSize: "20px" }}
                ></i>
                +2.3%
              </Typography>
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            marginTop: "-15px",
            marginBottom: "-5px",
          }}
        >
          {isChartLoaded && (
            <Chart
              options={options}
              series={series}
              type="line"
              height={240}
              width={"100%"}
            />
          )}
        </Box>

        <Box
          className="border-top"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            paddingTop: "20px",
            borderColor: "#E9D5FF !important",
          }}
        >
          <Box>
            <Typography
              component="span"
              sx={{
                fontSize: "12px",
                display: "block",
              }}
            >
              Total Balance
            </Typography>

            <Typography
              component="h3"
              sx={{
                fontWeight: "500",
                fontSize: "18px",
              }}
            >
              $3,42,890
            </Typography>
          </Box>

          <Box>
            <Typography
              component="span"
              sx={{
                fontSize: "12px",
                display: "block",
              }}
            >
              Withdrawals
            </Typography>

            <Typography
              component="h3"
              sx={{
                fontWeight: "500",
                fontSize: "18px",
              }}
            >
              $2,35,425
            </Typography>
          </Box>
        </Box>
      </Card>
    </>
  );
};

export default GrossEarnings;
