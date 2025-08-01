"use client";

import React from "react";
import { Box, Typography, Card } from "@mui/material";
import { Link } from "react-router-dom";

const TopChannels = () => {
  // Calculate strokeDashoffset based on percentage
  const calculateOffset = (percentage) => {
    const circumference = 565.48; // 2 * π * r (where r = 90)
    return circumference - (circumference * percentage) / 100;
  };

  // Determine circle color based on percentage
  const getCircleColor = (percentage) => {
    if (percentage >= 80) return "#58F229"; // Green for high percentages
    if (percentage >= 60) return "#757DFF"; // Blue for medium-high
    if (percentage >= 40) return "#5DA8FF"; // Light blue for medium
    if (percentage >= 20) return "#FE7A36"; // Orange for low-medium
    return "#BF85FB"; // Purple for low
  };

  const channels = [
    {
      id: "facebook",
      name: "Facebook",
      icon: "/images/icons/facebook3.svg",
      alt: "facebook",
      category: "Community",
      percentage: 80,
    },
    {
      id: "dribbble",
      name: "Dribbble",
      icon: "/images/icons/dribbble2.svg",
      alt: "dribbble2",
      category: "Community",
      percentage: 75,
    },
    {
      id: "instagram",
      name: "Instagram",
      icon: "/images/icons/instagram2.svg",
      alt: "instagram2",
      category: "Community",
      percentage: 80,
    },
    {
      id: "google",
      name: "Google",
      icon: "/images/icons/google3.svg",
      alt: "google3",
      category: "Community",
      percentage: 100,
    },
    {
      id: "figma",
      name: "Figma",
      icon: "/images/icons/figma2.svg",
      alt: "figma2",
      category: "Community",
      percentage: 60,
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
        >
          Top Channels
        </Typography>

        <Box>
          <Link href="#" className="text-body hover-text-color:hover">
            Browse All
            <i className="ri-arrow-right-s-line"></i>
          </Link>
        </Box>
      </Box>

      <Box>
        {channels.map((channel) => (
          <Box
            key={channel.id}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              pb: "10px",
              mb: "10px",
            }}
            className="border-bottom lcbpm-none"
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "15px",
              }}
            >
              <img
                src={channel.icon}
                alt={channel.alt}
                width={26}
                height={26}
              />

              <Box>
                <Typography
                  className="text-black"
                  sx={{
                    fontWeight: 600,
                  }}
                >
                  {channel.name}
                </Typography>
                <Typography sx={{ fontSize: "12px" }}>
                  {channel.category}
                </Typography>
              </Box>
            </Box>

            <Box
              sx={{
                position: "relative",
                width: "60px",
                height: "50px",
              }}
            >
              <svg
                width="60"
                height="60"
                viewBox="-25 -25 250 250"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                style={{ transform: "rotate(-90deg)" }}
              >
                <circle
                  r="90"
                  cx="100"
                  cy="100"
                  fill="transparent"
                  stroke="transparent"
                  strokeWidth="16px"
                  strokeDasharray="565.48px"
                  strokeDashoffset="0"
                ></circle>
                <circle
                  r="90"
                  cx="100"
                  cy="100"
                  stroke={getCircleColor(channel.percentage)}
                  strokeWidth="16px"
                  strokeLinecap="round"
                  strokeDashoffset={calculateOffset(channel.percentage)}
                  fill="transparent"
                  strokeDasharray="565.48px"
                ></circle>
              </svg>

              <Typography
                sx={{
                  fontSize: "10px",
                  position: "absolute",
                  top: "60%",
                  left: "50%",
                  transform: "translateY(-50%) translateX(-50%)",
                }}
              >
                {channel.percentage}%
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Card>
  );
};

export default TopChannels;
