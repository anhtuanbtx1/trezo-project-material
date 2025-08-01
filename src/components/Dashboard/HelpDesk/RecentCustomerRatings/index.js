"use client";

import React, { useState } from "react";
import {
  Card,
  Box,
  Typography,
  Menu,
  MenuItem,
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
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

// Pagination actions component
const TablePaginationActions = ({ count, page, rowsPerPage, onPageChange }) => {
  const theme = useTheme();

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
        onClick={(e) => onPageChange(e, page - 1)}
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
        onClick={(e) => onPageChange(e, page + 1)}
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
};

// Sample data for rows
const rows = [
  {
    id: 1,
    customerImg: "/images/users/user13.jpg",
    customerName: "Olivia Clark",
    designation: "Big Data",
    date: "28 April 2024",
    ratings: Array(5).fill("ri-star-fill"),
  },
  {
    id: 2,
    customerImg: "/images/users/user16.jpg",
    customerName: "Ava Turner",
    designation: "UX/UI",
    date: "27 April 2024",
    ratings: Array(4).fill("ri-star-fill"),
  },
  {
    id: 3,
    customerImg: "/images/users/user17.jpg",
    customerName: "Lucas Morgan",
    designation: "Developer",
    date: "26 April 2024",
    ratings: Array(3).fill("ri-star-fill"),
  },
  {
    id: 4,
    customerImg: "/images/users/user18.jpg",
    customerName: "Isabella Cooper",
    designation: "Designer",
    date: "25 April 2024",
    ratings: Array(2).fill("ri-star-fill"),
  },
  {
    id: 5,
    customerImg: "/images/users/user31.jpg",
    customerName: "Jhon Smith",
    designation: "React Developer",
    date: "24 April 2024",
    ratings: Array(1).fill("ri-star-fill"),
  },
  {
    id: 6,
    customerImg: "/images/users/user30.jpg",
    customerName: "Oliver Jhon",
    designation: "Angular Developer",
    date: "23 April 2024",
    ratings: Array(5).fill("ri-star-fill"),
  },
  {
    id: 7,
    customerImg: "/images/users/user29.jpg",
    customerName: "Jake Morgan",
    designation: "Developer",
    date: "22 April 2024",
    ratings: Array(5).fill("ri-star-fill"),
  },
  {
    id: 8,
    customerImg: "/images/users/user28.jpg",
    customerName: "Mason Cooper",
    designation: "Designer",
    date: "21 April 2024",
    ratings: Array(4).fill("ri-star-fill"),
  },
  {
    id: 9,
    customerImg: "/images/users/user30.jpg",
    customerName: "Jhon Cooper",
    designation: "Designer",
    date: "20 April 2024",
    ratings: [
      "ri-star-fill",
      "ri-star-fill",
      "ri-star-fill",
      "ri-star-fill",
      "ri-star-fill",
    ],
  },
  {
    id: 10,
    customerImg: "/images/users/user31.jpg",
    customerName: "Cooper Shmit",
    designation: "Designer",
    date: "19 April 2024",
    ratings: Array(3).fill("ri-star-fill"),
  },
].sort((a, b) => b.id - a.id);

const RecentCustomerRatings = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const open = Boolean(anchorEl);

  const handleMenuClick = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  const handleChangePage = (event, newPage) => setPage(newPage);
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const emptyRows = Math.max(0, (1 + page) * rowsPerPage - rows.length);

  return (
    <Card
      sx={{
        boxShadow: "none",
        borderRadius: "7px",
        mb: "25px",
        padding: { xs: "18px", sm: "20px", lg: "25px" },
      }}
    >
      {/* Header */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mb: "20px",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontSize: { xs: "16px", md: "18px" },
            fontWeight: 700,
          }}
        >
          Recent Customer Ratings
        </Typography>
        <IconButton
          onClick={handleMenuClick}
          size="small"
          aria-controls={open ? "account-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
        >
          <MoreHorizIcon sx={{ fontSize: "25px" }} />
        </IconButton>

        {/* Dropdown Menu */}
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleMenuClose}
          PaperProps={{
            elevation: 0,
            sx: { overflow: "visible", boxShadow: "0 4px 45px #0000001a" },
          }}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          <MenuItem onClick={handleMenuClose}>This Day</MenuItem>
          <MenuItem onClick={handleMenuClose}>This Week</MenuItem>
          <MenuItem onClick={handleMenuClose}>This Month</MenuItem>
          <MenuItem onClick={handleMenuClose}>This Year</MenuItem>
        </Menu>
      </Box>

      {/* Table */}
      <Box
        sx={{
          marginLeft: "-25px",
          marginRight: "-25px",
        }}
      >
        <TableContainer
          component={Paper}
          sx={{ boxShadow: "none", borderRadius: 0 }}
          className="rmui-table"
        >
          <Table sx={{ minWidth: 480 }}>
            <TableHead className="bg-primary-50">
              <TableRow
                sx={{
                  th: {
                    fontWeight: "500",
                    padding: "10px 20px",
                    fontSize: "14px",
                  },
                }}
              >
                <TableCell className="text-black border-bottom">Name</TableCell>

                <TableCell className="text-black border-bottom">Date</TableCell>

                <TableCell className="text-black border-bottom">
                  Ratings
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => (
                  <TableRow
                    key={row.id}
                    sx={{
                      td: {
                        padding: "13px 20px",
                        fontSize: "14px",
                      },
                    }}
                  >
                    <TableCell className="text-black border-bottom">
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: "12px",
                        }}
                      >
                        <img
                          src={row.customerImg}
                          alt={row.customerName}
                          style={{ width: 44, height: 44, borderRadius: "50%" }}
                        />
                        <Box>
                          <Typography sx={{ fontWeight: 500 }}>
                            {row.customerName}
                          </Typography>
                          <Typography variant="body2">
                            {row.designation}
                          </Typography>
                        </Box>
                      </Box>
                    </TableCell>

                    <TableCell className="text-black border-bottom">
                      {row.date}
                    </TableCell>

                    <TableCell className="text-black border-bottom">
                      {row.ratings.map((star, index) => (
                        <i
                          key={index}
                          className={star}
                          style={{ color: "#fe7a36", fontSize: 15 }}
                        ></i>
                      ))}
                    </TableCell>
                  </TableRow>
                ))}
              {emptyRows > 0 && (
                <TableRow>
                  <TableCell className="border-bottom" colSpan={3} />
                </TableRow>
              )}
            </TableBody>

            <TableFooter>
              <TableRow>
                <TablePagination
                  rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
                  colSpan={3}
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
                    ".MuiToolbar-root": {
                      minHeight: "auto",
                      marginTop: "15px",
                    },
                  }}
                />
              </TableRow>
            </TableFooter>
          </Table>
        </TableContainer>
      </Box>
    </Card>
  );
};

export default RecentCustomerRatings;
