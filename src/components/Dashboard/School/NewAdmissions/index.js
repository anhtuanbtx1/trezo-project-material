"use client";

import React, { useEffect, useState } from "react";
import Chart from 'react-apexcharts';
import {
  Card,
  Box,
  Typography,
  Menu,
  MenuItem,
  IconButton,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const NewAdmissions = () => {
  // Dropdown
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // Chart
  const [isChartLoaded, setChartLoaded] = useState(false);

  useEffect(() => {
    setChartLoaded(true);
  }, []);

  const series = [45, 220, 180, 375, 455];

  const options = {
    labels: ["Music", "History", "Art", "English", "Mathematics"],
    colors: ["#90C7FF", "#AD63F6", "#605DFF", "#FD5812", "#37D80A"],
    stroke: {
      show: false,
    },
    plotOptions: {
      pie: {
        expandOnClick: false,
        donut: {
          size: "75%",
          labels: {
            show: true,
            name: {
              color: "#64748B",
            },
            value: {
              show: true,
              color: "#3A4252",
              fontSize: "28px",
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
      enabled: false,
    },
    legend: {
      show: true,
      fontSize: "13px",
      position: "bottom",
      horizontalAlign: "center",
      itemMargin: {
        horizontal: 10,
        vertical: 9,
      },
      labels: {
        colors: "#64748B",
      },
      markers: {
        size: 6,
        offsetX: -2,
        shape: "circle",
      },
      formatter: function (seriesName, opts) {
        return (
          seriesName +
          ": <strong>" +
          opts.w.globals.series[opts.seriesIndex] +
          "</strong>"
        );
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
          p: { xs: "18px", sm: "20px", lg: "25px" },
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
          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: "16px", md: "18px" },
              fontWeight: 700,
            }}
            className="text-black"
          >
            New Admissions
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
              <MoreVertIcon sx={{ fontSize: "25px" }} />
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
                  width: "150px",
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

        <Box sx={{ mt: "-8px" }}>
          {isChartLoaded && (
            <Chart
              options={options}
              series={series}
              type="donut"
              height={381}
              width={"100%"}
            />
          )}
        </Box>
      </Card>
    </>
  );
};

export default NewAdmissions;
