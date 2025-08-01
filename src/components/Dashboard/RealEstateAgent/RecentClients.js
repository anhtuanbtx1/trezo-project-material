"use client";

import React, { useState } from "react";
import {
  Box,
  Typography,
  Card,
  Menu,
  MenuItem,
  IconButton,
} from "@mui/material";
import { MoreVert } from "@mui/icons-material";
import { Link } from "react-router-dom";

const RecentClients = () => {
  // Client data state
  const [clients] = useState([
    {
      id: 1,
      name: "Johhna Loren",
      profession: "Doctor",
      image: "/images/users/user48.jpg",
      status: "online",
    },
    {
      id: 2,
      name: "Sarah Smith",
      profession: "Designer",
      image: "/images/users/user49.jpg",
      status: "offline",
    },
    {
      id: 3,
      name: "Michael Johnson",
      profession: "Developer",
      image: "/images/users/user50.jpg",
      status: "online",
    },
    {
      id: 4,
      name: "Emily Davis",
      profession: "Teacher",
      image: "/images/users/user51.jpg",
      status: "offline",
    },
    {
      id: 5,
      name: "MM Johnson",
      profession: "Developer",
      image: "/images/users/user52.jpg",
      status: "online",
    },
    {
      id: 6,
      name: "Jack Reacher",
      profession: "Developer",
      image: "/images/users/user53.jpg",
      status: "online",
    },
    {
      id: 7,
      name: "Emily Davis",
      profession: "Teacher",
      image: "/images/users/user54.jpg",
      status: "offline",
    },
  ]);

  // Dropdown menu state
  const [anchorEl, setAnchorEl] = React.useState(null);
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
          mb: "20px",
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
          Recent Clients
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

      <Box>
        {clients.slice(0, 7).map((client) => (
          <Box
            key={client.id}
            className="d-flex align-items-center position-relative border-top lcbpm-none"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              pt: "11px",
              mb: "11px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <Box sx={{ position: "relative" }}>
                <img
                  src={client.image}
                  alt="user-image"
                  className="rounded-circle"
                  width={35}
                  height={35}
                />
                <Box
                  sx={{
                    backgroundColor:
                      client.status === "online" ? "success.main" : "#8695aa",
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                    position: "absolute",
                    bottom: "5px",
                    right: 0,
                    border: "1px solid #fff",
                  }}
                ></Box>
              </Box>

              <div className="content">
                <Typography
                  className="text-black"
                  sx={{
                    fontWeight: 600,
                  }}
                >
                  {client.name}
                </Typography>
                <Typography sx={{ fontSize: "12px" }}>
                  {client.profession}
                </Typography>
              </div>
            </Box>

            <Link
              href="#"
              className="bg-grey-100"
              style={{
                display: "flex",
                width: "25px",
                height: "25px",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "50%",
              }}
            >
              <i className="ri-arrow-right-line"></i>
            </Link>
          </Box>
        ))}
      </Box>
    </Card>
  );
};

export default RecentClients;
