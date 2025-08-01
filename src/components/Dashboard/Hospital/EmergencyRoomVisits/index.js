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

const EmergencyRoomVisits = () => {
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

  // Utility function to generate random data
  const generateData = (count, range) => {
    let data = [];
    for (let i = 0; i < count; i++) {
      data.push(
        Math.floor(Math.random() * (range.max - range.min + 1)) + range.min
      );
    }
    return data;
  };

  const series = [
    {
      name: "14 PM",
      data: generateData(14, { min: 0, max: 90 }),
    },
    {
      name: "13 PM",
      data: generateData(14, { min: 0, max: 90 }),
    },
    {
      name: "12 PM",
      data: generateData(14, { min: 0, max: 90 }),
    },
    {
      name: "11 AM",
      data: generateData(14, { min: 0, max: 90 }),
    },
    {
      name: "10 AM",
      data: generateData(14, { min: 0, max: 90 }),
    },
    {
      name: "9 AM",
      data: generateData(14, { min: 0, max: 90 }),
    },
    {
      name: "8 AM",
      data: generateData(14, { min: 0, max: 90 }),
    },
  ];

  const options = {
    chart: {
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    colors: ["#605DFF"],
    grid: {
      show: false,
      borderColor: "#ECEEF2",
    },
    xaxis: {
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
      labels: {
        show: true,
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
        <Box>
          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: "16px", md: "18px" },
              fontWeight: 700,
            }}
            className="text-black"
          >
            Emergency Room Visits
          </Typography>
          <Typography sx={{ mt: "2px !important" }}>
            ER based on patient visits
          </Typography>
        </Box>

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
              <MenuItem value="0">Weekly</MenuItem>
              <MenuItem value="1">Monthly</MenuItem>
              <MenuItem value="2">Yearly</MenuItem>
              <MenuItem value="4">All Time</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>

      <div
        style={{
          marginBottom: "-22px",
          marginLeft: "-15px",
          marginTop: "-30px",
        }}
      >
        {isChartLoaded && (
          <Chart
            options={options}
            series={series}
            type="heatmap"
            height={225}
            width={"100%"}
          />
        )}
      </div>
    </Card>
  );
};

export default EmergencyRoomVisits;
