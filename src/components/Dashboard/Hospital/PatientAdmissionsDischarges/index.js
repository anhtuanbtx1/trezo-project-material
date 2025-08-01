import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import {
  Card,
  Box,
  Typography,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";

const PatientAdmissionsDischarges = () => {
  // Select state
  const [select, setSelect] = useState("");

  const handleChange = (event) => {
    setSelect(event.target.value);
  };

  // Chart state
  const [isChartLoaded, setChartLoaded] = useState(false);

  useEffect(() => {
    setChartLoaded(true);
  }, []);

  const series = [
    {
      name: "Admissions",
      data: [170, 420, 300, 550, 550, 650, 820],
    },
    {
      name: "Discharges",
      data: [320, 300, 650, 400, 750, 650, 600],
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
    colors: ["#4936F5", "#EC1F00"],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: [2, 2],
    },
    grid: {
      show: true,
      borderColor: "#ECEEF2",
      strokeDashArray: 10,
      xaxis: {
        lines: {
          show: true,
        },
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        stops: [0, 90, 100],
        shadeIntensity: 1,
        opacityFrom: 0,
        opacityTo: 0.5,
      },
    },
    xaxis: {
      categories: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      axisTicks: {
        show: false,
        color: "#ECEEF2",
      },
      axisBorder: {
        show: true,
        color: "#D5D9E2",
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
      tickAmount: 5,
      max: 1000,
      min: 0,
      labels: {
        style: {
          colors: "#64748B",
          fontSize: "12px",
        },
      },
      axisBorder: {
        show: true,
        color: "#D5D9E2",
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
          Patient Admissions & Discharges
        </Typography>

        <Box>
          <FormControl sx={{ minWidth: 115 }} size="small">
            <InputLabel id="demo-select-small">Select</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={select}
              label="Select"
              onChange={handleChange}
              className="select"
            >
              <MenuItem value={0}>Weekly</MenuItem>
              <MenuItem value={1}>Monthly</MenuItem>
              <MenuItem value={2}>Yearly</MenuItem>
              <MenuItem value={4}>All Time</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>

      <div
        style={{
          marginBottom: "-15px",
          marginLeft: "-15px",
          marginTop: "-5px",
        }}
      >
        {isChartLoaded && (
          <Chart
            options={options}
            series={series}
            type="area"
            height={338}
            width={"100%"}
          />
        )}
      </div>
    </Card>
  );
};

export default PatientAdmissionsDischarges;
