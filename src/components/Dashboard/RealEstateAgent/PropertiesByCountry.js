"use client";

import React from "react";
import {
  Box,
  Typography,
  Card,
  Menu,
  MenuItem,
  IconButton,
} from "@mui/material";
import { MoreVert } from "@mui/icons-material";

const salesData = [
  {
    country: "Portugal",
    flag: "/images/flags/portugal.svg",
    percentage: 85,
  },
  {
    country: "Germany",
    flag: "/images/flags/germany.svg",
    percentage: 65,
  },
  {
    country: "Spain",
    flag: "/images/flags/spain.svg",
    percentage: 45,
  },
  {
    country: "Canada",
    flag: "/images/flags/canada.svg",
    percentage: 75,
  },
];

// Conditional progress bar color
const getProgressColor = (percent) => {
  if (isNaN(percent) || percent < 0 || percent > 100) {
    console.warn("Invalid percentage value:", percent);
    return "#CCCCCC"; // Default gray color for invalid values
  }
  if (percent >= 80) return "#757DFF"; // Blue
  if (percent >= 60) return "#0F79F3"; // Sky Blue
  if (percent >= 40) return "#9135E8"; // Purple
  return "#25B003"; // Green
};

const PropertiesByCountry = () => {
  // Dropdown menu state
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
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
          Properties By Country
        </Typography>

        <Box>
          <IconButton
            onClick={handleClick}
            size="small"
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            sx={{ p: "0" }}
            className="-right-10"
          >
            <MoreVert sx={{ fontSize: "25px" }} />
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
                "& .MuiAvatar-root": {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
              },
            }}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          >
            <MenuItem>This Day</MenuItem>
            <MenuItem>This Week</MenuItem>
            <MenuItem>This Month</MenuItem>
            <MenuItem>This Year</MenuItem>
          </Menu>
        </Box>
      </Box>
 
      <Box sx={{ textAlign: "center", mb: "20px" }}>
        <img src="/images/vector-map.png" alt="vector-map" />
      </Box>

      <Box className="border-top">
        {salesData.map((item) => (
          <Box
            key={item.country}
            className="border-bottom"
            sx={{
              paddingTop: "12px",
              paddingBottom: "12px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "10px",
              }}
            >
              <Box flexShrink={0}>
                <Box sx={{ gap: "8px", display: "flex", alignItems: "center" }}>
                  <img
                    src={item.flag}
                    alt={item.country}
                    width={24}
                    height={24}
                  />
                  <Typography
                    variant="h4"
                    className="text-body"
                    sx={{
                      fontSize: "14px",
                      fontWeight: 500,
                      lineHeight: 1,
                      m: 0,
                    }}
                  >
                    {item.country}
                  </Typography>
                </Box>
              </Box>

              <Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-end",
                    gap: "10px",
                  }}
                >
                  <Box sx={{ width: { xs: "70px", sm: "100px" } }}>
                    <Box sx={{ height: "5px", backgroundColor: "#ECF0FF" }}>
                      <Box
                        sx={{
                          width: `${item.percentage}%`,
                          height: "5px",
                          backgroundColor: getProgressColor(item.percentage),
                        }}
                      ></Box>
                    </Box>
                  </Box>

                  <Box>{item.percentage}%</Box>
                </Box>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </Card>
  );
};

export default PropertiesByCountry;
