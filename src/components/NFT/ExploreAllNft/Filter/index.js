"use client";

import React, { useState } from "react";
import {
  Card,
  Box,
  Typography,
  InputLabel,
  MenuItem,
  FormControl,
  Slider,
  Grid,
  Button,
  TextField,
} from "@mui/material";
import Select from "@mui/material/Select";

const Filter = () => {
  // Select States
  const [category, setCategory] = useState("");
  const [fileType, setFileType] = useState("");
  const [salesType, setSalesType] = useState("");

  // Handlers
  const handleChangeCategory = (event) => {
    setCategory(event.target.value);
  };

  const handleChangeFileType = (event) => {
    setFileType(event.target.value);
  };

  const handleChangeSalesType = (event) => {
    setSalesType(event.target.value);
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
            mb: "25px",
          }}
          className="text-black"
        >
          Filter
        </Typography>

        <Box component="form" noValidate>
          <Grid container alignItems="center" spacing={2}>
            <Grid size={{ xs: 12, sm: 6, lg: 3, xl: 3 }}>
              <TextField
                autoComplete="search"
                name="search"
                required
                fullWidth
                id="search"
                label="Search"
                autoFocus
                InputProps={{
                  style: { borderRadius: 8 },
                }}
              />
            </Grid>

            <Grid size={{ xs: 12, sm: 6, lg: 3, xl: 3 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Category</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={category}
                  label="Category"
                  onChange={handleChangeCategory}
                >
                  <MenuItem value={0}>Bird</MenuItem>
                  <MenuItem value={1}>Pool</MenuItem>
                  <MenuItem value={2}>Watermelon</MenuItem>
                  <MenuItem value={3}>Flower</MenuItem>
                  <MenuItem value={4}>Cookies</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid size={{ xs: 12, sm: 6, lg: 3, xl: 3 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">File Type</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={fileType}
                  label="File Type"
                  onChange={handleChangeFileType}
                >
                  <MenuItem value={0}>.zip</MenuItem>
                  <MenuItem value={1}>.jpg</MenuItem>
                  <MenuItem value={2}>.png</MenuItem>
                  <MenuItem value={3}>.gif</MenuItem>
                  <MenuItem value={4}>.pdf</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid size={{ xs: 12, sm: 6, lg: 3, xl: 3 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Sales Type
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={salesType}
                  label="Sales Type"
                  onChange={handleChangeSalesType}
                >
                  <MenuItem value={0}>Bird</MenuItem>
                  <MenuItem value={1}>Pool</MenuItem>
                  <MenuItem value={2}>Watermelon</MenuItem>
                  <MenuItem value={3}>Flower</MenuItem>
                  <MenuItem value={4}>Cookies</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid size={{ xs: 12 }}>
              <Grid container alignItems="center" spacing={2}>
                <Grid size={{ xs: 12, md: 12, lg: 8 }}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: "15px",
                    }}
                  >
                    <Typography
                      sx={{
                        mb: "0",
                        fontWeight: "600",
                      }}
                    >
                      Price:
                    </Typography>

                    <Slider
                      size="small"
                      defaultValue={30}
                      aria-label="Small"
                      valueLabelDisplay="auto"
                    />
                  </Box>
                </Grid>

                <Grid size={{ xs: 12, md: 12, lg: 4 }}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "end",
                      gap: "10px",
                    }}
                  >
                    <Button
                      type="submit"
                      variant="contained"
                      sx={{
                        textTransform: "capitalize",
                        borderRadius: "8px",
                        fontWeight: "500",
                        fontSize: "14px",
                        padding: "6px 30px",
                        color: "#fff !important",
                      }}
                    >
                      Filter
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Card>
    </>
  );
};

export default Filter;
