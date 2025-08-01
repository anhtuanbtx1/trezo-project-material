"use client";

import React, { useState } from "react";
import {
  Card,
  Box,
  Typography,
  Menu,
  IconButton,
  MenuItem,
  Button,
  FormControl,
} from "@mui/material";
import { Link } from "react-router-dom";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const Seller = () => {
  // Dropdown
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
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
          padding: { xs: "18px", sm: "20px", lg: "25px" },
          mb: "25px",
        }}
        className="rmui-card seller-card"
      >
        <Box
          className="info d-flex align-items-center justify-content-between"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mb: "15px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "15px",
            }}
          >
            <Box>
              <img
                src="/images/sellers/seller1.png"
                alt="seller-image"
                width={50}
                height={50}
              />
            </Box>
            <Box>
              <Link to="/ecommerce/sellers/details">
                <Typography variant="h6" fontSize="16px" className="text-black">
                  Ava Turner
                </Typography>
              </Link>

              <Typography fontSize="13px">turner&#64;trezo.com</Typography>
            </Box>
          </Box>

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
                  boxShadow: "0px 1px 7px #ddd",
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
              <MenuItem>View</MenuItem>
              <MenuItem>Edit</MenuItem>
              <MenuItem>Delete</MenuItem>
            </Menu>
          </Box>
        </Box>

        <Box>
          <Box className="text-black" mt="10px">
            <span className="text-body mr-5">Last Sale Date:</span>
            25 Nov 2024
          </Box>

          <Box className="text-black" mt="10px">
            <span className="text-body mr-5">Item Stock:</span>
            50
          </Box>

          <Box className="text-black" mt="10px">
            <span className="text-body mr-5">Wallet Balance:</span>
            $9,999.50
          </Box>

          <Box className="text-black" mt="10px">
            <span className="text-body mr-5">Revenue:</span>
            $5,999.50
          </Box>

          <Box className="text-black" mt="10px">
            <span className="text-body mr-5">Store:</span>
            TechMaster Store
          </Box>
        </Box>

        <Box component="form" mt="15px">
          <FormControl fullWidth>
            <Typography
              component="label"
              sx={{
                fontWeight: "500",
                fontSize: "14px",
                mb: "10px",
                display: "block",
              }}
              className="text-black"
            >
              Contact Support
            </Typography>

            <textarea
              id="contactSupport"
              name="contactSupport"
              placeholder="Contact Support"
              rows={5}
              style={{
                width: "100%",
                borderRadius: "6px",
                padding: "10px 15px",
                border: "1px solid #D5D9E2",
              }}
            ></textarea>
          </FormControl>

          <Button
            type="submit"
            variant="contained"
            sx={{
              textTransform: "capitalize",
              borderRadius: "6px",
              fontWeight: "500",
              fontSize: { xs: "13px", sm: "16px" },
              padding: { xs: "10px 20px", sm: "10px 24px" },
              color: "#fff !important",
              boxShadow: "none",
              mt: "15px",
            }}
          >
            <i className="material-symbols-outlined mr-5">send</i>
            Send Message
          </Button>
        </Box>
      </Card>
    </>
  );
};

export default Seller;
