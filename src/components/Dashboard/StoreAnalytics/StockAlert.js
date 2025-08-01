"use client";

import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Card,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
  Button,
  TableHead,
  Menu,
  MenuItem,
  IconButton,
} from "@mui/material"; 
import { MoreVert } from "@mui/icons-material";

const StockAlert = () => {
  // Dropdown
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // Table
  const [stocks, setStocks] = useState([]);
  const [loading, setLoading] = useState(true);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    // Simulate an API call to fetch recent stocks data
    setTimeout(() => {
      const data = [
        {
          code: "#3421",
          name: "ZenX Laptop",
          image: "/images/store-analytics/product-1.png",
          store: "Store 01",
          quantity: 5,
          alertQuantity: 10,
        },
        {
          code: "#3429",
          name: "Macbook Pro",
          image: "/images/store-analytics/product-2.png",
          store: "Store 02",
          quantity: 3,
          alertQuantity: 15,
        },
        {
          code: "#3430",
          name: "Gaming Mouse",
          image: "/images/store-analytics/product-3.png",
          store: "Store 03",
          quantity: 8,
          alertQuantity: 20,
        },
        {
          code: "#3431",
          name: "Wireless Keyboard",
          image: "/images/store-analytics/product-4.png",
          store: "Store 01",
          quantity: 2,
          alertQuantity: 5,
        },
        {
          code: "#3432",
          name: "USB-C Hub",
          image: "/images/store-analytics/product-5.png",
          store: "Store 02",
          quantity: 10,
          alertQuantity: 25,
        },
        {
          code: "#3433",
          name: "Monitor Stand",
          image: "/images/store-analytics/product-6.png",
          store: "Store 04",
          quantity: 1,
          alertQuantity: 5,
        },
        {
          code: "#3434",
          name: "External Hard Drive",
          image: "/images/store-analytics/product-7.png",
          store: "Store 03",
          quantity: 7,
          alertQuantity: 10,
        },
        {
          code: "#3435",
          name: "Webcam",
          image: "/images/store-analytics/product-8.png",
          store: "Store 01",
          quantity: 4,
          alertQuantity: 8,
        },
        {
          code: "#3436",
          name: "Laptop Stand",
          image: "/images/store-analytics/product-9.png",
          store: "Store 02",
          quantity: 6,
          alertQuantity: 12,
        },
        {
          code: "#3437",
          name: "Mechanical Keyboard",
          image: "/images/store-analytics/product-10.png",
          store: "Store 04",
          quantity: 3,
          alertQuantity: 6,
        },
      ];

      setStocks(data);
      setLoading(false);
    }, 1000);
  }, []);

  // Pagination logic
  const totalPages = Math.ceil(stocks.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentStocks = stocks.slice(indexOfFirstItem, indexOfLastItem);

  const goToPage = (pageNumber) => setCurrentPage(pageNumber);
  const goToPrevPage = () =>
    currentPage > 1 && setCurrentPage((prev) => prev - 1);
  const goToNextPage = () =>
    currentPage < totalPages && setCurrentPage((prev) => prev + 1);

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
            flexWrap: "wrap",
            gap: "15px",
            mb: "10px",
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
            Stock Alert
          </Typography>
        </Box>

        {loading ? (
          <Typography>Loading...</Typography>
        ) : (
          <TableContainer
            component={Paper}
            sx={{
              boxShadow: "none",
              borderRadius: "0",
            }}
            className="rmui-table"
          >
            <Table sx={{ minWidth: 850 }}>
              <TableHead>
                <TableRow
                  className="border-bottom"
                  sx={{
                    "& th": {
                      fontSize: "10px",
                      fontWeight: 700,
                      color: "#8695aa",
                      padding: "15px 8px",
                    },
                  }}
                >
                  <th className="text-start">CODE</th>

                  <th className="text-start">PRODUCT</th>

                  <th className="text-center">STORE</th>

                  <th className="text-start text-center">QUANTITY</th>

                  <th className="text-start text-center">ALERT QUANTITY</th>

                  <th className="text-end">ACTION</th>
                </TableRow>
              </TableHead>

              <TableBody>
                {(currentStocks.length ? currentStocks : stocks).map(
                  (stock, index) => (
                    <TableRow
                      key={index}
                      sx={{
                        "& td": {
                          padding: "11px 8px",
                          fontSize: { xs: "11px", md: "12px" },
                          fontWeight: 600,
                        },
                      }}
                    >
                      <TableCell className="border-bottom text-black">
                        {stock.code}
                      </TableCell>

                      <TableCell className="border-bottom">
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                          }}
                        >
                          <img
                            src={stock.image} 
                            alt={stock.name}
                            width={30}
                            height={30}
                            style={{
                              borderRadius: "5px",
                            }}
                          />

                          <Box>
                            <Typography
                              variant="h3"
                              sx={{
                                fontSize: { xs: "13px", md: "14px" },
                                fontWeight: 600,
                                mb: 0,
                              }}
                            >
                              {stock.name}
                            </Typography>
                          </Box>
                        </Box>
                      </TableCell>

                      <TableCell className="border-bottom text-black text-center">
                        {stock.store}
                      </TableCell>

                      <TableCell className="border-bottom text-black text-center">
                        {stock.quantity}
                      </TableCell>

                      <TableCell className="border-bottom text-center">
                        <Box
                          sx={{
                            bgcolor: "#fd58121a",
                            color: "error.500",
                            border: "1px solid",
                            borderColor: "error.500",
                            padding: "3px 8px",
                            borderRadius: "30px",
                            fontSize: "12px",
                            fontWeight: "500",
                            display: "inline-block",
                            lineHeight: 1,
                          }}
                        >
                          {stock.alertQuantity}
                        </Box>
                      </TableCell>

                      <TableCell className="border-bottom text-black text-end">
                        <Box className="text-end">
                          <IconButton
                            onClick={handleClick}
                            size="small"
                            aria-controls={open ? "account-menu" : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? "true" : undefined}
                            sx={{ padding: "0" }}
                          >
                            <MoreVert sx={{ fontSize: "25px" }} />
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
                                boxShadow: "none",
                                mt: 0,
                                border: "1px solid #eee",

                                "& .MuiAvatar-root": {
                                  width: 32,
                                  height: 32,
                                  ml: -0.5,
                                  mr: 1,
                                },
                              },
                            }}
                            transformOrigin={{
                              horizontal: "right",
                              vertical: "top",
                            }}
                            anchorOrigin={{
                              horizontal: "right",
                              vertical: "bottom",
                            }}
                          >
                            <MenuItem sx={{ gap: "5px", fontSize: "13px" }}>
                              <i
                                className="material-symbols-outlined"
                                style={{ fontSize: "17px" }}
                              >
                                edit
                              </i>
                              Edit
                            </MenuItem>

                            <MenuItem sx={{ gap: "5px", fontSize: "13px" }}>
                              <i
                                className="material-symbols-outlined"
                                style={{ fontSize: "17px" }}
                              >
                                visibility
                              </i>
                              View
                            </MenuItem>

                            <MenuItem sx={{ gap: "5px", fontSize: "13px" }}>
                              <i
                                className="material-symbols-outlined"
                                style={{ fontSize: "17px" }}
                              >
                                delete
                              </i>
                              Delete
                            </MenuItem>
                          </Menu>
                        </Box>
                      </TableCell>
                    </TableRow>
                  )
                )}
              </TableBody>
            </Table>

            {/* Render pagination only if there are more than itemsPerPage entries */}
            {stocks.length > itemsPerPage && (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",

                  gap: "15px",
                  mt: "15px",
                }}
              >
                <Typography fontSize={"12px"} fontWeight={500} mb={"0"}>
                  Showing {currentStocks.length} of {stocks.length} Results
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                  }}
                >
                  <Button
                    className={`border text-body ${
                      currentPage === 1 ? "disabled" : ""
                    }`}
                    onClick={goToPrevPage}
                    disabled={currentPage === 1}
                    sx={{
                      minWidth: "auto",
                      padding: "0",
                      width: { xs: "28px", md: "34px" },
                      height: { xs: "28px", md: "34px" },
                    }}
                  >
                    <i className="material-symbols-outlined">
                      keyboard_arrow_left
                    </i>
                  </Button>

                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                    (page) => (
                      <Button
                        key={page}
                        className={`border ${
                          currentPage === page ? "bg-primary text-white" : ""
                        }`}
                        onClick={() => goToPage(page)}
                        sx={{
                          minWidth: "auto",
                          padding: "0",
                          width: { xs: "28px", md: "34px" },
                          height: { xs: "28px", md: "34px" },
                        }}
                      >
                        {page}
                      </Button>
                    )
                  )}

                  <Button
                    className={`border text-body ${
                      currentPage === totalPages ? "disabled" : ""
                    }`}
                    onClick={goToNextPage}
                    disabled={currentPage === totalPages}
                    sx={{
                      minWidth: "auto",
                      padding: "0",
                      width: { xs: "28px", md: "34px" },
                      height: { xs: "28px", md: "34px" },
                    }}
                  >
                    <i className="material-symbols-outlined">
                      keyboard_arrow_right
                    </i>
                  </Button>
                </Box>
              </Box>
            )}
          </TableContainer>
        )}
      </Card>
    </>
  );
};

export default StockAlert;
