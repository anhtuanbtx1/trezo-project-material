"use client";

import React from "react";
import { Card, Box, Typography } from "@mui/material";

const TotalBalance = () => {
  return (
    <>
      <Card
        sx={{
          background: "linear-gradient(90deg, #DAEBFF 0%, #ffffff 100%)",
          boxShadow: "none",
          borderRadius: "7px",
          mb: "25px",
          padding: { xs: "18px", sm: "20px", lg: "25px" },
        }}
        className="rmui-card for-dark-bg"
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "10px",
          }}
        >
          <Box>
            <Typography sx={{ mb: "5px" }}>Total Balance</Typography>

            <Typography
              variant="h3"
              sx={{
                fontSize: { xs: "17px", md: "20px" },
                fontWeight: 700,
                mb: "22px",
              }}
            >
              $20,507
            </Typography>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <Box
                sx={{
                  border: "1px solid",
                  borderRadius: "30px",
                  backgroundColor: "success.100",
                  color: "success.700",
                  borderColor: "success.300",
                  lineHeight: 1,
                  fontSize: "12px",
                  display: "inline-block",
                  fontWeight: 500,
                  p: "3.5px 9px",
                  textTransform: "capitalize",
                }}
              >
                +28.5%
              </Box>

              <Typography sx={{ fontSize: "12px" }}>Last month</Typography>
            </Box>
          </Box>

          <Box
            sx={{
              width: "75px",
              height: "75px",
              backgroundColor: "secondary.100",
              color: "secondary.main",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <i
              className="material-symbols-outlined"
              style={{ fontSize: "35px" }}
            >
              account_balance_wallet
            </i>
          </Box>
        </Box>
      </Card>
    </>
  );
};

export default TotalBalance;
