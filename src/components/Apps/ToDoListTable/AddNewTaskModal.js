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
} from "@mui/material";
import { styled } from "@mui/material/styles";
import AddIcon from "@mui/icons-material/Add";
import ClearIcon from "@mui/icons-material/Clear";
import CloseIcon from "@mui/icons-material/Close";
import PropTypes from "prop-types";
import Select from "@mui/material/Select";
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

const AddNewTaskModal = () => {
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
    // Handle form submission here
  };

  // Select
  const [assignedTo, setAssignedTo] = useState("");
  const handleChangeAssignedTo = (event) => {
    setAssignedTo(event.target.value);
  };

  const [priority, setPriority] = useState("");
  const handleChangePriority = (event) => {
    setPriority(event.target.value);
  };

  const [status, setStatus] = useState("");
  const handleChangeStatus = (event) => {
    setStatus(event.target.value);
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
        <AddIcon sx={{ position: "relative", top: "-1px" }} /> Add New Task
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
              Add New Task
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
                  <Grid size={{ xs: 12 }}>
                    <Typography
                      component="h5"
                      sx={{
                        fontWeight: "500",
                        fontSize: "14px",
                        mb: "12px",
                      }}
                      className="text-black"
                    >
                      Task Name
                    </Typography>

                    <TextField
                      autoComplete="taskName"
                      name="taskName"
                      required
                      fullWidth
                      id="taskName"
                      label="Task Name"
                      autoFocus
                      InputProps={{
                        style: { borderRadius: 8 },
                      }}
                    />
                  </Grid>

                  <Grid size={{ xs: 12, sm: 12, md: 6 }}>
                    <Typography
                      component="h5"
                      sx={{
                        fontWeight: "500",
                        fontSize: "14px",
                        mb: "12px",
                      }}
                      className="text-black"
                    >
                      Assigned To
                    </Typography>

                    <FormControl fullWidth>
                      <InputLabel id="assigned-to-label">Select</InputLabel>
                      <Select
                        labelId="assigned-to-label"
                        id="assigned-to"
                        value={assignedTo}
                        label="Select"
                        onChange={handleChangeAssignedTo}
                      >
                        <MenuItem value={0}>Shawn Kennedy</MenuItem>
                        <MenuItem value={1}>Roberto Cruz</MenuItem>
                        <MenuItem value={2}>Juli Johnson</MenuItem>
                        <MenuItem value={3}>Catalina Engles</MenuItem>
                        <MenuItem value={4}>Louis Nagle</MenuItem>
                        <MenuItem value={5}>Michael Marquez</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>

                  <Grid size={{ xs: 12, sm: 12, md: 6 }}>
                    <Typography
                      component="h5"
                      sx={{
                        fontWeight: "500",
                        fontSize: "14px",
                        mb: "12px",
                      }}
                      className="text-black"
                    >
                      Due Date
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

                  <Grid size={{ xs: 12, sm: 12, md: 6 }}>
                    <Typography
                      component="h5"
                      sx={{
                        fontWeight: "500",
                        fontSize: "14px",
                        mb: "12px",
                      }}
                      className="text-black"
                    >
                      Priority
                    </Typography>

                    <FormControl fullWidth>
                      <InputLabel id="priority-label">Select</InputLabel>
                      <Select
                        labelId="priority-label"
                        id="priority"
                        value={priority}
                        label="Select"
                        onChange={handleChangePriority}
                      >
                        <MenuItem value={0}>High</MenuItem>
                        <MenuItem value={1}>Medium</MenuItem>
                        <MenuItem value={2}>Low</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>

                  <Grid size={{ xs: 12, sm: 12, md: 6 }}>
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
                      <InputLabel id="status-label">Select</InputLabel>
                      <Select
                        labelId="status-label"
                        id="status"
                        value={status}
                        label="Select"
                        onChange={handleChangeStatus}
                      >
                        <MenuItem value={0}>In Progress</MenuItem>
                        <MenuItem value={1}>Pending</MenuItem>
                        <MenuItem value={2}>Finished</MenuItem>
                        <MenuItem value={3}>Cancelled</MenuItem>
                      </Select>
                    </FormControl>
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

export default AddNewTaskModal;
