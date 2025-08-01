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
  Checkbox,
  Button,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

// Dynamic data
const transactions = [
  {
    id: "#0015",
    customerImage: "/images/users/user54.jpg",
    customerName: "David Farrior",
    products: "Toys",
    cost: "$50,000",
    shipDate: "20 Apr 2024",
    origin: "New York, USA",
    shipmentMethod: "Air",
    status: "Delivered",
    statusColor: "success",
  },
  {
    id: "#0016",
    customerImage: "/images/users/user55.jpg",
    customerName: "Leslie Yawn",
    products: "	Sports",
    cost: "$1,20,000",
    shipDate: "21 Apr 2024",
    origin: "Shanghai, China",
    shipmentMethod: "Sea",
    status: "In Transit",
    statusColor: "primary",
  },
  {
    id: "#0017",
    customerImage: "/images/users/user59.jpg",
    customerName: "Willie Wood",
    products: "Fashion",
    cost: "$35,000",
    shipDate: "22 Apr 2024",
    origin: "Berlin, Germany",
    shipmentMethod: "Road",
    status: "On The Way",
    statusColor: "orange",
  },
  {
    id: "#0018",
    customerImage: "/images/users/user51.jpg",
    customerName: "Jill Caldera",
    products: "Food",
    cost: "$80,000",
    shipDate: "23 Apr 2024",
    origin: "Tokyo, Japan",
    shipmentMethod: "Air",
    status: "Delivered",
    statusColor: "success",
  },
  {
    id: "#0019",
    customerImage: "/images/users/user43.jpg",
    customerName: "Bill Mitchell",
    products: "Electronics",
    cost: "$1,50,000",
    shipDate: "24 Apr 2024",
    origin: "Madrid, Spain",
    shipmentMethod: "Sea",
    status: "Pending",
    statusColor: "warning",
  },
  {
    id: "#0020",
    customerImage: "/images/users/user44.jpg",
    customerName: "Oliver Jake",
    products: "Toys",
    cost: "$50,000",
    shipDate: "20 Apr 2024",
    origin: "New York, USA",
    shipmentMethod: "Air",
    status: "Delivered",
    statusColor: "success",
  },
  {
    id: "#0021",
    customerImage: "/images/users/user45.jpg",
    customerName: "Harry Callum",
    products: "	Sports",
    cost: "$1,20,000",
    shipDate: "21 Apr 2024",
    origin: "Shanghai, China",
    shipmentMethod: "Sea",
    status: "In Transit",
    statusColor: "primary",
  },
  {
    id: "#0022",
    customerImage: "/images/users/user46.jpg",
    customerName: "George Reece",
    products: "Fashion",
    cost: "$35,000",
    shipDate: "22 Apr 2024",
    origin: "Berlin, Germany",
    shipmentMethod: "Road",
    status: "On The Way",
    statusColor: "orange",
  },
  {
    id: "#0023",
    customerImage: "/images/users/user47.jpg",
    customerName: "Olivia Samantha",
    products: "Food",
    cost: "$80,000",
    shipDate: "23 Apr 2024",
    origin: "Tokyo, Japan",
    shipmentMethod: "Air",
    status: "Delivered",
    statusColor: "success",
  },
  {
    id: "#0024",
    customerImage: "/images/users/user48.jpg",
    customerName: "Jessica Mitchell",
    products: "Electronics",
    cost: "$1,50,000",
    shipDate: "24 Apr 2024",
    origin: "Madrid, Spain",
    shipmentMethod: "Sea",
    status: "Pending",
    statusColor: "warning",
  },
];

const ITEMS_PER_PAGE = 5;

const ShipmentList = () => {
  // Dropdown
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(transactions.length / ITEMS_PER_PAGE);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const filteredTransactions = transactions.filter((transaction) =>
    transaction.customerName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const paginatedData = filteredTransactions.slice(
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
            Shipment List
          </Typography>

          <Box
            sx={{
              display: { xs: "block", sm: "flex" },
              alignItems: "center",
              gap: "20px",
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
                Last 30 Days <KeyboardArrowDownIcon sx={{ fontSize: "20px" }} />
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
                <MenuItem>Last 7 Days</MenuItem>
                <MenuItem>Last 15 Days</MenuItem>
                <MenuItem>Last 30 Days</MenuItem>
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
            <Table sx={{ minWidth: 1200 }}>
              <TableHead className="bg-primary-50">
                <TableRow
                  sx={{
                    th: {
                      fontWeight: "400",
                      padding: "11px 20px",
                      fontSize: "14px",
                    },
                  }}
                >
                  <TableCell className="text-black border-bottom">
                    Shipment ID
                  </TableCell>
                  <TableCell className="text-black border-bottom">
                    Customer Name
                  </TableCell>
                  <TableCell className="text-black border-bottom">
                    Products
                  </TableCell>
                  <TableCell className="text-black border-bottom">
                    Cost
                  </TableCell>
                  <TableCell className="text-black border-bottom">
                    Ship Date
                  </TableCell>
                  <TableCell className="text-black border-bottom">
                    Origin
                  </TableCell>
                  <TableCell className="text-black border-bottom">
                    Shipment Method
                  </TableCell>
                  <TableCell className="text-black border-bottom">
                    Status
                  </TableCell>
                  <TableCell className="text-black border-bottom">
                    Action
                  </TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {paginatedData.map((transaction) => (
                  <TableRow
                    key={transaction.id}
                    sx={{
                      td: {
                        padding: "15px 20px",
                        fontSize: "14px",
                      },
                    }}
                  >
                    <TableCell className="border-bottom">
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Checkbox sx={{ padding: "7px" }} />
                        {transaction.id}
                      </Box>
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
                          src={transaction.customerImage}
                          alt="customer-image"
                          width={30}
                          height={30}
                          style={{
                            display: "inline-block",
                            borderRadius: "100px",
                          }}
                        />
                        <Typography
                          component={"span"}
                          sx={{ display: "block", fontWeight: "500" }}
                          className="text-black"
                        >
                          {transaction.customerName}
                        </Typography>
                      </Box>
                    </TableCell>

                    <TableCell className="border-bottom">
                      {transaction.products}
                    </TableCell>

                    <TableCell className="border-bottom">
                      <Box sx={{ color: "orange.500" }}>{transaction.cost}</Box>
                    </TableCell>

                    <TableCell className="border-bottom">
                      {transaction.shipDate}
                    </TableCell>

                    <TableCell className="border-bottom">
                      {transaction.origin}
                    </TableCell>

                    <TableCell className="border-bottom">
                      {transaction.shipmentMethod}
                    </TableCell>

                    <TableCell className="border-bottom">
                      <Box
                        sx={{
                          px: "8px",
                          py: "3px",
                          display: "inline-block",
                          bgcolor: `${transaction.statusColor}.50`,
                          color: `${transaction.statusColor}.600`,
                          borderRadius: "4px",
                          fontSize: "12px",
                          fontWeight: 500,
                        }}
                      >
                        {transaction.status}
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
            Showing {paginatedData.length} of {filteredTransactions.length}{" "}
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

export default ShipmentList;
