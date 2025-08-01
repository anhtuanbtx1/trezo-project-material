"use client";

import React, { useEffect, useState } from "react";
import { Card, Box, Typography, Grid } from "@mui/material";
import CustomDropdown from "./CustomDropdown";
import SalesByCategoryProducts from "./SalesByCategoryProducts";
import Chart from "react-apexcharts";

const SalesAnalytics = () => {
  const [isChartLoaded, setChartLoaded] = useState(false);

  useEffect(() => {
    setChartLoaded(true);
  }, []);

  const series = [
    {
      name: "Sales Over Time",
      data: [60, 80, 50, 60, 70, 40, 80],
    },
  ];

  const options = {
    chart: {
      toolbar: {
        show: false,
      },
    },
    colors: ["#C2CDFF"],
    plotOptions: {
      bar: {
        columnWidth: "30%",
        borderRadius: 4,
      },
    },
    fill: {
      opacity: [0.85, 0.25, 1],
      gradient: {
        inverseColors: false,
        shade: "light",
        type: "vertical",
        opacityFrom: 0.85,
        opacityTo: 0.55,
        stops: [0, 100, 100, 100],
      },
    },
    grid: {
      show: false,
      borderColor: "#ECEEF2",
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: 0,
      show: true,
      colors: ["transparent"],
    },
    xaxis: {
      categories: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
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
          fontFamily: "Inter",
        },
      },
    },
    yaxis: {
      show: false,
      tickAmount: 4,
      labels: {
        style: {
          colors: "#8695AA",
          fontSize: "12px",
          fontFamily: "Inter",
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
    tooltip: {
      y: {
        formatter: (val) => {
          return "$" + val + "K";
        },
      },
    },
    legend: {
      show: true,
      position: "top",
      fontSize: "12px",
      horizontalAlign: "left",
      fontFamily: "Inter",
      fontWeight: 400,
      itemMargin: {
        horizontal: 8,
        vertical: 0,
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
    states: {
      hover: {
        filter: {
          type: "darken",
        },
      },
    },
  };

  return (
    <>
      <Card
        sx={{
          boxShadow: "0px 3px 4px 0px rgba(0, 0, 0, 0.05)",
          borderRadius: "7px",
          mb: "25px",
        }}
        className="rmui-card bg-f6f7f9 border"
      >
        <Box
          sx={{
            padding: "13px 25px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "10px",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontSize: "16px",
              mb: "0",
              fontWeight: "normal",
            }}
          >
            Sales Analytics
          </Typography>

          <Box className="-mr-10">
            <CustomDropdown
              options={["Last Day", "Last Week", "Last Month", "Last Year"]} // Need to change the options also in CustomDropdown file
              onSelect={(value) => console.log(value)}
              defaultLabel="Last Month"
            />
          </Box>
        </Box>

        <Box
          className="bg-white border-top"
          sx={{
            padding: "24px",
            borderRadius: "7px 7px 0 0",
          }}
        >
          <Grid
            container
            alignItems={"center"}
            columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 2 }}
          >
            <Grid size={{ xs: 12, sm: 12, md: 12, lg: 6, xl: 6 }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  mb: "24px",
                  gap: "10px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <Box sx={{ flexShrink: 0 }}>
                    <Box
                      sx={{
                        backgroundColor: "#DDE4FF",
                        width: "44px",
                        height: "44px",
                        borderRadius: "5px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <img
                        src="/images/pos-system/sales-over-time-icon.svg"
                        alt="sales-over-time-icon"
                        width={24}
                        height={24}
                      />
                    </Box>
                  </Box>

                  <Box>
                    <span>Sales Over Time</span>
                    <Typography
                      variant="h3"
                      sx={{
                        fontSize: { xs: "20px", lg: "24px" },
                        fontWeight: 600,
                        mb: "0",
                      }}
                    >
                      $120,000
                    </Typography>
                  </Box>
                </Box>

                <Box
                  sx={{
                    backgroundColor: "#D8FFC8",
                    color: "success.700",
                    padding: "4px 8px",
                    display: "inline-block",
                    borderRadius: "4px",
                  }}
                >
                  +9.1%
                </Box>
              </Box>

              <Typography sx={{ lineHeight: "1.44", maxWidth: "284px" }}>
                Sales have shown a positive trend, with a significant increase
                of 9.1% over the previous month.
              </Typography>
            </Grid>

            <Grid size={{ xs: 12, sm: 12, md: 12, lg: 6, xl: 6 }}>
              <Box sx={{ margin: "-7px -20px -14px 0" }}>
                {isChartLoaded && (
                  <Chart
                    options={options}
                    series={series}
                    type="bar"
                    height={197}
                    width={"100%"}
                  />
                )}
              </Box>
            </Grid>
          </Grid>
        </Box>

        <Box
          className="bg-white border-top"
          sx={{
            paddingTop: "40px",
            paddingBottom: "42px",
            px: "24px",
            borderRadius: "0 0 7px 7px",
          }}
        >
          <Grid container columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 2 }}>
            <Grid size={{ xs: 12, sm: 12, md: 3, lg: 3, xl: 3 }}>
              <SalesByCategoryProducts />
            </Grid>

            <Grid size={{ xs: 12, sm: 12, md: 9, lg: 9, xl: 9 }}>
              <Typography
                variant="h3"
                sx={{
                  fontSize: "16px",
                  fontWeight: "500",
                  mb: "20px",
                }}
              >
                Sales by Category/Products{" "}
                <span
                  className="ext-body"
                  style={{ fontSize: "14px", fontWeight: "normal" }}
                >
                  (Top Performing)
                </span>
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "10px",
                  justifyContent: "space-between",
                }}
              >
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: "10px" }}
                >
                  <Box sx={{ flexShrink: 0 }}>
                    <Box
                      sx={{
                        backgroundColor: "#F3E8FF",
                        width: "44px",
                        height: "44px",
                        borderRadius: "5px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <img
                        src="/images/pos-system/electronics-icon.svg"
                        alt="electronics-icon"
                        width={24}
                        height={24}
                      />
                    </Box>
                  </Box>

                  <Box>
                    <Typography sx={{ fontSize: { xs: "11px", xl: "14px" } }}>
                      Electronics
                    </Typography>
                    <Typography
                      variant="h3"
                      sx={{
                        fontSize: { xs: "14px", xl: "20px" },
                        fontWeight: 600,
                        mb: "0",
                      }}
                    >
                      $35,000
                    </Typography>
                  </Box>
                </Box>

                <Box
                  sx={{ display: "flex", alignItems: "center", gap: "10px" }}
                >
                  <Box sx={{ flexShrink: 0 }}>
                    <Box
                      sx={{
                        backgroundColor: "#D8FFC8",
                        width: "44px",
                        height: "44px",
                        borderRadius: "5px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <img
                        src="/images/pos-system/clothing-icon.svg"
                        alt="clothing-icon"
                        width={24}
                        height={24}
                      />
                    </Box>
                  </Box>
                  <Box>
                    <Typography sx={{ fontSize: { xs: "11px", xl: "14px" } }}>
                      Clothing
                    </Typography>
                    <Typography
                      variant="h3"
                      sx={{
                        fontSize: { xs: "14px", xl: "20px" },
                        fontWeight: 600,
                        mb: "0",
                      }}
                    >
                      $25,000
                    </Typography>
                  </Box>
                </Box>

                <Box
                  sx={{ display: "flex", alignItems: "center", gap: "10px" }}
                >
                  <Box sx={{ flexShrink: 0 }}>
                    <Box
                      sx={{
                        backgroundColor: "#DAEBFF",
                        width: "44px",
                        height: "44px",
                        borderRadius: "5px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <img
                        src="/images/pos-system/home-goods-icon.svg"
                        alt="home-goods-icon"
                        width={24}
                        height={24}
                      />
                    </Box>
                  </Box>
                  <Box>
                    <Typography sx={{ fontSize: { xs: "11px", xl: "14px" } }}>
                      Home Goods
                    </Typography>
                    <Typography
                      variant="h3"
                      sx={{
                        fontSize: { xs: "14px", xl: "20px" },
                        fontWeight: 600,
                        mb: "0",
                      }}
                    >
                      $18,000
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Card>
    </>
  );
};

export default SalesAnalytics;
