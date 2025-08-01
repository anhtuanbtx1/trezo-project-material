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
  Button,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import AddIcon from "@mui/icons-material/Add";

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
      sx={{
        flexShrink: 0,
        display: "flex",
        gap: "10px",
        padding: "14px 20px",
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
  orderID,
  customerImage,
  customerName,
  items,
  created,
  total,
  vendor,
  status
) {
  return {
    orderID,
    customerImage,
    customerName,
    items,
    created,
    total,
    vendor,
    status,
  };
}

const rows = [
  createData(
    "#JAN-2345",
    "/images/users/user1.jpg",
    "Sarah Johnson",
    "120",
    "12 Jun 2024",
    "$10,490",
    "Dennis Matthews",
    "Shipped"
  ),
  createData(
    "#JAN-2346",
    "/images/users/user2.jpg",
    "Michael Smith",
    "62",
    "11 Jun 2024",
    "$6,575",
    "Kathryn Turner",
    "Confirmed"
  ),
  createData(
    "#JAN-2347",
    "/images/users/user3.jpg",
    "Emily Brow",
    "49",
    "10 Jun 2024",
    "$12,870",
    "John Valdez",
    "Pending"
  ),
  createData(
    "#JAN-2348",
    "/images/users/user4.jpg",
    "Jason Lee",
    "25",
    "09 Jun 2024",
    "$7,89",
    "Douglas Harvey",
    "Shipped"
  ),
  createData(
    "#JAN-2349",
    "/images/users/user5.jpg",
    "Ashley Davis",
    "82",
    "08 Jun 2024",
    "$4,680",
    "Susan Rader",
    "Rejected"
  ),
  createData(
    "#JAN-2350",
    "/images/users/user4.jpg",
    "Sarah Johnson",
    "120",
    "12 Jun 2024",
    "$10,490",
    "Dennis Matthews",
    "Shipped"
  ),
  createData(
    "#JAN-2351",
    "/images/users/user5.jpg",
    "Michael Smith",
    "62",
    "11 Jun 2024",
    "$6,575",
    "Kathryn Turner",
    "Confirmed"
  ),
  createData(
    "#JAN-2352",
    "/images/users/user6.jpg",
    "Emily Brow",
    "49",
    "10 Jun 2024",
    "$12,870",
    "John Valdez",
    "Pending"
  ),
  createData(
    "#JAN-2353",
    "/images/users/user7.jpg",
    "Jason Lee",
    "25",
    "09 Jun 2024",
    "$7,89",
    "Douglas Harvey",
    "Shipped"
  ),
  createData(
    "#JAN-2354",
    "/images/users/user8.jpg",
    "Ashley Davis",
    "82",
    "08 Jun 2024",
    "$4,680",
    "Susan Rader",
    "Rejected"
  ),
  createData(
    "#JAN-2355",
    "/images/users/user9.jpg",
    "Sarah Johnson",
    "120",
    "12 Jun 2024",
    "$10,490",
    "Dennis Matthews",
    "Shipped"
  ),
  createData(
    "#JAN-2356",
    "/images/users/user10.jpg",
    "Michael Smith",
    "62",
    "11 Jun 2024",
    "$6,575",
    "Kathryn Turner",
    "Confirmed"
  ),
  createData(
    "#JAN-2357",
    "/images/users/user11.jpg",
    "Emily Brow",
    "49",
    "10 Jun 2024",
    "$12,870",
    "John Valdez",
    "Pending"
  ),
  createData(
    "#JAN-2358",
    "/images/users/user12.jpg",
    "Jason Lee",
    "25",
    "09 Jun 2024",
    "$7,89",
    "Douglas Harvey",
    "Shipped"
  ),
  createData(
    "#JAN-2359",
    "/images/users/user13.jpg",
    "Ashley Davis",
    "82",
    "08 Jun 2024",
    "$4,680",
    "Susan Rader",
    "Rejected"
  ),
  createData(
    "#JAN-2360",
    "/images/users/user14.jpg",
    "Sarah Johnson",
    "120",
    "12 Jun 2024",
    "$10,490",
    "Dennis Matthews",
    "Shipped"
  ),
  createData(
    "#JAN-2361",
    "/images/users/user15.jpg",
    "Michael Smith",
    "62",
    "11 Jun 2024",
    "$6,575",
    "Kathryn Turner",
    "Confirmed"
  ),
  createData(
    "#JAN-2362",
    "/images/users/user16.jpg",
    "Emily Brow",
    "49",
    "10 Jun 2024",
    "$12,870",
    "John Valdez",
    "Pending"
  ),
  createData(
    "#JAN-2363",
    "/images/users/user17.jpg",
    "Jason Lee",
    "25",
    "09 Jun 2024",
    "$7,89",
    "Douglas Harvey",
    "Shipped"
  ),
  createData(
    "#JAN-2364",
    "/images/users/user18.jpg",
    "Ashley Davis",
    "82",
    "08 Jun 2024",
    "$4,680",
    "Susan Rader",
    "Rejected"
  ),
].sort((b, a) => (a.orderID < b.orderID ? -1 : 1));

const OrdersTable = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredRows = rows.filter(
    (row) =>
      row.orderID.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row.status.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - filteredRows.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    setPage(0); // Reset to the first page when searching
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
        <Box>
          <Box
            sx={{
              display: { xs: "block", sm: "flex" },
              alignItems: "center",
              justifyContent: "space-between",
              mb: "25px",
            }}
          >
            <Box
              component="form"
              className="t-search-form"
              sx={{
                width: "265px",
              }}
            >
              <label>
                <i className="material-symbols-outlined">search</i>
              </label>
              <input
                type="text"
                className="t-input"
                placeholder="Search order here....."
                value={searchTerm}
                onChange={handleSearch}
              />
            </Box>

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
              <AddIcon sx={{ fontSize: "17px" }} /> Add New Order
            </Button>
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
            <Table sx={{ minWidth: 1250 }} aria-label="Table">
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
                    Order ID
                  </TableCell>

                  <TableCell className="text-black border-bottom">
                    Customer
                  </TableCell>

                  <TableCell className="text-black border-bottom">
                    Items
                  </TableCell>

                  <TableCell className="text-black border-bottom">
                    Created
                  </TableCell>

                  <TableCell className="text-black border-bottom">
                    Total
                  </TableCell>

                  <TableCell className="text-black border-bottom">
                    Vendor
                  </TableCell>

                  <TableCell className="text-black border-bottom">
                    Status
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
                    key={row.orderID}
                    sx={{
                      td: {
                        padding: "14px 20px",
                        fontSize: "14px",
                      },
                    }}
                  >
                    <TableCell className="text-black border-bottom">
                      {row.orderID}
                    </TableCell>

                    <TableCell className="border-bottom">
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: "13px",
                        }}
                      >
                        <Box sx={{ flexShrink: "0" }}>
                          <img
                            src={row.customerImage}
                            alt="Product"
                            width={40}
                            height={40}
                            style={{ borderRadius: "50%" }}
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

                    <TableCell className="text-black border-bottom">
                      {row.items}
                    </TableCell>

                    <TableCell className="text-black border-bottom">
                      {row.created}
                    </TableCell>

                    <TableCell className="text-black border-bottom">
                      {row.total}
                    </TableCell>

                    <TableCell className="text-black border-bottom">
                      {row.vendor}
                    </TableCell>

                    <TableCell className="border-bottom">
                      <div className={`trezo-badge ${row.status}`}>
                        {row.status}
                      </div>
                    </TableCell>

                    <TableCell className="border-bottom">
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
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

                        <IconButton
                          aria-label="edit"
                          color="secondary"
                          sx={{ padding: "5px" }}
                        >
                          <i
                            className="material-symbols-outlined"
                            style={{ fontSize: "16px" }}
                          >
                            edit
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
                    rowsPerPageOptions={[
                      5,
                      10,
                      25,
                      { label: "All", value: -1 },
                    ]}
                    colSpan={8}
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    slotProps={{
                      select: {
                        inputProps: {
                          "aria-label": "rows per page",
                        },
                        native: true,
                      },
                    }}
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
        </Box>
      </Card>
    </>
  );
};

export default OrdersTable;
