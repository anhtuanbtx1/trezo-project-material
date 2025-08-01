"use client";

import React, { useState } from "react";
import { Box, Typography, Card } from "@mui/material";
import CustomDropdown from "./CustomDropdown";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

const ClientRatings = () => {
  // Rating data state
  const [ratings] = useState([
    {
      id: 1,
      clientName: "David Carlen",
      location: "New Castle, United Kingdom",
      avatar: "/images/users/user72.jpg",
      comment:
        "“Working with William was an absolute pleasure. His market knowledge and attention to detail helped us sell our home quickly and at a great price.”",
      rating: 5.0,
    },
    {
      id: 2,
      clientName: "Zinia Anderson",
      location: "New Brunchwick, Canada",
      avatar: "/images/users/user76.jpg",
      comment:
        "“William's professionalism and responsiveness set him apart from other agents. He listened, and delivered outstanding results.”",
      rating: 4.5,
    },
    {
      id: 3,
      clientName: "Walter White",
      location: "New York, USA",
      avatar: "/images/users/user75.jpg",
      comment:
        "“Thanks to William, I felt confident every step of the way during my first home purchase. His friendly demeanor and expert advice helped us.”",
      rating: 4.0,
    },
    {
      id: 4,
      clientName: "Sarah Johnson",
      location: "Los Angeles, USA",
      avatar: "/images/users/user77.jpg",
      comment:
        "“Exceptional service from start to finish. William went above and beyond to find us our dream home within our budget.”",
      rating: 5.0,
    },
    {
      id: 5,
      clientName: "Michael Brown",
      location: "Chicago, USA",
      avatar: "/images/users/user78.jpg",
      comment:
        "“William's negotiation skills saved us thousands on our property purchase. Highly recommend his services!”",
      rating: 4.5,
    },
  ]);

  // Get background color based on rating
  const getBackgroundColor = (rating) => {
    if (rating >= 4.8) return "#ECF0FF"; // Light blue for excellent ratings
    if (rating >= 4.3) return "#FFF5ED"; // Light orange for very good ratings
    if (rating >= 3.8) return "#EEFFE5"; // Light green for good ratings
    if (rating >= 3.3) return "#FFF5F5"; // Light red for average ratings
    return "#F5F5F5"; // Light gray for below average
  };

  // Render star ratings
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(
          <i key={i} className="ri-star-fill" style={{ color: "#fd5812" }}></i>
        );
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(
          <i
            key={i}
            className="ri-star-half-line"
            style={{ color: "#fd5812" }}
          ></i>
        );
      } else {
        stars.push(
          <i key={i} className="ri-star-line" style={{ color: "#fd5812" }}></i>
        );
      }
    }

    return stars;
  };

  return (
    <Card
      sx={{
        boxShadow: "none",
        borderRadius: "7px",
        mb: "25px",
        padding: { xs: "18px", sm: "20px", lg: "25px" },
      }}
      className="rmui-card"
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "15px",
          mb: "25px",
          position: "relative",
          zIndex: 1,
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontSize: { xs: "16px", md: "18px" },
            fontWeight: 700,
          }}
          className="text-black"
        >
          Client Ratings
        </Typography>

        <CustomDropdown
          options={["Daily", "Weekly", "Monthly", "Yearly"]}
          onSelect={(value) => console.log(value)}
          defaultLabel="Monthly"
        />
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
          668: {
            slidesPerView: 2,
          },
          924: {
            slidesPerView: 3,
          },
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        modules={[Pagination, Autoplay]}
        className="rea-client-ratings"
        style={{ zIndex: 0 }}
      >
        {ratings.map((rating) => (
          <SwiperSlide key={rating.id}>
            <Box
              sx={{
                padding: { xs: "15px", md: "25px" },
                backgroundColor: getBackgroundColor(rating.rating),
                borderRadius: "7px",
                height: "100%",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  mb: "25px",
                }}
              >
                <img
                  src={rating.avatar}
                  className="rounded-circle"
                  alt={rating.clientName}
                  width={38}
                  height={38}
                />
                <Box>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 600,
                      fontSize: "14px",
                    }}
                    className="text-black-for-dark"
                  >
                    {rating.clientName}
                  </Typography>

                  <Typography sx={{ fontSize: "12px" }}>
                    {rating.location}
                  </Typography>
                </Box>
              </Box>

              <Typography
                className="text-black-for-dark"
                sx={{ color: "#3A4252", fontSize: { xs: "14px", md: "16px" } }}
              >
                {rating.comment}
              </Typography>

              <Box
                sx={{
                  mt: "20px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "10px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1px",
                    lineHeight: 1,
                  }}
                >
                  {renderStars(rating.rating)}
                  <Typography fontSize="12px" className="ml-2">
                    {rating.rating.toFixed(1)}
                  </Typography>
                </Box>

                <Box
                  className="text-white"
                  sx={{ lineHeight: 1, fontSize: "30px" }}
                >
                  <i className="ri-double-quotes-r"></i>
                </Box>
              </Box>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Card>
  );
};

export default ClientRatings;
