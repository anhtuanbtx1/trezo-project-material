"use client";

import React, { useEffect, useState } from "react";
import { Box, Typography, Card } from "@mui/material";
import CustomDropdown from "./CustomDropdown";
import Chart from "react-apexcharts";

const TotalRevenue = () => {
  // Chart state
  const [isChartLoaded, setChartLoaded] = useState(false);

  useEffect(() => {
    setChartLoaded(true);
  }, []);

  const series = [
    {
      name: "Net Profit",
      data: [15, 12, 30, 55, 25, 38, 15, 30, 12, 15, 30, 48],
    },
  ];

  const options = {
    chart: {
      toolbar: {
        show: false,
      },
    },
    colors: ["#757DFF"],
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "50%",
      },
    },
    fill: {
      opacity: 1,
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: 5,
      show: true,
      colors: ["transparent"],
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      axisTicks: {
        show: true,
        color: "#DDE4FF",
      },
      axisBorder: {
        show: true,
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
      // tickAmount: 5,
      // max: 90,
      min: 0,
      labels: {
        formatter: (val) => {
          return "$" + val + "k";
        },
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
    tooltip: {
      y: {
        formatter: function (val) {
          return "$" + val + "k";
        },
      },
    },
    legend: {
      show: true,
      position: "bottom",
      fontSize: "12px",
      horizontalAlign: "center",
      itemMargin: {
        horizontal: 8,
        vertical: 10,
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
            flexWrap: "wrap",
            gap: "15px",
            mb: "10px",
            position: "relative",
            zIndex: 1,
          }}
        >
          <Box>
            <Typography sx={{ mb: "8px" }}>Total Revenue</Typography>

            <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <Typography
                variant="h3"
                sx={{
                  lineHeight: 1,
                  fontSize: { xs: "24px", md: "32px" },
                  fontWeight: 700,
                }}
              >
                $1,528
              </Typography>

              <Box
                sx={{
                  border: "1px solid",
                  borderRadius: "30px",
                  backgroundColor: "success.100",
                  color: "success.700",
                  borderColor: "success.300",
                  lineHeight: 1,
                  fontSize: "12px",
                  display: "inline-block",
                  fontWeight: 500,
                  p: "3.5px 9px",
                  textTransform: "capitalize",
                }}
              >
                +5.4%
              </Box>
            </Box>
          </Box>

          <CustomDropdown
            options={["Daily", "Weekly", "Monthly", "Yearly"]} // Need to change the options also in CustomDropdown file
            onSelect={(value) => console.log(value)}
            defaultLabel="Monthly"
          />
        </Box>

        <Box sx={{ margin: "-5px -15px -25px" }}>
          {isChartLoaded && (
            <Chart
              options={options}
              series={series}
              type="bar"
              height={324}
              width={"100%"}
            />
          )}
        </Box>
      </Card>
    </>
  );
};

export default TotalRevenue;
