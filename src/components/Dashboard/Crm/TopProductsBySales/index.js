"use client";

import React from "react";
import { Card, Box, Typography } from "@mui/material";
import CustomDropdown from "./CustomDropdown";

// Define an array of products to make the data dynamic
const products = [
  {
    id: 1,
    name: "Samsung Galaxy",
    brand: "Samsung",
    sales: "$96,455",
    icon: "smartphone",
    color: "primary",
  },
  {
    id: 2,
    name: "iPhone 15 Plus",
    brand: "Apple Inc.",
    sales: "$89,670",
    icon: "tap_and_play",
    color: "purple",
  },
  {
    id: 3,
    name: "Vivo V30",
    brand: "Vivo Ltd.",
    sales: "$75,329",
    icon: "edgesensor_low",
    color: "error",
  },
  {
    id: 4,
    name: "Watch Series 7",
    brand: "Apple",
    sales: "$98,256",
    icon: "watch",
    color: "success",
  },
  {
    id: 5,
    name: "Sony WF-SP800N",
    brand: "Sony",
    sales: "$65,987",
    icon: "headphones",
    color: "primary",
  },
];

const TopProductsBySales = () => {
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
            Top Products by Sales
          </Typography>

          <Box>
            <CustomDropdown
              options={["This Week", "This Month", "This Year"]} // Need to change the options also in CustomDropdown file
              onSelect={(value) => console.log(value)}
              defaultLabel="This Week"
            />
          </Box>
        </Box>

        <Box className="crm-sr-list">
          {products.map((product) => (
            <Box
              key={product.id}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: "12.8px",
                paddingTop: "12.8px",
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
                <Box
                  className={`text-${product.color}`}
                  sx={{
                    bgcolor: `${product.color}.100`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "4px",
                    width: "48px",
                    height: "48px",
                  }}
                >
                  <i className="material-symbols-outlined">{product.icon}</i>
                </Box>

                <Box>
                  <Typography
                    variant="h6"
                    className="text-black"
                    fontWeight="500 !important"
                    fontSize="14px"
                  >
                    {product.name}
                  </Typography>

                  <Typography
                    component="span"
                    sx={{ fontSize: "13px", display: "block" }}
                  >
                    {product.brand}
                  </Typography>
                </Box>
              </Box>

              <Typography
                component="div"
                color="success"
                fontWeight={500}
                className="text-black"
              >
                {product.sales}
              </Typography>
            </Box>
          ))}
        </Box>
      </Card>
    </>
  );
};

export default TopProductsBySales;
