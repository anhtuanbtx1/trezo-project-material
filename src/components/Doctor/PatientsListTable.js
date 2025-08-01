"use client";

import * as React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
  IconButton,
  TableHead,
  Button,
  Checkbox,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

// Dynamic patient data
const patientsData = [
  {
    id: "#001",
    name: "Johhna Loren",
    email: "lorenjohna@gmail.com",
    image: "/images/users/user33.jpg",
    phone: "+1 555-225-4488",
    disease: "Heart Attack",
    appointmentDate: "05 Nov, 2025",
  },
  {
    id: "#002",
    name: "Skyler White",
    email: "skylerwhite@gmail.com",
    image: "/images/users/user34.jpg",
    phone: "+1 555-123-4567",
    disease: "HBP",
    appointmentDate: "04 Nov, 2025",
  },
  {
    id: "#003",
    name: "Jonathon Watson",
    email: "jonathonwatson@gmail.com",
    image: "/images/users/user35.jpg",
    phone: "+1 555-987-6543",
    disease: "Chest Pain",
    appointmentDate: "03 Nov, 2025",
  },
  {
    id: "#004",
    name: "Maria Garcia",
    email: "maria.g@gmail.com",
    image: "/images/users/user36.jpg",
    phone: "+1 555-111-2222",
    disease: "Asthma",
    appointmentDate: "02 Nov, 2025",
  },
  {
    id: "#005",
    name: "James Brown",
    email: "james.b@gmail.com",
    image: "/images/users/user37.jpg",
    phone: "+1 555-333-4444",
    disease: "Diabetes",
    appointmentDate: "01 Nov, 2025",
  },
  {
    id: "#006",
    name: "Emma Wilson",
    email: "emma.w@gmail.com",
    image: "/images/users/user38.jpg",
    phone: "+1 555-555-6666",
    disease: "Hypertension",
    appointmentDate: "31 Oct, 2025",
  },
  {
    id: "#007",
    name: "Liam Smith",
    email: "liam.s@gmail.com",
    image: "/images/users/user39.jpg",
    phone: "+1 555-777-8888",
    disease: "Migraine",
    appointmentDate: "30 Oct, 2025",
  },
  {
    id: "#008",
    name: "Olivia Johnson",
    email: "olivia.j@gmail.com",
    image: "/images/users/user40.jpg",
    phone: "+1 555-999-0000",
    disease: "Allergy",
    appointmentDate: "29 Oct, 2025",
  },
  {
    id: "#009",
    name: "Noah Williams",
    email: "noah.w@gmail.com",
    image: "/images/users/user41.jpg",
    phone: "+1 555-222-3333",
    disease: "Arthritis",
    appointmentDate: "28 Oct, 2025",
  },
  {
    id: "#010",
    name: "Ava Brown",
    email: "ava.b@gmail.com",
    image: "/images/users/user42.jpg",
    phone: "+1 555-444-5555",
    disease: "Bronchitis",
    appointmentDate: "27 Oct, 2025",
  },
  {
    id: "#011",
    name: "William Jones",
    email: "william.j@gmail.com",
    image: "/images/users/user43.jpg",
    phone: "+1 555-666-7777",
    disease: "Cataracts",
    appointmentDate: "26 Oct, 2025",
  },
  {
    id: "#012",
    name: "Sophia Garcia",
    email: "sophia.g@gmail.com",
    image: "/images/users/user44.jpg",
    phone: "+1 555-888-9999",
    disease: "Depression",
    appointmentDate: "25 Oct, 2025",
  },
  {
    id: "#013",
    name: "Mason Davis",
    email: "mason.d@gmail.com",
    image: "/images/users/user45.jpg",
    phone: "+1 555-000-1111",
    disease: "Eczema",
    appointmentDate: "24 Oct, 2025",
  },
  {
    id: "#014",
    name: "Isabella Rodriguez",
    email: "isabella.r@gmail.com",
    image: "/images/users/user46.jpg",
    phone: "+1 555-123-4567",
    disease: "Fibromyalgia",
    appointmentDate: "23 Oct, 2025",
  },
  {
    id: "#015",
    name: "Ethan Martinez",
    email: "ethan.m@gmail.com",
    image: "/images/users/user47.jpg",
    phone: "+1 555-234-5678",
    disease: "Gastritis",
    appointmentDate: "22 Oct, 2025",
  },
  {
    id: "#016",
    name: "Mia Hernandez",
    email: "mia.h@gmail.com",
    image: "/images/users/user48.jpg",
    phone: "+1 555-345-6789",
    disease: "Hepatitis",
    appointmentDate: "21 Oct, 2025",
  },
  {
    id: "#017",
    name: "Alexander Lopez",
    email: "alexander.l@gmail.com",
    image: "/images/users/user49.jpg",
    phone: "+1 555-456-7890",
    disease: "Insomnia",
    appointmentDate: "20 Oct, 2025",
  },
  {
    id: "#018",
    name: "Charlotte Gonzalez",
    email: "charlotte.g@gmail.com",
    image: "/images/users/user50.jpg",
    phone: "+1 555-567-8901",
    disease: "Jaundice",
    appointmentDate: "19 Oct, 2025",
  },
  {
    id: "#019",
    name: "Daniel Wilson",
    email: "daniel.w@gmail.com",
    image: "/images/users/user51.jpg",
    phone: "+1 555-678-9012",
    disease: "Kidney Stones",
    appointmentDate: "18 Oct, 2025",
  },
  {
    id: "#020",
    name: "Amelia Anderson",
    email: "amelia.a@gmail.com",
    image: "/images/users/user52.jpg",
    phone: "+1 555-789-0123",
    disease: "Lupus",
    appointmentDate: "17 Oct, 2025",
  },
];

const PatientsList = () => {
  // Search term state
  const [searchTerm, setSearchTerm] = React.useState("");

  // Pagination state
  const [currentPage, setCurrentPage] = React.useState(1);
  const itemsPerPage = 10; // Number of items per page

  // Filter patients based on search term
  const filteredPatients = patientsData.filter(
    (patient) =>
      patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      patient.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      patient.phone.toLowerCase().includes(searchTerm.toLowerCase()) ||
      patient.disease.toLowerCase().includes(searchTerm.toLowerCase()) ||
      patient.appointmentDate.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Calculate total pages
  const totalItems = filteredPatients.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // Get current patients based on pagination
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPatients = filteredPatients.slice(startIndex, endIndex);

  // Handle page change
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  // Generate page numbers for pagination controls
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

  // Handle search input change
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1); // Reset to the first page when searching
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
          <form className="t-search-form">
            <label>
              <i className="material-symbols-outlined">search</i>
            </label>
            <input
              type="text"
              className="t-input"
              placeholder="Search here..."
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </form>

          <Link to="/doctor/add-patient">
            <Button
              variant="outlined"
              sx={{
                textTransform: "capitalize",
                borderRadius: "7px",
                fontWeight: "500",
                fontSize: "13px",
                padding: "6px 13px",
              }}
              color="primary"
            >
              <AddIcon /> Add New
              Patient
            </Button>
          </Link>
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
          <Table sx={{ minWidth: 950 }}>
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

                    "&:first-of-type": {
                      paddingLeft: "0",
                      paddingRight: "0",
                    },
                    "&:last-of-type": {
                      paddingRight: "0",
                      paddingLeft: "0",
                    },
                  },
                }}
              >
                <TableCell className="border-bottom">CODE</TableCell>
                <TableCell className="border-bottom">PATIENT</TableCell>
                <TableCell className="border-bottom">EMAIL</TableCell>
                <TableCell className="border-bottom">PHINE NO.</TableCell>
                <TableCell className="border-bottom">DISEASE</TableCell>
                <TableCell className="border-bottom">APPOINT. DATE</TableCell>
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

                      "&:first-of-type": {
                        paddingLeft: "0",
                        paddingRight: "0",
                      },
                      "&:last-of-type": {
                        paddingRight: "0",
                        paddingLeft: "0",
                      },
                    },
                  }}
                >
                  <TableCell className="border-bottom">
                    <Box sx={{ display: "flex", gap: "5px" }}>
                      <Checkbox
                        {...label}
                        sx={{
                          padding: 0,

                          "& .MuiSvgIcon-root": { fontSize: 18 },
                        }}
                      />{" "}
                      {patient.id}
                    </Box>
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
                        src={patient.image}
                        alt="user"
                        width={40}
                        height={40}
                        style={{ borderRadius: "100px" }}
                      />

                      <Typography
                        sx={{
                          fontWeight: "600",
                          fontSize: { xs: "12px", md: "14px" },
                        }}
                        className="text-black"
                      >
                        {patient.name}
                      </Typography>
                    </Box>
                  </TableCell>

                  <TableCell className="border-bottom">
                    <Box sx={{ color: "primary.main" }}>{patient.email}</Box>
                  </TableCell>

                  <TableCell className="border-bottom">
                    {patient.phone}
                  </TableCell>

                  <TableCell className="border-bottom">
                    {patient.disease}
                  </TableCell>

                  <TableCell className="border-bottom">
                    {patient.appointmentDate}
                  </TableCell>

                  <TableCell className="text-black border-bottom">
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

export default PatientsList;
