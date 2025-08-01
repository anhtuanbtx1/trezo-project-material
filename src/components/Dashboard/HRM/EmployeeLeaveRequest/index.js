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
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const employeeLeaveRequest = [
  {
    id: "1",
    employeeImage: "/images/users/user42.jpg",
    employeeName: "John Doe",
    designation: "Marketing",
    leaveType: "Vacation",
    days: "3",
    status: "Approved",
    statusColor: "success",
  },
  {
    id: "2",
    employeeImage: "/images/users/user43.jpg",
    employeeName: "Jane Smith",
    designation: "HR",
    leaveType: "Sick Leave",
    days: "2",
    status: "Pending",
    statusColor: "purple",
  },
  {
    id: "3",
    employeeImage: "/images/users/user44.jpg",
    employeeName: "Alex Johnson",
    designation: "Developer",
    leaveType: "Maternity Leave",
    days: "4",
    status: "Rejected",
    statusColor: "orange",
  },
  {
    id: "4",
    employeeImage: "/images/users/user45.jpg",
    employeeName: "Emily Davis",
    designation: "UX Designer",
    leaveType: "Vacation",
    days: "2",
    status: "Approved",
    statusColor: "success",
  },
  {
    id: "5",
    employeeImage: "/images/users/user46.jpg",
    employeeName: "Michael Brown",
    designation: "Finance",
    leaveType: "Personal Leave",
    days: "1",
    status: "Pending",
    statusColor: "purple",
  },
  {
    id: "6",
    employeeImage: "/images/users/user47.jpg",
    employeeName: "Amelia",
    designation: "Marketing",
    leaveType: "Vacation",
    days: "3",
    status: "Approved",
    statusColor: "success",
  },
  {
    id: "7",
    employeeImage: "/images/users/user48.jpg",
    employeeName: "Samantha",
    designation: "HR",
    leaveType: "Sick Leave",
    days: "2",
    status: "Pending",
    statusColor: "purple",
  },
  {
    id: "8",
    employeeImage: "/images/users/user49.jpg",
    employeeName: "Michelle",
    designation: "Developer",
    leaveType: "Maternity Leave",
    days: "4",
    status: "Rejected",
    statusColor: "orange",
  },
  {
    id: "9",
    employeeImage: "/images/users/user50.jpg",
    employeeName: "Williams",
    designation: "UX Designer",
    leaveType: "Vacation",
    days: "2",
    status: "Approved",
    statusColor: "success",
  },
  {
    id: "10",
    employeeImage: "/images/users/user51.jpg",
    employeeName: "Gelbero",
    designation: "Finance",
    leaveType: "Personal Leave",
    days: "1",
    status: "Pending",
    statusColor: "purple",
  },
];

const ITEMS_PER_PAGE = 5;

const EmployeeLeaveRequest = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(employeeLeaveRequest.length / ITEMS_PER_PAGE);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const paginatedData = employeeLeaveRequest.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

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
            display: 'flex',
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
            Employee Leave Request
          </Typography>

          <Box>
            <IconButton
              onClick={handleClick}
              size="small"
              aria-controls={open ? "account-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              sx={{
                borderRadius: "0.375rem",
                fontSize: "14px",
                p: "8px 19.5px",
                display: "flex",
                alignItems: "center",
                gap: "5px",

                "&:hover": {
                  bgcolor: "transparent",
                },
              }}
              className="border"
            >
              This Month <KeyboardArrowDownIcon sx={{ fontSize: "20px" }} />
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
                  width: "160px",
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
            <Table sx={{ minWidth: 700 }}>
              <TableHead>
                <TableRow
                  sx={{
                    th: {
                      fontWeight: "400",
                      padding: "11px 20px",
                      fontSize: "14px",
                    },
                  }}
                >
                  <TableCell className="border-top border-bottom">
                    Employee
                  </TableCell>
                  <TableCell className="border-top border-bottom">
                    Leave Type
                  </TableCell>
                  <TableCell className="border-top border-bottom">
                    Days
                  </TableCell>
                  <TableCell className="border-top border-bottom">
                    Status
                  </TableCell>
                  <TableCell className="border-top border-bottom">
                    Action
                  </TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {paginatedData.map((employeeLeave) => (
                  <TableRow
                    key={employeeLeave.id}
                    sx={{
                      td: {
                        padding: "10.6px 20px",
                        fontSize: "14px",
                      },
                    }}
                  >
                    <TableCell className="border-bottom">
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                        }}
                      >
                        <img
                          src={employeeLeave.employeeImage}
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
                            {employeeLeave.employeeName}
                          </Typography>

                          <Typography
                            component={"span"}
                            sx={{ display: "block", fontSize: "12px" }}
                          >
                            {employeeLeave.designation}
                          </Typography>
                        </Box>
                      </Box>
                    </TableCell>

                    <TableCell
                      className="border-bottom text-black"
                      sx={{ fontWeight: "500" }}
                    >
                      {employeeLeave.leaveType}
                    </TableCell>

                    <TableCell
                      className="border-bottom text-black"
                      sx={{ fontWeight: "500" }}
                    >
                      {employeeLeave.days}
                    </TableCell>

                    <TableCell className="border-bottom">
                      <Box
                        sx={{
                          px: "8px",
                          py: "3px",
                          display: "inline-block",
                          bgcolor: `${employeeLeave.statusColor}.100`,
                          color: `${employeeLeave.statusColor}.700`,
                          borderRadius: "2px",
                          fontSize: "12px",
                          fontWeight: 500,
                        }}
                      >
                        {employeeLeave.status}
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
            Showing {paginatedData.length} of {employeeLeaveRequest.length}{" "}
            results
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

export default EmployeeLeaveRequest;
