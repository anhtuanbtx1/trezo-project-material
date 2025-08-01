"use client";

import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Card,
  Menu,
  MenuItem,
  IconButton,
} from "@mui/material";
import { MoreVert } from "@mui/icons-material";

const RevenueByBranches = () => {
  // Dropdown
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // Branch Data
  const [branches, setBranches] = useState([]);

  useEffect(() => {
    // Simulated API call
    const fetchBranches = async () => {
      const mockBranches = [
        {
          id: "1",
          countryCode: "pt",
          countryName: "Portugal",
          flagImage: "/images/flags/portugal.svg",
          percentage: 85,
          color: "primary.main",
        },
        {
          id: "2",
          countryCode: "de",
          countryName: "Germany",
          flagImage: "/images/flags/germany.svg",
          percentage: 65,
          color: "secondary.main",
        },
        {
          id: "3",
          countryCode: "es",
          countryName: "Spain",
          flagImage: "/images/flags/spain.svg",
          percentage: 45,
          color: "purple.main",
        },
        {
          id: "4",
          countryCode: "ca",
          countryName: "Canada",
          flagImage: "/images/flags/canada.svg",
          percentage: 75,
          color: "success.main",
        },
        {
          id: "5",
          countryCode: "us",
          countryName: "USA",
          flagImage: "/images/flags/usa.svg",
          percentage: 20,
          color: "error.main",
        },
      ];
      setBranches(mockBranches);
    };

    fetchBranches();
  }, []);

  return (
    <Card
      sx={{
        boxShadow: "none",
        borderRadius: "7px",
        mb: "25px",
        padding: { xs: "18px", sm: "20px", lg: "25px" },
      }}
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
        >
          Revenue by Branches
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

      <Box className="text-center" sx={{ mt: "35px", mb: "15px" }}>
        <img
          src="/images/vector-map.png"
          alt="vector-map"
          width={270}
          height={160}
        />
      </Box>

      <Box
        sx={{
          ".border-bottom": {
            paddingTop: "12.4px",
            paddingBottom: "12.4px",
          },
        }}
      >
        {branches.map((branch) => (
          <Box
            key={branch.id}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
            className="border-bottom"
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <img
                src={branch.flagImage}
                alt={branch.countryName}
                width={24}
                height={24}
              />
              <Typography fontWeight={"500"}>{branch.countryName}</Typography>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <Box
                sx={{
                  background: "#ECF0FF",
                  height: "5px",
                  width: "100px",
                  borderRadius: "30px",
                }}
              >
                <Box
                  sx={{
                    bgcolor: branch.color,
                    borderRadius: "30px",
                    height: "5px",
                    width: `${branch.percentage}%`,
                  }}
                ></Box>
              </Box>
              <Typography>{branch.percentage}%</Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Card>
  );
};

export default RevenueByBranches;
