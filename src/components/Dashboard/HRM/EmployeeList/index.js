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

const employeeList = [
  {
    id: "EMP001",
    employeeImage: "/images/users/user37.jpg",
    employeeName: "Liam Bennett",
    email: "liam@gmail.com",
    department: "Human Resources",
    position: "HR Manager",
    joiningDate: "Mar 10, 2021",
    salary: "$75,000",
    status: "On Leave",
    statusColor: "purple",
  },
  {
    id: "EMP002",
    employeeImage: "/images/users/user40.jpg",
    employeeName: "Isabella Reed",
    email: "isabella@gmail.com",
    department: "Finance",
    position: "Financial Analyst",
    joiningDate: "Aug 05, 2020",
    salary: "$80,000",
    status: "Resigned",
    statusColor: "error",
  },
  {
    id: "EMP003",
    employeeImage: "/images/users/user36.jpg",
    employeeName: "Olivia Turner",
    email: "olivia@gmail.com",
    department: "Marketing",
    position: "Marketing Lead",
    joiningDate: "Jan 15, 2020",
    salary: "$85,000",
    status: "Active",
    statusColor: "success",
  },
  {
    id: "EMP004",
    employeeImage: "/images/users/user39.jpg",
    employeeName: "Ethan Collins",
    email: "ethan@gmail.com",
    department: "Sales",
    position: "Sales Manager",
    joiningDate: "Apr 12, 2022",
    salary: "$90,000",
    status: "Active",
    statusColor: "success",
  },
  {
    id: "EMP005",
    employeeImage: "/images/users/user38.jpg",
    employeeName: "Sophia Myers",
    email: "sophia@gmail.com",
    department: "IT",
    position: "Software Engineer",
    joiningDate: "Feb 22, 2019",
    salary: "$95,000",
    status: "Active",
    statusColor: "success",
  },
  {
    id: "EMP006",
    employeeImage: "/images/users/user56.jpg",
    employeeName: "William",
    email: "william@gmail.com",
    department: "Human Resources",
    position: "HR Manager",
    joiningDate: "Mar 10, 2021",
    salary: "$75,000",
    status: "On Leave",
    statusColor: "purple",
  },
  {
    id: "EMP007",
    employeeImage: "/images/users/user57.jpg",
    employeeName: "Thomas",
    email: "thomas@gmail.com",
    department: "Finance",
    position: "Financial Analyst",
    joiningDate: "Aug 05, 2020",
    salary: "$80,000",
    status: "Resigned",
    statusColor: "error",
  },
  {
    id: "EMP008",
    employeeImage: "/images/users/user58.jpg",
    employeeName: "Bethany",
    email: "bethany@gmail.com",
    department: "Marketing",
    position: "Marketing Lead",
    joiningDate: "Jan 15, 2020",
    salary: "$85,000",
    status: "Active",
    statusColor: "success",
  },
  {
    id: "EMP009",
    employeeImage: "/images/users/user59.jpg",
    employeeName: "Joanne",
    email: "joanne@gmail.com",
    department: "Sales",
    position: "Sales Manager",
    joiningDate: "Apr 12, 2022",
    salary: "$90,000",
    status: "Active",
    statusColor: "success",
  },
  {
    id: "EMP010",
    employeeImage: "/images/users/user60.jpg",
    employeeName: "Michelle",
    email: "michelle@gmail.com",
    department: "IT",
    position: "Software Engineer",
    joiningDate: "Feb 22, 2019",
    salary: "$95,000",
    status: "Active",
    statusColor: "success",
  },
];

const ITEMS_PER_PAGE = 5;

const EmployeeList = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [sortConfig, setSortConfig] = useState({
    key: "",
    direction: "",
  });

  const filteredEmployees = employeeList
    .filter((employee) =>
      employee.employeeName.toLowerCase().includes(searchTerm.toLowerCase())
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

  const totalPages = Math.ceil(filteredEmployees.length / ITEMS_PER_PAGE);
  const paginatedData = filteredEmployees.slice(
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
            Employee List
          </Typography>

          <Box
            sx={{
              display: { xs: "flex", sm: "flex" },
              alignItems: "center",
              gap: "10px",
            }}
          >
            <Box>
              <form className='t-search-form'>
                <label>
                  <i className="material-symbols-outlined">search</i>
                </label>
                <input
                  type="text"
                  className='t-input'
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
                    { label: "Employee", key: "employeeName" },
                    { label: "Department", key: "department" },
                    { label: "Position", key: "position" },
                    { label: "Joining Date", key: "joiningDate" },
                    { label: "Salary", key: "salary" },
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
                {paginatedData.map((employee) => (
                  <TableRow
                    key={employee.id}
                    sx={{
                      td: {
                        padding: "10.6px 20px",
                        fontSize: { xs: "12px", md: "14px" },
                      },
                    }}
                  >
                    <TableCell
                      className="border-bottom text-black"
                      sx={{ fontWeight: "500" }}
                    >
                      {employee.id}
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
                          src={employee.employeeImage}
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
                            {employee.employeeName}
                          </Typography>

                          <Typography
                            component={"span"}
                            sx={{ display: "block", fontSize: "12px" }}
                          >
                            {employee.email}
                          </Typography>
                        </Box>
                      </Box>
                    </TableCell>

                    <TableCell
                      className="border-bottom text-black"
                      sx={{ fontWeight: "500" }}
                    >
                      {employee.department}
                    </TableCell>

                    <TableCell
                      className="border-bottom text-black"
                      sx={{ fontWeight: "500" }}
                    >
                      {employee.position}
                    </TableCell>

                    <TableCell
                      className="border-bottom text-black"
                      sx={{ fontWeight: "500" }}
                    >
                      {employee.joiningDate}
                    </TableCell>

                    <TableCell
                      className="border-bottom text-black"
                      sx={{ fontWeight: "500" }}
                    >
                      {employee.salary}
                    </TableCell>

                    <TableCell className="border-bottom">
                      <Box
                        sx={{
                          px: "8px",
                          py: "3px",
                          display: "inline-block",
                          bgcolor: `${employee.statusColor}.100`,
                          color: `${employee.statusColor}.700`,
                          borderRadius: "2px",
                          fontSize: "12px",
                          fontWeight: 500,
                        }}
                      >
                        {employee.status}
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
            Showing {paginatedData.length} of {employeeList.length} results
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

export default EmployeeList;
