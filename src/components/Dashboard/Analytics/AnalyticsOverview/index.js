"use client";

import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import {
  Card,
  Box,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

const AnalyticsOverview = () => {
  // Chart
  const [isChartLoaded, setChartLoaded] = useState(false);

  useEffect(() => {
    setChartLoaded(true);
  }, []);

  const series = [
    {
      name: "New users",
      data: [28, 50, 90, 95, 20, 70, 35],
    },
    {
      name: "Page Views",
      data: [80, 60, 70, 30, 45, 20, 80],
    },
    {
      name: "Page Sessions",
      data: [32, 23, 78, 35, 65, 35, 15],
    },
    {
      name: "Bounce Rate",
      data: [60, 25, 80, 25, 15, 40, 15],
    },
  ];

  const options = {
    chart: {
      toolbar: {
        show: false,
      },
    },
    colors: ["#605DFF", "#AD63F6", "#3584FC", "#FD5812"],
    plotOptions: {
      bar: {
        columnWidth: "65%",
        borderRadius: 4,
      },
    },
    grid: {
      show: true,
      borderColor: "#ECEEF2",
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: 3,
      show: true,
      colors: ["transparent"],
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
        show: true,
        style: {
          colors: "#8695AA",
          fontSize: "12px",
        },
      },
    },
    yaxis: {
      tickAmount: 5,
      max: 100,
      min: 0,
      labels: {
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
            display: { sm: "flex" },
            alignItems: "center",
            justifyContent: "space-between",
            mb: "25px",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: "16px", md: "18px" },
              fontWeight: 700,
            }}
            className="text-black"
          >
            Analytics Overview
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              mt: { xs: "10px", sm: "0" },
            }}
          >
            <ButtonGroup variant="outlined" size="small" color="primary">
              <Button
                sx={{
                  textTransform: "capitalize",
                  fontSize: "13px",
                  lineHeight: "normal",
                  padding: "4px 13px",
                }}
              >
                Day
              </Button>
              <Button
                sx={{
                  textTransform: "capitalize",
                  fontSize: "13px",
                  lineHeight: "normal",
                  padding: "4px 13px",
                }}
              >
                Week
              </Button>
              <Button
                sx={{
                  textTransform: "capitalize",
                  fontSize: "13px",
                  lineHeight: "normal",
                  padding: "4px 13px",
                }}
              >
                Month
              </Button>
            </ButtonGroup>
          </Box>
        </Box>

        <Box
          sx={{
            marginTop: "-15px",
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "12px" },
              mb: '15px'
            }}
            className="text-black"
          >
            Track, Analyze, and Optimize Performance
          </Typography>

          <Grid
            container
            columnSpacing={{ xs: 1, sm: 2, md: 3, lg: 2 }}
            justifyContent="center"
          >
            <Grid size={{ xs: 12, md: 12, lg: 8 }}>
              <div
                style={{
                  marginBottom: "-22px",
                  marginLeft: "-15px",
                }}
              >
                {isChartLoaded && (
                  <Chart
                    options={options}
                    series={series}
                    type="bar"
                    height={350}
                    width={"100%"}
                  />
                )}
              </div>
            </Grid>

            <Grid size={{ xs: 12, md: 12, lg: 4 }}>
              <Box>
                <Box sx={{ mt: "25px" }}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      gap: "10px",
                    }}
                  >
                    <Box>
                      <Typography
                        component="span"
                        sx={{
                          fontSize: "12px",
                          display: "block",
                          mb: "5px",
                          lineHeight: "normal",
                        }}
                      >
                        New Users
                      </Typography>

                      <Typography
                        component="h3"
                        sx={{
                          fontWeight: "700",
                          fontSize: "16px",
                          lineHeight: "normal",
                        }}
                      >
                        19.5k
                      </Typography>
                    </Box>

                    <Box sx={{ textAlign: "end" }}>
                      <Typography
                        component="span"
                        sx={{
                          fontSize: "12px",
                          display: "block",
                          mb: "5px",
                          lineHeight: "normal",
                        }}
                      >
                        Goal Reached
                      </Typography>

                      <Typography
                        component="h3"
                        sx={{
                          fontWeight: "700",
                          fontSize: "16px",
                          lineHeight: "normal",
                          color: "#64748B !important",
                        }}
                      >
                        75%
                      </Typography>
                    </Box>
                  </Box>

                  <Box
                    sx={{
                      bgcolor: "#ecf0ff",
                      width: "100%",
                      height: "4px",
                      display: "block",
                      borderRadius: "30px",
                      mt: "10px",
                    }}
                  >
                    <Box
                      sx={{
                        bgcolor: "primary.main",
                        width: "75%",
                        height: "4px",
                        borderRadius: "30px",
                      }}
                    ></Box>
                  </Box>
                </Box>

                <Box sx={{ mt: "25px" }}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      gap: "10px",
                    }}
                  >
                    <Box>
                      <Typography
                        component="span"
                        sx={{
                          fontSize: "12px",
                          display: "block",
                          mb: "5px",
                          lineHeight: "normal",
                        }}
                      >
                        Page Views
                      </Typography>

                      <Typography
                        component="h3"
                        sx={{
                          fontWeight: "700",
                          fontSize: "16px",
                          lineHeight: "normal",
                        }}
                      >
                        48k
                      </Typography>
                    </Box>

                    <Box sx={{ textAlign: "end" }}>
                      <Typography
                        component="span"
                        sx={{
                          fontSize: "12px",
                          display: "block",
                          mb: "5px",
                          lineHeight: "normal",
                        }}
                      >
                        Goal Reached
                      </Typography>

                      <Typography
                        component="h3"
                        sx={{
                          fontWeight: "700",
                          fontSize: "16px",
                          lineHeight: "normal",
                          color: "#64748B !important",
                        }}
                      >
                        45%
                      </Typography>
                    </Box>
                  </Box>

                  <Box
                    sx={{
                      bgcolor: "#ecf0ff",
                      width: "100%",
                      height: "4px",
                      display: "block",
                      borderRadius: "30px",
                      mt: "10px",
                    }}
                  >
                    <Box
                      sx={{
                        bgcolor: "secondary.main",
                        width: "45%",
                        height: "4px",
                        borderRadius: "30px",
                      }}
                    ></Box>
                  </Box>
                </Box>

                <Box sx={{ mt: "25px" }}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      gap: "10px",
                    }}
                  >
                    <Box>
                      <Typography
                        component="span"
                        sx={{
                          fontSize: "12px",
                          display: "block",
                          mb: "5px",
                          lineHeight: "normal",
                        }}
                      >
                        Page Sessions
                      </Typography>

                      <Typography
                        component="h3"
                        sx={{
                          fontWeight: "700",
                          fontSize: "16px",
                          lineHeight: "normal",
                        }}
                      >
                        33.3k
                      </Typography>
                    </Box>

                    <Box sx={{ textAlign: "end" }}>
                      <Typography
                        component="span"
                        sx={{
                          fontSize: "12px",
                          display: "block",
                          mb: "5px",
                          lineHeight: "normal",
                        }}
                      >
                        Goal Reached
                      </Typography>

                      <Typography
                        component="h3"
                        sx={{
                          fontWeight: "700",
                          fontSize: "16px",
                          lineHeight: "normal",
                          color: "#64748B !important",
                        }}
                      >
                        55%
                      </Typography>
                    </Box>
                  </Box>

                  <Box
                    sx={{
                      bgcolor: "#ecf0ff",
                      width: "100%",
                      height: "4px",
                      display: "block",
                      borderRadius: "30px",
                      mt: "10px",
                    }}
                  >
                    <Box
                      sx={{
                        bgcolor: "info.main",
                        width: "55%",
                        height: "4px",
                        borderRadius: "30px",
                      }}
                    ></Box>
                  </Box>
                </Box>

                <Box sx={{ mt: "25px" }}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      gap: "10px",
                    }}
                  >
                    <Box>
                      <Typography
                        component="span"
                        sx={{
                          fontSize: "12px",
                          display: "block",
                          mb: "5px",
                          lineHeight: "normal",
                        }}
                      >
                        Bounce Rate
                      </Typography>

                      <Typography
                        component="h3"
                        sx={{
                          fontWeight: "700",
                          fontSize: "16px",
                          lineHeight: "normal",
                        }}
                      >
                        22.45%
                      </Typography>
                    </Box>

                    <Box sx={{ textAlign: "end" }}>
                      <Typography
                        component="span"
                        sx={{
                          fontSize: "12px",
                          display: "block",
                          mb: "5px",
                          lineHeight: "normal",
                        }}
                      >
                        Goal Reached
                      </Typography>

                      <Typography
                        component="h3"
                        sx={{
                          fontWeight: "700",
                          fontSize: "16px",
                          lineHeight: "normal",
                          color: "#64748B !important",
                        }}
                      >
                        35%
                      </Typography>
                    </Box>
                  </Box>

                  <Box
                    sx={{
                      bgcolor: "#ecf0ff",
                      width: "100%",
                      height: "4px",
                      display: "block",
                      borderRadius: "30px",
                      mt: "10px",
                    }}
                  >
                    <Box
                      sx={{
                        bgcolor: "error.main",
                        width: "35%",
                        height: "4px",
                        borderRadius: "30px",
                      }}
                    ></Box>
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

export default AnalyticsOverview;
