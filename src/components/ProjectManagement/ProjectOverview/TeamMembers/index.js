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
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";

// Pagination Actions Component
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

// Data Generator Function
function createData(
  id,
  memberImage,
  memberName,
  designation,
  tasks,
  statusProgress,
  statusProgressBg
) {
  return {
    id,
    memberImage,
    memberName,
    designation,
    tasks,
    statusProgress,
    statusProgressBg,
  };
}

const rows = [
  createData(
    1,
    "/images/users/user6.jpg",
    "Alex Davis",
    "Head of HR",
    55,
    50,
    "primary"
  ),
  createData(
    2,
    "/images/users/user7.jpg",
    "Laura Martinez",
    "laura@trezo.com",
    125,
    70,
    "success"
  ),
  createData(
    3,
    "/images/users/user8.jpg",
    "Mark Thompson",
    "mark@trezo.com",
    78,
    30,
    "secondary"
  ),
  createData(
    4,
    "/images/users/user9.jpg",
    "Rachel White",
    "rachel@trezo.com",
    95,
    90,
    "success"
  ),
  createData(
    5,
    "/images/users/user10.jpg",
    "Kevin Lee",
    "kevin@trezo.com",
    134,
    50,
    "warning"
  ),
  createData(
    6,
    "/images/users/user11.jpg",
    "Alex Davis",
    "Head of HR",
    55,
    50,
    "primary"
  ),
  createData(
    7,
    "/images/users/user17.jpg",
    "Laura Martinez",
    "laura@trezo.com",
    125,
    70,
    "success"
  ),
  createData(
    8,
    "/images/users/user18.jpg",
    "Mark Thompson",
    "mark@trezo.com",
    78,
    30,
    "secondary"
  ),
].sort((b, a) => (a.id < b.id ? -1 : 1));

const TeamMembers = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(4);

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
            Team Members
          </Typography>
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
            <Table
              sx={{ minWidth: { xs: "400px", lg: "300px" } }}
              aria-label="Recent Leads Table"
            >
              <TableHead className="bg-primary-50">
                <TableRow
                  sx={{
                    th: {
                      borderBottom: "none",
                      fontWeight: "500",
                      padding: "10px 20px",
                      fontSize: "14px",
                    },
                  }}
                >
                  <TableCell className="text-black">Name</TableCell>

                  <TableCell className="text-black">Tasks</TableCell>

                  <TableCell className="text-black">Status</TableCell>
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
                        borderBottom: "none",
                        padding: "7px 20px",
                        fontSize: "14px",
                      },
                    }}
                  >
                    <TableCell
                      component="th"
                      scope="row"
                      sx={{
                        borderBottom: "none",
                        padding: "7px 20px",
                        fontSize: "14px",
                      }}
                      className="text-black"
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: "12px",
                        }}
                      >
                        <Box sx={{ flexShrink: "0" }}>
                          <img
                            src={row.memberImage}
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
                            {row.memberName}
                          </Typography>

                          <Typography
                            sx={{
                              fontSize: "13px",
                            }}
                            className="text-body"
                          >
                            {row.designation}
                          </Typography>
                        </Box>
                      </Box>
                    </TableCell>

                    <TableCell className="text-black">{row.tasks}</TableCell>

                    <TableCell>
                      <Box
                        sx={{
                          bgcolor: "#ecf0ff",
                          width: "100%",
                          height: "4px",
                        }}
                      >
                        <Box
                          sx={{
                            bgcolor: `${row.statusProgressBg}.main`,
                            width: `${row.statusProgress}%`,
                            height: "4px",
                          }}
                        ></Box>
                      </Box>
                    </TableCell>
                  </TableRow>
                ))}
                {emptyRows > 0 && (
                  <TableRow style={{ height: 53 * emptyRows }}>
                    <TableCell className="border-bottom" colSpan={3} />
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
                    colSpan={3}
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
    </>
  );
};

export default TeamMembers;
