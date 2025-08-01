"use client";

import React, { useState, useEffect } from "react";
import { Box, Typography, Grid, Button } from "@mui/material";
import { Link } from "react-router-dom";

const nftData = [
  {
    id: "35246",
    title: "Christmas Eve",
    authorImage: "/images/nfts/author.gif",
    image: "/images/nfts/featured1.jpg",
    highestBid: "9.75 ETH",
    currentPrice: "5.50 ETH",
    rating: 9.2,
    viewDetails: "/nft/details",
    endTime: Date.now() + 7200000, // 2 hours from now
    totalItems: 253,
    soldItems: 130,
  },
  {
    id: "35247",
    title: "Humming Bird",
    authorImage: "/images/nfts/author.gif",
    image: "/images/nfts/featured2.jpg",
    highestBid: "10.75 ETH",
    currentPrice: "12.50 ETH",
    rating: 9.5,
    viewDetails: "/nft/details",
    endTime: Date.now() + 10800000, // 3 hours from now
    totalItems: 400,
    soldItems: 200,
  },
  {
    id: "35248",
    title: "Naughty Pool",
    authorImage: "/images/nfts/author.gif",
    image: "/images/nfts/featured3.jpg",
    highestBid: "8.75 ETH",
    currentPrice: "9.50 ETH",
    rating: 9.7,
    viewDetails: "/nft/details",
    endTime: Date.now() + 14400000, // 4 hours from now
    totalItems: 500,
    soldItems: 300,
  },
  {
    id: "35249",
    title: "Hello Thumbs",
    authorImage: "/images/nfts/author.gif",
    image: "/images/nfts/featured4.jpg",
    highestBid: "9.30 ETH",
    currentPrice: "8.15 ETH",
    rating: 9.3,
    viewDetails: "/nft/details",
    endTime: Date.now() + 1800000, // 5 hours from now
    totalItems: 100,
    soldItems: 80,
  },
  {
    id: "35250",
    title: "Pixel Watermelon",
    authorImage: "/images/nfts/author.gif",
    image: "/images/nfts/featured5.jpg",
    highestBid: "1.75 ETH",
    currentPrice: "3.50 ETH",
    rating: 9.1,
    viewDetails: "/nft/details",
    endTime: Date.now() + 21600000, // 6 hours from now
    totalItems: 700,
    soldItems: 600,
  },
  {
    id: "35251",
    title: "BDancing Cookies",
    authorImage: "/images/nfts/author.gif",
    image: "/images/nfts/featured6.gif",
    highestBid: "10.75 ETH",
    currentPrice: "12.50 ETH",
    rating: 9.1,
    viewDetails: "/nft/details",
    endTime: Date.now() + 25200000, // 7 hours from now
    totalItems: 200,
    soldItems: 150,
  },
  {
    id: "35252",
    title: "Rotating Flower",
    authorImage: "/images/nfts/author.gif",
    image: "/images/nfts/featured7.jpg",
    highestBid: "3.95 ETH",
    currentPrice: "6.50 ETH",
    rating: 8.7,
    viewDetails: "/nft/details",
    endTime: Date.now() + 28800000, // 8 hours from now
    totalItems: 450,
    soldItems: 300,
  },
  {
    id: "35253",
    title: "Flying Bulb",
    authorImage: "/images/nfts/author.gif",
    image: "/images/nfts/featured8.jpg",
    highestBid: "8.75 ETH",
    currentPrice: "9.50 ETH",
    rating: 9.7,
    viewDetails: "/nft/details",
    endTime: Date.now() + 32400000, // 9 hours from now
    totalItems: 250,
    soldItems: 200,
  },
  {
    id: "35254",
    title: "Naughty Pool",
    authorImage: "/images/nfts/author.gif",
    image: "/images/nfts/featured3.jpg",
    highestBid: "8.75 ETH",
    currentPrice: "9.50 ETH",
    rating: 9.7,
    viewDetails: "/nft/details",
    endTime: Date.now() + 36000000, // 10 hours from now
    totalItems: 800,
    soldItems: 500,
  },
];

const ITEMS_PER_PAGE = 6; // Number of items per page

// Helper function to calculate remaining time
const calculateTimeLeft = (endTime) => {
  const difference = endTime - Date.now();
  if (difference > 0) {
    return {
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }
  return { hours: 0, minutes: 0, seconds: 0 };
};

// Helper function to calculate progress
const calculateProgress = (sold, total) => {
  return Math.min(100, (sold / total) * 100);
};

const AllItems = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [timeLeft, setTimeLeft] = useState({});

  const totalPages = Math.ceil(nftData.length / ITEMS_PER_PAGE);
  const displayedItems = nftData.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  useEffect(() => {
    const timer = setInterval(() => {
      const updatedTimeLeft = nftData.reduce((acc, item) => {
        acc[item.id] = calculateTimeLeft(item.endTime);
        return acc;
      }, {});
      setTimeLeft(updatedTimeLeft);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <>
      <Box sx={{ mb: "25px" }}>
        <Grid container spacing={"25px"} justifyContent="center">
          {displayedItems.map((nft) => {
            const countdown = timeLeft[nft.id] || {
              hours: 0,
              minutes: 0,
              seconds: 0,
            };

            return (
              <Grid size={{ xs: 12, sm: 6, md: 4, lg: 4, xl: 4 }} key={nft.id}>
                <Box
                  className="nft-card bg-white"
                  sx={{
                    p: "10px",
                    borderRadius: "7px",
                  }}
                >
                  <Box sx={{ position: "relative" }}>
                    <img
                      src={nft.image}
                      alt="nft-image"
                      width={484}
                      height={344}
                      style={{
                        marginBottom: "12px",
                        borderRadius: "7px",
                        display: "inline-block",
                        width: "100%",
                      }}
                    />

                    {/* Countdown */}
                    <Box
                      sx={{
                        position: "absolute",
                        left: "10px",
                        right: "10px",
                        bottom: "25px",
                        textAlign: "center",
                        zIndex: "1",
                        p: "10px",
                      }}
                    >
                      <Box
                        sx={{
                          fontSize: "12px",
                          fontWeight: "600",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: "5px",
                          color: "#000",
                        }}
                      >
                        <span>{countdown.hours}h</span>
                        <span>{countdown.minutes}m</span>
                        <span>{countdown.seconds}s</span>
                      </Box>

                      <Box
                        sx={{
                          position: "absolute",
                          left: "0",
                          right: "0",
                          top: "0",
                          bottom: "0",
                          zIndex: "-1",
                          bgcolor: "rgba(255, 255, 255, .8)",
                          backdropFilter: "blur(12px)",
                        }}
                      ></Box>
                    </Box>
                  </Box>

                  {/* NFT Details */}
                  <Box
                    className="border-bottom"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      pb: "10px",
                      mb: "10px",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                      }}
                    >
                      <img
                        src={nft.authorImage}
                        alt="author-image"
                        width={27}
                        height={27}
                        style={{
                          borderRadius: "100%",
                        }}
                      />
                      <Box>
                        <Typography
                          component={"span"}
                          sx={{ fontSize: "12px", display: "block" }}
                        >
                          NFT ID: {nft.id}
                        </Typography>

                        <Link
                          to={nft.viewDetails}
                          className="text-black hover-text-color"
                          style={{
                            display: "block",
                            fontWeight: "600",
                          }}
                        >
                          {nft.title}
                        </Link>
                      </Box>
                    </Box>

                    <img
                      src="/images/nfts/verified2.svg"
                      alt="verified"
                      width={20}
                      height={20}
                    />
                  </Box>

                  <Typography
                    component={"span"}
                    sx={{ display: "block", fontSize: "12px", mb: "1px" }}
                  >
                    Highest Bid:{" "}
                    <Typography
                      component={"span"}
                      className="text-black"
                      sx={{
                        fontWeight: "600",
                        fontSize: "12px",
                      }}
                    >
                      {nft.highestBid}
                    </Typography>
                  </Typography>

                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography
                      component={"span"}
                      sx={{
                        display: "block",
                        fontWeight: "600",
                        color: "primary.800",
                      }}
                    >
                      {nft.currentPrice}
                    </Typography>

                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        fontSize: "12px",
                        gap: "5px",
                      }}
                    >
                      <i
                        className="ri-heart-fill text-orange-600 "
                        style={{ fontSize: "18px" }}
                      ></i>

                      <Box>
                        <Typography
                          component={"span"}
                          sx={{ fontSize: "12px", fontWeight: "600" }}
                          className="text-black"
                        >
                          {nft.rating}/
                        </Typography>
                        10
                      </Box>
                    </Box>
                  </Box>

                  {/* Footer */}
                  <Box
                    sx={{
                      mt: "20px",
                      display: "flex",
                      width: "100%",
                      height: "4px",
                      overflow: "hidden",
                      borderRadius: "7px",
                      bgcolor: "primary.50",
                    }}
                  >
                    <Box
                      sx={{
                        width: `${calculateProgress(
                          nft.soldItems,
                          nft.totalItems
                        )}%`,
                        overflow: "hidden",
                        height: "4px",
                        borderRadius: "7px",
                        bgcolor: "primary.500",
                      }}
                    ></Box>
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "5px",
                      mt: "5px",
                    }}
                  >
                    <Typography component={"span"} sx={{ fontSize: "12px" }}>
                      Sold: {nft.soldItems}
                    </Typography>
                    <Typography component={"span"} sx={{ fontSize: "12px" }}>
                      Available: {nft.totalItems - nft.soldItems}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            );
          })}
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
            Showing {displayedItems.length} of {nftData.length} results
          </Typography>

          <Box
            sx={{
              mt: { xs: "10px", sm: "0" },
              display: "flex",
              alignItems: "center",
              gap: "10px",
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

export default AllItems;
