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
  InputLabel,
  MenuItem,
  FormControl,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import Select from "@mui/material/Select";

function TablePaginationActions({ count, page, rowsPerPage, onPageChange }) {
  const theme = useTheme();

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  return (
    <Box
      sx={{
        flexShrink: 0,
        display: "flex",
        gap: "10px",
        padding: "0 20px",
      }}
    >
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
        sx={{
          borderRadius: "4px",
          padding: "4px",
        }}
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
        sx={{
          borderRadius: "4px",
          padding: "4px",
        }}
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

function createData(
  invoiceId,
  customerImg,
  customerName,
  email,
  issuedDate,
  total,
  quantity,
  walletBalance,
  viewLink
) {
  return {
    invoiceId,
    customerImg,
    customerName,
    email,
    issuedDate,
    total,
    quantity,
    walletBalance,
    viewLink,
  };
}

const rows = [
  createData(
    "#JAN-158",
    "/images/users/user6.jpg",
    "Marcia Baker",
    "marcia@trezo.com",
    "$5,000",
    "10 Nov 2024",
    6,
    "$2,000",
    "/invoices/details"
  ),
  createData(
    "#JAN-157",
    "/images/users/user7.jpg",
    "Carolyn Barnes",
    "barnes@trezo.com",
    "$8,750",
    "11 Nov 2024",
    10,
    "$4,500",
    "/invoices/details"
  ),
  createData(
    "#JAN-156",
    "/images/users/user8.jpg",
    "Donna Miller",
    "donna@trezo.com",
    "$3,200",
    "12 Nov 2024",
    10,
    "$1,550",
    "/invoices/details"
  ),
  createData(
    "#JAN-155",
    "/images/users/user9.jpg",
    "Barbara Cross",
    "cross@trezo.com",
    "$3,750",
    "13 Nov 2024",
    4,
    "$2,490",
    "/invoices/details"
  ),
  createData(
    "#JAN-154",
    "/images/users/user10.jpg",
    "Rebecca Block",
    "block@trezo.com",
    "$6,000",
    "14 Nov 2024",
    2,
    "$3,599",
    "/invoices/details"
  ),
  createData(
    "#JAN-153",
    "/images/users/user11.jpg",
    "Ramiro McCarty",
    "ramiro@trezo.com",
    "$9,200",
    "15 Nov 2024",
    8,
    "$5,800",
    "/invoices/details"
  ),
  createData(
    "#JAN-152",
    "/images/users/user12.jpg",
    "Robert Fairweather",
    "robert@trezo.com",
    "$2,500",
    "16 Nov 2024",
    6,
    "$1,200",
    "/invoices/details"
  ),
  createData(
    "#JAN-151",
    "/images/users/user13.jpg",
    "Marcelino Haddock",
    "marcelino@trezo.com",
    "$7,300",
    "17 Nov 2024",
    9,
    "$4,850",
    "/invoices/details"
  ),
  createData(
    "#JAN-150",
    "/images/users/user14.jpg",
    "Thomas Wilson",
    "thomas@trezo.com",
    "$4,800",
    "18 Nov 2024",
    5,
    "$2,300",
    "/invoices/details"
  ),
  createData(
    "#JAN-149",
    "/images/users/user15.jpg",
    "Nathaniel Hulsey",
    "nathaniel@trezo.com",
    "$6,500",
    "19 Nov 2024",
    5,
    "$4,560",
    "/invoices/details"
  ),
  createData(
    "#JAN-148",
    "/images/users/user16.jpg",
    "Baker",
    "baker@trezo.com",
    "$5,400",
    "20 Nov 2024",
    8,
    "$2,400",
    "/invoices/details"
  ),
  createData(
    "#JAN-147",
    "/images/users/user17.jpg",
    "Barnes",
    "barnes@trezo.com",
    "$8,450",
    "21 Nov 2024",
    15,
    "$4,400",
    "/invoices/details"
  ),
  createData(
    "#JAN-146",
    "/images/users/user18.jpg",
    "Miller",
    "miller@trezo.com",
    "$3,400",
    "22 Nov 2024",
    22,
    "$1,450",
    "/invoices/details"
  ),
  createData(
    "#JAN-145",
    "/images/users/user19.jpg",
    "Cross",
    "cross@trezo.com",
    "$3,450",
    "23 Nov 2024",
    5,
    "$2,450",
    "/invoices/details"
  ),
  createData(
    "#JAN-144",
    "/images/users/user20.jpg",
    "Rebecca",
    "rebecca@trezo.com",
    "$6,400",
    "24 Nov 2024",
    6,
    "$3,499",
    "/invoices/details"
  ),
  createData(
    "#JAN-143",
    "/images/users/user21.jpg",
    "McCarty",
    "mccarty@trezo.com",
    "$9,400",
    "25 Nov 2024",
    7,
    "$5,400",
    "/invoices/details"
  ),
  createData(
    "#JAN-142",
    "/images/users/user22.jpg",
    "Fairweather",
    "fairweather@trezo.com",
    "$2,400",
    "26 Nov 2024",
    9,
    "$1,400",
    "/invoices/details"
  ),
  createData(
    "#JAN-141",
    "/images/users/user23.jpg",
    "Marcelino",
    "marcelino@trezo.com",
    "$7,400",
    "27 Nov 2024",
    3,
    "$4,450",
    "/invoices/details"
  ),
  createData(
    "#JAN-140",
    "/images/users/user24.jpg",
    "Wilson",
    "wilson@trezo.com",
    "$4,400",
    "28 Nov 2024",
    7,
    "$2,400",
    "/invoices/details"
  ),
  createData(
    "#JAN-139",
    "/images/users/user25.jpg",
    "Hulsey",
    "hulsey@trezo.com",
    "$6,400",
    "29 Nov 2024",
    8,
    "$4,460",
    "/invoices/details"
  ),
].sort((b, a) => (a.invoiceId < b.invoiceId ? -1 : 1));

const InvoiceTable = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState(""); // State for search term
  const [select, setSelect] = useState("");

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChange = (event) => {
    setSelect(event.target.value);
  };

  // Filter rows based on search term
  const filteredRows = rows.filter((row) =>
    Object.values(row)
      .join(" ")
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - filteredRows.length) : 0;

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
            display: { xs: "block", sm: "flex" },
            alignItems: "center",
            justifyContent: "space-between",
            mb: "25px",
          }}
        >
          <form className="t-search-form">
            <label>
              <i className="material-symbols-outlined">search</i>
            </label>
            <input
              type="text"
              className="t-input"
              placeholder="Search here....."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)} // Update search term
            />
          </form>

          <Box>
            <FormControl sx={{ minWidth: 115 }} size="small">
              <InputLabel id="demo-select-small">Select</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={select}
                label="select"
                onChange={handleChange}
                className="select"
              >
                <MenuItem value={0}>Weekly</MenuItem>
                <MenuItem value={1}>Monthly</MenuItem>
                <MenuItem value={2}>Yearly</MenuItem>
                <MenuItem value={4}>All Time</MenuItem>
              </Select>
            </FormControl>
          </Box>
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
          <Table sx={{ minWidth: 950 }} aria-label="Table">
            <TableHead className="bg-f6f7f9">
              <TableRow
                sx={{
                  th: {
                    fontWeight: "500",
                    padding: "10px 20px",
                    fontSize: "14px",
                  },
                }}
              >
                <TableCell className="text-black border-bottom">
                  Invoice ID
                </TableCell>

                <TableCell className="text-black border-bottom">
                  Customer
                </TableCell>

                <TableCell className="text-black border-bottom">
                  Email
                </TableCell>

                <TableCell className="text-black border-bottom">
                  Issued Date
                </TableCell>

                <TableCell className="text-black border-bottom">
                  Total
                </TableCell>

                <TableCell className="text-black border-bottom">
                  Quantity
                </TableCell>

                <TableCell className="text-black border-bottom">
                  Wallet Balance
                </TableCell>

                <TableCell className="text-black border-bottom">
                  Action
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {(rowsPerPage > 0
                ? filteredRows.slice(
                    page * rowsPerPage,
                    page * rowsPerPage + rowsPerPage
                  )
                : filteredRows
              ).map((row) => (
                <TableRow
                  key={row.invoiceId}
                  sx={{
                    td: {
                      padding: "14px 20px",
                      fontSize: "14px",
                    },
                  }}
                >
                  <TableCell className="border-bottom">
                    {row.invoiceId}
                  </TableCell>

                  <TableCell className="text-black border-bottom">
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "13px",
                      }}
                    >
                      <Box sx={{ flexShrink: "0" }}>
                        <img
                          src={row.customerImg}
                          alt="Product"
                          width={40}
                          height={40}
                          style={{ borderRadius: "100px" }}
                        />
                      </Box>

                      <Box>
                        <Typography
                          sx={{
                            fontSize: "15px",
                            fontWeight: "500",
                          }}
                          className="text-black"
                        >
                          {row.customerName}
                        </Typography>
                      </Box>
                    </Box>
                  </TableCell>

                  <TableCell className="border-bottom">{row.email}</TableCell>

                  <TableCell className="text-black border-bottom">
                    {row.issuedDate}
                  </TableCell>

                  <TableCell className="border-bottom">{row.total}</TableCell>

                  <TableCell className="border-bottom">
                    {row.quantity}
                  </TableCell>

                  <TableCell className="border-bottom">
                    {row.walletBalance}
                  </TableCell>

                  <TableCell className="border-bottom">
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <Link to={row.viewLink}>
                        <IconButton
                          aria-label="view"
                          color="primary"
                          sx={{ padding: "5px" }}
                        >
                          <i
                            className="material-symbols-outlined"
                            style={{ fontSize: "16px" }}
                          >
                            visibility
                          </i>
                        </IconButton>
                      </Link>

                      <IconButton
                        aria-label="print"
                        color="info"
                        sx={{ padding: "5px" }}
                      >
                        <i
                          className="material-symbols-outlined"
                          style={{ fontSize: "16px" }}
                        >
                          print
                        </i>
                      </IconButton>

                      <IconButton
                        aria-label="delete"
                        color="error"
                        sx={{ padding: "5px" }}
                      >
                        <i
                          className="material-symbols-outlined"
                          style={{ fontSize: "16px" }}
                        >
                          delete
                        </i>
                      </IconButton>
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
              {emptyRows > 0 && (
                <TableRow style={{ height: 53 * emptyRows }}>
                  <TableCell className="border-bottom" colSpan={8} />
                </TableRow>
              )}
            </TableBody>

            <TableFooter>
              <TableRow>
                <TablePagination
                  rowsPerPageOptions={[5, 10, 25]}
                  count={filteredRows.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                  ActionsComponent={TablePaginationActions}
                  sx={{
                    border: "none",
                  }}
                />
              </TableRow>
            </TableFooter>
          </Table>
        </TableContainer>
      </Card>
    </>
  );
};

export default InvoiceTable;
