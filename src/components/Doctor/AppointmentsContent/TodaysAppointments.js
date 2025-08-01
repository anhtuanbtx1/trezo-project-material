"use client";

import styles from "./AppointmentsList.module.css";
import React, { useState } from "react"
import {
  Card,
  Box,
  Typography,
  IconButton,
  Dialog,
  DialogTitle,
  Button,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import ClearIcon from "@mui/icons-material/Clear";
import CloseIcon from "@mui/icons-material/Close";
import PropTypes from "prop-types";

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

// Dynamic appointment data
const appointmentsData = [
  {
    id: "1",
    time: "10:00 AM",
    title: "Appointment With Cardiac Patient",
    patientName: "Jonathon Ronan",
    patientImage: "/images/users/user32.jpg",
    status: "done",
  },
  {
    id: "2",
    time: "12:00 PM",
    title: "Board Meeting With",
    patientName: "Jessy Pinkman",
    patientImage: "/images/users/user33.jpg",
    status: "done",
  },
  {
    id: "3",
    time: "02:00 PM",
    title: "Major Cardiac Surgery of the Patient",
    patientName: "Walter White",
    patientImage: "/images/users/user34.jpg",
    status: "upcoming",
    hasNotification: true,
  },
  {
    id: "4",
    time: "03:00 PM",
    title: "Appointment With Cardiac Patient",
    patientName: "Jonathon Ronan",
    patientImage: "/images/users/user32.jpg",
    status: "upcoming",
    hasNotification: true,
  },
  {
    id: "5",
    time: "04:00 PM",
    title: "Board Meeting With",
    patientName: "Jessy Pinkman",
    patientImage: "/images/users/user34.jpg",
    status: "upcoming",
    hasNotification: true,
  },
  {
    id: "6",
    time: "05:00 PM",
    title: "Major Cardiac Surgery of the Patient",
    patientName: "Walter White",
    patientImage: "/images/users/user33.jpg",
    status: "upcoming",
    hasNotification: true,
  },
];

const TodaysAppointments = () => {
  // Modal state
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
        <Typography
          variant="h3"
          sx={{
            fontSize: { xs: "16px", md: "18px" },
            fontWeight: 700,
            mb: "20px",
          }}
          className="text-black"
        >
          Today's Appointments
        </Typography>

        <Box className={styles.appointmentsList}>
          {appointmentsData.map((appointment) => (
            <Box key={appointment.id} className={styles.appointmentItem}>
              <Box className={styles.icon}>
                <img
                  src={
                    appointment.status === "done"
                      ? "/images/icons/done.svg"
                      : "/images/icons/not-done.svg"
                  }
                  alt={appointment.status}
                  width={24}
                  height={24}
                />
              </Box>

              <Box
                sx={{
                  display: { xs: "block", md: "flex" },
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <Typography className="text-000" fontWeight={600}>
                      {appointment.time}
                    </Typography>

                    {appointment.hasNotification && (
                      <Box
                        sx={{
                          position: "relative",
                          top: "-5px",
                          display: "flex",
                          gap: "10px",
                          alignItems: "center",
                        }}
                      >
                        <Button
                          type="button"
                          sx={{
                            backgroundColor: "primary.main",
                            color: "white !important",
                            minWidth: "auto",
                            borderRadius: "50%",
                            width: 25,
                            height: 25,
                          }}
                        >
                          <i className="ri-notification-2-line"></i>
                        </Button>

                        <Box
                          sx={{
                            bgcolor: "#fff",
                            color: "primary.main",
                            borderRadius: "30px",
                            fontSize: "12px",
                            padding: "0 10px",
                          }}
                        >
                          Upcoming
                        </Box>
                      </Box>
                    )}
                  </Box>

                  <Typography>{appointment.title}</Typography>

                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <img
                      src={appointment.patientImage}
                      className="rounded-circle"
                      alt="user-image"
                      width={30}
                      height={30}
                    />
                    <Typography
                      sx={{
                        fontWeight: 600,
                        fontSize: "13px",
                        margin: "0 !important",
                      }}
                      className="text-000"
                    >
                      {appointment.patientName}
                    </Typography>
                  </Box>
                </Box>

                <Button
                  onClick={handleClickOpen}
                  type="button"
                  className={styles.btnPrimary}
                  sx={{
                    background: "#fff",
                    borderRadius: "5px",
                    padding: "5.5px 16px",
                    fontWeight: 500,
                    textTransform: "capitalize",
                    fontSize: "14px",
                  }}
                >
                  View Details
                </Button>
              </Box>

              <Box className={styles.shape}>
                <img
                  src="/images/icons/vector.png"
                  alt="vector"
                  width={124}
                  height={35}
                />
              </Box>
            </Box>
          ))}
        </Box>
      </Card>

      {/* Modal */}
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        className="rmu-modal"
      >
        <Box sx={{ width: { xs: "100%", sm: "550px" } }}>
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
              Schedule Details
            </Typography>

            <IconButton aria-label="remove" size="small" onClick={handleClose}>
              <ClearIcon />
            </IconButton>
          </Box>

          <Box className="rmu-modal-content">
            <Box
              sx={{
                padding: { xs: "0 20px", md: "0 25px" },
              }}
            >
              <Box sx={{ my: "20px" }}>
                <Typography sx={{ mb: "5px" }}>Date</Typography>
                <Typography
                  variant="h5"
                  sx={{ fontSize: "16px", fontWeight: 500 }}
                >
                  07 Nov, 2025
                </Typography>
              </Box>

              <Box sx={{ my: "20px" }}>
                <Typography sx={{ mb: "5px" }}>Time</Typography>
                <Typography
                  variant="h5"
                  sx={{ fontSize: { xs: "20px", md: "28px" }, fontWeight: 900 }}
                >
                  10:00
                </Typography>
              </Box>

              <Box sx={{ my: "20px" }}>
                <Typography sx={{ mb: "5px" }}>Schedule Description</Typography>
                <Typography
                  variant="h5"
                  sx={{ fontSize: "16px", fontWeight: 500 }}
                >
                  Appointment with Patient
                </Typography>
              </Box>

              <Box sx={{ my: "20px" }}>
                <Typography sx={{ mb: "5px" }}>Patient Name</Typography>

                <Box
                  sx={{ display: "flex", alignItems: "center", gap: "10px" }}
                >
                  <img
                    src="/images/patient.jpg"
                    alt="patient-image"
                    className="rounded-circle"
                    width={25}
                    height={25}
                  />
                  <Typography
                    variant="h5"
                    sx={{ fontSize: "14px", fontWeight: 500, margin: "0" }}
                  >
                    Jessy Pinkman
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ my: "20px" }}>
                <Typography sx={{ mb: "5px" }}>Schedule Status</Typography>

                <Box
                  sx={{
                    borderRadius: "30px",
                    padding: "1px 10px",
                    fontSize: "12px",
                    backgroundColor: "success.100",
                    color: "success.main",
                    display: "inline-block",
                  }}
                >
                  Completed
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </BootstrapDialog>
    </>
  );
};

export default TodaysAppointments;
