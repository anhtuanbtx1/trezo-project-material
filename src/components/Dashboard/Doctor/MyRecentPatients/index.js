"use client";

import * as React from "react";
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
  TableRow,
  Paper,
  IconButton,
  TableHead,
  Button,
} from "@mui/material";
import { MoreVert } from "@mui/icons-material";
import CustomDropdown from "./CustomDropdown";

// Status badge styles based on condition
const getStatusStyles = (status) => {
  switch (status) {
    case "Completed":
      return {
        color: "success.main",
        backgroundColor: "success.100",
      };
    case "Pending":
      return {
        color: "purple.main",
        backgroundColor: "purple.100",
      };
    case "Failed":
      return {
        color: "error.main",
        backgroundColor: "error.100",
      };
    default:
      return {
        color: "grey.600",
        backgroundColor: "grey.100",
      };
  }
};

// Dynamic patient data (expanded for pagination demo)
const allPatients = [
  {
    id: "#001",
    name: "Johhna Loren",
    email: "loren123@gmail.com",
    image: "/images/users/user33.jpg",
    disease: "Heart Attack",
    paymentStatus: "Paid",
    status: "Completed",
  },
  {
    id: "#002",
    name: "Skyler White",
    email: "skyqueen@gmail.com",
    image: "/images/users/user34.jpg",
    disease: "Chest Pain",
    paymentStatus: "Paid",
    status: "Pending",
  },
  {
    id: "#003",
    name: "Jonathon Watson",
    email: "jona2134@gmail.com",
    image: "/images/users/user35.jpg",
    disease: "Breathing Issue",
    paymentStatus: "Unpaid",
    status: "Failed",
  },
  {
    id: "#004",
    name: "Maria Garcia",
    email: "maria.g@gmail.com",
    image: "/images/users/user36.jpg",
    disease: "Asthma",
    paymentStatus: "Paid",
    status: "Completed",
  },
  {
    id: "#005",
    name: "James Brown",
    email: "james.b@gmail.com",
    image: "/images/users/user37.jpg",
    disease: "Diabetes",
    paymentStatus: "Unpaid",
    status: "Pending",
  },
  {
    id: "#006",
    name: "Emma Wilson",
    email: "emma.w@gmail.com",
    image: "/images/users/user38.jpg",
    disease: "Hypertension",
    paymentStatus: "Paid",
    status: "Completed",
  },
  {
    id: "#007",
    name: "Liam Smith",
    email: "liam.s@gmail.com",
    image: "/images/users/user39.jpg",
    disease: "Migraine",
    paymentStatus: "Unpaid",
    status: "Failed",
  },
  {
    id: "#008",
    name: "Jonathon Watson",
    email: "jona2134@gmail.com",
    image: "/images/users/user35.jpg",
    disease: "Breathing Issue",
    paymentStatus: "Unpaid",
    status: "Failed",
  },
  {
    id: "#009",
    name: "Maria Garcia",
    email: "maria.g@gmail.com",
    image: "/images/users/user36.jpg",
    disease: "Asthma",
    paymentStatus: "Paid",
    status: "Completed",
  },
  {
    id: "#010",
    name: "James Brown",
    email: "james.b@gmail.com",
    image: "/images/users/user37.jpg",
    disease: "Diabetes",
    paymentStatus: "Unpaid",
    status: "Pending",
  },
];

const MyRecentPatients = () => {
  // Dropdown
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // Pagination
  const [currentPage, setCurrentPage] = React.useState(1);
  const itemsPerPage = 5; // Number of items per page

  // Pagination logic
  const totalItems = allPatients.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPatients = allPatients.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  // Generate page numbers (showing limited range for better UX)
  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 3; // Show 3 page numbers at a time
    let startPage = Math.max(1, currentPage - 1);
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    return pages;
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
            My Recent Patients
          </Typography>

          <Box>
            <CustomDropdown
              options={["This Day", "This Week", "This Month", "This Year"]} // Need to change the options also in CustomDropdown file
              onSelect={(value) => console.log(value)}
              defaultLabel="This Week"
            />
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
          <Table sx={{ minWidth: 750 }}>
            <TableHead>
              <TableRow
                sx={{
                  "& th": {
                    padding: "0 14px 7px",
                    fontSize: "10px",
                    textTransform: "uppercase",
                    color: "#8695aa",
                    fontWeight: 700,
                    letterSpacing: "1px",
                  },
                }}
              >
                <TableCell className="border-bottom">ID</TableCell>
                <TableCell className="border-bottom">Patient Name</TableCell>
                <TableCell className="border-bottom">Disease</TableCell>
                <TableCell className="border-bottom">Payment Status</TableCell>
                <TableCell className="border-bottom">Status</TableCell>
                <TableCell
                  sx={{
                    textAlign: "end",
                  }}
                  className="border-bottom"
                >
                  ACTION
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {currentPatients.map((patient) => (
                <TableRow
                  key={patient.id}
                  sx={{
                    td: {
                      padding: "10px 14px",
                      fontSize: { xs: "12px", md: "13px" },
                      fontWeight: 600,
                    },
                  }}
                >
                  <TableCell className="border-bottom">{patient.id}</TableCell>

                  <TableCell className="text-black border-bottom">
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                      }}
                    >
                      <img
                        src={patient.image}
                        alt="user"
                        width={40}
                        height={40}
                        style={{ borderRadius: "100px" }}
                      />

                      <Box>
                        <Typography
                          sx={{
                            fontWeight: "600",
                            fontSize: { xs: "12px", md: "14px" },
                          }}
                          className="text-black"
                        >
                          {patient.name}
                        </Typography>
                        <Typography
                          sx={{ fontSize: "12px" }}
                          className="text-body"
                        >
                          {patient.email}
                        </Typography>
                      </Box>
                    </Box>
                  </TableCell>

                  <TableCell className="border-bottom">
                    {patient.disease}
                  </TableCell>

                  <TableCell className="border-bottom">
                    {patient.paymentStatus}
                  </TableCell>

                  <TableCell className="border-bottom">
                    <Box
                      sx={{
                        fontSize: "12px",
                        fontWeight: "500",
                        padding: "4px 10px",
                        borderRadius: "30px",
                        display: "inline-block",
                        lineHeight: 1,
                        ...getStatusStyles(patient.status),
                      }}
                    >
                      {patient.status}
                    </Box>
                  </TableCell>

                  <TableCell className="text-black border-bottom">
                    <Box className="text-end">
                      <IconButton
                        onClick={handleClick}
                        size="small"
                        aria-controls={open ? "account-menu" : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? "true" : undefined}
                        sx={{ padding: "0" }}
                      >
                        <MoreVert sx={{ fontSize: "25px" }} />
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
                            boxShadow: "none",
                            mt: 0,
                            border: "1px solid #eee",

                            "& .MuiAvatar-root": {
                              width: 32,
                              height: 32,
                              ml: -0.5,
                              mr: 1,
                            },
                          },
                        }}
                        transformOrigin={{
                          horizontal: "right",
                          vertical: "top",
                        }}
                        anchorOrigin={{
                          horizontal: "right",
                          vertical: "bottom",
                        }}
                      >
                        <MenuItem sx={{ gap: "5px", fontSize: "13px" }}>
                          Edit
                        </MenuItem>

                        <MenuItem sx={{ gap: "5px", fontSize: "13px" }}>
                          View
                        </MenuItem>

                        <MenuItem sx={{ gap: "5px", fontSize: "13px" }}>
                          Delete
                        </MenuItem>
                      </Menu>
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          <Box
            sx={{
              display: { xs: "flex" },
              alignItems: "center",
              justifyContent: "space-between",
              mt: "15px",
            }}
          >
            <Typography sx={{ fontSize: "13px" }}>
              Showing {startIndex + 1} to {Math.min(endIndex, totalItems)} of{" "}
              {totalItems} results
            </Typography>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
              }}
            >
              <Button
                type="button"
                className="border text-body"
                sx={{
                  minWidth: "auto",
                  padding: 0,
                  width: { xs: "25px", sm: "30px" },
                  height: { xs: "25px", sm: "30px" },
                }}
                disabled={currentPage === 1}
                onClick={() => handlePageChange(currentPage - 1)}
              >
                <i className="material-symbols-outlined">chevron_left</i>
              </Button>

              {getPageNumbers().map((page) => (
                <Button
                  type="button"
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`border ${
                    currentPage === page
                      ? "bg-primary text-white border-color-primary"
                      : "text-body"
                  }`}
                  sx={{
                    minWidth: "auto",
                    padding: 0,
                    width: { xs: "25px", sm: "30px" },
                    height: { xs: "25px", sm: "30px" },
                  }}
                >
                  {page}
                </Button>
              ))}

              <Button
                type="button"
                className="border text-body"
                sx={{
                  minWidth: "auto",
                  padding: 0,
                  width: { xs: "25px", sm: "30px" },
                  height: { xs: "25px", sm: "30px" },
                }}
                disabled={currentPage === totalPages}
                onClick={() => handlePageChange(currentPage + 1)}
              >
                <i className="material-symbols-outlined">chevron_right</i>
              </Button>
            </Box>
          </Box>
        </TableContainer>
      </Card>
    </>
  );
};

export default MyRecentPatients;
