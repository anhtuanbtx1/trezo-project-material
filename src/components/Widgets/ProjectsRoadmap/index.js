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

const ProjectsRoadmap = () => {
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
      name: "Projects",
      data: [400, 550, 600, 700, 1000, 1100, 1200],
    },
  ];

  const options = {
    chart: {
      toolbar: {
        show: false,
      },
    },

    colors: ["#3584FC"],
    plotOptions: {
      bar: {
        horizontal: true,
      },
    },
    grid: {
      show: true,
      borderColor: "#ECEEF2",
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: [
        "Project Planning",
        "Research",
        "Design",
        "Front-end",
        "Development",
        "Review & QA",
        "Launch",
      ],
      axisTicks: {
        show: true,
        color: "#ECEEF2",
      },
      axisBorder: {
        show: true,
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
      labels: {
        style: {
          colors: "#64748B",
          fontSize: "12px",
        },
      },
      axisBorder: {
        show: true,
        color: "#ECEEF2",
      },
      axisTicks: {
        show: true,
        color: "#ECEEF2",
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
            Projects Roadmap
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
          sx={{
            marginTop: "-25px",
            marginLeft: "-10px",
            marginBottom: "-25px",
          }}
        >
          {isChartLoaded && (
            <Chart
              options={options}
              series={series}
              type="bar"
              height={334}
              width={"100%"}
            />
          )}
        </Box>
      </Card>
    </>
  );
};

export default ProjectsRoadmap;
