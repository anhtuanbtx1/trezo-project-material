"use client";

import React from "react";
import {
  Card,
  Box,
  Typography,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";

const UpgradeYourPlan = () => {
  return (
    <>
      <Card
        sx={{
          boxShadow: "none",
          borderRadius: "7px",
          mb: "25px",
          padding: { xs: "18px", sm: "20px", lg: "25px" },
        }}
        className="rmui-card border"
      >
        <Box className="p-4 text-center">
          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: "20px", md: "24px" },
              fontWeight: 500,
              mb: "15px",
            }}
          >
            Upgrade Your Plan!
          </Typography>

          <Typography
            sx={{
              fontSize: "14px",
              mb: "10px",
              mx: "auto",
              lineHeight: 1.44,
              maxWidth: "307px",
            }}
          >
            Access advanced features, enhanced support, and exclusive tools
            designed to help you achieve more.
          </Typography>

          <Box sx={{ mb: "5px" }}>
            <img
              src="/images/social-media/upgrade-plan.png"
              alt="upgrade"
              width={274}
              height={195}
            />
          </Box>

          <Link
            to="#"
            style={{
              display: "inline-block",
            }}
          >
            <Button
              variant="contained"
              sx={{
                bgcolor: "primary.main",
                padding: "6px 25px",
                display: "flex",
                alignItems: "center",
                fontSize: "16px",
                fontWeight: 500,
                gap: "5px",
                textTransform: "capitalize",
                borderRadius: "7px",
                color: "#fff !important",
              }}
            >
              <i className="ri-fire-fill" style={{ fontSize: "18px" }}></i>
              <span>Upgrade Plan</span>
            </Button>
          </Link>
        </Box>
      </Card>
    </>
  );
};

export default UpgradeYourPlan;
