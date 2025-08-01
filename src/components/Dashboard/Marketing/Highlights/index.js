"use client";

import * as React from "react";
import { Card, Box, Typography } from "@mui/material";

const highlightData = [
  {
    label: "Average Client Rating",
    iconSrc: "/images/icons/star.svg",
    value: "4.9/5.0",
    trend: "up",
    trendColor: "success",
  },
  {
    label: "Instagram Followers",
    iconSrc: "/images/icons/instagram.svg",
    value: "630K",
    trend: "down",
    trendColor: "orange",
  },
  {
    label: "Google Ads CPC",
    iconSrc: "/images/icons/google2.svg",
    value: "$3.58",
    trend: "up",
    trendColor: "success",
  },
];

const Highlights = () => {
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
            Highlights
          </Typography>

          <Typography component="span">Last 7 days</Typography>
        </Box>

        <Box>
          {highlightData.map((item, index) => (
            <Box
              key={index}
              className="lcbpm-none border-bottom"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                pb: "14px",
                mb: "14px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                }}
              >
                <img
                  src={item.iconSrc}
                  alt={item.label}
                  width={18}
                  height={18}
                />
                {item.label}
              </Box>

              <Typography
                component="span"
                className="text-black ltr:pl-[20px] rtl:pr-[20px]"
                sx={{
                  display: "flex",
                  fontWeight: "500",
                  gap: "2px",
                }}
              >
                <i
                  className={`material-symbols-outlined text-${item.trendColor}`}
                  style={{
                    fontSize: "18px",
                  }}
                >
                  {item.trend === "up" ? "arrow_upward" : "arrow_downward"}
                </i>
                {item.value}
              </Typography>
            </Box>
          ))}
        </Box>
      </Card>
    </>
  );
};

export default Highlights;
