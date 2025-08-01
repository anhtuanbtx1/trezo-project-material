"use client";

import React from "react";
import { Card, Box, Typography, Link } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

const events = [
  {
    title: "Science Fair",
    date: "October 25, 2024",
    time: "9:00 AM - 3:00 PM",
    location: "Auditorium",
    link: "#",
  },
  {
    title: "Art Exhibition",
    date: "November 10, 2024",
    time: "11:00 AM - 5:00 PM",
    location: "Art Gallery",
    link: "#",
  },
  {
    title: "Tech Conference",
    date: "December 5, 2024",
    time: "10:00 AM - 4:00 PM",
    location: "Conference Hall",
    link: "#",
  },
];

const UpcomingEvents = () => {
  return (
    <>
      <Card
        sx={{
          boxShadow: "none",
          borderRadius: "7px",
          mb: "25px",
          px: { xs: "18px", sm: "20px", lg: "25px" },
          py: { xs: "18px", sm: "20px", lg: "20px" }, 
        }}
        className="rmui-card"
      >
        <Typography
          variant="h3"
          sx={{
            fontSize: { xs: "16px", md: "18px" },
            fontWeight: 700,
            mb: "15px",
          }}
          className="text-black"
        >
          Upcoming Events
        </Typography>

        <Swiper
          slidesPerView={1}
          pagination={{
            clickable: true,
          }}
          autoHeight={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          modules={[Autoplay, Pagination]}
          className="sue-slide"
        >
          {events.map((event, index) => (
            <SwiperSlide key={index}>
              <Box
                className="bg-f6f7f9"
                sx={{ p: "12px", borderRadius: "7px" }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Link
                    href={event.link}
                    className="text-black"
                    sx={{
                      display: "block",
                      fontWeight: 500,
                      fontSize: "16px",

                      "&:hover": {
                        color: "primary.500",
                      },
                    }}
                  >
                    {event.title}
                  </Link>

                  <Typography
                    component={"span"}
                    sx={{ display: "block", fontSize: "13px" }}
                  >
                    {event.date}
                  </Typography>
                </Box>

                <Box
                  sx={{
                    mt: "5px",
                    display: { xs: "flex", lg: "block", xl: "flex" },
                    gap: { xs: "10px", md: "25px" },
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: "5px",
                      fontSize: "13px",
                    }}
                  >
                    <i
                      className="ri-time-line"
                      style={{ fontSize: "18px" }}
                    ></i>
                    {event.time}
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: "5px",
                      fontSize: "13px",
                    }}
                  >
                    <i
                      className="ri-map-pin-line"
                      style={{ fontSize: "18px" }}
                    ></i>
                    {event.location}
                  </Box>
                </Box>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Card>
    </>
  );
};

export default UpcomingEvents;
