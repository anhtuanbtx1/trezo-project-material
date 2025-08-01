"use client";

import { Card, Box, Typography } from "@mui/material";

// Sample data
const stylistsData = [
  {
    id: 1,
    image: "/images/beauty-salon/user-5.png",
    name: "Zinia Anderson",
    totalBookings: 2032,
    rating: 5.0,
  },
  {
    id: 2,
    image: "/images/beauty-salon/user-6.png",
    name: "Angela Carter",
    totalBookings: 1020,
    rating: 4.9,
  },
  {
    id: 3,
    image: "/images/beauty-salon/user-7.png",
    name: "Skyler White",
    totalBookings: 99,
    rating: 4.8,
  },
  {
    id: 4,
    image: "/images/beauty-salon/user-8.png",
    name: "Jane Ronan",
    totalBookings: 89,
    rating: 4.5,
  },
  {
    id: 5,
    image: "/images/beauty-salon/user-9.png",
    name: "Angel Peril",
    totalBookings: 72,
    rating: 4.3,
  },
];

const TopStylistPerformance = () => {
  // Function to render star icons based on rating
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(<i key={i} className="ri-star-fill text-warning"></i>);
    }

    if (hasHalfStar) {
      stars.push(<i key="half" className="ri-star-half-line text-warning"></i>);
    }

    // Fill the remaining stars with empty stars if needed
    const remainingStars = 5 - stars.length;
    for (let i = 0; i < remainingStars; i++) {
      stars.push(
        <i key={`empty-${i}`} className="ri-star-line text-warning"></i>
      );
    }

    return stars;
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
        <Typography
          variant="h3"
          sx={{
            fontSize: { xs: "16px", md: "18px" },
            fontWeight: 700,
            mb: "20px",
          }}
          className="text-black"
        >
          Top Stylist Performance
        </Typography>

        <Box>
          {stylistsData.map((stylist) => (
            <Box
              key={stylist.id}
              className="border-bottom lcbpm-none"
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: "5px",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "14px",
                paddingBottom: "14px",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: "15px" }}>
                <Box flexShrink={0}>
                  <img
                    src={stylist.image}
                    alt={stylist.name}
                    width={32}
                    height={32}
                    style={{
                      borderRadius: "5px",
                    }}
                  />
                </Box>
                <Box>
                  <Typography
                    variant="h3"
                    sx={{
                      fontSize: "14px",
                      fontWeight: 600,
                      mb: '2px',
                    }}
                  >
                    {stylist.name}
                  </Typography>

                  <Typography fontSize={"12px"} mb={0}>
                    <Typography
                      component={"span"}
                      fontSize={"12px"}
                      fontWeight={700}
                    >
                      {stylist.totalBookings}
                    </Typography>{" "}
                    Total Bookings
                  </Typography>
                </Box>
              </Box>

              <Box
                sx={{ display: "flex", alignItems: "center", gap: "2px" }} 
              >
                {renderStars(stylist.rating)}
                <span className="fs-12 position-relative top-1">
                  {stylist.rating}
                </span>
              </Box>
            </Box>
          ))}
        </Box>
      </Card>
    </>
  );
};

export default TopStylistPerformance;
