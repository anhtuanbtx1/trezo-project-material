"use client";

import React, { useState } from "react";
import {
  Card,
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TablePagination,
  TableRow,
  Paper,
  IconButton,
  TableHead,
  Checkbox,
  InputLabel,
  MenuItem,
  FormControl,
  Dialog,
  DialogTitle,
  Grid,
  Button,
  TextField,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import { styled } from "@mui/material/styles";
import AddIcon from "@mui/icons-material/Add";
import ClearIcon from "@mui/icons-material/Clear";
import CloseIcon from "@mui/icons-material/Close";
import PropTypes from "prop-types";
import Select from "@mui/material/Select";
import FileUpload from "../Forms/FileUpload";

// Initial sample data (now managed in state)
const initialRows = [
  {
    id: "TRZ-32",
    image: "/images/rooms/room1.jpg",
    roomName: "Serenity Suite",
    hotel: "Elysian Grand",
    bedType: "Double Bed",
    floor: "G-02",
    facilities:
      "High-speed Wi-Fi, Comfortable bedding and pillows, Temperature control (AC/heating)",
    rate: "$157/night",
    status: "Available",
    link: "/hotel/room-details",
  },
  {
    id: "TRZ-33",
    image: "/images/rooms/room2.jpg",
    roomName: "Cozy Book Nook",
    hotel: "Celestial Haven",
    bedType: "Single Bed",
    floor: "G-01",
    facilities:
      "High-speed Wi-Fi, Comfortable bedding and pillows, Temperature control (AC/heating)",
    rate: "$146/night",
    status: "Not Available",
    link: "/hotel/room-details",
  },
  {
    id: "TRZ-34",
    image: "/images/rooms/room3.jpg",
    roomName: "Sunset Vista",
    hotel: "Elysian Grand",
    bedType: "Queen Bed",
    floor: "1-05",
    facilities: "Private balcony, Mini-bar, Smart TV",
    rate: "$198/night",
    status: "Available",
    link: "/hotel/room-details",
  },
  {
    id: "TRZ-35",
    image: "/images/rooms/room4.jpg",
    roomName: "Ocean Breeze",
    hotel: "Oceanic Pearl",
    bedType: "King Bed",
    floor: "2-01",
    facilities: "Ocean view, Jacuzzi, Free breakfast",
    rate: "$250/night",
    status: "Available",
    link: "/hotel/room-details",
  },
  {
    id: "TRZ-36",
    image: "/images/rooms/room5.jpg",
    roomName: "Garden Retreat",
    hotel: "Celestial Haven",
    bedType: "Twin Bed",
    floor: "1-12",
    facilities: "Private garden, High-speed Wi-Fi, Tea/Coffee maker",
    rate: "$180/night",
    status: "Not Available",
    link: "/hotel/room-details",
  },
  {
    id: "TRZ-37",
    image: "/images/rooms/room6.jpg",
    roomName: "Skyline Penthouse",
    hotel: "Sky High Towers",
    bedType: "King Bed",
    floor: "Penthouse",
    facilities: "City view, Hot tub, Kitchenette",
    rate: "$420/night",
    status: "Available",
    link: "/hotel/room-details",
  },
  {
    id: "TRZ-38",
    image: "/images/rooms/room7.jpg",
    roomName: "Mystic Cabin",
    hotel: "Mountain Escape",
    bedType: "Double Bed",
    floor: "Cabin Area",
    facilities: "Fireplace, Wooden interiors, Outdoor seating",
    rate: "$200/night",
    status: "Available",
    link: "/hotel/room-details",
  },
  {
    id: "TRZ-39",
    image: "/images/rooms/room8.jpg",
    roomName: "Pearl Harbor Suite",
    hotel: "Oceanic Pearl",
    bedType: "Double Bed",
    floor: "3-05",
    facilities: "Ocean view, King-size bath, Premium toiletries",
    rate: "$310/night",
    status: "Not Available",
    link: "/hotel/room-details",
  },
  {
    id: "TRZ-40",
    image: "/images/rooms/room9.jpg",
    roomName: "Lavender Lounge",
    hotel: "Celestial Haven",
    bedType: "Single Bed",
    floor: "2-08",
    facilities: "Smart TV, Mini-fridge, Rain shower",
    rate: "$165/night",
    status: "Available",
    link: "/hotel/room-details",
  },
  {
    id: "TRZ-41",
    image: "/images/rooms/room1.jpg",
    roomName: "Crimson Chamber",
    hotel: "Elysian Grand",
    bedType: "Queen Bed",
    floor: "1-07",
    facilities: "High-speed Wi-Fi, Room service, Workspace",
    rate: "$210/night",
    status: "Available",
    link: "/hotel/room-details",
  },
  {
    id: "TRZ-42",
    image: "/images/rooms/room2.jpg",
    roomName: "Azure Horizon",
    hotel: "Sky High Towers",
    bedType: "King Bed",
    floor: "15-01",
    facilities: "Skyline view, Fitness center, Concierge service",
    rate: "$400/night",
    status: "Available",
    link: "/hotel/room-details",
  },
  {
    id: "TRZ-43",
    image: "/images/rooms/room3.jpg",
    roomName: "Amber Studio",
    hotel: "Mountain Escape",
    bedType: "Double Bed",
    floor: "Studio Floor",
    facilities: "Mountain view, Complimentary breakfast, Cozy interiors",
    rate: "$230/night",
    status: "Not Available",
    link: "/hotel/room-details",
  },
  {
    id: "TRZ-44",
    image: "/images/rooms/room4.jpg",
    roomName: "Orchid Suite",
    hotel: "Celestial Haven",
    bedType: "Twin Bed",
    floor: "3-04",
    facilities: "Private terrace, High-speed Wi-Fi, Room safe",
    rate: "$275/night",
    status: "Available",
    link: "/hotel/room-details",
  },
  {
    id: "TRZ-45",
    image: "/images/rooms/room5.jpg",
    roomName: "Coral Cove",
    hotel: "Oceanic Pearl",
    bedType: "Queen Bed",
    floor: "2-09",
    facilities: "Beach access, Lounge area, Bar",
    rate: "$295/night",
    status: "Available",
    link: "/hotel/room-details",
  },
  {
    id: "TRZ-46",
    image: "/images/rooms/room6.jpg",
    roomName: "Starlight Room",
    hotel: "Sky High Towers",
    bedType: "Single Bed",
    floor: "10-03",
    facilities: "City skyline view, Workspace, Room service",
    rate: "$170/night",
    status: "Not Available",
    link: "/hotel/room-details",
  },
  {
    id: "TRZ-47",
    image: "/images/rooms/room7.jpg",
    roomName: "Willow Wing",
    hotel: "Mountain Escape",
    bedType: "Double Bed",
    floor: "Wing B",
    facilities: "Garden view, Balcony, Fireplace",
    rate: "$190/night",
    status: "Available",
    link: "/hotel/room-details",
  },
  {
    id: "TRZ-48",
    image: "/images/rooms/room8.jpg",
    roomName: "Amber Aurora",
    hotel: "Elysian Grand",
    bedType: "Queen Bed",
    floor: "5-02",
    facilities: "Smart lighting, Luxury bathroom, Premium Wi-Fi",
    rate: "$320/night",
    status: "Available",
    link: "/hotel/room-details",
  },
  {
    id: "TRZ-49",
    image: "/images/rooms/room9.jpg",
    roomName: "Golden Haven",
    hotel: "Oceanic Pearl",
    bedType: "King Bed",
    floor: "4-06",
    facilities: "Ocean-facing balcony, Spa service access, Mini-bar",
    rate: "$410/night",
    status: "Not Available",
    link: "/hotel/room-details",
  },
  {
    id: "TRZ-50",
    image: "/images/rooms/room1.jpg",
    roomName: "Crimson Peak",
    hotel: "Sky High Towers",
    bedType: "King Bed",
    floor: "Top Floor",
    facilities: "Panoramic view, Butler service, Jacuzzi",
    rate: "$500/night",
    status: "Available",
    link: "/hotel/room-details",
  },
  {
    id: "TRZ-51",
    image: "/images/rooms/room2.jpg",
    roomName: "Silver Sands",
    hotel: "Oceanic Pearl",
    bedType: "Double Bed",
    floor: "3-10",
    facilities: "Beachfront, Yoga classes, Infinity pool access",
    rate: "$330/night",
    status: "Available",
    link: "/hotel/room-details",
  },
];

// Modal
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};
// End Modal

function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  return (
    <Box
      sx={{
        flexShrink: 0,
        display: "flex",
        gap: "10px",
        padding: "14px 20px",
      }}
    >
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
        sx={{
          borderRadius: "4px",
          padding: "6px",
        }}
        className="border"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>

      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
        sx={{
          borderRadius: "4px",
          padding: "6px",
        }}
        className="border"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
    </Box>
  );
}

const RoomsListTable = () => {
  // Table states
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [searchQuery, setSearchQuery] = React.useState("");
  const [selected, setSelected] = React.useState([]);
  const [rows, setRows] = React.useState(initialRows);

  // Filter rows based on search query
  const filteredRows = rows.filter(
    (row) =>
      row.roomName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      row.id.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Handle checkbox selection
  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = filteredRows.map((row) => row.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleSelectClick = (id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = [...selected, id];
    } else {
      newSelected = selected.filter((selectedId) => selectedId !== id);
    }

    setSelected(newSelected);
  };

  // Handle row deletion
  const handleDelete = (id) => {
    setRows(rows.filter((row) => row.id !== id));
    setSelected(selected.filter((selectedId) => selectedId !== id));
    // Reset page if necessary
    const maxPage = Math.ceil((filteredRows.length - 1) / rowsPerPage) - 1;
    if (page > maxPage && maxPage >= 0) {
      setPage(maxPage);
    }
  };

  // Avoid layout jump when reaching the last page with empty rows
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - filteredRows.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    setPage(0);
  };

  // Modal
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    // const data = new FormData(event.currentTarget);
    // console.log();
  };

  // Select
  const [status, setStatus] = useState("");
  const handleChangeStatus = (event) => {
    setStatus(event.target.value);
  };

  // File Upload
  const handleFileSelect = (files) => {
    console.log("Selected files:", files);
    // Process your files here
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
        <Box
          sx={{
            display: { xs: "block", sm: "flex" },
            alignItems: "center",
            justifyContent: "space-between",
            mb: "25px",
          }}
        >
          <form className="t-search-form">
            <label>
              <i className="material-symbols-outlined">search</i>
            </label>
            <input
              type="text"
              className="t-input"
              placeholder="Search here..."
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </form>

          <Button
            onClick={handleClickOpen}
            variant="outlined"
            sx={{
              textTransform: "capitalize",
              borderRadius: "7px",
              fontWeight: "500",
              fontSize: "13px",
              padding: "6px 13px",
            }}
            color="primary"
          >
            <AddIcon sx={{ position: "relative", top: "-1px" }} /> Add New Room
          </Button>
        </Box>

        {/* Table */}
        <TableContainer
          component={Paper}
          sx={{
            boxShadow: "none",
            borderRadius: "7px",
          }}
          className="rmui-table border"
        >
          <Table sx={{ minWidth: 1200 }} aria-label="Rooms List Table">
            <TableHead className="bg-f6f7f9">
              <TableRow
                sx={{
                  "& th": {
                    fontWeight: "500",
                    padding: "2px 15px",
                    fontSize: { xs: "13px", sm: "14px" },
                  },
                }}
              >
                <TableCell className="text-black border-bottom">
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Checkbox
                      indeterminate={
                        selected.length > 0 &&
                        selected.length < filteredRows.length
                      }
                      checked={
                        filteredRows.length > 0 &&
                        selected.length === filteredRows.length
                      }
                      onChange={handleSelectAllClick}
                      inputProps={{ "aria-label": "select all rooms" }}
                    />
                    Code
                  </Box>
                </TableCell>
                <TableCell className="text-black border-bottom">
                  Room Name
                </TableCell>
                <TableCell className="text-black border-bottom">
                  Bed Type
                </TableCell>
                <TableCell className="text-black border-bottom">
                  Floor
                </TableCell>
                <TableCell className="text-black border-bottom">
                  Facilities
                </TableCell>
                <TableCell className="text-black border-bottom">Rate</TableCell>
                <TableCell className="text-black border-bottom">
                  Status
                </TableCell>
                <TableCell className="text-black border-bottom">
                  Action
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {filteredRows.length === 0 ? (
                <TableRow>
                  <TableCell
                    className="border-bottom"
                    colSpan={8}
                    align="center"
                  >
                    <Typography
                      sx={{ fontSize: "14px", color: "text.secondary" }}
                    >
                      No results found
                    </Typography>
                  </TableCell>
                </TableRow>
              ) : (
                (rowsPerPage > 0
                  ? filteredRows.slice(
                      page * rowsPerPage,
                      page * rowsPerPage + rowsPerPage
                    )
                  : filteredRows
                ).map((row) => (
                  <TableRow
                    key={row.id}
                    sx={{
                      "& td": {
                        padding: "14px 15px",
                        fontSize: { xs: "12px", lg: "14px" },
                        fontWeight: 500,
                      },
                    }}
                  >
                    <TableCell className="border-bottom">
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Checkbox
                          checked={selected.indexOf(row.id) !== -1}
                          onChange={() => handleSelectClick(row.id)}
                          inputProps={{ "aria-label": `select room ${row.id}` }}
                        />
                        {row.id}
                      </Box>
                    </TableCell>

                    <TableCell className="border-bottom">
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: "13px",
                        }}
                      >
                        <Box sx={{ flexShrink: "0" }}>
                          <img
                            src={row.image}
                            alt="room"
                            width={60}
                            height={65}
                            style={{ borderRadius: "7px" }}
                          />
                        </Box>
                        <Box>
                          <Link
                            to={row.link}
                            style={{
                              fontSize: "15px",
                              fontWeight: "600",
                              marginBottom: "3px",
                              display: "inline-block",
                            }}
                            className="text-black"
                          >
                            {row.roomName}
                          </Link>
                          <Typography
                            sx={{ fontSize: { xs: "12px", md: "13px" } }}
                          >
                            {row.hotel}
                          </Typography>
                        </Box>
                      </Box>
                    </TableCell>

                    <TableCell className="border-bottom">
                      {row.bedType}
                    </TableCell>

                    <TableCell className="border-bottom">{row.floor}</TableCell>

                    <TableCell className="border-bottom">
                      <Typography
                        sx={{
                          width: { xs: "200px", xl: "300px" },
                          fontSize: { xs: "13px", lg: "14px" },
                        }}
                      >
                        {row.facilities}
                      </Typography>
                    </TableCell>

                    <TableCell className="border-bottom">{row.rate}</TableCell>

                    <TableCell className="border-bottom">
                      <Box
                        sx={{
                          border: "1px solid",
                          borderRadius: "30px",
                          backgroundColor:
                            row.status === "Available"
                              ? "success.100"
                              : "error.50",
                          color:
                            row.status === "Available"
                              ? "success.700"
                              : "error.500",
                          borderColor:
                            row.status === "Available"
                              ? "success.300"
                              : "error.40",
                          lineHeight: 1,
                          fontSize: "12px",
                          display: "inline-block",
                          fontWeight: 500,
                          p: "3.5px 9px",
                          textTransform: "capitalize",
                        }}
                      >
                        {row.status}
                      </Box>
                    </TableCell>

                    <TableCell className="border-bottom">
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Link to={row.link}>
                          <IconButton
                            aria-label="view"
                            color="primary"
                            sx={{ padding: "5px" }}
                          >
                            <i
                              className="material-symbols-outlined"
                              style={{ fontSize: "16px" }}
                            >
                              visibility
                            </i>
                          </IconButton>
                        </Link>

                        <IconButton
                          aria-label="edit"
                          color="secondary"
                          sx={{ padding: "5px" }}
                        >
                          <i
                            className="material-symbols-outlined"
                            style={{ fontSize: "16px" }}
                          >
                            edit
                          </i>
                        </IconButton>

                        <IconButton
                          aria-label="delete"
                          color="error"
                          sx={{ padding: "5px" }}
                          onClick={() => handleDelete(row.id)}
                        >
                          <i
                            className="material-symbols-outlined"
                            style={{ fontSize: "16px" }}
                          >
                            delete
                          </i>
                        </IconButton>
                      </Box>
                    </TableCell>
                  </TableRow>
                ))
              )}

              {filteredRows.length > 0 && emptyRows > 0 && (
                <TableRow style={{ height: 53 * emptyRows }}>
                  <TableCell className="border-bottom" colSpan={8} />
                </TableRow>
              )}
            </TableBody>

            <TableFooter>
              <TableRow>
                <TablePagination
                  rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
                  colSpan={8}
                  count={filteredRows.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  slotProps={{
                    select: {
                      inputProps: {
                        "aria-label": "rows per page",
                      },
                      native: true,
                    },
                  }}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                  ActionsComponent={TablePaginationActions}
                  sx={{
                    border: "none",
                  }}
                />
              </TableRow>
            </TableFooter>
          </Table>
        </TableContainer>
      </Card>

      {/* Modal */}
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        className="rmu-modal"
      >
        <Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              background: "#f6f7f9",
              padding: { xs: "15px 20px", md: "25px" },
            }}
            className="rmu-modal-header"
          >
            <Typography
              id="modal-modal-title"
              variant="h6"
              sx={{
                fontWeight: "600",
                fontSize: { xs: "16px", md: "18px" },
              }}
              className="text-black"
            >
              Add New Room
            </Typography>

            <IconButton aria-label="remove" size="small" onClick={handleClose}>
              <ClearIcon />
            </IconButton>
          </Box>

          <Box className="rmu-modal-content">
            <Box component="form" noValidate onSubmit={handleSubmit}>
              <Box
                sx={{
                  padding: "25px",
                  borderRadius: "8px",
                }}
                className="bg-white"
              >
                <Grid container alignItems="center" spacing={2}>
                  <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6 }}>
                    <Typography
                      component="h5"
                      sx={{
                        fontWeight: "500",
                        fontSize: "14px",
                        mb: "12px",
                      }}
                      className="text-black"
                    >
                      Code
                    </Typography>

                    <TextField
                      autoComplete="code"
                      name="code"
                      required
                      fullWidth
                      id="code"
                      label="Enter Code"
                      autoFocus
                      InputProps={{
                        style: { borderRadius: 8 },
                      }}
                    />
                  </Grid>

                  <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6 }}>
                    <Typography
                      component="h5"
                      sx={{
                        fontWeight: "500",
                        fontSize: "14px",
                        mb: "12px",
                      }}
                      className="text-black"
                    >
                      Room Name
                    </Typography>

                    <TextField
                      autoComplete="roomName"
                      name="roomName"
                      required
                      fullWidth
                      id="roomName"
                      label="Enter Room Name"
                      autoFocus
                      InputProps={{
                        style: { borderRadius: 8 },
                      }}
                    />
                  </Grid>

                  <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6 }}>
                    <Typography
                      component="h5"
                      sx={{
                        fontWeight: "500",
                        fontSize: "14px",
                        mb: "12px",
                      }}
                      className="text-black"
                    >
                      Level
                    </Typography>

                    <TextField
                      autoComplete="level"
                      name="level"
                      required
                      fullWidth
                      id="level"
                      label="Enter Level"
                      autoFocus
                      InputProps={{
                        style: { borderRadius: 8 },
                      }}
                    />
                  </Grid>

                  <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6 }}>
                    <Typography
                      component="h5"
                      sx={{
                        fontWeight: "500",
                        fontSize: "14px",
                        mb: "12px",
                      }}
                      className="text-black"
                    >
                      Rate
                    </Typography>

                    <TextField
                      autoComplete="rate"
                      name="rate"
                      required
                      fullWidth
                      id="rate"
                      label="Enter Rate"
                      autoFocus
                      InputProps={{
                        style: { borderRadius: 8 },
                      }}
                    />
                  </Grid>

                  <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6 }}>
                    <Typography
                      component="h5"
                      sx={{
                        fontWeight: "500",
                        fontSize: "14px",
                        mb: "12px",
                      }}
                      className="text-black"
                    >
                      Facilities
                    </Typography>

                    <TextField
                      autoComplete="facilities"
                      name="facilities"
                      required
                      fullWidth
                      id="facilities"
                      label="Enter Facilities"
                      autoFocus
                      InputProps={{
                        style: { borderRadius: 8 },
                      }}
                    />
                  </Grid>

                  <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6 }}>
                    <Typography
                      component="h5"
                      sx={{
                        fontWeight: "500",
                        fontSize: "14px",
                        mb: "12px",
                      }}
                    >
                      Status
                    </Typography>

                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">
                        Select
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={status}
                        label="Select"
                        onChange={handleChangeStatus}
                      >
                        <MenuItem value={0}>Avaiable</MenuItem>
                        <MenuItem value={1}>Not Avaiable</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>

                  <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12 }}>
                    <Box>
                      <Typography
                        component="h5"
                        sx={{ fontWeight: "500", fontSize: "14px", mb: "12px" }}
                      >
                        Upload Room Images
                      </Typography>

                      <FileUpload onFileSelect={handleFileSelect} />
                    </Box>
                  </Grid>

                  <Grid size={{ xs: 12 }} mt={1}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "end",
                        gap: "15px",
                      }}
                    >
                      <Button
                        onClick={handleClose}
                        variant="contained"
                        color="error"
                        sx={{
                          textTransform: "capitalize",
                          borderRadius: "8px",
                          fontWeight: "500",
                          fontSize: "13px",
                          padding: "11px 30px",
                          color: "#fff !important",
                        }}
                      >
                        Cancel
                      </Button>

                      <Button
                        type="submit"
                        variant="contained"
                        sx={{
                          textTransform: "capitalize",
                          borderRadius: "8px",
                          fontWeight: "500",
                          fontSize: "13px",
                          padding: "11px 30px",
                          color: "#fff !important",
                        }}
                      >
                        <AddIcon
                          sx={{
                            position: "relative",
                            top: "-2px",
                          }}
                          className="mr-5"
                        />{" "}
                        Create
                      </Button>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Box>
        </Box>
      </BootstrapDialog>
    </>
  );
};

export default RoomsListTable;
