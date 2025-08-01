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
import CustomEditor from "./CustomEditor";
import FileUpload from "../../Forms/FileUpload";

const AddPropertyForm = () => {
  const [propertyStatus, setPropertyStatus] = useState("");
  const [propertyType, setPropertyType] = useState("");

  const handlePropertyStatusChange = (event) => {
    setPropertyStatus(event.target.value);
  };

  const handlePropertyTypeChange = (event) => {
    setPropertyType(event.target.value);
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
            <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 6 }}>
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
                    Property Name
                  </Typography>

                  <TextField
                    label="Enter property name"
                    placeholder="Property name"
                    variant="filled"
                    id="propertyName"
                    name="propertyName"
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

            <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 6 }}>
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
                  Property Status
                </Typography>

                <FormControl fullWidth>
                  <InputLabel id="property-status-label">Select</InputLabel>
                  <Select
                    labelId="property-status-label"
                    id="property-status"
                    value={propertyStatus}
                    label="Select"
                    onChange={handlePropertyStatusChange}
                    sx={{
                      "& fieldset": {
                        border: "1px solid #D5D9E2",
                        borderRadius: "7px",
                      },
                    }}
                  >
                    <MenuItem value={0}>Rent</MenuItem>
                    <MenuItem value={1}>Active</MenuItem>
                    <MenuItem value={2}>Expired</MenuItem>
                    <MenuItem value={3}>Withdrawn</MenuItem>
                    <MenuItem value={4}>Cancelled</MenuItem>
                    <MenuItem value={5}>Pending</MenuItem>
                    <MenuItem value={6}>Closed</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Grid>

            <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 6 }}>
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
                    Property Price
                  </Typography>

                  <TextField
                    label="Enter property price"
                    placeholder="E.g. $18,00"
                    variant="filled"
                    id="propertyPrice"
                    name="propertyPrice"
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

            <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 6 }}>
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
                  Property Type
                </Typography>

                <FormControl fullWidth>
                  <InputLabel id="property-type-label">Select</InputLabel>
                  <Select
                    labelId="property-type-label"
                    id="property-type"
                    value={propertyType}
                    label="Select"
                    onChange={handlePropertyTypeChange}
                    sx={{
                      "& fieldset": {
                        border: "1px solid #D5D9E2",
                        borderRadius: "7px",
                      },
                    }}
                  >
                    <MenuItem value={0}>Townhouse</MenuItem>
                    <MenuItem value={1}>Condominium</MenuItem>
                    <MenuItem value={2}>Detached House</MenuItem>
                    <MenuItem value={3}>Multifamily</MenuItem>
                    <MenuItem value={4}>Bungalow</MenuItem>
                    <MenuItem value={5}>Commercial</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Grid>

            <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 6 }}>
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
                    Beds
                  </Typography>

                  <TextField
                    label="Enter beds"
                    placeholder="6"
                    variant="filled"
                    id="beds"
                    name="beds"
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

            <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 6 }}>
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
                    Baths
                  </Typography>

                  <TextField
                    label="Enter baths"
                    placeholder="5"
                    variant="filled"
                    id="baths"
                    name="baths"
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

            <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 6 }}>
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
                    Area
                  </Typography>

                  <TextField
                    label="Enter area"
                    placeholder="1800 sqft"
                    variant="filled"
                    id="area"
                    name="area"
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

            <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 6 }}>
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
                    Address
                  </Typography>

                  <TextField
                    label="Enter address"
                    placeholder="Type here"
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
                Add Property Photo
              </Typography>

              <FileUpload onFileSelect={handleFileSelect} />
            </Grid>
          </Grid>
        </Card>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: { xs: "10px", sm: "20px" },
              mb: "25px",
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
              <i className="material-symbols-outlined">add</i> Create Property
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default AddPropertyForm;
