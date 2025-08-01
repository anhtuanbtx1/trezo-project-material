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

const EditCourseForm = () => {
  const [instructor, setInstructor] = useState("");
  const [tags, setTags] = useState("");

  const handleInstructorChange = (event) => {
    setInstructor(event.target.value);
  };

  const handleTagsChange = (event) => {
    setTags(event.target.value);
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
          <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 8 }}>
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
                  Add Course
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
                        label="Enter title"
                        placeholder="E.g. Cybersecurity Awareness"
                        defaultValue="Cybersecurity Awareness"
                        variant="filled"
                        id="title"
                        name="title"
                        sx={{
                          "& .MuiInputBase-root": {
                            border: "1px solid #D5D9E2",
                            backgroundColor: "#fff",
                            borderRadius: "7px",
                            color: "#000",
                            fontWeight: "500",
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
                        Price
                      </Typography>

                      <TextField
                        label="Enter price"
                        placeholder="E.g. $90"
                        defaultValue="$90"
                        variant="filled"
                        id="price"
                        name="price"
                        sx={{
                          "& .MuiInputBase-root": {
                            border: "1px solid #D5D9E2",
                            backgroundColor: "#fff",
                            borderRadius: "7px",
                            color: "#000",
                            fontWeight: "500",
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
                      Instructor
                    </Typography>

                    <FormControl fullWidth>
                      <InputLabel id="instructor-label">Select</InputLabel>
                      <Select
                        labelId="instructor-label"
                        id="instructor"
                        value={instructor}
                        label="Select"
                        onChange={handleInstructorChange}
                        sx={{
                          "& fieldset": {
                            border: "1px solid #D5D9E2",
                            borderRadius: "7px",
                          },
                        }}
                      >
                        <MenuItem value={0}>Olivia Clark</MenuItem>
                        <MenuItem value={1}>Ava Turner</MenuItem>
                        <MenuItem value={2}>Lucas Morgan</MenuItem>
                        <MenuItem value={3}>Isabella Cooper</MenuItem>
                      </Select>
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
                      Tags
                    </Typography>

                    <FormControl fullWidth>
                      <InputLabel id="brand-name-label">Select</InputLabel>
                      <Select
                        labelId="brand-name-label"
                        id="brand-name"
                        value={tags}
                        label="Select"
                        onChange={handleTagsChange}
                        sx={{
                          "& fieldset": {
                            border: "1px solid #D5D9E2",
                            borderRadius: "7px",
                          },
                        }}
                      >
                        <MenuItem value={0}>Technology</MenuItem>
                        <MenuItem value={1}>Science</MenuItem>
                        <MenuItem value={2}>Health & Wellness</MenuItem>
                        <MenuItem value={3}>Education</MenuItem>
                        <MenuItem value={4}>Food & Cooking</MenuItem>
                        <MenuItem value={5}>Lifestyle & Fashion</MenuItem>
                      </Select>
                    </FormControl>
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
                    Course Avatar
                  </Typography>

                  <FileUpload onFileSelect={handleFileSelect} />
                </Grid>
              </Grid>
            </Card>
          </Grid>

          <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 4 }}>
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
                  Course Content
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
                        Lesson Title
                      </Typography>

                      <TextField
                        label="Enter lesson title"
                        placeholder="E.g. Course Overview"
                        defaultValue="Course Overview"
                        variant="filled"
                        id="lessonTitle"
                        name="lessonTitle"
                        sx={{
                          "& .MuiInputBase-root": {
                            border: "1px solid #D5D9E2",
                            backgroundColor: "#fff",
                            borderRadius: "7px",
                            color: "#000",
                            fontWeight: "500",
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
                        Lesson Time
                      </Typography>

                      <TextField
                        label="Enter lesson time"
                        placeholder="E.g. 05:30"
                        defaultValue="05:30"
                        variant="filled"
                        id="lessonTime"
                        name="lessonTime"
                        sx={{
                          "& .MuiInputBase-root": {
                            border: "1px solid #D5D9E2",
                            backgroundColor: "#fff",
                            borderRadius: "7px",
                            color: "#000",
                            fontWeight: "500",
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
                        Lesson Description
                      </Typography>

                      <textarea
                        id="lessonDescription"
                        name="lessonDescription"
                        placeholder="Lesson Description"
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

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
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
                    padding: { xs: "8px 14px", sm: "10px 24px" },
                    color: "#fff !important",
                    boxShadow: "none",
                  }}
                >
                  Save Course
                </Button>

                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    textTransform: "capitalize",
                    borderRadius: "6px",
                    fontWeight: "500",
                    fontSize: { xs: "13px", sm: "16px" },
                    padding: { xs: "8px 14px", sm: "10px 24px" },
                    color: "#fff !important",
                    boxShadow: "none",
                  }}
                >
                  <i className="material-symbols-outlined">add</i> Add More
                  Field
                </Button>
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default EditCourseForm;
