"use client";

import React from "react";
import { Card, Box, Typography } from "@mui/material";

const CryptoMarketCap = () => {
  return (
    <>
      <Card
        sx={{
          backgroundColor: "#F3E8FF",
          boxShadow: "none",
          borderRadius: "7px",
          mb: "25px",
          paddingY: { xs: "18px", sm: "20px", lg: "15px" },
          paddingX: { xs: "18px", sm: "20px", lg: "25px" },
        }}
        className="rmui-card for-dark-bg-162243"
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <Box>
            <Typography sx={{ mb: "3px" }}>Crypto Market Cap</Typography>

            <Typography
              variant="h5"
              sx={{ fontWeight: "700", fontSize: { xs: "18px", md: "20px" } }}
            >
              $2.64T
            </Typography>
          </Box>

          <Box
            className="bg-white"
            sx={{
              width: "53px",
              height: "53px",
              borderRadius: "50%",
              color: "purple.main",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexShrink: 0,
            }}
          >
            <i className="material-symbols-outlined">payments</i>
          </Box>
        </Box>
      </Card>
    </>
  );
};

export default CryptoMarketCap;
