"use client";

import React, { useState, useEffect } from "react";
import {
  Box,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Paper,
  Card,
  Button,
  Menu,
  MenuItem,
  Link,
} from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const ITEMS_PER_PAGE = 5;

const ActiveAuctions = () => {
  // Sample auction data
  const [auctions, setAuctions] = useState([
    {
      id: 1,
      name: "Christmas Eve",
      creator: "John Lira",
      openPrice: "11.75 ETH",
      yourOffer: "10.00 ETH",
      recentOffer: "10.00 ETH",
      timeLeft: 1000000,
      image: "/images/nfts/auction1.gif",
      userImage: "/images/users/user58.jpg",
      details: "/nft/details",
    },
    {
      id: 2,
      name: "Rotating Flower",
      creator: "WalterW.",
      openPrice: "9.25 ETH",
      yourOffer: "6.10 ETH",
      recentOffer: "7.15 ETH",
      timeLeft: 1010000,
      image: "/images/nfts/auction2.gif",
      userImage: "/images/users/user59.jpg",
      details: "/nft/details",
    },
    {
      id: 3,
      name: "Windows Art",
      creator: "Christino",
      openPrice: "17.24 ETH",
      yourOffer: "11.75 ETH",
      recentOffer: "14.11 ETH",
      timeLeft: 1020000,
      image: "/images/nfts/auction3.jpg",
      userImage: "/images/users/user60.jpg",
      details: "/nft/details",
    },
    {
      id: 4,
      name: "3D Logo",
      creator: "Hater",
      openPrice: "12.12 ETH",
      yourOffer: "10.24 ETH",
      recentOffer: "12.08 ETH",
      timeLeft: 1030000,
      image: "/images/nfts/auction4.jpg",
      userImage: "/images/users/user61.jpg",
      details: "/nft/details",
    },
    {
      id: 5,
      name: "Awesome Bird",
      creator: "Liveslong",
      openPrice: "8.15 ETH",
      yourOffer: "7.15 ETH",
      recentOffer: "8.08 ETH",
      timeLeft: 1040000,
      image: "/images/nfts/auction5.jpg",
      userImage: "/images/users/user62.jpg",
      details: "/nft/details",
    },
    {
      id: 6,
      name: "3D Logo",
      creator: "Hater",
      openPrice: "12.12 ETH",
      yourOffer: "10.24 ETH",
      recentOffer: "12.08 ETH",
      timeLeft: 1030000,
      image: "/images/nfts/auction4.jpg",
      userImage: "/images/users/user61.jpg",
      details: "/nft/details",
    },
    {
      id: 7,
      name: "Awesome Bird",
      creator: "Liveslong",
      openPrice: "8.15 ETH",
      yourOffer: "7.15 ETH",
      recentOffer: "8.08 ETH",
      timeLeft: 1040000,
      image: "/images/nfts/auction5.jpg",
      userImage: "/images/users/user62.jpg",
      details: "/nft/details",
    },
    {
      id: 8,
      name: "Christmas Eve",
      creator: "John Lira",
      openPrice: "11.75 ETH",
      yourOffer: "10.00 ETH",
      recentOffer: "10.00 ETH",
      timeLeft: 1000000,
      image: "/images/nfts/auction1.gif",
      userImage: "/images/users/user58.jpg",
      details: "/nft/details",
    },
    {
      id: 9,
      name: "Rotating Flower",
      creator: "WalterW.",
      openPrice: "9.25 ETH",
      yourOffer: "6.10 ETH",
      recentOffer: "7.15 ETH",
      timeLeft: 1010000,
      image: "/images/nfts/auction2.gif",
      userImage: "/images/users/user59.jpg",
      details: "/nft/details",
    },
    {
      id: 10,
      name: "Windows Art",
      creator: "Christino",
      openPrice: "17.24 ETH",
      yourOffer: "11.75 ETH",
      recentOffer: "14.11 ETH",
      timeLeft: 1020000,
      image: "/images/nfts/auction3.jpg",
      userImage: "/images/users/user60.jpg",
      details: "/nft/details",
    },
  ]);

  // State for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(auctions.length / ITEMS_PER_PAGE);

  // Handle pagination changes
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  // Dropdown
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // Countdown logic
  useEffect(() => {
    const interval = setInterval(() => {
      setAuctions((prevAuctions) =>
        prevAuctions.map((auction) =>
          auction.timeLeft > 0
            ? { ...auction, timeLeft: auction.timeLeft - 1 }
            : auction
        )
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Format time helper
  const formatTime = (seconds) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h > 0 ? `${h}h ` : ""}${m}m ${s}s`;
  };

  // Slice the data for the current page
  const paginatedData = auctions.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

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
            Active Auctions
          </Typography>

          <Box>
            <IconButton
              onClick={handleClick}
              size="small"
              aria-controls={open ? "account-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              sx={{
                borderRadius: "0.375rem",
                fontSize: "14px",
                p: "8px 19.5px",
                display: "flex",
                alignItems: "center",
                gap: "5px",
              }}
              className="bg-eceef2"
            >
              Monthly <KeyboardArrowDownIcon sx={{ fontSize: "20px" }} />
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
                  boxShadow: "0 4px 45px #0000001a",
                  mt: 0,
                  width: "160px",
                },
              }}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
              <MenuItem>Weekly</MenuItem>
              <MenuItem>Monthly</MenuItem>
              <MenuItem>Yearly</MenuItem>
            </Menu>
          </Box>
        </Box>

        {/* Table */}
        <TableContainer
          component={Paper}
          sx={{
            boxShadow: "none",
            borderRadius: "0",
          }}
          className="rmui-table table-th-td-lcpx-0"
        >
          <Table sx={{ minWidth: 800 }}>
            <TableHead>
              <TableRow
                sx={{
                  th: {
                    textTransform: "uppercase",
                    fontSize: "10px",
                    fontWeight: "bold",
                    letterSpacing: "1px",
                    pt: "0",
                    pb: "15px",
                    px: "20px",
                    lineHeight: "1",
                  },
                }}
              >
                <TableCell className="border-bottom">Item</TableCell>
                <TableCell className="border-bottom">Open Price</TableCell>
                <TableCell className="border-bottom">Your Offer</TableCell>
                <TableCell className="border-bottom">Recent Offer</TableCell>
                <TableCell className="border-bottom">Time Left</TableCell>
                <TableCell className="border-bottom text-end">View</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {paginatedData.map((auction) => (
                <TableRow
                  sx={{
                    td: {
                      py: "10px",
                      px: "20px",
                    },
                  }}
                  key={auction.id}
                >
                  <TableCell className="border-bottom">
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                      }}
                    >
                      <img
                        src={auction.image}
                        alt={auction.name}
                        width={50}
                        height={50}
                        style={{ borderRadius: "6px" }}
                      />
                      <Box>
                        <Typography sx={{ fontWeight: "600" }}>
                          {auction.name}
                        </Typography>
                        <Typography sx={{ fontSize: "12px" }}>
                          by {auction.creator}
                        </Typography>
                      </Box>
                    </Box>
                  </TableCell>

                  <TableCell
                    className="border-bottom text-black"
                    sx={{ fontSize: "12px", fontWeight: "600" }}
                  >
                    {auction.openPrice}
                  </TableCell>

                  <TableCell
                    className="border-bottom text-black"
                    sx={{ fontSize: "12px", fontWeight: "600" }}
                  >
                    {auction.yourOffer}
                  </TableCell>

                  <TableCell className="border-bottom">
                    <Box
                      sx={{ display: "flex", alignItems: "center", gap: "5px" }}
                    >
                      <img
                        src={auction.userImage}
                        alt="user"
                        width={22}
                        height={22}
                        style={{ borderRadius: "100%" }}
                      />
                      <Typography
                        className="text-black"
                        sx={{ fontWeight: "600", fontSize: "12px" }}
                      >
                        {auction.recentOffer}
                      </Typography>
                    </Box>
                  </TableCell>

                  <TableCell
                    className="border-bottom text-black"
                    sx={{ fontWeight: "600", fontSize: "12px" }}
                  >
                    {formatTime(auction.timeLeft)}
                  </TableCell>

                  <TableCell className="border-bottom text-end">
                    <Link
                      href={auction.details}
                      sx={{
                        width: "30px",
                        height: "30px",
                        borderRadius: "50%",
                        bgcolor: "grey.100",
                        color: "grey.400",
                        textAlign: "center",
                        fontSize: "18px",
                        transition: "all 0.3s",
                        padding: "0",
                        display: "inline-block",
                        lineHeight: "30px",

                        "&:hover": {
                          bgcolor: "primary.main",
                          color: "white !important",
                        },
                      }}
                    >
                      <i className="ri-arrow-right-line"></i>
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        {/* Pagination */}
        <Box
          sx={{
            pt: "10px",
            display: { sm: "flex" },
            alignItems: { sm: "center" },
            justifyContent: "space-between",
          }}
        >
          <Typography sx={{ fontSize: "13px" }}>
            Showing {paginatedData.length} of {auctions.length} results
          </Typography>

          <Box
            sx={{
              mt: { xs: "10px", sm: "0" },
              display: "flex",
              alignItems: "center",
              gap: "5px",
            }}
          >
            <Button
              disabled={currentPage === 1}
              onClick={() => handlePageChange(currentPage - 1)}
              className="border text-black"
              sx={{
                minWidth: "auto",
                width: "30px",
                height: "30px",
                lineHeight: "30px",
                padding: "0",
                textAlign: "center",
                borderRadius: "4px",
                "&:hover": {
                  backgroundColor: "primary.main",
                  color: "#fff !important",
                },
              }}
            >
              <ChevronLeftIcon />
            </Button>

            {Array.from({ length: totalPages }).map((_, idx) => (
              <Button
                key={idx}
                onClick={() => handlePageChange(idx + 1)}
                className="border"
                sx={{
                  minWidth: "30px",
                  height: "30px",
                  bgcolor:
                    idx + 1 === currentPage ? "primary.main" : "transparent",
                  color:
                    idx + 1 === currentPage
                      ? "white !important"
                      : "text.primary",
                  "&:hover": {
                    bgcolor: "primary.main",
                    color: "white !important",
                  },
                }}
              >
                {idx + 1}
              </Button>
            ))}

            <Button
              disabled={currentPage === totalPages}
              onClick={() => handlePageChange(currentPage + 1)}
              className="border text-black"
              sx={{
                minWidth: "auto",
                width: "30px",
                height: "30px",
                lineHeight: "30px",
                padding: "0",
                textAlign: "center",
                borderRadius: "4px",
                "&:hover": {
                  backgroundColor: "primary.main",
                  color: "#fff !important",
                },
              }}
            >
              <ChevronRightIcon />
            </Button>
          </Box>
        </Box>
      </Card>
    </>
  );
};

export default ActiveAuctions;
