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

const TransactionHistory = () => {
  // Dropdown
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // Transaction data
  const transactions = [
    {
      title: "Master Card",
      date: "16 Jun 2024 - 7:12 pm",
      amount: "+1,520",
      bgColor: "primary.100",
      icon: "credit_card",
      textColor: "text-primary",
    },
    {
      title: "Paypal",
      date: "15 Jun 2024 - 1:42 am",
      amount: "-2,250",
      bgColor: "error.100",
      icon: "redeem",
      textColor: "text-danger",
    },
    {
      title: "Wise",
      date: "14 Jun 2024 - 4:21 pm",
      amount: "+3,560",
      bgColor: "purple.100",
      icon: "account_balance",
      textColor: "text-purple",
    },
    {
      title: "Payoneer",
      date: "13 Jun 2024 - 2:42 am",
      amount: "+6,500",
      bgColor: "secondary.100",
      icon: "currency_ruble",
      textColor: "text-secondary",
    },
    {
      title: "Credit Card",
      date: "12 Jun 2024 - 3:20 pm",
      amount: "-4,320",
      bgColor: "success.100",
      icon: "credit_score",
      textColor: "text-success",
    },
    {
      title: "Paypal",
      date: "15 Jun 2024 - 1:42 am",
      amount: "-2,250",
      bgColor: "error.100",
      icon: "redeem",
      textColor: "text-danger",
    },
    {
      title: "Wise",
      date: "14 Jun 2024 - 4:21 pm",
      amount: "+3,560",
      bgColor: "purple.100",
      icon: "account_balance",
      textColor: "text-purple",
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
            Transaction History
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
          {/* Dynamically render transactions */}
          {transactions.map((transaction, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: index === 0 ? 0 : "26px",
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
                  className={transaction.textColor}
                  sx={{
                    bgcolor: transaction.bgColor,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "100px",
                    width: "41px",
                    height: "41px",
                  }}
                >
                  <i className="material-symbols-outlined">{transaction.icon}</i>
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
                    {transaction.title}
                  </Typography>

                  <Typography
                    component="span"
                    sx={{ fontSize: "13px", display: "block" }}
                  >
                    {transaction.date}
                  </Typography>
                </Box>
              </Box>

              <Typography component="span" className={transaction.textColor}>
                {transaction.amount}
              </Typography>
            </Box>
          ))}
        </Box>
      </Card>
    </>
  );
};

export default TransactionHistory;
