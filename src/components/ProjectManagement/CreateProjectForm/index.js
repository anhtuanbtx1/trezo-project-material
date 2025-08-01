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
import FileUpload from "../../Forms/FileUpload";

const CreateProjectForm = () => {
  const [priorityStatus, setPriorityStatus] = useState("");
  const [categories, setCategories] = useState("");
  const [projectManager, setProjectManager] = useState("");
  const [teamMembers, setTeamMembers] = useState("");
  const [projectTags, setProjectTags] = useState("");

  const handlePriorityStatusChange = (event) => {
    setPriorityStatus(event.target.value);
  };

  const handleCategoriesChange = (event) => {
    setCategories(event.target.value);
  };

  const handleProjectManagerChange = (event) => {
    setProjectManager(event.target.value);
  };

  const handleTeamMembersChange = (event) => {
    setTeamMembers(event.target.value);
  };

  const handleProjectTagsChange = (event) => {
    setProjectTags(event.target.value);
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
                    Project Name
                  </Typography>

                  <TextField
                    label="Enter project name"
                    placeholder="E.g. Project CyberSphere"
                    variant="filled"
                    id="projectName"
                    name="projectName"
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
                    Project ID
                  </Typography>

                  <TextField
                    label="Enter project ID"
                    placeholder="E.g. #854"
                    variant="filled"
                    id="projectID"
                    name="projectID"
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
              <Typography
                component="h5"
                sx={{
                  fontWeight: "500",
                  fontSize: "14px",
                  mb: "12px",
                }}
                className="text-black"
              >
                Start Date
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

            <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 6 }}>
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
                    Budget
                  </Typography>

                  <TextField
                    label="Enter budget"
                    placeholder="E.g. $90"
                    variant="filled"
                    id="budget"
                    name="budget"
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
                  Priority Status
                </Typography>

                <FormControl fullWidth>
                  <InputLabel id="priority-status-label">Select</InputLabel>
                  <Select
                    labelId="priority-status-label"
                    id="priorityStatus"
                    value={priorityStatus}
                    label="Select"
                    onChange={handlePriorityStatusChange}
                    sx={{
                      "& fieldset": {
                        border: "1px solid #D5D9E2",
                        borderRadius: "7px",
                      },
                    }}
                  >
                    <MenuItem value={0}>In Progress</MenuItem>
                    <MenuItem value={1}>Pending</MenuItem>
                    <MenuItem value={2}>Completed</MenuItem>
                    <MenuItem value={3}>Not Started</MenuItem>
                  </Select>
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
                  Categories
                </Typography>

                <FormControl fullWidth>
                  <InputLabel id="brand-name-label">Select</InputLabel>
                  <Select
                    labelId="brand-name-label"
                    id="brand-name"
                    value={categories}
                    label="Select"
                    onChange={handleCategoriesChange}
                    sx={{
                      "& fieldset": {
                        border: "1px solid #D5D9E2",
                        borderRadius: "7px",
                      },
                    }}
                  >
                    <MenuItem value={0}>Book</MenuItem>
                    <MenuItem value={1}>Watch</MenuItem>
                    <MenuItem value={2}>Electronics</MenuItem>
                    <MenuItem value={3}>Sports</MenuItem>
                    <MenuItem value={4}>Fashion</MenuItem>
                    <MenuItem value={5}>Jewellery</MenuItem>
                  </Select>
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
                  Project Manager
                </Typography>

                <FormControl fullWidth>
                  <InputLabel id="brand-name-label">Select</InputLabel>
                  <Select
                    labelId="brand-name-label"
                    id="brand-name"
                    value={projectManager}
                    label="Select"
                    onChange={handleProjectManagerChange}
                    sx={{
                      "& fieldset": {
                        border: "1px solid #D5D9E2",
                        borderRadius: "7px",
                      },
                    }}
                  >
                    <MenuItem value={0}>Walter Frazier</MenuItem>
                    <MenuItem value={1}>Kimberly Anderson</MenuItem>
                    <MenuItem value={2}>Roscoe Guerrero</MenuItem>
                    <MenuItem value={3}>Robert Stewart</MenuItem>
                    <MenuItem value={4}>Dustin Fritch</MenuItem>
                  </Select>
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
                  Team Members
                </Typography>

                <FormControl fullWidth>
                  <InputLabel id="brand-name-label">Select</InputLabel>
                  <Select
                    labelId="brand-name-label"
                    id="brand-name"
                    value={teamMembers}
                    label="Select"
                    onChange={handleTeamMembersChange}
                    sx={{
                      "& fieldset": {
                        border: "1px solid #D5D9E2",
                        borderRadius: "7px",
                      },
                    }}
                  >
                    <MenuItem value={0}>Sarah Johnson</MenuItem>
                    <MenuItem value={1}>Michael Smith</MenuItem>
                    <MenuItem value={2}>Emily Brown</MenuItem>
                    <MenuItem value={3}>Jason Lee</MenuItem>
                    <MenuItem value={4}>Ashley Davis</MenuItem>
                    <MenuItem value={5}>Mark Thompson</MenuItem>
                  </Select>
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
                  Project Tags
                </Typography>

                <FormControl fullWidth>
                  <InputLabel id="brand-name-label">Select</InputLabel>
                  <Select
                    labelId="brand-name-label"
                    id="brand-name"
                    value={projectTags}
                    label="Select"
                    onChange={handleProjectTagsChange}
                    sx={{
                      "& fieldset": {
                        border: "1px solid #D5D9E2",
                        borderRadius: "7px",
                      },
                    }}
                  >
                    <MenuItem value={0}>Book</MenuItem>
                    <MenuItem value={1}>Watch</MenuItem>
                    <MenuItem value={2}>Electronics</MenuItem>
                    <MenuItem value={3}>Sports</MenuItem>
                    <MenuItem value={4}>Fashion</MenuItem>
                    <MenuItem value={5}>Jewellery</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Grid>

            <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 6 }}>
              <Typography
                component="h5"
                sx={{
                  fontWeight: "500",
                  fontSize: "14px",
                  mb: "12px",
                }}
                className="text-black"
              >
                Project Preview Image
              </Typography>

              <FileUpload onFileSelect={handleFileSelect} />
            </Grid>

            <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 6 }}>
              <Typography
                component="h5"
                sx={{
                  fontWeight: "500",
                  fontSize: "14px",
                  mb: "12px",
                }}
                className="text-black"
              >
                Attached File
              </Typography>

              <FileUpload onFileSelect={handleFileSelect} />
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
                  Project
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Card>
      </Box>
    </>
  );
};

export default CreateProjectForm;
