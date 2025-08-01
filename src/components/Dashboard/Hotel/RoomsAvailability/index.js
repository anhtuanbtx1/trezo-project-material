"use client";

import React, { useEffect, useState } from "react";
import { Box, Typography, Card } from "@mui/material";
import CustomDropdown from "./CustomDropdown";
import Chart from "react-apexcharts";

const RoomsAvailability = () => {
  // Chart state
  const [isChartLoaded, setChartLoaded] = useState(false);
  const [timeRange, setTimeRange] = useState("Daily");
  const [roomData, setRoomData] = useState({
    bookedPercentage: 72.5,
    availablePercentage: 27.5,
    labels: ["Total Booked"],
    colors: ["#37D80A"],
    timeRange: "Daily",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch data when timeRange changes
  useEffect(() => {
    setChartLoaded(false);
    fetchChartData(timeRange);
  }, [timeRange]);

  // Simulate fetching data from an API
  const fetchChartData = async (range) => {
    setLoading(true);
    setError(null);
    try {
      // Simulate API call with mock response
      await new Promise((resolve) => setTimeout(resolve, 800)); // Simulate network delay

      // Mock API response (replace with actual API call)
      const apiResponse = {
        Daily: {
          bookedPercentage: 72.5,
          availablePercentage: 27.5,
          labels: ["Total Booked"],
          colors: ["#37D80A"],
          timeRange: "Daily",
        },
        Weekly: {
          bookedPercentage: 65.3,
          availablePercentage: 34.7,
          labels: ["Weekly Booked"],
          colors: ["#FFA500"],
          timeRange: "Weekly",
        },
        Monthly: {
          bookedPercentage: 58.2,
          availablePercentage: 41.8,
          labels: ["Monthly Booked"],
          colors: ["#4169E1"],
          timeRange: "Monthly",
        },
        Yearly: {
          bookedPercentage: 81.4,
          availablePercentage: 18.6,
          labels: ["Yearly Booked"],
          colors: ["#800080"],
          timeRange: "Yearly",
        },
      };

      const data = apiResponse[range] || apiResponse.Daily;
      setRoomData(data);
      setChartLoaded(true);
    } catch (err) {
      console.error("Failed to fetch chart data:", err);
      setError("Failed to load chart data");
    } finally {
      setLoading(false);
    }
  };

  // Chart configuration
  const options = {
    plotOptions: {
      radialBar: {
        startAngle: -135,
        endAngle: 135,
        dataLabels: {
          name: {
            offsetY: -10,
            fontSize: "14px",
            color: "#64748B",
            fontWeight: "400",
          },
          value: {
            fontSize: "36px",
            color: "#3A4252",
            fontWeight: "700",
            formatter: function (val) {
              return val + "%";
            },
          },
        },
        track: {
          background: "#EEFFE5",
        },
      },
    },
    colors: roomData.colors,
    labels: roomData.labels,
    stroke: {
      dashArray: 7,
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
          flexWrap: "wrap",
          gap: "15px",
          mb: "10px",
          position: "relative",
          zIndex: 1,
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
          Rooms Availability
        </Typography>

        <CustomDropdown
          options={["Daily", "Weekly", "Monthly", "Yearly"]}
          onSelect={(value) => setTimeRange(value)}
          defaultLabel={timeRange}
        />
      </Box>

      <Box sx={{ mt: "-40px" }}>
        {loading ? (
          <Box sx={{ textAlign: "center", py: 4 }}>
            <Typography>Loading chart...</Typography>
          </Box>
        ) : error ? (
          <Box sx={{ textAlign: "center", py: 4 }}>
            <Typography color="error">{error}</Typography>
          </Box>
        ) : isChartLoaded ? (
          <Chart
            options={options}
            series={[roomData.bookedPercentage]}
            type="radialBar"
            height={395}
            width={"100%"}
          />
        ) : null}
      </Box>
    </Card>
  );
};

export default RoomsAvailability;
