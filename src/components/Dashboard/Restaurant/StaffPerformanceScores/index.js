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

const StaffPerformanceScores = () => {
  // Dropdown
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // data
  const [staffPerformanceScores, setStaffPerformanceScores] = useState([]);

  useEffect(() => {
    // Simulated API call to fetch low stock items
    const fetchStaffPerformanceScores = async () => {
      const mockStaffPerformanceScores = [
        {
          id: "1",
          image: "/images/users/user58.jpg",
          name: "Thai Bean Soup",
          score: 98,
        },
        {
          id: "2",
          image: "/images/users/user59.jpg",
          name: "Angela Carter",
          score: 97,
        },
        {
          id: "3",
          image: "/images/users/user60.jpg",
          name: "Walter White",
          score: 96,
        },
        {
          id: "4",
          image: "/images/users/user61.jpg",
          name: "Gary Simon",
          score: 88,
        },
        {
          id: "5",
          image: "/images/users/user62.jpg",
          name: "Zinia Anderson",
          score: 85,
        },
        {
          id: "6",
          image: "/images/users/user63.jpg",
          name: "Loren Walter",
          score: 80,
        },
        {
          id: "7",
          image: "/images/users/user64.jpg",
          name: "Jessy Pinkman",
          score: 80,
        },
        {
          id: "8",
          image: "/images/users/user65.jpg",
          name: "Handy Curter",
          score: 77,
        },
        {
          id: "9",
          image: "/images/users/user66.jpg",
          name: "Skyler Lorensa",
          score: 75,
        },
      ];
      setStaffPerformanceScores(mockStaffPerformanceScores);
    };

    fetchStaffPerformanceScores();
  }, []);

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
            Staff Performance Scores
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

        <Box
          sx={{
            ".border-bottom": {
              paddingBottom: "10px",
              marginBottom: "10px",

              "&:last-child": {
                paddingBottom: 0,
                marginBottom: 0,
                borderBottom: "none !important",
              },
            },
          }}
        >
          {staffPerformanceScores.slice(0, 9).map((staff) => (
            <Box
              key={staff.id}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
              className="border-bottom"
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <img
                  src={staff.image}
                  alt="Staff"
                  width={30}
                  height={30}
                  style={{ borderRadius: "50%" }}
                />
                <Typography
                  variant="h5"
                  sx={{ fontSize: "14px", fontWeight: 500 }}
                >
                  {staff.name}
                </Typography>
              </Box>

              <Typography>{staff.score}</Typography>
            </Box>
          ))}
        </Box>
      </Card>
    </>
  );
};

export default StaffPerformanceScores;
