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
import AddNewInstructor from "./AddNewInstructor";

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

const rows = [
  {
    id: "#A-1215",
    image: "/images/users/user13.jpg",
    name: "Olivia Clark",
    designation: "Big Data",
    courses: 55,
    totalEarnings: "$6,855.00",
    email: "olivia@trezo.com",
    ratings: Array(5).fill({ star: "ri-star-fill" }),
    status: "active",
  },
  {
    id: "#A-1216",
    image: "/images/users/user14.jpg",
    name: "Ava Turner",
    designation: "UX/UI",
    courses: 120,
    totalEarnings: "$258.00",
    email: "ava@trezo.com",
    ratings: Array(5).fill({ star: "ri-star-fill" }),
    status: "deactive",
  },
  {
    id: "#A-1217",
    image: "/images/users/user15.jpg",
    name: "Lucas Morgan",
    designation: "Developer",
    courses: 86,
    totalEarnings: "$3890.00",
    email: "lucas@trezo.com",
    ratings: Array(5).fill({ star: "ri-star-fill" }),
    status: "active",
  },
  {
    id: "#A-1218",
    image: "/images/users/user16.jpg",
    name: "Isabella Cooper",
    designation: "Designer",
    courses: 75,
    totalEarnings: "$2500.00",
    email: "isabella@trezo.com",
    ratings: Array(5).fill({ star: "ri-star-fill" }),
    status: "active",
  },
  {
    id: "#A-1219",
    image: "/images/users/user17.jpg",
    name: "Olivia Clark",
    designation: "Big Data",
    courses: 55,
    totalEarnings: "$6,855.00",
    email: "olivia@trezo.com",
    ratings: Array(5).fill({ star: "ri-star-fill" }),
    status: "active",
  },
  {
    id: "#A-1220",
    image: "/images/users/user18.jpg",
    name: "Ava Turner",
    designation: "UX/UI",
    courses: 120,
    totalEarnings: "$258.00",
    email: "ava@trezo.com",
    ratings: Array(5).fill({ star: "ri-star-fill" }),
    status: "deactive",
  },
  {
    id: "#A-1221",
    image: "/images/users/user19.jpg",
    name: "Lucas Morgan",
    designation: "Developer",
    courses: 86,
    totalEarnings: "$3890.00",
    email: "lucas@trezo.com",
    ratings: Array(5).fill({ star: "ri-star-fill" }),
    status: "active",
  },
  {
    id: "#A-1222",
    image: "/images/users/user20.jpg",
    name: "livia Clark",
    designation: "Big Data",
    courses: 55,
    totalEarnings: "$6,855.00",
    email: "olivia@trezo.com",
    ratings: Array(5).fill({ star: "ri-star-fill" }),
    status: "active",
  },
  {
    id: "#A-1223",
    image: "/images/users/user21.jpg",
    name: "Ava Turner",
    designation: "UX/UI",
    courses: 120,
    totalEarnings: "$258.00",
    email: "ava@trezo.com",
    ratings: Array(5).fill({ star: "ri-star-fill" }),
    status: "deactive",
  },
  {
    id: "#A-1224",
    image: "/images/users/user22.jpg",
    name: "Lucas Morgan",
    designation: "Developer",
    courses: 86,
    totalEarnings: "$3890.00",
    email: "ava@trezo.com",
    ratings: Array(5).fill({ star: "ri-star-fill" }),
    status: "active",
  },
  {
    id: "#A-1225",
    image: "/images/users/user15.jpg",
    name: "Lucas Morgan",
    designation: "Developer",
    courses: 86,
    totalEarnings: "$3890.00",
    email: "lucas@trezo.com",
    ratings: Array(5).fill({ star: "ri-star-fill" }),
    status: "active",
  },
  {
    id: "#A-1226",
    image: "/images/users/user13.jpg",
    name: "Olivia Clark",
    designation: "Big Data",
    courses: 55,
    totalEarnings: "$6,855.00",
    email: "olivia@trezo.com",
    ratings: Array(5).fill({ star: "ri-star-fill" }),
    status: "active",
  },
  {
    id: "#A-1227",
    image: "/images/users/user14.jpg",
    name: "Ava Turner",
    designation: "UX/UI",
    courses: 120,
    totalEarnings: "$258.00",
    email: "ava@trezo.com",
    ratings: Array(5).fill({ star: "ri-star-fill" }),
    status: "deactive",
  },
  {
    id: "#A-1228",
    image: "/images/users/user16.jpg",
    name: "Isabella Cooper",
    designation: "Designer",
    courses: 75,
    totalEarnings: "$2500.00",
    email: "isabella@trezo.com",
    ratings: Array(5).fill({ star: "ri-star-fill" }),
    status: "active",
  },
  {
    id: "#A-1229",
    image: "/images/users/user19.jpg",
    name: "Lucas Morgan",
    designation: "Developer",
    courses: 86,
    totalEarnings: "$3890.00",
    email: "lucas@trezo.com",
    ratings: Array(5).fill({ star: "ri-star-fill" }),
    status: "active",
  },
  {
    id: "#A-1230",
    image: "/images/users/user17.jpg",
    name: "Olivia Clark",
    designation: "Big Data",
    courses: 55,
    totalEarnings: "$6,855.00",
    email: "olivia@trezo.com",
    ratings: Array(5).fill({ star: "ri-star-fill" }),
    status: "active",
  },
  {
    id: "#A-1231",
    image: "/images/users/user18.jpg",
    name: "Ava Turner",
    designation: "UX/UI",
    courses: 120,
    totalEarnings: "$258.00",
    email: "ava@trezo.com",
    ratings: Array(5).fill({ star: "ri-star-fill" }),
    status: "deactive",
  },
  {
    id: "#A-1232",
    image: "/images/users/user21.jpg",
    name: "Ava Turner",
    designation: "UX/UI",
    courses: 120,
    totalEarnings: "$258.00",
    email: "ava@trezo.com",
    ratings: Array(5).fill({ star: "ri-star-fill" }),
    status: "deactive",
  },
  {
    id: "#A-1234",
    image: "/images/users/user22.jpg",
    name: "Lucas Morgan",
    designation: "Developer",
    courses: 86,
    totalEarnings: "$3890.00",
    email: "ava@trezo.com",
    ratings: Array(5).fill({ star: "ri-star-fill" }),
    status: "active",
  },
  {
    id: "#A-1235",
    image: "/images/users/user20.jpg",
    name: "livia Clark",
    designation: "Big Data",
    courses: 55,
    totalEarnings: "$6,855.00",
    email: "olivia@trezo.com",
    ratings: Array(5).fill({ star: "ri-star-fill" }),
    status: "active",
  },
].sort((b, a) => (a.id < b.id ? -1 : 1));

const InstructorsTable = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [searchText, setSearchText] = useState("");

  // Filter rows based on search text
  const filteredRows = rows.filter(
    (row) =>
      row.name.toLowerCase().includes(searchText.toLowerCase()) ||
      row.designation.toLowerCase().includes(searchText.toLowerCase()) ||
      row.email.toLowerCase().includes(searchText.toLowerCase())
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
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mb: "20px",
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
              placeholder="Search instructor here..."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
          </Box>

          <Box>
            <AddNewInstructor />
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
            <Table sx={{ minWidth: 480 }} aria-label="Table">
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
                  <TableCell className="text-black border-bottom">ID</TableCell>

                  <TableCell className="text-black border-bottom">
                    Name
                  </TableCell>

                  <TableCell className="text-black border-bottom">
                    Courses
                  </TableCell>

                  <TableCell className="text-black border-bottom">
                    Total Earnings
                  </TableCell>

                  <TableCell className="text-black border-bottom">
                    Email
                  </TableCell>

                  <TableCell className="text-black border-bottom">
                    Ratings
                  </TableCell>

                  <TableCell className="text-black border-bottom">
                    Status
                  </TableCell>

                  <TableCell className="text-black border-bottom text-end">
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
                        padding: "13px 20px",
                        fontSize: "14px",
                      },
                    }}
                  >
                    <TableCell className="text-black border-bottom">
                      {row.id}
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
                            src={row.image}
                            alt="instructor"
                            width={44}
                            height={44}
                            style={{ borderRadius: "100px" }}
                          />
                        </Box>

                        <Box>
                          <Typography
                            sx={{
                              fontWeight: "500",
                            }}
                            className="text-black"
                          >
                            {row.name}
                          </Typography>

                          <Typography className="text-body">
                            {row.designation}
                          </Typography>
                        </Box>
                      </Box>
                    </TableCell>

                    <TableCell className="text-black border-bottom">
                      {row.courses}
                    </TableCell>

                    <TableCell className="text-black border-bottom">
                      {row.totalEarnings}
                    </TableCell>

                    <TableCell className="text-black border-bottom">
                      {row.email}
                    </TableCell>

                    <TableCell className="border-bottom">
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: "2px",
                        }}
                      >
                        {row.ratings.map((ratings, index) => (
                          <i
                            key={index}
                            className={ratings.star}
                            style={{ color: "#fe7a36", fontSize: "15px" }}
                          ></i>
                        ))}
                      </Box>
                    </TableCell>

                    <TableCell className="text-black border-bottom">
                      <div
                        className={`trezo-badge ${row.status}`}
                        style={{ textTransform: "capitalize" }}
                      >
                        {row.status}
                      </div>
                    </TableCell>

                    <TableCell className="text-end border-bottom">
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

export default InstructorsTable;
