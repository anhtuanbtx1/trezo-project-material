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
} from "@mui/material";
import CustomDropdown from "./CustomDropdown";
import { styled } from "@mui/material/styles";
import AddIcon from "@mui/icons-material/Add";
import ClearIcon from "@mui/icons-material/Clear";
import CloseIcon from "@mui/icons-material/Close";
import PropTypes from "prop-types";
import FileUpload from "../../Forms/FileUpload";
import Chart from "react-apexcharts";

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

const GainersLosersTable = () => {
  const [isChartLoaded, setChartLoaded] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [cryptoData, setCryptoData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setChartLoaded(true);
    // Simulate API fetch
    const fetchData = async () => {
      try {
        // In a real app, you would fetch from an API here
        const mockData = [
          {
            id: "1",
            name: "Bitcoin",
            symbol: "BTC",
            image: "/images/cryptocurrencies/bitcoin.svg",
            price: 85818.27,
            change1h: 0.47,
            change24h: 2.65,
            change7d: 3.01,
            marketCap: 1702262413645,
            volume24h: 37182010584,
            trendData: [20, 14, 18, 12, 16, 24, 22, 30, 28, 36, 32, 34],
          },
          {
            id: "2",
            name: "Ethereum",
            symbol: "ETH",
            image: "/images/cryptocurrencies/ethereum.svg",
            price: 1993.88,
            change1h: -1.03,
            change24h: 2.44,
            change7d: 5.59,
            marketCap: 240652882527,
            volume24h: 19913301026,
            trendData: [15, 20, 12, 18, 22, 25, 30, 28, 32, 35, 30, 28],
          },
          {
            id: "3",
            name: "Binance Coin",
            symbol: "BNB",
            image: "/images/cryptocurrencies/binance.svg",
            price: 2.49,
            change1h: 0.16,
            change24h: -7.75,
            change7d: 10.25,
            marketCap: 145187520169,
            volume24h: 10614863319,
            trendData: [10, 15, 8, 12, 18, 20, 15, 12, 18, 22, 25, 30],
          },
          {
            id: "4",
            name: "Solana",
            symbol: "SOL",
            image: "/images/cryptocurrencies/solana.svg",
            price: 102.45,
            change1h: 1.25,
            change24h: -2.35,
            change7d: 8.75,
            marketCap: 45187520169,
            volume24h: 5614863319,
            trendData: [5, 10, 15, 12, 8, 12, 18, 22, 25, 30, 28, 32],
          },
          {
            id: "5",
            name: "Cardano",
            symbol: "ADA",
            image: "/images/cryptocurrencies/cardano.png",
            price: 0.45,
            change1h: -0.5,
            change24h: 1.25,
            change7d: -3.5,
            marketCap: 15187520169,
            volume24h: 1614863319,
            trendData: [8, 12, 15, 10, 5, 8, 12, 15, 18, 20, 22, 25],
          },
          {
            id: "6",
            name: "Ripple",
            symbol: "XRP",
            image: "/images/cryptocurrencies/ripple.png",
            price: 0.52,
            change1h: 0.25,
            change24h: -1.35,
            change7d: 2.45,
            marketCap: 28187520169,
            volume24h: 2614863319,
            trendData: [12, 8, 10, 15, 18, 14, 16, 20, 18, 22, 20, 24],
          },
          {
            id: "7",
            name: "Polkadot",
            symbol: "DOT",
            image: "/images/cryptocurrencies/polkadot.png",
            price: 6.78,
            change1h: -0.75,
            change24h: 3.25,
            change7d: -5.5,
            marketCap: 78187520169,
            volume24h: 4614863319,
            trendData: [18, 15, 12, 10, 8, 12, 15, 18, 20, 18, 15, 12],
          },
          {
            id: "8",
            name: "Litecoin",
            symbol: "LTC",
            image: "/images/cryptocurrencies/litecoin.png",
            price: 91.2,
            change1h: 0.8,
            change24h: 1.7,
            change7d: 2.5,
            marketCap: 10800000000,
            volume24h: 900000000,
            trendData: [20, 21, 19, 22, 25, 28, 30, 27, 25, 22, 20, 18],
          },
          {
            id: "9",
            name: "Chainlink",
            symbol: "LINK",
            image: "/images/cryptocurrencies/chainlink.png",
            price: 14.6,
            change1h: 1.1,
            change24h: 0.5,
            change7d: 4.3,
            marketCap: 7300000000,
            volume24h: 600000000,
            trendData: [10, 11, 13, 12, 14, 13, 15, 17, 16, 18, 17, 20],
          },
          {
            id: "10",
            name: "Stellar",
            symbol: "XLM",
            image: "/images/cryptocurrencies/stellar.png",
            price: 0.11,
            change1h: -0.3,
            change24h: 0.6,
            change7d: 1.4,
            marketCap: 2800000000,
            volume24h: 300000000,
            trendData: [5, 6, 7, 6, 5, 6, 7, 8, 7, 8, 9, 10],
          },
          {
            id: "11",
            name: "Avalanche",
            symbol: "AVAX",
            image: "/images/cryptocurrencies/avalanche.png",
            price: 35.7,
            change1h: 0.4,
            change24h: -2.1,
            change7d: 6.5,
            marketCap: 12400000000,
            volume24h: 1100000000,
            trendData: [20, 18, 16, 14, 15, 17, 20, 22, 23, 25, 27, 30],
          },
          {
            id: "12",
            name: "VeChain",
            symbol: "VET",
            image: "/images/cryptocurrencies/vechain.png",
            price: 0.028,
            change1h: -0.2,
            change24h: 1.3,
            change7d: -1.1,
            marketCap: 1800000000,
            volume24h: 210000000,
            trendData: [10, 11, 12, 10, 9, 8, 10, 12, 14, 13, 11, 9],
          },
          {
            id: "13",
            name: "Monero",
            symbol: "XMR",
            image: "/images/cryptocurrencies/monero.png",
            price: 148.9,
            change1h: 0.9,
            change24h: -1.9,
            change7d: 2.7,
            marketCap: 2700000000,
            volume24h: 350000000,
            trendData: [15, 14, 16, 17, 16, 18, 19, 20, 18, 16, 17, 15],
          },
          {
            id: "14",
            name: "Cosmos",
            symbol: "ATOM",
            image: "/images/cryptocurrencies/cosmos.png",
            price: 10.23,
            change1h: -0.7,
            change24h: -0.2,
            change7d: 3.5,
            marketCap: 3400000000,
            volume24h: 400000000,
            trendData: [8, 7, 9, 10, 11, 10, 12, 13, 12, 14, 13, 12],
          },
          {
            id: "15",
            name: "Tezos",
            symbol: "XTZ",
            image: "/images/cryptocurrencies/tezos.png",
            price: 1.12,
            change1h: 0.6,
            change24h: 1.4,
            change7d: 2.8,
            marketCap: 1000000000,
            volume24h: 150000000,
            trendData: [6, 7, 8, 9, 10, 11, 10, 9, 8, 7, 6, 7],
          },
          {
            id: "16",
            name: "EOS",
            symbol: "EOS",
            image: "/images/cryptocurrencies/eos.png",
            price: 0.94,
            change1h: -0.4,
            change24h: -0.6,
            change7d: 0.9,
            marketCap: 890000000,
            volume24h: 95000000,
            trendData: [5, 6, 6, 5, 6, 7, 8, 7, 6, 5, 5, 4],
          },
          {
            id: "17",
            name: "NEO",
            symbol: "NEO",
            image: "/images/cryptocurrencies/neo.png",
            price: 12.34,
            change1h: 0.3,
            change24h: -1.1,
            change7d: 1.7,
            marketCap: 870000000,
            volume24h: 96000000,
            trendData: [10, 9, 10, 11, 10, 12, 13, 12, 11, 10, 11, 12],
          },
          {
            id: "18",
            name: "Dash",
            symbol: "DASH",
            image: "/images/cryptocurrencies/dash.png",
            price: 42.67,
            change1h: -0.6,
            change24h: 0.5,
            change7d: -0.9,
            marketCap: 600000000,
            volume24h: 70000000,
            trendData: [12, 13, 12, 11, 10, 11, 10, 9, 8, 9, 10, 11],
          },
          {
            id: "19",
            name: "Zcash",
            symbol: "ZEC",
            image: "/images/cryptocurrencies/zcash.png",
            price: 28.53,
            change1h: -0.1,
            change24h: 0.3,
            change7d: 1.2,
            marketCap: 400000000,
            volume24h: 50000000,
            trendData: [7, 6, 7, 8, 7, 8, 9, 10, 9, 8, 7, 6],
          },
          {
            id: "20",
            name: "Aave",
            symbol: "AAVE",
            image: "/images/cryptocurrencies/aave.png",
            price: 72.1,
            change1h: 1.5,
            change24h: -1.3,
            change7d: 4.8,
            marketCap: 950000000,
            volume24h: 130000000,
            trendData: [14, 15, 16, 15, 14, 13, 14, 15, 16, 17, 18, 20],
          },
        ];
        setCryptoData(mockData);
      } catch (error) {
        console.error("Error fetching crypto data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Filter data based on search query
  const filteredData = cryptoData.filter((crypto) =>
    `${crypto.name} ${crypto.symbol}`
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

  // Format currency
  const formatCurrency = (value) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value);
  };

  // Format large numbers
  const formatLargeNumber = (value) => {
    if (value >= 1e12) return `${(value / 1e12).toFixed(2)}T`;
    if (value >= 1e9) return `${(value / 1e9).toFixed(2)}B`;
    if (value >= 1e6) return `${(value / 1e6).toFixed(2)}M`;
    return value.toFixed(2);
  };

  // Get color based on value
  const getChangeColor = (value) => {
    return value >= 0 ? "success.main" : "error.main";
  };

  // Format percentage change
  const formatChange = (value) => {
    return `${value >= 0 ? "+" : ""}${value.toFixed(2)}%`;
  };

  // Generate chart options with dynamic color based on trend
  const getChartOptions = (trendData) => ({
    chart: {
      sparkline: {
        enabled: true,
      },
    },
    stroke: {
      curve: "smooth",
      width: 2,
      colors: [
        trendData[0] > trendData[trendData.length - 1] ? "#dc3545" : "#28a745",
      ],
    },
    tooltip: {
      enabled: false,
    },
    grid: {
      show: false,
    },
    xaxis: {
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      show: false,
    },
  });

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

  // File Upload
  const handleFileSelect = (files) => {
    console.log("Selected files:", files);
    // Process your files here
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
              placeholder="Search coins..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
            />
          </form>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
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
              <AddIcon sx={{ position: "relative", top: "-1px" }} /> Add Crypto
            </Button>

            <Box>
              <CustomDropdown
                options={["24h", "48h", "72h"]} // Need to change the options also in CustomDropdown file
                onSelect={(value) => console.log(value)}
                defaultLabel="24h"
              />
            </Box>
          </Box>
        </Box>

        <Box sx={{ marginLeft: "-25px", marginRight: "-25px" }}>
          <TableContainer
            component={Paper}
            sx={{ boxShadow: "none", borderRadius: "0" }}
            className="rmui-table"
          >
            <Table
              sx={{ minWidth: 850 }}
              aria-label="Recent Transactions Table"
            >
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
                  <TableCell className="text-black border-bottom">
                    Coin
                  </TableCell>
                  <TableCell className="text-black border-bottom">
                    Price
                  </TableCell>
                  <TableCell className="text-black border-bottom">
                    1h %
                  </TableCell>
                  <TableCell className="text-black border-bottom">
                    24h %
                  </TableCell>
                  <TableCell className="text-black border-bottom">
                    7d %
                  </TableCell>
                  <TableCell className="text-black border-bottom">
                    Market Cap
                  </TableCell>
                  <TableCell className="text-black border-bottom">
                    Volume (24h)
                  </TableCell>
                  <TableCell className="text-black border-bottom">
                    Last 7 Days
                  </TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {loading ? (
                  <TableRow>
                    <TableCell colSpan={8} align="center" sx={{ py: 4 }}>
                      Loading data...
                    </TableCell>
                  </TableRow>
                ) : currentItems.length > 0 ? (
                  currentItems.map((crypto) => (
                    <TableRow
                      key={crypto.id}
                      sx={{
                        "& td": {
                          padding: "15px 20px",
                          fontSize: "14px",
                          fontWeight: 500,
                        },
                      }}
                    >
                      <TableCell className="text-black border-bottom">
                        <Box
                          sx={{
                            gap: "8px",
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          <img
                            src={crypto.image}
                            alt={crypto.name}
                            width={22}
                            height={22}
                          />
                          <Typography
                            variant="h5"
                            sx={{ fontWeight: 500, fontSize: "14px" }}
                          >
                            {crypto.name}{" "}
                            <Typography
                              component={"span"}
                              className="text-body"
                              sx={{ fontSize: "12px" }}
                            >
                              ({crypto.symbol})
                            </Typography>
                          </Typography>
                        </Box>
                      </TableCell>

                      <TableCell className="text-black border-bottom">
                        {formatCurrency(crypto.price)}
                      </TableCell>

                      <TableCell className="border-bottom">
                        <Box sx={{ color: getChangeColor(crypto.change1h) }}>
                          {formatChange(crypto.change1h)}
                        </Box>
                      </TableCell>

                      <TableCell className="text-black border-bottom">
                        <Box sx={{ color: getChangeColor(crypto.change24h) }}>
                          {formatChange(crypto.change24h)}
                        </Box>
                      </TableCell>

                      <TableCell className="text-black border-bottom">
                        <Box sx={{ color: getChangeColor(crypto.change7d) }}>
                          {formatChange(crypto.change7d)}
                        </Box>
                      </TableCell>

                      <TableCell className="text-black border-bottom">
                        ${formatLargeNumber(crypto.marketCap)}
                      </TableCell>

                      <TableCell className="border-bottom">
                        ${formatLargeNumber(crypto.volume24h)}
                      </TableCell>

                      <TableCell className="border-bottom">
                        <Box sx={{ position: "relative" }}>
                          {isChartLoaded && (
                            <Chart
                              options={getChartOptions(crypto.trendData)}
                              series={[
                                { name: "Trend", data: crypto.trendData },
                              ]}
                              type="line"
                              height={30}
                              width={100}
                            />
                          )}
                        </Box>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell
                      colSpan={8}
                      align="center"
                      sx={{ py: 4 }}
                      className="border-bottom"
                    >
                      No cryptocurrencies found
                      {searchQuery && ` matching "${searchQuery}"`}
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>

            {filteredData.length > 0 && (
              <Box
                sx={{
                  paddingTop: "15px !important",
                  display: "flex",
                  justifyContent: { xs: "center", sm: "space-between" },
                  alignItems: "center",
                  flexWrap: "wrap",
                  gap: "10px",
                  padding: "15px 20px",
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
                        key={number}
                        className={`border ${
                          currentPage === number
                            ? "bg-primary text-white"
                            : "text-body"
                        }`}
                        onClick={() => paginate(number)}
                        sx={{
                          borderRadius: "4px",
                          width: "35px",
                          height: "35px",
                          minWidth: "unset",
                          padding: "0",
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
              Add New Crypto
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
                      Name
                    </Typography>

                    <TextField
                      autoComplete="name"
                      name="name"
                      required
                      fullWidth
                      id="name"
                      label="Enter name"
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
                      Price
                    </Typography>

                    <TextField
                      autoComplete="price"
                      name="price"
                      required
                      fullWidth
                      id="price"
                      label="Enter price"
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
                      1h %
                    </Typography>

                    <TextField
                      autoComplete="1h"
                      name="1h"
                      required
                      fullWidth
                      id="1h"
                      label="Enter 1h"
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
                      24h %
                    </Typography>

                    <TextField
                      autoComplete="24h"
                      name="24h"
                      required
                      fullWidth
                      id="24h"
                      label="Enter 24h"
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
                      7d %
                    </Typography>

                    <TextField
                      autoComplete="7d"
                      name="7d"
                      required
                      fullWidth
                      id="7d"
                      label="Enter 7d"
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
                      Market Cap
                    </Typography>

                    <TextField
                      autoComplete="marketCap"
                      name="marketCap"
                      required
                      fullWidth
                      id="marketCap"
                      label="Enter market cap"
                      autoFocus
                      InputProps={{
                        style: { borderRadius: 8 },
                      }}
                    />
                  </Grid>

                  <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12 }}>
                    <Typography
                      component="h5"
                      sx={{
                        fontWeight: "500",
                        fontSize: "14px",
                        mb: "12px",
                      }}
                      className="text-black"
                    >
                      Volume (24h)
                    </Typography>

                    <TextField
                      autoComplete="volume24h"
                      name="volume24h"
                      required
                      fullWidth
                      id="volume24h"
                      label="Enter volume (24h)"
                      autoFocus
                      InputProps={{
                        style: { borderRadius: 8 },
                      }}
                    />
                  </Grid>

                  <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12 }}>
                    <Box>
                      <Typography
                        component="h5"
                        sx={{ fontWeight: "500", fontSize: "14px", mb: "12px" }}
                      >
                        Image
                      </Typography>

                      <FileUpload onFileSelect={handleFileSelect} />
                    </Box>
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

export default GainersLosersTable;
