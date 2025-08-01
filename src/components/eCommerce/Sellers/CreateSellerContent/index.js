"use client";

import React, { useState } from "react";
import {
  Grid,
  Card,
  Box,
  Typography,
  FormControl,
  InputLabel,
  MenuItem,
  TextField,
  Button,
  Select,
} from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import CustomEditor from "./CustomEditor";
import FileUpload from "../../../Forms/FileUpload";

const CreateSellerContent = () => {
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handleCountryChange = (event) => {
    setCountry(event.target.value);
  };

  // File Upload
  const handleFileSelect = (files) => {
    console.log("Selected files:", files);
    // Process your files here
  };

  return (
    <>
      <Box component="form">
        <Card
          sx={{
            boxShadow: "none",
            borderRadius: "7px",
            mb: "25px",
            padding: { xs: "18px", sm: "20px", lg: "25px" },
          }}
          className="rmui-card"
        >
          <Grid
            container
            spacing={3}
            columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}
          >
            <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 4 }}>
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
                    Seller Name
                  </Typography>

                  <TextField
                    label="Enter seller name"
                    placeholder="E.g. Ava Turner"
                    variant="filled"
                    id="sellerName"
                    name="sellerName"
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

            <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 4 }}>
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
                    Store Name
                  </Typography>

                  <TextField
                    label="Enter store name"
                    placeholder="E.g. TechMaster Store"
                    variant="filled"
                    id="storeName"
                    name="storeName"
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

            <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 4 }}>
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
                    Phone Number
                  </Typography>

                  <TextField
                    label="Enter phone number"
                    placeholder="E.g. +1 555-123-4567"
                    variant="filled"
                    id="phoneNumber"
                    name="phoneNumber"
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

            <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 4 }}>
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
                    Email Address
                  </Typography>

                  <TextField
                    label="Enter email address"
                    placeholder="E.g. +1 555-123-4567"
                    variant="filled"
                    id="emailAddress"
                    name="emailAddress"
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

            <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 4 }}>
              <Typography
                component="h5"
                sx={{
                  fontWeight: "500",
                  fontSize: "14px",
                  mb: "12px",
                }}
                className="text-black"
              >
                Date of Birth
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

            <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 4 }}>
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
                  City
                </Typography>

                <FormControl fullWidth>
                  <InputLabel id="city-label">Select</InputLabel>
                  <Select
                    labelId="city-label"
                    id="city-type"
                    value={city}
                    label="Select"
                    onChange={handleCityChange}
                    sx={{
                      "& fieldset": {
                        border: "1px solid #D5D9E2",
                        borderRadius: "7px",
                      },
                    }}
                  >
                    <MenuItem value={0}>New York</MenuItem>
                    <MenuItem value={1}>Tokyo</MenuItem>
                    <MenuItem value={2}>London</MenuItem>
                    <MenuItem value={3}>Amsterdam</MenuItem>
                    <MenuItem value={4}>Paris</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Grid>

            <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 4 }}>
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
                  Country
                </Typography>

                <FormControl fullWidth>
                  <InputLabel id="brand-name-label">Select</InputLabel>
                  <Select
                    labelId="brand-name-label"
                    id="brand-name"
                    value={country}
                    label="Select"
                    onChange={handleCountryChange}
                    sx={{
                      "& fieldset": {
                        border: "1px solid #D5D9E2",
                        borderRadius: "7px",
                      },
                    }}
                  >
                    <MenuItem value={0}>Switzerland</MenuItem>
                    <MenuItem value={1}>New Zealand</MenuItem>
                    <MenuItem value={2}>Germany</MenuItem>
                    <MenuItem value={3}>United States</MenuItem>
                    <MenuItem value={4}>Japan</MenuItem>
                    <MenuItem value={4}>Netherlands</MenuItem>
                    <MenuItem value={4}>Sweden</MenuItem>
                    <MenuItem value={4}>Canada</MenuItem>
                    <MenuItem value={4}>United Kingdom</MenuItem>
                    <MenuItem value={4}>Australia</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Grid>

            <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 4 }}>
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
                    ZIP / Postcode
                  </Typography>

                  <TextField
                    label="Enter zip / postcode"
                    placeholder="E.g. 3100"
                    variant="filled"
                    id="zipPostcode"
                    name="zipPostcode"
                    required
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

            <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 4 }}>
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
                    Wallet Balance
                  </Typography>

                  <TextField
                    label="Enter wallet balance"
                    placeholder="E.g. $12,092.00"
                    variant="filled"
                    id="walletBalance"
                    name="walletBalance"
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
                  Description
                </Typography>

                <CustomEditor />
              </Box>
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
                Upload Image
              </Typography>

              <FileUpload onFileSelect={handleFileSelect} />
            </Grid>
          </Grid>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: { xs: "10px", sm: "20px" },
              mt: "25px",
            }}
          >
            <Button
              type="submit"
              variant="contained"
              color="error"
              sx={{
                textTransform: "capitalize",
                borderRadius: "6px",
                fontWeight: "500",
                fontSize: { xs: "13px", sm: "16px" },
                padding: { xs: "10px 20px", sm: "10px 24px" },
                color: "#fff !important",
                boxShadow: "none",
              }}
            >
              Cancel
            </Button>

            <Button
              type="submit"
              variant="contained"
              sx={{
                textTransform: "capitalize",
                borderRadius: "6px",
                fontWeight: "500",
                fontSize: { xs: "13px", sm: "16px" },
                padding: { xs: "10px 20px", sm: "10px 24px" },
                color: "#fff !important",
                boxShadow: "none",
              }}
            >
              <i className="material-symbols-outlined">add</i> Create Seller
            </Button>
          </Box>
        </Card>
      </Box>
    </>
  );
};

export default CreateSellerContent;
