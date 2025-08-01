"use client";

import React, { useEffect, useState } from "react";
import { Card, Box, Typography } from "@mui/material";
import CustomDropdown from "./CustomDropdown";
import Grid from "@mui/material/Grid";
import Chart from "react-apexcharts";

const FacebookCampaignOverview = () => {
  // Chart
  const [isChartLoaded, setChartLoaded] = useState(false);

  useEffect(() => {
    setChartLoaded(true);
  }, []);

  const series = [
    {
      name: "Impressions",
      type: "column",
      data: [400, 600, 300, 700, 450, 400, 600],
    },
    {
      name: "Cost per Conversion",
      type: "line",
      data: [500, 700, 600, 900, 700, 800, 950],
    },
    {
      name: "Clicks",
      type: "column",
      data: [500, 380, 500, 600, 340, 400, 250],
    },
    {
      name: "CTR",
      type: "column",
      data: [400, 350, 300, 250, 500, 600, 400],
    },
  ];

  const options = {
    chart: {
      toolbar: {
        show: false,
      },
    },
    colors: ["#605DFF", "#BF85FB", "#37D80A", "#FD5812"],
    grid: {
      borderColor: "#ECEEF2",
      strokeDashArray: 8,
      xaxis: {
        lines: {
          show: false,
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: [2, 2.1],
      curve: ["straight", "smooth"],
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "July"],
      axisTicks: {
        show: false,
        color: "#ECEEF2",
      },
      axisBorder: {
        show: true,
        color: "#D5D9E2",
      },
      labels: {
        show: true,
        style: {
          colors: "#64748B",
          fontSize: "12px",
          fontWeight: 400,
          fontFamily: "Inter",
        },
      },
    },
    yaxis: {
      tickAmount: 5,
      max: 1000,
      min: 0,
      labels: {
        style: {
          colors: "#64748B",
          fontSize: "12px",
          fontWeight: 400,
          fontFamily: "Inter",
        },
        formatter: (val) => {
          return "$" + val + "";
        },
      },
      axisBorder: {
        show: true,
        color: "#D5D9E2",
      },
      axisTicks: {
        show: false,
        color: "#ECEEF2",
      },
    },
    legend: {
      show: false,
    },
    plotOptions: {
      bar: {
        columnWidth: "25%",
        borderRadius: 2,
      },
    },
    tooltip: {
      y: {
        formatter: (val) => {
          return "$" + val + "";
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
        className="rmui-card border"
      >
        <Box
          sx={{
            display: { xs: "block", sm: "flex" },
            alignItems: "center",
            justifyContent: "space-between",
            mb: "25px",
          }}
        >
          <Box>
            <Typography
              variant="h3"
              sx={{
                fontSize: { xs: "16px", md: "20px" },
                fontWeight: 700,
              }}
              className="text-black"
            >
              Facebook Campaign Overview
            </Typography>

            <Typography sx={{ color: "#8695aa" }}>
              Track campaign success at a glance!
            </Typography>
          </Box>

          <Box sx={{ mt: { xs: 2, sm: 0 } }}>
            <CustomDropdown
              options={[
                "Sep 1 - Sep 30",
                "Jun 1 - Jun 30",
                "Apr 1 - Apr 30",
                "May 1 - May 30",
              ]} // Need to change the options also in CustomDropdown file
              onSelect={(value) => console.log(value)}
              defaultLabel="Sep 1 - Sep 30"
            />
          </Box>
        </Box>

        <Grid
          container
          columnSpacing={{ xs: 1, sm: 2, md: 3, lg: 3 }}
          justifyContent="center"
        >
          <Grid size={{ xs: 12, sm: 8, lg: 9, xl: 9 }}>
            <Box
              sx={{
                margin: "-4px -10px -26px -17px",
              }}
            >
              {isChartLoaded && (
                <Chart
                  options={options}
                  series={series}
                  type="line"
                  height={308}
                  width={"100%"}
                />
              )}
            </Box>
          </Grid>

          <Grid size={{ xs: 12, sm: 4, lg: 3, xl: 3 }}>
            <Box
              sx={{
                display: { xs: "flex", sm: "block" },
                flexWrap: "wrap",
                gap: { xs: "20px", sm: "0px" },
              }}
            >
              <Box sx={{ display: "flex", mt: "24px", gap: "10px" }}>
                <Box
                  sx={{
                    backgroundColor: "primary.main",
                    borderRadius: "50%",
                    width: "10px",
                    height: "10px",
                  }}
                ></Box>

                <Box>
                  <Typography
                    sx={{
                      fontWeight: 500,
                      display: "block",
                      lineHeight: 1,
                      mb: 0,
                    }}
                    className="text-black"
                  >
                    45,000
                  </Typography>

                  <Typography component={"span"} fontSize={12}>
                    Impressions
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ display: "flex", mt: "24px", gap: "10px" }}>
                <Box
                  sx={{
                    backgroundColor: "success.main",
                    borderRadius: "50%",
                    width: "10px",
                    height: "10px",
                  }}
                ></Box>

                <Box>
                  <Typography
                    sx={{
                      fontWeight: 500,
                      display: "block",
                      lineHeight: 1,
                      mb: 0,
                    }}
                    className="text-black"
                  >
                    4,200
                  </Typography>

                  <Typography component={"span"} fontSize={12}>
                    Clicks
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ display: "flex", mt: "24px", gap: "10px" }}>
                <Box
                  sx={{
                    backgroundColor: "orange.main",
                    borderRadius: "50%",
                    width: "10px",
                    height: "10px",
                  }}
                ></Box>

                <Box>
                  <Typography
                    sx={{
                      fontWeight: 500,
                      display: "block",
                      lineHeight: 1,
                      mb: 0,
                    }}
                    className="text-black"
                  >
                    9.3%
                  </Typography>

                  <Typography component={"span"} fontSize={12}>
                    CTR
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ display: "flex", mt: "24px", gap: "10px" }}>
                <Box
                  sx={{
                    backgroundColor: "purple.main",
                    borderRadius: "50%",
                    width: "10px",
                    height: "10px",
                  }}
                ></Box>

                <Box>
                  <Typography
                    sx={{
                      fontWeight: 500,
                      display: "block",
                      lineHeight: 1,
                      mb: 0,
                    }}
                    className="text-black"
                  >
                    $5.50
                  </Typography>

                  <Typography component={"span"} fontSize={12}>
                    Cost per Conversion
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Card>
    </>
  );
};

export default FacebookCampaignOverview;
