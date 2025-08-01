"use client";

import React from "react";
import {
  Card,
  Box,
  Typography,
  Menu,
  MenuItem,
  IconButton,
  Button,
} from "@mui/material";
import { MoreVert } from "@mui/icons-material";

// Sample dynamic data for suggested users
const suggestedUsersData = [
  {
    id: 1,
    name: "Sophia Adams",
    profileImage: "/images/social-media/user-1.png",
    mutualFriends: 12,
  },
  {
    id: 2,
    name: "Liam Roberts",
    profileImage: "/images/social-media/user-2.png",
    mutualFriends: 8,
  },
  {
    id: 3,
    name: "Olivia Martinez",
    profileImage: "/images/social-media/user-3.png",
    mutualFriends: 15,
  },
  {
    id: 4,
    name: "Ethan Clarke",
    profileImage: "/images/social-media/user-4.png",
    mutualFriends: 10,
  },
  {
    id: 5,
    name: "Isabella Cruz",
    profileImage: "/images/social-media/user-5.png",
    mutualFriends: 7,
  },
];

const Suggestions = () => {
  // Dropdown
  const [anchorEl, setAnchorEl] = React.useState(null);
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
        className="rmui-card border"
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
              Suggestions
            </Typography>

            <Typography sx={{ color: "#8695aa", fontSize: "14px", mb: "0" }}>
              People you may know
            </Typography>
          </Box>

          <Box>
            <IconButton
              onClick={handleClick}
              size="small"
              aria-controls={open ? "account-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              sx={{ padding: "0" }}
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
              <MenuItem sx={{ gap: "5px" }}>
                <i
                  className="material-symbols-outlined"
                  style={{ fontSize: "20px" }}
                >
                  schedule
                </i>
                Today
              </MenuItem>
              <MenuItem sx={{ gap: "5px" }}>
                <i
                  className="material-symbols-outlined"
                  style={{ fontSize: "20px" }}
                >
                  pie_chart
                </i>
                Last 7 Days
              </MenuItem>
              <MenuItem sx={{ gap: "5px" }}>
                <i
                  className="material-symbols-outlined"
                  style={{ fontSize: "20px" }}
                >
                  refresh
                </i>
                Last Month
              </MenuItem>
              <MenuItem sx={{ gap: "5px" }}>
                <i
                  className="material-symbols-outlined"
                  style={{ fontSize: "20px" }}
                >
                  calendar_today
                </i>
                Last 1 Year
              </MenuItem>
              <MenuItem sx={{ gap: "5px" }}>
                <i
                  className="material-symbols-outlined"
                  style={{ fontSize: "20px" }}
                >
                  bar_chart
                </i>
                All Time
              </MenuItem>
              <MenuItem sx={{ gap: "5px" }}>
                <i
                  className="material-symbols-outlined"
                  style={{ fontSize: "20px" }}
                >
                  visibility
                </i>
                View
              </MenuItem>
              <MenuItem sx={{ gap: "5px" }}>
                <i
                  className="material-symbols-outlined"
                  style={{ fontSize: "20px" }}
                >
                  delete
                </i>
                Delete
              </MenuItem>
            </Menu>
          </Box>
        </Box>

        <Box>
          {suggestedUsersData.map((user) => (
            <Box
              key={user.id}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mt: "21px",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: "15px" }}>
                <img
                  src={user.profileImage}
                  alt={user.name}
                  width={44}
                  height={44}
                  style={{
                    borderRadius: "50%",
                    flexShrink: 0,
                  }}
                />

                <Box>
                  <Typography
                    variant="h4"
                    sx={{ fontSize: "14px", fontWeight: 500, mb: "0" }}
                  >
                    {user.name}
                  </Typography>

                  <Typography fontSize={"12px"} mb={"0"}>
                    {user.mutualFriends} mutual friends
                  </Typography>
                </Box>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  flexWrap: "wrap",
                }}
              >
                <Button
                  variant="outlined"
                  color="error"
                  sx={{
                    width: "34px",
                    height: "34px",
                    minWidth: "auto",
                    fontSize: "16px",
                    borderRadius: "50%",
                  }}
                >
                  <i className="ri-delete-bin-7-line"></i>
                </Button>

                <Button
                  variant="outlined"
                  color="primary"
                  sx={{
                    width: "34px",
                    height: "34px",
                    minWidth: "auto",
                    fontSize: "16px",
                    borderRadius: "50%",
                  }}
                >
                  <i className="ri-user-add-line"></i>
                </Button>
              </Box>
            </Box>
          ))}
        </Box>
      </Card>
    </>
  );
};

export default Suggestions;
