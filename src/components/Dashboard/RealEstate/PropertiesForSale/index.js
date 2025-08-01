"use client";

import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { Box, Typography, Card } from "@mui/material";

const PropertiesForSale = () => {
  // Chart state to track if it's loaded
  const [isChartLoaded, setChartLoaded] = useState(false);

  useEffect(() => {
    setChartLoaded(true);
  }, []);

  const series = [75];

  const options = {
    chart: {
      toolbar: {
        show: false,
      },
    },
    colors: ["#37D80A"],
    plotOptions: {
      radialBar: {
        hollow: {
          margin: 10,
          size: "45%",
          background: "#F5F7F8",
        },
        track: {
          background: "#F5F7F8",
        },
        dataLabels: {
          name: {
            show: false,
            offsetY: -10,
            color: "#4b9bfa",
            fontSize: ".625rem",
          },
          value: {
            offsetY: 5,
            show: true,
            fontWeight: 700,
            color: "#3A4252",
            fontSize: "14px",
          },
        },
      },
    },
    labels: ["Status"],
  };

  return (
    <>
      <Card
        sx={{
          position: "relative",
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
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "inline-block",
              px: "8.5px",
              color: "success.700",
              border: "1px solid",
              borderColor: "success.300",
              backgroundColor: "success.100",
              borderRadius: "100px",
              fontSize: "12px",
            }}
          >
            +75%
          </Box>
          <Typography
            component="span"
            sx={{ display: "block", fontSize: "12px" }}
          >
            Last 30 days
          </Typography>
        </Box>

        <Box sx={{ height: "68px" }}></Box>

        <Typography component="span" sx={{ display: "block", mb: "2px" }}>
          Properties for Sale
        </Typography>

        <Typography
          component="h3"
          sx={{ mb: "0", fontSize: "20px", fontWeight: "700" }}
        >
          5,458
        </Typography>

        <Box
          className="po-right-minus-70"
          sx={{
            position: "absolute",
            bottom: "-8px",
          }}
        >
          {isChartLoaded && (
            <Chart
              options={options}
              series={series}
              type="radialBar"
              height={150}
              width="100%"
            />
          )}
        </Box>
      </Card>
    </>
  );
};

export default PropertiesForSale;
