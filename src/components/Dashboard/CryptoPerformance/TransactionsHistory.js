"use client";

import React, { useState } from "react";
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
  Menu,
  MenuItem,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

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

const TransactionsHistory = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  // Sample transaction data
  const transactions = [
    {
      id: "1",
      name: "Bitcoin",
      symbol: "BTC",
      icon: "/images/cryptocurrencies/bitcoin.svg",
      type: "Sold",
      amount: "$68,848.92",
      date: "2023-05-15",
    },
    {
      id: "2",
      name: "Ethereum",
      symbol: "ETH",
      icon: "/images/cryptocurrencies/ethereum.svg",
      type: "Withdraw",
      amount: "$2,565.77",
      date: "2023-05-14",
    },
    {
      id: "3",
      name: "Tether",
      symbol: "USDT",
      icon: "/images/cryptocurrencies/tether.svg",
      type: "Deposit",
      amount: "$1.00",
      date: "2023-05-13",
    },
    {
      id: "4",
      name: "BNB",
      symbol: "BNB",
      icon: "/images/cryptocurrencies/binance.svg",
      type: "Buy",
      amount: "$245.32",
      date: "2023-05-12",
    },
    {
      id: "5",
      name: "Solana",
      symbol: "SOL",
      icon: "/images/cryptocurrencies/solana.svg",
      type: "Sold",
      amount: "$23.45",
      date: "2023-05-11",
    },
    {
      id: "6",
      name: "XRP",
      symbol: "XRP",
      icon: "/images/cryptocurrencies/xrp.svg",
      type: "Withdraw",
      amount: "$0.52",
      date: "2023-05-10",
    },
    {
      id: "7",
      name: "USDC",
      symbol: "USDC",
      icon: "/images/cryptocurrencies/usdc.png",
      type: "Deposit",
      amount: "$0.38",
      date: "2023-05-09",
    },
    {
      id: "8",
      name: "Tron",
      symbol: "TRX",
      icon: "/images/cryptocurrencies/tron.png",
      type: "Buy",
      amount: "$0.07",
      date: "2023-05-08",
    },
  ];

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

  // Dropdown
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
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
          mb: "15px",
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
          Transactions History
        </Typography>

        <Box>
          <IconButton
            onClick={handleClick}
            size="small"
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            sx={{ padding: "0" }}
          >
            <MoreHorizIcon sx={{ fontSize: "25px" }} />
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
            <MenuItem>Daily</MenuItem>
            <MenuItem>Weekly</MenuItem>
            <MenuItem>Monthly</MenuItem>
            <MenuItem>Yearly</MenuItem>
          </Menu>
        </Box>
      </Box>

      <Box sx={{ marginLeft: "-25px", marginRight: "-25px" }}>
        <TableContainer
          component={Paper}
          sx={{ boxShadow: "none", borderRadius: "0" }}
          className="rmui-table"
        >
          <Table sx={{ minWidth: 400 }} aria-label="Live Price Tracker Table">
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
                      padding: "12.5px 25px",
                      fontSize: "13px",
                      fontWeight: 500,
                    },
                  }}
                >
                  <TableCell className="text-black border-bottom">
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      <img
                        src={transaction.icon}
                        alt={transaction.name.toLowerCase()}
                        width={22}
                        height={22}
                        style={{
                          flexShrink: 0,
                        }}
                      />

                      <Typography
                        variant="h5"
                        sx={{
                          fontSize: "13px",
                          fontWeight: 600,
                        }}
                        className="text-black"
                      >
                        {transaction.name}{" "}
                        <Typography
                          component="span"
                          className="text-body"
                          sx={{ fontSize: "12px" }}
                        >
                          ({transaction.symbol})
                        </Typography>
                      </Typography>
                    </Box>
                  </TableCell>

                  <TableCell className="text-center border-bottom">
                    <Box
                      sx={{
                        borderRadius: "4px",
                        backgroundColor:
                          transaction.type === "Sold" ||
                          transaction.type === "Deposit"
                            ? "success.100"
                            : "error.100",
                        color:
                          transaction.type === "Sold" ||
                          transaction.type === "Deposit"
                            ? "success.700"
                            : "error.700",
                        lineHeight: 1,
                        fontSize: "12px",
                        display: "inline-block",
                        fontWeight: 500,
                        p: "5px 10px",
                        textTransform: "capitalize",
                      }}
                    >
                      {transaction.type}
                    </Box>
                  </TableCell>

                  <TableCell className="text-end text-black border-bottom">
                    {transaction.amount}
                  </TableCell>
                </TableRow>
              ))}
              {emptyRows > 0 && (
                <TableRow style={{ height: 53 * emptyRows }}>
                  <TableCell className="border-bottom" colSpan={6} />
                </TableRow>
              )}
            </TableBody>

            <TableFooter>
              <TableRow>
                <TablePagination
                  rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
                  colSpan={3}
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

export default TransactionsHistory;
