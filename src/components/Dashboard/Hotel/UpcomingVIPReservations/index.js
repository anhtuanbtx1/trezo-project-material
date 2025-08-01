"use client";

import { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Card,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
  Button,
  TableHead,
  IconButton,
  Link,
} from "@mui/material";
import CustomDropdown from "./CustomDropdown";

const UpcomingVIPReservations = () => {
  // Mock data (replace with API call in a real application)
  // Simulate data fetching
  useEffect(() => {
    const mockReservations = [
      {
        code: "TRZ-32",
        room: "Deluxe Room - G - 3215",
        customer: "Angela Carter",
        duration: "10 Dec - 15 Dec",
      },
      {
        code: "TRZ-33",
        room: "Suite - A - 1001",
        customer: "John Doe",
        duration: "12 Dec - 18 Dec",
      },
      {
        code: "TRZ-34",
        room: "Penthouse - B - 5001",
        customer: "Jane Smith",
        duration: "15 Dec - 20 Dec",
      },
      {
        code: "TRZ-35",
        room: "Executive Suite - E - 2202",
        customer: "Michael Johnson",
        duration: "18 Dec - 22 Dec",
      },
      {
        code: "TRZ-36",
        room: "Presidential Suite - P - 7001",
        customer: "Olivia Williams",
        duration: "20 Dec - 25 Dec",
      },
      {
        code: "TRZ-37",
        room: "Junior Suite - J - 1205",
        customer: "Liam Brown",
        duration: "22 Dec - 26 Dec",
      },
      {
        code: "TRZ-38",
        room: "Standard Room - S - 2109",
        customer: "Emma Davis",
        duration: "24 Dec - 28 Dec",
      },
      {
        code: "TRZ-39",
        room: "Deluxe Room - D - 3312",
        customer: "Noah Miller",
        duration: "26 Dec - 30 Dec",
      },
      {
        code: "TRZ-40",
        room: "Royal Suite - R - 4500",
        customer: "Sophia Wilson",
        duration: "28 Dec - 02 Jan",
      },
      {
        code: "TRZ-41",
        room: "Economy Room - E - 1111",
        customer: "James Anderson",
        duration: "30 Dec - 03 Jan",
      },
    ];
    setReservations(mockReservations);
  }, []); // No dependencies needed now

  // State management with TypeScript types
  const [reservations, setReservations] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5); // Set to 2 for demonstration; adjust as needed

  // Pagination calculations
  const totalItems = reservations.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = reservations.slice(indexOfFirstItem, indexOfLastItem);

  // Generate page numbers
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  // Handle page change with type safety
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
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
            flexWrap: "wrap",
            gap: "15px",
            mb: "10px",
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
            Upcoming VIP Reservations
          </Typography>

          <CustomDropdown
            options={["Daily", "Weekly", "Monthly", "Yearly"]} // Need to change the options also in CustomDropdown file
            onSelect={(value) => console.log(value)}
            defaultLabel="Monthly"
          />
        </Box>

        <TableContainer
          component={Paper}
          sx={{
            boxShadow: "none",
            borderRadius: "0",
          }}
          className="rmui-table"
        >
          <Table sx={{ minWidth: 800 }}>
            <TableHead>
              <TableRow
                className="border-bottom"
                sx={{
                  "& th": {
                    fontSize: "10px",
                    fontWeight: 700,
                    color: "text.primary",
                    padding: "15px 8px",
                  },
                }}
              >
                <th className="text-start">CODE</th>

                <th className="text-start">ROOM</th>

                <th className="text-start">CUSTOMER</th>

                <th className="text-start">DURATION</th>

                <th className="text-end">ACTION</th>
              </TableRow>
            </TableHead>

            <TableBody>
              {currentItems.map((reservation, index) => (
                <TableRow
                  key={index}
                  sx={{
                    "& td": {
                      padding: "13px 8px",
                      fontSize: "12px",
                      fontWeight: 600,
                    },
                  }}
                >
                  <TableCell className="border-bottom">
                    {reservation.code}
                  </TableCell>

                  <TableCell className="border-bottom">
                    <Link
                      href="#"
                      sx={{
                        fontSize: { xs: "13px", md: "14px" },
                        fontWeight: 600,
                        mb: 0,
                        color: "#3a4252",

                        "&:hover": {
                          color: "primary.main",
                        },
                      }}
                    >
                      {reservation.room}
                    </Link>
                  </TableCell>

                  <TableCell className="border-bottom">
                    {reservation.customer}
                  </TableCell>

                  <TableCell className="border-bottom">
                    <Box
                      sx={{
                        backgroundColor: "primary.50",
                        color: "primary.main",
                        fontSize: "12px",
                        borderRadius: "4px",
                        padding: "3.5px 10px",
                        display: "inline-block",
                      }}
                    >
                      {reservation.duration}
                    </Box>
                  </TableCell>

                  <TableCell className="border-bottom">
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "end",
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
            </TableBody>
          </Table>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "15px",
              mt: "15px",
            }}
          >
            <Typography fontSize={"12px"} fontWeight={500} mb={"0"}>
              Showing {indexOfFirstItem + 1}-
              {Math.min(indexOfLastItem, totalItems)} of {totalItems} results
            </Typography>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
              }}
            >
              <Button
                className="border text-body"
                sx={{
                  minWidth: "auto",
                  padding: "0",
                  width: { xs: "28px", md: "34px" },
                  height: { xs: "28px", md: "34px" },
                }}
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                <i className="material-symbols-outlined">keyboard_arrow_left</i>
              </Button>

              {pageNumbers.map((number) => (
                <Button
                  key={number}
                  onClick={() => handlePageChange(number)}
                  className="border"
                  sx={{
                    minWidth: "auto",
                    padding: "0",
                    width: { xs: "28px", md: "34px" },
                    height: { xs: "28px", md: "34px" },
                    backgroundColor:
                      number === currentPage ? "primary.main" : "transparent",
                    color:
                      number === currentPage
                        ? "white !important"
                        : "text.primary",
                  }}
                >
                  {number}
                </Button>
              ))}

              <Button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === pageNumbers.length}
                className="border text-body"
                sx={{
                  minWidth: "auto",
                  padding: "0",
                  width: { xs: "28px", md: "34px" },
                  height: { xs: "28px", md: "34px" },
                }}
              >
                <i className="material-symbols-outlined">
                  keyboard_arrow_right
                </i>
              </Button>
            </Box>
          </Box>
        </TableContainer>
      </Card>
    </>
  );
};

export default UpcomingVIPReservations;
