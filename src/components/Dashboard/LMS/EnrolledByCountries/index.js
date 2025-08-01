"use client";

import React, { useState } from "react";
import {
  Card,
  Box,
  Typography,
  Menu,
  MenuItem,
  IconButton,
} from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Content from "./Content";

const EnrolledByCountries = () => {
  // Dropdown state management
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // Example dynamic data for countries
  const countriesData = [
    { name: "United States", flag: "/images/flags/usa.svg", progress: 85 },
    { name: "Germany", flag: "/images/flags/germany.svg", progress: 75 },
    { name: "United Kingdom", flag: "/images/flags/uk.svg", progress: 40 },
    { name: "Canada", flag: "/images/flags/canada.svg", progress: 10 },
  ];

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
      {/* Header */}
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
          Enrolled by Countries
        </Typography>

        {/* Dropdown Menu */}
        <Box>
          <IconButton
            onClick={handleClick}
            size="small"
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <MoreHorizIcon sx={{ fontSize: "25px" }} />
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
                mt: 1,
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

      {/* Content with dynamic countries data */}
      <Content countriesData={countriesData} />
    </Card>
  );
};

export default EnrolledByCountries;
