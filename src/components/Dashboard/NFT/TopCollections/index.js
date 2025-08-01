"use client";

import React from "react";
import { Box, Typography, Card, Button } from "@mui/material";
import { Link } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

const collections = [
  {
    authorImage: "/images/nfts/author.gif",
    verifiedIcon: "/images/nfts/verified.svg",
    name: "Christmas Eve",
    items: 3250,
    collectionImage: "/images/nfts/top-collection.gif",
    title: "Man Walking",
    username: "@queensland",
    detailsLink: "/nft/details",
  },
  {
    authorImage: "/images/nfts/author.gif",
    verifiedIcon: "/images/nfts/verified.svg",
    name: "Christmas Eve",
    items: 3250,
    collectionImage: "/images/nfts/top-collection.gif",
    title: "Man Walking",
    username: "@queensland",
    detailsLink: "/nft/details",
  },
  {
    authorImage: "/images/nfts/author.gif",
    verifiedIcon: "/images/nfts/verified.svg",
    name: "Christmas Eve",
    items: 3250,
    collectionImage: "/images/nfts/top-collection.gif",
    title: "Man Walking",
    username: "@queensland",
    detailsLink: "/nft/details",
  },
];

const TopCollections = () => {
  return (
    <>
      <Card
        sx={{
          boxShadow: "none",
          borderRadius: "7px",
          mb: "25px",
          padding: { xs: "18px", sm: "20px", lg: "25px" },
        }}
        className="rmui-card"
      >
        <Typography
          variant="h3"
          sx={{
            fontSize: { xs: "16px", md: "18px" },
            fontWeight: 700,
            mb: "25px",
            pb: "25px",
          }}
          className="text-black border-bottom"
        >
          Top Collections
        </Typography>

        <Swiper
          slidesPerView={1}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
          className="tc-slide"
        >
          {collections.map((collection, index) => (
            <SwiperSlide key={index}>
              <Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    mb: "22px",
                  }}
                >
                  <Box sx={{ position: "relative" }}>
                    <img
                      src={collection.authorImage}
                      alt="author-image"
                      width={50}
                      height={50}
                      style={{
                        borderRadius: "100%",
                      }}
                    />
                    <img
                      src={collection.verifiedIcon}
                      alt="verified"
                      width={20}
                      height={20}
                      style={{
                        position: "absolute",
                        bottom: "2px",
                      }}
                      className="po-right-0"
                    />
                  </Box>

                  <Box>
                    <Typography
                      component="span"
                      className="text-black"
                      sx={{
                        fontWeight: "600",
                        display: "inline-block",
                        mb: "3px",
                      }}
                    >
                      {collection.name}
                    </Typography>
                    <Typography
                      component="span"
                      sx={{
                        display: "block",
                        fontSize: "12px",
                      }}
                    >
                      {collection.items} Items
                    </Typography>
                  </Box>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "15px",
                    mb: "20px",
                  }}
                >
                  <Box
                    sx={{
                      width: { xs: "100px", md: "120px" },
                      borderRadius: "10px",
                      flexShrink: "0",
                    }}
                  >
                    <img
                      src={collection.collectionImage}
                      alt="top-collection-image"
                      width={120}
                      height={120}
                      style={{
                        borderRadius: "10px",
                      }}
                    />
                  </Box>
                  <Box>
                    <Typography
                      className="text-black"
                      sx={{
                        fontWeight: "600",
                        fontSize: { xs: "16px", md: "18px" },
                        mb: "4px",
                      }}
                    >
                      {collection.title}
                    </Typography>
                    <Typography
                      component="span"
                      sx={{ display: "block", fontSize: "12px" }}
                    >
                      {collection.username}
                    </Typography>
                  </Box>
                </Box>

                <Link to={collection.detailsLink}>
                  <Button
                    type="submit"
                    variant="outlined"
                    sx={{
                      textTransform: "capitalize",
                      borderRadius: "8px",
                      fontWeight: "500",
                      fontSize: "14px",
                      padding: "5px 14px",
                      color: "primary.500",
                      display: "flex",
                      alignItems: "center",
                      gap: "5px",
                    }}
                  >
                    <AddIcon /> View Details
                  </Button>
                </Link>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Card>
    </>
  );
};

export default TopCollections;
