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
  FormControl,
  InputLabel,
  MenuItem,
  Link,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import Select from "@mui/material/Select";

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
        padding: "14px 20px",
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
  customerImage,
  customerName,
  email,
  phone,
  lastLogin,
  totalSpend,
  totalOrders,
  status,
  viewDetails
) {
  return {
    id,
    customerImage,
    customerName,
    email,
    phone,
    lastLogin,
    totalSpend,
    totalOrders,
    status,
    viewDetails,
  };
}

const rows = [
  createData(
    "#JAN-854",
    "/images/users/user6.jpg",
    "Oliver Khan",
    "oliver@trezo.com",
    "+1 555-123-4567",
    "10 Oct 2024",
    "$6,855.00",
    125,
    "Active",
    "/ecommerce/customers/details"
  ),
  createData(
    "#JAN-853",
    "/images/users/user7.jpg",
    "Carolyn Barnes",
    "carolyn@trezo.com",
    "+1 555-987-6543",
    "11 Sep 2024",
    "$2,800.00",
    99,
    "Active",
    "/ecommerce/customers/details"
  ),
  createData(
    "#JAN-852",
    "/images/users/user8.jpg",
    "Donna Miller",
    "donna@trezo.com",
    "+1 555-456-7890",
    "12 Aug 2024",
    "$258.00",
    145,
    "Deactive",
    "/ecommerce/customers/details"
  ),
  createData(
    "#JAN-851",
    "/images/users/user9.jpg",
    "Barbara Cross",
    "barbara@trezo.com",
    "+1 555-369-7878",
    "13 Jul 2024",
    "$3,890.00",
    279,
    "Active",
    "/ecommerce/customers/details"
  ),
  createData(
    "#JAN-850",
    "/images/users/user10.jpg",
    "Rebecca Block",
    "rebecca@trezo.com",
    "+1 555-658-4488",
    "14 Jun 2024",
    "$2,500.00",
    169,
    "Deactive",
    "/ecommerce/customers/details"
  ),
  createData(
    "#JAN-849",
    "/images/users/user11.jpg",
    "Ramiro McCarty",
    "ramiro@trezo.com",
    "+1 555-558-9966",
    "15 May 2024",
    "$8,200.00",
    46,
    "Active",
    "/ecommerce/customers/details"
  ),
  createData(
    "#JAN-848",
    "/images/users/user12.jpg",
    "Robert Fairweather",
    "robert@trezo.com",
    "+1 555-357-5888",
    "16 Apr 2024",
    "$640.00",
    184,
    "Deactive",
    "/ecommerce/customers/details"
  ),
  createData(
    "#JAN-847",
    "/images/users/user13.jpg",
    "Marcelino Haddock",
    "marcelino@trezo.com",
    "+1 555-456-8877",
    "17 Mar 2024",
    "$9,100.00",
    166,
    "Active",
    "/ecommerce/customers/details"
  ),
  createData(
    "#JAN-846",
    "/images/users/user14.jpg",
    "Thomas Wilson",
    "thomas@trezo.com",
    "+1 555-622-4488",
    "18 Feb 2024",
    "$7,300.00",
    75,
    "Active",
    "/ecommerce/customers/details"
  ),
  createData(
    "#JAN-845",
    "/images/users/user15.jpg",
    "Nathaniel Hulsey",
    "nathaniel@trezo.com",
    "+1 555-357-5888",
    "16 Apr 2024",
    "$640.00",
    184,
    "Active",
    "/ecommerce/customers/details"
  ),
  createData(
    "#JAN-844",
    "/images/users/user16.jpg",
    "Oliver Khan",
    "oliver@trezo.com",
    "+1 555-123-4567",
    "10 Oct 2024",
    "$6,855.00",
    125,
    "Deactive",
    "/ecommerce/customers/details"
  ),
  createData(
    "#JAN-843",
    "/images/users/user17.jpg",
    "Carolyn Barnes",
    "carolyn@trezo.com",
    "+1 555-987-6543",
    "11 Sep 2024",
    "$2,800.00",
    99,
    "Active",
    "/ecommerce/customers/details"
  ),
  createData(
    "#JAN-842",
    "/images/users/user18.jpg",
    "Donna Miller",
    "donna@trezo.com",
    "+1 555-456-7890",
    "12 Aug 2024",
    "$258.00",
    145,
    "Active",
    "/ecommerce/customers/details"
  ),
  createData(
    "#JAN-841",
    "/images/users/user19.jpg",
    "Megan Cross",
    "megan@trezo.com",
    "+1 555-369-7878",
    "13 Jul 2024",
    "$3,890.00",
    279,
    "Active",
    "/ecommerce/customers/details"
  ),
  createData(
    "#JAN-840",
    "/images/users/user20.jpg",
    "Lauren Block",
    "lauren@trezo.com",
    "+1 555-658-4488",
    "14 Jun 2024",
    "$2,500.00",
    169,
    "Deactive",
    "/ecommerce/customers/details"
  ),
  createData(
    "#JAN-839",
    "/images/users/user21.jpg",
    "Michelle McCarty",
    "michelle@trezo.com",
    "+1 555-558-9966",
    "15 May 2024",
    "$8,200.00",
    46,
    "Active",
    "/ecommerce/customers/details"
  ),
  createData(
    "#JAN-838",
    "/images/users/user22.jpg",
    "Sophie Fairweather",
    "sophie@trezo.com",
    "+1 555-357-5888",
    "16 Apr 2024",
    "$640.00",
    184,
    "Deactive",
    "/ecommerce/customers/details"
  ),
  createData(
    "#JAN-837",
    "/images/users/user23.jpg",
    "Tracy Haddock",
    "tracy@trezo.com",
    "+1 555-456-8877",
    "17 Mar 2024",
    "$9,100.00",
    166,
    "Active",
    "/ecommerce/customers/details"
  ),
  createData(
    "#JAN-836",
    "/images/users/user24.jpg",
    "Charlotte Wilson",
    "charlotte@trezo.com",
    "+1 555-622-4488",
    "18 Feb 2024",
    "$7,300.00",
    75,
    "Active",
    "/ecommerce/customers/details"
  ),
  createData(
    "#JAN-835",
    "/images/users/user25.jpg",
    "Sarah Hulsey",
    "sarah@trezo.com",
    "+1 555-357-5888",
    "16 Apr 2024",
    "$640.00",
    184,
    "Deactive",
    "/ecommerce/customers/details"
  ),
].sort((b, a) => (a.id < b.id ? -1 : 1));

const CustomersTable = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("");

  // Filtered rows based on search and status filter
  const filteredRows = rows.filter((row) => {
    const matchesSearch =
      row.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row.phone.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus =
      filterStatus === "" ||
      row.status.toLowerCase() === filterStatus.toLowerCase();

    return matchesSearch && matchesStatus;
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

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    setPage(0); // Reset to the first page when searching
  };

  const handleStatusChange = (event) => {
    setFilterStatus(event.target.value);
    setPage(0); // Reset to the first page when filtering
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
        <Box>
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
                width: "265px",
              }}
            >
              <label>
                <i className="material-symbols-outlined">search</i>
              </label>
              <input
                type="text"
                className="t-input"
                placeholder="Search customers here....."
                value={searchTerm}
                onChange={handleSearch}
              />
            </Box>

            <Box>
              <FormControl sx={{ minWidth: 115 }} size="small">
                <InputLabel id="demo-select-small">Select</InputLabel>
                <Select
                  labelId="demo-select-small"
                  id="demo-simple-select"
                  value={filterStatus}
                  label="Status"
                  onChange={handleStatusChange}
                  className="select"
                >
                  <MenuItem value={0}>Weekly</MenuItem>
                  <MenuItem value={1}>Monthly</MenuItem>
                  <MenuItem value={2}>Yearly</MenuItem>
                  <MenuItem value={4}>All Time</MenuItem>
                </Select>
              </FormControl>
            </Box>
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
            <Table sx={{ minWidth: 1300 }} aria-label="Table">
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
                    Customer
                  </TableCell>

                  <TableCell className="text-black border-bottom">
                    Email
                  </TableCell>

                  <TableCell className="text-black border-bottom">
                    Phone
                  </TableCell>

                  <TableCell className="text-black border-bottom">
                    Last Login
                  </TableCell>

                  <TableCell className="text-black border-bottom">
                    Total Spend
                  </TableCell>

                  <TableCell className="text-black border-bottom">
                    Total Orders
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
                      rd: {
                        padding: "14px 20px",
                        fontSize: "14px",
                      },
                    }}
                  >
                    <TableCell className="text-black border-bottom">
                      {row.id}
                    </TableCell>

                    <TableCell className="border-bottom">
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: "13px",
                        }}
                      >
                        <Box sx={{ flexShrink: "0" }}>
                          <img
                            src={row.customerImage}
                            alt="Product"
                            width={40}
                            height={40}
                            style={{ borderRadius: "100px" }}
                          />
                        </Box>

                        <Box>
                          <Typography
                            sx={{
                              fontSize: "15px",
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

                    <TableCell className="text-black border-bottom">
                      {row.phone}
                    </TableCell>

                    <TableCell className="text-black border-bottom">
                      {row.lastLogin}
                    </TableCell>

                    <TableCell className="text-black border-bottom">
                      {row.totalSpend}
                    </TableCell>

                    <TableCell className="text-black border-bottom">
                      {row.totalOrders}
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
                        </Link>

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
                    <TableCell className="border-bottom" colSpan={9} />
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
        </Box>
      </Card>
    </>
  );
};

export default CustomersTable;
