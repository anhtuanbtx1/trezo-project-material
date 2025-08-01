"use client";

import React, { useState } from "react";
import {
  Box,
  Typography,
  IconButton,
  Dialog,
  Grid,
  Button,
  TextField,
  FormControl,
  InputLabel,
  MenuItem,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import AddIcon from "@mui/icons-material/Add";
import ClearIcon from "@mui/icons-material/Clear";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Select from "@mui/material/Select";

// Modal styling
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const AddTransactionsModal = () => {
  // Modal state
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // Form state
  const [type, setType] = useState("");
  const [category, setCategory] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [status, setStatus] = useState("");

  const handleChangeType = (event) => setType(event.target.value);
  const handleChangeCategory = (event) => setCategory(event.target.value);
  const handleChangePaymentMethod = (event) =>
    setPaymentMethod(event.target.value);
  const handleChangeStatus = (event) => setStatus(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <>
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
        <AddIcon sx={{ position: "relative", top: "-1px" }} /> Add Transaction
      </Button>

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
              Add New Transaction
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
                  <Grid size={{ xs: 12, sm: 12, md: 12, lg: 6 }}>
                    <Box>
                      <Typography
                        component="h5"
                        sx={{
                          fontWeight: "500",
                          fontSize: "14px",
                          mb: "12px",
                        }}
                        className="text-black"
                      >
                        Transaction ID
                      </Typography>

                      <TextField
                        autoComplete="transactionID"
                        name="transactionID"
                        required
                        fullWidth
                        id="transactionID"
                        label="Enter transaction ID"
                        autoFocus
                        InputProps={{
                          style: { borderRadius: 8 },
                        }}
                      />
                    </Box>
                  </Grid>

                  <Grid size={{ xs: 12, sm: 12, md: 12, lg: 6 }}>
                    <Box>
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

                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                          sx={{
                            width: "100%",
                            "& fieldset": {
                              border: "1px solid rgba(0, 0, 0, 0.23)",
                              borderRadius: "7px",
                            },
                          }}
                          className="input-date-picker"
                        />
                      </LocalizationProvider>
                    </Box>
                  </Grid>

                  <Grid size={{ xs: 12, sm: 12, md: 12, lg: 6 }}>
                    <Box>
                      <Typography
                        component="h5"
                        sx={{
                          fontWeight: "500",
                          fontSize: "14px",
                          mb: "12px",
                        }}
                        className="text-black"
                      >
                        Description
                      </Typography>

                      <TextField
                        autoComplete="description"
                        name="description"
                        required
                        fullWidth
                        id="description"
                        label="Enter description"
                        autoFocus
                        InputProps={{
                          style: { borderRadius: 8 },
                        }}
                      />
                    </Box>
                  </Grid>

                  <Grid size={{ xs: 12, sm: 12, md: 12, lg: 6 }}>
                    <Box>
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
                    </Box>
                  </Grid>

                  <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
                    <Typography
                      component="h5"
                      sx={{
                        fontWeight: "500",
                        fontSize: "14px",
                        mb: "12px",
                      }}
                      className="text-black"
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
                        <MenuItem value={0}>Income</MenuItem>
                        <MenuItem value={1}>Expense</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>

                  <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
                    <Typography
                      component="h5"
                      sx={{
                        fontWeight: "500",
                        fontSize: "14px",
                        mb: "12px",
                      }}
                      className="text-black"
                    >
                      Category
                    </Typography>

                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">
                        Select
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={category}
                        label="Select"
                        onChange={handleChangeCategory}
                      >
                        <MenuItem value={0}>Marketing</MenuItem>
                        <MenuItem value={1}>Payroll</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>

                  <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
                    <Typography
                      component="h5"
                      sx={{
                        fontWeight: "500",
                        fontSize: "14px",
                        mb: "12px",
                      }}
                      className="text-black"
                    >
                      Payment Method
                    </Typography>

                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">
                        Select
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={paymentMethod}
                        label="Select"
                        onChange={handleChangePaymentMethod}
                      >
                        <MenuItem value={0}>Bank Transfer</MenuItem>
                        <MenuItem value={1}>Cash</MenuItem>
                        <MenuItem value={2}>Card</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>

                  <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
                    <Typography
                      component="h5"
                      sx={{
                        fontWeight: "500",
                        fontSize: "14px",
                        mb: "12px",
                      }}
                      className="text-black"
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
                        <MenuItem value={0}>Completed</MenuItem>
                        <MenuItem value={1}>Pending</MenuItem>
                      </Select>
                    </FormControl>
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
                      Notes [Optional Notes]
                    </Typography>

                    <TextField
                      label="Your Message"
                      placeholder="Write any additional note here..."
                      multiline
                      rows={4} // Specify the number of rows
                      variant="outlined" // Variant: 'outlined', 'filled', or 'standard'
                      fullWidth // Makes the textarea take the full width of its container
                    />
                  </Grid>

                  <Grid size={{ xs: 12 }} mt={1}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "end",
                        gap: "10px",
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
                          className="mr-5px"
                        />{" "}
                        Add Card
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

export default AddTransactionsModal;
