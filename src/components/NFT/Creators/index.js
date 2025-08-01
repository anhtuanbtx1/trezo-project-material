"use client";

import React, { useState } from "react";
import { Box, Typography, Grid, Button } from "@mui/material";
import Filter from "./Filter";

const initialCreatorsData = [
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
  {
    id: "5",
    name: "Starry Night",
    items: 1500,
    profileImage: "/images/nfts/user.gif",
    backgroundImage: "/images/nfts/creator5.jpg",
    isFollowed: false,
  },
  {
    id: "6",
    name: "Dreamy World",
    items: 4200,
    profileImage: "/images/nfts/user.gif",
    backgroundImage: "/images/nfts/creator6.jpg",
    isFollowed: true,
  },
  {
    id: "7",
    name: "Magical Art",
    items: 5123,
    profileImage: "/images/nfts/user.gif",
    backgroundImage: "/images/nfts/creator7.jpg",
    isFollowed: false,
  },
  {
    id: "8",
    name: "Mystic Vibes",
    items: 3284,
    profileImage: "/images/nfts/user.gif",
    backgroundImage: "/images/nfts/creator8.jpg",
    isFollowed: false,
  },
  {
    id: "9",
    name: "Hooman Robotic",
    items: 4213,
    profileImage: "/images/nfts/user.gif",
    backgroundImage: "/images/nfts/creator3.jpg",
    isFollowed: true,
  },
  {
    id: "10",
    name: "Colorful Life",
    items: 2314,
    profileImage: "/images/nfts/user.gif",
    backgroundImage: "/images/nfts/creator4.jpg",
    isFollowed: false,
  },
  {
    id: "11",
    name: "Hunny Bunny",
    items: 3204,
    profileImage: "/images/nfts/user.gif",
    backgroundImage: "/images/nfts/creator1.jpg",
    isFollowed: false,
  },
  {
    id: "12",
    name: "Aristocrat",
    items: 5301,
    profileImage: "/images/nfts/user.gif",
    backgroundImage: "/images/nfts/creator2.jpg",
    isFollowed: false,
  },
];

const ITEMS_PER_PAGE = 8;

const Creators = () => {
  const [creators, setCreators] = useState(initialCreatorsData);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(creators.length / ITEMS_PER_PAGE);

  const displayedCreators = creators.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const toggleFollow = (id) => {
    setCreators((prevCreators) =>
      prevCreators.map((creator) =>
        creator.id === id
          ? { ...creator, isFollowed: !creator.isFollowed }
          : creator
      )
    );
  };

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <>
      <Filter />

      <Box sx={{ mb: "25px" }}>
        <Grid
          container
          columnSpacing={{ xs: 1, sm: 2, md: 3, lg: 3 }}
          spacing={"25px"}
          justifyContent="center"
        >
          {displayedCreators.map((creator) => (
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
                        height: "68px",
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
                    onClick={() => toggleFollow(creator.id)}
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

      {/* Pagination */}
      <Box
        className="bg-white"
        sx={{
          mb: "25px",
          p: { xs: "20px", md: "25px" },
          borderRadius: "7px",
        }}
      >
        <Box
          sx={{
            display: { sm: "flex" },
            alignItems: { sm: "center" },
            justifyContent: "space-between",
          }}
        >
          <Typography sx={{ mb: "0" }}>
            Showing {displayedCreators.length} of {creators.length} results
          </Typography>

          <Box
            sx={{
              mt: { xs: "10px", sm: "0" },
              display: "flex",
              alignItems: "center",
              gap: "5px",
            }}
          >
            <Button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="border text-body"
              sx={{
                width: "31px",
                height: "31px",
                textAlign: "center",
                borderRadius: "7px",
                p: "0",
                minWidth: "auto",

                "&:hover": {
                  backgroundColor: "primary.500",
                  color: "#fff !important",
                },
              }}
            >
              <i
                className="material-symbols-outlined"
                style={{ lineHeight: "30px" }}
              >
                chevron_left
              </i>
            </Button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <Button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`border  ${
                  page === currentPage ? "bg-primary text-white" : "text-body"
                }`}
                sx={{
                  width: "31px",
                  height: "31px",
                  textAlign: "center",
                  borderRadius: "7px",
                  p: "0",
                  minWidth: "auto",
                  fontSize: "14px",

                  "&:hover": {
                    backgroundColor: "primary.500",
                    color: "#fff !important",
                  },
                }}
              >
                {page}
              </Button>
            ))}

            <Button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="border text-body"
              sx={{
                width: "31px",
                height: "31px",
                textAlign: "center",
                borderRadius: "7px",
                p: "0",
                minWidth: "auto",

                "&:hover": {
                  backgroundColor: "primary.500",
                  color: "#fff !important",
                },
              }}
            >
              <i
                className="material-symbols-outlined"
                style={{ lineHeight: "30px" }}
              >
                chevron_right
              </i>
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Creators;
