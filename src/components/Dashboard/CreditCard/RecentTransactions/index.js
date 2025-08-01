"use client";

import * as React from "react";
import {
  Card,
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TablePagination,
  TableRow,
  Paper,
  IconButton,
  TableHead,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import CustomDropdown from "./CustomDropdown";

const transactions = [
  {
    id: "1",
    date: "30 Apr 2025",
    description: "Starbucks Coffee",
    category: "Dining",
    amount: "$50.12",
    status: "completed",
  },
  {
    id: "2",
    date: "29 Apr 2025",
    description: "Whole Foods",
    category: "Groceries",
    amount: "$90.50",
    status: "pending",
  },
  {
    id: "3",
    date: "28 Apr 2025",
    description: "Gas Station",
    category: "Transportation",
    amount: "$15.00",
    status: "cancelled",
  },
  {
    id: "4",
    date: "27 Apr 2025",
    description: "Netflix Subscription",
    category: "Entertainment",
    amount: "$15.99",
    status: "completed",
  },
  {
    id: "5",
    date: "26 Apr 2025",
    description: "Uber Ride",
    category: "Transportation",
    amount: "$22.35",
    status: "completed",
  },
  {
    id: "6",
    date: "25 Apr 2025",
    description: "Amazon Purchase",
    category: "Shopping",
    amount: "$120.89",
    status: "pending",
  },
  {
    id: "7",
    date: "24 Apr 2025",
    description: "Apple Store",
    category: "Shopping",
    amount: "$799.00",
    status: "completed",
  },
  {
    id: "8",
    date: "23 Apr 2025",
    description: "Electricity Bill",
    category: "Utilities",
    amount: "$140.25",
    status: "completed",
  },
  {
    id: "9",
    date: "22 Apr 2025",
    description: "Spotify Subscription",
    category: "Entertainment",
    amount: "$9.99",
    status: "completed",
  },
  {
    id: "10",
    date: "21 Apr 2025",
    description: "Local Market",
    category: "Groceries",
    amount: "$65.40",
    status: "pending",
  },
  {
    id: "11",
    date: "20 Apr 2025",
    description: "Airbnb Reservation",
    category: "Travel",
    amount: "$350.00",
    status: "completed",
  },
  {
    id: "12",
    date: "19 Apr 2025",
    description: "Water Bill",
    category: "Utilities",
    amount: "$45.80",
    status: "completed",
  },
];

function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  return (
    <Box sx={{ flexShrink: 0, display: "flex", gap: "5px", padding: "0 20px" }}>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
        sx={{ borderRadius: "4px", padding: "6px" }}
        className="border"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
        sx={{ borderRadius: "4px", padding: "6px" }}
        className="border"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
    </Box>
  );
}

const RecentTransactions = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(6);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - transactions.length) : 0;

  const getStatusStyles = (status) => {
    switch (status) {
      case "completed":
        return {
          bgcolor: "success.100",
          color: "success.700",
          borderColor: "success.300",
        };
      case "pending":
        return {
          bgcolor: "#eef6ff",
          color: "secondary.main",
          borderColor: "#d6e9ff",
        };
      case "cancelled":
        return {
          bgcolor: "error.100",
          color: "error.700",
          borderColor: "error.300",
        };
      default:
        return {
          bgcolor: "grey.100",
          color: "grey.700",
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
          Recent Transactions
        </Typography>

        <Box>
          <CustomDropdown
            options={["Last 7 Days", "Last 15 Days", "Last 30 Days"]} // Need to change the options also in CustomDropdown file
            onSelect={(value) => console.log(value)}
            defaultLabel="Last 30 Days"
          />
        </Box>
      </Box>

      <Box sx={{ marginLeft: "-25px", marginRight: "-25px" }}>
        <TableContainer
          component={Paper}
          sx={{ boxShadow: "none", borderRadius: "0" }}
          className="rmui-table"
        >
          <Table sx={{ minWidth: 1000 }} aria-label="Recent Transactions Table">
            <TableHead className="bg-primary-50">
              <TableRow
                sx={{
                  "& th": {
                    fontWeight: "500",
                    padding: "10px 20px",
                    fontSize: "14px",
                  },
                }}
              >
                <TableCell className="text-black border-bottom">Date</TableCell>
                <TableCell className="text-black border-bottom">
                  Description
                </TableCell>
                <TableCell className="text-black border-bottom">
                  Category
                </TableCell>
                <TableCell className="text-black border-bottom">
                  Amount ($)
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
              {(rowsPerPage > 0
                ? transactions.slice(
                    page * rowsPerPage,
                    page * rowsPerPage + rowsPerPage
                  )
                : transactions
              ).map((transaction) => (
                <TableRow
                  key={transaction.id}
                  sx={{
                    "& td": {
                      padding: "15px 20px",
                      fontSize: "14px",
                    },
                  }}
                >
                  <TableCell className="border-bottom">
                    {transaction.date}
                  </TableCell>
                  <TableCell className="text-black border-bottom">
                    {transaction.description}
                  </TableCell>
                  <TableCell className="text-black border-bottom">
                    {transaction.category}
                  </TableCell>
                  <TableCell className="text-black border-bottom">
                    {transaction.amount}
                  </TableCell>
                  <TableCell className="border-bottom">
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
              {emptyRows > 0 && (
                <TableRow style={{ height: 53 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>

            <TableFooter>
              <TableRow>
                <TablePagination
                  rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
                  colSpan={6}
                  count={transactions.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  slotProps={{
                    select: {
                      inputProps: {
                        "aria-label": "rows per page",
                      },
                      native: true,
                    },
                  }}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                  ActionsComponent={TablePaginationActions}
                  sx={{ border: "none" }}
                />
              </TableRow>
            </TableFooter>
          </Table>
        </TableContainer>
      </Box>
    </Card>
  );
};

export default RecentTransactions;
