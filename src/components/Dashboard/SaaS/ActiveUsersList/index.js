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
import MoreVertIcon from "@mui/icons-material/MoreVert";

// Example user data
const users = [
  {
    id: 1,
    name: "Johhna Loren",
    role: "Admin",
    image: "/images/users/user60.jpg",
    status: "online",
  },
  {
    id: 2,
    name: "Zinia Watson Loren",
    role: "Moderator",
    image: "/images/users/user61.jpg",
    status: "online",
  },
  {
    id: 3,
    name: "Angela Carter",
    role: "Editor",
    image: "/images/users/user62.jpg",
    status: "online",
  },
  {
    id: 4,
    name: "Skyler White",
    role: "Admin",
    image: "/images/users/user63.jpg",
    status: "offline",
  },
  {
    id: 5,
    name: "Jane Ronan",
    role: "Editor",
    image: "/images/users/user64.jpg",
    status: "online",
  },
  {
    id: 6,
    name: "Viktor James",
    role: "Editor",
    image: "/images/users/user65.jpg",
    status: "offline",
  },
];

const ActiveUsersList = () => {
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
          Active Users List
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
            <MoreVertIcon sx={{ fontSize: "25px" }} />
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
        {users.map((user) => (
          <Box
            key={user.id}
            className="border-bottom lcm-0"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              pb: "10px",
              mb: "10px",
            }}
          >
            <Box
              sx={{
                position: "relative",
              }}
            >
              <img
                src={user.image}
                alt={user.name}
                width={33}
                height={33}
                style={{
                  borderRadius: "100%",
                }}
              />
              <Box
                className="po-right-0"
                sx={{
                  position: "absolute",
                  bottom: "2px",
                  width: "12px",
                  height: "12px",
                  borderRadius: "50%",
                  border: "2px solid #fff",
                  backgroundColor:
                    user.status === "online" ? "success.500" : "grey.400",
                }}
              ></Box>
            </Box>
            <Box>
              <Typography
                component="span"
                className="text-black"
                sx={{
                  display: "block",
                  fontWeight: 600,
                }}
              >
                {user.name}
              </Typography>
              <Typography
                component="span"
                sx={{ display: "block", fontSize: "12px", mt: "2px" }}
              >
                {user.role}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Card>
  );
};

export default ActiveUsersList;
