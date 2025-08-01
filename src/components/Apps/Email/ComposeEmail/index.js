"use client";

import React, { useState } from "react";
import {
  Card,
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  OutlinedInput,
  InputLabel,
  MenuItem,
  FormControl,
  ListItemText,
  Checkbox,
  IconButton,
  Menu,
  Select,
} from "@mui/material";
import FormatColorTextIcon from "@mui/icons-material/FormatColorText";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import LinkIcon from "@mui/icons-material/Link";
import TagFacesIcon from "@mui/icons-material/TagFaces";
import AddToDriveIcon from "@mui/icons-material/AddToDrive";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import EditIcon from "@mui/icons-material/Edit";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DeleteIcon from "@mui/icons-material/Delete";
import CustomEditor from "./CustomEditor";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  "james@trezo.com",
  "andy@trezo.com",
  "mateo@trezo.com",
  "luca@trezo.com",
  "smith@trezo.com",
  "tomato@trezo.com",
];

const ComposeEmail = () => {
  const [toNames, setToNames] = useState([]);
  const [ccNames, setCcNames] = useState([]);
  const [bccNames, setBccNames] = useState([]);

  const handleChange = (event, setNames) => {
    const {
      target: { value },
    } = event;
    setNames(typeof value === "string" ? value.split(",") : value);
  };

  // Dropdown
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Card
      sx={{
        boxShadow: "none",
        borderRadius: "7px",
        mb: "25px",
        padding: { xs: "18px", sm: "20px", lg: "25px" },
        position: "relative",
      }}
      className="rmui-card"
    >
      <Typography
        variant="h5"
        fontWeight={600}
        fontSize="16px"
        sx={{
          paddingBottom: "18px",
          marginBottom: "25px",
        }}
        className="text-black border-bottom"
      >
        New Message
      </Typography>

      <form>
        <Grid container spacing={3} columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}>
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
                To
              </Typography>

              <FormControl fullWidth>
                <InputLabel id="to-multiple-checkbox-label">To</InputLabel>
                <Select
                  labelId="to-multiple-checkbox-label"
                  id="to-multiple-checkbox"
                  multiple
                  value={toNames}
                  onChange={(event) => handleChange(event, setToNames)}
                  input={<OutlinedInput label="To" />}
                  renderValue={(selected) => selected.join(", ")}
                  MenuProps={MenuProps}
                >
                  {names.map((name) => (
                    <MenuItem key={name} value={name}>
                      <Checkbox checked={toNames.indexOf(name) > -1} />
                      <ListItemText primary={name} />
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
          </Grid>

          {/* CC Field */}
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
                Cc
              </Typography>

              <FormControl fullWidth>
                <InputLabel id="cc-multiple-checkbox-label">Cc</InputLabel>
                <Select
                  labelId="cc-multiple-checkbox-label"
                  id="cc-multiple-checkbox"
                  multiple
                  value={ccNames}
                  onChange={(event) => handleChange(event, setCcNames)}
                  input={<OutlinedInput label="Cc" />}
                  renderValue={(selected) => selected.join(", ")}
                  MenuProps={MenuProps}
                >
                  {names.map((name) => (
                    <MenuItem key={name} value={name}>
                      <Checkbox checked={ccNames.indexOf(name) > -1} />
                      <ListItemText primary={name} />
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
          </Grid>

          {/* BCC Field */}
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
                Bcc
              </Typography>

              <FormControl fullWidth>
                <InputLabel id="bcc-multiple-checkbox-label">Bcc</InputLabel>
                <Select
                  labelId="bcc-multiple-checkbox-label"
                  id="bcc-multiple-checkbox"
                  multiple
                  value={bccNames}
                  onChange={(event) => handleChange(event, setBccNames)}
                  input={<OutlinedInput label="Bcc" />}
                  renderValue={(selected) => selected.join(", ")}
                  MenuProps={MenuProps}
                >
                  {names.map((name) => (
                    <MenuItem key={name} value={name}>
                      <Checkbox checked={bccNames.indexOf(name) > -1} />
                      <ListItemText primary={name} />
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
          </Grid>

          {/* Subject Field */}
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
                  Subject
                </Typography>

                <TextField
                  required
                  fullWidth
                  id="subject"
                  label="Subject"
                  name="subject"
                  autoComplete="subject"
                  InputProps={{
                    style: { borderRadius: 8 },
                  }}
                />
              </FormControl>
            </Box>
          </Grid>

          {/* Message Field */}
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
                Your Message
              </Typography>
              <CustomEditor />
            </Box>
          </Grid>

          {/* Actions */}
          <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 12 }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: { xs: "3px", sm: "10px" },
                }}
              >
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    textTransform: "capitalize",
                    borderRadius: "6px",
                    fontWeight: "600",
                    fontSize: { xs: "13px", sm: "16px" },
                    padding: { xs: "6px 18px", sm: "6px 25px" },
                    color: "#fff !important",
                    boxShadow: "none",
                  }}
                >
                  Send
                </Button>

                <IconButton aria-label="Text" size="small" sx={{ padding: "3px" }}>
                  <FormatColorTextIcon sx={{ fontSize: { xs: "17px", sm: "20px" } }} />
                </IconButton>

                <IconButton aria-label="Attach" size="small" sx={{ padding: "3px" }}>
                  <AttachFileIcon sx={{ fontSize: { xs: "17px", sm: "20px" } }} />
                </IconButton>

                <IconButton aria-label="Link" size="small" sx={{ padding: "3px" }}>
                  <LinkIcon sx={{ fontSize: { xs: "17px", sm: "20px" } }} />
                </IconButton>

                <IconButton aria-label="Faces" size="small" sx={{ padding: "3px" }}>
                  <TagFacesIcon sx={{ fontSize: { xs: "17px", sm: "20px" } }} />
                </IconButton>

                <IconButton aria-label="Drive" size="small" sx={{ padding: "3px" }}>
                  <AddToDriveIcon sx={{ fontSize: { xs: "17px", sm: "20px" } }} />
                </IconButton>

                <IconButton aria-label="Photo" size="small" sx={{ padding: "3px" }}>
                  <AddPhotoAlternateIcon sx={{ fontSize: { xs: "17px", sm: "20px" } }} />
                </IconButton>

                <IconButton aria-label="Edit" size="small" sx={{ padding: "3px" }}>
                  <EditIcon sx={{ fontSize: { xs: "17px", sm: "20px" } }} />
                </IconButton>

                <Box>
                  <IconButton
                    onClick={handleClick}
                    size="small"
                    aria-controls={open ? "account-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    sx={{ padding: "3px" }}
                  >
                    <MoreVertIcon sx={{ fontSize: "20px" }} />
                  </IconButton>

                  <Menu
                    anchorEl={anchorEl}
                    id="account-menu"
                    open={open}
                    onClose={handleClose}
                    onClick={handleClose}
                    PaperProps={{
                      elevation: 0,
                      sx: {
                        overflow: "visible",
                        boxShadow: "0 4px 45px #0000001a",
                        mt: 0,
                        "& .MuiAvatar-root": {
                          width: 32,
                          height: 32,
                          ml: -0.5,
                          mr: 1,
                        },
                      },
                    }}
                    transformOrigin={{ horizontal: "left", vertical: "top" }}
                    anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
                  >
                    <MenuItem>Print</MenuItem>
                    <MenuItem>Plain text mode</MenuItem>
                    <MenuItem>Check spelling</MenuItem>
                  </Menu>
                </Box>
              </Box>

              <Box>
                <IconButton
                  aria-label="Delete"
                  size="small"
                  sx={{ padding: "3px", color: "error.main" }}
                >
                  <DeleteIcon sx={{ fontSize: "20px" }} />
                </IconButton>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </form>
    </Card>
  );
};

export default ComposeEmail;
