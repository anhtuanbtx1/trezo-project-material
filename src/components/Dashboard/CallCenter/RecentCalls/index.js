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

const initialData = [
  {
    id: "1",
    name: "Laura Martin",
    phone: "+61 2 1234 5678",
    type: "Inbound",
    duration: "4 mins",
    status: "Dropped",
    time: "10:45 AM",
    csat: "87%",
    image: "/images/users/user7.jpg",
  },
  {
    id: "2",
    name: "Sarah Green",
    phone: "+44 20 7946 0958",
    type: "Outbound",
    duration: "3 mins",
    status: "Pending",
    time: "10:35 AM",
    csat: "85%",
    image: "/images/users/user59.jpg",
  },
  {
    id: "3",
    name: "Emily Johnson",
    phone: "+1 555-123-4567",
    type: "Inbound",
    duration: "5 mins",
    status: "Resolved",
    time: "10:30 AM",
    csat: "90%",
    image: "/images/users/user58.jpg",
  },
  {
    id: "4",
    name: "Adam Smith",
    phone: "+1 555-234-5678",
    type: "Inbound",
    duration: "7 mins",
    status: "Resolved",
    time: "10:40 AM",
    csat: "92%",
    image: "/images/users/user60.jpg",
  },
  {
    id: "5",
    name: "Anderson",
    phone: "+61 2 1234 4678",
    type: "Inbound",
    duration: "4 mins",
    status: "Dropped",
    time: "10:45 AM",
    csat: "87%",
    image: "/images/users/user5.jpg",
  },
  {
    id: "6",
    name: "Wilson",
    phone: "+44 20 7946 8632",
    type: "Outbound",
    duration: "3 mins",
    status: "Pending",
    time: "10:35 AM",
    csat: "85%",
    image: "/images/users/user6.jpg",
  },
  {
    id: "7",
    name: "Anderson",
    phone: "+1 555-123-4790",
    type: "Inbound",
    duration: "5 mins",
    status: "Resolved",
    time: "10:30 AM",
    csat: "90%",
    image: "/images/users/user7.jpg",
  },
  {
    id: "8",
    name: "Morton",
    phone: "+1 555-234-4680",
    type: "Inbound",
    duration: "7 mins",
    status: "Resolved",
    time: "10:40 AM",
    csat: "92%",
    image: "/images/users/user8.jpg",
  },
];

const getStatusColor = (status) => {
  switch (status) {
    case "Resolved":
      return "success.500";
    case "Pending":
      return "orange.500";
    case "Dropped":
      return "purple.500";
    default:
      return "text.primary";
  }
};

// Define colors based on status
const getCallTypeColor = (type) => {
  return type === "Inbound" ? "primary.500" : "orange.500";
};

const RecentCalls = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const itemsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [data, setData] = useState(initialData);
  const [sortConfig, setSortConfig] = useState(null);

  const handleSort = (key) => {
    let direction = "asc";
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "asc"
    ) {
      direction = "desc";
    }
    setSortConfig({ key, direction });
    const sortedData = [...data].sort((a, b) => {
      if (a[key] < b[key]) return direction === "asc" ? -1 : 1;
      if (a[key] > b[key]) return direction === "asc" ? 1 : -1;
      return 0;
    });
    setData(sortedData);
  };

  const filteredData = data.filter(
    (call) =>
      call.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      call.phone.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
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
            Recent Calls
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
                  value={searchQuery}
                  onChange={handleSearch}
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
            <Table sx={{ minWidth: 800 }}>
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
                  <TableCell className="border-top border-bottom">
                    <Button
                      className="text-body"
                      onClick={() => handleSort("name")}
                    >
                      Caller Name{" "}
                      <i className="ri-expand-up-down-fill ml-1"></i>
                    </Button>
                  </TableCell>

                  <TableCell className="border-top border-bottom">
                    <Button
                      className="text-body"
                      onClick={() => handleSort("type")}
                    >
                      Call Type <i className="ri-expand-up-down-fill ml-1"></i>
                    </Button>
                  </TableCell>

                  <TableCell className="border-top border-bottom">
                    <Button
                      className="text-body"
                      onClick={() => handleSort("duration")}
                    >
                      Duration <i className="ri-expand-up-down-fill ml-1"></i>
                    </Button>
                  </TableCell>

                  <TableCell className="border-top border-bottom text-end">
                    <Button
                      className="text-body"
                      onClick={() => handleSort("status")}
                    >
                      Status <i className="ri-expand-up-down-fill ml-1"></i>
                    </Button>
                  </TableCell>

                  <TableCell className="border-top border-bottom text-end">
                    <Button
                      className="text-body"
                      onClick={() => handleSort("time")}
                    >
                      Time <i className="ri-expand-up-down-fill ml-1"></i>
                    </Button>
                  </TableCell>

                  <TableCell className="border-top border-bottom text-end">
                    <Button
                      className="text-body"
                      onClick={() => handleSort("csat")}
                    >
                      CSAT <i className="ri-expand-up-down-fill ml-1"></i>
                    </Button>
                  </TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {paginatedData.map((call) => (
                  <TableRow
                    sx={{
                      td: {
                        padding: "14px 20px",
                        fontSize: { xs: "12px", md: "14px" },
                        fontWeight: "500",
                      },
                    }}
                    key={call.id}
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
                          src={call.image}
                          alt="caller-image"
                          width={40}
                          height={40}
                          style={{
                            display: "inline-block",
                            borderRadius: "100px",
                          }}
                        />
                        <Box>
                          <Typography
                            variant="h5"
                            sx={{
                              fontSize: "14px",
                              fontWeight: "500",
                              mb: "2px",
                            }}
                            className="text-black"
                          >
                            {call.name}
                          </Typography>
                          <Typography
                            component={"span"}
                            sx={{ display: "block", fontSize: "12px" }}
                          >
                            {call.phone}
                          </Typography>
                        </Box>
                      </Box>
                    </TableCell>

                    <TableCell
                      className="border-bottom"
                      sx={{ color: getCallTypeColor(call.type) }}
                    >
                      {call.type}
                    </TableCell>

                    <TableCell className="border-bottom">
                      {call.duration}
                    </TableCell>

                    <TableCell
                      className="border-bottom"
                      sx={{ color: getStatusColor(call.status) }}
                    >
                      {call.status}
                    </TableCell>

                    <TableCell className="border-bottom">{call.time}</TableCell>

                    <TableCell
                      className="border-bottom text-end"
                      sx={{ color: getStatusColor(call.status) }}
                    >
                      {call.csat}
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
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography sx={{ fontSize: "13px" }}>
            Showing {paginatedData.length} of {filteredData.length} results
          </Typography>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "5px",
            }}
          >
            <Button
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
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

            <Button
              className="border text-body"
              sx={{
                bgcolor: "primary.main",
                color: "white !important",
                minWidth: "30px",
                height: "30px",

                "&:hover": {
                  bgcolor: "primary.main",
                  color: "white !important",
                },
              }}
            >
              {currentPage} of {totalPages}
            </Button>

            <Button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
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

export default RecentCalls;
