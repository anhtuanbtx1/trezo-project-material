"use client";

import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import {
  Card,
  Box,
  Typography,
  Menu,
  MenuItem,
  IconButton,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert"; 

const EmployeeSalary = () => {
  // Dropdown
  const [anchorEl, setAnchorEl] = useState(null);
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

  const data = [70, 60, 80, 100, 70, 40, 80];
  const middleIndex = Math.floor(data.length / 2);

  const series = [
    {
      name: "Employee Salary",
      data: data,
    },
  ];

  const options = {
    chart: {
      toolbar: {
        show: false,
      },
    },
    colors: data.map((_, index) =>
      index === middleIndex ? "#9135E8" : "#E9D5FF"
    ),
    plotOptions: {
      bar: {
        columnWidth: "22px",
        borderRadius: 4,
        distributed: true,
        horizontal: false,
      },
    },
    grid: {
      show: false,
      borderColor: "#ECEEF2",
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
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
      show: false,
      tickAmount: 5,
      labels: {
        formatter: (val) => {
          return "$" + val + "K";
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
    tooltip: {
      y: {
        formatter: function (val) {
          return "$" + val + "k";
        },
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
        size: 6,
        offsetX: -2,
        offsetY: -0.5,
        shape: "square",
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
            Employee Salary
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

        <Box sx={{ display: "flex", alignContent: "center", gap: "12px" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "primary.100",
              borderRadius: "4px",
              width: "42px",
              height: "42px",
            }}
          >
            <img
              src="/images/icons/total-payroll.svg"
              alt="total-payroll"
              width={26}
              height={26}
            />
          </Box>

          <Box>
            <Typography component={"span"} sx={{ display: "block" }}>
              Total Payroll
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
              $450,000
            </Typography>
          </Box>
        </Box>

        <Box sx={{ mt: { xl: "5px" }, mb: { xl: "10px" } }}>
          {isChartLoaded && (
            <Chart
              options={options}
              series={series}
              type="bar"
              height={283}
              width={"100%"}
            />
          )}
        </Box>

        <Box
          sx={{
            display: { xs: "flex", sm: "flex" },
            alignItems: "center",
            gap: { xs: "20px", sm: "30px" },
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "success.100",
                borderRadius: "4px",
                width: "42px",
                height: "42px",
              }}
            >
              <img
                src="/images/icons/salary-paid.svg"
                alt="salary-paid"
                width={26}
                height={26}
              />
            </Box>

            <Box>
              <Typography component={"span"} sx={{ display: "block" }}>
                Salary Paid
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
                $395k
              </Typography>
            </Box>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "orange.100",
                borderRadius: "4px",
                width: "42px",
                height: "42px",
              }}
            >
              <img
                src="/images/icons/salary-pending.svg"
                alt="salary-pending"
                width={26}
                height={26}
              />
            </Box>

            <Box>
              <Typography component={"span"} sx={{ display: "block" }}>
                Salary Pending
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
                $60k
              </Typography>
            </Box>
          </Box>
        </Box>
      </Card>
    </>
  );
};

export default EmployeeSalary;
