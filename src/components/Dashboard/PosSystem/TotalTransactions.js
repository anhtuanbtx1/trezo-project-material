"use client";

import React from "react";
import {
  Card,
  Box,
  Typography,
  MenuItem,
  IconButton,
  Menu,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const TotalTransactions = () => {
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
          boxShadow: "0px 3px 4px 0px rgba(0, 0, 0, 0.05)",
          borderRadius: "7px",
          mb: "25px",
          background: "linear-gradient(103deg, #9135E8 9.27%, #BF85FB 83.62%)",
        }}
        className="rmui-card"
      >
        <Box
          sx={{
            padding: "14.5px 25px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "10px",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontSize: "16px",
              mb: "0",
              fontWeight: "normal",
              color: "#fff !important",
            }}
          >
            Total Transactions
          </Typography>

          <Box className="-mr-10">
            <IconButton
              onClick={handleClick}
              size="small"
              aria-controls={open ? "account-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              sx={{
                padding: "0",
                color: "#fff !important",
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
              <MenuItem>Today</MenuItem>
              <MenuItem>Last 7 Days</MenuItem>
              <MenuItem>Last Month</MenuItem>
            </Menu>
          </Box>
        </Box>

        <Box
          className="card-body bg-white p-4 rounded-2"
          sx={{
            bgcolor: "#fff",
            padding: "24px",
            borderRadius: "7px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "15px",
            }}
          >
            <Typography
              variant="h3"
              sx={{
                fontSize: { xs: "20px", md: "24px" },
                fontWeight: 700,
                mb: "0",
              }}
            >
              1200
            </Typography>

            <Box
              sx={{
                backgroundColor: "#F3E8FF",
                width: "50px",
                height: "50px",
                borderRadius: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src="/images/pos-system/total-transactions-icon.svg"
                alt="total-transactions-icon"
                width={26}
                height={26}
              />
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <Box
              className="material-symbols-outlined fs-20 text-success-60"
              sx={{
                fontSize: "20px !important",
                color: "success.600",
              }}
            >
              trending_up
            </Box>
            <span>
              <span style={{ fontWeight: 600 }}>+10%</span> from last month
            </span>
          </Box>
        </Box>
      </Card>
    </>
  );
};

export default TotalTransactions;
