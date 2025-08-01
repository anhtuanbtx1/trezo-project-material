"use client";

import * as React from "react";
import { Card, Box, Typography, Link, IconButton } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import FavoriteIcon from "@mui/icons-material/Favorite";

const nftData = [
  {
    id: 35246,
    title: "Christmas Eve",
    imgSrc: "/images/nfts/featured1.jpg",
    creatorImg: "/images/nfts/author.gif",
    highestBid: "9.75 ETH",
    currentBid: "5.50 ETH",
    rating: 9.2,
    nftDetails: "/nft/details/",
  },
  {
    id: 35247,
    title: "Rotating Panda",
    imgSrc: "/images/nfts/featured2.jpg",
    creatorImg: "/images/nfts/author.gif",
    highestBid: "10.75 ETH",
    currentBid: "12.50 ETH",
    rating: 9.5,
    nftDetails: "/nft/details/",
  },
  {
    id: 35248,
    title: "Cookies Live",
    imgSrc: "/images/nfts/featured3.jpg",
    creatorImg: "/images/nfts/author.gif",
    highestBid: "17.75 ETH",
    currentBid: "20.50 ETH",
    rating: 9.3,
    nftDetails: "/nft/details/",
  },
  {
    id: 35249,
    title: "World Savior",
    imgSrc: "/images/nfts/featured1.jpg",
    creatorImg: "/images/nfts/author.gif",
    highestBid: "9.75 ETH",
    currentBid: "10.50 ETH",
    rating: 9.7,
    nftDetails: "/nft/details/",
  },
  {
    id: 352450,
    title: "Rotating Panda",
    imgSrc: "/images/nfts/featured2.jpg",
    creatorImg: "/images/nfts/author.gif",
    highestBid: "10.75 ETH",
    currentBid: "12.50 ETH",
    rating: 9.5,
    nftDetails: "/nft/details/",
  },
  {
    id: 35251,
    title: "Cookies Live",
    imgSrc: "/images/nfts/featured3.jpg",
    creatorImg: "/images/nfts/author.gif",
    highestBid: "17.75 ETH",
    currentBid: "20.50 ETH",
    rating: 9.3,
    nftDetails: "/nft/details/",
  },
];

const FeaturedNFTArtworks = () => {
  return (
    <>
      <Box
        sx={{
          boxShadow: "none",
          borderRadius: "7px",
          mb: "25px",
        }}
      >
        <Typography
          component="h5"
          sx={{ fontSize: "18px", mb: "20px", fontWeight: "700" }}
        >
          Featured NFT Artworks
        </Typography>

        <Box>
          <Swiper
            spaceBetween={15}
            navigation
            breakpoints={{
              0: { slidesPerView: 1 },
              600: { slidesPerView: 2 },
              992: { slidesPerView: 2 },
              1200: { slidesPerView: 1 },
              1440: { slidesPerView: 2 },
              1500: { slidesPerView: 3 },
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            modules={[Autoplay, Navigation]}
            className="nft-slide"
          >
            {nftData.map((nft) => (
              <SwiperSlide key={nft.id}>
                <Card
                  sx={{
                    backgroundColor: "background.paper",
                    borderRadius: "6px",
                    p: "10px",
                    boxShadow: "none",
                  }}
                >
                  <Box
                    style={{ backgroundImage: `url(${nft.imgSrc})` }}
                    sx={{
                      height: "185px",
                      borderRadius: "6px",
                      backgroundPosition: "center center",
                      backgroundSize: "cover",
                      backgroundRepeat: "none-repeat",
                      mb: "12px",
                    }}
                  ></Box>

                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      pb: "12px",
                      mb: "12px",
                    }}
                    className="border-bottom"
                  >
                    <Box
                      sx={{ display: "flex", alignItems: "center", gap: "5px" }}
                    >
                      <img
                        src={nft.creatorImg}
                        alt="Creator"
                        width={27}
                        height={27}
                        style={{
                          borderRadius: "100%",
                        }}
                      />
                      <Box>
                        <Typography component="p" sx={{ fontSize: "12px" }}>
                          NFT ID: {nft.id}
                        </Typography>
                        <Link
                          href={nft.nftDetails}
                          className="text-black"
                          style={{ fontWeight: "600" }}
                        >
                          {nft.title}
                        </Link>
                      </Box>
                    </Box>

                    <img
                      src="/images/nfts/verified2.svg"
                      alt="Verified"
                      width={20}
                      height={20}
                    />
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "end",
                    }}
                  >
                    <Box>
                      <Typography
                        component="p"
                        sx={{ fontSize: "12px", mb: "4px" }}
                      >
                        Highest Bid:{" "}
                        <Typography
                          component="span"
                          className="text-black"
                          fontWeight={600}
                          fontSize="12px"
                        >
                          {nft.highestBid}
                        </Typography>
                      </Typography>

                      <Typography
                        component="p"
                        fontWeight="600"
                        sx={{ color: "primary.800" }}
                      >
                        {nft.currentBid}
                      </Typography>
                    </Box>

                    <IconButton
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "5px",
                        p: "0",
                        borderRadius: "0",
                      }}
                    >
                      <FavoriteIcon sx={{ color: "error.main" }} />

                      <Typography
                        variant="caption"
                        fontWeight="bold"
                        sx={{ fontSize: "12px" }}
                      >
                        <span className="text-black">{nft.rating}</span>/10
                      </Typography>
                    </IconButton>
                  </Box>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Box>
    </>
  );
};

export default FeaturedNFTArtworks;
