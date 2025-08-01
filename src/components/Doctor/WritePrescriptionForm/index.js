"use client";

import React from "react";
import {
  Grid,
  Card,
  Box,
  Typography,
  FormControl,
  TextField,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
  TableHead,
} from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import CustomEditor from "./CustomEditor";
import FileUpload from "../../Forms/FileUpload";

const WritePrescriptionForm = () => {
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
                    Patient ID
                  </Typography>

                  <TextField
                    label="Enter Patient ID"
                    placeholder="Enter Patient ID"
                    variant="filled"
                    id="patientID"
                    name="patientID"
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
                    Patient First Name
                  </Typography>

                  <TextField
                    label="Enter Patient First Name"
                    placeholder="Enter Patient First Name"
                    variant="filled"
                    id="patientFirstName"
                    name="patientFirstName"
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
                    Patient Last Name
                  </Typography>

                  <TextField
                    label="Enter Patient Last Name"
                    placeholder="Enter Patient Last Name"
                    variant="filled"
                    id="patientLastName"
                    name="patientLastName"
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
                    Patient Address
                  </Typography>

                  <TextField
                    label="Enter Patient Address"
                    placeholder="Enter Patient Address"
                    variant="filled"
                    id="patientAddress"
                    name="patientAddress"
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
                    Temperature (Farenhite)
                  </Typography>

                  <TextField
                    label="Enter Temperature"
                    placeholder="Enter Temperature"
                    variant="filled"
                    id="temperature"
                    name="temperature"
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
                    Blood Pressure
                  </Typography>

                  <TextField
                    label="Enter Blood Pressure"
                    placeholder="Enter Blood Pressure"
                    variant="filled"
                    id="bloodPressure"
                    name="bloodPressure"
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
              <Box sx={{ mx: { xs: "-18px", sm: "-20px", lg: "-25px" } }}>
                <TableContainer
                  component={Paper}
                  sx={{
                    boxShadow: "none",
                    borderRadius: "0",
                  }}
                  className="rmui-table"
                >
                  <Table sx={{ minWidth: 1000 }}>
                    <TableHead className="bg-f6f7f9">
                      <TableRow
                        sx={{
                          "& th": {
                            fontSize: "14px",
                            fontWeight: 400,
                            py: "14px",
                            px: "25px",
                            border: "none",
                          },
                        }}
                      >
                        <TableCell>Medicine Name</TableCell>
                        <TableCell>Dosage</TableCell>
                        <TableCell>Duration</TableCell>
                      </TableRow>
                    </TableHead>

                    <TableBody>
                      <TableRow
                        sx={{
                          "& td": {
                            fontSize: "14px",
                            fontWeight: 600,
                            py: "18px",
                            px: "25px",
                            border: "none",
                            verticalAlign: "top",
                          },
                        }}
                      >
                        <TableCell>
                          <FormControl fullWidth sx={{ mb: "10px" }}>
                            <TextField
                              label="Enter Medicine Name"
                              placeholder="Enter Medicine Name"
                              variant="filled"
                              id="medicineName"
                              name="medicineName"
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
                              }}
                            />
                          </FormControl>
                        </TableCell>

                        <TableCell>
                          <FormControl fullWidth sx={{ mb: "10px" }}>
                            <TextField
                              label="Morning: 01 Teablet"
                              placeholder="Morning: 01 Teablet"
                              variant="filled"
                              id="morning01Teablet"
                              name="morning01Teablet"
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
                              }}
                            />
                          </FormControl>

                          <FormControl fullWidth sx={{ mb: "10px" }}>
                            <TextField
                              label="Night: 01 Teablet"
                              placeholder="Night: 01 Teablet"
                              variant="filled"
                              id="night01Teablet"
                              name="night01Teablet"
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
                              }}
                            />
                          </FormControl>
                        </TableCell>

                        <TableCell>
                          <FormControl fullWidth sx={{ mb: "10px" }}>
                            <TextField
                              label="Enter Total Days"
                              placeholder="Enter Total Days"
                              variant="filled"
                              id="totalDays"
                              name="totalDays"
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
                              }}
                            />
                          </FormControl>

                          <FormControl fullWidth sx={{ mb: "10px" }}>
                            <TextField
                              label="Enter Total Tablets"
                              placeholder="Enter Total Tablets"
                              variant="filled"
                              id="totalTablets"
                              name="totalTablets"
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
                              }}
                            />
                          </FormControl>
                        </TableCell>
                      </TableRow>

                      <TableRow
                        sx={{
                          "& td": {
                            fontSize: "14px",
                            fontWeight: 600,
                            py: "18px",
                            px: "25px",
                          },
                        }}
                      >
                        <TableCell className="border-top border-bottom">
                          <Button
                            type="button"
                            variant="contained"
                            color="primary"
                            sx={{
                              textTransform: "capitalize",
                              borderRadius: "6px",
                              fontWeight: "500",
                              fontSize: "13px",
                              padding: { xs: "10px 20px", sm: "10px 30px" },
                              color: "#fff !important",
                              boxShadow: "none",
                            }}
                          >
                            + Add More Medicine
                          </Button>
                        </TableCell>

                        <TableCell className="border-top border-bottom"></TableCell>

                        <TableCell className="border-top border-bottom"></TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
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
                  Advice
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
                Upload Signature
              </Typography>

              <FileUpload onFileSelect={handleFileSelect} />

              <Box sx={{ mt: "10px" }}>
                <img
                  src="/images/signature.svg"
                  alt="signature"
                  width={77}
                  height={38}
                  style={{ borderRadius: "50%" }}
                />
              </Box>
            </Grid>

            <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 12 }}>
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
                  <i className="material-symbols-outlined">add</i> Create
                  Prescription
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Card>
      </Box>
    </>
  );
};

export default WritePrescriptionForm;
