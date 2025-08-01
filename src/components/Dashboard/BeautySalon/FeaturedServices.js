"use client";

import { Card, Box, Typography } from "@mui/material";

const featuredServicesData = [
  {
    id: 1,
    image: "/images/beauty-salon/featured-1.png",
    name: "Hair Cut",
    served: "132 Served this week",
    rank: "01",
  },
  {
    id: 2,
    image: "/images/beauty-salon/featured-2.png",
    name: "Manicure",
    served: "102 Served this week",
    rank: "02",
  },
  {
    id: 3,
    image: "/images/beauty-salon/featured-3.png",
    name: "Pedicure",
    served: "99 Served this week",
    rank: "03",
  },
  {
    id: 4,
    image: "/images/beauty-salon/featured-4.png",
    name: "Nail Art",
    served: "89 Served this week",
    rank: "04",
  },
  {
    id: 5,
    image: "/images/beauty-salon/featured-5.png",
    name: "Facial Treatment",
    served: "72 Served this week",
    rank: "05",
  },
];

const FeaturedServices = () => {
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
        <Box sx={{ mb: "10px", pb: "10px" }}>
          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: "16px", md: "18px" },
              fontWeight: 700,
            }}
            className="text-black"
          >
            Featured Services
          </Typography>
        </Box>

        <>
          {featuredServicesData.map((service) => (
            <Box
              key={service.id}
              className="border-bottom lcbpm-none"
              sx={{
                paddingBottom: "18px",
                marginBottom: "18px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "5px",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{ display: "flex", gap: "10px", alignItems: "center" }}
                >
                  <img
                    src={service.image}
                    alt={service.name}
                    width={32}
                    height={32}
                  />

                  <Box>
                    <Typography
                      variant="h3"
                      sx={{ fontSize: "14px", fontWeight: 600, mb: "0" }}
                    >
                      {service.name}
                    </Typography>

                    <Typography fontSize={"12px"}>{service.served}</Typography>
                  </Box>
                </Box>

                <Box 
                  sx={{
                    bgcolor: "#605dff1a",
                    color: "primary.main",
                    fontSize: "12px",
                    fontWeight: 500,
                    width: "20px",
                    height: "20px",
                    lineHeight: "20px",
                    textAlign: "center",
                    borderRadius: "50%",
                    display: "inline-block",
                  }}
                >
                  {service.rank}
                </Box>
              </Box>
            </Box>
          ))}
        </>
      </Card>
    </>
  );
};

export default FeaturedServices;
