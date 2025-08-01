"use client";

import React, { useState } from "react";
import {
  Grid,
  Card,
  Box,
  Typography,
  AvatarGroup,
  Avatar,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

// Example dynamic data
const eventData = [
  {
    id: 1,
    image: "/images/events/event1.jpg",
    price: "$120",
    title: "Annual Conference 2024", 
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    seatBooked: 1156,
    seatPercentage: 85,
    avatars: [
      "/images/users/user6.jpg",
      "/images/users/user7.jpg",
      "/images/users/user8.jpg",
      "/images/users/user9.jpg",
    ],
    viewDetails: "/events/events-details",
  },
  {
    id: 2,
    image: "/images/events/event2.jpg",
    price: "$59",
    title: "Leadership Summit 2024",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    seatBooked: 556,
    seatPercentage: 24,
    avatars: [
      "/images/users/user11.jpg",
      "/images/users/user12.jpg",
      "/images/users/user13.jpg",
      "/images/users/user14.jpg",
    ],
    viewDetails: "/events/events-details",
  },
  {
    id: 3,
    image: "/images/events/event3.jpg",
    price: "$123",
    title: "Product Launch Webinar",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    seatBooked: 356,
    seatPercentage: 65,
    avatars: [
      "/images/users/user15.jpg",
      "/images/users/user16.jpg",
      "/images/users/user17.jpg",
    ],
    viewDetails: "/events/events-details",
  },
  {
    id: 4,
    image: "/images/events/event4.jpg",
    price: "$99",
    title: "AI in Healthcare Symposium",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    seatBooked: 3226,
    seatPercentage: 82,
    avatars: [
      "/images/users/user18.jpg",
      "/images/users/user19.jpg",
      "/images/users/user20.jpg",
    ],
    viewDetails: "/events/events-details",
  },
  {
    id: 5,
    image: "/images/events/event5.jpg",
    price: "$123",
    title: "Product Launch Webinar",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    seatBooked: 356,
    seatPercentage: 65,
    avatars: [
      "/images/users/user15.jpg",
      "/images/users/user16.jpg",
      "/images/users/user17.jpg",
    ],
    viewDetails: "/events/events-details",
  },
  {
    id: 6,
    image: "/images/events/event6.jpg",
    price: "$35",
    title: "AI in Healthcare Symposium",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    seatBooked: 3226,
    seatPercentage: 82,
    avatars: [
      "/images/users/user18.jpg",
      "/images/users/user19.jpg",
      "/images/users/user20.jpg",
    ],
    viewDetails: "/events/events-details",
  },
  {
    id: 7,
    image: "/images/events/event7.jpg",
    price: "$30",
    title: "Workshop: Digital Marketing",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    seatBooked: 1728,
    seatPercentage: 65,
    avatars: [
      "/images/users/user20.jpg",
      "/images/users/user29.jpg",
      "/images/users/user30.jpg",
    ],
    viewDetails: "/events/events-details",
  },
  {
    id: 8,
    image: "/images/events/event8.jpg",
    price: "$87",
    title: "Charity Gala Dinner",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    seatBooked: 1306,
    seatPercentage: 80,
    avatars: [
      "/images/users/user1.jpg",
      "/images/users/user2.jpg",
      "/images/users/user3.jpg",
      "/images/users/user4.jpg",
      "/images/users/user5.jpg",
    ],
    viewDetails: "/events/events-details",
  },
  {
    id: 9,
    image: "/images/events/event9.jpg",
    price: "$87",
    title: "Web Development Seminar",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    seatBooked: 2756,
    seatPercentage: 78,
    avatars: [
      "/images/users/user6.jpg",
      "/images/users/user7.jpg",
      "/images/users/user8.jpg",
      "/images/users/user9.jpg",
      "/images/users/user10.jpg",
    ],
    viewDetails: "/events/events-details",
  },
  {
    id: 10,
    image: "/images/events/event10.jpg",
    price: "$89",
    title: "Networking Mixer",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    seatBooked: 1467,
    seatPercentage: 30,
    avatars: [
      "/images/users/user11.jpg",
      "/images/users/user7.jpg",
      "/images/users/user12.jpg",
      "/images/users/user9.jpg",
      "/images/users/user15.jpg",
    ],
    viewDetails: "/events/events-details",
  },
  {
    id: 11,
    image: "/images/events/event4.jpg",
    price: "$99",
    title: "AI in Healthcare Symposium",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    seatBooked: 3226,
    seatPercentage: 82,
    avatars: [
      "/images/users/user18.jpg",
      "/images/users/user19.jpg",
      "/images/users/user20.jpg",
    ],
    viewDetails: "/events/events-details",
  },
  {
    id: 12,
    image: "/images/events/event5.jpg",
    price: "$123",
    title: "Product Launch Webinar",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    seatBooked: 356,
    seatPercentage: 65,
    avatars: [
      "/images/users/user15.jpg",
      "/images/users/user16.jpg",
      "/images/users/user17.jpg",
    ],
    viewDetails: "/events/events-details",
  },
];

const ITEMS_PER_PAGE = 8;

const EventsGrid = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(eventData.length / ITEMS_PER_PAGE);

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const currentData = eventData.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <>
      <Grid container columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}>
        {currentData.map((event) => (
          <Grid size={{ xs: 12, sm: 6, md: 6, lg: 4, xl: 3 }} key={event.id}>
            <Card
              sx={{
                boxShadow: "none",
                borderRadius: "7px",
                mb: "25px",
                padding: { xs: "18px", sm: "20px", lg: "12px", xl: "25px" },
              }}
              className="rmui-card"
            >
              <Box position="relative">
                <Link
                  to={event.viewDetails}
                  className="border-radius"
                  style={{
                    display: "block",
                  }}
                >
                  <img
                    src={event.image}
                    className="border-radius"
                    alt="event-image"
                    width={700}
                    height={467}
                  />
                </Link>

                <Box
                  className="text-white po-right-0"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    textAlign: "center",
                    justifyContent: "center",
                    fontWeight: "bold",
                    bgcolor: "primary.main",
                    position: "absolute",
                    top: "0px",
                    width: "60px",
                    height: "60px",
                    borderRadius: "7px",
                    fontSize: "16px",
                  }}
                >
                  {event.price}
                </Box>
              </Box>

              <Box sx={{ mt: "15px" }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: "18px",
                    mb: "5px",
                    fontWeight: "700",
                  }}
                >
                  <Link
                    to={event.viewDetails}
                    className="text-black hover-text-color"
                  >
                    {event.title}
                  </Link>
                </Typography>

                <Typography mb="15px" lineHeight="1.8">
                  {event.description}
                </Typography>

                <AvatarGroup
                  max={4}
                  sx={{
                    justifyContent: "flex-end",
                    mb: "20px",
                    "& .MuiAvatar-root": {
                      border: "2px solid #fff",
                      backgroundColor: "#f0f0f0",
                      color: "#000",
                      width: "35px",
                      height: "35px",
                    },
                    "& .MuiAvatarGroup-avatar": {
                      backgroundColor: "#605dff",
                      color: "#fff",
                      fontSize: "10px",
                    },
                  }}
                >
                  {event.avatars.map((avatar, index) => (
                    <Avatar key={index} alt={`User ${index}`} src={avatar} />
                  ))}
                </AvatarGroup>

                <Box className="progress">
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      mb: "10px",
                    }}
                  >
                    <Typography>Seat Booked</Typography>

                    <Typography fontWeight={600} className="text-black">
                      {event.seatBooked}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      bgcolor: "#ecf0ff",
                      width: "100%",
                      height: "4px",
                    }}
                  >
                    <Box
                      sx={{
                        bgcolor: `primary.main`,
                        width: `${event.seatPercentage}%`,
                        height: "4px",
                      }}
                    ></Box>
                  </Box>
                </Box>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Pagination */}
      {/* Pagination */}
      <Box
        className="bg-white"
        sx={{
          p: { xs: "20px", md: "25px" },
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mb: "25px",
          borderRadius: "7px",
        }}
      >
        <Typography>
          Showing {(currentPage - 1) * ITEMS_PER_PAGE + 1} to{" "}
          {Math.min(currentPage * ITEMS_PER_PAGE, eventData.length)} of{" "}
          {eventData.length} results
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
          <Button
            className="border text-black"
            disabled={currentPage === 1}
            onClick={handlePreviousPage}
            sx={{
              minWidth: "auto",
              width: "30px",
              height: "30px",
              padding: "0",
              textAlign: "center",
              borderRadius: "4px",
              "&:hover": {
                backgroundColor: "primary.main",
                color: "#fff !important",
              },
            }}
          >
            <ChevronLeftIcon />
          </Button>
          {Array.from({ length: totalPages }, (_, index) => (
            <Button
              key={index}
              className="border"
              onClick={() => setCurrentPage(index + 1)}
              sx={{
                bgcolor: currentPage === index + 1 ? "primary.main" : "inherit",
                color:
                  currentPage === index + 1 ? "white !important" : "text-body",
                minWidth: "30px",
                height: "30px",
                "&:hover": {
                  bgcolor: "primary.main",
                  color: "white !important",
                },
              }}
            >
              {index + 1}
            </Button>
          ))}
          <Button
            className="border text-black"
            disabled={currentPage === totalPages}
            onClick={handleNextPage}
            sx={{
              minWidth: "auto",
              width: "30px",
              height: "30px",
              padding: "0",
              textAlign: "center",
              borderRadius: "4px",
              "&:hover": {
                backgroundColor: "primary.main",
                color: "#fff !important",
              },
            }}
          >
            <ChevronRightIcon />
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default EventsGrid;
