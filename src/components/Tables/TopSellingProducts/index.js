"use client";

import React, { useState } from "react";
import {
  Card,
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TablePagination,
  TableRow,
  Paper,
  IconButton,
  TableHead,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import CustomDropdown from "./CustomDropdown";

// TablePaginationActions Component
function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  return (
    <Box
      sx={{ flexShrink: 0, display: "flex", gap: "10px", padding: "14px 20px" }}
    >
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
        sx={{ borderRadius: "4px", padding: "4px" }}
        className="border"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>

      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
        sx={{ borderRadius: "4px", padding: "4px" }}
        className="border"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
    </Box>
  );
}

// Helper Function to Create Data
function createData(name, image, link, date, price, order, stock, amount) {
  return { name, image, link, date, price, order, stock, amount };
}

// Sample Rows
const rows = [
  createData(
    "Smart Band",
    "/images/products/product1.jpg",
    "/ecommerce/products-list/details/",
    "08 Jun 2024",
    35.0,
    75,
    750,
    2625
  ),
  createData(
    "Headphone",
    "/images/products/product2.jpg",
    "/ecommerce/products-list/details/",
    "07 Jun 2024",
    49.0,
    25,
    825,
    1225
  ),
  createData(
    "iPhone 15 Plus",
    "/images/products/product3.jpg",
    "/ecommerce/products-list/details/",
    "06 Jun 2024",
    99.0,
    55,
    "Stock Out",
    5445
  ),
  createData(
    "Bluetooth Speaker",
    "/images/products/product4.jpg",
    "/ecommerce/products-list/details/",
    "05 Jun 2024",
    59.0,
    40,
    535,
    2360
  ),
  createData(
    "Airbuds 2nd Gen",
    "/images/products/product5.jpg",
    "/ecommerce/products-list/details/",
    "04 Jun 2024",
    79.0,
    56,
    460,
    4424
  ),
  createData(
    "MacBook Air 13-inch",
    "/images/products/product6.jpg",
    "/ecommerce/products-list/details/",
    "03 Jun 2024",
    279.0,
    50,
    125,
    13950
  ),
  createData(
    "iPad Air - Apple",
    "/images/products/product7.jpg",
    "/ecommerce/products-list/details/",
    "02 Jun 2024",
    599.0,
    2,
    20,
    5992
  ),
  createData(
    "iPhone 15",
    "/images/products/product8.jpg",
    "/ecommerce/products-list/details/",
    "01 Jun 2024",
    799.0,
    2,
    50,
    1598
  ),
  createData(
    "T-Shirt",
    "/images/products/product9.jpg",
    "/ecommerce/products-list/details/",
    "01 May 2024",
    50.0,
    2,
    50,
    100
  ),
  createData(
    "Casual Shoes",
    "/images/products/product10.jpg",
    "/ecommerce/products-list/details/",
    "02 May 2024",
    500.0,
    5,
    50,
    2500
  ),
].sort((a, b) => (a.name < b.name ? -1 : 1));

const TopSellingProducts = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
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
          sx={{ fontSize: { xs: "16px", md: "18px" }, fontWeight: 700 }}
          className="text-black"
        >
          Top Selling Products
        </Typography>

        <Box>
          <CustomDropdown
            options={["Weekly", "Monthly", "Yearly"]}
            onSelect={(value) => console.log(value)}
            defaultLabel="Today"
          />
        </Box>
      </Box>

      <TableContainer
        component={Paper}
        sx={{ boxShadow: "none", borderRadius: "7px" }}
        className="rmui-table border"
      >
        <Table sx={{ minWidth: 650 }} aria-label="Top Selling Products Table">
          <TableHead className="bg-f6f7f9">
            <TableRow
              sx={{
                th: {
                  fontWeight: "500",
                  padding: "12px 20px",
                  fontSize: "14px",
                },
              }}
            >
              <TableCell className="text-black border-bottom">
                Product
              </TableCell>
              <TableCell className="text-black border-bottom">Price</TableCell>
              <TableCell className="text-black border-bottom">Order</TableCell>
              <TableCell className="text-black border-bottom">Stock</TableCell>
              <TableCell align="center" className="text-black border-bottom">
                Amount
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {(rowsPerPage > 0
              ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : rows
            ).map((row) => (
              <TableRow key={row.name}>
                <TableCell
                  sx={{ padding: "15px 20px", fontSize: "14px" }}
                  className="text-black border-bottom"
                >
                  <Box
                    sx={{ display: "flex", alignItems: "center", gap: "12px" }}
                  >
                    <Box sx={{ flexShrink: "0" }}>
                      <img
                        src={row.image}
                        alt="Product"
                        width={40}
                        height={40}
                        style={{ borderRadius: "7px" }}
                      />
                    </Box>

                    <Box>
                      <Link
                        to={row.link}
                        style={{
                          fontSize: "15px",
                          fontWeight: "500",
                          display: "inline-block",
                          textDecoration: "none",
                        }}
                        className="text-black hover-text-color"
                      >
                        {row.name}
                      </Link>
                      <Typography
                        sx={{ fontSize: "13px" }}
                        className="text-body"
                      >
                        {row.date}
                      </Typography>
                    </Box>
                  </Box>
                </TableCell>

                <TableCell
                  sx={{ padding: "14px 20px", fontSize: "14px" }}
                  className="text-black border-bottom"
                >
                  ${row.price}
                </TableCell>

                <TableCell
                  sx={{ padding: "14px 20px", fontSize: "14px" }}
                  className="text-black border-bottom"
                >
                  {row.order}
                </TableCell>

                <TableCell
                  sx={{ padding: "14px 20px", fontSize: "14px" }}
                  className="text-black border-bottom"
                >
                  {row.stock}
                </TableCell>

                <TableCell
                  align="center"
                  sx={{ padding: "14px 20px", fontSize: "14px" }}
                  className="text-black border-bottom"
                >
                  ${row.amount}
                </TableCell>
              </TableRow>
            ))}
            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell className="border-bottom" colSpan={5} />
              </TableRow>
            )}
          </TableBody>

          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
                colSpan={5}
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
         
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
                sx={{ border: "none" }}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </Card>
  );
};

export default TopSellingProducts;
