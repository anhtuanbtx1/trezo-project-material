"use client";

import React from "react";
import { Typography, Box } from "@mui/material";

const testimonials = [
  {
    id: 1,
    name: "Irene George",
    timeAgo: "15m ago",
    rating: 5,
    comment:
      "Great service! Found exactly what I needed for my property, and the process was smooth and hassle-free.",
    image: "/images/users/user65.jpg",
  },
  {
    id: 2,
    name: "Jose Grafton",
    timeAgo: "22m ago",
    rating: 4.5,
    comment:
      "Impressed with the timely responses and professional approach. Highly recommend for anyone seeking real estate solutions!",
    image: "/images/users/user64.jpg",
  },
  {
    id: 3,
    name: "Paula McClelland",
    timeAgo: "30m ago",
    rating: 4,
    comment:
      "The entire process was seamless, and I couldn't be happier with the results. Excellent customer service throughout!",
    image: "/images/users/user63.jpg",
  },
  {
    id: 4,
    name: "Virgil Martin",
    timeAgo: "49m ago",
    rating: 5,
    comment:
      "Highly satisfied with the attention to detail and prompt support. They made everything easy and stress-free!",
    image: "/images/users/user62.jpg",
  },
];

const ClientTestimonials = () => {
  return (
    <>
      <Typography variant="h3" sx={{ mb: "20px !important", fontWeight: "600" }}>
        Client Testimonials
      </Typography>

      {testimonials.map((testimonial) => (
        <Box
          key={testimonial.id}
          className="border-bottom lcbpm-none"
          sx={{
            mb: "15px",
            pb: "15px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "12px",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <img
                src={testimonial.image}
                alt={testimonial.name}
                width={45}
                height={45}
                style={{
                  borderRadius: "100%",
                }}
              />
              <Box>
                <Typography
                  component={"span"}
                  className="text-black"
                  sx={{
                    display: "block",
                    fontSize: "15px",
                    fontWeight: "600",
                  }}
                >
                  {testimonial.name}
                </Typography>
                <Typography sx={{ fontSize: "12px" }}>{testimonial.timeAgo}</Typography>
              </Box>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", gap: "3px" }}>
              {Array.from({ length: 5 }, (_, i) => (
                <i
                  key={i}
                  className={
                    i < Math.floor(testimonial.rating)
                      ? "ri-star-fill text-orange-500"
                      : i < testimonial.rating
                      ? "ri-star-half-fill text-orange-500"
                      : "ri-star-line text-orange-500"
                  }
                ></i>
              ))}
            </Box>
          </Box>

          <Typography sx={{ maxWidth: { md: "550px" } }}>
            "{testimonial.comment}"
          </Typography>
        </Box>
      ))}
    </>
  );
};

export default ClientTestimonials;
