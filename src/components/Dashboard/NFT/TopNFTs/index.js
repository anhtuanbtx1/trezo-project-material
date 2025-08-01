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
  Menu,
  MenuItem,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const sellersData = [
  {
    image: "/images/nfts/top1.gif",
    name: "Sky Bird",
    username: "@queensland",
    volume: 6240,
    flowPrice: "24 ETH",
    status: "+5.4%",
    statusType: "positive",
  },
  {
    image: "/images/nfts/top2.gif",
    name: "Walking Brain",
    username: "@neverdies",
    volume: 5135,
    flowPrice: "597 ETH",
    status: "-3.2%",
    statusType: "negative",
  },
  {
    image: "/images/nfts/top3.gif",
    name: "Golden Ape",
    username: "@jungleking",
    volume: 7900,
    flowPrice: "800 ETH",
    status: "+10.7%",
    statusType: "positive",
  },
  {
    image: "/images/nfts/top4.gif",
    name: "Living Robot",
    username: "@puzzleworld",
    volume: 3124,
    flowPrice: "321 ETH",
    status: "-15%",
    statusType: "negative",
  },
  {
    image: "/images/nfts/top5.gif",
    name: "Thumbs Up",
    username: "@liveslong",
    volume: 2137,
    flowPrice: "246 ETH",
    status: "+5.4%",
    statusType: "positive",
  },
];

const TopNFTs = () => {
  // Dropdown
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
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
            Top NFTs
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
          <Table sx={{ minWidth: 500 }}>
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
                <TableCell className="border-bottom">Volume</TableCell>
                <TableCell className="border-bottom">Flow Price</TableCell>
                <TableCell className="border-bottom text-end">Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {sellersData.map((seller, index) => (
                <TableRow
                  key={index}
                  sx={{
                    td: {
                      py: "10px",
                      px: "20px",
                    },
                  }}
                  className="tlc-td-bp-none"
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
                          {seller.username}
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
                      {seller.volume}
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
                      {seller.flowPrice}
                    </Typography>
                  </TableCell>
                  <TableCell className="border-bottom text-end">
                    <Box
                      sx={{
                        display: "inline-block",
                        fontSize: "12px",
                        px: "9px",
                        color:
                          seller.statusType === "positive"
                            ? "success.700"
                            : "error.700",
                        border: "1px solid",
                        borderColor:
                          seller.statusType === "positive"
                            ? "success.300"
                            : "error.300",
                        bgcolor:
                          seller.statusType === "positive"
                            ? "success.100"
                            : "error.100",
                        borderRadius: "100px",
                      }}
                    >
                      {seller.status}
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    </>
  );
};

export default TopNFTs;
