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

const HistoryOfBids = () => {
  // Dropdown
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [bids] = useState([
    {
      userImage: "/images/users/user6.jpg",
      userName: "Johhna Loren",
      userHandle: "@queensland",
      bidAmount: "624 ETH",
    },
    {
      userImage: "/images/users/user7.jpg",
      userName: "Zara Loren",
      userHandle: "@queensland",
      bidAmount: "121.1 ETH",
    },
    {
      userImage: "/images/users/user8.jpg",
      userName: "Walter White",
      userHandle: "@queensland",
      bidAmount: "24.78 ETH",
    },
    {
      userImage: "/images/users/user9.jpg",
      userName: "Viktor James",
      userHandle: "@queensland",
      bidAmount: "72.8 ETH",
    },
    {
      userImage: "/images/users/user10.jpg",
      userName: "Zinia Loren",
      userHandle: "@queensland",
      bidAmount: "986 ETH",
    },
    {
      userImage: "/images/users/user11.jpg",
      userName: "John Carter",
      userHandle: "@queensland",
      bidAmount: "123.1 ETH",
    },
    {
      userImage: "/images/users/user12.jpg",
      userName: "Johhna Loren",
      userHandle: "@queensland",
      bidAmount: "624 ETH",
    },
    {
      userImage: "/images/users/user13.jpg",
      userName: "Zara Loren",
      userHandle: "@queensland",
      bidAmount: "121.1 ETH",
    },
    {
      userImage: "/images/users/user14.jpg",
      userName: "Walter White",
      userHandle: "@queensland",
      bidAmount: "24.78 ETH",
    },
    {
      userImage: "/images/users/user15.jpg",
      userName: "Viktor James",
      userHandle: "@queensland",
      bidAmount: "72.8 ETH",
    },
  ]);

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
            History Of Bids
          </Typography>

          <Box>
            <IconButton
              onClick={handleClick}
              size="small"
              aria-controls={open ? "account-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              sx={{
                p: 0,
              }}
            >
              <MoreVertIcon sx={{ fontSize: "22px" }} />
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

        <Box
          sx={{
            maxHeight: "332px",
            overflowY: "auto",
          }}
          className="pr-10"
        >
          {bids.map((bid, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                pb: "10px",
                mb: "10px",
              }}
              className="border-bottom lcm-0"
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <img
                  src={bid.userImage}
                  className="inline-block rounded-full"
                  alt="user-image"
                  width={40}
                  height={40}
                  style={{
                    borderRadius: "100%",
                  }}
                />

                <Box>
                  <Typography
                    component="span"
                    className="text-black"
                    sx={{
                      fontWeight: "600",
                      display: "block",
                      mb: "1px",
                    }}
                  >
                    {bid.userName}
                  </Typography>
                  <Typography
                    component="span"
                    sx={{ display: "block", fontSize: "11px" }}
                  >
                    {bid.userHandle}
                  </Typography>
                </Box>
              </Box>

              <Typography
                component="span"
                className="text-black"
                sx={{ display: "block", fontSize: "12px", fontWeight: "600" }}
              >
                {bid.bidAmount}
              </Typography>
            </Box>
          ))}
        </Box>
      </Card>
    </>
  );
};

export default HistoryOfBids;
