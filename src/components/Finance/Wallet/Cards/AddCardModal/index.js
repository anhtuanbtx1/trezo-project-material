"use client";

import React, { useState } from "react";
import {
  Box,
  Typography,
  IconButton,
  Dialog,
  DialogTitle,
  Grid,
  Button,
  TextField,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import AddIcon from "@mui/icons-material/Add";
import ClearIcon from "@mui/icons-material/Clear";
import CloseIcon from "@mui/icons-material/Close";
import PropTypes from "prop-types";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

// Modal
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle({ children, onClose, ...other }) {
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

const AddCardModal = () => {
  // Modal state
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can handle the form submission here.
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
        <AddIcon sx={{ position: "relative", top: "-1px" }} /> Add Card
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
              Add New Card
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
                        Full Name
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
                        Card Number
                      </Typography>

                      <TextField
                        autoComplete="cardNumber"
                        name="cardNumber"
                        required
                        fullWidth
                        id="cardNumber"
                        label="Enter card number"
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
                        Expiry Date
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
                        CVV
                      </Typography>

                      <TextField
                        autoComplete="cvv"
                        name="cvv"
                        required
                        fullWidth
                        id="cvv"
                        label="Enter cvv"
                        autoFocus
                        InputProps={{
                          style: { borderRadius: 8 },
                        }}
                      />
                    </Box>
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

export default AddCardModal;
