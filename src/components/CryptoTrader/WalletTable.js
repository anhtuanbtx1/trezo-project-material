"use client";

import React, { useEffect, useState } from "react";
import {
  Card,
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
  TableHead,
  Button,
  IconButton,
  Dialog,
  DialogTitle,
  Grid,
  TextField,
  FormControl,
  InputLabel,
  MenuItem,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import AddIcon from "@mui/icons-material/Add";
import ClearIcon from "@mui/icons-material/Clear";
import CloseIcon from "@mui/icons-material/Close";
import PropTypes from "prop-types";
import Select from "@mui/material/Select";

// Modal
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};
// End Modal

const WalletTable = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [walletData, setWalletData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API fetch
    const fetchData = async () => {
      try {
        // Mock data - in a real app, you would fetch from an API
        const mockData = [
          {
            id: "1",
            name: "BTC Wallet",
            address: "3FZasd93cpjq2LkjuV5qJHunfnkLtktZc4",
            cryptoAsset: {
              name: "Bitcoin",
              symbol: "BTC",
              image: "/images/cryptocurrencies/bitcoin.svg",
            },
            balance: 0.25,
            lastTransactionDate: "2025-10-01",
            status: "Active",
          },
          {
            id: "2",
            name: "ETH Wallet",
            address: "0x32Be343pjq2LkjuV5qJHunfnkLtktZc4",
            cryptoAsset: {
              name: "Ethereum",
              symbol: "ETH",
              image: "/images/cryptocurrencies/ethereum.svg",
            },
            balance: 5.2,
            lastTransactionDate: "2025-10-02",
            status: "Inactive",
          },
          {
            id: "3",
            name: "BNB Wallet",
            address: "bnb1asd93cpjq2LkjuV5qJHunfnkLtktZc4",
            cryptoAsset: {
              name: "Binance Coin",
              symbol: "BNB",
              image: "/images/cryptocurrencies/binance.svg",
            },
            balance: 12.5,
            lastTransactionDate: "2025-09-28",
            status: "Active",
          },
          {
            id: "4",
            name: "SOL Wallet",
            address: "SolanaAddress93cpjq2LkjuV5qJHunfnkLtktZc4",
            cryptoAsset: {
              name: "Solana",
              symbol: "SOL",
              image: "/images/cryptocurrencies/solana.svg",
            },
            balance: 42.8,
            lastTransactionDate: "2025-09-30",
            status: "Active",
          },
          {
            id: "5",
            name: "XRP Wallet",
            address: "rPFLsdf93cpjq2LkjuV5qJHunfnkLtktZc4",
            cryptoAsset: {
              name: "Ripple",
              symbol: "XRP",
              image: "/images/cryptocurrencies/ripple.png",
            },
            balance: 1250,
            lastTransactionDate: "2025-09-25",
            status: "Inactive",
          },
          {
            id: "6",
            name: "ADA Wallet",
            address: "addr1asd93cpjq2LkjuV5qJHunfnkLtktZc4",
            cryptoAsset: {
              name: "Cardano",
              symbol: "ADA",
              image: "/images/cryptocurrencies/cardano.png",
            },
            balance: 850,
            lastTransactionDate: "2025-09-20",
            status: "Active",
          },
          {
            id: "7",
            name: "DOT Wallet",
            address: "1FZasd93cpjq2LkjuV5qJHunfnkLtktZc4",
            cryptoAsset: {
              name: "Polkadot",
              symbol: "DOT",
              image: "/images/cryptocurrencies/polkadot.png",
            },
            balance: 32.5,
            lastTransactionDate: "2025-09-15",
            status: "Active",
          },
          {
            id: "8",
            name: "LTC Wallet",
            address: "ltc1qasd93cpjq2LkjuV5qJHunfnkLtktZc4",
            cryptoAsset: {
              name: "Litecoin",
              symbol: "LTC",
              image: "/images/cryptocurrencies/litecoin.png",
            },
            balance: 7.4,
            lastTransactionDate: "2025-09-10",
            status: "Inactive",
          },
          {
            id: "9",
            name: "LINK Wallet",
            address: "0xLinkAddr93cpjq2LkjuV5qJHunfnkLtktZc4",
            cryptoAsset: {
              name: "Chainlink",
              symbol: "LINK",
              image: "/images/cryptocurrencies/chainlink.png",
            },
            balance: 120.3,
            lastTransactionDate: "2025-09-12",
            status: "Active",
          },
          {
            id: "10",
            name: "XLM Wallet",
            address: "GDSW93cpjq2LkjuV5qJHunfnkLtktZc4",
            cryptoAsset: {
              name: "Stellar",
              symbol: "XLM",
              image: "/images/cryptocurrencies/stellar.png",
            },
            balance: 980,
            lastTransactionDate: "2025-09-08",
            status: "Inactive",
          },
          {
            id: "11",
            name: "AVAX Wallet",
            address: "X-avax1asd93cpjq2LkjuV5qJHunfnkLtktZc4",
            cryptoAsset: {
              name: "Avalanche",
              symbol: "AVAX",
              image: "/images/cryptocurrencies/avalanche.png",
            },
            balance: 18.6,
            lastTransactionDate: "2025-09-05",
            status: "Active",
          },
          {
            id: "12",
            name: "VET Wallet",
            address: "vet1asd93cpjq2LkjuV5qJHunfnkLtktZc4",
            cryptoAsset: {
              name: "VeChain",
              symbol: "VET",
              image: "/images/cryptocurrencies/vechain.png",
            },
            balance: 14500,
            lastTransactionDate: "2025-09-01",
            status: "Inactive",
          },
          {
            id: "13",
            name: "XMR Wallet",
            address: "4AsdXMR93cpjq2LkjuV5qJHunfnkLtktZc4",
            cryptoAsset: {
              name: "Monero",
              symbol: "XMR",
              image: "/images/cryptocurrencies/monero.png",
            },
            balance: 6.75,
            lastTransactionDate: "2025-08-28",
            status: "Active",
          },
          {
            id: "14",
            name: "ATOM Wallet",
            address: "cosmos1asd93cpjq2LkjuV5qJHunfnkLtktZc4",
            cryptoAsset: {
              name: "Cosmos",
              symbol: "ATOM",
              image: "/images/cryptocurrencies/cosmos.png",
            },
            balance: 29.4,
            lastTransactionDate: "2025-08-25",
            status: "Inactive",
          },
          {
            id: "15",
            name: "XTZ Wallet",
            address: "tz1asd93cpjq2LkjuV5qJHunfnkLtktZc4",
            cryptoAsset: {
              name: "Tezos",
              symbol: "XTZ",
              image: "/images/cryptocurrencies/tezos.png",
            },
            balance: 88.5,
            lastTransactionDate: "2025-08-22",
            status: "Active",
          },
          {
            id: "16",
            name: "EOS Wallet",
            address: "eos1asd93cpjq2LkjuV5qJHunfnkLtktZc4",
            cryptoAsset: {
              name: "EOS",
              symbol: "EOS",
              image: "/images/cryptocurrencies/eos.png",
            },
            balance: 112.7,
            lastTransactionDate: "2025-08-18",
            status: "Inactive",
          },
          {
            id: "17",
            name: "NEO Wallet",
            address: "neo1asd93cpjq2LkjuV5qJHunfnkLtktZc4",
            cryptoAsset: {
              name: "NEO",
              symbol: "NEO",
              image: "/images/cryptocurrencies/neo.png",
            },
            balance: 40.5,
            lastTransactionDate: "2025-08-15",
            status: "Active",
          },
          {
            id: "18",
            name: "DASH Wallet",
            address: "dash1asd93cpjq2LkjuV5qJHunfnkLtktZc4",
            cryptoAsset: {
              name: "Dash",
              symbol: "DASH",
              image: "/images/cryptocurrencies/dash.png",
            },
            balance: 19.75,
            lastTransactionDate: "2025-08-10",
            status: "Inactive",
          },
          {
            id: "19",
            name: "ZEC Wallet",
            address: "t1ZECasd93cpjq2LkjuV5qJHunfnkLtktZc4",
            cryptoAsset: {
              name: "Zcash",
              symbol: "ZEC",
              image: "/images/cryptocurrencies/zcash.png",
            },
            balance: 22.4,
            lastTransactionDate: "2025-08-05",
            status: "Active",
          },
          {
            id: "20",
            name: "AAVE Wallet",
            address: "0xaaveasd93cpjq2LkjuV5qJHunfnkLtktZc4",
            cryptoAsset: {
              name: "Aave",
              symbol: "AAVE",
              image: "/images/cryptocurrencies/aave.png",
            },
            balance: 9.9,
            lastTransactionDate: "2025-08-01",
            status: "Active",
          },
        ];
        setWalletData(mockData);
      } catch (error) {
        console.error("Error fetching wallet data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Filter data based on search query
  const filteredData = walletData.filter((wallet) =>
    `${wallet.name} ${wallet.cryptoAsset.name} ${wallet.cryptoAsset.symbol} ${wallet.address}`
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
  );

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const nextPage = () =>
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  const prevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));

  // Format balance with appropriate decimals
  const formatBalance = (balance, symbol) => {
    const decimals = symbol === "BTC" || symbol === "ETH" ? 8 : 2;
    return `${balance.toFixed(decimals)} ${symbol}`;
  };

  // Format date
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString();
  };

  // Get status color
  const getStatusColor = (status) => {
    return status === "Active" ? "success.main" : "error.main";
  };

  // Modal
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    // const data = new FormData(event.currentTarget);
    // console.log();
  };

  // Select
  const [status, setStatus] = useState("");
  const handleChangeStatus = (event) => {
    setStatus(event.target.value);
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
      >
        <Box
          sx={{
            display: { xs: "block", sm: "flex" },
            alignItems: "center",
            justifyContent: "space-between",
            gap: "10px",
            mb: "25px",
          }}
        >
          <form className="t-search-form">
            <label>
              <i className="material-symbols-outlined">search</i>
            </label>
            <input
              type="text"
              className="t-input"
              placeholder="Search wallets..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
            />
          </form>

          <Button
            onClick={handleClickOpen}
            variant="outlined"
            sx={{
              textTransform: "capitalize",
              borderRadius: "7px",
              fontWeight: "500",
              fontSize: "13px",
              padding: "6px 13px",
            }}
            color="primary"
          >
            <AddIcon sx={{ position: "relative", top: "-1px" }} /> Add Wallet
          </Button>
        </Box>

        <Box sx={{ marginLeft: "-25px", marginRight: "-25px" }}>
          <TableContainer
            component={Paper}
            sx={{ boxShadow: "none", borderRadius: "0" }}
          >
            <Table sx={{ minWidth: 1100 }} aria-label="Wallet Table">
              <TableHead className="bg-primary-50">
                <TableRow
                  sx={{
                    "& th": {
                      fontWeight: "500",
                      padding: "10px 20px",
                      fontSize: { xs: "13px", md: "14px" },
                    },
                  }}
                >
                  <TableCell className="text-black border-bottom">
                    Name
                  </TableCell>
                  <TableCell className="text-black border-bottom">
                    Address
                  </TableCell>
                  <TableCell className="text-black border-bottom">
                    Crypto Asset
                  </TableCell>
                  <TableCell className="text-black border-bottom">
                    Balance
                  </TableCell>
                  <TableCell className="text-black border-bottom">
                    Last Transaction Date
                  </TableCell>
                  <TableCell className="text-black border-bottom">
                    Status
                  </TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {loading ? (
                  <TableRow>
                    <TableCell
                      colSpan={6}
                      align="center"
                      sx={{ py: 4 }}
                      className="border-bottom"
                    >
                      Loading wallet data...
                    </TableCell>
                  </TableRow>
                ) : currentItems.length > 0 ? (
                  currentItems.map((wallet) => (
                    <TableRow
                      key={wallet.id}
                      sx={{
                        "& td": {
                          padding: "15px 20px",
                          fontSize: { xs: "12px", md: "14px" },
                          fontWeight: 500,
                        },
                      }}
                    >
                      <TableCell className="border-bottom">
                        <Box sx={{ color: "primary.main" }}>{wallet.name}</Box>
                      </TableCell>

                      <TableCell className="text-black border-bottom">
                        {wallet.address}
                      </TableCell>

                      <TableCell className="border-bottom">
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: "8px",
                          }}
                        >
                          <img
                            src={wallet.cryptoAsset.image}
                            alt={wallet.cryptoAsset.name}
                            width={22}
                            height={22}
                          />
                          <Typography
                            variant="h4"
                            sx={{ fontWeight: 600, fontSize: "14px" }}
                          >
                            {wallet.cryptoAsset.name}{" "}
                            <Typography
                              component="span"
                              color="text.secondary"
                              sx={{ fontSize: "12px" }}
                            >
                              ({wallet.cryptoAsset.symbol})
                            </Typography>
                          </Typography>
                        </Box>
                      </TableCell>

                      <TableCell className="text-black border-bottom">
                        {formatBalance(
                          wallet.balance,
                          wallet.cryptoAsset.symbol
                        )}
                      </TableCell>

                      <TableCell className="text-black border-bottom">
                        {formatDate(wallet.lastTransactionDate)}
                      </TableCell>

                      <TableCell className="border-bottom">
                        <Box
                          sx={{
                            color: getStatusColor(wallet.status),
                            fontWeight: 500,
                          }}
                        >
                          {wallet.status}
                        </Box>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell
                      colSpan={6}
                      align="center"
                      sx={{ py: 4 }}
                      className="border-bottom"
                    >
                      No wallets found
                      {searchQuery && ` matching "${searchQuery}"`}
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>

            {filteredData.length > 0 && (
              <Box
                sx={{
                  padding: "15px 20px",
                  display: "flex",
                  justifyContent: { xs: "center", sm: "space-between" },
                  alignItems: "center",
                  flexWrap: "wrap",
                  gap: "10px",
                }}
              >
                <Typography sx={{ fontSize: "13px" }}>
                  Showing {indexOfFirstItem + 1}-
                  {Math.min(indexOfLastItem, filteredData.length)} of{" "}
                  {filteredData.length} results
                </Typography>

                <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
                  <Button
                    className="border text-body"
                    onClick={prevPage}
                    disabled={currentPage === 1}
                    sx={{
                      borderRadius: "4px",
                      width: "35px",
                      height: "35px",
                      minWidth: "unset",
                      padding: "0",
                    }}
                  >
                    <i className="material-symbols-outlined">
                      keyboard_arrow_left
                    </i>
                  </Button>

                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                    (number) => (
                      <Button
                        className="border"
                        key={number}
                        onClick={() => paginate(number)}
                        sx={{
                          borderRadius: "4px",
                          width: "35px",
                          height: "35px",
                          minWidth: "unset",
                          padding: "0",
                          bgcolor:
                            currentPage === number
                              ? "primary.main"
                              : "transparent",
                          color:
                            currentPage === number
                              ? "white !important"
                              : "inherit",
                        }}
                      >
                        {number}
                      </Button>
                    )
                  )}

                  <Button
                    className="border text-body"
                    onClick={nextPage}
                    disabled={currentPage === totalPages}
                    sx={{
                      borderRadius: "4px",
                      width: "35px",
                      height: "35px",
                      minWidth: "unset",
                      padding: "0",
                    }}
                  >
                    <i className="material-symbols-outlined">
                      keyboard_arrow_right
                    </i>
                  </Button>
                </Box>
              </Box>
            )}
          </TableContainer>
        </Box>
      </Card>

      {/* Modal */}
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        className="rmu-modal"
      >
        <Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              background: "#f6f7f9",
              padding: { xs: "15px 20px", md: "25px" },
            }}
            className="rmu-modal-header"
          >
            <Typography
              id="modal-modal-title"
              variant="h6"
              sx={{
                fontWeight: "600",
                fontSize: { xs: "16px", md: "18px" },
              }}
              className="text-black"
            >
              Add New Wallet
            </Typography>

            <IconButton aria-label="remove" size="small" onClick={handleClose}>
              <ClearIcon />
            </IconButton>
          </Box>

          <Box className="rmu-modal-content">
            <Box component="form" noValidate onSubmit={handleSubmit}>
              <Box
                sx={{
                  padding: "25px",
                  borderRadius: "8px",
                }}
                className="bg-white"
              >
                <Grid container alignItems="center" spacing={2}>
                  <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6 }}>
                    <Typography
                      component="h5"
                      sx={{
                        fontWeight: "500",
                        fontSize: "14px",
                        mb: "12px",
                      }}
                      className="text-black"
                    >
                      Wallet Name
                    </Typography>

                    <TextField
                      autoComplete="walletName"
                      name="walletName"
                      required
                      fullWidth
                      id="walletName"
                      label="Enter wallet name"
                      autoFocus
                      InputProps={{
                        style: { borderRadius: 8 },
                      }}
                    />
                  </Grid>

                  <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6 }}>
                    <Typography
                      component="h5"
                      sx={{
                        fontWeight: "500",
                        fontSize: "14px",
                        mb: "12px",
                      }}
                      className="text-black"
                    >
                      Wallet Address
                    </Typography>

                    <TextField
                      autoComplete="walletAddress"
                      name="walletAddress"
                      required
                      fullWidth
                      id="walletAddress"
                      label="Enter wallet address"
                      autoFocus
                      InputProps={{
                        style: { borderRadius: 8 },
                      }}
                    />
                  </Grid>

                  <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6 }}>
                    <Typography
                      component="h5"
                      sx={{
                        fontWeight: "500",
                        fontSize: "14px",
                        mb: "12px",
                      }}
                      className="text-black"
                    >
                      Crypto Asset
                    </Typography>

                    <TextField
                      autoComplete="cryptoAsset"
                      name="cryptoAsset"
                      required
                      fullWidth
                      id="cryptoAsset"
                      label="Enter crypto asset"
                      autoFocus
                      InputProps={{
                        style: { borderRadius: 8 },
                      }}
                    />
                  </Grid>

                  <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6 }}>
                    <Typography
                      component="h5"
                      sx={{
                        fontWeight: "500",
                        fontSize: "14px",
                        mb: "12px",
                      }}
                      className="text-black"
                    >
                      Balance
                    </Typography>

                    <TextField
                      autoComplete="balance"
                      name="balance"
                      required
                      fullWidth
                      id="balance"
                      label="Enter balance"
                      autoFocus
                      InputProps={{
                        style: { borderRadius: 8 },
                      }}
                    />
                  </Grid>

                  <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6 }}>
                    <Typography
                      component="h5"
                      sx={{
                        fontWeight: "500",
                        fontSize: "14px",
                        mb: "12px",
                      }}
                      className="text-black"
                    >
                      Last Transaction Date
                    </Typography>

                    <TextField
                      type="date"
                      autoComplete="lastTransactionDate"
                      name="lastTransactionDate"
                      required
                      fullWidth
                      id="lastTransactionDate"
                      autoFocus
                      InputProps={{
                        style: { borderRadius: 8 },
                      }}
                    />
                  </Grid>

                  <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6 }}>
                    <Typography
                      component="h5"
                      sx={{
                        fontWeight: "500",
                        fontSize: "14px",
                        mb: "12px",
                      }}
                    >
                      Status
                    </Typography>

                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">
                        Select
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={status}
                        label="Select"
                        onChange={handleChangeStatus}
                      >
                        <MenuItem value={0}>Active</MenuItem>
                        <MenuItem value={1}>Inactive</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>

                  <Grid size={{ xs: 12 }} mt={1}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "end",
                        gap: "15px",
                      }}
                    >
                      <Button
                        onClick={handleClose}
                        variant="contained"
                        color="error"
                        sx={{
                          textTransform: "capitalize",
                          borderRadius: "8px",
                          fontWeight: "500",
                          fontSize: "13px",
                          padding: "11px 30px",
                          color: "#fff !important",
                        }}
                      >
                        Cancel
                      </Button>

                      <Button
                        type="submit"
                        variant="contained"
                        sx={{
                          textTransform: "capitalize",
                          borderRadius: "8px",
                          fontWeight: "500",
                          fontSize: "13px",
                          padding: "11px 30px",
                          color: "#fff !important",
                        }}
                      >
                        <AddIcon
                          sx={{
                            position: "relative",
                            top: "-2px",
                          }}
                          className="mr-5"
                        />{" "}
                        Create
                      </Button>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Box>
        </Box>
      </BootstrapDialog>
    </>
  );
};

export default WalletTable;
