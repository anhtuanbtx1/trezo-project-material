"use client";

import React from "react";
import { Box, Typography, Grid, Button } from "@mui/material";
import { Link } from "react-router-dom";

const creatorsData = [
  {
    id: "1",
    name: "Hunny Bunny",
    items: 3204,
    profileImage: "/images/nfts/user.gif",
    backgroundImage: "/images/nfts/creator1.jpg",
    isFollowed: false,
  },
  {
    id: "2",
    name: "Aristocrat",
    items: 5301,
    profileImage: "/images/nfts/user.gif",
    backgroundImage: "/images/nfts/creator2.jpg",
    isFollowed: false,
  },
  {
    id: "3",
    name: "Hooman Robotic",
    items: 4213,
    profileImage: "/images/nfts/user.gif",
    backgroundImage: "/images/nfts/creator3.jpg",
    isFollowed: true,
  },
  {
    id: "4",
    name: "Colorful Life",
    items: 2314,
    profileImage: "/images/nfts/user.gif",
    backgroundImage: "/images/nfts/creator4.jpg",
    isFollowed: false,
  },
];

const TopCreators = () => {
  return (
    <>
      <Box sx={{ mb: "25px" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mb: "15px",
          }}
        >
          <Typography
            variant="h5"
            sx={{ fontSize: "18px", mb: "0", fontWeight: "600" }}
          >
            Top Creators
          </Typography>

          <Link to="/nft/explore-all/" className="text-body hover-text-color">
            <Box sx={{ display: "flex", alignItems: "center", gap: "2px" }}>
              Browse All{" "}
              <i
                className="ri-arrow-right-s-line"
                style={{ fontSize: "20px" }}
              ></i>
            </Box>
          </Link>
        </Box>

        <Grid
          container
          columnSpacing={{ xs: 1, sm: 2, md: 3, lg: 3 }}
          spacing={"25px"}
          justifyContent="center"
        >
          {creatorsData.map((creator) => (
            <Grid size={{ xs: 12, sm: 6, md: 4, lg: 4, xl: 3 }} key={creator.id}>
              <Box className="bg-white" sx={{ borderRadius: "7px", p: "10px" }}>
                <img
                  src={creator.backgroundImage}
                  alt="creator-image"
                  width={484}
                  height={252}
                  style={{
                    borderRadius: "7px",
                    width: "100%",
                  }}
                />

                <Box sx={{ textAlign: "center", mt: "-42px" }}>
                  <Box
                    sx={{
                      position: "relative",
                      mb: "15px",
                      display: "inline-block",
                    }}
                  >
                    <img
                      src={creator.profileImage} 
                      alt="user-image"
                      width={68}
                      height={68}
                      style={{
                        borderRadius: "100%",
                        width: "68px",
                        height: '68px'
                      }}
                    />
                    <img
                      src="/images/nfts/verified2.svg"
                      className="po-right-0"
                      alt="verified"
                      width={20}
                      height={20}
                      style={{
                        position: "absolute",
                        bottom: 0,
                      }}
                    />
                  </Box>

                  <Typography
                    variant="h3"
                    sx={{
                      fontSize: "16px",
                      mb: "8px",
                      fontWeight: "600",
                    }}
                  >
                    {creator.name}
                  </Typography>

                  <Typography
                    component={"span"}
                    sx={{ display: "block", fontSize: "12px" }}
                  >
                    ITEMS: {creator.items}
                  </Typography>

                  <Box
                    sx={{ my: "15px" }}
                    className="border-top my-[15px]"
                  ></Box>

                  <Button
                    type="button"
                    sx={{
                      borderRadius: "7px",
                      py: "10px",
                      px: "17px",
                      fontSize: { xs: "14px", md: "16px" },
                      fontWeight: "500",
                      backgroundColor: creator.isFollowed
                        ? "grey.400"
                        : "var(--primaryColor)",
                      transition: "all 0.3s ease-in-out",
                      textTransform: "capitalize",
                      color: "#fff !important",
                      lineHeight: "1",

                      "&:hover": {
                        backgroundColor: creator.isFollowed
                          ? "grey.500"
                          : "var(--primaryColor)",
                      },
                    }}
                  >
                    {creator.isFollowed ? "Unfollow" : "Follow"}
                  </Button>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default TopCreators;
