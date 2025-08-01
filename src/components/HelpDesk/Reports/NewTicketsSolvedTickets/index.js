"use client";

import React, { useEffect, useState } from "react";
import Chart from 'react-apexcharts';
import {
  Card,
  Box,
  Typography,
  FormControl,
  InputLabel,
  MenuItem,
} from "@mui/material";
import Select from "@mui/material/Select";

const NewTicketsSolvedTickets = () => {
  // Select State
  const [select, setSelect] = useState("");
  const handleChange = (event) => {
    setSelect(event.target.value);
  };

  // Chart
  const [isChartLoaded, setChartLoaded] = useState(false);

  useEffect(() => {
    setChartLoaded(true);
  }, []);

  const series = [
    {
      name: "New Tickets",
      data: [25, 70, 25, 45, 60, 55, 70],
    },
    {
      name: "Solved Tickets",
      data: [65, 45, 65, 30, 75, 24, 50],
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

    colors: ["#605DFF", "#FD5812"],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: 2,
    },
    grid: {
      show: true,
      borderColor: "#ECEEF2",
    },
    fill: {
      type: "gradient",
      gradient: {
        stops: [0, 90, 100],
        shadeIntensity: 1,
        opacityFrom: 0,
        opacityTo: 0.6,
      },
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
      tickAmount: 4,
      max: 80,
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
      show: true,
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
            New vs Solved
          </Typography>

          <Box>
            <FormControl sx={{ minWidth: "115px" }} size="small">
              <InputLabel id="demo-select-small">Select</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={select}
                label="select"
                onChange={handleChange}
                className="select"
              >
                <MenuItem value={0}>This Day</MenuItem>
                <MenuItem value={0}>This Weekly</MenuItem>
                <MenuItem value={1}>This Monthly</MenuItem>
                <MenuItem value={2}>This Yearly</MenuItem>
                <MenuItem value={4}>All Time</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Box>

        <Box
          style={{
            marginBottom: "-20px",
            marginLeft: "-10px",
            marginTop: "-12px",
          }}
        >
          {isChartLoaded && (
            <Chart
              options={options}
              series={series}
              type="area"
              height={370}
              width={"100%"}
            />
          )}
        </Box>
      </Card>
    </>
  );
};

export default NewTicketsSolvedTickets;
