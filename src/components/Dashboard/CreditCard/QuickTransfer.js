"use client";

import React from "react";
import { Card, Box, Typography, TextField, Button } from "@mui/material";

const QuickTransfer = () => {
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
        <Typography
          variant="h3"
          sx={{
            fontSize: { xs: "16px", md: "18px" },
            fontWeight: 700,
            mb: "20px",
          }}
          className="text-black"
        >
          Quick Transfer
        </Typography>

        <Box component="form">
          <Box sx={{ mt: "20px", position: "relative" }}>
            <Typography
              component="h5"
              sx={{
                fontWeight: "500",
                fontSize: "13px",
                mb: "10px",
              }}
              className="text-body"
            >
              Card Number
            </Typography>

            <TextField
              autoComplete="cardNumber"
              name="cardNumber"
              required
              fullWidth
              id="cardNumber"
              label="**** **** **** 1580"
              autoFocus
              InputProps={{
                style: { borderRadius: 8, fontWeight: 500 },
              }}
            />
          </Box>

          <Box sx={{ mt: "20px", position: "relative" }}>
            <Typography
              component="h5"
              sx={{
                fontWeight: "500",
                fontSize: "13px",
                mb: "10px",
              }}
              className="text-body"
            >
              Transfer Amount
            </Typography>

            <TextField
              autoComplete="transferAmount"
              name="transferAmount"
              required
              fullWidth
              id="transferAmount"
              label="$1,580"
              autoFocus
              InputProps={{
                style: { borderRadius: 8, fontWeight: 500 },
              }}
            />

            <Button
              type="button"
              sx={{
                position: "absolute",
                right: "0",
                bottom: "0",
                height: "53px",
                width: "53px",
                minWidth: "53px",
                borderRadius: "8px",
                backgroundColor: "primary.main",
                color: "#fff !important",

                "&:hover": {
                  backgroundColor: "secondary.main",
                },
              }}
            >
              <i
                className="material-symbols-outlined"
                style={{ fontSize: "20px" }}
              >
                send_money
              </i>
            </Button>
          </Box>
        </Box>
      </Card>
    </>
  );
};

export default QuickTransfer;
