"use client";

import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { Box, Typography, Card } from "@mui/material";

const CashAtEndOfTheMonth = () => {
  // Chart state
  const [isChartLoaded, setChartLoaded] = useState(false);

  useEffect(() => {
    setChartLoaded(true);
  }, []);

  const series = [42.9, 20.0, 37.1];

  const options = {
    chart: {
      toolbar: {
        show: false,
      },
    },
    labels: ["Cash Inflows", "Cash Outflows", "Remaining Cash"],
    colors: ["#37D80A", "#FD5812", "#605DFF"],
    legend: {
      show: true,
      position: "bottom",
      fontSize: "12px",
      horizontalAlign: "center",
      offsetX: 0,
      offsetY: -105,
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
    stroke: {
      width: 0,
    },
    plotOptions: {
      pie: {
        endAngle: 90,
        startAngle: -90,
        expandOnClick: false,
        donut: {
          size: "65%",
        },
      },
    },
    dataLabels: {
      enabled: true,
      style: {
        fontSize: "12px",
      },
      dropShadow: {
        enabled: false,
      },
      formatter: function (val) {
        return val.toFixed(1) + "%";
      },
      textAnchor: "middle",
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return val + "%";
        },
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
        <Typography
          component={"span"}
          sx={{
            mb: "25px",
            display: "block",
          }}
        >
          Cash at End of the Month
        </Typography>

        <Box
          sx={{
            mt: "-10px",
            height: "140px",
          }}
          className="c-of-m"
        >
          {isChartLoaded && (
            <Chart
              options={options}
              series={series}
              type="donut"
              height={250}
              width={"100%"}
            />
          )}
        </Box>
      </Card>
    </>
  );
};

export default CashAtEndOfTheMonth;
