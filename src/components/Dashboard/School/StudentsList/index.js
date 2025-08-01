"use client";

import React, { useState } from "react";
import {
  Box,
  IconButton,
  Typography,
  Card,
  Menu,
  MenuItem,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
  TableHead,
  Button,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const studentsList = [
  {
    id: "#101",
    image: "/images/users/user46.jpg",
    name: "Emily Johnson",
    email: "emily@gmail.com",
    subject: "Math",
    class: "5A",
    contant: "(555) 123-4567",
    result: "89% Overall (A)",
    status: "Passed",
    statusColor: "success",
  },
  {
    id: "#102",
    image: "/images/users/user47.jpg",
    name: "Michael Thompson",
    email: "lmichael@gmail.com",
    subject: "English",
    class: "8B",
    contant: "(555) 234-5678",
    result: "32% Overall (F)",
    status: "Fail",
    statusColor: "error",
  },
  {
    id: "#103",
    image: "/images/users/user48.jpg",
    name: "Sarah Williams",
    email: "sarah@gmail.com",
    subject: "Geography",
    class: "4C",
    contant: "(555) 345-6789",
    result: "92% Overall (A+)",
    status: "Dropped",
    statusColor: "primary",
  },
  {
    id: "#104",
    image: "/images/users/user49.jpg",
    name: "David Anderson",
    email: "david@gmail.com",
    subject: "Physics",
    class: "6A",
    contant: "(555) 456-7890",
    result: "85% Overall (B+)",
    status: "Passed",
    statusColor: "success",
  },
  {
    id: "#105",
    image: "/images/users/user50.jpg",
    name: "Jessica Martinez",
    email: "jessica@gmail.com",
    subject: "History",
    class: "7B",
    contant: "(555) 567-8901",
    result: "25% Overall (F)",
    status: "Fail",
    statusColor: "error",
  },
  {
    id: "#106",
    image: "/images/users/user51.jpg",
    name: "James Lee",
    email: "james@gmail.com",
    subject: "Biology",
    class: "5B",
    contant: "(555) 678-9012",
    result: "88% Overall (A)",
    status: "Passed",
    statusColor: "success",
  },
  {
    id: "#107",
    image: "/images/users/user52.jpg",
    name: "Ethan Clark",
    email: "ethan@gmail.com",
    subject: "Music",
    class: "8A",
    contant: "(555) 789-0123",
    result: "93% Overall (A+)",
    status: "Dropped",
    statusColor: "primary",
  },
  {
    id: "#108",
    image: "/images/users/user53.jpg",
    name: "Oliver Jake",
    email: "oliver@gmail.com",
    subject: "Math",
    class: "5A",
    contant: "(555) 123-4567",
    result: "89% Overall (A)",
    status: "Passed",
    statusColor: "success",
  },
  {
    id: "#109",
    image: "/images/users/user54.jpg",
    name: "Thomas Joe",
    email: "thomas@gmail.com",
    subject: "English",
    class: "8B",
    contant: "(555) 234-5678",
    result: "32% Overall (F)",
    status: "Fail",
    statusColor: "error",
  },
  {
    id: "#110",
    image: "/images/users/user55.jpg",
    name: "William Rhys",
    email: "william@gmail.com",
    subject: "Geography",
    class: "4C",
    contant: "(555) 345-6789",
    result: "92% Overall (A+)",
    status: "Dropped",
    statusColor: "primary",
  },
  {
    id: "#111",
    image: "/images/users/user56.jpg",
    name: "Margaret Olivia",
    email: "margaret@gmail.com",
    subject: "Physics",
    class: "6A",
    contant: "(555) 456-7890",
    result: "85% Overall (B+)",
    status: "Passed",
    statusColor: "success",
  },
  {
    id: "#112",
    image: "/images/users/user57.jpg",
    name: "Smith Smith",
    email: "smith@gmail.com",
    subject: "History",
    class: "7B",
    contant: "(555) 567-8901",
    result: "25% Overall (F)",
    status: "Fail",
    statusColor: "error",
  },
];

const ITEMS_PER_PAGE = 7;

const StudentsList = () => {
  // Dropdown
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // Search, filter & pagination
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [sortConfig, setSortConfig] = useState({
    key: "",
    direction: "",
  });

  const filteredStudents = studentsList
    .filter((student) =>
      student.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortConfig.key) {
        const aValue = a[sortConfig.key];
        const bValue = b[sortConfig.key];

        if (aValue < bValue) return sortConfig.direction === "asc" ? -1 : 1;
        if (aValue > bValue) return sortConfig.direction === "asc" ? 1 : -1;
      }
      return 0;
    });

  const totalPages = Math.ceil(filteredStudents.length / ITEMS_PER_PAGE);
  const paginatedData = filteredStudents.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1); // Reset to first page after search
  };

  const handleSort = (key) => {
    const direction =
      sortConfig.key === key && sortConfig.direction === "asc" ? "desc" : "asc";
    setSortConfig({ key, direction });
  };

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
            display: { xs: "block", sm: "flex" },
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
            Students List
          </Typography>

          <Box
            sx={{
              display: { xs: "flex", sm: "flex" },
              alignItems: "center",
              gap: "10px",
            }}
          >
            <Box>
              <form className="t-search-form">
                <label>
                  <i className="material-symbols-outlined">search</i>
                </label>
                <input
                  type="text"
                  className="t-input"
                  placeholder="Search name"
                  value={searchTerm}
                  onChange={handleSearchChange}
                />
              </form>
            </Box>

            <Box className="-mr-10">
              <IconButton
                onClick={handleClick}
                size="small"
                aria-controls={open ? "account-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                sx={{
                  padding: "0",
                }}
              >
                <MoreVertIcon sx={{ fontSize: "25px" }} />
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
                    width: "150px",
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
            <Table sx={{ minWidth: 1150 }}>
              <TableHead>
                <TableRow
                  sx={{
                    th: {
                      fontWeight: "400",
                      padding: "11px 20px",
                      fontSize: "14px",

                      Button: {
                        minWidth: "auto",
                        padding: "0",
                        textTransform: "capitalize",
                        fontSize: "14px",
                        fontWeight: "400",
                      },
                    },
                  }}
                >
                  {[
                    { label: "ID", key: "id" },
                    { label: "Name", key: "name" },
                    { label: "Subject", key: "subject" },
                    { label: "Class", key: "class" },
                    { label: "Contact", key: "contact" },
                    { label: "Result", key: "result" },
                    { label: "Status", key: "status" },
                    { label: "Action", key: "action" },
                  ].map((column) => (
                    <TableCell
                      key={column.key}
                      className="border-top border-bottom"
                    >
                      <Button
                        onClick={() => handleSort(column.key)}
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: "5px",
                        }}
                        className="text-body"
                      >
                        {column.label}{" "}
                        {sortConfig.key === column.key && (
                          <i
                            className={`ri-arrow-${
                              sortConfig.direction === "asc" ? "up" : "down"
                            }-line`}
                            style={{ fontSize: "14px" }}
                          ></i>
                        )}
                      </Button>
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>

              <TableBody>
                {paginatedData.map((student) => (
                  <TableRow
                    key={student.id}
                    sx={{
                      td: {
                        padding: "10.6px 20px",
                        fontSize: { xs: "12px", md: "14px" },
                      },
                    }}
                  >
                    <TableCell
                      className="border-bottom text-black"
                      sx={{ fontWeight: "500", width: "90px" }}
                    >
                      {student.id}
                    </TableCell>

                    <TableCell className="border-bottom">
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                        }}
                      >
                        <img
                          src={student.image}
                          alt="customer-image"
                          width={40}
                          height={40}
                          style={{
                            display: "inline-block",
                            borderRadius: "100px",
                          }}
                        />
                        <Box>
                          <Typography
                            component={"span"}
                            sx={{ display: "block", fontWeight: "500" }}
                            className="text-black"
                          >
                            {student.name}
                          </Typography>

                          <Typography
                            component={"span"}
                            sx={{ display: "block", fontSize: "12px" }}
                          >
                            {student.email}
                          </Typography>
                        </Box>
                      </Box>
                    </TableCell>

                    <TableCell
                      className="border-bottom text-black"
                      sx={{ fontWeight: "500" }}
                    >
                      {student.subject}
                    </TableCell>

                    <TableCell
                      className="border-bottom text-black"
                      sx={{ fontWeight: "500" }}
                    >
                      {student.class}
                    </TableCell>

                    <TableCell
                      className="border-bottom text-black"
                      sx={{ fontWeight: "500" }}
                    >
                      {student.contant}
                    </TableCell>

                    <TableCell
                      className="border-bottom text-black"
                      sx={{ fontWeight: "500" }}
                    >
                      {student.result}
                    </TableCell>

                    <TableCell className="border-bottom">
                      <Box
                        sx={{
                          px: "8px",
                          py: "3px",
                          display: "inline-block",
                          bgcolor: `${student.statusColor}.100`,
                          color: `${student.statusColor}.700`,
                          borderRadius: "2px",
                          fontSize: "12px",
                          fontWeight: 500,
                        }}
                      >
                        {student.status}
                      </Box>
                    </TableCell>

                    <TableCell className="border-bottom">
                      <Box sx={{ display: "flex", alignItems: "center" }}>
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
          </TableContainer>
        </Box>

        {/* Pagination */}
        <Box
          sx={{
            pt: "10px",
            display: { sm: "flex" },
            alignItems: { sm: "center" },
            justifyContent: "space-between",
          }}
        >
          <Typography sx={{ fontSize: "13px" }}>
            Showing {paginatedData.length} of {studentsList.length} results
          </Typography>

          <Box
            sx={{
              mt: { xs: "10px", sm: "0" },
              display: "flex",
              alignItems: "center",
              gap: "5px",
            }}
          >
            <Button
              disabled={currentPage === 1}
              onClick={() => handlePageChange(currentPage - 1)}
              className="border text-black"
              sx={{
                minWidth: "auto",
                width: "30px",
                height: "30px",
                lineHeight: "30px",
                padding: "0",
                textAlign: "center",
                borderRadius: "4px",
                "&:hover": {
                  backgroundColor: "primary.main",
                  color: "#fff !important",
                },
              }}
            >
              <ChevronLeftIcon />
            </Button>

            {Array.from({ length: totalPages }).map((_, idx) => (
              <Button
                key={idx}
                onClick={() => handlePageChange(idx + 1)}
                className="border"
                sx={{
                  minWidth: "30px",
                  height: "30px",
                  bgcolor:
                    idx + 1 === currentPage ? "primary.main" : "transparent",
                  color:
                    idx + 1 === currentPage
                      ? "white !important"
                      : "text.primary",
                  "&:hover": {
                    bgcolor: "primary.main",
                    color: "white !important",
                  },
                }}
              >
                {idx + 1}
              </Button>
            ))}

            <Button
              disabled={currentPage === totalPages}
              onClick={() => handlePageChange(currentPage + 1)}
              className="border text-black"
              sx={{
                minWidth: "auto",
                width: "30px",
                height: "30px",
                lineHeight: "30px",
                padding: "0",
                textAlign: "center",
                borderRadius: "4px",
                "&:hover": {
                  backgroundColor: "primary.main",
                  color: "#fff !important",
                },
              }}
            >
              <ChevronRightIcon />
            </Button>
          </Box>
        </Box>
      </Card>
    </>
  );
};

export default StudentsList;
