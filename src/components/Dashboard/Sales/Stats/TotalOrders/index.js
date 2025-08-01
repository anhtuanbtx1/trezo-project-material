"use client";

import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { Card, Box, Typography } from "@mui/material";

const TotalOrders = () => {
  const [isChartLoaded, setChartLoaded] = useState(false);

  useEffect(() => {
    setChartLoaded(true);
  }, []);

  const series = [
    {
      name: "Orders",
      data: [60, 50, 40, 50, 45, 30, 50, 35, 60, 45, 30, 60],
    },
  ];

  const options = {
    chart: {
      toolbar: {
        show: false,
      },
    },
    colors: ["#AD63F6"],
    plotOptions: {
      bar: {
        borderRadius: 3,
        columnWidth: "9px",
        borderRadiusApplication: "end",
        borderRadiusWhenStacked: "last",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: 2,
      show: true,
      colors: ["transparent"],
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
        "Sep",
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
      labels: {
        show: false,
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
    fill: {
      opacity: 1,
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
        size: 7,
        offsetX: -2,
        offsetY: -0.5,
        shape: "diamond",
      },
    },
    grid: {
      show: false,
      borderColor: "#ECEEF2",
    },
  };

  return (
    <>
      <Card
        sx={{
          position: "relative",
          boxShadow: "none",
          borderRadius: "7px",
          mb: "25px",
          paddingTop: { xs: "18px", sm: "20px", lg: "25px" },
          paddingX: { xs: "18px", sm: "20px", lg: "25px" },
          paddingBottom: "65px",
        }}
        className="rmui-card border"
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "15px",
          }}
        >
          <Box
            sx={{
              bgcolor: "#F3E8FF",
              padding: "8px",
              borderRadius: "5px",
            }}
          >
            <Box
              className="bg-purple"
              sx={{
                color: "#fff",
                textAlign: "center",
                width: "39px",
                height: "39px",
                lineHeight: "39px",
                borderRadius: "5px",
                fontSize: "25px",
              }}
            >
              <i className="ri-shopping-bag-3-line"></i>
            </Box>
          </Box>

          <Box>
            <Typography
              variant="h5"
              sx={{
                fontSize: { xs: "18px", lg: "24px" },
                fontWeight: 500,
              }}
              className="text-black"
            >
              1,250
            </Typography>

            <Typography component="span" sx={{ mt: "2px", display: "block" }}>
              Total Orders
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            mt: "45px",
          }}
        >
          <Box
            sx={{
              bgcolor: "#D8FFC8",
              border: "1px solid #82FC5A",
              color: "success.main",
              borderRadius: "100px",
              fontSize: "11px",
              padding: "1.5px 7px",
              fontWeight: "500",
              display: "flex",
              alignItems: "center",
              gap: "2px",
            }}
          >
            <i
              className="ri-arrow-up-fill"
              style={{
                fontSize: "14px",
                flexShrink: "0",
                lineHeight: "0",
              }}
            ></i>
            8%
          </Box>

          <Typography
            component="span"
            sx={{ fontSize: "12px", display: "block" }}
          >
            from last month
          </Typography>
        </Box>

        <Box
          sx={{
            position: "absolute",
            left: "0",
            right: "0",
            bottom: "-30px",
            ml: "-12px",
            mr: "-10px",
          }}
        >
          {isChartLoaded && (
            <Chart
              options={options}
              series={series}
              type="bar"
              height={130}
              width={"100%"}
            />
          )}
        </Box>
      </Card>
    </>
  );
};

export default TotalOrders;
