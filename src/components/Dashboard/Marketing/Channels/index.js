"use client";

import * as React from "react";
import { Card, Box, Typography } from "@mui/material";

const Channels = () => {
  const channelData = [
    {
      name: "Facebook",
      type: "Community",
      icon: "/images/icons/facebook3.svg",
      progress: 50,
      color: "primary",
    },
    {
      name: "Dribbble",
      type: "Community",
      icon: "/images/icons/dribbble2.svg",
      progress: 75,
      color: "secondary",
    },
    {
      name: "Instagram",
      type: "Reels",
      icon: "/images/icons/instagram2.svg",
      progress: 30,
      color: "orange",
    },
    {
      name: "Behance",
      type: "Community",
      icon: "/images/icons/behance.svg",
      progress: 80,
      color: "purple",
    },
    {
      name: "Figma",
      type: "Community",
      icon: "/images/icons/figma2.svg",
      progress: 50,
      color: "info",
    },
    {
      name: "Google",
      type: "SEO & PPC",
      icon: "/images/icons/google3.svg",
      progress: 20,
      color: "success",
    },
  ];

  return (
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
          Channels
        </Typography>
      </Box>

      <Box>
        {channelData.map((channel, index) => (
          <Box
            key={index}
            className="lcbpm-none border-bottom"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              pb: "15px",
              mb: "14px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
              }}
            >
              <img
                src={channel.icon}
                alt={channel.name}
                width={26}
                height={26}
              />
              <Box>
                <Typography
                  component="span"
                  className="text-black"
                  sx={{
                    display: "block",
                    fontWeight: "600",
                  }}
                >
                  {channel.name}
                </Typography>
                <Typography sx={{ display: "block", fontSize: "12px" }}>
                  {channel.type}
                </Typography>
              </Box>
            </Box>

            <Box sx={{ width: "150px" }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  lineHeight: "none",
                }}
              >
                <Box
                  className={`bg-${channel.color}-100`}
                  sx={{
                    display: "flex",
                    width: "100%",
                    height: "8px",
                    overflow: "hidden",
                    borderRadius: "10px",
                  }}
                >
                  <Box
                    className={`bg-${channel.color}`}
                    style={{ width: `${channel.progress}%` }}
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      overflow: "hidden",
                      borderRadius: "10px",
                    }}
                  ></Box>
                </Box>
                <Typography component="span" sx={{ display: "block" }}>
                  {channel.progress}%
                </Typography>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </Card>
  );
};

export default Channels;
