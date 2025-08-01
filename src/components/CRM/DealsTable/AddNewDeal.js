"use client";

import React, { useState } from "react";
import {
  Box,
  Typography,
  IconButton,
  InputLabel,
  MenuItem,
  FormControl,
  Dialog,
  DialogTitle,
  Grid,
  Button,
  TextField,
  styled,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ClearIcon from "@mui/icons-material/Clear";
import CloseIcon from "@mui/icons-material/Close";
import PropTypes from "prop-types";
import Select from "@mui/material/Select";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

// Modal Styling
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

const AddNewDeal = () => {
  // Modal State
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  // Form State
  const [stage, setStage] = useState("");

  const handleChangeStage = (event) => {
    setStage(event.target.value);
  };

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
        <AddIcon sx={{ position: "relative", top: "-1px" }} /> Add New Deals
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
              Add New Deal
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
                      Company Name
                    </Typography>

                    <TextField
                      autoComplete="companyName"
                      name="companyName"
                      required
                      fullWidth
                      id="companyName"
                      label="Enter company name"
                      autoFocus
                      InputProps={{
                        style: { borderRadius: 8 },
                      }}
                    />
                  </Grid>

                  <Grid size={{ xs: 12, sm: 12, md: 12, lg: 6 }}>
                    <Typography
                      component="h5"
                      sx={{
                        fontWeight: "500",
                        fontSize: "14px",
                        mb: "12px",
                      }}
                      className="text-black"
                    >
                      Contact Person
                    </Typography>

                    <TextField
                      autoComplete="email"
                      name="email"
                      required
                      fullWidth
                      id="email"
                      label="Enter email address"
                      autoFocus
                      InputProps={{
                        style: { borderRadius: 8 },
                      }}
                    />
                  </Grid>

                  <Grid size={{ xs: 12, sm: 12, md: 12, lg: 6 }}>
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

                  <Grid size={{ xs: 12, sm: 12, md: 12, lg: 6 }}>
                    <Typography
                      component="h5"
                      sx={{
                        fontWeight: "500",
                        fontSize: "14px",
                        mb: "12px",
                      }}
                      className="text-black"
                    >
                      Stage
                    </Typography>

                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">
                        Select
                      </InputLabel>
                      <Select
                        labelId="stage-select-label"
                        id="stage-select"
                        value={stage}
                        onChange={handleChangeStage}
                      >
                        <MenuItem value={0}>Proposal</MenuItem>
                        <MenuItem value={1}>Presentation</MenuItem>
                        <MenuItem value={2}>Negotiation</MenuItem>
                        <MenuItem value={3}>Discovery</MenuItem>
                        <MenuItem value={4}>Acma Industries</MenuItem>
                        <MenuItem value={5}>Contract Sent</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>

                  <Grid size={{ xs: 12, sm: 12, md: 12, lg: 6 }}>
                    <Typography
                      component="h5"
                      sx={{
                        fontWeight: "500",
                        fontSize: "14px",
                        mb: "12px",
                      }}
                      className="text-black"
                    >
                      Close Date
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

export default AddNewDeal;
