"use client";

import React, { useState } from "react";
import {
  Card,
  Box,
  Typography,
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
  Menu,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import styles from "./ClicksByKeywords.module.css";

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

// Sample data
const rows = [
  {
    id: 1,
    dimension: "data metrics",
    impressionsIcon: "bx-trending-up",
    impressionsNumber: 949,
    clicksIcon: "bx-trending-down",
    clicksNumber: 656,
  },
  {
    id: 2,
    dimension: "sales metric",
    impressionsIcon: "bx-trending-down",
    impressionsNumber: 842,
    clicksIcon: "bx-trending-up",
    clicksNumber: 420,
  },
  {
    id: 3,
    dimension: "analytics dashboard",
    impressionsIcon: "bx-trending-up",
    impressionsNumber: 640,
    clicksIcon: "bx-trending-down",
    clicksNumber: 534,
  },
  {
    id: 4,
    dimension: "saas metrics",
    impressionsIcon: "bx-trending-up",
    impressionsNumber: 865,
    clicksIcon: "bx-trending-up",
    clicksNumber: 560,
  },
  {
    id: 5,
    dimension: "hubspot analytics",
    impressionsIcon: "bx-trending-down",
    impressionsNumber: 435,
    clicksIcon: "bx-trending-up",
    clicksNumber: 328,
  },
  {
    id: 6,
    dimension: "smart goals",
    impressionsIcon: "bx-trending-up",
    impressionsNumber: 756,
    clicksIcon: "bx-trending-down",
    clicksNumber: 235,
  },
  {
    id: 7,
    dimension: "google analytics",
    impressionsIcon: "bx-trending-up",
    impressionsNumber: 578,
    clicksIcon: "bx-trending-up",
    clicksNumber: 456,
  },
  {
    id: 8,
    dimension: "trezo dashboard",
    impressionsIcon: "bx-trending-up",
    impressionsNumber: 660,
    clicksIcon: "bx-trending-down",
    clicksNumber: 478,
  },
  {
    id: 9,
    dimension: "analytics dashboard",
    impressionsIcon: "bx-trending-up",
    impressionsNumber: 640,
    clicksIcon: "bx-trending-down",
    clicksNumber: 534,
  },
  {
    id: 10,
    dimension: "data metrics",
    impressionsIcon: "bx-trending-up",
    impressionsNumber: 949,
    clicksIcon: "bx-trending-down",
    clicksNumber: 656,
  },
  {
    id: 11,
    dimension: "sales metric",
    impressionsIcon: "bx-trending-down",
    impressionsNumber: 842,
    clicksIcon: "bx-trending-up",
    clicksNumber: 420,
  },
  {
    id: 12,
    dimension: "saas metrics",
    impressionsIcon: "bx-trending-up",
    impressionsNumber: 865,
    clicksIcon: "bx-trending-up",
    clicksNumber: 560,
  },
  {
    id: 13,
    dimension: "google analytics",
    impressionsIcon: "bx-trending-up",
    impressionsNumber: 578,
    clicksIcon: "bx-trending-up",
    clicksNumber: 456,
  },
  {
    id: 14,
    dimension: "trezo dashboard",
    impressionsIcon: "bx-trending-up",
    impressionsNumber: 660,
    clicksIcon: "bx-trending-down",
    clicksNumber: 478,
  },
  {
    id: 15,
    dimension: "hubspot analytics",
    impressionsIcon: "bx-trending-down",
    impressionsNumber: 435,
    clicksIcon: "bx-trending-up",
    clicksNumber: 328,
  },
  {
    id: 16,
    dimension: "smart goals",
    impressionsIcon: "bx-trending-up",
    impressionsNumber: 756,
    clicksIcon: "bx-trending-down",
    clicksNumber: 235,
  },
];

const ClicksByKeywords = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(8);

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
        >
          Clicks/Impressions by Keywords
        </Typography>

        <Box>
          <IconButton
            onClick={handleClick}
            size="small"
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
            open={open}
            onClose={handleClose}
            PaperProps={{
              elevation: 0,
              sx: { overflow: "visible", boxShadow: "0 4px 45px #0000001a" },
            }}
          >
            <MenuItem>Sep 01 - Sep 30, 2024</MenuItem>
            <MenuItem>Aug 01 - Aug 31, 2024</MenuItem>
          </Menu>
        </Box>
      </Box>

      <TableContainer
        component={Paper}
        sx={{ boxShadow: "none", borderRadius: "0" }}
        className="rmui-table cikTable"
      >
        <Table sx={{ minWidth: 650 }} className={styles.cikTable}>
          <TableHead>
            <TableRow
              sx={{
                th: {
                  padding: "0 14px 7px",
                  fontSize: "12px",
                  width: "30px",
                },
              }}
            >
              <TableCell className="border-bottom">#</TableCell>
              <TableCell className="border-bottom">Dimension</TableCell>
              <TableCell className="border-bottom" align="right">
                Impressions
              </TableCell>
              <TableCell className="border-bottom" align="right">
                Clicks
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
                    padding: "11px 14px",
                    fontSize: "14px",
                    fontWeight: "500",
                  },
                }}
              >
                <TableCell className="text-black border-bottom">
                  {row.id}
                </TableCell>

                <TableCell className="text-black border-bottom">
                  {row.dimension}
                </TableCell>

                <TableCell className="text-black border-bottom" align="right">
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-end",
                      gap: "6px",
                    }}
                  >
                    <i
                      className={`bx ${row.impressionsIcon}`}
                      style={{ fontSize: "20px" }}
                    ></i>
                    {row.impressionsNumber}
                  </Box>
                </TableCell>

                <TableCell className="text-black border-bottom" align="right">
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-end",
                      gap: "6px",
                    }}
                  >
                    <i
                      className={`bx ${row.clicksIcon}`}
                      style={{ fontSize: "20px" }}
                    ></i>
                    {row.clicksNumber}
                  </Box>
                </TableCell>
              </TableRow>
            ))}
            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell className="border-bottom" colSpan={4} />
              </TableRow>
            )}
          </TableBody>

          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                colSpan={4}
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

export default ClicksByKeywords;
