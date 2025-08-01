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
    date: "2025-10-31",
    asset: "Bitcoin",
    type: "Buy",
    amount: "0.5 BTC",
    price: "$34,000",
    totalValue: "$17,000",
    status: "Done",
  },
  {
    id: "2",
    date: "2025-10-30",
    asset: "Ethereum",
    type: "Sell",
    amount: "2 ETH",
    price: "$1,800",
    totalValue: "$3,600",
    status: "Done",
  },
  {
    id: "3",
    date: "2025-10-29",
    asset: "Tether",
    type: "Buy",
    amount: "$1.00",
    price: "$175",
    totalValue: "$1,750",
    status: "Failed",
  },
  {
    id: "4",
    date: "2025-10-28",
    asset: "USD Coin",
    type: "Sell",
    amount: "$0.9999",
    price: "$230",
    totalValue: "$1,150",
    status: "Pending",
  },
  {
    id: "5",
    date: "2025-10-27",
    asset: "Solana",
    type: "Buy",
    amount: "5 SOL",
    price: "$120",
    totalValue: "$600",
    status: "Done",
  },
  {
    id: "6",
    date: "2025-10-26",
    asset: "Cardano",
    type: "Sell",
    amount: "100 ADA",
    price: "$0.45",
    totalValue: "$45",
    status: "Pending",
  },
  {
    id: "7",
    date: "2025-10-25",
    asset: "Ripple",
    type: "Buy",
    amount: "200 XRP",
    price: "$0.60",
    totalValue: "$120",
    status: "Done",
  },
  {
    id: "8",
    date: "2025-10-24",
    asset: "Polkadot",
    type: "Buy",
    amount: "10 DOT",
    price: "$6.50",
    totalValue: "$65",
    status: "Pending",
  },
  {
    id: "9",
    date: "2025-10-23",
    asset: "Litecoin",
    type: "Sell",
    amount: "3 LTC",
    price: "$90",
    totalValue: "$270",
    status: "Done",
  },
  {
    id: "10",
    date: "2025-10-22",
    asset: "Chainlink",
    type: "Buy",
    amount: "15 LINK",
    price: "$8.00",
    totalValue: "$120",
    status: "Failed",
  },
  {
    id: "11",
    date: "2025-10-21",
    asset: "Dogecoin",
    type: "Sell",
    amount: "500 DOGE",
    price: "$0.08",
    totalValue: "$40",
    status: "Done",
  },
  {
    id: "12",
    date: "2025-10-20",
    asset: "Avalanche",
    type: "Buy",
    amount: "12 AVAX",
    price: "$35",
    totalValue: "$420",
    status: "Done",
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
      case "Done":
        return {
          backgroundColor: "success.100",
          color: "success.main",
        };
      case "Pending":
        return {
          backgroundColor: "primary.100",
          color: "primary.main",
        };
      case "Failed":
        return {
          backgroundColor: "error.100",
          color: "error.main",
        };
      default:
        return {
          backgroundColor: "success.100",
          color: "success.main",
        };
    }
  };

  const getTypeStyles = (type) => {
    return type === "Buy"
      ? {
          backgroundColor: "success.100",
          color: "success.main",
        }
      : {
          backgroundColor: "error.100",
          color: "error.main",
        };
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
          <Table sx={{ minWidth: 800 }} aria-label="Recent Transactions Table">
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
                  Asset
                </TableCell>
                <TableCell className="text-black border-bottom">Type</TableCell>
                <TableCell className="text-black border-bottom">
                  Amount
                </TableCell>
                <TableCell className="text-black border-bottom">
                  Price
                </TableCell>
                <TableCell className="text-black border-bottom">
                  Total Value
                </TableCell>
                <TableCell className="text-black border-bottom">
                  Status
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
                      fontWeight: 500,
                    },
                  }}
                >
                  <TableCell className="text-black border-bottom">
                    {transaction.date}
                  </TableCell>
                  <TableCell className="text-black border-bottom">
                    {transaction.asset}
                  </TableCell>
                  <TableCell className="border-bottom">
                    <Box
                      sx={{
                        borderRadius: "4px",
                        lineHeight: 1,
                        fontSize: "12px",
                        display: "inline-block",
                        fontWeight: 500,
                        p: "6px 9.5px",
                        ...getTypeStyles(transaction.type),
                      }}
                    >
                      {transaction.type}
                    </Box>
                  </TableCell>
                  <TableCell className="text-black border-bottom">
                    {transaction.amount}
                  </TableCell>
                  <TableCell className="text-black border-bottom">
                    {transaction.price}
                  </TableCell>
                  <TableCell className="text-black border-bottom">
                    {transaction.totalValue}
                  </TableCell>
                  <TableCell className="border-bottom">
                    <Box
                      sx={{
                        borderRadius: "4px",
                        lineHeight: 1,
                        fontSize: "12px",
                        display: "inline-block",
                        fontWeight: 500,
                        p: "6px 9.5px",
                        ...getStatusStyles(transaction.status),
                      }}
                    >
                      {transaction.status}
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
              {emptyRows > 0 && (
                <TableRow style={{ height: 53 * emptyRows }}>
                  <TableCell className="border-bottom" colSpan={7} />
                </TableRow>
              )}
            </TableBody>

            <TableFooter>
              <TableRow>
                <TablePagination
                  rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
                  colSpan={7}
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
