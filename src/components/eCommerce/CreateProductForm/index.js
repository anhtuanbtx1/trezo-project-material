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
  OutlinedInput,
  ListItemText,
  Checkbox,
  Select,
} from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import CustomEditor from "./CustomEditor";
import FileUpload from "../../Forms/FileUpload";

const CreateProductForm = () => {
  const [productType, setProductType] = useState("");
  const [brandName, setBrandName] = useState("");
  const [category, setCategory] = useState("");
  const [vendor, setVendor] = useState("");
  const [collection, setCollection] = useState("");
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleProductTypeChange = (event) => {
    setProductType(event.target.value);
  };

  const handleBrandNameChange = (event) => {
    setBrandName(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleVendorChange = (event) => {
    setVendor(event.target.value);
  };

  const handleCollectionChange = (event) => {
    setCollection(event.target.value);
  };

  const handleMultipleSelectChange = (event) => {
    const { value } = event.target;
    setSelectedOptions(typeof value === "string" ? value.split(",") : value);
  };

  // File Upload
  const handleFileSelect = (files) => {
    console.log("Selected files:", files);
    // Process your files here
  };

  return (
    <>
      <Box component="form">
        <Grid container columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}>
          <Grid size={{ xs: 12, sm: 12, md: 6, lg: 12, xl: 8 }}>
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
                  Add A Product
                </Typography>
              </Box>

              <Grid
                container
                spacing={3}
                columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}
              >
                <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 6 }}>
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
                        Product Title
                      </Typography>

                      <TextField
                        label="Enter Product Title"
                        placeholder="E.g. Google Pixel 7 Pro"
                        variant="filled"
                        id="productTitle"
                        name="productTitle"
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

                <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 6 }}>
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
                      Product Type
                    </Typography>

                    <FormControl fullWidth>
                      <InputLabel id="product-type-label">Select</InputLabel>
                      <Select
                        labelId="product-type-label"
                        id="product-type"
                        value={productType}
                        label="Select"
                        onChange={handleProductTypeChange}
                        sx={{
                          "& fieldset": {
                            border: "1px solid #D5D9E2",
                            borderRadius: "7px",
                          },
                        }}
                      >
                        <MenuItem value={0}>Digital Product</MenuItem>
                        <MenuItem value={1}>Physical Product</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </Grid>

                <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 6 }}>
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
                        SKU
                      </Typography>

                      <TextField
                        label="Enter sku"
                        placeholder="E.g. ABC-12345"
                        variant="filled"
                        id="sku"
                        name="sku"
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

                <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 6 }}>
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
                      Brand Name
                    </Typography>

                    <FormControl fullWidth>
                      <InputLabel id="brand-name-label">Select</InputLabel>
                      <Select
                        labelId="brand-name-label"
                        id="brand-name"
                        value={brandName}
                        label="Select"
                        onChange={handleBrandNameChange}
                        sx={{
                          "& fieldset": {
                            border: "1px solid #D5D9E2",
                            borderRadius: "7px",
                          },
                        }}
                      >
                        <MenuItem value={0}>Emburo</MenuItem>
                        <MenuItem value={1}>Fediz</MenuItem>
                        <MenuItem value={2}>Debilop</MenuItem>
                        <MenuItem value={3}>Canin</MenuItem>
                        <MenuItem value={4}>Trezo</MenuItem>
                      </Select>
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
                      Product Description
                    </Typography>

                    <CustomEditor />
                  </Box>
                </Grid>

                <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 6 }}>
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
                        Regular Price
                      </Typography>

                      <TextField
                        label="Enter Regular Price"
                        placeholder="E.g. $99"
                        variant="filled"
                        id="regularPrice"
                        name="regularPrice"
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

                <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 6 }}>
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
                        Sale Price
                      </Typography>

                      <TextField
                        label="Enter Sale Price"
                        placeholder="E.g. $29"
                        variant="filled"
                        id="salePrice"
                        name="salePrice"
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

                <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 6 }}>
                  <Typography
                    component="h5"
                    sx={{
                      fontWeight: "500",
                      fontSize: "14px",
                      mb: "12px",
                    }}
                    className="text-black"
                  >
                    Publish Schedule
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

                <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 6 }}>
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
                        Product in Stock
                      </Typography>

                      <TextField
                        label="Enter Product in Stock"
                        placeholder="E.g. 17"
                        variant="filled"
                        id="stock"
                        name="stock"
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

                <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 6 }}>
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
                        Product ID
                      </Typography>

                      <TextField
                        label="Enter Product ID"
                        placeholder="E.g. #JAN-2345"
                        variant="filled"
                        id="productID"
                        name="productID"
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

                <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 6 }}>
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
                        Discount / Offer
                      </Typography>

                      <TextField
                        label="Enter Discount / Offer"
                        placeholder="E.g. $20"
                        variant="filled"
                        id="discountOffer"
                        name="discountOffer"
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

                <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 6 }}>
                  <Typography
                    component="h5"
                    sx={{
                      fontWeight: "500",
                      fontSize: "14px",
                      mb: "12px",
                    }}
                    className="text-black"
                  >
                    Available Date
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

                <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 6 }}>
                  <Typography
                    component="h5"
                    sx={{
                      fontWeight: "500",
                      fontSize: "14px",
                      mb: "12px",
                    }}
                    className="text-black"
                  >
                    End Date
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
                    Upload Product Images
                  </Typography>

                  <FileUpload onFileSelect={handleFileSelect} />
                </Grid>
              </Grid>
            </Card>
          </Grid>

          <Grid size={{ xs: 12, sm: 12, md: 6, lg: 12, xl: 4 }}>
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
                  Product Category & Tags
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
                      Category
                    </Typography>

                    <FormControl fullWidth>
                      <InputLabel id="category-label">Select</InputLabel>
                      <Select
                        labelId="category-label"
                        id="category"
                        value={category}
                        label="select"
                        onChange={handleCategoryChange}
                        sx={{
                          "& fieldset": {
                            border: "1px solid #D5D9E2",
                            borderRadius: "7px",
                          },
                        }}
                      >
                        <MenuItem value={0}>Watch</MenuItem>
                        <MenuItem value={1}>Mobile</MenuItem>
                        <MenuItem value={2}>Laptop</MenuItem>
                        <MenuItem value={3}>Headphone</MenuItem>
                        <MenuItem value={4}>Shoe</MenuItem>
                      </Select>
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
                      Vendor
                    </Typography>

                    <FormControl fullWidth>
                      <InputLabel id="vendor-label">Select</InputLabel>
                      <Select
                        labelId="vendor-label"
                        id="vendor"
                        value={vendor}
                        label="Select"
                        onChange={handleVendorChange}
                        sx={{
                          "& fieldset": {
                            border: "1px solid #D5D9E2",
                            borderRadius: "7px",
                          },
                        }}
                      >
                        <MenuItem value={0}>Dennis Matthews</MenuItem>
                        <MenuItem value={1}>Susan Rader</MenuItem>
                        <MenuItem value={2}>Douglas Harvey</MenuItem>
                        <MenuItem value={3}>John Valdez</MenuItem>
                        <MenuItem value={4}>Kathryn Turner</MenuItem>
                      </Select>
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
                      Collection
                    </Typography>

                    <FormControl fullWidth>
                      <InputLabel id="collection-label">Select</InputLabel>
                      <Select
                        labelId="collection-label"
                        id="collection"
                        value={collection}
                        label="Select"
                        onChange={handleCollectionChange}
                        sx={{
                          "& fieldset": {
                            border: "1px solid #D5D9E2",
                            borderRadius: "7px",
                          },
                        }}
                      >
                        <MenuItem value={0}>Collection 1</MenuItem>
                        <MenuItem value={1}>Collection 2</MenuItem>
                        <MenuItem value={2}>Collection 3</MenuItem>
                        <MenuItem value={3}>Collection 4</MenuItem>
                        <MenuItem value={4}>Collection 5</MenuItem>
                      </Select>
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
                      Tags
                    </Typography>

                    <FormControl fullWidth>
                      <InputLabel id="tags-label">Select</InputLabel>
                      <Select
                        labelId="tags-label"
                        id="tags-select"
                        multiple
                        value={selectedOptions}
                        onChange={handleMultipleSelectChange}
                        input={<OutlinedInput label="Select" />}
                        renderValue={(selected) => selected.join(", ")}
                      >
                        {[
                          "Watch",
                          "Electronics",
                          "Sports",
                          "Fashion",
                          "Jewellery",
                        ].map((option) => (
                          <MenuItem key={option} value={option}>
                            <Checkbox
                              checked={selectedOptions.indexOf(option) > -1}
                            />
                            <ListItemText primary={option} />
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Box>
                </Grid>
              </Grid>
            </Card>

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
                  Other Options
                </Typography>
              </Box>

              <Grid
                container
                spacing={3}
                columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}
              >
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
                        Title
                      </Typography>

                      <TextField
                        label="Enter Title"
                        placeholder="E.g. Google Pixel 7 Pro"
                        variant="filled"
                        id="title"
                        name="title"
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
                        Description
                      </Typography>

                      <textarea
                        id="description"
                        name="description"
                        placeholder="Description"
                        rows={5}
                        style={{
                          width: "100%",
                          borderRadius: "6px",
                          padding: "10px 15px",
                          border: "1px solid #D5D9E2",
                        }}
                      ></textarea>
                    </FormControl>
                  </Box>
                </Grid>
              </Grid>
            </Card>
          </Grid>
        </Grid>

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
              <i className="material-symbols-outlined">add</i> Create Product
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default CreateProductForm;
