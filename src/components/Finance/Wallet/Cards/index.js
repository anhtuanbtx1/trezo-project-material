"use client";

import React, { useState } from "react";
import {
  Grid,
  Box,
  Typography,
  Card,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import AddCardModal from "./AddCardModal";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const Cards = () => {
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
            mb: "0",
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
            Cards
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
              <MenuItem>Edit</MenuItem>
              <MenuItem>Delete</MenuItem>
            </Menu>
          </Box>
        </Box>

        <Grid container columnSpacing={{ xs: 3 }}>
          <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 12 }}>
            <Box
              sx={{
                mt: { xs: "20px", md: "25px" },
                p: { xs: "20px", md: "25px" },
                borderRadius: "16px",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
              style={{
                backgroundImage: "url(/images/wallet/card1.jpg)",
              }}
            >
              <Box
                sx={{
                  mb: "7px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  component={"span"}
                  sx={{
                    display: "block",
                    fontWeight: 500,
                    fontSize: "12px",
                  }}
                  className="text-white"
                >
                  Debit Card
                </Typography>
                <Box
                  sx={{ fontSize: "24px", lineHeight: "1", flexShrink: 0 }}
                  className="text-white"
                >
                  <i className="ri-visa-fill"></i>
                </Box>
              </Box>

              <img
                src="/images/icons/card-frame.png"
                alt="card-frame"
                width={45}
                height={30}
              />

              <Typography
                variant="h5"
                sx={{
                  fontWeight: 600,
                  fontSize: "18px",
                  mt: "10px !important",
                  mb: "50px",
                  lineHeight: "1",
                }}
                className="text-white"
                style={{ wordSpacing: "4px" }}
              >
                5322 0520 0744 1794
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  component={"span"}
                  sx={{ display: "block" }}
                  className="text-white"
                >
                  David Farrior
                </Typography>

                <Typography
                  sx={{ display: "block", fontWeight: 500, fontSize: "12px" }}
                  className="text-white"
                >
                  EXP : 12/30
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 12 }}>
            <Box
              sx={{
                mt: { xs: "20px", md: "25px" },
                p: { xs: "20px", md: "25px" },
                borderRadius: "16px",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
              style={{
                backgroundImage: "url(/images/wallet/card2.jpg)",
              }}
            >
              <Box
                sx={{
                  mb: "7px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  component={"span"}
                  sx={{
                    display: "block",
                    fontWeight: 500,
                    fontSize: "12px",
                  }}
                  className="text-white"
                >
                  Virtual Card
                </Typography>
                <Box
                  sx={{ fontSize: "24px", lineHeight: "1", flexShrink: 0 }}
                  className="text-white"
                >
                  <i className="ri-mastercard-fill"></i>
                </Box>
              </Box>

              <img
                src="/images/icons/card-frame.png"
                alt="card-frame"
                width={45}
                height={30}
              />

              <Typography
                variant="h5"
                sx={{
                  fontWeight: 600,
                  fontSize: "18px",
                  mt: "10px !important",
                  mb: "50px",
                  lineHeight: "1",
                }}
                className="text-white"
                style={{ wordSpacing: "4px" }}
              >
                .... .... .... 1794
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  component={"span"}
                  sx={{ display: "block" }}
                  className="text-white"
                >
                  David Farrior
                </Typography>

                <Typography
                  sx={{ display: "block", fontWeight: 500, fontSize: "12px" }}
                  className="text-white"
                >
                  EXP : 12/30
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Box sx={{ textAlign: "center", mt: "25px" }}>
          <AddCardModal />
        </Box>
      </Card>
    </>
  );
};

export default Cards;
