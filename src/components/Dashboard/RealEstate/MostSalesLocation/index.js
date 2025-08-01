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

// Dynamic data
const countries = [
  {
    name: "United States",
    flag: "/images/flags/usa.svg",
    progress: 85,
  },
  {
    name: "Germany",
    flag: "/images/flags/germany.svg",
    progress: 75,
  },
  {
    name: "United Kingdom",
    flag: "/images/flags/uk.svg",
    progress: 40,
  },
  {
    name: "Canada",
    flag: "/images/flags/canada.svg",
    progress: 10,
  },
  {
    name: "Portugal",
    flag: "/images/flags/portugal.svg",
    progress: 5,
  },
  {
    name: "Spain",
    flag: "/images/flags/spain.svg",
    progress: 15,
  },
  {
    name: "France",
    flag: "/images/flags/france.svg",
    progress: 25,
  },
];

const MostSalesLocation = () => {
  // Dropdown
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
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
            Most Sales Location
          </Typography>

          <Box>
            <IconButton
              onClick={handleClick}
              size="small"
              aria-controls={open ? "account-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              sx={{
                padding: "0",
              }}
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
                  mt: 0,
                  width: "150px",

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

        <Box>
          <Box sx={{ textAlign: "center", mt: "40px", mb: "20px" }}>
            <img src="/images/vector-map.png" alt="vector-map"/>
          </Box>

          <Box>
            {countries.map((country, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  mt: "10px",
                  gap: "15px",
                }}
              >
                <Box
                  sx={{
                    flexShrink: "0",
                  }}
                >
                  <img
                    src={country.flag}
                    alt={country.name}
                    width={32}
                    height={32}
                  />
                </Box>

                <Box sx={{ flexGrow: "1" }}>
                  <Typography component="span" sx={{ fontWeight: "500" }}>
                    {country.name}
                  </Typography>

                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "15px",
                    }}
                  >
                    <Box
                      sx={{
                        bgcolor: "#ecf0ff",
                        width: "100%",
                        height: "4px",
                        display: "block",
                        borderRadius: "30px",
                      }}
                    >
                      <Box
                        sx={{
                          bgcolor: "primary.main",
                          width: `${country.progress}%`,
                          height: "4px",
                          borderRadius: "30px",
                        }}
                      ></Box>
                    </Box>

                    <Typography component="span">
                      {country.progress}%
                    </Typography>
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Card>
    </>
  );
};

export default MostSalesLocation;
