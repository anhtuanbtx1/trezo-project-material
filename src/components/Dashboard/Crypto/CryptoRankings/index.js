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
import styles from "./CryptoRankings.module.css";

function TablePaginationActions({ count, page, rowsPerPage, onPageChange }) {
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
}

function createData(
  id,
  cryptocurrencyImg,
  cryptocurrencyName,
  cryptocurrencyAbbreviation,
  marketCap,
  price,
  change24h,
  change7d,
  value24h,
  circulatingSupply
) {
  return {
    id,
    cryptocurrencyImg,
    cryptocurrencyName,
    cryptocurrencyAbbreviation,
    marketCap,
    price,
    change24h,
    change7d,
    value24h,
    circulatingSupply,
  };
}

const rows = [
  createData(
    "1",
    "/images/cryptocurrencies/bitcoin.svg",
    "Bitcoin",
    "BTC",
    "$520B",
    "$27,500",
    "+2.3%",
    "+10.2%",
    "$35B",
    "19M BT"
  ),

  createData(
    "2",
    "/images/cryptocurrencies/ethereum.svg",
    "Ethereum",
    "ETH",
    "$210B",
    "$1,750",
    "-1.2%",
    "+6.3%",
    "$20B",
    "120M ETH"
  ),
  createData(
    "3",
    "/images/cryptocurrencies/binance.svg",
    "Binance",
    "BNB",
    "$40B",
    "$250",
    "+1.5%",
    "+7.8%",
    "$1.8B",
    "160M BNB"
  ),
  createData(
    "4",
    "/images/cryptocurrencies/tether.svg",
    "Tether",
    "USDT",
    "$83B",
    "$1.00",
    "+0.01%",
    "+0.02%",
    "$45B",
    "83B USDT"
  ),
  createData(
    "5",
    "/images/cryptocurrencies/xrp.svg",
    "XRP",
    "XRP",
    "$25B",
    "$0.50",
    "+0.9%",
    "-8.6%",
    "$2.2B",
    "50B XRP"
  ),
  createData(
    "6",
    "/images/cryptocurrencies/solana.svg",
    "Solana",
    "SOL",
    "$12B",
    "$35",
    "+5.8%",
    "+15.5%",
    "$3.5B",
    "400M SOL"
  ),
  createData(
    "7",
    "/images/cryptocurrencies/usdc.png",
    "USDC",
    "USDC",
    "$36B",
    "$0.9999",
    "+0.01%",
    "+0.02%",
    "$4B",
    "36 USDC"
  ),
  createData(
    "8",
    "/images/cryptocurrencies/dogecoin.png",
    "Dogecoin",
    "DOGE",
    "$17B",
    "$0,1221",
    "-0.56%",
    "-3.57%",
    "$85B",
    "146M DOGE"
  ),
  createData(
    "9",
    "/images/cryptocurrencies/toncoin.png",
    "Toncoin",
    "TON",
    "$14B",
    "$5.82",
    "+0.13%",
    "+0.88%",
    "$21B",
    "25M TON"
  ),
  createData(
    "10",
    "/images/cryptocurrencies/cardano.png",
    "Cardano",
    "ADA",
    "$13B",
    "$0,3884",
    "-0.59%",
    "-1.80%",
    "$32B",
    "86M ADA"
  ),
  createData(
    "11",
    "/images/cryptocurrencies/tron.png",
    "TRON",
    "TRX",
    "$130B",
    "$0.1554",
    "+0.17%",
    "+0.02%",
    "$33B",
    "86M TRX"
  ),
  createData(
    "12",
    "/images/cryptocurrencies/avalanche.png",
    "Avalanche",
    "AVAX",
    "$11B",
    "$28.77",
    "-0.08%",
    "+0.51%",
    "$32B",
    "40M AVAX"
  ),
].sort((a, b) => (a.id < b.id ? 1 : 1));

const CryptoRankings = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(6);
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
            Crypto Rankings
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
          <Table sx={{ minWidth: 850 }} className={styles.crTable}>
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{
                    padding: "0 14px 7px",
                    fontSize: "12px",
                  }}
                  className="border-bottom"
                >
                  Rank
                </TableCell>

                <TableCell
                  sx={{
                    padding: "0 14px 7px",
                    fontSize: "12px",
                  }}
                  className="border-bottom"
                >
                  Cryptocurrency
                </TableCell>

                <TableCell
                  sx={{
                    padding: "0 14px 7px",
                    fontSize: "12px",
                    textAlign: "end",
                  }}
                  className="border-bottom"
                >
                  Market Cap
                </TableCell>

                <TableCell
                  sx={{
                    padding: "0 14px 7px",
                    fontSize: "12px",
                    textAlign: "end",
                  }}
                  className="border-bottom"
                >
                  Price
                </TableCell>

                <TableCell
                  sx={{
                    padding: "0 14px 7px",
                    fontSize: "12px",
                    textAlign: "end",
                  }}
                  className="border-bottom"
                >
                  24h Change %
                </TableCell>

                <TableCell
                  sx={{
                    padding: "0 14px 7px",
                    fontSize: "12px",
                    textAlign: "end",
                  }}
                  className="border-bottom"
                >
                  7d Change %
                </TableCell>

                <TableCell
                  sx={{
                    padding: "0 14px 7px",
                    fontSize: "12px",
                    textAlign: "end",
                  }}
                  className="border-bottom"
                >
                  Value 24h
                </TableCell>

                <TableCell
                  sx={{
                    padding: "0 14px 7px",
                    fontSize: "12px",
                    textAlign: "end",
                  }}
                  className="border-bottom"
                >
                  Circulating Supply
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
                <TableRow key={row.id}>
                  <TableCell
                    sx={{
                      padding: "10px 14px",
                      fontSize: "14px",
                      fontWeight: "500",
                    }}
                    className="text-black border-bottom"
                  >
                    {row.id}
                  </TableCell>

                  <TableCell
                    sx={{
                      padding: "10px 14px",
                      fontSize: "14px",
                    }}
                    className="text-black border-bottom"
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                      }}
                    >
                      <img
                        src={row.cryptocurrencyImg}
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
                        {row.cryptocurrencyName}{" "}
                        <Typography
                          component="span"
                          sx={{ fontWeight: "400", fontSize: "12px" }}
                          className="text-body"
                        >
                          {row.cryptocurrencyAbbreviation}
                        </Typography>
                      </Typography>
                    </Box>
                  </TableCell>

                  <TableCell
                    sx={{
                      padding: "10px 14px",
                      fontSize: "14px",
                      textAlign: "end",
                      fontWeight: "500",
                    }}
                    className="text-black border-bottom"
                  >
                    {row.marketCap}
                  </TableCell>

                  <TableCell
                    sx={{
                      padding: "10px 14px",
                      fontSize: "14px",
                      textAlign: "end",
                      fontWeight: "500",
                    }}
                    className="text-black border-bottom"
                  >
                    {row.price}
                  </TableCell>

                  <TableCell
                    sx={{
                      padding: "10px 14px",
                      fontSize: "14px",
                      textAlign: "end",
                      fontWeight: "500",
                    }}
                    className="text-black border-bottom"
                  >
                    {row.change24h}
                  </TableCell>

                  <TableCell
                    sx={{
                      padding: "10px 14px",
                      fontSize: "14px",
                      textAlign: "end",
                      fontWeight: "500",
                    }}
                    className="text-black border-bottom"
                  >
                    {row.change7d}
                  </TableCell>

                  <TableCell
                    sx={{
                      padding: "10px 14px",
                      fontSize: "14px",
                      textAlign: "end",
                      fontWeight: "500",
                    }}
                    className="text-black border-bottom"
                  >
                    {row.value24h}
                  </TableCell>

                  <TableCell
                    sx={{
                      padding: "10px 14px",
                      fontSize: "14px",
                      textAlign: "end",
                      fontWeight: "500",
                    }}
                    className="text-black border-bottom"
                  >
                    {row.circulatingSupply}
                  </TableCell>
                </TableRow>
              ))}
              {emptyRows > 0 && (
                <TableRow style={{ height: 53 * emptyRows }}>
                  <TableCell className="border-bottom" colSpan={8} />
                </TableRow>
              )}
            </TableBody>

            <TableFooter>
              <TableRow>
                <TablePagination
                  rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
                  colSpan={8}
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

export default CryptoRankings;
