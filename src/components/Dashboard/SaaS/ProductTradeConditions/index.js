"use client";

import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import {
  Card,
  Box,
  Typography,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const ProductTradeConditions = () => {
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

  const series = [
    {
      name: "Price",
      data: [
        {
          x: new Date(1538778600000),
          y: [6629.81, 6650.5, 6623.04, 6633.33],
        },
        {
          x: new Date(1538780400000),
          y: [6632.01, 6643.59, 6620, 6630.11],
        },
        {
          x: new Date(1538782200000),
          y: [6630.71, 6648.95, 6623.34, 6635.65],
        },
        {
          x: new Date(1538784000000),
          y: [6635.65, 6651, 6629.67, 6638.24],
        },
        {
          x: new Date(1538785800000),
          y: [6638.24, 6640, 6620, 6624.47],
        },
        {
          x: new Date(1538787600000),
          y: [6624.53, 6636.03, 6621.68, 6624.31],
        },
        {
          x: new Date(1538789400000),
          y: [6624.61, 6632.2, 6617, 6626.02],
        },
        {
          x: new Date(1538791200000),
          y: [6627, 6627.62, 6584.22, 6603.02],
        },
        {
          x: new Date(1538793000000),
          y: [6605, 6608.03, 6598.95, 6604.01],
        },
        {
          x: new Date(1538794800000),
          y: [6604.5, 6614.4, 6602.26, 6608.02],
        },
        {
          x: new Date(1538796600000),
          y: [6608.02, 6610.68, 6601.99, 6608.91],
        },
        {
          x: new Date(1538798400000),
          y: [6608.91, 6618.99, 6608.01, 6612],
        },
        {
          x: new Date(1538800200000),
          y: [6612, 6615.13, 6605.09, 6612],
        },
        {
          x: new Date(1538802000000),
          y: [6612, 6624.12, 6608.43, 6622.95],
        },
        {
          x: new Date(1538803800000),
          y: [6623.91, 6623.91, 6615, 6615.67],
        },
        {
          x: new Date(1538805600000),
          y: [6618.69, 6618.74, 6610, 6610.4],
        },
        {
          x: new Date(1538807400000),
          y: [6611, 6622.78, 6610.4, 6614.9],
        },
        {
          x: new Date(1538809200000),
          y: [6614.9, 6626.2, 6613.33, 6623.45],
        },
        {
          x: new Date(1538811000000),
          y: [6623.48, 6627, 6618.38, 6620.35],
        },
        {
          x: new Date(1538812800000),
          y: [6619.43, 6620.35, 6610.05, 6615.53],
        },
        {
          x: new Date(1538814600000),
          y: [6615.53, 6617.93, 6610, 6615.19],
        },
        {
          x: new Date(1538816400000),
          y: [6615.19, 6621.6, 6608.2, 6620],
        },
        {
          x: new Date(1538818200000),
          y: [6619.54, 6625.17, 6614.15, 6620],
        },
        {
          x: new Date(1538820000000),
          y: [6620.33, 6634.15, 6617.24, 6624.61],
        },
        {
          x: new Date(1538821800000),
          y: [6625.95, 6626, 6611.66, 6617.58],
        },
        {
          x: new Date(1538823600000),
          y: [6619, 6625.97, 6595.27, 6598.86],
        },
        {
          x: new Date(1538825400000),
          y: [6598.86, 6598.88, 6570, 6587.16],
        },
        {
          x: new Date(1538827200000),
          y: [6588.86, 6600, 6580, 6593.4],
        },
        {
          x: new Date(1538829000000),
          y: [6593.99, 6598.89, 6585, 6587.81],
        },
        {
          x: new Date(1538830800000),
          y: [6587.81, 6592.73, 6567.14, 6578],
        },
        {
          x: new Date(1538832600000),
          y: [6578.35, 6581.72, 6567.39, 6579],
        },
        {
          x: new Date(1538834400000),
          y: [6579.38, 6580.92, 6566.77, 6575.96],
        },
        {
          x: new Date(1538836200000),
          y: [6575.96, 6589, 6571.77, 6588.92],
        },
        {
          x: new Date(1538838000000),
          y: [6588.92, 6594, 6577.55, 6589.22],
        },
        {
          x: new Date(1538839800000),
          y: [6589.3, 6598.89, 6589.1, 6596.08],
        },
        {
          x: new Date(1538841600000),
          y: [6597.5, 6600, 6588.39, 6596.25],
        },
        {
          x: new Date(1538843400000),
          y: [6598.03, 6600, 6588.73, 6595.97],
        },
        {
          x: new Date(1538845200000),
          y: [6595.97, 6602.01, 6588.17, 6602],
        },
        {
          x: new Date(1538847000000),
          y: [6602, 6607, 6596.51, 6599.95],
        },
        {
          x: new Date(1538848800000),
          y: [6600.63, 6601.21, 6590.39, 6591.02],
        },
        {
          x: new Date(1538850600000),
          y: [6591.02, 6603.08, 6591, 6591],
        },
      ],
    },
  ];

  const options = {
    chart: {
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      candlestick: {
        colors: {
          upward: "#5DA8FF",
          downward: "#FE7A36",
        },
        wick: {
          useFillColor: true,
        },
      },
    },
    xaxis: {
      type: "datetime",
      axisTicks: {
        show: false,
        color: "#DDE4FF",
      },
      axisBorder: {
        show: false,
        color: "#DDE4FF",
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
      opposite: true,
      tickAmount: 6,
      tooltip: {
        enabled: true,
      },
      labels: {
        style: {
          colors: "#8695AA",
          fontSize: "12px",
        },
      },
      axisBorder: {
        show: false,
        color: "#DDE4FF",
      },
      axisTicks: {
        show: false,
        color: "#DDE4FF",
      },
    },
    grid: {
      show: true,
      borderColor: "#ECF0FF",
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
            Product Trade Conditions
          </Typography>

          <Box>
            <IconButton
              onClick={handleClick}
              size="small"
              aria-controls={open ? "account-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              sx={{
                borderRadius: "0.375rem",
                fontSize: "14px",
                p: "8px 19.5px",
                display: "flex",
                alignItems: "center",
                gap: "5px",
              }}
              className="bg-eceef2"
            >
              Monthly <KeyboardArrowDownIcon sx={{ fontSize: "20px" }} />
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
                  width: "160px",
                },
              }}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
              <MenuItem>Weekly</MenuItem>
              <MenuItem>Monthly</MenuItem>
              <MenuItem>Yearly</MenuItem>
            </Menu>
          </Box>
        </Box>

        <Box
          sx={{
            marginTop: "-20px",
            marginBottom: "-5px",
            marginLeft: "-13px",
            marginRight: "-13px",
          }}
        >
          {isChartLoaded && (
            <Chart
              options={options}
              series={series}
              type="candlestick"
              height={309}
              width={"100%"}
            />
          )}
        </Box>

        <Box
          sx={{
            display: { xs: "block", sm: "flex" },
            alignItems: "center",
            gap: { xs: "25px", md: "30px" },
          }}
        >
          <Box sx={{ mt: { xs: "15px", sm: "0" } }}>
            <Typography sx={{ display: "block", mb: "7px" }}>
              Forecast Hours
            </Typography>

            <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <Typography
                component={"h3"}
                sx={{
                  lineHeight: "1",
                  fontSize: { xs: "20px", md: "24px" },
                  fontWeight: "700",
                  mb: "0",
                }}
              >
                144h
              </Typography>

              <Box
                sx={{
                  display: "inline-block",
                  fontSize: "12px",
                  px: "9px",
                  color: "success.700",
                  border: "1px solid",
                  borderColor: "success.300",
                  bgcolor: "success.100",
                  borderRadius: "100px",
                }}
              >
                +5.4%
              </Box>
            </Box>
          </Box>

          <Box sx={{ mt: { xs: "15px", sm: "0" } }}>
            <Typography sx={{ display: "block", mb: "7px" }}>
              Workflow Hours
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <Typography
                component={"h3"}
                sx={{
                  lineHeight: "1",
                  fontSize: { xs: "20px", md: "24px" },
                  fontWeight: "700",
                  mb: "0",
                }}
              >
                120h
              </Typography>

              <Box
                sx={{
                  display: "inline-block",
                  fontSize: "12px",
                  px: "9px",
                  color: "error.700",
                  border: "1px solid",
                  borderColor: "error.300",
                  bgcolor: "error.100",
                  borderRadius: "100px",
                }}
              >
                -3.2%
              </Box>
            </Box>
          </Box>

          <Box sx={{ mt: { xs: "15px", sm: "0" } }}>
            <Typography sx={{ display: "block", mb: "7px" }}>
              Forcast Income
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <Typography
                component={"h3"}
                sx={{
                  lineHeight: "1",
                  fontSize: { xs: "20px", md: "24px" },
                  fontWeight: "700",
                  mb: "0",
                }}
              >
                $350K
              </Typography>

              <Box
                sx={{
                  display: "inline-block",
                  fontSize: "12px",
                  px: "9px",
                  color: "success.700",
                  border: "1px solid",
                  borderColor: "success.300",
                  bgcolor: "success.100",
                  borderRadius: "100px",
                }}
              >
                +3.9%
              </Box>
            </Box>
          </Box>
        </Box>
      </Card>
    </>
  );
};

export default ProductTradeConditions;
