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
import AddNewTaskModal from "./AddNewTaskModal";

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
function createData(id, taskTitle, assignedTo, dueDate, priority, status) {
  return {
    id,
    taskTitle,
    assignedTo,
    dueDate,
    priority,
    status,
  };
}

// Sample rows
const rows = [
  createData(
    "#850",
    "Network Infrastructure",
    "Oliver Clark",
    "30 Apr 2024",
    "High",
    "Finished"
  ),
  createData(
    "#851",
    "Cloud Migration",
    "Ethan Baker",
    "25 Apr 2024",
    "Low",
    "Pending"
  ),
  createData(
    "#852",
    "Website Revamp",
    "Sophia Carter",
    "20 Apr 2024",
    "Medium",
    "In Progress"
  ),
  createData(
    "#853",
    "Mobile Application",
    "Ava Cooper",
    "15 Apr 2024",
    "High",
    "Finished"
  ),
  createData(
    "#854",
    "System Deployment",
    "Isabella Evans",
    "10 Apr 2024",
    "Low",
    "Cancelled"
  ),
  createData(
    "#855",
    "Network Infrastructure",
    "Oliver Clark",
    "30 Apr 2024",
    "High",
    "Finished"
  ),
  createData(
    "#856",
    "Website Revamp",
    "Sophia Carter",
    "20 Apr 2024",
    "Medium",
    "In Progress"
  ),
  createData(
    "#857",
    "System Deployment",
    "Isabella Evans",
    "10 Apr 2024",
    "Low",
    "Cancelled"
  ),
  createData(
    "#858",
    "Mobile Application",
    "Ava Cooper",
    "15 Apr 2024",
    "High",
    "Finished"
  ),
  createData(
    "#859",
    "Cloud Migration",
    "Ethan Baker",
    "25 Apr 2024",
    "Low",
    "Pending"
  ),
].sort((b, a) => (a.id < b.id ? -1 : 1));

// Main Component
function ToDoList() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [searchQuery, setSearchQuery] = useState("");

  // Filter rows based on search query
  const filteredRows = rows.filter((row) => {
    return (
      row.taskTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      row.assignedTo.toLowerCase().includes(searchQuery.toLowerCase()) ||
      row.id.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  // Avoid a layout jump when reaching the last page with empty rows
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - filteredRows.length) : 0;

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
          To Do List
        </Typography>
        <Box
          sx={{
            display: { xs: "block", sm: "flex" },
            alignItems: "center",
            gap: "10px",
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
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </form>

          {/* AddNewTaskModal */}
          <AddNewTaskModal />
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
          <Table sx={{ minWidth: 950 }} aria-label="To Do List Table">
            <TableHead className="bg-primary-50">
              <TableRow
                sx={{
                  "& th": {
                    fontWeight: "500",
                    padding: "10px 20px",
                    fontSize: "14px",
                  },
                }}
              >
                <TableCell className="text-black border-bottom">#</TableCell>
                <TableCell className="text-black border-bottom">ID</TableCell>
                <TableCell className="text-black border-bottom">
                  Task Title
                </TableCell>
                <TableCell className="text-black border-bottom">
                  Assigned To
                </TableCell>
                <TableCell className="text-black border-bottom">
                  Due Date
                </TableCell>
                <TableCell className="text-black border-bottom">
                  Priority
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
                  sx={{
                    "& td": {
                      padding: "8.5px 20px",
                      fontSize: "14px",
                    },
                  }}
                  key={row.id}
                >
                  <TableCell
                    sx={{ padding: "8.5px 10px !important", width: "50px" }}
                    className="border-bottom"
                  >
                    <Checkbox {...label} sx={{ padding: "8px" }} />
                  </TableCell>

                  <TableCell className="border-bottom">{row.id}</TableCell>

                  <TableCell className="border-bottom">
                    {row.taskTitle}
                  </TableCell>

                  <TableCell className="text-black border-bottom">
                    {row.assignedTo}
                  </TableCell>

                  <TableCell className="border-bottom">{row.dueDate}</TableCell>

                  <TableCell className="border-bottom">
                    {row.priority}
                  </TableCell>

                  <TableCell className="border-bottom">
                    <div className={`trezo-badge ${row.status}`}>
                      {row.status}
                    </div>
                  </TableCell>
                  
                  <TableCell className="border-bottom">
                    <Box sx={{ display: "flex", alignItems: "center" }}>
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
                  rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
                  colSpan={8}
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

export default ToDoList;
