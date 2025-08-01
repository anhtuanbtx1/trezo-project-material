"use client";

import React from "react";
import { Grid, Box, Typography } from "@mui/material";

const KeyFeatures = () => {
  // Data for Key Features
  const features = [
    {
      title: "Real-Time Updates",
      description:
        "Provide real-time updates and notifications to keep users informed about important events, changes, or updates within the system.",
      icon: "/images/front-pages/stacks.svg",
      backgroundColor: "#DDE4FF",
    },
    {
      title: "Quality Code",
      description:
        "These features include adherence to coding standards, robust error handling mechanisms, efficient algorithms, scalability, maintainability, and readability.",
      icon: "/images/front-pages/code.svg",
      backgroundColor: "#F3E8FF",
    },
    {
      title: "24/7 Customer Support",
      description:
        "Our 24/7 customer support is dedicated to providing round-the-clock assistance, ensuring that help is always available whenever our customers need it.",
      icon: "/images/front-pages/support_agent.svg",
      backgroundColor: "#FFE8D4",
    },
  ];

  return (
    <Box
      sx={{
        position: "relative",
        zIndex: "1",
        pb: { xs: "60px", sm: "60px", md: "80px", lg: "100px", xl: "120px" },
      }}
    >
      <Box
        sx={{
          maxWidth: {
            xs: "100%",
            sm: "700px",
            md: "720px",
            lg: "1140px",
            xl: "1320px",
          },
          mx: "auto",
          px: "12px",
        }}
      >
        {/* Section Title */}
        <Box className="section-title text-center">
          <div className="sub-title">
            <span className="text-purple">Key Features</span>
          </div>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "24px", md: "28px", lg: "34px", xl: "36px" },
            }}
          >
            Discover What Sets Us Apart: Highlighted Dashboard Functions
          </Typography>
        </Box>

        {/* Features Grid */}
        <Grid
          container
          justifyContent="center"
          columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}
        >
          {features.map((feature, index) => (
            <Grid key={index} size={{ xs: 12, sm: 6, md: 6, lg: 4 }}>
              <Box className="fp-single-key-feature-box">
                <div
                  className="icon"
                  style={{
                    backgroundColor: feature.backgroundColor,
                  }}
                >
                  <img
                    src={feature.icon}
                    alt={feature.title.toLowerCase().replace(/\s+/g, "_")}
                    width={55}
                    height={55}
                  />
                </div>
                <h3 className="fw-semibold">{feature.title}</h3>
                <p>{feature.description}</p>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default KeyFeatures;
