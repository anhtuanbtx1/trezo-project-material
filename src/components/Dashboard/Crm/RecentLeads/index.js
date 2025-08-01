"use client";

import * as React from "react";
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
import CustomDropdown from "./CustomDropdown";

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

function createData(id, customerImage, customerName, email, source, status) {
  return {
    id,
    customerImage,
    customerName,
    email,
    source,
    status,
  };
}

const rows = [
  createData(
    1,
    "/images/users/user11.jpg",
    "David Brown",
    "david@trezo.com",
    "Organic",
    "Confirmed"
  ),
  createData(
    2,
    "/images/users/user12.jpg",
    "Sarah Miller",
    "sara@trezo.com",
    "Social",
    "Pending"
  ),
  createData(
    3,
    "/images/users/user13.jpg",
    "Michael Wilson",
    "micheal@trezo.com",
    "Website",
    "in Progress"
  ),
  createData(
    4,
    "/images/users/user8.jpg",
    "Amanda Clark",
    "amanda@trezo.com",
    "Paid",
    "Confirmed"
  ),
  createData(
    5,
    "/images/users/user14.jpg",
    "Jennifer Taylor",
    "taylor@trezo.com",
    "Others",
    "rejected"
  ),
  createData(
    6,
    "/images/users/user15.jpg",
    "Jhon Me",
    "joon@trezo.com",
    "Organic",
    "Confirmed"
  ),
  createData(
    7,
    "/images/users/user16.jpg",
    "Miller Kay",
    "miller@trezo.com",
    "Social",
    "Pending"
  ),
  createData(
    8,
    "/images/users/user17.jpg",
    "Clark Wilson",
    "clark@trezo.com",
    "Paid",
    "Confirmed"
  ),
  createData(
    9,
    "/images/users/user18.jpg",
    "Wilson Clark",
    "wilson@trezo.com",
    "Website",
    "in Progress"
  ),
  createData(
    10,
    "/images/users/user19.jpg",
    "David Le",
    "davidle@trezo.com",
    "Organic",
    "Confirmed"
  ),
].sort((b, a) => (a.id < b.id ? -1 : 1));

const RecentLeads = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

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
            Recent Leads
          </Typography>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <CustomDropdown
              options={["This Day", "This Week", "This Month", "This Year"]}
              onSelect={(value) => console.log(value)}
              defaultLabel="This Day"
            />
          </Box>
        </Box>

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
            <Table sx={{ minWidth: 750 }} aria-label="Recent Leads Table">
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
                    Customer
                  </TableCell>

                  <TableCell className="text-black border-bottom">
                    Email
                  </TableCell>

                  <TableCell className="text-black border-bottom">
                    Source
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
                        padding: "15px 13px",
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
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: "12px",
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
                      {row.source}
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
                    <TableCell className="border-bottom" colSpan={6} />
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
                    colSpan={6}
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
    </>
  );
};

export default RecentLeads;
