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
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const PatientByAge = () => {
  // Dropdown state
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // Chart load state
  const [isChartLoaded, setChartLoaded] = useState(false);

  useEffect(() => {
    setChartLoaded(true);
  }, []);

  // Chart series data
  const series = [30, 40, 20, 10]; // Example data

  const options = {
    labels: ["0-18 Years", "19-40 Years", "41-60 Years", "60+ Years"],
    colors: ["#AD63F6", "#605DFF", "#25B003", "#3584FC"],
    dataLabels: {
      enabled: true,
      formatter: function (val) {
        return `${val}%`;
      },
      dropShadow: {
        enabled: false,
      },
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
      show: true,
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
        size: 7,
        offsetX: -2,
        offsetY: -0.5,
        shape: "diamond",
      },
      formatter: function (seriesName, opts) {
        return `${seriesName}: ${opts.w.globals.series[opts.seriesIndex]}%`;
      },
      onItemClick: {
        toggleDataSeries: false,
      },
      onItemHover: {
        highlightDataSeries: false,
      },
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return `${val}%`;
        },
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
            Patient by Age
          </Typography>
        </Box>

        <Box>
          <IconButton
            onClick={handleClick}
            size="small"
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            sx={{
              borderRadius: "0px",
              padding: "1px 2px",
              fontSize: "14px",
            }}
          >
            Last Week <KeyboardArrowDownIcon sx={{ fontSize: "20px" }} />
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
              },
            }}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          >
            <MenuItem>Last Day</MenuItem>
            <MenuItem>Last Week</MenuItem>
            <MenuItem>Last Month</MenuItem>
            <MenuItem>Last Year</MenuItem>
          </Menu>
        </Box>
      </Box>

      <div>
        {isChartLoaded && (
          <Chart
            options={options}
            series={series}
            type="pie"
            height={285}
            width={"100%"}
          />
        )}
      </div>
    </Card>
  );
};

export default PatientByAge;
