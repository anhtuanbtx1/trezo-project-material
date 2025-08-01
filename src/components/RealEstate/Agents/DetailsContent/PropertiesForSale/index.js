"use client";

import React, { useEffect, useState } from "react";
import Chart from 'react-apexcharts';
import { Card, Box, Typography } from "@mui/material";

const PropertiesForSale = () => {
  const [isChartLoaded, setChartLoaded] = useState(false);

  useEffect(() => {
    setChartLoaded(true);
  }, []);

  const series = [75];

  const options = {
    colors: ["#37D80A"],
    plotOptions: {
      radialBar: {
        hollow: {
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
          boxShadow: "none",
          borderRadius: "7px",
          mb: "25px",
          padding: "20px",
          position: "relative",
        }}
        className="rmui-card border"
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography
            component={"span"}
            sx={{
              display: "inline-block",
              px: "8.5px",
              py: "3px",
              border: "1px solid",
              borderColor: "success.300",
              borderRadius: "100px",
              color: "success.700",
              bgcolor: "success.100",
              fontSize: "12px",
              lineHeight: "1",
            }}
          >
            +75%
          </Typography>

          <Typography component={"span"} sx={{ fontSize: "12px" }}>
            Last 30 days
          </Typography>
        </Box>

        <Box sx={{ height: "70px" }}></Box>

        <Typography sx={{ mb: "4px" }}>Properties for Sale</Typography>

        <Typography
          component={"span"}
          className="text-black"
          sx={{ fontSize: "20px", fontWeight: "700" }}
        >
          5,458
        </Typography>

        <Box
          sx={{
            position: "absolute",
            bottom: "-10px", 
          }}
          className="-po-right-80"
        >
          {isChartLoaded && (
            <Chart
              options={options}
              series={series}
              type="radialBar"
              height={155}
              width={"100%"}
            />
          )}
        </Box>
      </Card>
    </>
  );
};

export default PropertiesForSale;
