"use client";

import React, { useState } from "react";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
  Paper,
  Button,
} from "@mui/material";

const Nfts = [
  {
    id: "0",
    image: "/images/nfts/auction1.gif",
    name: "Christmas Eve",
    username: "John Lira",
    openPrice: "11.75 ETH",
    yourOffer: "10.00 ETH",
    time: "30 mins ago",
  },
  {
    id: "1",
    image: "/images/nfts/auction2.gif",
    name: "WalterW.",
    username: "John Lira",
    openPrice: "9.25 ETH",
    yourOffer: "6.10 ETH",
    time: "1 hr ago",
  },
  {
    id: "2",
    image: "/images/nfts/auction3.jpg",
    name: "Windows Art",
    username: "Christino",
    openPrice: "17.24 ETH",
    yourOffer: "11.75 ETH",
    time: "1.30 hr ago",
  },
  {
    id: "3",
    image: "/images/nfts/auction4.jpg",
    name: "3D Logo",
    username: "Hater",
    openPrice: "12.12 ETH",
    yourOffer: "10.24 ETH",
    time: "35 mins ago",
  },
  {
    id: "4",
    image: "/images/nfts/auction5.jpg",
    name: "Awesome Bird",
    username: "Liveslong",
    openPrice: "8.15 ETH",
    yourOffer: "7.15 ETH",
    time: "2 hrs ago",
  },
  {
    id: "5",
    image: "/images/nfts/auction3.jpg",
    name: "Virtual Space",
    username: "Alice",
    openPrice: "15.00 ETH",
    yourOffer: "12.00 ETH",
    time: "3 hrs ago",
  },
  {
    id: "6",
    image: "/images/nfts/auction4.jpg",
    name: "Galaxy Art",
    username: "Bob",
    openPrice: "10.75 ETH",
    yourOffer: "8.50 ETH",
    time: "4 hrs ago",
  },
];

const ITEMS_PER_PAGE = 4; // Items displayed per page

const Sold = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(Nfts.length / ITEMS_PER_PAGE);

  const displayedNfts = Nfts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <>
      <TableContainer
        component={Paper}
        sx={{
          boxShadow: "none",
          borderRadius: "0",
        }}
        className="rmui-table table-th-td-lcpx-0"
      >
        <Table sx={{ minWidth: 500 }}>
          <TableBody>
            {displayedNfts.map((nft, index) => (
              <TableRow
                key={index}
                sx={{
                  td: {
                    py: "10px",
                    px: "20px",
                  },
                }}
                className="tlc-td-bp-none border-top"
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
                      src={nft.image}
                      alt={nft.name}
                      width={50}
                      height={50}
                      style={{ borderRadius: "5px" }}
                    />
                    <Box>
                      <Typography
                        component="h5"
                        sx={{ fontWeight: "600", display: "inline-block" }}
                      >
                        {nft.name}
                      </Typography>
                      <Typography
                        component="span"
                        sx={{ fontSize: "12px", display: "block" }}
                      >
                        by {nft.username}
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
                    {nft.openPrice}
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
                    {nft.yourOffer}
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
                    {nft.time}
                  </Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Box
        sx={{
          mt: "20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography sx={{ fontSize: "12px" }}>
          Showing {displayedNfts.length} of {Nfts.length} Results
        </Typography>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "5px",
          }}
        >
          <Button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="border"
            sx={{
              p: "0",
              minWidth: "auto",
              width: "30px",
              height: "30px",
            }}
          >
            <i className="material-symbols-outlined">chevron_left</i>
          </Button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <Button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`border ${
                page === currentPage ? "bg-primary text-white" : "text-body"
              }`}
              sx={{
                p: "0",
                minWidth: "auto",
                width: "30px",
                height: "30px",
              }}
            >
              {page}
            </Button>
          ))}

          <Button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="border"
            sx={{
              p: "0",
              minWidth: "auto",
              width: "30px",
              height: "30px",
            }}
          >
            <i className="material-symbols-outlined">chevron_right</i>
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Sold;
