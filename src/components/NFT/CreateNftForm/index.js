"use client";

import React, { useState } from "react";
import {
  Grid,
  Card,
  Box,
  Typography,
  FormControl,
  TextField,
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
} from "@mui/material";
import CustomEditor from "./CustomEditor";
import FileUpload from "../../Forms/FileUpload";

const CreateNftForm = () => {
  const [value, setValue] = useState("female");

  const handleChange = (event) => {
    setValue(event.target.value);
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
                Upload Image, Video, Audio, or 3D Model
              </Typography>

              <FileUpload onFileSelect={handleFileSelect} />
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
                    Product Name
                  </Typography>

                  <TextField
                    label="Product Name"
                    placeholder="Enter product name"
                    variant="filled"
                    id="productName"
                    name="productName"
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
                    Item Price
                  </Typography>

                  <TextField
                    label="Item Price"
                    placeholder="E.g. 12.50 ETH"
                    variant="filled"
                    id="itemPrice"
                    name="itemPrice"
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
                    Size
                  </Typography>

                  <TextField
                    label="Enter Size"
                    placeholder="E.g. 2.50 MB"
                    variant="filled"
                    id="size"
                    name="size"
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
                    Properties
                  </Typography>

                  <TextField
                    label="Properties"
                    placeholder="Enter properties"
                    variant="filled"
                    id="properties"
                    name="properties"
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
                    External Link
                  </Typography>

                  <TextField
                    label="External Link"
                    placeholder="Enter external link"
                    variant="filled"
                    id="externalLink"
                    name="externalLink"
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
              <FormControl>
                <RadioGroup
                  defaultValue="putOnSale"
                  name="controlled-radio-buttons-group"
                  value={value}
                  onChange={handleChange}
                >
                  <Box
                    sx={{
                      display: { xs: "block", sm: "flex" },
                      alignItems: "center",
                    }}
                  >
                    <FormControlLabel
                      value="putOnSale"
                      control={<Radio />}
                      label="Put On Sale"
                    />
                    <FormControlLabel
                      value="instantSalePrice"
                      control={<Radio />}
                      label="Instant Sale Price"
                    />
                    <FormControlLabel
                      value="unlockOnePurchased"
                      control={<Radio />}
                      label="Unlock One Purchased"
                    />
                  </Box>
                </RadioGroup>
              </FormControl>
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
              <i className="material-symbols-outlined">add</i> Create NFT
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default CreateNftForm;
