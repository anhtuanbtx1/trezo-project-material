"use client";

import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { Card, Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import styles from "./RealtimeActiveUsers.module.css";

const RealtimeActiveUsers = () => {
  const [isChartLoaded, setChartLoaded] = useState(false);

  useEffect(() => {
    setChartLoaded(true);
  }, []);

  const series = [
    {
      name: "Users",
      data: [
        100, 90, 85, 95, 100, 100, 90, 85, 95, 100, 100, 90, 85, 95, 100, 100,
        90, 85, 95, 100, 100, 90, 85, 95, 100, 100, 90, 85, 95, 100,
      ],
    },
  ];

  const options = {
    chart: {
      toolbar: { show: false },
    },
    colors: ["#757DFF"],
    plotOptions: {
      bar: { columnWidth: "100%" },
    },
    grid: { show: false },
    dataLabels: { enabled: false },
    stroke: {
      width: 3,
      show: true,
      colors: ["transparent"],
    },
    xaxis: {
      axisTicks: { show: false },
      axisBorder: { show: false },
      labels: { show: false },
    },
    yaxis: {
      tickAmount: 5,
      max: 100,
      min: 0,
      labels: { show: false },
      axisBorder: { show: false },
      axisTicks: { show: false },
    },
    legend: { show: false },
  };

  const topPages = [
    { path: "/reports/trends-analysis", views: 1520 },
    { path: "/monitoring/user-activity", views: 980 },
    { path: "/specific/industry-comparisons", views: 856 },
    { path: "/global-reach-2023/statistics", views: 735 },
    { path: "/security-alerts/2024-update", views: 520 },
  ];

  return (
    <Card
      sx={{
        bgcolor: "#4936F5",
        position: "relative",
        boxShadow: "none",
        borderRadius: "7px",
        mb: "25px",
        padding: { xs: "18px", sm: "20px", lg: "25px" },
      }}
    >
      <Typography
        variant="h5"
        sx={{
          color: "#fff",
          fontSize: "15px",
          mb: "5px",
        }}
      >
        Realtime Active Users
      </Typography>

      <Typography
        variant="h5"
        sx={{
          fontSize: 36,
          fontWeight: 700,
          mb: { xs: "25px", md: "35px" },
          color: "#fff",
        }}
      >
        4,890
      </Typography>

      <Typography
        sx={{
          fontSize: "14px",
          color: "#fff",
          pb: "5px",
          borderBottom: "1px solid #605DFF",
        }}
      >
        Page views per second
      </Typography>

      <Box sx={{ marginLeft: "-30px", marginRight: "-17px" }}>
        {isChartLoaded && (
          <Chart
            options={options}
            series={series}
            type="bar"
            height={165}
            width={"100%"}
          />
        )}
      </Box>

      <Typography
        sx={{
          fontSize: "13px",
          fontWeight: "600",
          color: "#fff",
          pb: "5px",
          borderBottom: "1px solid #605DFF",
          mb: "10px",
        }}
      >
        Top Active Pages
      </Typography>

      <Box>
        {topPages.map((page, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              pb: "5px",
              mb: "5px",
              borderBottom: "1px solid #605DFF",
              color: "#fff",
            }}
          >
            <Box sx={{ display: "flex", gap: "10px" }}>
              {page.path}{" "}
              <Link to="#" className="text-white">
                <i className="ri-external-link-line"></i>
              </Link>
            </Box>
            <Box>{page.views}</Box>
          </Box>
        ))}
      </Box>

      <Box className="text-end">
        <Link to="#">
          <Button
            variant="outlined"
            sx={{
              borderColor: "#605DFF",
              color: "#fff",
              mt: "20px",
            }}
          >
            All Real-Time Report <i className="ri-arrow-right-s-line"></i>
          </Button>
        </Link>
      </Box>

      <Box className={styles.shape}>
        <img src="/images/shape.png" alt="shape" width={119} height={160} />
      </Box>
    </Card>
  );
};

export default RealtimeActiveUsers;
