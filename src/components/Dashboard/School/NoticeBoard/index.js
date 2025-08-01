"use client";

import React from "react";
import { Card, Box, Typography, Link } from "@mui/material";

const notices = [
  {
    title: "Science Fair Registration",
    description: "Registration for the annual Science Fair",
    date: "October 28, 2024",
    icon: "/images/icons/note.svg",
    iconBg: "purple.500",
    link: "#",
  },
  {
    title: "Parent-Teacher Meeting",
    description: "The Parent-Teacher meeting for Term 1 will take place",
    date: "November 1, 2024",
    icon: "/images/icons/video-chat.svg",
    iconBg: "primary.500",
    link: "#",
  },
  {
    title: "Winter Sports Tryouts",
    description: "Tryouts for the winter sports teams will begin on",
    date: "November 12, 2024",
    icon: "/images/icons/ball.svg",
    iconBg: "orange.500",
    link: "#",
  },
  {
    title: "School Holiday Reminder",
    description: "A reminder that school will be closed on November",
    date: "November 28, 2024",
    icon: "/images/icons/celebration.svg",
    iconBg: "secondary.500",
    link: "#",
  },
];

const NoticeBoard = () => {
  return (
    <>
      <Card
        sx={{
          boxShadow: "none",
          borderRadius: "7px",
          mb: "25px",
          p: { xs: "18px", sm: "20px", lg: "25px" },
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
            Notice Board
          </Typography>

          <Link
            href="#"
            className="text-body"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "3px",
            }}
          >
            View All{" "}
            <i
              className="ri-arrow-right-s-line lh-1"
              style={{ fontSize: "20px" }}
            ></i>
          </Link>
        </Box>

        <Box sx={{ mx: { xs: "-20px", md: "-25px" } }}>
          {notices.map((notice, index) => (
            <Box
              key={index}
              className="border-bottom lcbpm-none"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "5px",
                mb: "9px",
                pb: "9px",
                px: { xs: "18px", sm: "20px", lg: "25px" },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  gap: "10px",
                }}
              >
                <Box
                  sx={{
                    width: "40px",
                    height: "40px",
                    bgcolor: notice.iconBg,
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <img src={notice.icon} alt={notice.title} width={20} height={20} />
                </Box>

                <Box>
                  <Typography
                    variant="h5"
                    sx={{ fontSize: "14px", fontWeight: 500, mb: "4px" }}
                    className="text-black"
                  >
                    <Link href={notice.link} className="text-black">
                      {notice.title}
                    </Link>
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: "12px",
                      maxWidth: "166px",
                      lineHeight: "1.4",
                      mb: "4px",
                    }}
                  >
                    {notice.description}
                  </Typography>

                  <Typography
                    component={"span"}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: "5px",
                      color: "primary.500",
                      fontSize: "12px",
                    }}
                  >
                    <i className="ri-calendar-line"></i>
                    {notice.date}
                  </Typography>
                </Box>
              </Box>

              <Link
                href={notice.link}
                sx={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  color: "grey.400",
                  textAlign: "center",
                  transition: "all 0.3s",
                  padding: "0",
                  display: "inline-block",
                  flexShrink: 0,

                  "&:hover": {
                    bgcolor: "primary.main",
                    color: "white !important",
                  },
                }}
                className="border"
              >
                <i
                  className="material-symbols-outlined"
                  style={{ fontSize: "22px", lineHeight: "40px" }}
                >
                  arrow_outward
                </i>
              </Link>
            </Box>
          ))}
        </Box>
      </Card>
    </>
  );
};

export default NoticeBoard;
