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
import { useTheme } from "@mui/material/styles";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import CustomDropdown from "./CustomDropdown";

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
  customerName,
  customerImage,
  created,
  total,
  status
) {
  return {
    orderID,
    customerName,
    customerImage,
    created,
    total,
    status,
  };
}

const rows = [
  createData(
    "#JAN-2345",
    "Sarah Johnson",
    "/images/users/user1.jpg",
    "12 Jun 2024",
    10490,
    "Shipped"
  ),
  createData(
    "#JAN-1323",
    "Michael Smith",
    "/images/users/user2.jpg",
    "11 Jun 2024",
    6575,
    "Confirmed"
  ),
  createData(
    "#DEC-1234",
    "Emily Brown",
    "/images/users/user3.jpg",
    "10 Jun 2024",
    12870,
    "Pending"
  ),
  createData(
    "#DEC-3567",
    "Jason Lee",
    "/images/users/user4.jpg",
    "09 Jun 2024",
    7895,
    "Shipped"
  ),
  createData(
    "#DEC-1098",
    "Ashley Davis",
    "/images/users/user5.jpg",
    "08 Jun 2024",
    4680,
    "Rejected"
  ),
  createData(
    "#JAN-2346",
    "Oliver Johnson",
    "/images/users/user62.jpg",
    "07 Jun 2024",
    490,
    "Pending"
  ),
  createData(
    "#JAN-2347",
    "Jake Noah",
    "/images/users/user63.jpg",
    "06 Jun 2024",
    9678,
    "Confirmed"
  ),
  createData(
    "#JAN-2348",
    "Callum Mason",
    "/images/users/user64.jpg",
    "05 Jun 2024",
    6097,
    "Shipped"
  ),
  createData(
    "#JAN-2349",
    "Robert Kyle",
    "/images/users/user65.jpg",
    "04 Jun 2024",
    7097,
    "Confirmed"
  ),
  createData(
    "#JAN-2350",
    "Thomas Joe",
    "/images/users/user66.jpg",
    "03 Jun 2024",
    5097,
    "Confirmed"
  ),
].sort((b, a) => (a.orderID < b.orderID ? -1 : 1));

const RecentOrders = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [searchQuery, setSearchQuery] = useState("");

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredRows = rows.filter((row) =>
    row.customerName.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
          display: { xs: "block", sm: "flex" },
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
          Recent Orders
        </Typography>

        <Box
          sx={{
            display: { xs: "block", sm: "flex" },
            alignItems: "center",
            gap: "20px",
          }}
        >
          <form className="t-search-form">
            <label>
              <i className="material-symbols-outlined">search</i>
            </label>
            <input
              type="text"
              className="t-input"
              placeholder="Search here..."
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </form>

          <CustomDropdown
            options={["Weekly", "Monthly", "Yearly"]}
            onSelect={(value) => console.log(value)}
            defaultLabel="See All"
          />
        </Box>
      </Box>

      <TableContainer
        component={Paper}
        sx={{
          boxShadow: "none",
          borderRadius: "7px",
        }}
        className="rmui-table border"
      >
        <Table sx={{ minWidth: 650 }} aria-label="Recent Orders Table">
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
                Created
              </TableCell>
              <TableCell className="text-black border-bottom">Total</TableCell>
              <TableCell className="text-black border-bottom">Status</TableCell>
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
                <TableCell className="text-black border-bottom">
                  <Box
                    sx={{ display: "flex", alignItems: "center", gap: "13px" }}
                  >
                    <Box sx={{ flexShrink: 0 }}>
                      <img
                        src={row.customerImage}
                        alt="Product"
                        width={40}
                        height={40}
                        style={{ borderRadius: "6px" }}
                      />
                    </Box>
                    <Typography className="text-black" fontWeight={500}>
                      {row.customerName}
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell className="text-black border-bottom">
                  {row.created}
                </TableCell>
                <TableCell className="text-black border-bottom">
                  ${row.total}
                </TableCell>
                <TableCell className="border-bottom">
                  <div className={`trezo-badge ${row.status}`}>
                    {row.status}
                  </div>
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
                sx={{
                  border: "none",
                }}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </Card>
  );
};

export default RecentOrders;
