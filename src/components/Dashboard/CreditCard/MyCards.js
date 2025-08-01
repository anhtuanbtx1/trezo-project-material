"use client";

import React, { useState } from "react";
import {
  Grid,
  Card,
  Box,
  Typography,
  IconButton,
  Dialog,
  DialogTitle,
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

const MyCards = () => {
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

  return (
    <>
      <Card
        sx={{
          backgroundImage: "url(/images/cards-bg.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          boxShadow: "none",
          borderRadius: "7px",
          mb: "25px",
          padding: { xs: "18px", sm: "20px", lg: "25px" },
        }}
        className="rmui-card for-dark-bg"
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
            My Cards
          </Typography>

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
        </Box>

        <Grid container columnSpacing={{ xs: 3 }}>
          <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 6 }}>
            <Box
              sx={{
                backgroundImage: "url(/images/wallet/card3.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center center",
                backgroundColor: "orange.main",
                borderRadius: "7px",
                padding: { xs: "18px", sm: "20px", lg: "25px" },
                mt: "15px",
              }}
            >
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Box>
                  <Typography
                    className="text-white"
                    sx={{
                      fontSize: "12px",
                      mb: "10px",
                    }}
                  >
                    Credit Card
                  </Typography>

                  <img
                    src="/images/icons/card-frame.png"
                    alt="card-frame"
                    width={45}
                    height={30}
                  />
                </Box>

                <Box
                  className="text-white"
                  sx={{ fontSize: "30px", lineHeight: 1 }}
                >
                  <i className="ri-visa-fill"></i>
                </Box>
              </Box>

              <Typography
                className="text-white"
                sx={{
                  fontWeight: 600,
                  fontSize: { xs: "16px", md: "18px" },
                  mt: { xs: "30px !important", md: "33px !important" },
                  mb: "10px",
                }}
              >
                **** **** **** 1784
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "5px",
                }}
              >
                <Typography className="text-white" lineHeight={1}>
                  Russell McCray
                </Typography>

                <Typography
                  className="text-white"
                  fontFamily={"12px"}
                  lineHeight={1}
                >
                  EXP : 12/30
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 6 }}>
            <Box
              sx={{
                backgroundImage: "url(/images/wallet/card4.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center center",
                backgroundColor: "primary.main",
                borderRadius: "7px",
                padding: { xs: "18px", sm: "20px", lg: "25px" },
                mt: "15px",
              }}
            >
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Box>
                  <Typography
                    className="text-white"
                    sx={{
                      fontSize: "12px",
                      mb: "10px",
                    }}
                  >
                    Credit Card
                  </Typography>

                  <img
                    src="/images/icons/card-frame.png"
                    alt="card-frame"
                    width={45}
                    height={30}
                  />
                </Box>

                <Box
                  className="text-white"
                  sx={{ fontSize: "30px", lineHeight: 1 }}
                >
                  <i className="ri-mastercard-fill"></i>
                </Box>
              </Box>

              <Typography
                className="text-white"
                sx={{
                  fontWeight: 600,
                  fontSize: { xs: "16px", md: "18px" },
                  mt: { xs: "30px !important", md: "33px !important" },
                  mb: "10px",
                }}
              >
                **** **** **** 1794
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "5px",
                }}
              >
                <Typography className="text-white" lineHeight={1}>
                  Russell McCray
                </Typography>

                <Typography
                  className="text-white"
                  fontFamily={"12px"}
                  lineHeight={1}
                >
                  EXP : 12/30
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
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
                  <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 6 }}>
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
                      autoComplete="fullName"
                      name="fullName"
                      required
                      fullWidth
                      id="fullName"
                      label="Full Name"
                      autoFocus
                      InputProps={{
                        style: { borderRadius: 8 },
                      }}
                    />
                  </Grid>

                  <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 6 }}>
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
                      label="Card Number"
                      autoFocus
                      InputProps={{
                        style: { borderRadius: 8 },
                      }}
                    />
                  </Grid>

                  <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 6 }}>
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

                  <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 6 }}>
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
                      autoComplete="CVV"
                      name="CVV"
                      required
                      fullWidth
                      id="CVV"
                      label="CVV"
                      autoFocus
                      InputProps={{
                        style: { borderRadius: 8 },
                      }}
                    />
                  </Grid>

                  <Grid
                    size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 12 }}
                    mt={1}
                  >
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

export default MyCards;
