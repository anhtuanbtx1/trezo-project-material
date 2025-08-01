"use client";

import React from "react";
import { Box, Typography, Card, Grid } from "@mui/material";

const statsData = [
  {
    title: "Total Listings",
    value: "3251",
    change: "+3.4%",
    changeType: "positive",
    image: "/images/buildings/building1.png",
  },
  {
    title: "Sales Volume",
    value: "$1.2M",
    change: "-3.2%",
    changeType: "negative",
    image: "/images/buildings/building2.png",
  },
  {
    title: "Active Deals",
    value: "1124",
    change: "+1.4%",
    changeType: "positive",
    image: "/images/buildings/building3.png",
  },
  {
    title: "Closed Deals",
    value: "2312",
    change: "-1.2%",
    changeType: "negative",
    image: "/images/buildings/building4.png",
  },
];

const Stats = () => {
  return (
    <>
      <Box sx={{ mt: "-60px" }}>
        <Grid container columnSpacing={{ xs: 3 }}>
          {statsData.map((stat, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 6, lg: 3, xl: 3 }} key={index}>
              <Card
                sx={{
                  boxShadow: "none",
                  borderRadius: "7px",
                  mb: "25px",
                  padding: { xs: "15px", sm: "20px", lg: "20px", xl: "25px" },
                }}
                className="rmui-card"
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
                    <Typography sx={{ mb: "3px" }}>{stat.title}</Typography>
                    <Typography
                      variant="h4"
                      sx={{
                        fontSize: { xs: "22px", md: "24px" },
                        fontWeight: 700,
                        mb: "8px",
                      }}
                    >
                      {stat.value}
                    </Typography>
                    <Box
                      sx={{
                        border: "1px solid",
                        borderRadius: "30px",
                        backgroundColor:
                          stat.changeType === "positive"
                            ? "success.100"
                            : "error.100",
                        color:
                          stat.changeType === "positive"
                            ? "success.700"
                            : "error.700",
                        borderColor:
                          stat.changeType === "positive"
                            ? "success.300"
                            : "error.300",
                        lineHeight: 1,
                        fontSize: "12px",
                        display: "inline-block",
                        fontWeight: 500,
                        p: "3.5px 9px",
                        textTransform: "capitalize",
                      }}
                    >
                      {stat.change}
                    </Box>
                  </Box>
                  <Box>
                    <img
                      src={stat.image}
                      alt={`${stat.title}`}
                      width={60}
                      height={60}
                    />
                  </Box>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default Stats;
