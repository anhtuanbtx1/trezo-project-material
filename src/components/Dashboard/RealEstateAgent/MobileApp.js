"use client";

import React from "react";
import { Box, Typography } from "@mui/material"; 

const MobileApp = () => {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#B2FF97",
          borderRadius: "7px",
          mb: "25px",
          padding: { xs: "18px", sm: "20px", lg: "25px" },
        }}
      >
        <Box
          sx={{
            maxWidth: "210px",
            pt: "25px",
            pb: "25px",
            mx: "auto",
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontSize: { xs: "20px", md: "24px" },
              fontWeight: 700,
              mb: "15px",
            }}
            className="text-black-for-dark"
          >
            Manage Your Dashboard From Your Mobile
          </Typography>

          <a
            href="https://www.apple.com/app-store/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: "7px 17.5px",
              marginBottom: "31px",
              display: "inline-block",
              borderRadius: "0.375rem",
              color: "#fff",
              backgroundColor: "#1A5710",
              fontSize: "16px",
              fontWeight: 500,
            }}
          >
            Download App
          </a>

          <img
            src="/images/paper.png"
            alt="paper-image"
            width={207}
            height={188}
          />
        </Box>
      </Box>
    </>
  );
};

export default MobileApp;
