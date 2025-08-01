"use client";

import React, { useState } from "react";
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
const recentInstagramFollowersData = [
  {
    id: 1,
    name: "Mason Lee",
    profileImage: "/images/social-media/user-6.png",
  },
  {
    id: 2,
    name: "Mia Patel",
    profileImage: "/images/social-media/user-7.png",
  },
  {
    id: 3,
    name: "James Nguyen",
    profileImage: "/images/social-media/user-8.png",
  },
  {
    id: 4,
    name: "Benjamin Kim",
    profileImage: "/images/social-media/user-9.png",
  },
  {
    id: 5,
    name: "Elijah Watson",
    profileImage: "/images/social-media/user-10.png",
  },
  {
    id: 6,
    name: "Daniel Flores",
    profileImage: "/images/social-media/user-11.png",
  },
];

const RecentInstagramFollowers = () => {
  // Dropdown
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // Form
  const [visibleFormId, setVisibleFormId] = useState(null);

  const toggleMessageForm = (userId) => {
    setVisibleFormId((prevId) => (prevId === userId ? null : userId));
  };

  return (
    <>
      <style>
        {`
        .search-input::placeholder {
          font-size: 12px; /* Set placeholder font size to 10 pixels */
        }
      `}
      </style>

      <Card
        sx={{
          boxShadow: "none",
          borderRadius: "7px",
          mb: "25px",
          padding: { xs: "18px", sm: "20px", lg: "25px" },
          overflow: "initial",
        }}
        className="rmui-card border"
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mb: "10px",
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
              Recent Instagram Followers
            </Typography>

            <Typography sx={{ color: "#8695aa", fontSize: "14px", mb: "0" }}>
              Check out your latest followers
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

        <Box
          sx={{
            marginX: { xs: "-18px", sm: "-20px", lg: "-25px" },
            overflow: "initial",
          }}
        >
          {recentInstagramFollowersData.map((follower) => (
            <Box
              key={follower.id}
              className="border-bottom lcbpm-none"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "5px",
                padding: {
                  xs: "8px 10px",
                  sm: "9px 20px",
                  lg: "10px 25px",
                },
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <img
                  src={follower.profileImage}
                  alt={follower.name}
                  width={34}
                  height={34}
                  style={{
                    borderRadius: "50%",
                    flexShrink: 0,
                  }}
                />

                <Box>
                  <Typography
                    variant="h6"
                    sx={{
                      fontSize: "14px",
                      fontWeight: "500",
                      lineHeight: "1",
                      mb: "0",
                    }}
                  >
                    {follower.name}
                  </Typography>
                </Box>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: { xs: "5px", sm: "10px" },
                }}
              >
                <Button
                  sx={{
                    padding: "6.5px 10px",
                    backgroundColor: "#ECF0FF",
                    fontSize: "12px",
                    lineHeight: "1",
                    fontWeight: "500",
                    color: "primary.main",
                    textTransform: "capitalize",
                    borderRadius: "5px",
                  }}
                >
                  Follow Back
                </Button>

                <Box position={"relative"}>
                  <Box
                    onClick={() => toggleMessageForm(follower.id)}
                    style={{ cursor: "pointer" }}
                  >
                    <i
                      className={`${
                        visibleFormId === follower.id
                          ? "ri-close-line text-danger"
                          : "ri-message-2-line"
                      }`}
                      style={{
                        width: "24px",
                        height: "24px",
                        lineHeight: "24px",
                        textAlign: "center",
                        backgroundColor: "#F3E8FF",
                        display: "inline-block",
                        fontSize: "16px",
                        borderRadius: "3px",
                      }}
                    ></i>
                  </Box>

                  {visibleFormId === follower.id && (
                    <Box
                      className="po-right-0"
                      sx={{ width: "250px", position: "absolute" }}
                    >
                      <Box
                        className="bg-white"
                        sx={{
                          padding: "10px",
                          borderRadius: "10px",
                          boxShadow:
                            "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                          zIndex: "1",
                          position: "relative",
                        }}
                      >
                        <form style={{ position: "relative" }}>
                          <input
                            type="text"
                            className="bg-white border text-black"
                            placeholder={`Message ${follower.name}`}
                            style={{
                              height: "40px",
                              fontSize: "12px",
                              padding: "6px 15px",
                              borderRadius: "5px",
                              width: "100%",
                              outline: "none",
                            }}
                          />

                          <Button
                            className="po-right-0"
                            sx={{
                              position: "absolute",
                              top: "0",
                              height: "100%",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              minWidth: "auto",
                              color: "primary.main",
                              px: "15px",
                              fontSize: "14px",
                            }}
                          >
                            <i className="ri-send-plane-2-line"></i>
                          </Button>
                        </form>
                      </Box>
                    </Box>
                  )}
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Card>
    </>
  );
};

export default RecentInstagramFollowers;
