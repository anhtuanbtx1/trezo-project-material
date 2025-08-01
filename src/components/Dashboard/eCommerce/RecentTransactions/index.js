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

const RecentTransactions = () => {
  // Dropdown
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const getTransactionColors = (type, amount) => {
    const isPositive = amount.startsWith("+");

    switch (type) {
      case "credit_card":
        return {
          bgColor: isPositive ? "primary.100" : "error.100",
          textColor: isPositive ? "text-primary" : "text-danger",
          amountColor: isPositive ? "success.main" : "error.main", // Added specific amount color
        };
      case "paypal":
        return {
          bgColor: "error.100",
          textColor: "text-danger",
          amountColor: "error.main",
        };
      case "wise":
        return {
          bgColor: "purple.100",
          textColor: "text-purple",
          amountColor: "purple.main",
        };
      case "payoneer":
        return {
          bgColor: "secondary.100",
          textColor: "text-secondary",
          amountColor: "secondary.main",
        };
      default:
        return {
          bgColor: isPositive ? "success.100" : "error.100",
          textColor: isPositive ? "text-success" : "text-danger",
          amountColor: isPositive ? "success.main" : "error.main",
        };
    }
  };

  // Dynamic transactions data (you can replace this with data fetched from an API)
  const transactions = [
    {
      id: 1,
      type: "credit_card",
      name: "Master Card",
      date: "16 Jun 2024 - 7:12 pm",
      amount: "+1,520",
      icon: "credit_card",
    },
    {
      id: 2,
      type: "paypal",
      name: "Paypal",
      date: "15 Jun 2024 - 1:42 am",
      amount: "-2,250",
      icon: "redeem",
    },
    {
      id: 3,
      type: "wise",
      name: "Wise",
      date: "14 Jun 2024 - 4:21 pm",
      amount: "+3,560",
      icon: "account_balance",
    },
    {
      id: 4,
      type: "payoneer",
      name: "Payoneer",
      date: "13 Jun 2024 - 2:42 am",
      amount: "+6,500",
      icon: "currency_ruble",
    },
    {
      id: 5,
      type: "credit_card",
      name: "Credit Card",
      date: "12 Jun 2024 - 3:20 pm",
      amount: "-4,320",
      icon: "credit_score",
    },
  ];

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
            Recent Transactions
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
          {transactions.map((transaction) => {
            const colors = getTransactionColors(
              transaction.type,
              transaction.amount
            );

            return (
              <Box
                key={transaction.id}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginTop: "20px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                  }}
                >
                  <Box
                    className={colors.textColor}
                    sx={{
                      bgcolor: colors.bgColor,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "100px",
                      width: "41px",
                      height: "41px",
                    }}
                  >
                    <i className="material-symbols-outlined">
                      {transaction.icon}
                    </i>
                  </Box>

                  <Box>
                    <Typography
                      className="text-black"
                      component="div"
                      sx={{
                        fontWeight: "500",
                        fontSize: "16px",
                      }}
                    >
                      {transaction.name}
                    </Typography>

                    <Typography
                      component="span"
                      sx={{ fontSize: "13px", display: "block" }}
                    >
                      {transaction.date}
                    </Typography>
                  </Box>
                </Box>

                <Typography
                  component="span"
                  sx={{ color: colors.amountColor, fontWeight: 500 }}
                >
                  {transaction.amount}
                </Typography>
              </Box>
            );
          })}
        </Box>
      </Card>
    </>
  );
};

export default RecentTransactions;
