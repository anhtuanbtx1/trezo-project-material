"use client";

import React, { useState } from "react";
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
  MenuItem
} from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import StarOutlineIcon from "@mui/icons-material/StarBorder";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const data = [
  {
    image: "/images/users/user58.jpg",
    name: "Johhna Loren",
    location: "Queensland",
    deliveries: 6240,
    earnings: "624 ETH",
    rating: 5.0,
    detailsLink: "/nft/details",
  },
  {
    image: "/images/users/user53.jpg",
    name: "Skyler White",
    location: "Neverdies",
    deliveries: 5135,
    earnings: "597 ETH",
    rating: 4.5,
    detailsLink: "/nft/details",
  },
  {
    image: "/images/users/user37.jpg",
    name: "Jonathon Watson",
    location: "Emoticons",
    deliveries: 4321,
    earnings: "413 ETH",
    rating: 4.0,
    detailsLink: "/nft/details",
  },
  {
    image: "/images/users/user36.jpg",
    name: "Walter White",
    location: "Puzzleworld",
    deliveries: 3124,
    earnings: "321 ETH",
    rating: 3.5,
    detailsLink: "/nft/details",
  },
  {
    image: "/images/users/user30.jpg",
    name: "David Carlen",
    location: "Liveslong",
    deliveries: 2137,
    earnings: "246 ETH",
    rating: 5.0,
    detailsLink: "/nft/details",
  },
  {
    image: "/images/users/user59.jpg",
    name: "James Loren",
    location: "Queensland",
    deliveries: 240,
    earnings: "524 ETH",
    rating: 5.0,
    detailsLink: "/nft/details",
  },
  {
    image: "/images/users/user60.jpg",
    name: "Damian Daniel",
    location: "Neverdies",
    deliveries: 4135,
    earnings: "455 ETH",
    rating: 4.5,
    detailsLink: "/nft/details",
  },
  {
    image: "/images/users/user61.jpg",
    name: "Elizabeth Ava",
    location: "Emoticons",
    deliveries: 2321,
    earnings: "313 ETH",
    rating: 4.0,
    detailsLink: "/nft/details",
  },
  {
    image: "/images/users/user62.jpg",
    name: "Sophie White",
    location: "Puzzleworld",
    deliveries: 2124,
    earnings: "221 ETH",
    rating: 3.5,
    detailsLink: "/nft/details",
  },
  {
    image: "/images/users/user63.jpg",
    name: "Wilson Thomas",
    location: "Liveslong",
    deliveries: 1137,
    earnings: "146 ETH",
    rating: 5.0,
    detailsLink: "/nft/details",
  },
];

const ITEMS_PER_PAGE = 5;

const MostPopularSellers = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const open = Boolean(anchorEl);
  const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const renderRating = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
      <Box display="flex" alignItems="center">
        {Array.from({ length: fullStars }).map((_, idx) => (
          <StarIcon key={`full-${idx}`} sx={{ color: "#fd5812", fontSize: "16px" }} />
        ))}
        {halfStar && <StarHalfIcon sx={{ color: "#fd5812", fontSize: "16px" }} />}
        {Array.from({ length: emptyStars }).map((_, idx) => (
          <StarOutlineIcon key={`empty-${idx}`} sx={{ color: "#fd5812", fontSize: "16px" }} />
        ))}
        <Typography variant="body2" sx={{ ml: 1 }}>
          {rating.toFixed(1)}
        </Typography>
      </Box>
    );
  };

  const paginatedData = data.slice(
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
            Most Popular Sellers
          </Typography>

          <Box>
            <IconButton
              onClick={handleClick}
              size="small"
              aria-controls={open ? "account-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              sx={{
                borderRadius: '0.375rem',
                fontSize: '14px',
                p: '8px 19.5px',
                display: 'flex',
                alignItems: 'center',
                gap: '5px'
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
                  width: '160px',

                  "& .MuiAvatar-root": {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
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
          <Table sx={{ minWidth: 650 }}>
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
                <TableCell className="border-bottom">Sellers</TableCell>

                <TableCell className="border-bottom">Deliveries</TableCell>

                <TableCell className="border-bottom">Earnings</TableCell>

                <TableCell className="border-bottom">Ratings</TableCell>

                <TableCell className="border-bottom text-end">
                  View
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {paginatedData.map((seller) => (
                <TableRow
                  key={seller.name}
                  sx={{
                    td: {
                      py: "10px",
                      px: "20px",
                    },
                  }}
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
                        src={seller.image}
                        alt={seller.name}
                        width={40}
                        height={40}
                        style={{ borderRadius: "100%" }}
                      />
                      <Box>
                        <Typography
                          component="h5"
                          sx={{ fontWeight: "600", display: "inline-block" }}
                        >
                          {seller.name}
                        </Typography>
                        <Typography
                          component="span"
                          sx={{ fontSize: "12px", display: "block" }}
                        >
                          {seller.location}
                        </Typography>
                      </Box>
                    </Box>
                  </TableCell>

                  <TableCell className="border-bottom text-black">
                    <Typography
                      component="span"
                      sx={{
                        display: "block",
                        fontWeight: "600",
                        fontSize: "12px",
                      }}
                    >
                      {seller.deliveries}
                    </Typography>
                  </TableCell>

                  <TableCell className="border-bottom text-black">
                    <Typography
                      component="span"
                      sx={{
                        display: "block",
                        fontWeight: "600",
                        fontSize: "12px",
                      }}
                    >
                      {seller.earnings}
                    </Typography>
                  </TableCell>

                  <TableCell className="border-bottom">
                    {renderRating(seller.rating)}
                  </TableCell>

                  <TableCell
                    className="border-bottom text-end" 
                  >
                    <IconButton
                      href={seller.detailsLink}
                      sx={{
                        width: "30px",
                        height: "30px",
                        borderRadius: "50%",
                        bgcolor: "grey.100",
                        color: "grey.400",
                        textAlign: "center",
                        lineHeight: "30px",
                        fontSize: "18px",
                        transition: "all 0.3s",
                        padding: "0",

                        "&:hover": { bgcolor: "primary.main", color: "white !important" },
                      }}
                    >
                      <i className="ri-arrow-right-line"></i>
                    </IconButton>
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
          <Typography sx={{ fontSize: "12px" }}>
            Showing {paginatedData.length} of {data.length} results
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
                  color: idx + 1 === currentPage ? "white !important" : "text.primary",
                  "&:hover": { bgcolor: "primary.main", color: "white !important" },
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

export default MostPopularSellers;
