"use client";

import { useState, useEffect } from "react";
import { Box, Typography, Card } from "@mui/material"; 

const TopSellingProduct = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Simulate an API call to fetch product data
  useEffect(() => {
    setTimeout(() => {
      setProducts([
        {
          id: 1,
          name: "Tablet PC",
          sold: 2032,
          rating: 5.0,
          ratingStars: [true, true, true, true, true],
          image: "/images/store-analytics/product-1.png",
        },
        {
          id: 2,
          name: "Clay Camera",
          sold: 1020,
          rating: 4.9,
          ratingStars: [true, true, true, true, "half"],
          image: "/images/store-analytics/product-2.png",
        },
        {
          id: 3,
          name: "Laptop",
          sold: 99,
          rating: 4.8,
          ratingStars: [true, true, true, true, "half"],
          image: "/images/store-analytics/product-3.png",
        },
        {
          id: 4,
          name: "Zenbook X",
          sold: 89,
          rating: 4.5,
          ratingStars: [true, true, true, true, "half"],
          image: "/images/store-analytics/product-4.png",
        },
        {
          id: 5,
          name: "QCY Airpod",
          sold: 72,
          rating: 4.3,
          ratingStars: [true, true, true, true, "half"],
          image: "/images/store-analytics/product-5.png",
        },
        {
          id: 6,
          name: "Laptop Mockup",
          sold: 72,
          rating: 4.0,
          ratingStars: [true, true, true, true, false],
          image: "/images/store-analytics/product-6.png",
        },
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  // Function to render rating stars dynamically
  const renderStars = (ratingStars) => {
    return ratingStars.map((star, index) => {
      if (star === true) {
        return <i key={index} className="ri-star-fill text-warning"></i>;
      } else if (star === "half") {
        return <i key={index} className="ri-star-half-line text-warning"></i>;
      } else {
        return <i key={index} className="ri-star-line text-warning"></i>;
      }
    });
  };

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
            mb: "25px",
          }}
          className="text-black"
        >
          Top Selling Product
        </Typography>

        {loading ? (
          <Typography>Loading...</Typography>
        ) : (
          <Box>
            {products.map((product) => (
              <Box
                key={product.id}
                className="border-bottom lcbpm-none"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "5px",
                  mb: "16px",
                  pb: "16px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    width={32}
                    height={32}
                    style={{
                      borderRadius: "5px",
                    }}
                  />

                  <Box>
                    <Typography
                      variant="h4"
                      sx={{
                        fontSize: { xs: "13px", md: "14px" },
                        fontWeight: 600,
                        mb: "2px",
                      }}
                    >
                      {product.name}
                    </Typography>

                    <Box fontSize={"12px"}>
                      <Typography
                        component={"span"}
                        fontSize={"12px"}
                        fontWeight={700}
                      >
                        {product.sold}
                      </Typography>{" "}
                      sold
                    </Box>
                  </Box>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "2px",
                  }}
                >
                  {renderStars(product.ratingStars)}

                  <Typography
                    sx={{ fontSize: "12px", position: "relative", top: "1px" }}
                  >
                    {product.rating}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        )}
      </Card>
    </>
  );
};

export default TopSellingProduct;
