"use client";

import { useState } from "react";
import {
  Box,
  Typography,
  Card,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
  Button,
  TableHead,
} from "@mui/material";

const LatestTransactions = () => {
  // Transaction data state
  const [transactions] = useState([
    {
      id: 1,
      clientName: "Johhna Loren",
      email: "loren123@gmail.com",
      amount: "$6240",
      paymentMethod: {
        name: "Paypal",
        icon: "/images/payment-method/paypal.svg",
      },
      status: "completed",
      avatar: "/images/users/user58.jpg",
    },
    {
      id: 2,
      clientName: "Skyler Queen",
      email: "skyqueen@gmail.com",
      amount: "$5135",
      paymentMethod: {
        name: "Wise",
        icon: "/images/payment-method/wise.svg",
      },
      status: "completed",
      avatar: "/images/users/user59.jpg",
    },
    {
      id: 3,
      clientName: "Jonathon Watson",
      email: "jona2134@gmail.com",
      amount: "$4321",
      paymentMethod: {
        name: "Bank",
        icon: "/images/payment-method/bank.svg",
      },
      status: "failed",
      avatar: "/images/users/user60.jpg",
    },
    {
      id: 4,
      clientName: "Emily Davis",
      email: "emilyd@gmail.com",
      amount: "$3250",
      paymentMethod: {
        name: "Stripe",
        icon: "/images/payment-method/stripe.png",
      },
      status: "pending",
      avatar: "/images/users/user61.jpg",
    },
    {
      id: 5,
      clientName: "Michael Brown",
      email: "michaelb@gmail.com",
      amount: "$2890",
      paymentMethod: {
        name: "Paypal",
        icon: "/images/payment-method/paypal.svg",
      },
      status: "completed",
      avatar: "/images/users/user62.jpg",
    },
    {
      id: 6,
      clientName: "Emily Davis",
      email: "emilyd@gmail.com",
      amount: "$3250",
      paymentMethod: {
        name: "Stripe",
        icon: "/images/payment-method/stripe.png",
      },
      status: "pending",
      avatar: "/images/users/user61.jpg",
    },
    {
      id: 7,
      clientName: "Michael Brown",
      email: "michaelb@gmail.com",
      amount: "$2890",
      paymentMethod: {
        name: "Paypal",
        icon: "/images/payment-method/paypal.svg",
      },
      status: "completed",
      avatar: "/images/users/user62.jpg",
    },
    {
      id: 8,
      clientName: "Skyler Queen",
      email: "skyqueen@gmail.com",
      amount: "$5135",
      paymentMethod: {
        name: "Wise",
        icon: "/images/payment-method/wise.svg",
      },
      status: "completed",
      avatar: "/images/users/user59.jpg",
    },
    {
      id: 9,
      clientName: "Johhna Loren",
      email: "loren123@gmail.com",
      amount: "$6240",
      paymentMethod: {
        name: "Paypal",
        icon: "/images/payment-method/paypal.svg",
      },
      status: "completed",
      avatar: "/images/users/user58.jpg",
    },
    {
      id: 10,
      clientName: "Jonathon Watson",
      email: "jona2134@gmail.com",
      amount: "$4321",
      paymentMethod: {
        name: "Bank",
        icon: "/images/payment-method/bank.svg",
      },
      status: "failed",
      avatar: "/images/users/user60.jpg",
    },
  ]);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Pagination calculations
  const totalItems = transactions.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = transactions.slice(indexOfFirstItem, indexOfLastItem);

  // Generate page numbers
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  // Handle page change
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  // Get status styles
  const getStatusStyles = (status) => {
    switch (status) {
      case "completed":
        return {
          bgcolor: "success.100",
          color: "success.main",
          borderColor: "success.300",
        };
      case "pending":
        return {
          bgcolor: "warning.100",
          color: "warning.main",
          borderColor: "warning.300",
        };
      case "failed":
        return {
          bgcolor: "error.100",
          color: "error.main",
          borderColor: "error.300",
        };
      default:
        return {
          bgcolor: "grey.100",
          color: "grey.800",
          borderColor: "grey.300",
        };
    }
  };

  return (
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
          flexWrap: "wrap",
          gap: "15px",
          mb: "10px",
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
      </Box>

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
              className="border-bottom"
              sx={{
                "& th": {
                  fontSize: "10px",
                  fontWeight: 700,
                  color: "text.primary",
                  padding: "15px 8px",
                },
              }}
            >
              <th className="text-start">CLIENT</th>
              <th className="text-start">EMAIL</th>
              <th className="text-start">AMOUNT</th>
              <th className="text-start">PAYMENT METHOD</th>
              <th className="text-end">STATUS</th>
            </TableRow>
          </TableHead>

          <TableBody>
            {currentItems.map((transaction) => (
              <TableRow
                key={transaction.id}
                sx={{
                  "& td": {
                    padding: "13px 8px",
                    fontSize: "12px",
                    fontWeight: 600,
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
                      src={transaction.avatar}
                      alt={transaction.clientName}
                      width={32}
                      height={32}
                      style={{
                        borderRadius: "50%",
                      }}
                    />
                    <Typography
                      variant="h6"
                      sx={{
                        fontSize: { xs: "13px", md: "14px" },
                        fontWeight: 600,
                      }}
                    >
                      {transaction.clientName}
                    </Typography>
                  </Box>
                </TableCell>

                <TableCell className="border-bottom">
                  {transaction.email}
                </TableCell>

                <TableCell
                  className="border-bottom text-black"
                  sx={{ fontWeight: 700 }}
                >
                  {transaction.amount}
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
                      src={transaction.paymentMethod.icon}
                      alt={transaction.paymentMethod.name}
                      width={24}
                      height={24}
                    />
                    <Typography
                      variant="h6"
                      sx={{
                        fontSize: { xs: "13px", md: "13px" },
                        fontWeight: 600,
                      }}
                    >
                      {transaction.paymentMethod.name}
                    </Typography>
                  </Box>
                </TableCell>

                <TableCell className="border-bottom text-end">
                  <Box
                    sx={{
                      border: "1px solid",
                      borderRadius: "30px",
                      lineHeight: 1,
                      fontSize: "12px",
                      display: "inline-block",
                      fontWeight: 500,
                      p: "3.5px 9px",
                      textTransform: "capitalize",
                      ...getStatusStyles(transaction.status),
                    }}
                  >
                    {transaction.status}
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "15px",
            mt: "15px",
          }}
        >
          <Typography fontSize={"12px"} fontWeight={500} mb={"0"}>
            Showing {indexOfFirstItem + 1}-
            {Math.min(indexOfLastItem, totalItems)} of {totalItems} results
          </Typography>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "5px",
            }}
          >
            <Button
              className="border text-body"
              sx={{
                minWidth: "auto",
                padding: "0",
                width: { xs: "28px", md: "34px" },
                height: { xs: "28px", md: "34px" },
              }}
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              <i className="material-symbols-outlined">keyboard_arrow_left</i>
            </Button>

            {pageNumbers.map((number) => (
              <Button
                key={number}
                onClick={() => handlePageChange(number)}
                className="border"
                sx={{
                  minWidth: "auto",
                  padding: "0",
                  width: { xs: "28px", md: "34px" },
                  height: { xs: "28px", md: "34px" },
                  backgroundColor:
                    number === currentPage ? "primary.main" : "transparent",
                  color: number === currentPage ? "white !important" : "text.primary",
                }}
              >
                {number}
              </Button>
            ))}

            <Button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === pageNumbers.length}
              className="border text-body"
              sx={{
                minWidth: "auto",
                padding: "0",
                width: { xs: "28px", md: "34px" },
                height: { xs: "28px", md: "34px" },
              }}
            >
              <i className="material-symbols-outlined">keyboard_arrow_right</i>
            </Button>
          </Box>
        </Box>
      </TableContainer>
    </Card>
  );
};

export default LatestTransactions;
