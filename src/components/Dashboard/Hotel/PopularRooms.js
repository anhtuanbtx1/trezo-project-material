"use client";

import { useState, useEffect } from "react";
import { Box, Typography, Card } from "@mui/material";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

const PopularRooms = () => {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch rooms data
  useEffect(() => {
    const fetchRooms = async () => {
      try {
        setLoading(true);
        // Simulate API call with mock data
        await new Promise((resolve) => setTimeout(resolve, 800));

        const mockRooms = [
          {
            id: "1",
            name: "The Velvet - F - 32045",
            code: "SJ-32056",
            imageUrl: "/images/rooms/room6.jpg",
            status: "booked",
            price: 299,
            rating: 4.8,
            link: "/hotel/room-details",
          },
          {
            id: "2",
            name: "Deluxe Room - G - 3215",
            code: "SJ-32057",
            imageUrl: "/images/rooms/room7.jpg",
            status: "available",
            price: 249,
            rating: 4.5,
            link: "/hotel/room-details",
          },
          {
            id: "3",
            name: "Executive Suite - A - 2001",
            code: "SJ-32058",
            imageUrl: "/images/rooms/room8.jpg",
            status: "available",
            price: 349,
            rating: 4.9,
            link: "/hotel/room-details",
          },
          {
            id: "4",
            name: "Presidential Suite - P - 5001",
            code: "SJ-32059",
            imageUrl: "/images/rooms/room9.jpg",
            status: "booked",
            price: 599,
            rating: 5.0,
            link: "/hotel/room-details",
          },
          {
            id: "5",
            name: "Garden View Room - V - 1502",
            code: "SJ-32060",
            imageUrl: "/images/rooms/room6.jpg",
            status: "available",
            price: 199,
            rating: 4.2,
            link: "/hotel/room-details",
          },
        ];

        setRooms(mockRooms);
      } catch (error) {
        console.error("Failed to fetch rooms:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRooms();
  }, []);

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
            flexWrap: "wrap",
            gap: "15px",
            mb: "20px",
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
            Popular Rooms
          </Typography>
        </Box>

        {loading ? (
          <Box sx={{ textAlign: "center", py: 4 }}>
            <Typography>Loading rooms...</Typography>
          </Box>
        ) : rooms.length === 0 ? (
          <Box sx={{ textAlign: "center", py: 4 }}>
            <Typography>No popular rooms available</Typography>
          </Box>
        ) : (
          <Swiper
            spaceBetween={25}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              506: {
                slidesPerView: 2,
              },
              668: {
                slidesPerView: 3,
              },
              705: {
                slidesPerView: 4,
              },
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            modules={[Pagination, Autoplay]}
            className="hotel-popular-rooms"
          >
            {rooms.map((room) => (
              <SwiperSlide key={room.id}>
                <Box>
                  <Box sx={{ position: "relative", mb: "10px" }}>
                    <Link
                      to={room.link}
                      className="border-radius"
                      style={{
                        display: "block",
                      }}
                    >
                      <img
                        src={room.imageUrl}
                        className="border-radius"
                        alt={`${room.name}`}
                        width={500}
                        height={500}
                      />
                    </Link>

                    <Box
                      className="po-right-10"
                      sx={{
                        position: "absolute",
                        top: "10px",
                        borderRadius: "30px",
                        backgroundColor:
                          room.status === "available"
                            ? "success.100"
                            : "error.50",
                        color:
                          room.status === "available"
                            ? "success.main"
                            : "error.main",
                        borderColor:
                          room.status === "available"
                            ? "success.300"
                            : "error.40",
                        border: "1px solid",
                        lineHeight: 1,
                        fontSize: "12px",
                        display: "inline-block",
                        fontWeight: 500,
                        p: "3.5px 10px",
                        textTransform: "capitalize",
                      }}
                    >
                      {room.status}
                    </Box>
                  </Box>

                  <Typography
                    variant="h5"
                    sx={{ fontWeight: 600, fontSize: "16px", mb: "5px" }}
                  >
                    <Link
                      to={room.link}
                      className="text-black hover-text-color"
                    >
                      {room.name}
                    </Link>
                  </Typography>

                  <Typography sx={{ mb: "5px" }}>
                    Code <strong>{room.code}</strong>
                  </Typography>

                  {room.price && (
                    <Typography sx={{ fontWeight: 600, color: "primary.main" }}>
                      ${room.price}{" "}
                      <span
                        style={{ fontWeight: 400, color: "text.secondary" }}
                      >
                        / night
                      </span>
                    </Typography>
                  )}
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </Card>
    </>
  );
};

export default PopularRooms;
