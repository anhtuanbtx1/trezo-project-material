"use client";

import React, { useState } from "react";
import {
  Card,
  Box,
  Typography,
  Menu,
  MenuItem,
  IconButton,
  Grid,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const UsersByCountry = () => {
  // Dropdown State
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenuClick = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  // Country data
  const countries = [
    {
      name: "United States",
      flag: "/images/flags/usa.svg",
      users: 12800,
      percentage: 35.6,
    },
    {
      name: "United Kingdom",
      flag: "/images/flags/uk.svg",
      users: 6750,
      percentage: 18.7,
    },
    {
      name: "Canada",
      flag: "/images/flags/canada.svg",
      users: 2500,
      percentage: 6.3,
    },
    {
      name: "Australia",
      flag: "/images/flags/australia.svg",
      users: 2200,
      percentage: 5.4,
    },
  ];

  return (
    <Card
      sx={{
        boxShadow: "none",
        borderRadius: "7px",
        mb: "25px",
        padding: { xs: "18px", sm: "20px", lg: "25px" },
      }}
    >
      {/* Header */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mb: "35px",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontSize: { xs: "16px", md: "18px" },
            fontWeight: 700,
          }}
        >
          Users by Country
        </Typography>

        <Box>
          <IconButton
            onClick={handleMenuClick}
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
            This Week <KeyboardArrowDownIcon sx={{ fontSize: "20px" }} />
          </IconButton>

          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleMenuClose}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: "visible",
                boxShadow: "0 4px 45px #0000001a",
              },
            }}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          >
            {["This Day", "This Week", "This Month", "This Year"].map((period) => (
              <MenuItem key={period} onClick={handleMenuClose}>
                {period}
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Box>

      {/* World Map */}
      <Box sx={{ textAlign: "center", mt: '45px', mb: "35px" }}>
        <img src="/images/vector-map.png" alt="vector-map" />
      </Box>

      {/* Country Statistics */}
      <Grid container columnSpacing={{ xs: 0 }} className="uc-content">
        {countries.map((country) => (
          <Grid size={{ xs: 6 }} key={country.name} className="uc-grid">
            <Box
              sx={{
                display: "flex",
                gap: "10px",
                mb: "15px",
                pb: "15px",
              }}
              className="border-bottom"
            >
              <Box sx={{ flexShrink: "0", mt: "3px" }}>
                <img src={country.flag} alt={country.name} width={20} height={20} />
              </Box>
              <Box>
                <Typography
                  sx={{
                    fontWeight: "500",
                    display: "block",
                    fontSize: "12px",
                    marginBottom: "5px",
                    lineHeight: "normal",
                  }}
                >
                  {country.name}
                </Typography>
                <Typography
                  component="h5"
                  sx={{
                    fontWeight: "600",
                    fontSize: "16px",
                    lineHeight: "normal",
                  }}
                >
                  {country.users.toLocaleString()}{" "}
                  <Typography
                    component="span"
                    sx={{ fontSize: "12px" }}
                    className="text-body"
                  >
                    {country.percentage}%
                  </Typography>
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Card>
  );
};

export default UsersByCountry;
