"use client";

import React from "react"; 
import {
  Grid,
  Card,
  Box,
  Typography,
  FormControl,
  TextField,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
  TableHead,
} from "@mui/material";
import { Link } from "react-router-dom";
import QuantityCounter from "./QuantityCounter";

const CartTable = () => {
  return (
    <>
      <Grid container columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}>
        <Grid size={{ xs: 12, sm: 12, md: 6, lg: 12, xl: 8 }}>
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
                Your Order
              </Typography>

              <Typography
                variant="h3"
                sx={{
                  fontSize: { xs: "16px", md: "18px" },
                  fontWeight: 700,
                }}
                className="text-black"
              >
                Customer ID : 357951
              </Typography>
            </Box>

            {/* Table */}
            <TableContainer
              component={Paper}
              sx={{
                boxShadow: "none",
                borderRadius: "7px",
              }}
              className="rmui-table border"
            >
              <Table sx={{ minWidth: 700 }} aria-label="Table">
                <TableHead className="bg-f6f7f9">
                  <TableRow>
                    <TableCell
                      sx={{
                        fontWeight: "500",
                        padding: "10px 20px",
                        fontSize: "14px",
                      }}
                      className="text-black border-bottom"
                    >
                      Order ID
                    </TableCell>

                    <TableCell
                      sx={{
                        fontWeight: "500",
                        padding: "10px 20px",
                        fontSize: "14px",
                      }}
                      className="text-black border-bottom"
                    >
                      Product
                    </TableCell>

                    <TableCell
                      sx={{
                        fontWeight: "500",
                        padding: "10px 20px",
                        fontSize: "14px",
                      }}
                      className="text-black border-bottom"
                    >
                      Quantity
                    </TableCell>

                    <TableCell
                      sx={{
                        fontWeight: "500",
                        padding: "10px 20px",
                        fontSize: "14px",
                      }}
                      className="text-black border-bottom"
                    >
                      Price
                    </TableCell>

                    <TableCell
                      sx={{
                        fontWeight: "500",
                        padding: "10px 20px",
                        fontSize: "14px",
                      }}
                      className="text-black border-bottom"
                    >
                      Total
                    </TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  <TableRow>
                    <TableCell
                      sx={{
                        padding: "14px 20px",
                        fontSize: "14px",
                      }}
                      className="text-black border-bottom"
                    >
                      #JAN-1323
                    </TableCell>

                    <TableCell
                      sx={{
                        padding: "14px 20px",
                        fontSize: "14px",
                      }}
                      className="text-black border-bottom"
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: "12px",
                        }}
                      >
                        <Box sx={{ flexShrink: "0" }}>
                          <img
                            src="/images/products/product2.jpg"
                            alt="Product"
                            width={40}
                            height={40}
                            style={{ borderRadius: "7px" }}
                          />
                        </Box>

                        <Box>
                          <Link
                            to="/ecommerce/products-list/details/"
                            style={{
                              fontSize: "15px",
                              fontWeight: "500",
                              display: "inline-block",
                              textDecoration: "none",
                            }}
                            className="text-black hover-text-color"
                          >
                            Headphone
                          </Link>
                        </Box>
                      </Box>
                    </TableCell>

                    <TableCell
                      sx={{
                        padding: "14px 20px",
                        fontSize: "14px",
                      }}
                      className="text-black border-bottom"
                    >
                      <QuantityCounter />
                    </TableCell>

                    <TableCell
                      sx={{
                        padding: "14px 20px",
                        fontSize: "14px",
                      }}
                      className="border-bottom"
                    >
                      $150.00
                    </TableCell>

                    <TableCell
                      sx={{
                        padding: "14px 20px",
                        fontSize: "14px",
                      }}
                      className="border-bottom"
                    >
                      $450.00
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell
                      sx={{
                        padding: "14px 20px",
                        fontSize: "14px",
                      }}
                      className="text-black border-bottom"
                    >
                      #DEC-1234
                    </TableCell>

                    <TableCell
                      sx={{
                        padding: "14px 20px",
                        fontSize: "14px",
                      }}
                      className="text-black border-bottom"
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: "12px",
                        }}
                      >
                        <Box sx={{ flexShrink: "0" }}>
                          <img
                            src="/images/products/product3.jpg"
                            alt="Product"
                            width={40}
                            height={40}
                            style={{ borderRadius: "7px" }}
                          />
                        </Box>

                        <Box>
                          <Link
                            to="/ecommerce/products-list/details/"
                            style={{
                              fontSize: "15px",
                              fontWeight: "500",
                              display: "inline-block",
                              textDecoration: "none",
                            }}
                            className="text-black hover-text-color"
                          >
                            iPhone 15 Plus
                          </Link>
                        </Box>
                      </Box>
                    </TableCell>

                    <TableCell
                      sx={{
                        padding: "14px 20px",
                        fontSize: "14px",
                      }}
                      className="text-black border-bottom"
                    >
                      <QuantityCounter />
                    </TableCell>

                    <TableCell
                      sx={{
                        padding: "14px 20px",
                        fontSize: "14px",
                      }}
                      className="border-bottom"
                    >
                      $750.00
                    </TableCell>

                    <TableCell
                      sx={{
                        padding: "14px 20px",
                        fontSize: "14px",
                      }}
                      className="border-bottom"
                    >
                      $750.00
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell
                      sx={{
                        padding: "14px 20px",
                        fontSize: "14px",
                      }}
                      className="text-black border-bottom"
                    >
                      #DEC-3567
                    </TableCell>

                    <TableCell
                      sx={{
                        padding: "14px 20px",
                        fontSize: "14px",
                      }}
                      className="text-black border-bottom"
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: "12px",
                        }}
                      >
                        <Box sx={{ flexShrink: "0" }}>
                          <img
                            src="/images/products/product4.jpg"
                            alt="Product"
                            width={40}
                            height={40}
                            style={{ borderRadius: "7px" }}
                          />
                        </Box>

                        <Box>
                          <Link
                            to="/ecommerce/products-list/details/"
                            style={{
                              fontSize: "15px",
                              fontWeight: "500",
                              display: "inline-block",
                              textDecoration: "none",
                            }}
                            className="text-black hover-text-color"
                          >
                            Bluetooth Speaker
                          </Link>
                        </Box>
                      </Box>
                    </TableCell>

                    <TableCell
                      sx={{
                        padding: "14px 20px",
                        fontSize: "14px",
                      }}
                      className="text-black border-bottom"
                    >
                      <QuantityCounter />
                    </TableCell>

                    <TableCell
                      sx={{
                        padding: "14px 20px",
                        fontSize: "14px",
                      }}
                      className="border-bottom"
                    >
                      $15.00
                    </TableCell>

                    <TableCell
                      sx={{
                        padding: "14px 20px",
                        fontSize: "14px",
                      }}
                      className="border-bottom"
                    >
                      $75.00
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell
                      sx={{
                        padding: "14px 20px",
                        fontSize: "14px",
                      }}
                      className="text-black border-bottom"
                    >
                      #DEC-1098
                    </TableCell>

                    <TableCell
                      sx={{
                        padding: "14px 20px",
                        fontSize: "14px",
                      }}
                      className="text-black border-bottom"
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: "12px",
                        }}
                      >
                        <Box sx={{ flexShrink: "0" }}>
                          <img
                            src="/images/products/product5.jpg"
                            alt="Product"
                            width={40}
                            height={40}
                            style={{ borderRadius: "7px" }}
                          />
                        </Box>

                        <Box>
                          <Link
                            to="/ecommerce/products-list/details/"
                            style={{
                              fontSize: "15px",
                              fontWeight: "500",
                              display: "inline-block",
                              textDecoration: "none",
                            }}
                            className="text-black hover-text-color"
                          >
                            Airbuds 2nd Gen
                          </Link>
                        </Box>
                      </Box>
                    </TableCell>

                    <TableCell
                      sx={{
                        padding: "14px 20px",
                        fontSize: "14px",
                      }}
                      className="text-black border-bottom"
                    >
                      <QuantityCounter />
                    </TableCell>

                    <TableCell
                      sx={{
                        padding: "14px 20px",
                        fontSize: "14px",
                      }}
                      className="border-bottom"
                    >
                      $25.00
                    </TableCell>

                    <TableCell
                      sx={{
                        padding: "14px 20px",
                        fontSize: "14px",
                      }}
                      className="border-bottom"
                    >
                      $50.00
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell
                      sx={{
                        padding: "14px 20px",
                        fontSize: "14px",
                      }}
                      className="text-black border-bottom"
                    >
                      #JAN-1323
                    </TableCell>

                    <TableCell
                      sx={{
                        padding: "14px 20px",
                        fontSize: "14px",
                      }}
                      className="text-black border-bottom"
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: "12px",
                        }}
                      >
                        <Box sx={{ flexShrink: "0" }}>
                          <img
                            src="/images/products/product2.jpg"
                            alt="Product"
                            width={40}
                            height={40}
                            style={{ borderRadius: "7px" }}
                          />
                        </Box>

                        <Box>
                          <Link
                            to="/ecommerce/products-list/details/"
                            style={{
                              fontSize: "15px",
                              fontWeight: "500",
                              display: "inline-block",
                              textDecoration: "none",
                            }}
                            className="text-black hover-text-color"
                          >
                            Headphone
                          </Link>
                        </Box>
                      </Box>
                    </TableCell>

                    <TableCell
                      sx={{
                        padding: "14px 20px",
                        fontSize: "14px",
                      }}
                      className="text-black border-bottom"
                    >
                      <QuantityCounter />
                    </TableCell>

                    <TableCell
                      sx={{
                        padding: "14px 20px",
                        fontSize: "14px",
                      }}
                      className="border-bottom"
                    >
                      $150.00
                    </TableCell>

                    <TableCell
                      sx={{
                        padding: "14px 20px",
                        fontSize: "14px",
                      }}
                      className="border-bottom"
                    >
                      $450.00
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>

            <Box mt="20px">
              <FormControl sx={{ width: { xs: "100%", lg: "430px" } }}>
                <TextField
                  label="Coupon code"
                  placeholder="E.g. #ARP1217"
                  variant="filled"
                  id="productTitle"
                  name="productTitle"
                  sx={{
                    "& .MuiInputBase-root": {
                      border: "1px solid #D5D9E2",
                      backgroundColor: "#fff",
                      borderRadius: "7px",
                    },
                    "& .MuiInputBase-root::before": {
                      border: "none",
                    },
                    "& .MuiInputBase-root:hover::before": {
                      border: "none",
                    },
                    "& .MuiInputBase-root:hover:hover:not(.Mui-disabled, .Mui-error)::before":
                      {
                        border: "none",
                      },
                  }}
                />
              </FormControl>

              <Box mt="20px">
                <Button
                  variant="contained"
                  color="primary"
                  sx={{
                    boxShadow: "none",
                    fontSize: "16px",
                    fontWeight: "500",
                    borderRadius: "7px",
                    padding: "10px 22px",
                    textTransform: "capitalize",
                    color: "#fff !important",
                  }}
                >
                  <i className="material-symbols-outlined mr-5">done_all</i>
                  Apply
                </Button>
              </Box>
            </Box>
          </Card>
        </Grid>

        <Grid size={{ xs: 12, sm: 12, md: 6, lg: 12, xl: 4 }}>
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
                Order Summary
              </Typography>
            </Box>

            {/* Table */}
            <TableContainer
              component={Paper}
              sx={{
                boxShadow: "none",
                borderRadius: "7px",
              }}
              className="rmui-table border"
            >
              <Table aria-label="Table">
                <TableHead className="bg-f6f7f9">
                  <TableRow>
                    <TableCell
                      sx={{
                        fontWeight: "500",
                        padding: "10px 20px",
                        fontSize: "14px",
                      }}
                      className="text-black border-bottom"
                    >
                      Description
                    </TableCell>

                    <TableCell
                      sx={{
                        fontWeight: "500",
                        padding: "10px 20px",
                        fontSize: "14px",
                      }}
                      className="text-black border-bottom text-end"
                    >
                      Price
                    </TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  <TableRow>
                    <TableCell
                      sx={{
                        padding: "14px 20px",
                        fontSize: "14px",
                      }}
                      className="text-black border-bottom"
                    >
                      Grand Total :
                    </TableCell>

                    <TableCell
                      sx={{
                        padding: "14px 20px",
                        fontSize: "14px",
                      }}
                      className="border-bottom text-end"
                    >
                      $1,105.00
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell
                      sx={{
                        padding: "14px 20px",
                        fontSize: "14px",
                      }}
                      className="text-black border-bottom"
                    >
                      Discount :
                    </TableCell>

                    <TableCell
                      sx={{
                        padding: "14px 20px",
                        fontSize: "14px",
                      }}
                      className="border-bottom text-end"
                    >
                      -$105.00
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell
                      sx={{
                        padding: "14px 20px",
                        fontSize: "14px",
                      }}
                      className="text-black border-bottom"
                    >
                      Tax :
                    </TableCell>

                    <TableCell
                      sx={{
                        padding: "14px 20px",
                        fontSize: "14px",
                      }}
                      className="border-bottom text-end"
                    >
                      $75.00
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell
                      sx={{
                        padding: "14px 20px",
                        fontSize: "14px",
                        fontWeight: "500",
                      }}
                      className="text-black border-bottom"
                    >
                      Subtotal :
                    </TableCell>

                    <TableCell
                      sx={{
                        padding: "14px 20px",
                        fontSize: "14px",
                      }}
                      className="border-bottom text-end"
                    >
                      $1,000.00
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell
                      sx={{
                        padding: "14px 20px",
                        fontSize: "14px",
                      }}
                      className="text-black border-bottom"
                    >
                      Shipping Charge :
                    </TableCell>

                    <TableCell
                      sx={{
                        padding: "14px 20px",
                        fontSize: "14px",
                      }}
                      className="border-bottom text-end"
                    >
                      $80.00
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell
                      sx={{
                        padding: "14px 20px",
                        fontSize: "14px",
                      }}
                      className="text-black border-bottom"
                    >
                      Coupon Charge :
                    </TableCell>

                    <TableCell
                      sx={{
                        padding: "14px 20px",
                        fontSize: "14px",
                      }}
                      className="border-bottom text-end"
                    >
                      $20.00
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell
                      sx={{
                        padding: "14px 20px",
                        fontSize: "14px",
                        fontWeight: "500",
                      }}
                      className="text-black border-bottom"
                    >
                      Total :
                    </TableCell>

                    <TableCell
                      sx={{
                        padding: "14px 20px",
                        fontSize: "14px",
                      }}
                      className="border-bottom text-end"
                    >
                      $900.00
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>

            <Box mt="20px">
              <FormControl fullWidth>
                <Typography
                  component="label"
                  sx={{
                    fontWeight: "600",
                    fontSize: "14px",
                    mb: "10px",
                    display: "block",
                  }}
                  className="text-black"
                >
                  Add A Note
                </Typography>

                <textarea 
                  id="addANote" 
                  name="addANote" 
                  placeholder="Add A Note"
                  rows={5}
                  style={{
                    width: '100%',
                    borderRadius: '6px',
                    padding: '10px 15px',
                    border: '1px solid #D5D9E2'
                  }} 
                ></textarea>
              </FormControl>

              <Button
                variant="contained"
                color="primary"
                sx={{
                  boxShadow: "none",
                  fontSize: "16px",
                  fontWeight: "500",
                  borderRadius: "7px",
                  padding: "10px 22px",
                  textTransform: "capitalize",
                  mt: "20px",
                  color: "#fff !important",
                }}
              >
                <i className="material-symbols-outlined mr-5">add</i>
                Proceed To Shipping
              </Button>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default CartTable;
