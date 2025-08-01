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
  Select,
} from "@mui/material";
import CustomEditor from "./CustomEditor";

const TextualInputs = () => {
  const [townCity, setTownCity] = useState("");
  const [state, setState] = useState("");

  const handleTownCityChange = (event) => {
    setTownCity(event.target.value);
  };

  const handleStateChange = (event) => {
    setState(event.target.value);
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
              Textual Inputs
            </Typography>
          </Box>

          <Grid
            container
            spacing={3}
            columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}
          >
            <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 6 }}>
              <FormControl fullWidth>
                <TextField
                  label="First name"
                  placeholder="E.g. Olivia"
                  variant="filled"
                  id="firstName"
                  name="firstName"
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
            </Grid>

            <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 6 }}>
              <FormControl fullWidth>
                <TextField
                  label="Last name"
                  placeholder="E.g. John"
                  variant="filled"
                  id="lastName"
                  name="lastName"
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
            </Grid>

            <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 6 }}>
              <FormControl fullWidth>
                <TextField
                  label="Email address"
                  placeholder="E.g. hello@trezo.com"
                  variant="filled"
                  id="email"
                  name="email"
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
            </Grid>

            <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 6 }}>
              <FormControl fullWidth>
                <TextField
                  label="Phone number"
                  placeholder="E.g. +098765432"
                  variant="filled"
                  id="phone"
                  name="phone"
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
            </Grid>

            <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 6 }}>
              <FormControl fullWidth>
                <TextField
                  label="Address"
                  placeholder="E.g. Amsterdam"
                  variant="filled"
                  id="address"
                  name="address"
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
            </Grid>

            <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 6 }}>
              <FormControl fullWidth>
                <TextField
                  label="Country"
                  placeholder="E.g. Netherlands"
                  variant="filled"
                  id="country"
                  name="country"
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
            </Grid>

            <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 4 }}>
              <FormControl fullWidth>
                <InputLabel id="product-type-label">Town/City</InputLabel>
                <Select
                  labelId="product-type-label"
                  id="product-type"
                  value={townCity}
                  label="Town/City"
                  onChange={handleTownCityChange}
                  sx={{
                    "& fieldset": {
                      border: "1px solid #D5D9E2",
                      borderRadius: "7px",
                    },
                  }}
                >
                  <MenuItem value={0}>New York</MenuItem>
                  <MenuItem value={1}>Amsterdam</MenuItem>
                  <MenuItem value={2}>Nalchity</MenuItem>
                  <MenuItem value={3}>Beijing</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 4 }}>
              <FormControl fullWidth>
                <InputLabel id="state-label">State</InputLabel>
                <Select
                  labelId="state-label"
                  id="state-name"
                  value={state}
                  label="State"
                  onChange={handleStateChange}
                  sx={{
                    "& fieldset": {
                      border: "1px solid #D5D9E2",
                      borderRadius: "7px",
                    },
                  }}
                >
                  <MenuItem value={0}>Washington</MenuItem>
                  <MenuItem value={1}>Utah</MenuItem>
                  <MenuItem value={2}>Nebraska</MenuItem>
                  <MenuItem value={3}>Florida</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 4 }}>
              <FormControl fullWidth>
                <TextField
                  label="Zip code"
                  placeholder="E.g. 0986"
                  variant="filled"
                  id="zipCode"
                  name="zipCode"
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
          </Grid>
        </Card>
      </Box>
    </>
  );
};

export default TextualInputs;
