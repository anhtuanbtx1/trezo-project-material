"use client";

import React, { useState } from "react";
import {
  Card,
  Box,
  Typography,
  FormControl,
  TextField,
  Grid,
  Select,
  InputLabel,
  MenuItem,
} from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const PaymentMethod = () => {
  const [paymentCard, setPaymentCard] = useState("");

  const handlePaymentCardChange = (event) => {
    setPaymentCard(event.target.value);
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
            Payment Method
          </Typography>
        </Box>

        <Grid
          container
          spacing={3}
          columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}
        >
          <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 12 }}>
            <Box>
              <Typography
                component="label"
                sx={{
                  fontWeight: "500",
                  fontSize: "14px",
                  mb: "10px",
                  display: "block",
                }}
                className="text-black"
              >
                Payment Card
              </Typography>

              <FormControl fullWidth>
                <InputLabel id="payment-card-label">Select</InputLabel>
                <Select
                  labelId="payment-card-label"
                  id="product-type"
                  value={paymentCard}
                  label="Select"
                  onChange={handlePaymentCardChange}
                  sx={{
                    "& fieldset": {
                      border: "1px solid #D5D9E2",
                      borderRadius: "7px",
                    },
                  }}
                >
                  <MenuItem value="PayPal">PayPal</MenuItem>
                  <MenuItem value="Stax">Stax</MenuItem>
                  <MenuItem value="Helcim">Helcim</MenuItem>
                  <MenuItem value="Square">Square</MenuItem>
                  <MenuItem value="Stripe">Stripe</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 12 }}>
            <Box>
              <FormControl fullWidth>
                <Typography
                  component="label"
                  sx={{
                    fontWeight: "500",
                    fontSize: "14px",
                    mb: "10px",
                    display: "block",
                  }}
                  className="text-black"
                >
                  Card Number
                </Typography>

                <TextField
                  label="Enter card number"
                  placeholder="E.g. 3588XXXXXXXXX"
                  variant="filled"
                  id="cardNumber"
                  name="cardNumber"
                  sx={{
                    "& .MuiInputBase-root": {
                      border: "1px solid #D5D9E2",
                      backgroundColor: "#fff",
                      borderRadius: "7px",
                    },
                    "& .MuiInputBase-root::before": {
                      border: "none",
                    },
                    "& .MuiInputBase-root:hover::before": {
                      border: "none",
                    },
                    "& .MuiInputBase-root:hover:hover:not(.Mui-disabled, .Mui-error)::before":
                      {
                        border: "none",
                      },
                  }}
                />
              </FormControl>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 12 }}>
            <Box>
              <FormControl fullWidth>
                <Typography
                  component="label"
                  sx={{
                    fontWeight: "500",
                    fontSize: "14px",
                    mb: "10px",
                    display: "block",
                  }}
                  className="text-black"
                >
                  Expiration Date
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
              </FormControl>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 12 }}>
            <Box>
              <FormControl fullWidth>
                <Typography
                  component="label"
                  sx={{
                    fontWeight: "500",
                    fontSize: "14px",
                    mb: "10px",
                    display: "block",
                  }}
                  className="text-black"
                >
                  Security Code
                </Typography>

                <TextField
                  label="Enter security code"
                  placeholder="E.g. CVV"
                  variant="filled"
                  id="securityCode"
                  name="securityCode"
                  sx={{
                    "& .MuiInputBase-root": {
                      border: "1px solid #D5D9E2",
                      backgroundColor: "#fff",
                      borderRadius: "7px",
                    },
                    "& .MuiInputBase-root::before": {
                      border: "none",
                    },
                    "& .MuiInputBase-root:hover::before": {
                      border: "none",
                    },
                    "& .MuiInputBase-root:hover:hover:not(.Mui-disabled, .Mui-error)::before":
                      {
                        border: "none",
                      },
                  }}
                />
              </FormControl>
            </Box>
          </Grid>
        </Grid>
      </Card>
    </>
  );
};

export default PaymentMethod;
