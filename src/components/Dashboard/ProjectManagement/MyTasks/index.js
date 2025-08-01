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
  Checkbox,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import PropTypes from "prop-types";
import CustomDropdown from "./CustomDropdown";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

// Pagination Actions Component
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

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

// Helper to create row data
function createData(id, projectName, deadline, status) {
  return {
    id,
    projectName,
    deadline,
    status,
  };
}

// Sample rows
const rows = [
  createData(1, "Web Development", "10 Jan 2024", "Completed"),
  createData(2, "UX/UI Design", "05 Feb 2024", "In Progress"),
  createData(3, "React Development", "28 Mar 2024", "Cancelled"),
  createData(4, "Python Research", "09 Mar 2024", "Pending"),
  createData(5, "UX/UI Design", "05 Feb 2024", "In Progress"),
  createData(6, "Web Development", "10 Jan 2024", "Completed"),
  createData(7, "React Development", "28 Mar 2024", "Cancelled"),
  createData(8, "Python Research", "09 Mar 2024", "Pending"),
].sort((b, a) => (a.id < b.id ? -1 : 1));

// Main Component
function MyTasks() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(4);

  // Avoid a layout jump when reaching the last page with empty rows
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
          My Tasks
        </Typography>

        <Box>
          <CustomDropdown
            options={["This Day", "This Week", "This Month", "This Year"]}
            onSelect={(value) => console.log(value)}
            defaultLabel="All Tasks"
          />
        </Box>
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
          sx={{
            boxShadow: "none",
            borderRadius: "0",
          }}
          className="rmui-table"
        >
          <Table sx={{ minWidth: 500 }} aria-label="Table">
            <TableHead className="bg-primary-50">
              <TableRow
                sx={{
                  th: {
                    fontWeight: "500",
                    padding: "10px 24px",
                    fontSize: "14px",
                  },
                }}
              >
                <TableCell className="text-black border-bottom">#</TableCell>
                <TableCell className="text-black border-bottom">
                  Project Name
                </TableCell>
                <TableCell className="text-black border-bottom">
                  Deadline
                </TableCell>
                <TableCell className="text-black border-bottom">
                  Status
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {(rowsPerPage > 0
                ? rows.slice(
                    page * rowsPerPage,
                    page * rowsPerPage + rowsPerPage
                  )
                : rows
              ).map((row) => (
                <TableRow
                  key={row.id}
                  sx={{
                    td: {
                      padding: "9px 13px",
                      fontSize: "14px",
                    },
                  }}
                >
                  <TableCell
                    sx={{
                      width: "65px",
                    }}
                    className="border-bottom"
                  >
                    <Checkbox {...label} />
                  </TableCell>
                  <TableCell className="text-black border-bottom">
                    <Typography
                      sx={{
                        fontWeight: "500",
                      }}
                      className="text-black"
                    >
                      {row.projectName}
                    </Typography>
                  </TableCell>
                  <TableCell className="text-black border-bottom">
                    {row.deadline}
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
                  <TableCell className="border-bottom" colSpan={4} />
                </TableRow>
              )}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TablePagination
                  rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
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
      </Box>
    </Card>
  );
}

export default MyTasks;
