"use client";

import React, { useState } from "react";
import {
  Card,
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
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import FileUpload from "../../Forms/FileUpload";

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
      {onClose && (
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
      )}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};
// End Modal

const TodaysSchedule = () => {
  // Modal state
  const [open, setOpen] = useState(false);
  const [scheduleType, setScheduleType] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleChangeScheduleType = (event) => {
    setScheduleType(event.target.value);
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
            Today's Schedule
          </Typography>
        </Box>

        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateCalendar sx={{ width: "100%" }} className="rmui-ws-calendar" />
        </LocalizationProvider>

        <Button
          onClick={handleClickOpen}
          variant="contained"
          sx={{
            boxShadow: "none",
            textTransform: "capitalize",
            borderRadius: "7px",
            fontWeight: "500",
            padding: "10px 20px",
            fontSize: { xs: "14px", md: "16px" },
            gap: "5px",
            color: "#fff !important",
          }}
        >
          <AddIcon /> Add A Schedule
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
                Add A Schedule
              </Typography>

              <IconButton
                aria-label="remove"
                size="small"
                onClick={handleClose}
              >
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
                      <Typography
                        component="h5"
                        sx={{
                          fontWeight: "500",
                          fontSize: "14px",
                          mb: "12px",
                        }}
                        className="text-black"
                      >
                        Select Date
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
                        Select Time
                      </Typography>

                      <TextField
                        type="time"
                        name="taskName"
                        required
                        fullWidth
                        id="time"
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
                        Schedule Type
                      </Typography>

                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">
                          Select
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={scheduleType}
                          label="Select"
                          onChange={handleChangeScheduleType}
                        >
                          <MenuItem value={0}>
                            Appointment with Patient
                          </MenuItem>
                          <MenuItem value={1}>Group Meeting</MenuItem>
                          <MenuItem value={2}>Team Meeting</MenuItem>
                          <MenuItem value={3}>Client Meeting</MenuItem>
                          <MenuItem value={4}>Doctor Meeting</MenuItem>
                          <MenuItem value={5}>Other</MenuItem>
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
                        Patient Name
                      </Typography>

                      <TextField
                        autoComplete="patientName"
                        name="patientName"
                        required
                        fullWidth
                        id="patientName"
                        label="Patient Name"
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
                        Set Alarm
                      </Typography>

                      <TextField
                        type="time"
                        name="time"
                        required
                        fullWidth
                        id="time"
                        autoFocus
                        InputProps={{
                          style: { borderRadius: 8 },
                        }}
                      />
                    </Grid>

                    <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 12 }}>
                      <Typography
                        component="h5"
                        sx={{
                          fontWeight: "500",
                          fontSize: "14px",
                          mb: "12px",
                        }}
                        className="text-black"
                      >
                        Patient Avatar
                      </Typography>

                      <FileUpload onFileSelect={handleFileSelect} />

                      <Box sx={{ mt: "10px" }}>
                        <img
                          src="/images/users/user39.jpg"
                          alt="user"
                          width={40}
                          height={40}
                          style={{ borderRadius: "50%" }}
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
                          variant="outlined"
                          color="error"
                          sx={{
                            textTransform: "capitalize",
                            borderRadius: "8px",
                            fontWeight: "500",
                            fontSize: "13px",
                            padding: "11px 30px",
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
                            gap: "3px",
                          }}
                        >
                          <AddIcon />
                          Add Schedule
                        </Button>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Box>
          </Box>
        </BootstrapDialog>
      </Card>
    </>
  );
};

export default TodaysSchedule;
