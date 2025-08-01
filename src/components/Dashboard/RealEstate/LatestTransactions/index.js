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
    id: "#TRE0015",
    customerName: "Sarah Johnson",
    customerImage: "/images/users/user1.jpg",
    property: "Industrial",
    date: "30 Apr 2024",
    price: "$500,000",
    status: "Completed",
    statusColor: "success",
    paymentMethod: "Master Card",
  },
  {
    id: "#TRE0016",
    customerName: "John Smith",
    customerImage: "/images/users/user2.jpg",
    property: "Residential",
    date: "28 Apr 2024",
    price: "$750,000",
    status: "Pending",
    statusColor: "primary",
    paymentMethod: "Visa Card",
  },
  {
    id: "#TRE0017",
    customerName: "Alice Brown",
    customerImage: "/images/users/user3.jpg",
    property: "Retail",
    date: "25 Apr 2024",
    price: "$300,000",
    status: "Canceled",
    statusColor: "orange",
    paymentMethod: "Paypal",
  },
  {
    id: "#TRE0018",
    customerName: "Jason Lee",
    customerImage: "/images/users/user4.jpg",
    property: "Residential",
    date: "27 Apr 2024",
    price: "$220,000",
    status: "Completed",
    statusColor: "success",
    paymentMethod: "Payoneer",
  },
  {
    id: "#TRE0019",
    customerName: "Ashley Davis",
    customerImage: "/images/users/user5.jpg",
    property: "Commercial",
    date: "28 Apr 2024",
    price: "$150,000",
    status: "Rejected",
    statusColor: "orange",
    paymentMethod: "Credit Card",
  },
  {
    id: "#TRE0020",
    customerName: "Wilson Johnson",
    customerImage: "/images/users/user61.jpg",
    property: "Industrial",
    date: "30 Apr 2024",
    price: "$500,000",
    status: "Completed",
    statusColor: "success",
    paymentMethod: "Master Card",
  },
  {
    id: "#TRE0021",
    customerName: "Gagnon Smith",
    customerImage: "/images/users/user62.jpg",
    property: "Residential",
    date: "28 Apr 2024",
    price: "$750,000",
    status: "Pending",
    statusColor: "primary",
    paymentMethod: "Visa Card",
  },
  {
    id: "#TRE0022",
    customerName: "Tremblay Brown",
    customerImage: "/images/users/user63.jpg",
    property: "Retail",
    date: "25 Apr 2024",
    price: "$300,000",
    status: "Canceled",
    statusColor: "orange",
    paymentMethod: "Paypal",
  },
  {
    id: "#TRE0023",
    customerName: "Morton Lee",
    customerImage: "/images/users/user64.jpg",
    property: "Residential",
    date: "27 Apr 2024",
    price: "$220,000",
    status: "Completed",
    statusColor: "success",
    paymentMethod: "Payoneer",
  },
  {
    id: "#TRE0024",
    customerName: "Anderson Davis",
    customerImage: "/images/users/user65.jpg",
    property: "Commercial",
    date: "28 Apr 2024",
    price: "$150,000",
    status: "Rejected",
    statusColor: "orange",
    paymentMethod: "Credit Card",
  },
];

const ITEMS_PER_PAGE = 5;

const LatestTransactions = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [currentPage, setCurrentPage] = useState(1);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const totalPages = Math.ceil(transactions.length / ITEMS_PER_PAGE);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const paginatedData = transactions.slice(
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
            Latest Transactions
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
                p: "0",
                display: "flex",
                alignItems: "center",
                gap: "5px",

                "&:hover": {
                  bgcolor: "transparent",
                },
              }}
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
                    Customer ID
                  </TableCell>
                  <TableCell className="text-black border-bottom">
                    Customer Name
                  </TableCell>
                  <TableCell className="text-black border-bottom">
                    Property
                  </TableCell>
                  <TableCell className="text-black border-bottom">
                    Date
                  </TableCell>
                  <TableCell className="text-black border-bottom">
                    Price
                  </TableCell>
                  <TableCell className="text-black border-bottom">
                    Status
                  </TableCell>
                  <TableCell className="text-black border-bottom">
                    Payment
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
                          width={40}
                          height={40}
                          style={{
                            display: "inline-block",
                            borderRadius: "7px",
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
                      {transaction.property}
                    </TableCell>
                    <TableCell className="text-black border-bottom">
                      {transaction.date}
                    </TableCell>
                    <TableCell className="text-black border-bottom">
                      {transaction.price}
                    </TableCell>

                    <TableCell className="border-bottom">
                      <Box
                        sx={{
                          px: "8px",
                          py: "3px",
                          display: "inline-block",
                          bgcolor: `${transaction.statusColor}.50`,
                          color: `${transaction.statusColor}.600`,
                          borderRadius: "7px",
                          fontSize: "12px",
                          fontWeight: 500,
                        }}
                      >
                        {transaction.status}
                      </Box>
                    </TableCell>

                    <TableCell className="border-bottom">
                      {transaction.paymentMethod}
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
            Showing {paginatedData.length} of {transactions.length} results
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

export default LatestTransactions;
