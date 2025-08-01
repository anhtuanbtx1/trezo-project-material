"use client";

import React, { useState } from "react";
import { Box, Button } from "@mui/material";

const images = [
  {
    id: 0,
    src: "/images/nfts/nft-details1.jpg",
    alt: "NFT Details 1",
  },
  {
    id: 1,
    src: "/images/nfts/nft-details2.jpg",
    alt: "NFT Details 2",
  },
  {
    id: 2,
    src: "/images/nfts/nft-details3.jpg",
    alt: "NFT Details 3",
  },
  {
    id: 3,
    src: "/images/nfts/nft-details4.jpg",
    alt: "NFT Details 4",
  },
];

const Gallery = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <Box sx={{ mb: "25px" }}>
      {/* Main Image */}
      <Box
        className="bg-white"
        sx={{
          p: "13px",
          borderRadius: "7px",
          mb: "15px",
        }}
      >
        <Box>
          <img
            src={images[activeTab].src}
            alt={images[activeTab].alt}
            style={{ borderRadius: "7px", width: "100%" }}
            width={486}
            height={486}
          />
        </Box>
      </Box>

      {/* Thumbnail Navigation */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "10px",
        }}
      >
        {images.map((image) => (
          <Box
            key={image.id}
            onClick={() => handleTabClick(image.id)}
            sx={{
              cursor: "pointer",
              borderTop:
                activeTab === image.id
                  ? "1px solid #1976d2"
                  : "1px solid transparent",
              borderRadius: "7px",
            }}
          >
            <img
              src={image.src}
              alt={image.alt}
              style={{ borderRadius: "7px" }}
              width={115}
              height={115}
            />
          </Box>
        ))}
      </Box>

      {/* Place Bid Button */}
      <Button
        type="button"
        sx={{
          bgcolor: "primary.main",
          color: "#fff !important",
          display: "block",
          width: "100%",
          textTransform: "capitalize",
          fontWeight: "500",
          py: "11px",
          px: "20px",
          borderRadius: "4px",
          fontSize: { xs: "14px", md: "16px" },
          lineHeight: "1",
          mt: "15px",
        }}
      >
        Place Bid
      </Button>
    </Box>
  );
};

export default Gallery;
