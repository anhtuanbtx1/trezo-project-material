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
    imgSrc: "/images/nfts/nft1.gif",
    creatorImg: "/images/nfts/author.gif",
    highestBid: "9.75 ETH",
    currentBid: "5.50 ETH",
    rating: 9.2,
    nftDetails: "/nft/details/",
  },
  {
    id: 35247,
    title: "Rotating Panda",
    imgSrc: "/images/nfts/nft2.jpg",
    creatorImg: "/images/nfts/author.gif",
    highestBid: "10.75 ETH",
    currentBid: "12.50 ETH",
    rating: 9.5,
    nftDetails: "/nft/details/",
  },
  {
    id: 35248,
    title: "Cookies Live",
    imgSrc: "/images/nfts/nft3.gif",
    creatorImg: "/images/nfts/author.gif",
    highestBid: "17.75 ETH",
    currentBid: "20.50 ETH",
    rating: 9.3,
    nftDetails: "/nft/details/",
  },
  {
    id: 35249,
    title: "World Savior",
    imgSrc: "/images/nfts/nft4.gif",
    creatorImg: "/images/nfts/author.gif",
    highestBid: "9.75 ETH",
    currentBid: "10.50 ETH",
    rating: 9.7,
    nftDetails: "/nft/details/",
  },
  {
    id: 352450,
    title: "Rotating Panda",
    imgSrc: "/images/nfts/nft1.gif",
    creatorImg: "/images/nfts/author.gif",
    highestBid: "10.75 ETH",
    currentBid: "12.50 ETH",
    rating: 9.5,
    nftDetails: "/nft/details/",
  },
  {
    id: 35251,
    title: "Cookies Live",
    imgSrc: "/images/nfts/nft2.jpg",
    creatorImg: "/images/nfts/author.gif",
    highestBid: "17.75 ETH",
    currentBid: "20.50 ETH",
    rating: 9.3,
    nftDetails: "/nft/details/",
  },
];

const ManageYourNFT = () => {
  return (
    <>
      <Box
        sx={{
          mb: "25px",
          position: "relative",
          zIndex: "1",
          pt: { xs: "20px", md: "40px", lg: "55px" },
          px: { xs: "20px", md: "33px" },
          borderRadius: "10px",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "0",
            left: "0",
            right: "0",
            borderRadius: "6px",
            zIndex: "-1",
            height: "54%",
          }}
          style={{
            background: "linear-gradient(92deg, #23272E 7.31%, #3F5272 97.89%)",
          }}
        ></Box>

        <img
          src="/images/nfts/shape.png"
          className="po-right-0"
          alt="shape"
          width={210}
          height={180}
          style={{
            position: "absolute",
            top: "0",
            zIndex: "-1",
          }}
        />

        <Box
          sx={{
            display: { lg: "flex" },
            justifyContent: "space-between",
            mb: { xs: "20px", md: "30px", lg: "50px" },
            px: { lg: "7px" },
          }}
        >
          <Box>
            <Typography
              component="h3"
              sx={{
                mb: "5px",
                fontSize: { xs: "20px", md: "28px" },
                fontWeight: '700'
              }}
              className="text-white"
            >
              Manage Your NFT From One Place
            </Typography>

            <Typography component="p" sx={{ color: "grey.300" }}>
              The world’s first and largest digital marketplace for discover,
              collect, sell and create your own NFTs.
            </Typography>
          </Box>
          <Box>
            <Link
              href="/nft/create/"
              className="text-white"
              sx={{
                fontSize: { xs: "15px", md: "16px" },
                mt: { xs: "15px", lg: "3px" },
                borderRadius: "4px",
                bgcolor: "primary.500",
                fontWeight: "500",
                py: "7px",
                px: "30px",
                display: "inline-block",

                "&:hover": {
                  opacity: ".9",
                },
              }}
            >
              Create NFT
            </Link>
          </Box>
        </Box>

        <Box sx={{ position: "relative", zIndex: 0, mb: 4 }}>
          <Swiper
            spaceBetween={15}
            navigation
            breakpoints={{
              0: { slidesPerView: 1 },
              600: { slidesPerView: 2 },
              768: { slidesPerView: 2 },
              992: { slidesPerView: 3 },
              1440: { slidesPerView: 4 },
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
                  <img
                    src={nft.imgSrc}
                    alt={nft.title}
                    width={560}
                    height={414}
                    style={{ borderRadius: "6px", marginBottom: "12px" }}
                  />

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
                      <FavoriteIcon sx={{ color: "error.main", fontSize: "18px" }} />

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

export default ManageYourNFT;
