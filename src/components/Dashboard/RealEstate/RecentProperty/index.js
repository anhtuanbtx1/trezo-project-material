"use client";

import { Card, Box, Typography, Link } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// Sample dynamic data for properties
const properties = [
  {
    imageUrl: "/images/properties/property1.jpg",
    price: "$18,000",
    location: "35 Prince Consort Road",
    beds: 6,
    baths: 5,
    area: 1800,
    detailsUrl: "/property/details",
  },
  {
    imageUrl: "/images/properties/property2.jpg",
    price: "$220,000",
    location: "58 Gateway Road Portland",
    beds: 8,
    baths: 6,
    area: 2000,
    detailsUrl: "/property/details",
  },
  {
    imageUrl: "/images/properties/property3.jpg",
    price: "$350,000",
    location: "18 Chemin Challet",
    beds: 8,
    baths: 7,
    area: 2200,
    detailsUrl: "/property/details",
  },
];

const RecentProperty = () => {
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
          Recent Property
        </Typography>

        <Swiper
          slidesPerView={1}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
          className="rp-slide"
        >
          {properties.map((property, index) => (
            <SwiperSlide key={index}>
              <Box
                sx={{
                  borderRadius: "5px",
                  height: "112px",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
                style={{
                  backgroundImage: `url(${property.imageUrl})`,
                }}
              ></Box>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  mb: "8px",
                  mt: "15px",
                }}
              >
                <Typography
                  component={"h3"}
                  sx={{
                    fontSize: "18px",
                    fontWeight: 700,
                    mb: "0",
                  }}
                  className="text-orange-500"
                >
                  {property.price}
                </Typography>

                <Link
                  href={property.detailsUrl}
                  sx={{
                    display: "inline-block",
                    fontWeight: 500,
                    color: "primary.500",
                    transition: "all 0.3s ease-in-out",

                    "&:hover": {
                      color: "primary.400",
                      textDecoration: "underline !important",
                    },
                  }}
                >
                  View More
                </Link>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                }}
              >
                <i
                  className="material-symbols-outlined text-primary-500"
                  style={{ fontSize: "19px" }}
                >
                  location_on
                </i>
                {property.location}
              </Box>

              <Box
                sx={{
                  mt: "10px",
                  display: "flex",
                  alignItems: "center",
                  gap: { xs: "5px", sm: "20px" },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                  }}
                >
                  <i
                    className="material-symbols-outlined text-primary-500"
                    style={{ fontSize: "18px" }}
                  >
                    bed
                  </i>
                  {property.beds}Bed
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                  }}
                >
                  <i
                    className="material-symbols-outlined text-primary-500"
                    style={{ fontSize: "18px" }}
                  >
                    bathtub
                  </i>
                  {property.baths}Bath
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                  }}
                >
                  <i
                    className="material-symbols-outlined text-primary-500"
                    style={{ fontSize: "18px" }}
                  >
                    square_foot
                  </i>
                  {property.area}sqft
                </Box>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Card>
    </>
  );
};

export default RecentProperty;
