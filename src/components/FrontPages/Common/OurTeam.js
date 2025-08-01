"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { Box, Typography } from "@mui/material";

const OurTeam = () => {
  // Dynamic team members data
  const teamMembers = [
    {
      name: "Michael Johnson",
      role: "CEO",
      image: "/images/front-pages/team1.jpg",
      socials: [
        {
          id: "1",
          icon: "ri-facebook-fill",
          url: "https://www.facebook.com/",
        },
        {
          id: "2",
          icon: "ri-twitter-x-fill",
          url: "https://www.twitter.com/",
        },
        {
          id: "3",
          icon: "ri-linkedin-fill",
          url: "https://www.linkedin.com/",
        },
      ],
    },
    {
      name: "Emily Davis",
      role: "Project Manager",
      image: "/images/front-pages/team2.jpg",
      socials: [
        {
          id: "1",
          icon: "ri-facebook-fill",
          url: "https://www.facebook.com/",
        },
        {
          id: "2",
          icon: "ri-twitter-x-fill",
          url: "https://www.twitter.com/",
        },
        {
          id: "3",
          icon: "ri-linkedin-fill",
          url: "https://www.linkedin.com/",
        },
      ],
    },
    {
      name: "Daniel Lee",
      role: "Sales Team Lead",
      image: "/images/front-pages/team3.jpg",
      socials: [
        {
          id: "1",
          icon: "ri-facebook-fill",
          url: "https://www.facebook.com/",
        },
        {
          id: "2",
          icon: "ri-twitter-x-fill",
          url: "https://www.twitter.com/",
        },
        {
          id: "3",
          icon: "ri-linkedin-fill",
          url: "https://www.linkedin.com/",
        },
      ],
    },
    {
      name: "Olivia John",
      role: "Frontend Lead",
      image: "/images/front-pages/team4.jpg",
      socials: [
        {
          id: "1",
          icon: "ri-facebook-fill",
          url: "https://www.facebook.com/",
        },
        {
          id: "2",
          icon: "ri-twitter-x-fill",
          url: "https://www.twitter.com/",
        },
        {
          id: "3",
          icon: "ri-linkedin-fill",
          url: "https://www.linkedin.com/",
        },
      ],
    },
  ];

  return (
    <Box
      className="fp-team-area"
      sx={{
        pb: { xs: "60px", sm: "60px", md: "80px", lg: "100px", xl: "150px" },
      }}
    >
      <Box
        sx={{
          maxWidth: {
            xs: "100%",
            sm: "700px",
            md: "720px",
            lg: "1140px",
            xl: "1320px",
          },
          mx: "auto",
          px: "12px",
          position: "relative",
          zIndex: "1",
        }}
      >
        {/* Section Title */}
        <div className="section-title text-center">
          <div className="sub-title">
            <span className="text-purple">Our Team</span>
          </div>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "24px", md: "28px", lg: "34px", xl: "36px" },
            }}
          >
            Introducing Our Exceptional Team. Meet the Minds Driving Our Success
          </Typography>
        </div>

        {/* Team Slider */}
        <Swiper
          spaceBetween={25}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            0: { slidesPerView: 1 },
            540: { slidesPerView: 2 },
            1200: { slidesPerView: 3 },
          }}
          modules={[Pagination]}
          className="fp-team-slides"
        >
          {teamMembers.map((member, index) => (
            <SwiperSlide key={index}>
              <div className="fp-single-team-member">
                <div className="image border-radius">
                  <img
                    src={member.image}
                    className="border-radius"
                    alt={member.name}
                    width={570}
                    height={570}
                  />
                </div>
                <div className="content border-radius">
                  <div>
                    <h3>{member.name}</h3>
                    <span className="d-block">{member.role}</span>
                  </div>
                  <div className="socials">
                    {member.socials.map((social, id) => (
                      <a
                        href={social.url}
                        target="_blank"
                        rel="noreferrer"
                        key={id}
                      >
                        <i className={social.icon}></i>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Shape Images */}
        <div className="shape1">
          <img
            src="/images/front-pages/shape1.png"
            alt="shape1"
            width={530}
            height={530}
          />
        </div>
        <div className="shape2">
          <img
            src="/images/front-pages/shape2.png"
            alt="shape2"
            width={447}
            height={453}
          />
        </div>
      </Box>
    </Box>
  );
};

export default OurTeam;
