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
const transactionHistory = [
  {
    id: "#TID0015",
    date: "10 Apr 2024",
    description: "Payment from Client",
    amount: "$5,000",
    type: "Income",
  },
  {
    id: "#TID0016",
    date: "11 Apr 2024",
    description: "Office Supplies",
    amount: "$10,000",
    type: "Expense",
  },
  {
    id: "#TID0017",
    date: "12 Apr 2024",
    description: "Website Maintenance",
    amount: "$35,000",
    type: "Expense",
  },
  {
    id: "#TID0018",
    date: "13 Apr 2024",
    description: "Payment from Client",
    amount: "$2,000",
    type: "Income",
  },
  {
    id: "#TID0019",
    date: "14 Apr 2024",
    description: "Advertising Campaign",
    amount: "$15,500",
    type: "Income",
  },
  {
    id: "#TID0020",
    date: "15 Apr 2024",
    description: "Payment from Client",
    amount: "$5,000",
    type: "Income",
  },
  {
    id: "#TID0021",
    date: "16 Apr 2024",
    description: "Office Supplies",
    amount: "$10,000",
    type: "Expense",
  },
  {
    id: "#TID0022",
    date: "17 Apr 2024",
    description: "Payment from Client",
    amount: "$5,000",
    type: "Income",
  },
  {
    id: "#TID0023",
    date: "18 Apr 2024",
    description: "Office Supplies",
    amount: "$10,000",
    type: "Expense",
  },
  {
    id: "#TID0024",
    date: "19 Apr 2024",
    description: "Website Maintenance",
    amount: "$35,000",
    type: "Expense",
  },
  {
    id: "#TID0025",
    date: "20 Apr 2024",
    description: "Payment from Client",
    amount: "$2,000",
    type: "Income",
  },
  {
    id: "#TID0026",
    date: "21 Apr 2024",
    description: "Advertising Campaign",
    amount: "$15,500",
    type: "Income",
  },
  {
    id: "#TID0027",
    date: "22 Apr 2024",
    description: "Payment from Client",
    amount: "$5,000",
    type: "Income",
  },
  {
    id: "#TID0028",
    date: "23 Apr 2024",
    description: "Office Supplies",
    amount: "$10,000",
    type: "Expense",
  },
];

const ITEMS_PER_PAGE = 7;

const TransactionHistory = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const open = Boolean(anchorEl);
  const totalPages = Math.ceil(transactionHistory.length / ITEMS_PER_PAGE);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const paginatedData = transactionHistory.slice(
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
            Transaction History
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
            <Table sx={{ minWidth: 900 }}>
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
                    Transaction ID
                  </TableCell>
                  <TableCell className="text-black border-bottom">
                    Date
                  </TableCell>
                  <TableCell className="text-black border-bottom">
                    Description
                  </TableCell>
                  <TableCell className="text-black border-bottom">
                    Amount
                  </TableCell>
                  <TableCell className="text-black border-bottom">
                    Type
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
                        padding: "14px 20px",
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
                      {transaction.date}
                    </TableCell>

                    <TableCell className="text-black border-bottom">
                      {transaction.description}
                    </TableCell>

                    <TableCell className="text-black border-bottom">
                      <Box sx={{ color: "primary.main" }}>
                        {transaction.amount}
                      </Box>
                    </TableCell>

                    <TableCell className="border-bottom">
                      {transaction.type}
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
            Showing {paginatedData.length} of {transactionHistory.length}{" "}
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

export default TransactionHistory;
