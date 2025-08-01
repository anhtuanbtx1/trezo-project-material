"use client";

import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import {
  Card,
  Box,
  Typography,
  MenuItem,
  IconButton,
  Menu,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const CustomerSegmentation = () => {
  // Dropdown
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // Chart
  const [isChartLoaded, setChartLoaded] = useState(false);

  useEffect(() => {
    setChartLoaded(true);
  }, []);

  const series = [1200, 1800];

  const options = {
    chart: {
      toolbar: {
        show: false,
      },
    },
    labels: ["New Customers", "Returning Customers"],
    colors: ["#3584FC", "#AD63F6"],
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
    plotOptions: {
      pie: {
        expandOnClick: false,
        donut: {
          size: "80%",
          labels: {
            show: true,
            name: {
              color: "#64748B",
            },
            value: {
              show: true,
              color: "#64748B",
              fontSize: "24px",
              fontWeight: "600",
              offsetY: -0,
            },
            total: {
              show: true,
              color: "#64748B",
              fontSize: "14px",
              fontWeight: "400",
            },
          },
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    tooltip: {
      enabled: false,
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
            Customer Segmentation
          </Typography>

          <Box className="-mr-10">
            <IconButton
              onClick={handleClick}
              size="small"
              aria-controls={open ? "account-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              sx={{
                padding: "0",
              }}
            >
              <MoreVertIcon sx={{ fontSize: "22px" }} />
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
              <MenuItem>Today</MenuItem>
              <MenuItem>Last 7 Days</MenuItem>
              <MenuItem>Last Month</MenuItem>
              <MenuItem>Last 1 Year</MenuItem>
              <MenuItem>All Time</MenuItem>
            </Menu>
          </Box>
        </Box>

        <Box
          className="bg-white border-top"
          sx={{
            padding: "24px",
            borderRadius: "7px 7px 0 0",
          }}
        >
          {isChartLoaded && (
            <Chart
              options={options}
              series={series}
              type="donut"
              height={213}
              width={"100%"}
            />
          )}

          <Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                mt: "26px",
              }}
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
                    src="/images/pos-system/new-customers-icon.svg"
                    alt="new-customers-icon"
                    width={24}
                    height={24}
                  />
                </Box>
              </Box>

              <Box>
                <span>New Customers</span>

                <Typography
                  variant="h3"
                  sx={{ fontSize: { xs: "18px", md: "20px", mb: "0" } }}
                >
                  1,200{" "}
                  <span
                    className="text-body"
                    style={{ fontSize: "12px", fontWeight: 400 }}
                  >
                    <span style={{ fontWeight: 500 }}>+40%</span> of total
                    transactions
                  </span>
                </Typography>
              </Box>
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                mt: "26px",
              }}
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
                    src="/images/pos-system/returning-customers-icon.svg"
                    alt="returning-customers-icon"
                    width={24}
                    height={24}
                  />
                </Box>
              </Box>

              <Box>
                <span>Returning Customers</span>

                <Typography
                  variant="h3"
                  sx={{ fontSize: { xs: "18px", md: "20px", mb: "0" } }}
                >
                  1,800{" "}
                  <span
                    className="text-body"
                    style={{ fontSize: "12px", fontWeight: 400 }}
                  >
                    <span style={{ fontWeight: 500 }}>+60%</span> of total
                    transactions
                  </span>
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Card>
    </>
  );
};

export default CustomerSegmentation;
