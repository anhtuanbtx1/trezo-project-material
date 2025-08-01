"use client";

import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { Card, Box, Typography } from "@mui/material";

const NewEmployees = () => {
  // Chart
  const [isChartLoaded, setChartLoaded] = useState(false);

  useEffect(() => {
    setChartLoaded(true);
  }, []);

  const series = [30];

  const options = {
    chart: {
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },
    colors: ["#9135E8"],
    plotOptions: {
      radialBar: {
        track: {
          background: "#EDEEF0",
        },
        dataLabels: {
          name: {
            show: false,
          },
          value: {
            show: true,
            offsetY: 5,
            fontWeight: 500,
            color: "#9135E8",
            fontSize: "14px",
          },
        },
      },
    },
    stroke: {
      lineCap: "round",
    },
  };

  return (
    <>
      <Card
        sx={{
          boxShadow: "none",
          borderRadius: "7px",
          mb: "25px",
          padding: { xs: "18px", sm: "20px", lg: "30px" },
        }}
        className="rmui-card"
      >
        <Box
          sx={{
            position: "relative",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <Box
              sx={{
                bgcolor: "purple.600",
                borderRadius: "4px",
                width: "44px",
                height: "44px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
              }}
            >
              <i className="material-symbols-outlined">person_add</i>
            </Box>

            <Box>
              <Typography component={"span"} sx={{ display: "block" }}>
                New Employees
              </Typography>

              <Typography
                variant="h5"
                sx={{
                  mb: "0",
                  mt: "2px",
                  fontSize: "20px",
                  fontWeight: "600",
                }}
              >
                8,24
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{
              mt: "32px",
              display: "flex",
              alignItems: "center",
              gap: "7px",
            }}
          >
            <Box
              sx={{
                bgcolor: "success.100",
                color: "success.700",
                borderRadius: "4px",
                width: "26px",
                height: "26px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "18px",
              }}
            >
              <i className="ri-arrow-right-up-line"></i>
            </Box>

            <Box className="text-gray-600 dark:text-gray-400">
              <Typography
                component={"span"}
                sx={{ fontWeight: "500", color: "grey.700" }}
              >
                +10%
              </Typography>{" "}
              last year
            </Box>
          </Box>

          <Box
            sx={{
              position: "absolute",
              top: "50%",
              transform: "translateY(-50%)",
              maxWidth: "125px",
            }}
            className="po-right-0 -mr-10"
          >
            {isChartLoaded && (
              <Chart
                options={options}
                series={series}
                type="radialBar"
                height={140}
                width={"100%"}
              />
            )}
          </Box>
        </Box>
      </Card>
    </>
  );
};

export default NewEmployees;
