"use client";

import React, { useState, useEffect } from "react";
import {
  Box,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Paper,
  Card,
  Menu,
  MenuItem,
  Button,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const ITEMS_PER_PAGE = 5;

const LatestTransactions = () => {
  const [transactions, setTransactions] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  // Dropdown state
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    const sampleTransactions = [
      {
        id: "#001",
        clientImage: "/images/users/user58.jpg",
        clientName: "Johhna Loren",
        clientEmail: "loren123@gmail.com",
        amount: "$6240",
        subscriptionPlan: "Pro",
        paymentMethod: "Paypal",
        paymentMethodIcon: "/images/payment-method/paypal.svg",
        status: "Completed",
        statusColor: "success",
      },
      {
        id: "#002",
        clientImage: "/images/users/user53.jpg",
        clientName: "Skyler White",
        clientEmail: "skyqueen@gmail.com",
        amount: "$5135",
        subscriptionPlan: "Enterprise",
        paymentMethod: "Wise",
        paymentMethodIcon: "/images/payment-method/wise.svg",
        status: "Pending",
        statusColor: "primary",
      },
      {
        id: "#003",
        clientImage: "/images/users/user55.jpg",
        clientName: "Jonathon Watson",
        clientEmail: "jona2134@gmail.com",
        amount: "$4321",
        subscriptionPlan: "Startup",
        paymentMethod: "Bank",
        paymentMethodIcon: "/images/payment-method/bank.svg",
        status: "Failed",
        statusColor: "error",
      },
      {
        id: "#004",
        clientImage: "/images/users/user54.jpg",
        clientName: "Walter White",
        clientEmail: "walterwhite@gmail.com",
        amount: "$3124",
        subscriptionPlan: "Pro",
        paymentMethod: "Skrill",
        paymentMethodIcon: "/images/payment-method/skrill.svg",
        status: "Completed",
        statusColor: "success",
      },
      {
        id: "#005",
        clientImage: "/images/users/user40.jpg",
        clientName: "David Carlen",
        clientEmail: "davidcarlen@gmail.com",
        amount: "$2137",
        subscriptionPlan: "Basic",
        paymentMethod: "Paypal",
        paymentMethodIcon: "/images/payment-method/paypal.svg",
        status: "Pending",
        statusColor: "primary",
      },
      {
        id: "#006",
        clientImage: "/images/users/user36.jpg",
        clientName: "Olivia",
        clientEmail: "olivia@gmail.com",
        amount: "$5321",
        subscriptionPlan: "Startup",
        paymentMethod: "Bank",
        paymentMethodIcon: "/images/payment-method/bank.svg",
        status: "Failed",
        statusColor: "error",
      },
      {
        id: "#007",
        clientImage: "/images/users/user37.jpg",
        clientName: "Samantha",
        clientEmail: "samantha@gmail.com",
        amount: "$7240",
        subscriptionPlan: "Pro",
        paymentMethod: "Paypal",
        paymentMethodIcon: "/images/payment-method/paypal.svg",
        status: "Completed",
        statusColor: "success",
      },
      {
        id: "#008",
        clientImage: "/images/users/user38.jpg",
        clientName: "Patricia",
        clientEmail: "patricia@gmail.com",
        amount: "$6135",
        subscriptionPlan: "Enterprise",
        paymentMethod: "Wise",
        paymentMethodIcon: "/images/payment-method/wise.svg",
        status: "Pending",
        statusColor: "primary",
      },
      {
        id: "#009",
        clientImage: "/images/users/user39.jpg",
        clientName: "Poppy",
        clientEmail: "poppy@gmail.com",
        amount: "$2137",
        subscriptionPlan: "Basic",
        paymentMethod: "Paypal",
        paymentMethodIcon: "/images/payment-method/paypal.svg",
        status: "Pending",
        statusColor: "primary",
      },
      {
        id: "#010",
        clientImage: "/images/users/user41.jpg",
        clientName: "Megan",
        clientEmail: "megan@gmail.com",
        amount: "$3124",
        subscriptionPlan: "Pro",
        paymentMethod: "Skrill",
        paymentMethodIcon: "/images/payment-method/skrill.svg",
        status: "Completed",
        statusColor: "success",
      },
    ];
    setTransactions(sampleTransactions);
  }, []);

  const totalPages = Math.ceil(transactions.length / ITEMS_PER_PAGE);
  const paginatedData = transactions.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

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
                p: "8px 19.5px",
                display: "flex",
                alignItems: "center",
                gap: "5px",
              }}
              className="bg-eceef2"
            >
              Monthly <KeyboardArrowDownIcon sx={{ fontSize: "20px" }} />
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
              <MenuItem>Weekly</MenuItem>
              <MenuItem>Monthly</MenuItem>
              <MenuItem>Yearly</MenuItem>
            </Menu>
          </Box>
        </Box>

        {/* Table */}
        <TableContainer
          component={Paper}
          sx={{
            boxShadow: "none",
            borderRadius: "0",
          }}
          className="rmui-table table-th-td-lcpx-0"
        >
          <Table sx={{ minWidth: 800 }}>
            <TableHead>
              <TableRow
                sx={{
                  th: {
                    textTransform: "uppercase",
                    fontSize: "10px",
                    fontWeight: "bold",
                    letterSpacing: "1px",
                    pt: "0",
                    pb: "15px",
                    px: "20px",
                    lineHeight: "1",
                  },
                }}
              >
                <TableCell className="border-bottom">ID</TableCell>
                <TableCell className="border-bottom">Client</TableCell>
                <TableCell className="border-bottom">Amount</TableCell>
                <TableCell className="border-bottom">
                  Subscription Plan
                </TableCell>
                <TableCell className="border-bottom">Payment Method</TableCell>
                <TableCell className="border-bottom">Status</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {paginatedData.map((transaction) => (
                <TableRow
                  key={transaction.id}
                  sx={{
                    td: {
                      py: "10px",
                      px: "20px",
                    },
                  }}
                >
                  <TableCell className="border-bottom text-black">
                    <Typography
                      component="span"
                      sx={{
                        display: "block",
                        fontWeight: "600",
                        fontSize: "12px",
                      }}
                    >
                      {transaction.id}
                    </Typography>
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
                        src={transaction.clientImage}
                        alt={transaction.clientName}
                        width={40}
                        height={40}
                        style={{ borderRadius: "100%" }}
                      />
                      <Box>
                        <Typography
                          component="h5"
                          sx={{ fontWeight: "600", display: "inline-block" }}
                        >
                          {transaction.clientName}
                        </Typography>
                        <Typography
                          component="span"
                          sx={{ fontSize: "12px", display: "block" }}
                        >
                          {transaction.clientEmail}
                        </Typography>
                      </Box>
                    </Box>
                  </TableCell>

                  <TableCell className="border-bottom text-black">
                    <Typography
                      component="span"
                      sx={{
                        display: "block",
                        fontWeight: "600",
                        fontSize: "12px",
                      }}
                    >
                      {transaction.amount}
                    </Typography>
                  </TableCell>

                  <TableCell className="border-bottom text-black">
                    <Typography
                      component="span"
                      sx={{
                        display: "block",
                        fontWeight: "600",
                        fontSize: "12px",
                      }}
                    >
                      {transaction.subscriptionPlan}
                    </Typography>
                  </TableCell>

                  <TableCell className="border-bottom text-black">
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        fontSize: "12px",
                        fontWeight: "600",
                      }}
                    >
                      <img
                        src={transaction.paymentMethodIcon}
                        alt={transaction.paymentMethod}
                        width={24}
                        height={24}
                      />
                      {transaction.paymentMethod}
                    </Box>
                  </TableCell>

                  <TableCell className="border-bottom">
                    <Box
                      sx={{
                        display: "inline-block",
                        fontSize: "12px",
                        px: "9px",
                        color: `${transaction.statusColor}.700`,
                        border: "1px solid",
                        borderColor: `${transaction.statusColor}.300`,
                        bgcolor: `${transaction.statusColor}.100`,
                        borderRadius: "100px",
                      }}
                    >
                      {transaction.status}
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

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
