"use client";

import React, { useState } from "react";
import {
  Card,
  Box,
  Typography,
  Menu,
  MenuItem,
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
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

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

function createData(id, customerImg, customerName, designation, date, ratings) {
  return {
    id,
    customerImg,
    customerName,
    designation,
    date,
    ratings,
  };
}

const rows = [
  createData(
    1,
    "/images/users/user13.jpg",
    "Olivia Clark",
    "Big Data",
    "28 April 2024",
    [
      {
        star: "ri-star-fill",
      },
      {
        star: "ri-star-fill",
      },
      {
        star: "ri-star-fill",
      },
      {
        star: "ri-star-fill",
      },
      {
        star: "ri-star-fill",
      },
    ]
  ),
  createData(
    2,
    "/images/users/user16.jpg",
    "Ava Turner",
    "UX/UI",
    "27 April 2024",
    [
      {
        star: "ri-star-fill",
      },
      {
        star: "ri-star-fill",
      },
      {
        star: "ri-star-fill",
      },
      {
        star: "ri-star-fill",
      },
      {
        star: "ri-star-half-fill",
      },
    ]
  ),
  createData(
    3,
    "/images/users/user17.jpg",
    "Lucas Morgan",
    "Developer",
    "26 April 2024",
    [
      {
        star: "ri-star-fill",
      },
      {
        star: "ri-star-fill",
      },
      {
        star: "ri-star-fill",
      },
      {
        star: "ri-star-fill",
      },
      {
        star: "ri-star-fill",
      },
    ]
  ),
  createData(
    4,
    "/images/users/user18.jpg",
    "Isabella Cooper",
    "Designer",
    "25 April 2024",
    [
      {
        star: "ri-star-fill",
      },
      {
        star: "ri-star-fill",
      },
      {
        star: "ri-star-fill",
      },
      {
        star: "ri-star-fill",
      },
      {
        star: "ri-star-half-fill",
      },
    ]
  ),
  createData(
    5,
    "/images/users/user31.jpg",
    "Jhon Smith",
    "React Developer",
    "24 April 2024",
    [
      {
        star: "ri-star-fill",
      },
      {
        star: "ri-star-fill",
      },
      {
        star: "ri-star-fill",
      },
      {
        star: "ri-star-fill",
      },
      {
        star: "ri-star-fill",
      },
    ]
  ),
  createData(
    6,
    "/images/users/user30.jpg",
    "Oliver Jhon",
    "Angular Developer",
    "23 April 2024",
    [
      {
        star: "ri-star-fill",
      },
      {
        star: "ri-star-fill",
      },
      {
        star: "ri-star-fill",
      },
      {
        star: "ri-star-fill",
      },
      {
        star: "ri-star-half-fill",
      },
    ]
  ),
  createData(
    7,
    "/images/users/user29.jpg",
    "Jake Morgan",
    "Developer",
    "22 April 2024",
    [
      {
        star: "ri-star-fill",
      },
      {
        star: "ri-star-fill",
      },
      {
        star: "ri-star-fill",
      },
      {
        star: "ri-star-fill",
      },
      {
        star: "ri-star-fill",
      },
    ]
  ),
  createData(
    8,
    "/images/users/user28.jpg",
    "Mason Cooper",
    "Designer",
    "21 April 2024",
    [
      {
        star: "ri-star-fill",
      },
      {
        star: "ri-star-fill",
      },
      {
        star: "ri-star-fill",
      },
      {
        star: "ri-star-fill",
      },
      {
        star: "ri-star-half-fill",
      },
    ]
  ),
  createData(
    9,
    "/images/users/user30.jpg",
    "Jhon Cooper",
    "Designer",
    "20 April 2024",
    [
      {
        star: "ri-star-fill",
      },
      {
        star: "ri-star-fill",
      },
      {
        star: "ri-star-fill",
      },
      {
        star: "ri-star-fill",
      },
      {
        star: "ri-star-half-fill",
      },
    ]
  ),
  createData(
    10,
    "/images/users/user31.jpg",
    "Cooper Shmit",
    "Designer",
    "19 April 2024",
    [
      {
        star: "ri-star-fill",
      },
      {
        star: "ri-star-fill",
      },
      {
        star: "ri-star-fill",
      },
      {
        star: "ri-star-fill",
      },
      {
        star: "ri-star-half-fill",
      },
    ]
  ),
].sort((b, a) => (a.id < b.id ? -1 : 1));

const RecentCustomerRatings = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

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
            mb: "20px",
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
            Recent Customer Ratings
          </Typography>

          <Box>
            <IconButton
              onClick={handleClick}
              size="small"
              aria-controls={open ? "account-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
            >
              <MoreHorizIcon sx={{ fontSize: "25px" }} />
            </IconButton>

            <Menu
              anchorEl={anchorEl}
              id="account-menu"
              open={open}
              onClose={handleClose}
              onClick={handleClose}
              PaperProps={{
                elevation: 0,

                sx: {
                  overflow: "visible",
                  boxShadow: "0 4px 45px #0000001a",
                  mt: 0,
                  "& .MuiAvatar-root": {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                },
              }}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
              <MenuItem>This Day</MenuItem>
              <MenuItem>This Week</MenuItem>
              <MenuItem>This Month</MenuItem>
              <MenuItem>This Year</MenuItem>
            </Menu>
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
                  <TableCell className="text-black border-bottom">
                    Name
                  </TableCell>

                  <TableCell className="text-black border-bottom">
                    Date
                  </TableCell>

                  <TableCell className="text-black border-bottom">
                    Ratings
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
                        padding: "13px 20px",
                        fontSize: "14px",
                      },
                    }}
                  >
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
                            src={row.customerImg}
                            alt="instructor"
                            width={44}
                            height={44}
                            style={{ borderRadius: "100px" }}
                          />
                        </Box>

                        <Box>
                          <Typography
                            variant="h6"
                            sx={{
                              fontWeight: "500 !important",
                              fontSize: "14px",
                            }}
                            className="text-black"
                          >
                            {row.customerName}
                          </Typography>

                          <Typography
                            component="span"
                            className="text-body"
                            display="block"
                          >
                            {row.designation}
                          </Typography>
                        </Box>
                      </Box>
                    </TableCell>

                    <TableCell className="text-black border-bottom">
                      {row.date}
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

export default RecentCustomerRatings;
