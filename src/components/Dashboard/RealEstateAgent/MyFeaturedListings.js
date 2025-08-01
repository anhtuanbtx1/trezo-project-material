"use client";

import React from "react";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

const MyFeaturedListings = () => {
  // Listing data state
  const listings = [
    {
      id: 1,
      title: "White House Villa",
      location: "New Castle, United Kingdom",
      image: "/images/properties/property13.jpg",
      type: "rent",
      price: "$3,124/m",
      size: "321 Sft",
      bedrooms: 2,
      bathrooms: 1,
      link: "/real-estate-agent/property-details",
    },
    {
      id: 2,
      title: "Luxury Comfort Villa",
      location: "London, United Kingdom",
      image: "/images/properties/property14.jpg",
      type: "sale",
      price: "$4,274/m",
      size: "425 Sft",
      bedrooms: 3,
      bathrooms: 2,
      link: "/real-estate-agent/property-details",
    },
    {
      id: 3,
      title: "Modern Downtown Apartment",
      location: "Manchester, United Kingdom",
      image: "/images/properties/property13.jpg",
      type: "rent",
      price: "$2,850/m",
      size: "380 Sft",
      bedrooms: 1,
      bathrooms: 1,
      link: "/real-estate-agent/property-details",
    },
    {
      id: 4,
      title: "Seaside Cottage",
      location: "Brighton, United Kingdom",
      image: "/images/properties/property14.jpg",
      type: "sale",
      price: "$3,950/m",
      size: "450 Sft",
      bedrooms: 2,
      bathrooms: 2,
      link: "/real-estate-agent/property-details",
    },
  ];

  return (
    <Box
      sx={{
        backgroundColor: "#FFE8D4",
        boxShadow: "none",
        borderRadius: "7px",
        mb: "25px",
        padding: { xs: "18px", sm: "20px", lg: "25px" },
      }}
    >
      <Box
        sx={{
          fontSize: { xs: "16px", md: "18px" },
          fontWeight: 700,
          mb: "20px",
          color: "#3a4252 !important",
        }}
      >
        My Featured Listings
      </Box>

      <Swiper
        spaceBetween={25}
        pagination={{
          clickable: true,
        }}
        autoHeight={true}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          506: {
            slidesPerView: 2,
          },
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        modules={[Pagination, Autoplay]}
        className="rea-my-featured-listings"
      >
        {listings.map((listing) => (
          <SwiperSlide key={listing.id}>
            <Box
              style={{
                backgroundImage: `url(${listing.image})`,
                height: "200px",
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: "7px 7px 0 0",
                position: "relative",
                padding: "10px",
              }}
            >
              <Box
                className="po-left-10"
                sx={{
                  position: "absolute",
                  top: "10px",
                  left: "10px",
                  backgroundColor:
                    listing.type === "rent" ? "error.50" : "primary.50",
                  color:
                    listing.type === "rent" ? "error.main" : "primary.main",
                  padding: "3.5px 10px",
                  display: "inline-block",
                  fontWeight: 500,
                  fontSize: "12px",
                  borderRadius: "4px",
                  lineHeight: "1",
                }}
              >
                {listing.type === "rent" ? "For Rent" : "For Sale"}
              </Box>
            </Box>

            <Box
              className="bg-white"
              sx={{
                padding: "20px",
                borderRadius: "0 0 7px 7px",
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontSize: { xs: "15px", md: "16px" },
                  fontWeight: 600,
                  mb: "3px",
                }}
              >
                <Link
                  href={listing.link}
                  className="text-black hover-text-color"
                >
                  {listing.title}
                </Link>
              </Typography>

              <Typography sx={{ mb: "15px" }}>{listing.location}</Typography>

              <Box
                sx={{
                  padding: "0",
                  margin: "0",
                  listStyle: "none",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                    fontSize: "12px",
                  }}
                >
                  <i
                    className="material-symbols-outlined"
                    style={{ fontSize: "18px" }}
                  >
                    open_run
                  </i>
                  {listing.size}
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                    fontSize: "12px",
                  }}
                >
                  <i
                    className="material-symbols-outlined"
                    style={{ fontSize: "18px" }}
                  >
                    bed
                  </i>
                  {listing.bedrooms} Bed
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                    fontSize: "12px",
                  }}
                >
                  <i
                    className="material-symbols-outlined"
                    style={{ fontSize: "18px" }}
                  >
                    bathtub
                  </i>
                  {listing.bathrooms} Bath
                </Box>
              </Box>

              <Box
                className="border-top"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  pt: "12px",
                  mt: "12px",
                }}
              >
                <Box
                  className="text-black"
                  sx={{ fontWeight: 700, fontSize: "16px" }}
                >
                  {listing.price}
                </Box>

                <Link
                  href={listing.link}
                  className="bg-gray"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "30px",
                    height: "30px",
                    borderRadius: "50%",
                  }}
                >
                  <i className="ri-arrow-right-line"></i>
                </Link>
              </Box>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default MyFeaturedListings;
