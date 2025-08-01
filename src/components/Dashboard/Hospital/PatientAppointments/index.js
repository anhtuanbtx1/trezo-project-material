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
import styles from "./PatientAppointments.module.css";
import DateTimePickerDemo from "./DateTimePickerDemo";

const TablePaginationActions = ({ count, page, rowsPerPage, onPageChange }) => {
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
      }}
      className="ml-15"
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
};

const rows = [
  {
    id: 1,
    patientName: "John Doe",
    date: "Sep 12, 2024",
    time: "10:30 AM",
    doctorImg: "/images/users/user11.jpg",
    doctorName: "Dr. Sarah",
    department: "Cardiology",
    status: "confirmed",
  },
  {
    id: 2,
    patientName: "Jane Smith",
    date: "Sep 11, 2024",
    time: "11:00 AM",
    doctorImg: "/images/users/user32.jpg",
    doctorName: "Dr. Mark",
    department: "Pediatrics",
    status: "rescheduled",
  },
  {
    id: 3,
    patientName: "Robert Clark",
    date: "Sep 10, 2024",
    time: "1:00 PM",
    doctorImg: "/images/users/user33.jpg",
    doctorName: "Dr. Emily",
    department: "Orthopedics",
    status: "cancelled",
  },
  {
    id: 4,
    patientName: "Linda Green",
    date: "Sep 09, 2024",
    time: "9:30 AM",
    doctorImg: "/images/users/user34.jpg",
    doctorName: "Dr. Adam",
    department: "Dermatology",
    status: "confirmed",
  },
  {
    id: 5,
    patientName: "Michael White",
    date: "Sep 08, 2024",
    time: "2:00 PM",
    doctorImg: "/images/users/user35.jpg",
    doctorName: "Dr. Rebecca",
    department: "Surgery",
    status: "pending",
  },
  {
    id: 6,
    patientName: "Anderson",
    date: "Sep 12, 2024",
    time: "10:30 AM",
    doctorImg: "/images/users/user36.jpg",
    doctorName: "Dr. Sarah",
    department: "Cardiology",
    status: "confirmed",
  },
  {
    id: 7,
    patientName: "Wilson",
    date: "Sep 11, 2024",
    time: "11:00 AM",
    doctorImg: "/images/users/user37.jpg",
    doctorName: "Dr. Mark",
    department: "Pediatrics",
    status: "rescheduled",
  },
  {
    id: 8,
    patientName: "Martin",
    date: "Sep 10, 2024",
    time: "1:00 PM",
    doctorImg: "/images/users/user38.jpg",
    doctorName: "Dr. Emily",
    department: "Orthopedics",
    status: "cancelled",
  },
  {
    id: 9,
    patientName: "Gagnon",
    date: "Sep 09, 2024",
    time: "9:30 AM",
    doctorImg: "/images/users/user39.jpg",
    doctorName: "Dr. Adam",
    department: "Dermatology",
    status: "confirmed",
  },
  {
    id: 10,
    patientName: "Tremblay",
    date: "Sep 08, 2024",
    time: "2:00 PM",
    doctorImg: "/images/users/user40.jpg",
    doctorName: "Dr. Rebecca",
    department: "Surgery",
    status: "pending",
  },
].sort((a, b) => b.id - a.id);

const PatientAppointments = () => {
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
            display: { sm: "flex" },
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
            Patient Appointments
          </Typography>

          <Box sx={{ mt: { xs: "10px", sm: "0" } }}>
            <DateTimePickerDemo />
          </Box>
        </Box>

        {/* Table */}
        <TableContainer
          component={Paper}
          sx={{
            boxShadow: "none",
            borderRadius: "0",
          }}
          className="rmui-table"
        >
          <Table sx={{ minWidth: 700 }} className={styles.thTable}>
            <TableHead>
              <TableRow
                sx={{
                  th: {
                    padding: "0 14px 7px",
                    fontSize: "12px",
                  },
                }}
              >
                <TableCell className="border-bottom">Patient Name</TableCell>

                <TableCell
                  sx={{
                    textAlign: "end",
                  }}
                  className="border-bottom"
                >
                  Date
                </TableCell>

                <TableCell
                  sx={{
                    textAlign: "end",
                  }}
                  className="border-bottom"
                >
                  Time
                </TableCell>

                <TableCell className="border-bottom">Assigned</TableCell>

                <TableCell
                  sx={{
                    textAlign: "end",
                  }}
                  className="border-bottom"
                >
                  Department
                </TableCell>

                <TableCell
                  sx={{
                    textAlign: "end",
                  }}
                  className="border-bottom"
                >
                  Status
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
                      padding: "7px 14px",
                      fontSize: "14px",
                      fontWeight: "500",
                    },
                  }}
                >
                  <TableCell className="text-black border-bottom">
                    {row.patientName}
                  </TableCell>

                  <TableCell
                    className="border-bottom"
                    sx={{
                      textAlign: "end",
                    }}
                  >
                    {row.date}
                  </TableCell>

                  <TableCell
                    sx={{
                      textAlign: "end",
                    }}
                    className="border-bottom"
                  >
                    {row.time}
                  </TableCell>

                  <TableCell className="text-black border-bottom">
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                      }}
                    >
                      <img
                        src={row.doctorImg}
                        alt="Product"
                        width={34}
                        height={34}
                        style={{ borderRadius: "100px" }}
                      />

                      <Typography
                        sx={{
                          fontWeight: "500",
                        }}
                      >
                        {row.doctorName}
                      </Typography>
                    </Box>
                  </TableCell>

                  <TableCell
                    sx={{
                      textAlign: "end",
                    }}
                    className="border-bottom"
                  >
                    {row.department}
                  </TableCell>

                  <TableCell
                    sx={{
                      textAlign: "end",
                    }}
                    className="text-black border-bottom"
                  >
                    <Box
                      className={`trezo-badge ${row.status}`}
                      sx={{ textTransform: "capitalize" }}
                    >
                      {row.status}
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
      </Card>
    </>
  );
};

export default PatientAppointments;
