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
import AddNewLead from "./AddNewLead";
const label = { inputProps: { "aria-label": "Checkbox demo" } };

// Pagination Component
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

// Data Creation Function
function createData(
  id,
  customerImg,
  customerName,
  email,
  phone,
  createdDate,
  company,
  leadScore,
  status
) {
  return {
    id,
    customerImg,
    customerName,
    email,
    phone,
    createdDate,
    company,
    leadScore,
    status,
  };
}

const initialRows = [
  createData(
    "#854",
    "/images/users/user6.jpg",
    "Oliver Khan",
    "oliver@trezo.com",
    "+1 555-123-4567",
    "19 Jun 2024",
    "ABC Corporation",
    "Organic",
    "confirmed"
  ),
  createData(
    "#853",
    "/images/users/user7.jpg",
    "Carolyn Barnes",
    "carolyn@trezo.com",
    "+1 555-987-6543",
    "18 Jun 2024",
    "XYZ Ltd",
    "Social",
    "inProgress"
  ),
  createData(
    "#852",
    "/images/users/user8.jpg",
    "Donna Miller",
    "donna@trezo.com",
    "+1 555-456-7890",
    "17 Jun 2024",
    "Tech Solutions",
    "Website",
    "pending"
  ),
  createData(
    "#851",
    "/images/users/user9.jpg",
    "Barbara Cros",
    "barbara@trezo.com",
    "+1 555-369-7878",
    "16 Jun 2024",
    "Global Solutions",
    "Paid",
    "rejected"
  ),
  createData(
    "#850",
    "/images/users/user10.jpg",
    "Rebecca Block",
    "rebecca@trezo.com",
    "+1 555-658-4488",
    "15 Jun 2024",
    "Acma Industries",
    "Others",
    "confirmed"
  ),
  createData(
    "#849",
    "/images/users/user11.jpg",
    "Ramiro McCarty",
    "ramiro@trezo.com",
    "+1 555-558-9966",
    "14 Jun 2024",
    "Synergy Ltd",
    "Facebook",
    "inProgress"
  ),
  createData(
    "#848",
    "/images/users/user12.jpg",
    "Robert Fairweather",
    "robert@trezo.com",
    "+1 555-357-5888",
    "13 Jun 2024",
    "Summit Solutions",
    "Instagram",
    "pending"
  ),
  createData(
    "#847",
    "/images/users/user13.jpg",
    "Marcelino Haddock",
    "marcelino@trezo.com",
    "+1 555-456-8877",
    "12 Jun 2024",
    "Strategies Ltd",
    "X",
    "rejected"
  ),
  createData(
    "#846",
    "/images/users/user14.jpg",
    "Thomas Wilson",
    "thomas@trezo.com",
    "+1 555-622-4488",
    "11 Jun 2024",
    "Tech Enterprises",
    "LinkedIn",
    "confirmed"
  ),
  createData(
    "#845",
    "/images/users/user15.jpg",
    "Nathaniel Hulsey",
    "nathaniel@trezo.com",
    "+1 555-225-4488",
    "10 Jun 2024",
    "Synetic Solutions",
    "Pinterest",
    "inProgress"
  ),
  createData(
    "#844",
    "/images/users/user16.jpg",
    "Jake Khan",
    "jake@trezo.com",
    "+1 555-123-4567",
    "19 Jun 2024",
    "ABC Corporation",
    "Pinterest",
    "pending"
  ),
  createData(
    "#843",
    "/images/users/user17.jpg",
    "Noah Barnes",
    "noah@trezo.com",
    "+1 555-987-6543",
    "18 Jun 2024",
    "XYZ Ltd",
    "LinkedIn",
    "rejected"
  ),
  createData(
    "#842",
    "/images/users/user18.jpg",
    "James Miller",
    "james@trezo.com",
    "+1 555-456-7890",
    "17 Jun 2024",
    "Tech Solutions",
    "X",
    "confirmed"
  ),
  createData(
    "#841",
    "/images/users/user19.jpg",
    "Connor Cros",
    "connor@trezo.com",
    "+1 555-369-7878",
    "16 Jun 2024",
    "Global Solutions",
    "Instagram",
    "inProgress"
  ),
  createData(
    "#840",
    "/images/users/user20.jpg",
    "Liam Block",
    "liam@trezo.com",
    "+1 555-658-4488",
    "15 Jun 2024",
    "Acma Industries",
    "Facebook",
    "pending"
  ),
  createData(
    "#839",
    "/images/users/user21.jpg",
    "Harry McCarty",
    "harry@trezo.com",
    "+1 555-558-9966",
    "14 Jun 2024",
    "Synergy Ltd",
    "Others",
    "rejected"
  ),
  createData(
    "#838",
    "/images/users/user22.jpg",
    "Harry Fairweather",
    "harry@trezo.com",
    "+1 555-357-5888",
    "13 Jun 2024",
    "Summit Solutions",
    "Paid",
    "confirmed"
  ),
  createData(
    "#837",
    "/images/users/user23.jpg",
    "Jacob Haddock",
    "jacob@trezo.com",
    "+1 555-456-8877",
    "12 Jun 2024",
    "Strategies Ltd",
    "Website",
    "inProgress"
  ),
  createData(
    "#836",
    "/images/users/user24.jpg",
    "Jacob Wilson",
    "jacob@trezo.com",
    "+1 555-622-4488",
    "11 Jun 2024",
    "Tech Enterprises",
    "Social",
    "pending"
  ),
  createData(
    "#835",
    "/images/users/user25.jpg",
    "Michael Hulsey",
    "michael@trezo.com",
    "+1 555-225-4488",
    "10 Jun 2024",
    "Synetic Solutions",
    "Organic",
    "rejected"
  ),
].sort((b, a) => (a.id < b.id ? -1 : 1));

const LeadsTable = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState(""); // New state for search input

  // Filter rows based on search term
  const filteredRows = initialRows.filter((row) => {
    return (
      row.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row.phone.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row.company.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

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
              placeholder="Search lead here....."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)} // Update search term
            />
          </Box>

          <AddNewLead />
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
                    Customer
                  </TableCell>

                  <TableCell className="text-black border-bottom">
                    Email
                  </TableCell>

                  <TableCell className="text-black border-bottom">
                    Phone
                  </TableCell>

                  <TableCell className="text-black border-bottom">
                    Created Date
                  </TableCell>

                  <TableCell className="text-black border-bottom">
                    Company
                  </TableCell>

                  <TableCell className="text-black border-bottom">
                    Lead Score
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

                    <TableCell className="border-bottom">
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: "12px",
                        }}
                      >
                        <Box sx={{ flexShrink: "0" }}>
                          <img
                            src={row.customerImg}
                            alt="Product"
                            width={40}
                            height={40}
                            style={{ borderRadius: "100px" }}
                          />
                        </Box>

                        <Box>
                          <Typography
                            sx={{
                              fontSize: { xs: "14px", lg: "15px" },
                              fontWeight: "500",
                            }}
                            className="text-black"
                          >
                            {row.customerName}
                          </Typography>
                        </Box>
                      </Box>
                    </TableCell>

                    <TableCell className="text-black border-bottom">
                      {row.email}
                    </TableCell>

                    <TableCell className="border-bottom">{row.phone}</TableCell>

                    <TableCell className="border-bottom">
                      {row.createdDate}
                    </TableCell>

                    <TableCell className="border-bottom">
                      {row.company}
                    </TableCell>

                    <TableCell className="border-bottom">
                      {row.leadScore}
                    </TableCell>

                    <TableCell className="border-bottom">
                      <Box
                        className={`trezo-badge ${row.status}`}
                        sx={{ textTransform: "capitalize" }}
                      >
                        {row.status}
                      </Box>
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
                    rowsPerPageOptions={[
                      5,
                      10,
                      25,
                      { label: "All", value: -1 },
                    ]}
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

export default LeadsTable;
