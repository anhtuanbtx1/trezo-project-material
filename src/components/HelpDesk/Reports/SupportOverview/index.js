"use client";

import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import {
  Card,
  Box,
  Typography,
  FormControl,
  InputLabel,
  MenuItem,
} from "@mui/material";
import Select from "@mui/material/Select";

const SupportOverview = () => {
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

  const series = [55, 44, 30, 12];

  const options = {
    labels: ["Solved", "In Progress", "Pending", "Unassigned"],
    colors: ["#37D80A", "#605DFF", "#AD63F6", "#FD5812"],
    dataLabels: {
      enabled: false,
    },
    plotOptions: {
      pie: {
        expandOnClick: false,
      },
    },
    stroke: {
      width: 1,
      show: true,
      colors: ["#ffffff"],
    },
    legend: {
      show: false,
      fontSize: "12px",
      position: "bottom",
      horizontalAlign: "center",
      itemMargin: {
        horizontal: 8,
        vertical: 7,
      },
      labels: {
        colors: "#64748B",
      },
      markers: {
        shape: "diamond",
        offsetX: -2,
        offsetY: -0.1,
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
            Support Overview
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

        <Box>
          {isChartLoaded && (
            <Chart
              options={options}
              series={series}
              type="pie"
              height={175}
              width={"100%"}
            />
          )}
        </Box>
      </Card>
    </>
  );
};

export default SupportOverview;
