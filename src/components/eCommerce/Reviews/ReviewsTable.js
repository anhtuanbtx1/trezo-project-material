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
  Tooltip,
  FormControl,
  InputLabel,
  MenuItem,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import Select from "@mui/material/Select";

function createData(
  id,
  reviewerImg,
  reviewerName,
  email,
  ratings,
  review,
  date,
  time,
  status
) {
  return {
    id,
    reviewerImg,
    reviewerName,
    email,
    ratings,
    review,
    date,
    time,
    status,
  };
}

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
        padding: "14px 20px",
      }}
    >
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
        sx={{ borderRadius: "4px", padding: "4px" }}
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
        sx={{ borderRadius: "4px", padding: "4px" }}
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

const initialRows = [
  createData(
    "#999",
    "/images/users/user6.jpg",
    "Olivia Clark",
    "olivia@trezo.com",
    [
      {
        stars: "ri-star-fill",
      },
      {
        stars: "ri-star-fill",
      },
      {
        stars: "ri-star-fill",
      },
      {
        stars: "ri-star-fill",
      },
      {
        stars: "ri-star-fill",
      },
    ],
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    "17 Dec 2024",
    "08:30 PM",
    "Pending"
  ),
  createData(
    "#1000",
    "/images/users/user7.jpg",
    "Zephyr Zing",
    "zephyr@trezo.com",
    [
      {
        stars: "ri-star-fill",
      },
      {
        stars: "ri-star-fill",
      },
      {
        stars: "ri-star-fill",
      },
      {
        stars: "ri-star-fill",
      },
      {
        stars: "ri-star-fill",
      },
    ],
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    "17 Dec 2024",
    "08:30 PM",
    "Pending"
  ),
  createData(
    "#1001",
    "/images/users/user8.jpg",
    "Nova Nectar",
    "nova@trezo.com",
    [
      {
        stars: "ri-star-fill",
      },
      {
        stars: "ri-star-fill",
      },
      {
        stars: "ri-star-fill",
      },
      {
        stars: "ri-star-fill",
      },
      {
        stars: "ri-star-fill",
      },
    ],
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    "17 Dec 2024",
    "08:30 PM",
    "Pending"
  ),
  createData(
    "#1002",
    "/images/users/user9.jpg",
    "Isabella Chang",
    "isabella@trezo.com",
    [
      {
        stars: "ri-star-fill",
      },
      {
        stars: "ri-star-fill",
      },
      {
        stars: "ri-star-fill",
      },
      {
        stars: "ri-star-fill",
      },
      {
        stars: "ri-star-fill",
      },
    ],
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    "17 Dec 2024",
    "08:30 PM",
    "Published"
  ),
  createData(
    "#1003",
    "/images/users/user9.jpg",
    "Isabella Chang",
    "isabella@trezo.com",
    [
      {
        stars: "ri-star-fill",
      },
      {
        stars: "ri-star-fill",
      },
      {
        stars: "ri-star-fill",
      },
      {
        stars: "ri-star-fill",
      },
      {
        stars: "ri-star-fill",
      },
    ],
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    "17 Dec 2024",
    "08:30 PM",
    "Pending"
  ),
  createData(
    "#1004",
    "/images/users/user6.jpg",
    "Olivia Clark",
    "olivia@trezo.com",
    [
      {
        stars: "ri-star-fill",
      },
      {
        stars: "ri-star-fill",
      },
      {
        stars: "ri-star-fill",
      },
      {
        stars: "ri-star-fill",
      },
      {
        stars: "ri-star-fill",
      },
    ],
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    "17 Dec 2024",
    "08:30 PM",
    "Pending"
  ),
  createData(
    "#1005",
    "/images/users/user7.jpg",
    "Zephyr Zing",
    "zephyr@trezo.com",
    [
      {
        stars: "ri-star-fill",
      },
      {
        stars: "ri-star-fill",
      },
      {
        stars: "ri-star-fill",
      },
      {
        stars: "ri-star-fill",
      },
      {
        stars: "ri-star-fill",
      },
    ],
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    "17 Dec 2024",
    "08:30 PM",
    "Published"
  ),
  createData(
    "#1006",
    "/images/users/user8.jpg",
    "Nova Nectar",
    "nova@trezo.com",
    [
      {
        stars: "ri-star-fill",
      },
      {
        stars: "ri-star-fill",
      },
      {
        stars: "ri-star-fill",
      },
      {
        stars: "ri-star-fill",
      },
      {
        stars: "ri-star-fill",
      },
    ],
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    "17 Dec 2024",
    "08:30 PM",
    "Pending"
  ),
  createData(
    "#1007",
    "/images/users/user9.jpg",
    "Isabella Chang",
    "isabella@trezo.com",
    [
      {
        stars: "ri-star-fill",
      },
      {
        stars: "ri-star-fill",
      },
      {
        stars: "ri-star-fill",
      },
      {
        stars: "ri-star-fill",
      },
      {
        stars: "ri-star-fill",
      },
    ],
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    "17 Dec 2024",
    "08:30 PM",
    "Published"
  ),
  createData(
    "#1008",
    "/images/users/user9.jpg",
    "Isabella Chang",
    "isabella@trezo.com",
    [
      {
        stars: "ri-star-fill",
      },
      {
        stars: "ri-star-fill",
      },
      {
        stars: "ri-star-fill",
      },
      {
        stars: "ri-star-fill",
      },
      {
        stars: "ri-star-fill",
      },
    ],
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    "17 Dec 2024",
    "08:30 PM",
    "Pending"
  ),
].sort((b, a) => (a.id < b.id ? -1 : 1));

const ReviewsTable = () => {
  const [select, setSelect] = useState("");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredRows = initialRows.filter(
    (row) =>
      row.reviewerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row.review.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row.status.toLowerCase().includes(searchTerm.toLowerCase())
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
              width: "265px",
            }}
          >
            <label>
              <i className="material-symbols-outlined">search</i>
            </label>
            <input
              type="text"
              className="t-input"
              placeholder="Search here....."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </Box>

          <Box>
            <FormControl sx={{ minWidth: 115 }} size="small">
              <InputLabel id="demo-select-small">Select</InputLabel>
              <Select
                labelId="demo-select-small"
                value={select}
                onChange={(e) => setSelect(e.target.value)}
                className="select"
              >
                <MenuItem value={0}>This Day</MenuItem>
                <MenuItem value={0}>This Week</MenuItem>
                <MenuItem value={1}>This Month</MenuItem>
                <MenuItem value={2}>This Year</MenuItem>
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
          <Table sx={{ minWidth: 1050 }} aria-label="Table">
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
                  Reviewer
                </TableCell>

                <TableCell className="text-black border-bottom">
                  Review
                </TableCell>

                <TableCell className="text-black border-bottom">Date</TableCell>

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
                      padding: "14px 20px",
                      fontSize: "14px",
                      verticalAlign: "middle",
                    },
                  }}
                >
                  <TableCell className="border-bottom">{row.id}</TableCell>

                  <TableCell className="text-black border-bottom">
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "13px",
                      }}
                    >
                      <Box sx={{ flexShrink: "0" }}>
                        <img
                          src={row.reviewerImg}
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
                          {row.reviewerName}
                        </Typography>

                        <Typography
                          sx={{
                            fontSize: "13px",
                          }}
                        >
                          {row.email}
                        </Typography>
                      </Box>
                    </Box>
                  </TableCell>

                  <TableCell className="text-black border-bottom">
                    <Box>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: "2px",
                        }}
                      >
                        {row.ratings.map((rating, index) => (
                          <i
                            key={index}
                            className={rating.stars}
                            style={{ color: "#ee8336", fontSize: "18px" }}
                          />
                        ))}
                      </Box>

                      <Box sx={{ width: "350px", mt: "5px" }}>
                        <Typography
                          sx={{
                            fontSize: "13px",
                          }}
                        >
                          {row.review}
                        </Typography>
                      </Box>
                    </Box>
                  </TableCell>

                  <TableCell className="border-bottom">
                    ${row.date}
                    <Typography
                      sx={{
                        fontSize: "13px",
                      }}
                    >
                      {row.time}
                    </Typography>
                  </TableCell>

                  <TableCell className="border-bottom">
                    <div className={`trezo-badge ${row.status}`}>
                      {row.status}
                    </div>
                  </TableCell>

                  <TableCell className="text-black border-bottom">
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <Tooltip title="Approved">
                        <IconButton
                          aria-label="view"
                          color="primary"
                          sx={{ padding: "5px" }}
                        >
                          <i
                            className="material-symbols-outlined"
                            style={{ fontSize: "16px" }}
                          >
                            download_done
                          </i>
                        </IconButton>
                      </Tooltip>

                      <Tooltip title="Reply">
                        <IconButton
                          aria-label="edit"
                          color="secondary"
                          sx={{ padding: "5px" }}
                        >
                          <i
                            className="material-symbols-outlined"
                            style={{ fontSize: "16px" }}
                          >
                            reply
                          </i>
                        </IconButton>
                      </Tooltip>

                      <Tooltip title="Delete">
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
                      </Tooltip>
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
                  rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
                  colSpan={6}
                  count={filteredRows.length}
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

export default ReviewsTable;
