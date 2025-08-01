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
  FormControl,
  InputLabel,
  MenuItem,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import Select from "@mui/material/Select";

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
  userImg,
  userName,
  email,
  phone,
  lastContacted,
  company,
  leadScore,
  status
) {
  return {
    id,
    userImg,
    userName,
    email,
    phone,
    lastContacted,
    company,
    leadScore,
    status,
  };
}

const rows = [
  createData(
    "#850",
    "/images/users/user6.jpg",
    "Oliver Khan",
    "oliver@trezo.com",
    "+1 555-123-4567",
    "19 Jun 2024",
    "ABC Corporation",
    50,
    "Active"
  ),
  createData(
    "#851",
    "/images/users/user7.jpg",
    "Carolyn Barnes",
    "carolyn@trezo.com",
    "+1 555-987-6543",
    "18 Jun 2024",
    "XYZ Ltd",
    35,
    "Active"
  ),
  createData(
    "#852",
    "/images/users/user8.jpg",
    "Donna Miller",
    "donna@trezo.com",
    "+1 555-456-7890",
    "17 Jun 2024",
    "Tech Solutions",
    40,
    "Deactivate"
  ),
  createData(
    "#853",
    "/images/users/user9.jpg",
    "Barbara Cross",
    "barbara@trezo.com",
    "+1 555-369-7878",
    "16 Jun 2024",
    "Global Solutions",
    25,
    "Active"
  ),
  createData(
    "#854",
    "/images/users/user10.jpg",
    "Rebecca Block",
    "rebecca@trezo.com",
    "+1 555-658-4488",
    "15 Jun 2024",
    "Acma Industries",
    27,
    "Deactivate"
  ),
  createData(
    "#855",
    "/images/users/user11.jpg",
    "Ramiro McCarty",
    "ramiro@trezo.com",
    "+1 555-558-9966",
    "14 Jun 2024",
    "Synergy Ltd",
    16,
    "Active"
  ),
  createData(
    "#856",
    "/images/users/user12.jpg",
    "Robert Fairweather",
    "robert@trezo.com",
    "+1 555-357-5888",
    "13 Jun 2024",
    "Summit Solutions",
    38,
    "Active"
  ),
  createData(
    "#857",
    "/images/users/user13.jpg",
    "Marcelino Haddock",
    "marcelino@trezo.com",
    "+1 555-456-8877",
    "12 Jun 2024",
    "Strategies Ltd",
    15,
    "Active"
  ),
  createData(
    "#858",
    "/images/users/user14.jpg",
    "Thomas Wilson",
    "thomas@trezo.com",
    "+1 555-622-4488",
    "11 Jun 2024",
    "Tech Enterprises",
    41,
    "Deactivate"
  ),
  createData(
    "#859",
    "/images/users/user15.jpg",
    "Nathaniel Hulsey",
    "nathaniel@trezo.com",
    "+1 555-225-4488",
    "10 Jun 2024",
    "Synetic Solutions",
    29,
    "Active"
  ),
  createData(
    "#860",
    "/images/users/user16.jpg",
    "Oliver Jake",
    "oliver@trezo.com",
    "+1 555-123-4117",
    "9 Jun 2024",
    "ABC Corporation",
    35,
    "Active"
  ),
  createData(
    "#861",
    "/images/users/user17.jpg",
    "Harry Barnes",
    "harry@trezo.com",
    "+1 555-911-6543",
    "8 Jun 2024",
    "XYZ Ltd",
    56,
    "Active"
  ),
  createData(
    "#862",
    "/images/users/user18.jpg",
    "Mason Miller",
    "mason@trezo.com",
    "+1 555-456-7811",
    "7 Jun 2024",
    "Tech Solutions",
    45,
    "Deactivate"
  ),
  createData(
    "#863",
    "/images/users/user19.jpg",
    "Charlie Cross",
    "charlie@trezo.com",
    "+1 555-369-2278",
    "6 Jun 2024",
    "Global Solutions",
    125,
    "Active"
  ),
  createData(
    "#864",
    "/images/users/user20.jpg",
    "William Block",
    "william@trezo.com",
    "+1 555-644-4488",
    "5 Jun 2024",
    "Acma Industries",
    20,
    "Deactivate"
  ),
  createData(
    "#865",
    "/images/users/user21.jpg",
    "Thomas McCarty",
    "thomas@trezo.com",
    "+1 555-558-9336",
    "4 Jun 2024",
    "Synergy Ltd",
    49,
    "Active"
  ),
  createData(
    "#866",
    "/images/users/user22.jpg",
    "David Fairweather",
    "david@trezo.com",
    "+1 555-345-5888",
    "3 Jun 2024",
    "Summit Solutions",
    77,
    "Active"
  ),
  createData(
    "#867",
    "/images/users/user23.jpg",
    "Richard Haddock",
    "richard@trezo.com",
    "+1 555-456-8866",
    "2 Jun 2024",
    "Strategies Ltd",
    155,
    "Active"
  ),
].sort((b, a) => (a.id < b.id ? -1 : 1));

const ContactsTable = () => {
  const [select, setSelect] = useState("");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [searchQuery, setSearchQuery] = useState("");

  // Function to handle search input changes
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value.toLowerCase());
    setPage(0); // Reset to the first page on search
  };

  // Filter rows based on search query
  const filteredRows = rows.filter((row) => {
    return (
      row.userName.toLowerCase().includes(searchQuery) ||
      row.email.toLowerCase().includes(searchQuery) ||
      row.phone.includes(searchQuery) ||
      row.company.toLowerCase().includes(searchQuery) ||
      row.status.toLowerCase().includes(searchQuery)
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
            placeholder="Search contact here..."
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </form>

        <Box>
          <FormControl sx={{ minWidth: 115 }} size="small">
            <InputLabel id="select-label">Select</InputLabel>
            <Select
              labelId="select-label"
              id="select"
              value={select}
              label="Select"
              onChange={(e) => setSelect(e.target.value)}
              className="select"
            >
              <MenuItem value={0}>All</MenuItem>
              <MenuItem value={1}>Active</MenuItem>
              <MenuItem value={2}>Deactivate</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>

      <Box sx={{ marginLeft: "-25px", marginRight: "-25px" }}>
        <TableContainer
          component={Paper}
          sx={{ boxShadow: "none", borderRadius: "0" }}
          className="rmui-table"
        >
          <Table sx={{ minWidth: 1000 }} aria-label="Contacts List Table">
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
                <TableCell className="border-bottom">#</TableCell>
                <TableCell className="border-bottom">ID</TableCell>
                <TableCell className="border-bottom">User</TableCell>
                <TableCell className="border-bottom">Email</TableCell>
                <TableCell className="border-bottom">Phone</TableCell>
                <TableCell className="border-bottom">Last Contacted</TableCell>
                <TableCell className="border-bottom">Company</TableCell>
                <TableCell className="border-bottom">Lead Score</TableCell>
                <TableCell className="border-bottom">Status</TableCell>
                <TableCell className="border-bottom">Action</TableCell>
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
                      width: "65px",
                    }}
                    className="border-bottom"
                  >
                    <Checkbox sx={{ padding: "8px" }} />
                  </TableCell>

                  <TableCell className="border-bottom">{row.id}</TableCell>

                  <TableCell className="border-bottom">
                    <Box display="flex" alignItems="center" gap="12px">
                      <img
                        src={row.userImg}
                        alt={row.userName}
                        width={40}
                        height={40}
                        style={{ borderRadius: "100px" }}
                      />
                      <Typography
                        sx={{
                          fontSize: "15px",
                          fontWeight: "500",
                        }}
                        className="text-black"
                      >
                        {row.userName}
                      </Typography>
                    </Box>
                  </TableCell>

                  <TableCell className="border-bottom text-black">
                    {row.email}
                  </TableCell>

                  <TableCell className="border-bottom">{row.phone}</TableCell>

                  <TableCell className="border-bottom">
                    {row.lastContacted}
                  </TableCell>

                  <TableCell className="border-bottom">{row.company}</TableCell>

                  <TableCell className="border-bottom">
                    {row.leadScore}
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
                  rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
                  colSpan={10}
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
};

export default ContactsTable;
