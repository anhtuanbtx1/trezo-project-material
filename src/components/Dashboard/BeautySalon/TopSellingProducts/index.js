"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import { Card, Box, Typography } from "@mui/material";
import CustomDropdown from "./CustomDropdown";

const TopSellingProducts = () => {
  const products = [
    {
      id: 1,
      image: "/images/beauty-salon/product-1.png",
      name: "Hair Treatment",
      viewDetails: "/ecommerce/products-list/details/",
      sold: 321,
      price: 23.5,
    },
    {
      id: 2,
      image: "/images/beauty-salon/product-2.png",
      name: "Facial Kit",
      viewDetails: "/ecommerce/products-list/details/",
      sold: 124,
      price: 20.5,
    },
    {
      id: 3,
      image: "/images/beauty-salon/product-3.png",
      name: "Winter Cream",
      viewDetails: "/ecommerce/products-list/details/",
      sold: 76,
      price: 25.5,
    },
    {
      id: 4,
      image: "/images/beauty-salon/product-4.png",
      name: "Perfume",
      viewDetails: "/ecommerce/products-list/details/",
      sold: 24,
      price: 30.5,
    },
    {
      id: 5,
      image: "/images/beauty-salon/product-5.png",
      name: "Face Wash",
      viewDetails: "/ecommerce/products-list/details/",
      sold: 12,
      price: 15.5,
    },
    {
      id: 6,
      image: "/images/beauty-salon/product-6.png",
      name: "Glow Serum",
      viewDetails: "/ecommerce/products-list/details/",
      sold: 23,
      price: 45.5,
    },
    {
      id: 7,
      image: "/images/beauty-salon/product-7.png",
      name: "Facial Kit",
      viewDetails: "/ecommerce/products-list/details/",
      sold: 124,
      price: 20.5,
    },
    {
      id: 8,
      image: "/images/beauty-salon/product-2.png",
      name: "Winter Cream",
      viewDetails: "/ecommerce/products-list/details/",
      sold: 76,
      price: 25.5,
    },
  ];

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
            Top Selling Products
          </Typography>

          <CustomDropdown
            options={["This Day", "This Week", "This Month", "This Year"]} // Need to change the options also in CustomDropdown file
            onSelect={(value) => console.log(value)}
            defaultLabel="This Month"
          />
        </Box>

        <Box sx={{ position: "relative", zIndex: 0 }}>
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            navigation={true}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              450: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              992: {
                slidesPerView: 4,
              },
              1199: {
                slidesPerView: 4,
              },
              1400: {
                slidesPerView: 4,
              },
              1600: {
                slidesPerView: 4,
              },
              1800: {
                slidesPerView: 6,
              },
            }}
            modules={[Navigation]}
            className="bsts-products-slide"
          >
            {products.map((product) => (
              <SwiperSlide key={product.id}>
                <Link
                  href={product.viewDetails}
                  className="beauty-product d-block text-decoration-none"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    width={465}
                    height={552}
                    style={{
                      marginBottom: "10px",
                      borderRadius: "7px",
                    }}
                  />

                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      flexWrap: "wrap",
                      gap: "5px",
                      justifyContent: "space-between",
                      mb: "10px",
                    }}
                  >
                    <Typography
                      variant="h4"
                      sx={{
                        mb: "0",
                        fontSize: "14px",
                        fontWeight: 600,
                        lineHeight: 1,
                      }}
                    >
                      {product.name}
                    </Typography>

                    <Box
                      sx={{
                        bgcolor: "success.100",
                        border: "1px solid",
                        borderColor: "success.300",
                        px: "8px",
                        py: "3px",
                        borderRadius: "30px",
                        color: "success.700",
                        fontSize: "11px",
                        fontWeight: 500,
                        lineHeight: 1,
                      }}
                    >
                      {product.sold}
                    </Box>
                  </Box>

                  <Box
                    className="d-flex justify-content-between"
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      gap: "5px",
                    }}
                  >
                    <Box
                      sx={{
                        fontSize: "14px",
                        fontWeight: 600,
                        color: "#3225ae",
                      }}
                    >
                      ${product.price.toFixed(2)}
                    </Box>

                    <Box fontSize={"12px"}>sold</Box>
                  </Box>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Card>
    </>
  );
};

export default TopSellingProducts;
