"use client";

import React, { useState } from "react";
import {
  Card,
  Box,
  Typography,
  Menu,
  MenuItem,
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
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import styles from "./TransactionHistory.module.css";

const TablePaginationActions = ({ count, page, rowsPerPage, onPageChange }) => {
  const theme = useTheme();

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  return (
    <Box
      sx={{
        flexShrink: 0,
        display: "flex",
        gap: "10px", 
      }}
      className="ml-15"
    >
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
        sx={{
          borderRadius: "4px",
          padding: "4px",
        }}
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
        sx={{
          borderRadius: "4px",
          padding: "4px",
        }}
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
};

const createData = (
  id,
  coinImg,
  coinName,
  abbreviation,
  date,
  amount,
  price,
  type,
  totalValue
) => {
  return {
    id,
    coinImg,
    coinName,
    abbreviation,
    date,
    amount,
    price,
    type,
    totalValue,
  };
};

const rows = [
  createData(
    "1",
    "/images/cryptocurrencies/bitcoin.svg",
    "Bitcoin",
    "BTC",
    "2024-09-10",
    "0.50 BTC",
    "$27,50",
    "buy",
    "$13,500"
  ),
  createData(
    "2",
    "/images/cryptocurrencies/ethereum.svg",
    "Ethereum",
    "ETH",
    "2024-09-08",
    "5.00 ETH",
    "$1,750",
    "sell",
    "$8,750"
  ),
  createData(
    "3",
    "/images/cryptocurrencies/binance.svg",
    "Binance",
    "BNB",
    "2024-09-05",
    "100 SOL",
    "$250",
    "buy",
    "$3,500"
  ),
  createData(
    "4",
    "/images/cryptocurrencies/tether.svg",
    "Tether",
    "USDT",
    "2024-08-30",
    "10 BNB",
    "$1.00",
    "buy",
    "$2,500"
  ),
  createData(
    "5",
    "/images/cryptocurrencies/xrp.svg",
    "XRP",
    "XRP",
    "2024-08-25",
    "1,000 ADA",
    "$0.50",
    "sell",
    "$250"
  ),
  createData(
    "6",
    "/images/cryptocurrencies/solana.svg",
    "Solana",
    "SOL",
    "2024-08-20",
    "0.40 BTC",
    "$35",
    "buy",
    "$11,800"
  ),
  createData(
    "7",
    "/images/cryptocurrencies/usdc.png",
    "USDC",
    "USDC",
    "2024-08-15",
    "3.00 USDC",
    "$0.9999",
    "buy",
    "$5,400"
  ),
  createData(
    "8",
    "/images/cryptocurrencies/dogecoin.png",
    "Dogecoin",
    "DOGE",
    "2024-08-14",
    "3.00 DOGE",
    "$0,1221",
    "sell",
    "$254"
  ),
  createData(
    "9",
    "/images/cryptocurrencies/toncoin.png",
    "Toncoin",
    "TON",
    "2024-08-10",
    "3.00 TON",
    "$5.82",
    "buy",
    "$1,253"
  ),
  createData(
    "10",
    "/images/cryptocurrencies/cardano.png",
    "Cardano",
    "ADA",
    "2024-08-08",
    "3.00 ADA",
    "$0,3884",
    "buy",
    "$4,432"
  ),
  createData(
    "11",
    "/images/cryptocurrencies/tron.png",
    "TRON",
    "TRX",
    "2024-08-07",
    "10.00 TRX",
    "$0.1554",
    "sell",
    "$5,435"
  ),
  createData(
    "12",
    "/images/cryptocurrencies/avalanche.png",
    "Avalanche",
    "AVAX",
    "2024-08-02",
    "43.22 AVAX",
    "$28.77",
    "buy",
    "$134"
  ),
  createData(
    "13",
    "/images/cryptocurrencies/shiba-inu.png",
    "Shiba Inu",
    "SHIB",
    "2024-07-25",
    "43.23 SHIB",
    "$0.1554",
    "sell",
    "$4,342"
  ),
  createData(
    "14",
    "/images/cryptocurrencies/chainlink.png",
    "Chainlink",
    "LINK",
    "2024-08-01",
    "54.23 LINK",
    "$28.77",
    "sell",
    "$5,302"
  ),
].sort((b, a) => (a.id < b.id ? -1 : 1));

const TransactionHistory = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(7);

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
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
                borderRadius: "0px",
                padding: "1px 2px",
                fontSize: "14px",
              }}
            >
              Oct 01 - Oct 31, 2024{" "}
              <KeyboardArrowDownIcon sx={{ fontSize: "20px" }} />
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
              <MenuItem>Sep 01 - Sep 30, 2024</MenuItem>
              <MenuItem>Aug 01 - Aug 31, 2024</MenuItem>
              <MenuItem>Jul 01 - Jul 31, 2024</MenuItem>
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
          className="rmui-table"
        >
          <Table sx={{ minWidth: 650 }} className={styles.thTable}>
            <TableHead>
              <TableRow
                sx={{
                  th: {
                    padding: "0 14px 7px",
                    fontSize: "12px",
                  },
                }}
              >
                <TableCell className="border-bottom">Coin</TableCell>

                <TableCell
                  sx={{
                    textAlign: "end",
                  }}
                  className="border-bottom"
                >
                  Date
                </TableCell>

                <TableCell
                  sx={{
                    textAlign: "end",
                  }}
                  className="border-bottom"
                >
                  Amount
                </TableCell>

                <TableCell
                  sx={{
                    textAlign: "end",
                  }}
                  className="border-bottom"
                >
                  Price
                </TableCell>

                <TableCell
                  sx={{
                    textAlign: "end",
                  }}
                  className="border-bottom"
                >
                  Type
                </TableCell>

                <TableCell
                  sx={{
                    textAlign: "end",
                  }}
                  className="border-bottom"
                >
                  Total Value
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {(rowsPerPage > 0
                ? rows.slice(
                    page * rowsPerPage,
                    page * rowsPerPage + rowsPerPage
                  )
                : rows
              ).map((row) => (
                <TableRow
                  key={row.id}
                  sx={{
                    td: {
                      padding: "10.5px 14px",
                      fontSize: "14px",
                      fontWeight: "500",
                    },
                  }}
                >
                  <TableCell className="text-black border-bottom">
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                      }}
                    >
                      <img
                        src={row.coinImg}
                        alt="Product"
                        width={22}
                        height={22}
                        style={{ borderRadius: "100px" }}
                      />

                      <Typography
                        sx={{
                          fontWeight: "500",
                        }}
                      >
                        {row.coinName}{" "}
                        <Typography
                          component="span"
                          sx={{ fontWeight: "400", fontSize: "12px" }}
                          className="text-body"
                        >
                          {row.abbreviation}
                        </Typography>
                      </Typography>
                    </Box>
                  </TableCell>

                  <TableCell
                    sx={{
                      textAlign: "end",
                    }}
                    className="text-black border-bottom"
                  >
                    {row.date}
                  </TableCell>

                  <TableCell
                    sx={{
                      textAlign: "end",
                    }}
                    className="text-black border-bottom"
                  >
                    {row.amount}
                  </TableCell>

                  <TableCell
                    sx={{
                      textAlign: "end",
                    }}
                    className="text-black border-bottom"
                  >
                    {row.price}
                  </TableCell>

                  <TableCell
                    sx={{
                      textAlign: "end",
                    }}
                    className="text-black border-bottom"
                  >
                    <Box className={`th-badge ${row.type}`}>{row.type}</Box>
                  </TableCell>

                  <TableCell
                    sx={{
                      textAlign: "end",
                    }}
                    className="text-black border-bottom"
                  >
                    {row.totalValue}
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
                  colSpan={6}
                  count={rows.length}
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
                  sx={{
                    border: "none",

                    ".MuiToolbar-root": {
                      minHeight: "auto",
                      marginTop: "15px",
                    },
                  }}
                />
              </TableRow>
            </TableFooter>
          </Table>
        </TableContainer>
      </Card>
    </>
  );
};

export default TransactionHistory;
