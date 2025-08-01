"use client";

import React, { useState } from "react";
import { Box, Typography, Card, Button } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";

const TodaysSchedule = () => {
  // Sample dynamic data
  const [scheduleItems] = useState([
    {
      time: "10:00 AM",
      title: "Appointment With Cardiac Patient",
      person: "Jonathon Ronan",
      image: "/images/users/user1.jpg",
      background: "#DDE4FF",
    },
    {
      time: "12:00 PM",
      title: "Major Cardiac Surgery of the patient",
      person: "Walter White",
      image: "/images/users/user2.jpg",
      background: "#DAEBFF",
    },
    {
      time: "2:00 PM",
      title: "Board Meeting With",
      person: "Jessy Pinkman",
      image: "/images/users/user3.jpg",
      background: "#C8FFE1",
    },
    {
      time: "10:00 AM",
      title: "Appointment With Cardiac Patient",
      person: "Jonathon Ronan",
      image: "/images/users/user4.jpg",
      background: "#DDE4FF",
    },
    {
      time: "12:00 PM",
      title: "Major Cardiac Surgery of the patient",
      person: "Walter White",
      image: "/images/users/user5.jpg",
      background: "#DDE4FF",
    },
    {
      time: "2:00 PM",
      title: "Board Meeting With",
      person: "Jessy Pinkman",
      image: "/images/users/user6.jpg",
      background: "#C8FFE1",
    },
  ]);

  return (
    <>
      <Card
        sx={{
          boxShadow: "none",
          borderRadius: "7px",
          mb: "25px",
          padding: { xs: "25px" },
        }}
        className="rmui-card"
      >
        <Typography
          variant="h3"
          sx={{
            fontSize: { xs: "16px", md: "18px" },
            fontWeight: 700,
            mb: "10px",
          }}
          className="text-black"
        >
          Today's Schedule
        </Typography>

        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateCalendar sx={{ width: "100%" }} className="rmui-ws-calendar" />
        </LocalizationProvider>

        <Box
          className="pr-10 border-top"
          sx={{
            maxHeight: "555px",
            overflowY: "auto",
            marginTop: "25px",
            paddingTop: "13px",
          }}
        >
          {scheduleItems.map((item, index) => (
            <Box
              key={index}
              sx={{
                background: item.background,
                padding: { xs: "15px", sm: "20px", md: "25px" },
                borderRadius: "7px",
                position: "relative",
                marginTop: "12px",
              }}
            >
              <Typography
                sx={{ color: "#000 !important", fontWeight: "600", mb: "3px" }}
              >
                {item.time}
              </Typography>

              <Typography mb={"9px"}>{item.title}</Typography>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  mb: "15px",
                }}
              >
                <img
                  src={item.image}
                  alt="user-image"
                  width={24}
                  height={24}
                  style={{
                    borderRadius: "50%",
                    border: "1px solid #fff",
                  }}
                />
                <Typography
                  sx={{
                    fontWeight: "500",
                    color: "#64748B !important",
                  }}
                >
                  {item.person}
                </Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  alignContent: "center",
                  justifyContent: "space-between",
                }}
              >
                <Button
                  type="button"
                  sx={{
                    bgcolor: "#fff",
                    color: "primary.main !important",
                    textTransform: "capitalize",
                    fontWeight: 500,
                    fontSize: "14px",
                    padding: "10px 16px",
                    lineHeight: 1,

                    "&:hover": {
                      backgroundColor: "primary.main",
                      color: "#fff !important",
                    },
                  }}
                >
                  View Details
                </Button>

                <Button
                  type="button"
                  sx={{
                    bgcolor: "#fff",
                    width: "28px",
                    height: "28px",
                    borderRadius: "50%",
                    minWidth: "auto",
                    fontSize: "14px",
                    color: "primary.main",

                    "&:hover": {
                      backgroundColor: "primary.main",
                      color: "#fff !important",
                    },
                  }}
                >
                  <i className="ri-notification-2-line"></i>
                </Button>
              </Box>

              <Box
                className="po-right-0 rtl-tf-scaleX-1"
                sx={{
                  position: "absolute",
                  top: "0",
                }}
              >
                <img
                  src="/images/cut-circle.png"
                  alt="cut-circle"
                  width={55}
                  height={80}
                />
              </Box>
            </Box>
          ))}
        </Box>
      </Card>
    </>
  );
};

export default TodaysSchedule;
