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
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { useTheme } from "@mui/material/styles";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import styles from "./SalesByLocations.module.css";

// Pagination component
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
      }}
      className="ml-15"
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

// Mock data
const rows = [
  {
    id: "1",
    countryImg: "/images/flags/usa.svg",
    countryName: "USA",
    orders: "22,124",
    earnings: "$250.4k",
  },
  {
    id: "2",
    countryImg: "/images/flags/germany.svg",
    countryName: "Germany",
    orders: "18,320",
    earnings: "$180.3k",
  },
  {
    id: "3",
    countryImg: "/images/flags/uk.svg",
    countryName: "UK",
    orders: "12,560",
    earnings: "$125.6k",
  },
  {
    id: "4",
    countryImg: "/images/flags/canada.svg",
    countryName: "Canada",
    orders: "8,720",
    earnings: "$94.1k",
  },
  {
    id: "5",
    countryImg: "/images/flags/australia.svg",
    countryName: "Australia",
    orders: "9,720",
    earnings: "$66.1k",
  },
  {
    id: "6",
    countryImg: "/images/flags/portugal.svg",
    countryName: "Portugal",
    orders: "49,720",
    earnings: "$86.1k",
  },
  {
    id: "7",
    countryImg: "/images/flags/spain.svg",
    countryName: "Spain",
    orders: "42,720",
    earnings: "$82.1k",
  },
];

const SalesByLocations = () => {
  // Dropdown state
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // Pagination state
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(4);

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
      className="rmui-card border"
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
          Sales by Locations
        </Typography>

        <IconButton
          onClick={handleClick}
          size="small"
          aria-controls={open ? "account-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          sx={{
            borderRadius: "0",
            padding: "0",
          }}
        >
          <MoreHorizIcon sx={{ fontSize: "25px" }} />
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
            },
          }}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          <MenuItem>This Day</MenuItem>
          <MenuItem>This Week</MenuItem>
          <MenuItem>This Month</MenuItem>
          <MenuItem>This Year</MenuItem>
        </Menu>
      </Box>

      <Box sx={{ textAlign: "center", mt: "30px", mb: "10px" }}>
        <img src="/images/vector-map.png" alt="vector-map"/>
      </Box>

      <TableContainer
        component={Paper}
        sx={{
          boxShadow: "none",
          borderRadius: "0",
        }}
        className="rmui-table"
      >
        <Table sx={{ minWidth: 400 }} className={styles.usersTable}>
          <TableHead>
            <TableRow>
              <TableCell
                sx={{
                  padding: "0 14px 7px",
                  fontSize: "12px",
                }}
                className="border-bottom"
              >
                Country
              </TableCell>

              <TableCell
                sx={{
                  padding: "0 14px 7px",
                  fontSize: "12px",
                  textAlign: "end",
                }}
                className="border-bottom"
              >
                Orders
              </TableCell>

              <TableCell
                sx={{
                  padding: "0 14px 7px",
                  fontSize: "12px",
                  textAlign: "end",
                }}
                className="border-bottom"
              >
                Earnings
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {(rowsPerPage > 0
              ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : rows
            ).map((row) => (
              <TableRow key={row.id}>
                <TableCell
                  sx={{
                    padding: "10px 14px",
                    fontSize: "14px",
                  }}
                  className="text-black border-bottom"
                >
                  <Box
                    sx={{ display: "flex", alignItems: "center", gap: "10px" }}
                  >
                    <img
                      src={row.countryImg}
                      alt={row.countryName}
                      width={22}
                      height={22}
                      style={{ borderRadius: "100px" }}
                    />
                    <Typography sx={{ fontWeight: "500" }}>
                      {row.countryName}
                    </Typography>
                  </Box>
                </TableCell>

                <TableCell
                  sx={{
                    padding: "10px 14px",
                    fontSize: "14px",
                    textAlign: "end",
                    fontWeight: "500",
                  }}
                  className="text-black border-bottom"
                >
                  {row.orders}
                </TableCell>

                <TableCell
                  sx={{
                    padding: "10px 14px",
                    fontSize: "14px",
                    textAlign: "end",
                    fontWeight: "500",
                  }}
                  className="text-black border-bottom"
                >
                  {row.earnings}
                </TableCell>
              </TableRow>
            ))}
            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell className="border-bottom" colSpan={3} />
              </TableRow>
            )}
          </TableBody>

          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[3, 5, 10, { label: "All", value: -1 }]}
                colSpan={3}
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
                sx={{
                  border: "none",
                  ".MuiToolbar-root": {
                    minHeight: "auto",
                    marginTop: "10px",
                  },
                }}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </Card>
  );
};

export default SalesByLocations;
