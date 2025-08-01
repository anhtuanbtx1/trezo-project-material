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
  Link,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import AddNewTicket from "./AddNewTicket";

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

function createData(
  id,
  ticketTitle,
  requester,
  assignedTo,
  createdDate,
  dueDate,
  priority,
  status,
  viewDetails
) {
  return {
    id,
    ticketTitle,
    requester,
    assignedTo,
    createdDate,
    dueDate,
    priority,
    status,
    viewDetails,
  };
}

const rows = [
  createData(
    "#JAN-854",
    "Network Infrastructure",
    "Walter Frazier",
    "Oliver Clark",
    "20 Apr 2024",
    "30 Apr 2024",
    "High",
    "finished",
    "/helpdesk/tickets/details"
  ),
  createData(
    "#JAN-853",
    "Cloud Migration",
    "Kimberly Anderson",
    "Ethan Baker",
    "21 Apr 2024",
    "25 Apr 2024",
    "Low",
    "pending",
    "/helpdesk/tickets/details"
  ),
  createData(
    "#JAN-852",
    "Website Revamp",
    "Roscoe Guerrero",
    "Sophia Carter",
    "17 Apr 2024",
    "20 Apr 2024",
    "Medium",
    "inProgress",
    "/helpdesk/tickets/details"
  ),
  createData(
    "#JAN-851",
    "Mobile Application",
    "Robert Stewart",
    "Ava Cooper",
    "10 Apr 2024",
    "15 Apr 2024",
    "High",
    "finished",
    "/helpdesk/tickets/details"
  ),
  createData(
    "#JAN-850",
    "System Deployment",
    "Dustin Fritch",
    "Isabella Evans",
    "05 Apr 2024",
    "10 Apr 2024",
    "Low",
    "cancelled",
    "/helpdesk/tickets/details"
  ),
  createData(
    "#JAN-849",
    "Login Issues",
    "Walter Frazier",
    "Oliver Clark",
    "20 Apr 2024",
    "30 Apr 2024",
    "High",
    "finished",
    "/helpdesk/tickets/details"
  ),
  createData(
    "#JAN-848",
    "Email Configuration",
    "Kimberly Anderson",
    "Ethan Baker",
    "21 Apr 2024",
    "25 Apr 2024",
    "Low",
    "pending",
    "/helpdesk/tickets/details"
  ),
  createData(
    "#JAN-847",
    "Application Error",
    "Roscoe Guerrero",
    "Sophia Carter",
    "17 Apr 2024",
    "20 Apr 2024",
    "Medium",
    "inProgress",
    "/helpdesk/tickets/details"
  ),
  createData(
    "#JAN-846",
    "Software Installation",
    "Robert Stewar",
    "Ava Coope",
    "10 Apr 2024",
    "15 Apr 2024",
    "High",
    "finished",
    "/helpdesk/tickets/details"
  ),
  createData(
    "#JAN-845",
    "System Upgrade",
    "Dustin Fritch",
    "Isabella Evans",
    "05 Apr 2024",
    "10 Apr 2024",
    "Low",
    "cancelled",
    "/helpdesk/tickets/details"
  ),
  createData(
    "#JAN-844",
    "Network Infrastructure",
    "Walter Frazier",
    "Anderson Clark",
    "20 Apr 2024",
    "30 Apr 2024",
    "High",
    "finished",
    "/helpdesk/tickets/details"
  ),
  createData(
    "#JAN-843",
    "Cloud Migration",
    "Wilson",
    "Ethan Baker",
    "21 Apr 2024",
    "25 Apr 2024",
    "Low",
    "pending",
    "/helpdesk/tickets/details"
  ),
  createData(
    "#JAN-842",
    "Website Revamp",
    "Gagnon Guerrero",
    "Sophia Carter",
    "17 Apr 2024",
    "20 Apr 2024",
    "Medium",
    "inProgress",
    "/helpdesk/tickets/details"
  ),
  createData(
    "#JAN-841",
    "Mobile Application",
    "Lee Stewart",
    "Ava Cooper",
    "10 Apr 2024",
    "15 Apr 2024",
    "High",
    "finished",
    "/helpdesk/tickets/details"
  ),
  createData(
    "#JAN-839",
    "System Deployment",
    "Dustin Fritch",
    "Tremblay Evans",
    "05 Apr 2024",
    "10 Apr 2024",
    "Low",
    "cancelled",
    "/helpdesk/tickets/details"
  ),
  createData(
    "#JAN-838",
    "Login Issues",
    "Walter Frazier",
    "Roy Clark",
    "20 Apr 2024",
    "30 Apr 2024",
    "High",
    "finished",
    "/helpdesk/tickets/details"
  ),
  createData(
    "#JAN-837",
    "Email Configuration",
    "Kimberly Anderson",
    "Gelbero Baker",
    "21 Apr 2024",
    "25 Apr 2024",
    "Low",
    "pending",
    "/helpdesk/tickets/details"
  ),
  createData(
    "#JAN-836",
    "Application Error",
    "Roscoe Guerrero",
    "Martin Carter",
    "17 Apr 2024",
    "20 Apr 2024",
    "Medium",
    "inProgress",
    "/helpdesk/tickets/details"
  ),
  createData(
    "#JAN-835",
    "Software Installation",
    "Williams Stewar",
    "Ava Coope",
    "10 Apr 2024",
    "15 Apr 2024",
    "High",
    "finished",
    "/helpdesk/tickets/details"
  ),
  createData(
    "#JAN-834",
    "System Upgrade",
    "Dustin Fritch",
    "Morton Evans",
    "05 Apr 2024",
    "10 Apr 2024",
    "Low",
    "cancelled",
    "/helpdesk/tickets/details"
  ),
].sort((b, a) => (a.id < b.id ? -1 : 1));

const AllTickets = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  // Calculate empty rows for pagination
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
          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: "16px", md: "18px" },
              fontWeight: 700,
            }}
            className="text-black"
          >
            All Tickets
          </Typography>

          <AddNewTicket />
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
          <Table sx={{ minWidth: 1100 }} aria-label="Table">
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
                <TableCell className="text-black border-bottom">ID</TableCell>

                <TableCell className="text-black border-bottom">
                  Ticket Title
                </TableCell>

                <TableCell className="text-black border-bottom">
                  Requester
                </TableCell>

                <TableCell className="text-black border-bottom">
                  Assigned To
                </TableCell>

                <TableCell className="text-black border-bottom">
                  Created Date
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
                      padding: "15px 20px",
                      fontSize: "14px",
                    },
                  }}
                >
                  <TableCell className="border-bottom">{row.id}</TableCell>

                  <TableCell className="border-bottom" sx={{ fontWeight: 500 }}>
                    {row.ticketTitle}
                  </TableCell>

                  <TableCell className="border-bottom text-black">
                    {row.requester}
                  </TableCell>

                  <TableCell className="border-bottom text-black">
                    {row.assignedTo}
                  </TableCell>

                  <TableCell className="border-bottom">
                    {row.createdDate}
                  </TableCell>

                  <TableCell className="border-bottom">{row.dueDate}</TableCell>

                  <TableCell className="border-bottom">
                    {row.priority}
                  </TableCell>

                  <TableCell className="border-bottom">
                    <div
                      className={`trezo-badge ${row.status}`}
                      style={{ textTransform: "capitalize" }}
                    >
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
                      <Link href={row.viewDetails}>
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
                  <TableCell className="border-bottom" colSpan={9} />
                </TableRow>
              )}
            </TableBody>

            <TableFooter>
              <TableRow>
                <TablePagination
                  rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
                  colSpan={9}
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
      </Card>
    </>
  );
};

export default AllTickets;
