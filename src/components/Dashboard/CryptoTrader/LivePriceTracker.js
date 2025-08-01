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

const cryptocurrencies = [
  {
    id: "1",
    name: "Bitcoin",
    symbol: "BTC",
    price: "$68,848.92",
    icon: "/images/cryptocurrencies/bitcoin.svg",
  },
  {
    id: "2",
    name: "Ethereum",
    symbol: "ETH",
    price: "$2,565.77",
    icon: "/images/cryptocurrencies/ethereum.svg",
  },
  {
    id: "3",
    name: "Binance ",
    symbol: "BNB",
    price: "$1,234.21",
    icon: "/images/cryptocurrencies/binance.svg",
  },
  {
    id: "4",
    name: "Tether",
    symbol: "USDT",
    price: "$1.00",
    icon: "/images/cryptocurrencies/tether.svg",
  },
  {
    id: "5",
    name: "Solana",
    symbol: "SOL",
    price: "$146.83",
    icon: "/images/cryptocurrencies/solana.svg",
  },
  {
    id: "6",
    name: "XRP",
    symbol: "XRP",
    price: "$0.52",
    icon: "/images/cryptocurrencies/xrp.svg",
  },
  {
    id: "7",
    name: "USDC",
    symbol: "USDC",
    price: "$1.20",
    icon: "/images/cryptocurrencies/usdc.png",
  },
  {
    id: "8",
    name: "Tron",
    symbol: "TRX",
    price: "$0.192391",
    icon: "/images/cryptocurrencies/tron.png",
  },
  {
    id: "9",
    name: "USDC",
    symbol: "USDC",
    price: "$1.20",
    icon: "/images/cryptocurrencies/usdc.png",
  },
  {
    id: "10",
    name: "Tron",
    symbol: "TRX",
    price: "$0.192391",
    icon: "/images/cryptocurrencies/tron.png",
  },
  {
    id: "11",
    name: "Bitcoin",
    symbol: "BTC",
    price: "$68,848.92",
    icon: "/images/cryptocurrencies/bitcoin.svg",
  },

  {
    id: "12",
    name: "Tether",
    symbol: "USDT",
    price: "$1.00",
    icon: "/images/cryptocurrencies/tether.svg",
  },
  {
    id: "13",
    name: "Solana",
    symbol: "SOL",
    price: "$146.83",
    icon: "/images/cryptocurrencies/solana.svg",
  },
  {
    id: "14",
    name: "Ethereum",
    symbol: "ETH",
    price: "$2,565.77",
    icon: "/images/cryptocurrencies/ethereum.svg",
  },
  {
    id: "15",
    name: "Binance ",
    symbol: "BNB",
    price: "$1,234.21",
    icon: "/images/cryptocurrencies/binance.svg",
  },
  {
    id: "16",
    name: "XRP",
    symbol: "XRP",
    price: "$0.52",
    icon: "/images/cryptocurrencies/xrp.svg",
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

const LivePriceTracker = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(8);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0
      ? Math.max(0, (1 + page) * rowsPerPage - cryptocurrencies.length)
      : 0;

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
          Live Price Tracker
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
                ? cryptocurrencies.slice(
                    page * rowsPerPage,
                    page * rowsPerPage + rowsPerPage
                  )
                : cryptocurrencies
              ).map((crypto) => (
                <TableRow
                  key={crypto.id}
                  sx={{
                    "& td": {
                      padding: "12.5px 20px",
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
                        src={crypto.icon}
                        alt={crypto.name}
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
                        {crypto.name}{" "}
                        <Typography
                          component="span"
                          className="text-body"
                          sx={{ fontSize: "12px" }}
                        >
                          ({crypto.symbol})
                        </Typography>
                      </Typography>
                    </Box>
                  </TableCell>

                  <TableCell className="text-end text-black border-bottom">
                    {crypto.price}
                  </TableCell>
                </TableRow>
              ))}
              {emptyRows > 0 && (
                <TableRow style={{ height: 53 * emptyRows }}>
                  <TableCell className="border-bottom" colSpan={2} />
                </TableRow>
              )}
            </TableBody>

            <TableFooter>
              <TableRow>
                <TablePagination
                  rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
                  colSpan={2}
                  count={cryptocurrencies.length}
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

export default LivePriceTracker;
