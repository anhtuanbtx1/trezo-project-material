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
    name: "Portugal",
    flag: "/images/flags/portugal.svg",
    progress: 85,
    color: "primary",
  },
  {
    name: "Germany",
    flag: "/images/flags/germany.svg",
    progress: 65,
    color: "info",
  },
  {
    name: "Spain",
    flag: "/images/flags/spain.svg",
    progress: 45,
    color: "secondary",
  },
  {
    name: "Canada",
    flag: "/images/flags/canada.svg",
    progress: 75,
    color: "success",
  },
];

const WorldwideTopCreators = () => {
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
            Worldwide Top Creators
          </Typography>

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
          <Box sx={{ textAlign: "center" }}>
            <img src="/images/vector-map.png" alt="vector-map" />
          </Box>

          <Box sx={{ mt: "22px" }}>
            {countries.map((country, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  mb: "12px",
                  pb: "12px",
                  gap: "15px",
                }}
                className="border-bottom lcm-0"
              >
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: "10px" }}
                >
                  <img
                    src={country.flag}
                    alt={country.name}
                    width={24}
                    height={24}
                  />
                  <Typography
                    component="span"
                    sx={{ fontWeight: "500", fontSize: "13px" }}
                    className="text-black"
                  >
                    {country.name}
                  </Typography>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "15px",
                    width: "140px",
                  }}
                >
                  <Box
                    sx={{
                      bgcolor: `${country.color}.100`,
                      width: "100%",
                      height: "4px",
                      display: "block",
                      borderRadius: "30px",
                    }}
                  >
                    <Box
                      sx={{
                        bgcolor: `${country.color}.400`,
                        width: `${country.progress}%`,
                        height: "4px",
                        borderRadius: "30px",
                      }}
                    ></Box>
                  </Box>

                  <Typography component="span">{country.progress}%</Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Card>
    </>
  );
};

export default WorldwideTopCreators;
