"use client";

import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import {
  Card,
  Box,
  Typography,
  Menu,
  MenuItem,
  Grid,
  IconButton,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const BedOccupancyRate = () => {
  // Dropdown
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // Chart state
  const [isChartLoaded, setChartLoaded] = useState(false);

  useEffect(() => {
    setChartLoaded(true);
  }, []);

  const series = [1275, 825, 450];

  const options = {
    labels: ["Total Beds", "Occupied Beds", "Available Beds"],
    colors: ["#1F64F1", "#BF85FB", "#37D80A"],
    stroke: {
      width: 1,
      show: true,
      colors: ["#ffffff"],
    },
    legend: {
      show: false,
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
    plotOptions: {
      pie: {
        expandOnClick: false,
        donut: {
          labels: {
            show: false,
            name: {
              color: "#64748B",
            },
            value: {
              show: true,
              color: "#3A4252",
              fontSize: "22px",
              fontWeight: "600",
            },
            total: {
              show: true,
              color: "#64748B",
            },
          },
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    tooltip: {
      enabled: true,
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
        className="rmui-card"
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mb: "15px",
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
              Bed Occupancy Rate
            </Typography>

            <Typography sx={{ mt: "2px !important" }}>
              Currently occupied vs. available.
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
              Today <KeyboardArrowDownIcon sx={{ fontSize: "20px" }} />
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
                  "& .MuiAvatar-root": {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                },
              }}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
              <MenuItem>This Day</MenuItem>
              <MenuItem>This Week</MenuItem>
              <MenuItem>This Month</MenuItem>
              <MenuItem>This Year</MenuItem>
            </Menu>
          </Box>
        </Box>

        <Grid
          container
          columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}
          justifyContent="center"
          alignItems="center"
        >
          <Grid size={{ xs: 12, sm: 6 }}>
            <Box
              sx={{
                "& > div:last-child": { mb: 0 },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  mb: "25px",
                }}
              >
                <Box
                  className="bg-secondary-100 text-secondary border-radius"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "42px",
                    height: "42px",
                  }}
                >
                  <i className="material-symbols-outlined">airplay</i>
                </Box>

                <Box>
                  <Typography
                    component="span"
                    className="text-black"
                    sx={{
                      display: "block",
                      fontWeight: "600",
                      fontSize: "18px",
                      mb: "0",
                      lineHeight: "normal",
                    }}
                  >
                    1,275
                  </Typography>
                  <Typography
                    sx={{
                      display: "block",
                    }}
                  >
                    Total Beds
                  </Typography>
                </Box>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  mb: "25px",
                }}
              >
                <Box
                  className="text-purple bg-purple-100 border-radius"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "42px",
                    height: "42px",
                  }}
                >
                  <i className="material-symbols-outlined">bed</i>
                </Box>

                <Box>
                  <Typography
                    component="span"
                    className="text-black"
                    sx={{
                      display: "block",
                      fontWeight: "600",
                      fontSize: "18px",
                      mb: "0",
                      lineHeight: "normal",
                    }}
                  >
                    825
                  </Typography>

                  <Typography
                    sx={{
                      display: "block",
                    }}
                  >
                    Occupied Beds
                  </Typography>
                </Box>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  mb: "25px",
                }}
              >
                <Box
                  className="text-success border-radius"
                  sx={{
                    bgcolor: "success.100",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "42px",
                    height: "42px",
                  }}
                >
                  <i className="material-symbols-outlined">
                    featured_seasonal_and_gifts
                  </i>
                </Box>

                <Box>
                  <Typography
                    component="span"
                    className="text-black"
                    sx={{
                      display: "block",
                      fontWeight: "600",
                      fontSize: "18px",
                      mb: "0",
                      lineHeight: "normal",
                    }}
                  >
                    450
                  </Typography>

                  <Typography
                    sx={{
                      display: "block",
                    }}
                  >
                    Available Beds
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, sm: 6 }}>
            <div>
              {isChartLoaded && (
                <Chart
                  options={options}
                  series={series}
                  type="donut"
                  height={155}
                  width={"100%"}
                />
              )}

              <Box
                sx={{
                  fontSize: "12px",
                  lineHeight: "1.6",
                  maxWidth: "190px",
                  marginX: "auto",
                  textAlign: "center",
                }}
              >
                The donut or pie chart representing the occupancy rate.
              </Box>
            </div>
          </Grid>
        </Grid>
      </Card>
    </>
  );
};

export default BedOccupancyRate;
