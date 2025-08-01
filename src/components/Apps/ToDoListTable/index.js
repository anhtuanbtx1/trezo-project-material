"use client";

import React, { useState } from "react";
import {
  Card,
  Box,
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
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import AddNewTaskModal from "./AddNewTaskModal";
const label = { inputProps: { "aria-label": "Checkbox demo" } };

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
  id,
  ticketTitle,
  assignedTo,
  dueDate,
  priority,
  status,
  viewLink
) {
  return { id, ticketTitle, assignedTo, dueDate, priority, status, viewLink };
}

const rows = [
  createData(
    "#850",
    "Network Infrastructure",
    "Oliver Clark",
    "30 Apr 2024",
    "High",
    "Finished",
    "/helpdesk/tickets/details"
  ),
  createData(
    "#851",
    "Cloud Migration",
    "Ethan Baker",
    "25 Apr 2024",
    "Low",
    "Pending",
    "/helpdesk/tickets/details"
  ),
  createData(
    "#852",
    "Website Revamp",
    "Sophia Carter",
    "20 Apr 2024",
    "Medium",
    "In Progress",
    "/helpdesk/tickets/details"
  ),
  createData(
    "#853",
    "Mobile Application",
    "Ava Cooper",
    "15 Apr 2024",
    "High",
    "Finished",
    "/helpdesk/tickets/details"
  ),
  createData(
    "#854",
    "System Deployment",
    "Isabella Evans",
    "10 Apr 2024",
    "Low",
    "Cancelled",
    "/helpdesk/tickets/details"
  ),
  createData(
    "#855",
    "Network Infrastructure",
    "Oliver Clark",
    "30 Apr 2024",
    "High",
    "Finished",
    "/helpdesk/tickets/details"
  ),
  createData(
    "#856",
    "Cloud Migration",
    "Ethan Baker",
    "25 Apr 2024",
    "Low",
    "Pending",
    "/helpdesk/tickets/details"
  ),
  createData(
    "#857",
    "Website Revamp",
    "Sophia Carter",
    "20 Apr 2024",
    "Medium",
    "In Progress",
    "/helpdesk/tickets/details"
  ),
  createData(
    "#858",
    "Mobile Application",
    "Ava Cooper",
    "15 Apr 2024",
    "High",
    "Finished",
    "/helpdesk/tickets/details"
  ),
  createData(
    "#869",
    "System Deployment",
    "Isabella Evans",
    "10 Apr 2024",
    "Low",
    "Cancelled",
    "/helpdesk/tickets/details"
  ),
  createData(
    "#870",
    "Hotel Management System",
    "Jhon Evans",
    "15 Apr 2024",
    "High",
    "Finished",
    "/helpdesk/tickets/details"
  ),
  createData(
    "#871",
    "Send Proposal to APR Ltd",
    "Roberto Cruz",
    "25 Apr 2024",
    "Low",
    "Pending",
    "/helpdesk/tickets/details"
  ),
  createData(
    "#872",
    "Python Upgrade",
    "Juli Johnso",
    "20 Apr 2024",
    "Medium",
    "In Progress",
    "/helpdesk/tickets/details"
  ),
  createData(
    "#873",
    "Schedule meeting with Trezo",
    "Catalina Engles",
    "15 Apr 2024",
    "High",
    "Finished",
    "/helpdesk/tickets/details"
  ),
  createData(
    "#874",
    "Engineering Lite Touch",
    "Louis Nagle",
    "10 Apr 2024",
    "Low",
    "Cancelled",
    "/helpdesk/tickets/details"
  ),
].sort((b, a) => (a.id < b.id ? -1 : 1));

const ToDoList = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [searchQuery, setSearchQuery] = useState("");

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const filteredRows = rows.filter(
    (row) =>
      row.ticketTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      row.assignedTo.toLowerCase().includes(searchQuery.toLowerCase()) ||
      row.id.toLowerCase().includes(searchQuery.toLowerCase())
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
              placeholder="Search task here..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </form>

          <AddNewTaskModal />
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
            <Table sx={{ minWidth: 1000 }} aria-label="To Do List Table">
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
                  <TableCell className="text-black border-bottom">#</TableCell>

                  <TableCell className="text-black border-bottom">ID</TableCell>

                  <TableCell className="text-black border-bottom">
                    Ticket Title
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
                    key={row.id}
                    sx={{
                      td: {
                        padding: "10px 20px",
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
                      <Checkbox {...label} sx={{ padding: "8px" }} />
                    </TableCell>

                    <TableCell className="border-bottom">{row.id}</TableCell>

                    <TableCell className="border-bottom">
                      {row.ticketTitle}
                    </TableCell>

                    <TableCell className="text-black border-bottom">
                      {row.assignedTo}
                    </TableCell>

                    <TableCell className="border-bottom">
                      {row.dueDate}
                    </TableCell>

                    <TableCell className="border-bottom">
                      {row.priority}
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
                        </Link>

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

export default ToDoList;
