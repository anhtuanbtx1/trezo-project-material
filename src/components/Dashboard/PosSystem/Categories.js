"use client";

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Box, Typography, Grid, Button } from "@mui/material";

const categoriesData = [
  {
    name: "All",
    icon: "/images/pos-system/all-icon.svg",
    products: [
      {
        id: 1,
        name: "Apple iPhone 16",
        category: "Smartphones",
        price: "$799",
        image: "/images/pos-system/product-36.png",
        viewLink: "/ecommerce/products-list/details/",
      },
      {
        id: 2,
        name: "Levi's 501",
        category: "Pants",
        price: "$89",
        image: "/images/pos-system/product-37.png",
        viewLink: "/ecommerce/products-list/details/",
      },
      {
        id: 3,
        name: "Maybelline Lash",
        category: "Makeup",
        price: "$29",
        image: "/images/pos-system/product-38.png",
        viewLink: "/ecommerce/products-list/details/",
      },
      {
        id: 4,
        name: "Samsung TV",
        category: "Television",
        price: "$999",
        image: "/images/pos-system/product-39.png",
        viewLink: "/ecommerce/products-list/details/",
      },
      {
        id: 5,
        name: "Nike Shoes",
        category: "Footwear",
        price: "$120",
        image: "/images/pos-system/product-40.png",
        viewLink: "/ecommerce/products-list/details/",
      },
      {
        id: 6,
        name: "L'Oreal Lipstick",
        category: "Cosmetics",
        price: "$19",
        image: "/images/pos-system/product-41.png",
        viewLink: "/ecommerce/products-list/details/",
      },
      {
        id: 7,
        name: "Organic Honey",
        category: "Food & Beverages",
        price: "$15",
        image: "/images/pos-system/product-42.png",
        viewLink: "/ecommerce/products-list/details/",
      },
      {
        id: 8,
        name: "Sony Headphones",
        category: "Audio",
        price: "$199",
        image: "/images/pos-system/product-43.png",
        viewLink: "/ecommerce/products-list/details/",
      },
      {
        id: 9,
        name: "Gaming Mouse",
        category: "Accessories",
        price: "$59",
        image: "/images/pos-system/product-44.png",
        viewLink: "/ecommerce/products-list/details/",
      },
      {
        id: 10,
        name: "Leather Wallet",
        category: "Fashion",
        price: "$39",
        image: "/images/pos-system/product-37.png",
        viewLink: "/ecommerce/products-list/details/",
      },
      {
        id: 11,
        name: "Wireless Keyboard",
        category: "Electronics",
        price: "$89",
        image: "/images/pos-system/product-38.png",
        viewLink: "/ecommerce/products-list/details/",
      },
      {
        id: 12,
        name: "Digital Watch",
        category: "Wearable",
        price: "$149",
        image: "/images/pos-system/product-39.png",
        viewLink: "/ecommerce/products-list/details/",
      },
      {
        id: 13,
        name: "Running Shoes",
        category: "Sports",
        price: "$110",
        image: "/images/pos-system/product-40.png",
        viewLink: "/ecommerce/products-list/details/",
      },
      {
        id: 14,
        name: "Perfume Set",
        category: "Beauty",
        price: "$79",
        image: "/images/pos-system/product-41.png",
        viewLink: "/ecommerce/products-list/details/",
      },
      {
        id: 15,
        name: "Candle Set",
        category: "Home Decor",
        price: "$29",
        image: "/images/pos-system/product-42.png",
        viewLink: "/ecommerce/products-list/details/",
      },
      {
        id: 16,
        name: "Smart Home Hub",
        category: "Electronics",
        price: "$149",
        image: "/images/pos-system/product-43.png",
        viewLink: "/ecommerce/products-list/details/",
      },
      {
        id: 17,
        name: "Bluetooth Speaker",
        category: "Audio",
        price: "$129",
        image: "/images/pos-system/product-44.png",
        viewLink: "/ecommerce/products-list/details/",
      },
      {
        id: 18,
        name: "Action Camera",
        category: "Photography",
        price: "$299",
        image: "/images/pos-system/product-37.png",
        viewLink: "/ecommerce/products-list/details/",
      },
    ],
  },
  {
    name: "Electronics",
    icon: "/images/pos-system/electronics-icon2.svg",
    products: [
      {
        id: 19,
        name: "Samsung TV",
        category: "Television",
        price: "$999",
        image: "/images/pos-system/product-39.png",
        viewLink: "/ecommerce/products-list/details/",
      },
      {
        id: 20,
        name: "Apple iPhone 16",
        category: "Smartphones",
        price: "$799",
        image: "/images/pos-system/product-36.png",
        viewLink: "/ecommerce/products-list/details/",
      },
      {
        id: 21,
        name: "Levi's 501",
        category: "Pants",
        price: "$89",
        image: "/images/pos-system/product-37.png",
        viewLink: "/ecommerce/products-list/details/",
      },
      {
        id: 22,
        name: "Maybelline Lash",
        category: "Makeup",
        price: "$29",
        image: "/images/pos-system/product-38.png",
        viewLink: "/ecommerce/products-list/details/",
      },
      {
        id: 23,
        name: "Samsung TV",
        category: "Television",
        price: "$999",
        image: "/images/pos-system/product-39.png",
        viewLink: "/ecommerce/products-list/details/",
      },
      {
        id: 24,
        name: "Nike Shoes",
        category: "Footwear",
        price: "$120",
        image: "/images/pos-system/product-40.png",
        viewLink: "/ecommerce/products-list/details/",
      },
    ],
  },
  {
    name: "Clothing",
    icon: "/images/pos-system/clothing-icon2.svg",
    products: [
      {
        id: 25,
        name: "Nike Shoes",
        category: "Footwear",
        price: "$120",
        image: "/images/pos-system/product-40.png",
        viewLink: "/ecommerce/products-list/details/",
      },
      {
        id: 26,
        name: "Running Shoes",
        category: "Sports",
        price: "$110",
        image: "/images/pos-system/product-40.png",
        viewLink: "/ecommerce/products-list/details/",
      },
      {
        id: 27,
        name: "Perfume Set",
        category: "Beauty",
        price: "$79",
        image: "/images/pos-system/product-41.png",
        viewLink: "/ecommerce/products-list/details/",
      },
      {
        id: 28,
        name: "Candle Set",
        category: "Home Decor",
        price: "$29",
        image: "/images/pos-system/product-42.png",
        viewLink: "/ecommerce/products-list/details/",
      },
      {
        id: 29,
        name: "Smart Home Hub",
        category: "Electronics",
        price: "$149",
        image: "/images/pos-system/product-43.png",
        viewLink: "/ecommerce/products-list/details/",
      },
      {
        id: 30,
        name: "Bluetooth Speaker",
        category: "Audio",
        price: "$129",
        image: "/images/pos-system/product-44.png",
        viewLink: "/ecommerce/products-list/details/",
      },
    ],
  },
  {
    name: "Beauty",
    icon: "/images/pos-system/beauty-icon.svg",
    products: [
      {
        id: 32,
        name: "L'Oreal Lipstick",
        category: "Cosmetics",
        price: "$19",
        image: "/images/pos-system/product-41.png",
        viewLink: "/ecommerce/products-list/details/",
      },
      {
        id: 33,
        name: "Samsung TV",
        category: "Television",
        price: "$999",
        image: "/images/pos-system/product-39.png",
        viewLink: "/ecommerce/products-list/details/",
      },
      {
        id: 34,
        name: "Nike Shoes",
        category: "Footwear",
        price: "$120",
        image: "/images/pos-system/product-40.png",
        viewLink: "/ecommerce/products-list/details/",
      },
      {
        id: 35,
        name: "L'Oreal Lipstick",
        category: "Cosmetics",
        price: "$19",
        image: "/images/pos-system/product-41.png",
        viewLink: "/ecommerce/products-list/details/",
      },
      {
        id: 36,
        name: "Organic Honey",
        category: "Food & Beverages",
        price: "$15",
        image: "/images/pos-system/product-42.png",
        viewLink: "/ecommerce/products-list/details/",
      },
      {
        id: 37,
        name: "Sony Headphones",
        category: "Audio",
        price: "$199",
        image: "/images/pos-system/product-43.png",
        viewLink: "/ecommerce/products-list/details/",
      },
    ],
  },
  {
    name: "Foods",
    icon: "/images/pos-system/foods-icon.svg",
    products: [
      {
        id: 38,
        name: "Organic Honey",
        category: "Food & Beverages",
        price: "$15",
        image: "/images/pos-system/product-42.png",
        viewLink: "/ecommerce/products-list/details/",
      },
      {
        id: 39,
        name: "Sony Headphones",
        category: "Audio",
        price: "$199",
        image: "/images/pos-system/product-43.png",
        viewLink: "/ecommerce/products-list/details/",
      },
      {
        id: 40,
        name: "Gaming Mouse",
        category: "Accessories",
        price: "$59",
        image: "/images/pos-system/product-44.png",
        viewLink: "/ecommerce/products-list/details/",
      },
      {
        id: 41,
        name: "Leather Wallet",
        category: "Fashion",
        price: "$39",
        image: "/images/pos-system/product-37.png",
        viewLink: "/ecommerce/products-list/details/",
      },
      {
        id: 42,
        name: "Wireless Keyboard",
        category: "Electronics",
        price: "$89",
        image: "/images/pos-system/product-38.png",
        viewLink: "/ecommerce/products-list/details/",
      },
      {
        id: 43,
        name: "Digital Watch",
        category: "Wearable",
        price: "$149",
        image: "/images/pos-system/product-39.png",
        viewLink: "/ecommerce/products-list/details/",
      },
      {
        id: 44,
        name: "Running Shoes",
        category: "Sports",
        price: "$110",
        image: "/images/pos-system/product-40.png",
        viewLink: "/ecommerce/products-list/details/",
      },
      {
        id: 45,
        name: "Perfume Set",
        category: "Beauty",
        price: "$79",
        image: "/images/pos-system/product-41.png",
        viewLink: "/ecommerce/products-list/details/",
      },
    ],
  },
];

const PRODUCTS_PER_PAGE = 9; // Number of products to show per page

const Categories = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const currentCategory = categoriesData[activeTab];
  const totalProducts = currentCategory.products.length;
  const totalPages = Math.ceil(totalProducts / PRODUCTS_PER_PAGE);

  const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const paginatedProducts = currentCategory.products.slice(
    startIndex,
    startIndex + PRODUCTS_PER_PAGE
  );

  const changePage = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <>
      <Typography
        variant="h3"
        sx={{
          fontSize: { xs: "18px", md: "20px" },
          fontWeight: 500,
          mb: "24px",
        }}
      >
        Categories
      </Typography>

      {/* nav */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "15px",
          mb: "24px",
        }}
      >
        {categoriesData.map((category, index) => (
          <Box
            key={index}
            onClick={() => setActiveTab(index)}
            className={`bg-white border ${
              activeTab === index ? "border-color-primary" : ""
            }`}
            sx={{
              width: "125px",
              padding: "20px",
              borderRadius: "7px",
              borderWidth: "2px !important",
              textAlign: "center",
              cursor: "pointer",
            }}
          >
            <img
              src={category.icon}
              alt={category.name}
              width={40}
              height={40}
              style={{
                marginBottom: "10px",
              }}
            />
            <Typography
              variant="h4"
              sx={{
                fontSize: { xs: "14px", md: "16px" },
                fontWeight: 500,
                mb: "5px",
              }}
            >
              {category.name}
            </Typography>

            <Typography
              sx={{
                fontSize: "12px",
                fontWeight: 500,
                mb: "0",
                lineHeight: "1",
              }}
            >
              {category.products.length} Products
            </Typography>
          </Box>
        ))}
      </Box>

      <Box>
        <Grid container columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}>
          {paginatedProducts.map((product) => (
            <Grid size={{ xs: 12, sm: 6, md: 4, lg: 4, xl: 4 }} key={product.id}>
              <Box
                className="border bg-white"
                sx={{
                  boxShadow: "0px 3px 4px 0px rgba(0, 0, 0, 0.05)",
                  padding: "20px",
                  borderRadius: "7px",
                  mb: "24px",
                }}
              >
                <Link
                  to={product.viewLink}
                  style={{
                    display: "block",
                    textDecoration: "none",
                    marginBottom: "15px",
                  }}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    width={570}
                    height={402}
                    style={{
                      borderRadius: "5px",
                      marginBottom: "10px",
                    }}
                  />

                  <Typography
                    variant="h3"
                    sx={{
                      fontSize: { xs: "16px", md: "18px", lg: "20px" },
                      fontWeight: 500,
                      mb: "5px",
                    }}
                  >
                    {product.name}
                  </Typography>

                  <Typography className="text-body">
                    {product.category}
                  </Typography>
                </Link>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "end",
                    gap: "10px",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: { xs: "20px", lg: "24px" },
                      fontWeight: 500,
                      color: "success.main",
                      lineHeight: "1",
                    }}
                  >
                    {product.price}
                  </Typography>

                  <Button
                    sx={{
                      backgroundColor: "#DDE4FF",
                      width: "35px",
                      height: "35px",
                      lineHeight: "35px",
                      minWidth: "auto",
                      borderRadius: "5px",
                      color: "primary.main",
                      fontSize: "22px",
                    }}
                    className="for-dark-secondary-bg"
                  >
                    <i className="ri-shopping-cart-fill"></i>
                  </Button>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* Pagination */}
        {totalPages > 1 && (
          <Box
            className="border bg-white"
            sx={{
              display: "flex",
              justifyContent: { xs: "center", sm: "space-between" },
              alignItems: "center",
              flexWrap: "wrap",
              gap: "10px",
              borderRadius: "7px",
              boxShadow: "0px 3px 4px 0px rgba(0, 0, 0, 0.05)",
              padding: "13px 20px",
              mb: "24px",
            }}
          >
            <Typography sx={{ fontSize: "12px", fontWeight: 500, mb: "0" }}>
              Showing {paginatedProducts.length} of {totalProducts} Products
            </Typography>

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "wrap",
                gap: "5px",
              }}
            >
              <Button
                className={`border ${currentPage === 1 ? "disabled" : ""}`}
                onClick={() => changePage(currentPage - 1)}
                sx={{
                  minWidth: "auto",
                  padding: "0px",
                  width: "32px",
                  height: "32px",
                  borderRadius: "5px",
                }}
              >
                <i className="material-symbols-outlined">keyboard_arrow_left</i>
              </Button>

              {/* Dynamic Page Numbers */}
              {[...Array(totalPages)].map((_, index) => (
                <Button
                  key={index}
                  className={`border ${
                    currentPage === index + 1 ? "bg-primary text-white" : ""
                  }`}
                  onClick={() => changePage(index + 1)}
                  sx={{
                    minWidth: "auto",
                    padding: "0px",
                    width: "32px",
                    height: "32px",
                    borderRadius: "5px",
                  }}
                >
                  {index + 1}
                </Button>
              ))}

              <Button
                className={`border ${
                  currentPage === totalPages ? "disabled" : ""
                }`}
                onClick={() => changePage(currentPage + 1)}
                sx={{
                  minWidth: "auto",
                  padding: "0px",
                  width: "32px",
                  height: "32px",
                  borderRadius: "5px",
                }}
              >
                <i className="material-symbols-outlined">
                  keyboard_arrow_right
                </i>
              </Button>
            </Box>
          </Box>
        )}
      </Box>
    </>
  );
};

export default Categories;
