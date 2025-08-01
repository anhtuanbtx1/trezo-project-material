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

const LowStockAlerts = () => {
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
  const [lowStockItems, setLowStockItems] = useState([]);

  useEffect(() => {
    // Simulated API call to fetch low stock items
    const fetchLowStockItems = async () => {
      const mockLowStockItems = [
        { id: "1", name: "Thai Bean Soup", quantity: 1 },
        { id: "2", name: "Banana Shake", quantity: 3 },
        { id: "3", name: "Chicken Tandoori", quantity: 5 },
        { id: "4", name: "Thai Chicken Masala", quantity: 5 },
        { id: "5", name: "Chicken Club Sandwich", quantity: 6 },
        { id: "6", name: "Shrimp Fried Rice", quantity: 2 },
        { id: "7", name: "Grilled Salmon", quantity: 4 },
      ];
      setLowStockItems(mockLowStockItems);
    };

    fetchLowStockItems();
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
            Low Stock Alerts
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
              paddingBottom: "14.3px",
              marginBottom: "14.3px",

              "&:last-child": {
                paddingBottom: 0,
                marginBottom: 0,
                borderBottom: "none !important",
              },
            },
          }}
        >
          {lowStockItems.map((item) => (
            <Box
              key={item.id}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
              className="border-bottom"
            >
              <Typography
                variant="h5"
                sx={{ fontSize: "14px", fontWeight: 600 }}
              >
                {item.name}
              </Typography>
              <Typography sx={{ color: "error.main", fontWeight: 700 }}>
                {item.quantity}
              </Typography>
            </Box>
          ))}
        </Box>
      </Card>
    </>
  );
};

export default LowStockAlerts;
