"use client";

import React, { useState } from "react";
import {
  Card,
  Box,
  Typography,
  Menu,
  IconButton,
  MenuItem,
  Grid,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

// Sellers Data
const sellers = [
  // Add as many seller objects as needed
  {
    id: 1,
    name: "Ava Turner",
    email: "turner@trezo.com",
    image: "/images/sellers/seller1.png",
    lastSaleDate: "25 Nov 2024",
    itemStock: 50,
    walletBalance: "$9,999.50",
    revenue: "$5,999.50",
    store: "TechMaster Store",
  },
  {
    id: 2,
    name: "Ethan Parker",
    email: "ethan@trezo.com",
    image: "/images/sellers/seller2.png",
    lastSaleDate: "1 Nov 2024",
    itemStock: 39,
    walletBalance: "$6,756.50",
    revenue: "$4,645.50",
    store: "RisionTech Outlet",
  },
  {
    id: 3,
    name: "Isabella Lee",
    email: "isabella@trezo.com",
    image: "/images/sellers/seller3.png",
    lastSaleDate: "30 Sep 2024",
    itemStock: 75,
    walletBalance: "$5,550.00",
    revenue: "$4,350.50",
    store: "ComfotLiving",
  },
  {
    id: 4,
    name: "Thompson Torres",
    email: "thompson@trezo.com",
    image: "/images/sellers/seller4.png",
    lastSaleDate: "02 Aug 2024",
    itemStock: 99,
    walletBalance: "$2,100.50",
    revenue: "$1,500.50",
    store: "SportFit Store",
  },
  {
    id: 5,
    name: "Lucas Lyon",
    email: "lucas@trezo.com",
    image: "/images/sellers/seller5.png",
    lastSaleDate: "22 July 2024",
    itemStock: 350,
    walletBalance: "$15,250.50",
    revenue: "$10,200.50",
    store: "Velas Store",
  },
  {
    id: 6,
    name: "Morgan Sturges",
    email: "morgan@trezo.com",
    image: "/images/sellers/seller6.png",
    lastSaleDate: "10 Jun 2024",
    itemStock: 200,
    walletBalance: "$10,500.50",
    revenue: "$5,458.50",
    store: "Herna Store",
  },
  {
    id: 7,
    name: "Sophia McNeel",
    email: "sophia@trezo.com",
    image: "/images/sellers/seller7.png",
    lastSaleDate: "16 Feb 2024",
    itemStock: 80,
    walletBalance: "$2,580.00",
    revenue: "$1,500.00",
    store: "Dona Store",
  },
  {
    id: 8,
    name: "Rodriguez Meade",
    email: "rodriguez@trezo.com",
    image: "/images/sellers/seller8.png",
    lastSaleDate: "12 May 2024",
    itemStock: 150,
    walletBalance: "$9,000.00",
    revenue: "$6,000.00",
    store: "Willi Dav Store",
  },
  {
    id: 9,
    name: "Olivia Taylor",
    email: "olivia@trezo.com",
    image: "/images/sellers/seller9.png",
    lastSaleDate: "10 Apr 2024",
    itemStock: 75,
    walletBalance: "$7,500.50",
    revenue: "$4,500.50",
    store: "Donne Store",
  },
  {
    id: 10,
    name: "David Smith",
    email: "david@trezo.com",
    image: "/images/sellers/seller10.png",
    lastSaleDate: "03 Dec 2024",
    itemStock: 500,
    walletBalance: "$18,500.00",
    revenue: "$13,200.00",
    store: "RichMaster Store",
  },
  {
    id: 11,
    name: "Alice Johnson",
    email: "alice@trezo.com",
    image: "/images/sellers/seller11.png",
    lastSaleDate: "23 Mar 2024",
    itemStock: 50,
    walletBalance: "$6,300.50",
    revenue: "$4,000.50",
    store: "Dajon Store",
  },
  {
    id: 12,
    name: "Emily Brown",
    email: "emily@trezo.com",
    image: "/images/sellers/seller12.png",
    lastSaleDate: "20 Jan 2024",
    itemStock: 99,
    walletBalance: "$3,699.50",
    revenue: "$5,999.50",
    store: "Barbahall Store",
  },
  {
    id: 13,
    name: "Lucas Lyon",
    email: "lucas@trezo.com",
    image: "/images/sellers/seller5.png",
    lastSaleDate: "22 July 2024",
    itemStock: 350,
    walletBalance: "$15,250.50",
    revenue: "$10,200.50",
    store: "Velas Store",
  },
  {
    id: 14,
    name: "Morgan Sturges",
    email: "morgan@trezo.com",
    image: "/images/sellers/seller6.png",
    lastSaleDate: "10 Jun 2024",
    itemStock: 200,
    walletBalance: "$10,500.50",
    revenue: "$5,458.50",
    store: "Herna Store",
  },
  {
    id: 15,
    name: "Sophia McNeel",
    email: "sophia@trezo.com",
    image: "/images/sellers/seller7.png",
    lastSaleDate: "16 Feb 2024",
    itemStock: 80,
    walletBalance: "$2,580.00",
    revenue: "$1,500.00",
    store: "Dona Store",
  },
  {
    id: 16,
    name: "Rodriguez Meade",
    email: "rodriguez@trezo.com",
    image: "/images/sellers/seller8.png",
    lastSaleDate: "12 May 2024",
    itemStock: 150,
    walletBalance: "$9,000.00",
    revenue: "$6,000.00",
    store: "Willi Dav Store",
  },
];

const SellersContent = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  // Search State
  const [searchTerm, setSearchTerm] = useState("");

  // Filtered Sellers Data Based on Search
  const filteredSellers = sellers.filter(
    (seller) =>
      seller.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      seller.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      seller.store.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredSellers.length / itemsPerPage);

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const currentData = filteredSellers.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <>
      {/* Search and Add Button */}
      <Card
        sx={{
          boxShadow: "none",
          borderRadius: "7px",
          mb: "25px",
          padding: { xs: "18px", sm: "20px", lg: "25px" },
          display: { sm: "flex" },
          alignItems: "center",
          justifyContent: "space-between",
        }}
        className="rmui-card"
      >
        <Box>
          <Box
            component="form"
            className="t-search-form"
            sx={{
              width: { sm: "265px" },
            }}
          >
            <label>
              <i className="material-symbols-outlined">search</i>
            </label>
            <input
              type="text"
              className="t-input"
              placeholder="Search seller here....."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1); // Reset to first page on new search
              }}
            />
          </Box>
        </Box>

        <Box sx={{ mt: { xs: "10px", sm: "0" } }}>
          <Link to="/ecommerce/sellers/create/">
            <Button
              variant="outlined"
              sx={{
                textTransform: "capitalize",
                borderRadius: "7px",
                fontWeight: "500",
                fontSize: "13px",
                padding: "6px 13px",
              }}
              color="primary"
            >
              <i className="material-symbols-outlined">add</i> Add New Seller
            </Button>
          </Link>
        </Box>
      </Card>

      {/* Sellers Grid */}
      <Grid container columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}>
        {currentData.length > 0 ? (
          currentData.map((seller) => (
            <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 3 }} key={seller.id}>
              <Card
                sx={{
                  boxShadow: "none",
                  borderRadius: "7px",
                  padding: { xs: "18px", sm: "20px", lg: "25px" },
                  mb: "25px",
                }}
                className="rmui-card seller-card"
              >
                <Box
                  className="info d-flex align-items-center justify-content-between"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    mb: "15px",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: "15px",
                    }}
                  >
                    <Box>
                      <img
                        src={seller.image}
                        alt="seller-image"
                        style={{
                          width: "50px",
                          height: "50px",
                        }}
                      />
                    </Box>
                    <Box>
                      <Link to="/ecommerce/sellers/details">
                        <Typography
                          variant="h6"
                          fontSize="16px"
                          className="text-black"
                        >
                          {seller.name}
                        </Typography>
                      </Link>
                      <Typography fontSize="13px">{seller.email}</Typography>
                    </Box>
                  </Box>

                  <Box>
                    <IconButton
                      onClick={handleClick}
                      size="small"
                      aria-controls={open ? "account-menu" : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? "true" : undefined}
                    >
                      <MoreHorizIcon sx={{ fontSize: "25px" }} />
                    </IconButton>

                    <Menu
                      anchorEl={anchorEl}
                      id="account-menu"
                      open={open}
                      onClose={handleClose}
                      onClick={handleClose}
                      PaperProps={{
                        elevation: 0,
                        sx: {
                          overflow: "visible",
                          boxShadow: "0px 1px 7px #ddd",
                          mt: 0,
                        },
                      }}
                      transformOrigin={{ horizontal: "right", vertical: "top" }}
                      anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                    >
                      <MenuItem>View</MenuItem>
                      <MenuItem>Edit</MenuItem>
                      <MenuItem>Delete</MenuItem>
                    </Menu>
                  </Box>
                </Box>

                <Box>
                  <Box className="text-black" mt="10px">
                    <span className="text-body mr-5">Last Sale Date:</span>
                    {seller.lastSaleDate}
                  </Box>

                  <Box className="text-black" mt="10px">
                    <span className="text-body mr-5">Item Stock:</span>
                    {seller.itemStock}
                  </Box>

                  <Box className="text-black" mt="10px">
                    <span className="text-body mr-5">Wallet Balance:</span>
                    {seller.walletBalance}
                  </Box>

                  <Box className="text-black" mt="10px">
                    <span className="text-body mr-5">Revenue:</span>
                    {seller.revenue}
                  </Box>

                  <Box className="text-black" mt="10px">
                    <span className="text-body mr-5">Store:</span>
                    {seller.store}
                  </Box>
                </Box>
              </Card>
            </Grid>
          ))
        ) : (
          <Typography
            sx={{ textAlign: "center", width: "100%", mt: 2, color: "gray" }}
          >
            No results found for "{searchTerm}"
          </Typography>
        )}
      </Grid>

      {/* Pagination */}
      {filteredSellers.length > 0 && (
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
            Showing {(currentPage - 1) * itemsPerPage + 1}-
            {Math.min(currentPage * itemsPerPage, filteredSellers.length)} of{" "}
            {filteredSellers.length} results
          </Typography>

          <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
            <Button
              disabled={currentPage === 1}
              onClick={handlePreviousPage}
              sx={{
                minWidth: "auto",
                width: "30px",
                height: "30px",
                textAlign: "center",
                borderRadius: "4px",
              }}
              className="border"
            >
              <ChevronLeftIcon />
            </Button>

            {Array.from({ length: totalPages }, (_, index) => (
              <Button
                key={index}
                onClick={() => setCurrentPage(index + 1)}
                sx={{
                  bgcolor:
                    currentPage === index + 1 ? "primary.main" : "inherit",
                  color:
                    currentPage === index + 1 ? "white !important" : "text-body",
                  minWidth: "30px",
                  height: "30px",
                }}
                className="border"
              >
                {index + 1}
              </Button>
            ))}

            <Button
              disabled={currentPage === totalPages}
              onClick={handleNextPage}
              sx={{
                minWidth: "auto",
                width: "30px",
                height: "30px",
                textAlign: "center",
                borderRadius: "4px",
              }}
              className="border"
            >
              <ChevronRightIcon />
            </Button>
          </Box>
        </Box>
      )}
    </>
  );
};

export default SellersContent;
