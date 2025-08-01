"use client";

import React from "react";
import { Box, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

// Example usage:
const events = [
  {
    title: "Pythons Unleashed: A Development Expedition",
    date: "15 April 2024",
    startTime: "12.00 PM",
    endTime: "6.00 PM",
  },
  {
    title: "React Conference 2024",
    date: "20 April 2024",
    startTime: "10.00 AM",
    endTime: "5.00 PM",
  },
  {
    title: "JavaScript Summit",
    date: "25 April 2024",
    startTime: "9.00 AM",
    endTime: "4.00 PM",
  },
];

const UpcomingEvents = () => {
  return (
    <Box className="upcoming-events">
      <Typography
        component="span"
        sx={{ fontWeight: "500", mb: "10px", display: "block" }}
      >
        Upcoming Events:
      </Typography>

      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
      >
        {events.map((event, index) => (
          <SwiperSlide key={index}>
            <Box
              sx={{
                display: "flex",
                alignItems: "top",
                gap: "10px",
              }}
            >
              <Box
                sx={{
                  bgcolor: "primary.main",
                  width: "7px",
                  height: "7px",
                  borderRadius: "2px",
                  position: "relative",
                  top: "6px",
                }}
              ></Box>

              <Box>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "600", fontSize: "13px", mb: "3px" }}
                  className="text-black"
                >
                  {event.title}
                </Typography>

                <Typography component="div" fontSize="12px">
                  <Typography
                    component="span"
                    fontSize="12px"
                    color="primary"
                  >
                    {event.date}
                  </Typography>
                  {` - ${event.startTime} - ${event.endTime}`}
                </Typography>
              </Box>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default UpcomingEvents; 