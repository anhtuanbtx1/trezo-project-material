"use client";

import React, { useEffect, useState } from "react";
import {
  Card,
  Box,
  Typography,
  Menu,
  MenuItem,
  IconButton,
} from "@mui/material";
import { MoreVert } from "@mui/icons-material";
import Chart from "react-apexcharts";

const FollowersByGender = () => {
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

  const series = [55, 45];

  const options = {
    labels: ["Female Followers", "Male Followers"],
    colors: ["#605DFF", "#AD63F6"],
    dataLabels: {
      enabled: false,
      style: {
        fontSize: "10px",
        fontFamily: "Inter",
        colors: ["#fff"],
      },
      dropShadow: {
        enabled: true,
        top: 0,
        left: 0,
        blur: 0,
        color: "#000",
        opacity: 0,
      },
    },
    plotOptions: {
      pie: {
        expandOnClick: false,
      },
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return val + "%";
        },
      },
    },
    stroke: {
      width: 1,
      show: true,
      colors: ["#ffffff"],
    },
    legend: {
      show: false,
      position: "bottom",
      horizontalAlign: "center",
      fontWeight: 400,
      fontFamily: "Inter",
      fontSize: "12",
      offsetY: 0,
      labels: {
        colors: ["#64748B", "#64748B"],
      },
      itemMargin: {
        horizontal: 10,
        vertical: 5,
      },
      markers: {
        offsetX: -2,
        offsetY: -0.5,
        shape: "diamond",
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
              Followers by Gender
            </Typography>

            <Typography sx={{ color: "#8695aa", fontSize: "14px", mb: "0" }}>
              Understand your audience better!
            </Typography>
          </Box>

          <Box>
            <IconButton
              onClick={handleClick}
              size="small"
              aria-controls={open ? "account-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              sx={{ padding: "0" }}
            >
              <MoreVert sx={{ fontSize: "25px" }} />
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
              <MenuItem sx={{ gap: "5px" }}>
                <i
                  className="material-symbols-outlined"
                  style={{ fontSize: "20px" }}
                >
                  schedule
                </i>
                Today
              </MenuItem>
              <MenuItem sx={{ gap: "5px" }}>
                <i
                  className="material-symbols-outlined"
                  style={{ fontSize: "20px" }}
                >
                  pie_chart
                </i>
                Last 7 Days
              </MenuItem>
              <MenuItem sx={{ gap: "5px" }}>
                <i
                  className="material-symbols-outlined"
                  style={{ fontSize: "20px" }}
                >
                  refresh
                </i>
                Last Month
              </MenuItem>
              <MenuItem sx={{ gap: "5px" }}>
                <i
                  className="material-symbols-outlined"
                  style={{ fontSize: "20px" }}
                >
                  calendar_today
                </i>
                Last 1 Year
              </MenuItem>
              <MenuItem sx={{ gap: "5px" }}>
                <i
                  className="material-symbols-outlined"
                  style={{ fontSize: "20px" }}
                >
                  bar_chart
                </i>
                All Time
              </MenuItem>
              <MenuItem sx={{ gap: "5px" }}>
                <i
                  className="material-symbols-outlined"
                  style={{ fontSize: "20px" }}
                >
                  visibility
                </i>
                View
              </MenuItem>
              <MenuItem sx={{ gap: "5px" }}>
                <i
                  className="material-symbols-outlined"
                  style={{ fontSize: "20px" }}
                >
                  delete
                </i>
                Delete
              </MenuItem>
            </Menu>
          </Box>
        </Box>

        <Box sx={{ textAlign: "center", mb: "18px" }}>
          <Typography
            variant="h3"
            sx={{ fontSize: "16px", fontWeight: 500, mb: "0" }}
          >
            54,500
          </Typography>
          <Typography fontSize={"12px"}>Total Followers</Typography>
        </Box>

        <Box>
          {isChartLoaded && (
            <Chart
              options={options}
              series={series}
              type="pie"
              height={192}
              width={"100%"}
            />
          )}
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "5px",
            mt: "18px",
          }}
        >
          <Box sx={{ display: "flex", gap: "10px" }}>
            <Box
              sx={{
                width: "10px",
                height: "10px",
                bgcolor: "primary.main",
                borderRadius: "50%",
              }}
            ></Box>

            <Box>
              <Typography
                sx={{
                  fontWeight: 500,
                  color: "#3a4252",
                  lineHeight: "1",
                  mb: "3px",
                }}
              >
                55%
              </Typography>

              <Typography sx={{ fontSize: "12px", mb: "0" }}>
                Male Followers
              </Typography>
            </Box>
          </Box>

          <Box sx={{ display: "flex", gap: "10px" }}>
            <Box
              sx={{
                width: "10px",
                height: "10px",
                bgcolor: "primary.main",
                borderRadius: "50%",
              }}
            ></Box>
            <Box>
              <Typography
                sx={{
                  fontWeight: 500,
                  color: "#3a4252",
                  lineHeight: "1",
                  mb: "3px",
                }}
              >
                43%
              </Typography>

              <Typography sx={{ fontSize: "12px", mb: "0" }}>
                Female Followers
              </Typography>
            </Box>
          </Box>
        </Box>
      </Card>
    </>
  );
};

export default FollowersByGender;
