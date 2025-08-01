"use client";

import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Grid,
  Box,
  Button,
  Typography,
  Card,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const products = [
  {
    id: 1,
    name: 'Apple MacBook Pro 16.2" with M3 Pro Chip',
    price: 3479,
    originalPrice: 3599,
    image: "/images/products/product6.jpg",
    rating: 4.5,
    link: "/ecommerce/products-list/details",
  },
  {
    id: 2,
    name: "SAMSUNG Galaxy Tab A9+ Tablet 11”",
    price: 549,
    originalPrice: 649,
    image: "/images/products/product7.jpg",
    rating: 4.5,
    link: "/ecommerce/products-list/details",
  },
  {
    id: 3,
    name: "Apple iPhone 15 Pro Max (512 GB)",
    price: 1479,
    originalPrice: 1599,
    image: "/images/products/product8.jpg",
    rating: 4.5,
    link: "/ecommerce/products-list/details",
  },
  {
    id: 4,
    name: "Dell XPS 15 Laptop",
    price: 1899,
    originalPrice: 1999,
    image: "/images/products/product9.jpg",
    rating: 4.8,
    link: "/ecommerce/products-list/details",
  },
  {
    id: 5,
    name: "Sony WH-1000XM5 Headphones",
    price: 349,
    originalPrice: 399,
    image: "/images/products/product10.jpg",
    rating: 4.7,
    link: "/ecommerce/products-list/details",
  },
  {
    id: 6,
    name: "Amazfit GTR 3 Smart Watch for Men",
    price: 49,
    originalPrice: 69,
    image: "/images/products/product11.jpg",
    rating: 3,
    link: "/ecommerce/products-list/details",
  },
  {
    id: 7,
    name: "SOJOS Small Round Polarized Sunglasses",
    price: 39,
    originalPrice: 49,
    image: "/images/products/product12.jpg",
    rating: 4,
    link: "/ecommerce/products-list/details",
  },
  {
    id: 8,
    name: "Nautical Clock Ship Table Clock Brass Desk",
    price: 25,
    originalPrice: 39,
    image: "/images/products/product13.jpg",
    rating: 4.5,
    link: "/ecommerce/products-list/details",
  },
  {
    id: 9,
    name: "Carhartt, Durable, Adjustable Crossbody Bag",
    price: 149,
    originalPrice: 299,
    image: "/images/products/product14.jpg",
    rating: 4.7,
    link: "/ecommerce/products-list/details",
  },
];

const ProductsGridContent = () => {
  // select
  const [select, setSelect] = useState("");

  const handleChange = (event) => {
    setSelect(event.target.value);
  };

  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Filter products based on the search term
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination logic
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const currentProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
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
        <Box
          sx={{
            display: { sm: "flex" },
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Typography
              variant="h5"
              fontWeight={500}
              fontSize={18}
              className="text-black"
              sx={{
                mb: { xs: "10px", sm: "0" },
              }}
            >
              Filter
            </Typography>
          </Box>

          <Box
            sx={{
              display: { sm: "flex" },
              alignItems: "center",
              gap: "20px",
            }}
          >
            <Box
              component="form"
              className="t-search-form"
              sx={{
                width: { sm: "265px" },
                mb: { xs: "10px", sm: "0" },
              }}
            >
              <label>
                <i className="material-symbols-outlined">search</i>
              </label>
              <input
                type="text"
                className="t-input"
                placeholder="Search here....."
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1); // Reset to the first page when searching
                }}
              />
            </Box>

            <FormControl
              sx={{ minWidth: { xs: "100%", sm: "130px" } }}
              size="small"
            >
              <InputLabel id="demo-select-small">Select</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={select}
                label="Select"
                onChange={handleChange}
                className="select"
              >
                <MenuItem value={0}>Default Sorting</MenuItem>
                <MenuItem value={1}>Price Low to High</MenuItem>
                <MenuItem value={2}>Price High to Low</MenuItem>
                <MenuItem value={3}>Top Sales</MenuItem>
                <MenuItem value={4}>Newest Arrivals</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Box>
      </Card>

      <Grid container columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}>
        {currentProducts.map((product) => (
          <Grid key={product.id} size={{ xs: 12, sm: 6, md: 6, lg: 4, xl: 4 }}>
            <Box
              className="single-product-item"
              sx={{ mb: { xs: "30px", sm: "45px" } }}
            >
              <Box sx={{ position: "relative" }}>
                <Link to={product.link} style={{ display: "block" }}>
                  <img
                    src={product.image}
                    className="border-radius"
                    alt={product.name}
                    width={714}
                    height={714}
                  />
                </Link>

                <Box
                  sx={{
                    position: "absolute",
                    right: "0",
                    bottom: "5px",
                    bgcolor: "#fff",
                    paddingTop: "5px",
                    paddingLeft: "5px",
                    borderRadius: "7px 0px 0px 0px",
                  }}
                >
                  <Button
                    variant="contained"
                    sx={{
                      bgcolor: "primary.main",
                      boxShadow: "none",
                      width: "60px",
                      height: "60px",
                      borderRadius: "7px",
                      padding: "0",
                      minWidth: "auto",
                    }}
                    className="text-white"
                  >
                    <i className="material-symbols-outlined">shopping_cart</i>
                  </Button>
                </Box>
              </Box>

              <Box mt="15px">
                <Typography variant="h6" className="text-black" mb="10px">
                  <Link
                    to={product.link}
                    className="text-black hover-text-color"
                    style={{ fontSize: "16px" }}
                  >
                    {product.name}
                  </Link>
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    mt: "20px",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <Typography
                      fontWeight="700"
                      fontSize="20px"
                      className="text-black"
                    >
                      ${product.price}
                    </Typography>
                    <Typography
                      fontSize="16px"
                      className="text-body"
                      sx={{ textDecoration: "line-through" }}
                    >
                      ${product.originalPrice}
                    </Typography>
                  </Box>

                  <Box
                    sx={{ display: "flex", alignItems: "center", gap: "2px" }}
                  >
                    {Array.from({ length: 5 }).map((_, index) => (
                      <i
                        key={index}
                        className={
                          index < Math.floor(product.rating)
                            ? "ri-star-fill"
                            : index < product.rating
                            ? "ri-star-half-fill"
                            : "ri-star-line"
                        }
                        style={{ color: "#fe7a36" }}
                      ></i>
                    ))}
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>

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
        <Typography sx={{ fontSize: "14px" }}>
          Showing {Math.min(currentPage * itemsPerPage, products.length)} of{" "}
          {products.length} results
        </Typography>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "5px",
          }}
        >
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
            }}
          >
            <ChevronLeftIcon />
          </Button>

          {Array.from({ length: totalPages }, (_, index) => (
            <Button
              className="border"
              key={index}
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
            }}
          >
            <ChevronRightIcon />
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default ProductsGridContent;
