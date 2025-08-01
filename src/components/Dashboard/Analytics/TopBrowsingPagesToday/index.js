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
import styles from "./TopBrowsingPagesToday.module.css";

// Pagination actions
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

// Sample data
const initialRows = [
  {
    id: 1,
    page_url: "/dashboard-overview",
    source: "Organic",
    avg_time: "3m 45s",
    page_views: "350",
    bounce_rate: "30.5%",
  },
  {
    id: 2,
    page_url: "/custom-reports/generate",
    source: "Paid",
    avg_time: "7m 00s",
    page_views: "400",
    bounce_rate: "24.9%",
  },
  {
    id: 3,
    page_url: "/export-data",
    source: "Direct",
    avg_time: "2m 30s",
    page_views: "125",
    bounce_rate: "50.0%",
  },
  {
    id: 4,
    page_url: "/realtime-users",
    source: "Referral",
    avg_time: "3m 00s",
    page_views: "190",
    bounce_rate: "40.2%",
  },
  {
    id: 5,
    page_url: "/account-preferences",
    source: "Organic",
    avg_time: "2m 50s",
    page_views: "180",
    bounce_rate: "42.1%",
  },
  {
    id: 6,
    page_url: "/apis-and-reports",
    source: "Paid",
    avg_time: "4m 15s",
    page_views: "320",
    bounce_rate: "28.7%",
  },
  {
    id: 7,
    page_url: "/user-settings",
    source: "Organic",
    avg_time: "3m 10s",
    page_views: "210",
    bounce_rate: "35.0%",
  },
  {
    id: 8,
    page_url: "/help-center",
    source: "Referral",
    avg_time: "5m 20s",
    page_views: "275",
    bounce_rate: "22.5%",
  },
  {
    id: 9,
    page_url: "/pricing",
    source: "Direct",
    avg_time: "4m 05s",
    page_views: "150",
    bounce_rate: "45.3%",
  },
  {
    id: 10,
    page_url: "/blog/latest-updates",
    source: "Organic",
    avg_time: "6m 30s",
    page_views: "500",
    bounce_rate: "18.9%",
  },
  {
    id: 11,
    page_url: "/contact-us",
    source: "Referral",
    avg_time: "2m 40s",
    page_views: "130",
    bounce_rate: "33.8%",
  },
  {
    id: 12,
    page_url: "/terms-of-service",
    source: "Direct",
    avg_time: "1m 55s",
    page_views: "90",
    bounce_rate: "55.6%",
  },
];

// Main component
const TopBrowsingPagesToday = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(6);
  const [rows, setRows] = useState(initialRows);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState({ column: "", direction: "asc" });

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // Filtering rows based on the search query
  const filteredRows = rows.filter((row) =>
    row.page_url.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Sorting logic
  const handleSort = (column) => {
    const isAscending =
      sortOrder.column === column && sortOrder.direction === "asc";
    const direction = isAscending ? "desc" : "asc";
    const sortedRows = [...filteredRows].sort((a, b) => {
      if (a[column] < b[column]) return direction === "asc" ? -1 : 1;
      if (a[column] > b[column]) return direction === "asc" ? 1 : -1;
      return 0;
    });

    setRows(sortedRows);
    setSortOrder({ column, direction });
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
          sx={{
            fontSize: { xs: "16px", md: "18px" },
            fontWeight: 700,
          }}
        >
          Top Browsing Pages Today
        </Typography>

        <Box>
          <form className="t-search-form">
            <label>
              <i className="material-symbols-outlined">search</i>
            </label>
            <input
              type="text"
              className="t-input"
              placeholder="Search page URL"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </form>
        </Box>
      </Box>

      <TableContainer
        component={Paper}
        sx={{ boxShadow: "none", borderRadius: "0" }}
        className="rmui-table"
      >
        <Table sx={{ minWidth: 650 }} className={styles.tbptTable}>
          <TableHead>
            <TableRow
              sx={{
                th: {
                  padding: "0 14px 7px",
                  fontSize: "12px",
                },
              }}
            >
              <TableCell className="border-bottom">
                <Button
                  onClick={() => handleSort("page_url")}
                  sx={{
                    textTransform: "capitalize",
                    padding: "0",
                  }}
                  className="text-body"
                >
                  Page URL <i className="ri-expand-up-down-fill"></i>
                </Button>
              </TableCell>

              <TableCell className="border-bottom">
                <Button
                  onClick={() => handleSort("source")}
                  sx={{
                    textTransform: "capitalize",
                    padding: "0",
                  }}
                  className="text-body"
                >
                  Source <i className="ri-expand-up-down-fill"></i>
                </Button>
              </TableCell>

              <TableCell className="border-bottom" align="right">
                <Button
                  onClick={() => handleSort("avg_time")}
                  sx={{
                    textTransform: "capitalize",
                    padding: "0",
                  }}
                  className="text-body"
                >
                  Avg Time <i className="ri-expand-up-down-fill"></i>
                </Button>
              </TableCell>

              <TableCell className="border-bottom" align="right">
                <Button
                  onClick={() => handleSort("page_views")}
                  sx={{
                    textTransform: "capitalize",
                    padding: "0",
                  }}
                  className="text-body"
                >
                  Page Views <i className="ri-expand-up-down-fill"></i>
                </Button>
              </TableCell>

              <TableCell className="border-bottom" align="right">
                <Button
                  onClick={() => handleSort("bounce_rate")}
                  sx={{
                    textTransform: "capitalize",
                    padding: "0",
                  }}
                  className="text-body"
                >
                  Bounce Rate <i className="ri-expand-up-down-fill"></i>
                </Button>
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {(filteredRows.length > 0
              ? filteredRows.slice(
                  page * rowsPerPage,
                  page * rowsPerPage + rowsPerPage
                )
              : filteredRows
            ).map((row) => (
              <TableRow
                key={row.id}
                sx={{
                  td: {
                    padding: "10px 14px",
                    fontSize: "14px",
                    fontWeight: "500",
                  },
                }}
              >
                <TableCell className="text-black border-bottom">
                  <a href={row.page_url} className="text-secondary">
                    {row.page_url}
                  </a>
                </TableCell>
                <TableCell className="text-black border-bottom">
                  {row.source}
                </TableCell>
                <TableCell className="text-black border-bottom" align="right">
                  {row.avg_time}
                </TableCell>
                <TableCell className="text-black border-bottom" align="right">
                  {row.page_views}
                </TableCell>
                <TableCell className="text-black border-bottom" align="right">
                  {row.bounce_rate}
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
                rowsPerPageOptions={[5, 10, 25]}
                colSpan={5}
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
    </Card>
  );
};

export default TopBrowsingPagesToday;
