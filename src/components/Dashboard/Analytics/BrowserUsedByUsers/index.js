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
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import styles from "./BrowserUsedByUsers.module.css";

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

// Browser Data
const rows = [
  {
    id: 1,
    browserImg: "/images/browsers/google-chrome.svg",
    browserName: "Google Chrome",
    users: "58.4%",
    sessions: "12,345",
    bounceRate: "34.2%",
    avgsDuration: "3m 15s",
  },
  {
    id: 2,
    browserImg: "/images/browsers/safari.svg",
    browserName: "Safari",
    users: "25.1%",
    sessions: "5,289",
    bounceRate: "40.5%",
    avgsDuration: "2m 45s",
  },
  {
    id: 3,
    browserImg: "/images/browsers/microsoft-edge.svg",
    browserName: "Microsoft Edge",
    users: "10.2%",
    sessions: "2,134",
    bounceRate: "29.8%",
    avgsDuration: "4m 05s",
  },
  {
    id: 4,
    browserImg: "/images/browsers/mozilla-firefox.svg",
    browserName: "Mozilla Firefox",
    users: "4.3%",
    sessions: "897",
    bounceRate: "38.0%",
    avgsDuration: "3m 00s",
  },
  {
    id: 5,
    browserImg: "/images/browsers/opera-mini.svg",
    browserName: "Opera Mini",
    users: "1.5%",
    sessions: "315",
    bounceRate: "35.7%",
    avgsDuration: "2m 30s",
  },
  {
    id: 6,
    browserImg: "/images/browsers/others.svg",
    browserName: "Others",
    users: "0.5%",
    sessions: "105",
    bounceRate: "42.1%",
    avgsDuration: "2m 10s",
  },
  {
    id: 7,
    browserImg: "/images/browsers/microsoft-edge.svg",
    browserName: "Microsoft Edge",
    users: "10.2%",
    sessions: "2,134",
    bounceRate: "29.8%",
    avgsDuration: "4m 05s",
  },
  {
    id: 8,
    browserImg: "/images/browsers/google-chrome.svg",
    browserName: "Google Chrome",
    users: "58.4%",
    sessions: "12,345",
    bounceRate: "34.2%",
    avgsDuration: "3m 15s",
  },
  {
    id: 9,
    browserImg: "/images/browsers/safari.svg",
    browserName: "Safari",
    users: "25.1%",
    sessions: "5,289",
    bounceRate: "40.5%",
    avgsDuration: "2m 45s",
  },
  {
    id: 10,
    browserImg: "/images/browsers/mozilla-firefox.svg",
    browserName: "Mozilla Firefox",
    users: "4.3%",
    sessions: "897",
    bounceRate: "38.0%",
    avgsDuration: "3m 00s",
  },
  {
    id: 11,
    browserImg: "/images/browsers/others.svg",
    browserName: "Others",
    users: "0.5%",
    sessions: "105",
    bounceRate: "42.1%",
    avgsDuration: "2m 10s",
  },
  {
    id: 12,
    browserImg: "/images/browsers/opera-mini.svg",
    browserName: "Opera Mini",
    users: "1.5%",
    sessions: "315",
    bounceRate: "35.7%",
    avgsDuration: "2m 30s",
  },
].sort((b, a) => (a.id < b.id ? -1 : 1));

// Main Component
const BrowserUsedByUsers = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(6);

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
          sx={{
            fontSize: { xs: "16px", md: "18px" },
            fontWeight: 700,
          }}
          className="text-black"
        >
          Browser Used By Users
        </Typography>

        <Box>
          <IconButton
            onClick={handleClick}
            size="small"
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            sx={{
              borderRadius: "0px",
              padding: "1px 2px",
              fontSize: "14px",
            }}
          >
            Oct 01 - Oct 31, 2024{" "}
            <KeyboardArrowDownIcon sx={{ fontSize: "20px" }} />
          </IconButton>

          <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
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
            <MenuItem>Sep 01 - Sep 30, 2024</MenuItem>
            <MenuItem>Aug 01 - Aug 31, 2024</MenuItem>
            <MenuItem>Jul 01 - Jul 31, 2024</MenuItem>
          </Menu>
        </Box>
      </Box>

      <TableContainer
        component={Paper}
        sx={{
          boxShadow: "none",
          borderRadius: "0",
        }}
        className="rmui-table"
      >
        <Table sx={{ minWidth: 650 }} className={styles.usersTable}>
          <TableHead>
            <TableRow
              sx={{
                th: {
                  padding: "0 14px 7px",
                  fontSize: "12px", 
                },
              }}
            >
              <TableCell sx={{ textAlign: "center" }} className="border-bottom">
                Browser
              </TableCell>
              <TableCell sx={{ textAlign: "end" }} className="border-bottom">
                Users (%)
              </TableCell>
              <TableCell sx={{ textAlign: "end" }} className="border-bottom">
                Sessions
              </TableCell>
              <TableCell sx={{ textAlign: "end" }} className="border-bottom">
                Bounce Rate (%)
              </TableCell>
              <TableCell sx={{ textAlign: "end" }} className="border-bottom">
                Avg. Session Duration
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {(rowsPerPage > 0
              ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : rows
            ).map((row) => (
              <TableRow
                key={row.id}
                sx={{
                  td: {
                    padding: "10px 14px",
                    fontSize: "14px",
                  },
                }}
              >
                <TableCell className="text-black border-bottom">
                  <Box
                    sx={{ display: "flex", alignItems: "center", gap: "10px" }}
                  >
                    <img
                      src={row.browserImg}
                      alt={row.browserName}
                      width={16}
                      height={16}
                      style={{ borderRadius: "100px" }}
                    />
                    <Typography
                      sx={{
                        fontWeight: "500",
                      }}
                    >
                      {row.browserName}
                    </Typography>
                  </Box>
                </TableCell>

                <TableCell
                  className="text-black border-bottom"
                  sx={{
                    textAlign: "end",
                    fontWeight: "500",
                  }}
                >
                  {row.users}
                </TableCell>

                <TableCell
                  className="text-black border-bottom"
                  sx={{
                    textAlign: "end",
                    fontWeight: "500",
                  }}
                >
                  {row.sessions}
                </TableCell>

                <TableCell
                  className="text-black border-bottom"
                  sx={{
                    textAlign: "end",
                    fontWeight: "500",
                  }}
                >
                  {row.bounceRate}
                </TableCell>

                <TableCell
                  className="text-black border-bottom"
                  sx={{
                    textAlign: "end",
                    fontWeight: "500",
                  }}
                >
                  {row.avgsDuration}
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

export default BrowserUsedByUsers;
