"use client";

import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import {
  Grid,
  Card,
  Box,
  Typography,
  Menu,
  MenuItem,
  IconButton,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const HospitalEarnings = () => {
  // Dropdown
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // Chart load state
  const [isChartLoaded, setChartLoaded] = useState(false);

  useEffect(() => {
    setChartLoaded(true);
  }, []);

  // Chart series data
  const series = [
    {
      name: "Earnings",
      data: [3, 7, 7, 10, 9, 11, 20],
    },
  ];

  const options = {
    chart: {
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },
    colors: ["#3584FC"],
    dataLabels: {
      enabled: false,
    },
    grid: {
      show: false,
      borderColor: "#ECEEF2",
    },
    stroke: {
      curve: "straight",
      width: 1,
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
        show: false,
        style: {
          colors: "#8695AA",
          fontSize: "12px",
        },
      },
    },
    yaxis: {
      // tickAmount: 6,
      show: false,
      // max: 150,
      // min: 0,
      labels: {
        formatter: (val) => {
          return "$" + val + "k";
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
        size: 7,
        offsetX: -2,
        offsetY: -0.5,
        shape: "diamond",
      },
    },
  };

  return (
    <Card
      sx={{
        bgcolor: "#fff5ed",
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
          justifyContent: "space-between",
          mb: "25px",
        }}
      >
        <Box>
          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: "16px", md: "18px" },
              fontWeight: 700,
            }}
            className="text-black"
          >
            Hospital Earnings
          </Typography>
        </Box>

        <Box>
          <IconButton
            onClick={handleClick}
            size="small"
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            sx={{
              borderRadius: "0px",
              padding: "1px 2px",
              fontSize: "14px",
            }}
          >
            Last Week <KeyboardArrowDownIcon sx={{ fontSize: "20px" }} />
          </IconButton>

          <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: "visible",
                boxShadow: "0 4px 45px #0000001a",
                mt: 0,
              },
            }}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          >
            <MenuItem>Last Day</MenuItem>
            <MenuItem>Last Week</MenuItem>
            <MenuItem>Last Month</MenuItem>
            <MenuItem>Last Year</MenuItem>
          </Menu>
        </Box>
      </Box>

      <Grid
        container
        columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}
        justifyContent="center"
        alignItems="center"
      >
        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 5, xl: 5 }}>
          <Box
            className="text-center"
            sx={{
              mb: { xs: "30px", lg: "0" },
            }}
          >
            <img
              src="/images/hospital.png"
              alt="hospital-image"
              width={280}
              height={280}
            />
          </Box>
        </Grid>

        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 7, xl: 7 }}>
          <Grid
            container
            columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}
            justifyContent="center"
            alignItems="center"
          >
            <Grid size={{ xs: 12, sm: 6 }}>
              <Box
                className="bg-white border-radius he-card"
                sx={{
                  paddingY: { xs: "17px" },
                  paddingX: { xs: "18px", sm: "20px", lg: "25px" },
                  mb: "25px",
                }}
              >
                <Typography
                  component="h3"
                  sx={{
                    fontWeight: "500",
                    fontSize: "24px",
                    mb: "5px",
                    lineHeight: "normal",
                  }}
                >
                  $120,000
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                  }}
                >
                  <Typography
                    component="span"
                    sx={{
                      display: "block",
                      lineHeight: "normal",
                    }}
                  >
                    Total Profit
                  </Typography>

                  <Typography
                    component="span"
                    className="text-danger"
                    sx={{
                      fontSize: "12px",
                    }}
                  >
                    <i className="ri-arrow-down-fill"></i>
                    5%
                  </Typography>
                </Box>
              </Box>
            </Grid>

            <Grid size={{ xs: 12, sm: 6 }}>
              <Box
                className="bg-white border-radius he-card"
                sx={{
                  paddingY: { xs: "17px" },
                  paddingX: { xs: "18px", sm: "20px", lg: "25px" },
                  mb: "25px",
                }}
              >
                <Typography
                  component="h3"
                  sx={{
                    fontWeight: "500",
                    fontSize: "24px",
                    mb: "5px",
                    lineHeight: "normal",
                  }}
                >
                  $80,000
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                  }}
                >
                  <Typography
                    component="span"
                    sx={{
                      display: "block",
                      lineHeight: "normal",
                    }}
                  >
                    Total Costs
                  </Typography>

                  <Typography
                    component="span"
                    className="text-success"
                    sx={{
                      fontSize: "12px",
                    }}
                  >
                    <i className="ri-arrow-up-fill"></i>
                    3%
                  </Typography>
                </Box>
              </Box>
            </Grid>

            <Grid size={{ xs: 12, sm: 12 }}>
              <Box
                className="bg-white border-radius he-card"
                sx={{
                  position: "relative",
                  padding: { xs: "18px", sm: "20px", lg: "25px" },
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Box>
                  <Typography
                    component="h3"
                    sx={{
                      fontWeight: "500",
                      fontSize: "24px",
                      mb: "5px",
                      lineHeight: "normal",
                      display: "flex",
                      alignItems: "center",
                      gap: "5px",
                    }}
                  >
                    $900,000
                    <Typography
                      component="span"
                      className="text-success"
                      sx={{
                        fontSize: "12px",
                      }}
                    >
                      <i className="ri-arrow-up-fill"></i>
                      12%
                    </Typography>
                  </Typography>

                  <Typography
                    component="span"
                    sx={{
                      display: "block",
                      lineHeight: "normal",
                    }}
                  >
                    Total Earnings
                  </Typography>
                </Box>

                <Box
                  sx={{
                    maxWidth: "150px",
                    marginTop: "-30px",
                    marginBottom: "-30px",
                    marginRight: "-10px",
                  }}
                >
                  {isChartLoaded && (
                    <Chart
                      options={options}
                      series={series}
                      type="area"
                      height={95}
                      width={"100%"}
                    />
                  )}
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
};

export default HospitalEarnings;
