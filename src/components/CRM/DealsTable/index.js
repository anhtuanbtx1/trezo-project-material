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
import { useTheme } from "@mui/material/styles";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import AddNewDeal from "./AddNewDeal";
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

// Helper function to create row data
function createData(
  id,
  companyName,
  contactPerson,
  amount,
  stage,
  probability,
  createdAt,
  closeDate
) {
  return {
    id,
    companyName,
    contactPerson,
    amount,
    stage,
    probability,
    createdAt,
    closeDate,
  };
}

const initialRows = [
  createData(
    "#854",
    "Tech Solutions",
    "Shawn Kennedy",
    "oliver@trezo.com",
    "$25,000.00",
    80,
    "15 Nov 2024",
    "08 Nov 2024 10:30 AM"
  ),
  createData(
    "#853",
    "Acma Industries",
    "Roberto Cruz",
    "$15,000.00",
    "Presentation",
    50,
    "14 Nov 2024",
    "09 Nov 2024 02:15 PM"
  ),
  createData(
    "#852",
    "Synergy Ltd",
    "Juli Johnson",
    "$30,000.00",
    "Negotiation",
    75,
    "13 Nov 2024",
    "10 Nov 2024 09:45 AM"
  ),
  createData(
    "#851",
    "Tech Enterprises",
    "Catalina Engles",
    "$20,000.00",
    "Discovery",
    90,
    "12 Nov 2024",
    "11 Nov 2024 03:45 PM"
  ),
  createData(
    "#850",
    "Synetic Solutions",
    "Louis Nagle",
    "$40,000.00",
    "Contract Sent",
    60,
    "13 Nov 2024",
    "12 Nov 2024 01:00 PM"
  ),
  createData(
    "#849",
    "GlobalTech Solutions",
    "Patrick Madsen",
    "$50,000.00",
    "Proposal",
    55,
    "19 Nov 2024",
    "13 Nov 2024 01:00 PM"
  ),
  createData(
    "#848",
    "Quantum Solutions",
    "Lillian McCreary",
    "$45,000.00",
    "Negotiation",
    79,
    "26 Nov 2024",
    "14 Nov 2024 01:00 PM"
  ),
  createData(
    "#847",
    "Synetic Pinnacle Ltd",
    "Beverly Caulkins",
    "$35,000.00",
    "Presentation",
    85,
    "23 Nov 2024",
    "15 Nov 2024 01:00 PM"
  ),
  createData(
    "#846",
    "IT Solutions",
    "Alina Smith",
    "$23,423.00",
    "Proposal",
    11,
    "14 Nov 2024",
    "08 Nov 2024 10:30 AM"
  ),
  createData(
    "#845",
    "Trezo Admin",
    "David Warner",
    "$12,421.00",
    "Discovery",
    53,
    "11 Nov 2024",
    "07 Nov 2024 10:30 AM"
  ),
  createData(
    "#845",
    "Trezo Admin",
    "David Warner",
    "$12,421.00",
    "Discovery",
    53,
    "11 Nov 2024",
    "07 Nov 2024 10:30 AM"
  ),
  createData(
    "#844",
    "HiTech",
    "Alina Smith",
    "$23,423.00",
    "Proposal",
    11,
    "14 Nov 2024",
    "08 Nov 2024 10:30 AM"
  ),
  createData(
    "#843",
    "Tech Solutions",
    "Shawn Kennedy",
    "oliver@trezo.com",
    "$25,000.00",
    80,
    "15 Nov 2024",
    "08 Nov 2024 10:30 AM"
  ),
  createData(
    "#842",
    "Acma Industries",
    "Roberto Cruz",
    "$15,000.00",
    "Presentation",
    50,
    "14 Nov 2024",
    "09 Nov 2024 02:15 PM"
  ),
  createData(
    "#841",
    "Synergy Ltd",
    "Juli Johnson",
    "$30,000.00",
    "Negotiation",
    75,
    "13 Nov 2024",
    "10 Nov 2024 09:45 AM"
  ),
  createData(
    "#840",
    "Tech Enterprises",
    "Catalina Engles",
    "$20,000.00",
    "Discovery",
    90,
    "12 Nov 2024",
    "11 Nov 2024 03:45 PM"
  ),
  createData(
    "#839",
    "Synetic Solutions",
    "Louis Nagle",
    "$40,000.00",
    "Contract Sent",
    60,
    "13 Nov 2024",
    "12 Nov 2024 01:00 PM"
  ),
  createData(
    "#838",
    "GlobalTech Solutions",
    "Patrick Madsen",
    "$50,000.00",
    "Proposal",
    55,
    "19 Nov 2024",
    "13 Nov 2024 01:00 PM"
  ),
  createData(
    "#837",
    "Quantum Solutions",
    "Lillian McCreary",
    "$45,000.00",
    "Negotiation",
    79,
    "26 Nov 2024",
    "14 Nov 2024 01:00 PM"
  ),
  createData(
    "#836",
    "Synetic Pinnacle Ltd",
    "Beverly Caulkins",
    "$35,000.00",
    "Presentation",
    85,
    "23 Nov 2024",
    "15 Nov 2024 01:00 PM"
  ),
  createData(
    "#835",
    "IT Solutions",
    "Alina Smith",
    "$23,423.00",
    "Proposal",
    11,
    "14 Nov 2024",
    "08 Nov 2024 10:30 AM"
  ),
  createData(
    "#834",
    "Trezo Admin",
    "David Warner",
    "$12,421.00",
    "Discovery",
    53,
    "11 Nov 2024",
    "07 Nov 2024 10:30 AM"
  ),
  createData(
    "#833",
    "Trezo Admin",
    "David Warner",
    "$12,421.00",
    "Discovery",
    53,
    "11 Nov 2024",
    "07 Nov 2024 10:30 AM"
  ),
  createData(
    "#832",
    "ET Admin",
    "Alina Smith",
    "$23,423.00",
    "Proposal",
    11,
    "14 Nov 2024",
    "08 Nov 2024 10:30 AM"
  ),
].sort((b, a) => (a.id < b.id ? -1 : 1));

const DealsTable = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState(""); // State for search term

  // Filter rows based on the search term
  const filteredRows = initialRows.filter((row) =>
    Object.values(row)
      .join(" ")
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

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
          <Box
            component="form"
            className="t-search-form"
            sx={{
              width: { sm: "265px" },
            }}
          >
            <label>
              <i className="material-symbols-outlined">search</i>
            </label>
            <input
              type="text"
              className="t-input"
              placeholder="Search deals here....."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)} // Update search term
            />
          </Box>

          <AddNewDeal />
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
            <Table sx={{ minWidth: 1350 }} aria-label="Table">
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
                  <TableCell
                    sx={{
                      padding: "10px 24px !important",
                    }}
                    className="text-black border-bottom"
                  >
                    #
                  </TableCell>

                  <TableCell className="text-black border-bottom">ID</TableCell>

                  <TableCell className="text-black border-bottom">
                    Company Name
                  </TableCell>

                  <TableCell className="text-black border-bottom">
                    Contact Person
                  </TableCell>

                  <TableCell className="text-black border-bottom">
                    Amount
                  </TableCell>

                  <TableCell className="text-black border-bottom">
                    Stage
                  </TableCell>

                  <TableCell className="text-black border-bottom">
                    Probability
                  </TableCell>

                  <TableCell className="text-black border-bottom">
                    Created At
                  </TableCell>

                  <TableCell className="text-black border-bottom">
                    Close Date
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
                        padding: "15px 20px",
                        fontSize: "14px",
                      },
                    }}
                  >
                    <TableCell
                      sx={{
                        padding: "5px 13px !important",
                        width: "65px",
                      }}
                      className="border-bottom"
                    >
                      <Checkbox {...label} sx={{ padding: "8px" }} />
                    </TableCell>

                    <TableCell className="border-bottom">{row.id}</TableCell>

                    <TableCell className="text-black border-bottom">
                      {row.companyName}
                    </TableCell>

                    <TableCell className="text-black border-bottom">
                      {row.contactPerson}
                    </TableCell>

                    <TableCell className="border-bottom">
                      {row.amount}
                    </TableCell>

                    <TableCell className="border-bottom">{row.stage}</TableCell>

                    <TableCell className="border-bottom">
                      {row.probability}%
                    </TableCell>

                    <TableCell className="border-bottom">
                      {row.createdAt}
                    </TableCell>

                    <TableCell className="border-bottom">
                      {row.closeDate}
                    </TableCell>

                    <TableCell className="border-bottom">
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
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
                    <TableCell className="border-bottom" colSpan={10} />
                  </TableRow>
                )}
              </TableBody>

              <TableFooter>
                <TableRow>
                  <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    colSpan={10}
                    count={filteredRows.length}
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
    </>
  );
};

export default DealsTable;
