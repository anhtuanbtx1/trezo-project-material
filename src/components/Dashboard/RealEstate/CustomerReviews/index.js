"use client";

import React, { useState } from "react";
import {
  Card,
  Box,
  Typography,
  Menu,
  MenuItem,
  IconButton,
} from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// Sample dynamic data for customer reviews
const reviews = [
  {
    id: 1,
    name: "Jose Grafton",
    timeAgo: "22m ago",
    rating: 4.5,
    image: "/images/users/user64.jpg",
    reviewText:
      "Impressed with the timely responses and professional approach. Highly recommend for anyone seeking real estate solutions!",
  },
  {
    id: 2,
    name: "Michael Brown",
    timeAgo: "2h ago",
    rating: 5,
    image: "/images/users/user65.jpg",
    reviewText:
      "Absolutely fantastic service. The team went above and beyond to make sure we found the perfect home. Highly recommend",
  },
  {
    id: 3,
    name: "Sarah Johnson",
    timeAgo: "1d ago",
    rating: 4,
    image: "/images/users/user66.jpg",
    reviewText:
      "Great experience! The agents were very helpful and made the whole process seamless. Absolutely fantastic service.",
  },
  {
    id: 4,
    name: "Irene George",
    timeAgo: "1h ago",
    rating: 5,
    image: "/images/users/user67.jpg",
    reviewText:
      "Absolutely fantastic service. The team went above and beyond to make sure we found the perfect home. Highly recommend",
  },
];

const CustomerReviews = () => {
  // Dropdown
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

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
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mb: "25px",
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
            Customer Reviews
          </Typography>

          <Box>
            <IconButton
              onClick={handleClick}
              size="small"
              aria-controls={open ? "account-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              sx={{
                padding: "0",
              }}
            >
              <MoreHorizIcon sx={{ fontSize: "25px" }} />
            </IconButton>

            <Menu
              anchorEl={anchorEl}
              id="account-menu"
              open={open}
              onClose={handleClose}
              onClick={handleClose}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: "visible",
                  boxShadow: "0 4px 45px #0000001a",
                  mt: 0,
                  width: "150px",

                  "& .MuiAvatar-root": {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                },
              }}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
              <MenuItem>This Day</MenuItem>
              <MenuItem>This Week</MenuItem>
              <MenuItem>This Month</MenuItem>
              <MenuItem>This Year</MenuItem>
            </Menu>
          </Box>
        </Box>

        <Swiper
          spaceBetween={20}
          pagination={{
            clickable: true,
          }}
          autoHeight={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            900: {
              slidesPerView: 1,
            },
            1440: {
              slidesPerView: 2,
            },
          }}
          modules={[Autoplay, Pagination]}
          className="rp-slide"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.id}>
              <Box
                sx={{
                  bgcolor: "grey.50",
                  borderRadius: "7px",
                  p: { xs: "20px", md: "25px" },
                }}
                className="crc-for-dark"
              >
                <Box
                  sx={{
                    display: { sm: "flex" },
                    alignItems: "center",
                    justifyContent: "space-between",
                    mb: { xs: "10px", sm: "12px" },
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                    }}
                  >
                    <img
                      src={review.image}
                      alt="user-image"
                      width={45}
                      height={45}
                      style={{
                        borderRadius: "100%",
                      }}
                    />
                    <Box>
                      <Typography
                        component={"span"}
                        sx={{
                          display: "block",
                          fontSize: { sm: "15px" },
                          fontWeight: 600,
                        }}
                        className="text-black"
                      >
                        {review.name}
                      </Typography>

                      <Typography component={"span"} display={"block"}>
                        {review.timeAgo}
                      </Typography>
                    </Box>
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: "3px",
                      mt: { xs: "15px", sm: "0" },
                    }}
                  >
                    {[...Array(Math.floor(review.rating))].map((_, index) => (
                      <i
                        key={index}
                        className="ri-star-fill text-orange-500"
                      ></i>
                    ))}
                    {review.rating % 1 !== 0 && (
                      <i className="ri-star-half-fill text-orange-500"></i>
                    )}
                  </Box>
                </Box>

                <Typography
                  component={"p"}
                  sx={{ maxWidth: { md: "365px" }, lineHeight: 1.8 }}
                >
                  "{review.reviewText}"
                </Typography>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Card>
    </>
  );
};

export default CustomerReviews;
