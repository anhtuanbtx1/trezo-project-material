"use client";

import Grid from "@mui/material/Grid";
import { Box, Typography } from "@mui/material";

// Sample dynamic data for social platforms
const socialPlatformsData = [
  {
    id: 1,
    name: "Instagram",
    icon: "/images/social-media/instagram.png",
    followers: "345k",
    growth: {
      percentage: "3.5%",
      trend: "up",
    },
  },
  {
    id: 2,
    name: "LinkedIn",
    icon: "/images/social-media/linkedin.png",
    followers: "56.3k",
    growth: {
      percentage: "2.1%",
      trend: "down",
    },
  },
  {
    id: 3,
    name: "TikTok",
    icon: "/images/social-media/tiktok.png",
    followers: "132k",
    growth: {
      percentage: "6.3%",
      trend: "up",
    },
  },
  {
    id: 4,
    name: "Facebook",
    icon: "/images/social-media/facebook.png",
    followers: "98.5k",
    growth: {
      percentage: "2.6%",
      trend: "up",
    },
  },
  {
    id: 5,
    name: "X (Twitter)",
    icon: "/images/social-media/x.png",
    followers: "75.2k",
    growth: {
      percentage: "3.5%",
      trend: "up",
    },
  },
  {
    id: 6,
    name: "YouTube",
    icon: "/images/social-media/youtube.png",
    followers: "84.7k",
    growth: {
      percentage: "5.2%",
      trend: "down",
    },
  },
];

const SocialPlatformFollowers = () => {
  return (
    <Grid
      container
      columnSpacing={{ xs: 1, sm: 2, md: 3, lg: 3 }}
      justifyContent="center"
    >
      {socialPlatformsData.map((platform) => (
        <Grid size={{ xs: 12, sm: 4, md: 4, lg: 4, xl: 4 }} key={platform.id}>
          <Box
            className="bg-white border"
            sx={{
              borderRadius: "7px",
              mb: "25px",
              padding: { xs: "18px", sm: "20px", lg: "25px" },
            }}
          >
            <img
              src={platform.icon}
              alt={platform.name}
              width={40}
              height={40}
              style={{
                marginBottom: "15px",
              }}
            />

            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "20px", md: "25px", lg: "30px", xl: "36px" },
                fontWeight: 500,
                mb: "0",
                lineHeight: "1",
              }}
            >
              {platform.followers}
            </Typography>

            <Typography
              sx={{
                color: "#8695aa",
                mb: "25px",
              }}
            >
              Followers
            </Typography>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography fontSize={12}>This Month</Typography>

              <Box
                sx={{
                  backgroundColor:
                    platform.growth.trend === "up" ? "#D8FFC8" : "#FFE1DD",
                  color: platform.growth.trend === "up" ? "#1e8308" : "#D71C00",
                  padding: "0.6px 4px",
                  display: "flex",
                  gap: "3px",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "4px",
                  fontSize: "12px",
                }}
              >
                <i
                  className={`ri-arrow-${
                    platform.growth.trend === "up" ? "up" : "down"
                  }-line`}
                ></i>

                {platform.growth.percentage}
              </Box>
            </Box>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default SocialPlatformFollowers;
