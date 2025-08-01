"use client";

import React, { useState } from "react";
import {
  Card,
  Box,
  Typography,
  Menu,
  MenuItem,
  IconButton,
  Link,
} from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

// Sample dynamic data for top properties
const properties = [
  {
    id: 1,
    type: "Industrial",
    location: "36 Clay Street Indianapolis",
    imageUrl: "/images/properties/top1.jpg",
  },
  {
    id: 2,
    type: "Office",
    location: "07 Maple Street Los Angeles",
    imageUrl: "/images/properties/top2.jpg",
  },
  {
    id: 3,
    type: "Multi-Family",
    location: "94 Brooke Street Houston",
    imageUrl: "/images/properties/top3.jpg",
  },
  {
    id: 4,
    type: "Retail",
    location: "84 Pick Street Centennial",
    imageUrl: "/images/properties/top4.jpg",
  },
];

const TopProperty = () => {
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
            Top Property
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
          {properties.map((property) => (
            <Box
              key={property.id}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                mb: "13px",
              }}
              className="lcm-0"
            >
              <img
                src={property.imageUrl}
                alt={`${property.type}`}
                width={40}
                height={40}
                style={{
                  borderRadius: "5px",
                }}
              />
              <Box>
                <Link
                  href="#"
                  className="text-black"
                  sx={{
                    display: "inline-block",
                    fontWeight: 600,
                    fontSize: { xs: "15px", md: "16px" },
                    transition: "all 0.3s ease-in-out 0s",
                    textDecoration: "none",
                  }}
                >
                  {property.type}
                </Link>
                <Typography component={"span"} sx={{ display: "block" }}>
                  {property.location}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Card>
    </>
  );
};

export default TopProperty;
