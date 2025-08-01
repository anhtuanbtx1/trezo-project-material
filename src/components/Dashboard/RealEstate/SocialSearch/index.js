"use client";

import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { Card, Box, Typography } from "@mui/material";

const SocialSearch = () => {
  // Chart
    const [isChartLoaded, setChartLoaded] = useState(false);
  
    useEffect(() => {
      setChartLoaded(true);
    }, []);

  const series = [35, 50, 60, 70];

  const options = {
    chart: {
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      radialBar: {
        hollow: {
          size: "40%",
        },
        dataLabels: {
          show: true,
          name: {
            offsetY: -10,
            fontSize: "14px",
            color: "#64748B",
            fontWeight: "400",
          },
          value: {
            show: true,
            color: "#3A4252",
            fontSize: "22px",
            fontWeight: "600",
            offsetY: 3,
          },
          total: {
            show: false,
            fontSize: "14px",
            color: "#64748B",
            fontWeight: "400",
          },
        },
      },
    },
    labels: ["Facebook", "Instagram", "Linkedin", "YouTube"],
    colors: ["#AD63F6", "#3584FC", "#37D80A", "#FD5812"],
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
        <Typography
          variant="h3"
          sx={{
            fontSize: { xs: "16px", md: "18px" },
            fontWeight: 700,
            mb: "5px",
          }}
          className="text-black"
        >
          Social Search
        </Typography>

        <Typography component={"span"} fontSize={"12px"}>
          Total traffic in this week
        </Typography>

        <Box
          sx={{
            mb: "-23px",
          }}
        >
          {isChartLoaded && (
            <Chart
              options={options}
              series={series}
              type="radialBar"
              height={262}
              width="100%"
            />
          )}
        </Box>
      </Card>
    </>
  );
};

export default SocialSearch;
