"use client";

import { useState, useEffect } from "react";
import { Box, Typography, Card, Link, Button } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";

const RecentBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentDate] = useState(
    new Date().toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    })
  );

  // Mock data fetch - replace with actual API call
  useEffect(() => {
    const fetchBookings = async () => {
      try {
        setLoading(true);
        // Simulate API call delay
        await new Promise((resolve) => setTimeout(resolve, 800));

        // Mock data - replace with actual API response
        const mockData = [
          {
            id: "1",
            roomName: "Deluxe Room - G - 3215",
            customerName: "Angela Carter",
            duration: "10 Dec - 15 Dec",
            imageUrl: "/images/rooms/room1.jpg",
            bookingDate: "2025-04-15",
          },
          {
            id: "2",
            roomName: "The Garden Suite 101",
            customerName: "Jack Smith",
            duration: "12 Dec - 16 Dec",
            imageUrl: "/images/rooms/room2.jpg",
            bookingDate: "2025-04-14",
          },
          {
            id: "3",
            roomName: "Executive Suite - A - 2001",
            customerName: "Maria Garcia",
            duration: "18 Dec - 22 Dec",
            imageUrl: "/images/rooms/room3.jpg",
            bookingDate: "2025-04-13",
          },
          {
            id: "4",
            roomName: "Presidential Suite - P - 5001",
            customerName: "David Johnson",
            duration: "20 Dec - 25 Dec",
            imageUrl: "/images/rooms/room4.jpg",
            bookingDate: "2025-04-12",
          },
          {
            id: "5",
            roomName: "Standard Room - S - 1102",
            customerName: "Sophia Martinez",
            duration: "22 Dec - 27 Dec",
            imageUrl: "/images/rooms/room5.jpg",
            bookingDate: "2025-04-11",
          },
          {
            id: "6",
            roomName: "Royal Suite - R - 6003",
            customerName: "Liam Thompson",
            duration: "24 Dec - 28 Dec",
            imageUrl: "/images/rooms/room6.jpg",
            bookingDate: "2025-04-10",
          },
          {
            id: "7",
            roomName: "Superior Room - B - 1020",
            customerName: "Emma Wilson",
            duration: "26 Dec - 30 Dec",
            imageUrl: "/images/rooms/room7.jpg",
            bookingDate: "2025-04-09",
          },
          {
            id: "8",
            roomName: "Penthouse Suite - P - 7001",
            customerName: "Mason Brown",
            duration: "28 Dec - 02 Jan",
            imageUrl: "/images/rooms/room8.jpg",
            bookingDate: "2025-04-08",
          },
          {
            id: "9",
            roomName: "Family Room - F - 2215",
            customerName: "Isabella Clark",
            duration: "30 Dec - 04 Jan",
            imageUrl: "/images/rooms/room9.jpg",
            bookingDate: "2025-04-07",
          },
        ];

        setBookings(mockData);
      } catch (error) {
        console.error("Failed to fetch bookings:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
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
            mb: "10px",
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
            Recent Bookings
          </Typography>

          <Button 
            className="bg-gray border-none border-radius text-body"
            sx={{
              textTransform: "capitalize",
              p: '10px 15px',
              fontSize: "14px",
              display: "flex",
              alignItems: "center",
              gap: '8px', 
              lineHeight: 1
            }}
          >
            {currentDate} <i className="ri-calendar-2-line" style={{ fontSize: '18px', lineHeight: 1 }}></i>
          </Button>
        </Box>

        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateCalendar sx={{ width: "100%" }} className="rmui-ws-calendar" />
        </LocalizationProvider>

        <Box
          sx={{
            maxHeight: "550px",
            overflowY: "auto",
          }}
          className="pr-10"
        >
          {loading ? (
            <Box sx={{ textAlign: "center", py: 4 }}>
              <Typography>Loading bookings...</Typography>
            </Box>
          ) : bookings.length === 0 ? (
            <Box sx={{ textAlign: "center", py: 4 }}>
              <Typography>No recent bookings found</Typography>
            </Box>
          ) : (
            bookings.map((booking) => (
              <Box
                key={booking.id}
                sx={{
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "15px",
                  mt: "15px",
                  pt: "15px",
                }}
                className="border-top"
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "15px",
                  }}
                >
                  <Link
                    href="#"
                    style={{
                      display: "block",
                      width: "80px",
                      borderRadius: "4px",
                    }}
                  >
                    <img
                      src={booking.imageUrl}
                      alt={`${booking.roomName}`}
                      style={{ borderRadius: "4px" }}
                      width={80}
                      height={80}
                    />
                  </Link>

                  <Box>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 600,
                        mb: "6px",
                        fontSize: { xs: "13px", md: "14px" },
                        lineHeight: 1,
                      }}
                    >
                      <Link href="#" className="text-black hover-text-color">
                        {booking.roomName}
                      </Link>
                    </Typography>

                    <Typography
                      sx={{ fontSize: "12px", display: "block", mb: "6px" }}
                    >
                      Booked by <strong>{booking.customerName}</strong>
                    </Typography>

                    <Box
                      sx={{
                        backgroundColor: "primary.50",
                        color: "primary.main",
                        display: "inline-block",
                        borderRadius: "4px",
                        padding: "3.5px 10px",
                        fontSize: "12px",
                        fontWeight: 500,
                        lineHeight: 1,
                      }}
                    >
                      {booking.duration}
                    </Box>
                  </Box>
                </Box>

                <Link
                  href="#"
                  style={{
                    width: "30px",
                    height: "30px",
                    borderRadius: "50%",
                    backgroundColor: "#ECEEF2",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  aria-label={`View details for ${booking.roomName}`}
                >
                  <i className="ri-arrow-right-line"></i>
                </Link>
              </Box>
            ))
          )}
        </Box>
      </Card>
    </>
  );
};

export default RecentBookings;
