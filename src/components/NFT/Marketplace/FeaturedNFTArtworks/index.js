"use client";

import React from "react";
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
  },
];

const FeaturedNFTArtworks = () => {
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
            Featured NFT Artworks
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
          {nftData.slice(0, 8).map((nft) => (
            <Grid size={{ xs: 12, sm: 6, md: 4, lg: 4, xl: 3 }} key={nft.id}>
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

                  <Box
                    className="bid-btn"
                    sx={{
                      position: "absolute",
                      top: "0",
                      left: "0",
                      width: "100%",
                      height: "100%",
                    }}
                  >
                    <Box
                      sx={{ display: "table", width: "100%", height: "100%" }}
                    >
                      <Box
                        sx={{
                          display: "table-cell",
                          verticalAlign: "middle",
                          textAlign: "center",
                        }}
                      >
                        <Button
                          type="button"
                          sx={{
                            fontWeight: "500",
                            textTransform: "capitalize",
                            py: "11px",
                            px: "20px",
                            fontSize: { xs: "15px", md: "16px" },
                            lineHeight: "1",
                            bgcolor: "primary.500",
                            color: "#fff !important",

                            "&:hover": {
                              backgroundColor: "primary.400",
                            },
                          }}
                        >
                          Place Bid
                        </Button>
                      </Box>
                    </Box>
                  </Box>
                </Box>

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
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default FeaturedNFTArtworks;
