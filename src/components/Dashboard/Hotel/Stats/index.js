"use client";

import React from "react";
import { Box, Typography, Card, Grid } from "@mui/material";

const Stats = () => {
  const statsData = [
    {
      id: 1,
      title: "New Bookings",
      value: "1540",
      change: {
        value: "-4.15%",
        isPositive: false,
      },
      cardColor: "orange",
      icon: "/images/icons/add-event2.svg",
      iconAlt: "new-bookings",
    },
    {
      id: 2,
      title: "Check In",
      value: "245",
      change: {
        value: "+3.4%",
        isPositive: true,
      },
      cardColor: "primary",
      icon: "/images/icons/check-in-desk.svg",
      iconAlt: "check-in",
    },
    {
      id: 3,
      title: "Check Out",
      value: "315",
      change: {
        value: "-1.4%",
        isPositive: false,
      },
      cardColor: "purple",
      icon: "/images/icons/point.svg",
      iconAlt: "check-out",
    },
  ];

  const getCardStyles = (color) => {
    switch (color) {
      case "orange":
        return {
          bgColor: "orange.100",
          iconBg: "orange.50",
        };
      case "primary":
        return {
          bgColor: "primary.100",
          iconBg: "primary.50",
        };
      case "purple":
        return {
          bgColor: "purple.100",
          iconBg: "purple.50",
        };
      default:
        return {
          bgColor: "grey.100",
          iconBg: "grey.50",
        };
    }
  };

  const getBadgeStyles = (isPositive) => {
    return {
      bgColor: isPositive ? "success.100" : "error.50",
      textColor: isPositive ? "success.700" : "error.main",
      borderColor: isPositive ? "success.300" : "error.40",
    };
  };

  return (
    <Card
      sx={{
        boxShadow: "none",
        borderRadius: "7px",
        mb: "25px",
        padding: { xs: "10px 10px 0" },
      }}
      className="rmui-card"
    >
      <Grid container columnSpacing={{ xs: 1 }}>
        {statsData.map((stat) => {
          const cardStyles = getCardStyles(stat.cardColor);
          const badgeStyles = getBadgeStyles(stat.change.isPositive);

          return (
            <Grid size={{ xs: 12, sm: 12, md: 4, lg: 4, xl: 4 }} key={stat.id}>
              <Box
                className="for-dark-bg"
                sx={{
                  borderRadius: "7px",
                  backgroundColor: cardStyles.bgColor,
                  padding: { xs: "20px" },
                  mb: "10px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: { xs: "center", md: "start" },
                    justifyContent: "space-between",
                  }}
                >
                  <Box>
                    <Typography sx={{ mb: "5px" }}>{stat.title}</Typography>
                    <Typography
                      variant="h3"
                      sx={{
                        fontSize: { xs: "20px", md: "28px" },
                        fontWeight: 900,
                        lineHeight: 1,
                        mb: "10px",
                      }}
                    >
                      {stat.value}
                    </Typography>
                    <Box
                      sx={{
                        bgcolor: badgeStyles.bgColor,
                        color: badgeStyles.textColor,
                        border: "1px solid",
                        borderColor: badgeStyles.borderColor,
                        padding: "3px 8px",
                        borderRadius: "30px",
                        fontSize: "12px",
                        fontWeight: "500",
                        display: "inline-block",
                        lineHeight: 1,
                      }}
                    >
                      {stat.change.value}
                    </Box>
                  </Box>

                  <Box
                    className="bg-white"
                    sx={{
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "end",
                      width: "80px",
                      height: "80px",
                      mt: { xs: "0", md: "72px" },
                      flexShrink: 0,
                    }}
                  >
                    <img
                      src={stat.icon}
                      alt={stat.iconAlt}
                      width={56}
                      height={56}
                    />
                  </Box>
                </Box>
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </Card>
  );
};

export default Stats;
