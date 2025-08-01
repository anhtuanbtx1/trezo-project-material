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
  TableHead,
  InputLabel,
  MenuItem,
  FormControl,
  Dialog,
  DialogTitle,
  Grid,
  Button,
  TextField,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import CustomDropdown from "./CustomDropdown";
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
  {
    id: "13",
    date: "2025-10-19",
    asset: "Stellar",
    type: "Buy",
    amount: "300 XLM",
    price: "$0.12",
    totalValue: "$36",
    status: "Pending",
  },
  {
    id: "14",
    date: "2025-10-18",
    asset: "VeChain",
    type: "Sell",
    amount: "800 VET",
    price: "$0.03",
    totalValue: "$24",
    status: "Done",
  },
  {
    id: "15",
    date: "2025-10-17",
    asset: "NEAR Protocol",
    type: "Buy",
    amount: "25 NEAR",
    price: "$1.90",
    totalValue: "$47.50",
    status: "Failed",
  },
  {
    id: "16",
    date: "2025-10-16",
    asset: "Algorand",
    type: "Sell",
    amount: "60 ALGO",
    price: "$0.22",
    totalValue: "$13.20",
    status: "Done",
  },
  {
    id: "17",
    date: "2025-10-15",
    asset: "Cosmos",
    type: "Buy",
    amount: "10 ATOM",
    price: "$7.00",
    totalValue: "$70",
    status: "Pending",
  },
  {
    id: "18",
    date: "2025-10-14",
    asset: "Filecoin",
    type: "Sell",
    amount: "6 FIL",
    price: "$3.30",
    totalValue: "$19.80",
    status: "Done",
  },
  {
    id: "19",
    date: "2025-10-13",
    asset: "Tezos",
    type: "Buy",
    amount: "40 XTZ",
    price: "$0.80",
    totalValue: "$32",
    status: "Pending",
  },
  {
    id: "20",
    date: "2025-10-12",
    asset: "Internet Computer",
    type: "Sell",
    amount: "5 ICP",
    price: "$4.50",
    totalValue: "$22.50",
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

const TransactionsTable = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [searchQuery, setSearchQuery] = React.useState("");

  // Filter transactions based on search query
  const filteredTransactions = transactions.filter((transaction) => {
    const searchLower = searchQuery.toLowerCase();
    return (
      transaction.date.toLowerCase().includes(searchLower) ||
      transaction.asset.toLowerCase().includes(searchLower) ||
      transaction.type.toLowerCase().includes(searchLower) ||
      transaction.amount.toLowerCase().includes(searchLower) ||
      transaction.price.toLowerCase().includes(searchLower) ||
      transaction.totalValue.toLowerCase().includes(searchLower) ||
      transaction.status.toLowerCase().includes(searchLower)
    );
  });

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    setPage(0); // Reset to first page when searching
  };

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0
      ? Math.max(0, (1 + page) * rowsPerPage - filteredTransactions.length)
      : 0;

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
  const [type, setType] = useState("");
  const handleChangeType = (event) => {
    setType(event.target.value);
  };

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
              placeholder="Search here..."
              value={searchQuery}
              onChange={handleSearchChange}
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
              <AddIcon sx={{ position: "relative", top: "-1px" }} /> Add
              Transaction
            </Button>

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
                    Date
                  </TableCell>
                  <TableCell className="text-black border-bottom">
                    Asset
                  </TableCell>
                  <TableCell className="text-black border-bottom">
                    Type
                  </TableCell>
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
                {filteredTransactions.length === 0 ? (
                  <TableRow>
                    <TableCell
                      colSpan={7}
                      align="center"
                      sx={{ py: 4 }}
                      className="border-bottom"
                    >
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          gap: 1,
                        }}
                      >
                        <i
                          className="material-symbols-outlined"
                          style={{ fontSize: "48px", color: "#9e9e9e" }}
                        >
                          search_off
                        </i>
                        <Typography variant="body1" color="textSecondary">
                          No transactions found
                        </Typography>
                        {searchQuery && (
                          <Typography variant="body2" color="textSecondary">
                            No results for "{searchQuery}"
                          </Typography>
                        )}
                      </Box>
                    </TableCell>
                  </TableRow>
                ) : (
                  <>
                    {(rowsPerPage > 0
                      ? filteredTransactions.slice(
                          page * rowsPerPage,
                          page * rowsPerPage + rowsPerPage
                        )
                      : filteredTransactions
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
                  </>
                )}
              </TableBody>

              <TableFooter>
                <TableRow>
                  <TablePagination
                    rowsPerPageOptions={[
                      5,
                      10,
                      25,
                      { label: "All", value: -1 },
                    ]}
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
              Add New Guest
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
                      Date
                    </Typography>

                    <TextField
                      type="date"
                      autoComplete="date"
                      name="date"
                      required
                      fullWidth
                      id="date"
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
                      Asset
                    </Typography>

                    <TextField
                      autoComplete="asset"
                      name="asset"
                      required
                      fullWidth
                      id="asset"
                      label="Enter asset"
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
                      Type
                    </Typography>

                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">
                        Select
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={type}
                        label="Select"
                        onChange={handleChangeType}
                      >
                        <MenuItem value={0}>Buy</MenuItem>
                        <MenuItem value={1}>Sell</MenuItem>
                      </Select>
                    </FormControl>
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
                      Amount
                    </Typography>

                    <TextField
                      autoComplete="amount"
                      name="amount"
                      required
                      fullWidth
                      id="amount"
                      label="Enter amount"
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
                      Total Value
                    </Typography>

                    <TextField
                      autoComplete="totalValue"
                      name="totalValue"
                      required
                      fullWidth
                      id="totalValue"
                      label="Enter total value"
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
                        <MenuItem value={0}>Done</MenuItem>
                        <MenuItem value={1}>Pending</MenuItem>
                        <MenuItem value={2}>Failed</MenuItem>
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

export default TransactionsTable;
