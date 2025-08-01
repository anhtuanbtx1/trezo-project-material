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
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import { styled } from "@mui/material/styles";
import AddIcon from "@mui/icons-material/Add";
import ClearIcon from "@mui/icons-material/Clear";
import CloseIcon from "@mui/icons-material/Close";
import PropTypes from "prop-types";
import Select from "@mui/material/Select";
import FileUpload from "../Forms/FileUpload";

// Sample data (replace with API call if needed)
const initialRows = [
  {
    id: "#001",
    guestName: "Joanna Watson",
    checkIn: "Nov 01, 25 - 09:42 AM",
    checkOut: "Nov 03, 25 - 09:42 AM",
    room: "G0-12",
    totalBill: "$166.00",
    status: "Completed",
    image: "/images/users/user1.jpg",
  },
  {
    id: "#002",
    guestName: "Orion Vale",
    checkIn: "Nov 02, 25 - 10:08 AM",
    checkOut: "Nov 05, 25 - 10:08 AM",
    room: "L1-15",
    totalBill: "$158.50",
    status: "Completed",
    image: "/images/users/user2.jpg",
  },
  {
    id: "#003",
    guestName: "Seraphina Nyx",
    checkIn: "Nov 03, 25 - 11:12 AM",
    checkOut: "Nov 07, 25 - 11:12 AM",
    room: "L2-27",
    totalBill: "$250.50",
    status: "Failed",
    image: "/images/users/user3.jpg",
  },
  {
    id: "#004",
    guestName: "Cassian Rhys",
    checkIn: "Oct 30, 25 - 10:32 AM",
    checkOut: "Nov 01, 25 - 10:32 AM",
    room: "G0-15",
    totalBill: "$313.99",
    status: "Completed",
    image: "/images/users/user4.jpg",
  },
  {
    id: "#005",
    guestName: "Aurelia Dawn",
    checkIn: "Oct 27, 25 - 01:15 PM",
    checkOut: "Oct 30, 25 - 01:15 PM",
    room: "L3-32",
    totalBill: "$514.75",
    status: "Completed",
    image: "/images/users/user5.jpg",
  },
  {
    id: "#006",
    guestName: "Lucien Drake",
    checkIn: "Oct 18, 25 - 12:18 PM",
    checkOut: "Oct 21, 25 - 12:18 PM",
    room: "G0-17",
    totalBill: "$215.99",
    status: "Pending",
    image: "/images/users/user6.jpg",
  },
  {
    id: "#007",
    guestName: "Elara Quinn",
    checkIn: "Oct 15, 25 - 08:23 PM",
    checkOut: "Oct 20, 25 - 08:23 PM",
    room: "L1-19",
    totalBill: "$216.50",
    status: "Completed",
    image: "/images/users/user7.jpg",
  },
  {
    id: "#008",
    guestName: "Evander Cole",
    checkIn: "Oct 14, 25 - 09:14 AM",
    checkOut: "Oct 18, 25 - 09:14 AM",
    room: "G0-11",
    totalBill: "$112.99",
    status: "Failed",
    image: "/images/users/user8.jpg",
  },
  {
    id: "#009",
    guestName: "Isolde Faye",
    checkIn: "Sep 05, 25 - 07:37 PM",
    checkOut: "Sep 10, 25 - 07:37 PM",
    room: "L2-24",
    totalBill: "$513.50",
    status: "Completed",
    image: "/images/users/user9.jpg",
  },
  {
    id: "#010",
    guestName: "Theo Alistair",
    checkIn: "Sep 01, 25 - 09:42 AM",
    checkOut: "Sep 02, 25 - 09:42 AM",
    room: "L3-30",
    totalBill: "$115.25",
    status: "Completed",
    image: "/images/users/user10.jpg",
  },
  {
    id: "#011",
    guestName: "Nova Gray",
    checkIn: "Aug 28, 25 - 07:00 AM",
    checkOut: "Aug 30, 25 - 07:00 AM",
    room: "G0-09",
    totalBill: "$189.00",
    status: "Pending",
    image: "/images/users/user11.jpg",
  },
  {
    id: "#012",
    guestName: "Ronan Wolfe",
    checkIn: "Aug 25, 25 - 04:40 PM",
    checkOut: "Aug 29, 25 - 04:40 PM",
    room: "L1-28",
    totalBill: "$320.40",
    status: "Completed",
    image: "/images/users/user12.jpg",
  },
  {
    id: "#013",
    guestName: "Lyra Storm",
    checkIn: "Aug 20, 25 - 06:22 PM",
    checkOut: "Aug 23, 25 - 06:22 PM",
    room: "L2-35",
    totalBill: "$212.35",
    status: "Completed",
    image: "/images/users/user13.jpg",
  },
  {
    id: "#014",
    guestName: "Finnian Blake",
    checkIn: "Aug 18, 25 - 02:19 PM",
    checkOut: "Aug 22, 25 - 02:19 PM",
    room: "G0-20",
    totalBill: "$198.90",
    status: "Failed",
    image: "/images/users/user14.jpg",
  },
  {
    id: "#015",
    guestName: "Celeste Marlowe",
    checkIn: "Aug 15, 25 - 12:00 PM",
    checkOut: "Aug 19, 25 - 12:00 PM",
    room: "L3-38",
    totalBill: "$267.00",
    status: "Completed",
    image: "/images/users/user15.jpg",
  },
  {
    id: "#016",
    guestName: "Dorian Pike",
    checkIn: "Aug 10, 25 - 11:15 AM",
    checkOut: "Aug 13, 25 - 11:15 AM",
    room: "G0-23",
    totalBill: "$133.33",
    status: "Pending",
    image: "/images/users/user16.jpg",
  },
  {
    id: "#017",
    guestName: "Mira Solace",
    checkIn: "Aug 08, 25 - 10:01 AM",
    checkOut: "Aug 11, 25 - 10:01 AM",
    room: "L1-41",
    totalBill: "$411.00",
    status: "Completed",
    image: "/images/users/user17.jpg",
  },
  {
    id: "#018",
    guestName: "Thorne Ash",
    checkIn: "Aug 05, 25 - 09:15 AM",
    checkOut: "Aug 08, 25 - 09:15 AM",
    room: "L2-44",
    totalBill: "$284.70",
    status: "Failed",
    image: "/images/users/user18.jpg",
  },
  {
    id: "#019",
    guestName: "Rowan Ember",
    checkIn: "Aug 02, 25 - 08:45 AM",
    checkOut: "Aug 05, 25 - 08:45 AM",
    room: "G0-30",
    totalBill: "$190.25",
    status: "Completed",
    image: "/images/users/user19.jpg",
  },
  {
    id: "#020",
    guestName: "Amara Voss",
    checkIn: "Jul 30, 25 - 07:50 AM",
    checkOut: "Aug 02, 25 - 07:50 AM",
    room: "L3-50",
    totalBill: "$305.45",
    status: "Pending",
    image: "/images/users/user20.jpg",
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

const GuestsListTable = () => {
  // Table states
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [searchQuery, setSearchQuery] = React.useState("");
  const [selected, setSelected] = React.useState([]);
  const [rows] = React.useState(initialRows);

  // Filter rows based on search query
  const filteredRows = rows.filter(
    (row) =>
      row.guestName.toLowerCase().includes(searchQuery.toLowerCase()) ||
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
            <AddIcon sx={{ position: "relative", top: "-1px" }} /> Add New Guest
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
          <Table sx={{ minWidth: 650 }} aria-label="Guests List Table">
            <TableHead className="bg-f6f7f9">
              <TableRow
                sx={{
                  "& th": {
                    fontWeight: "500",
                    padding: "10px 20px",
                    fontSize: "14px",
                  },
                }}
              >
                <TableCell className="text-black border-bottom">
                  <Box
                    sx={{ display: "flex", alignItems: "center", gap: "5px" }}
                  >
                    <Checkbox
                      sx={{ padding: "0" }}
                      indeterminate={
                        selected.length > 0 &&
                        selected.length < filteredRows.length
                      }
                      checked={
                        filteredRows.length > 0 &&
                        selected.length === filteredRows.length
                      }
                      onChange={handleSelectAllClick}
                      inputProps={{ "aria-label": "select all guests" }}
                    />
                    Code
                  </Box>
                </TableCell>
                <TableCell className="text-black border-bottom">
                  Guest Name
                </TableCell>
                <TableCell className="text-black border-bottom">
                  Check In
                </TableCell>
                <TableCell className="text-black border-bottom">
                  Check Out
                </TableCell>
                <TableCell className="text-black border-bottom">Room</TableCell>
                <TableCell className="text-black border-bottom">
                  Total Bill
                </TableCell>
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
                    colSpan={8}
                    align="center"
                    className="border-bottom"
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
                        padding: "14px 20px",
                        fontSize: "14px",
                      },
                    }}
                  >
                    <TableCell className="text-black border-bottom">
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: "5px",
                        }}
                      >
                        <Checkbox
                          sx={{ padding: "0" }}
                          checked={selected.indexOf(row.id) !== -1}
                          onChange={() => handleSelectClick(row.id)}
                          inputProps={{
                            "aria-label": `select guest ${row.id}`,
                          }}
                        />
                        {row.id}
                      </Box>
                    </TableCell>

                    <TableCell className="text-black border-bottom">
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
                            alt="Guest"
                            width={40}
                            height={40}
                            style={{ borderRadius: "100px" }}
                          />
                        </Box>
                        <Box>
                          <Typography
                            sx={{
                              fontSize: "15px",
                              fontWeight: "500",
                            }}
                            className="text-black"
                          >
                            {row.guestName}
                          </Typography>
                        </Box>
                      </Box>
                    </TableCell>

                    <TableCell className="text-black border-bottom">
                      {row.checkIn}
                    </TableCell>

                    <TableCell className="text-black border-bottom">
                      {row.checkOut}
                    </TableCell>

                    <TableCell className="text-black border-bottom">
                      {row.room}
                    </TableCell>

                    <TableCell className="text-black border-bottom">
                      {row.totalBill}
                    </TableCell>

                    <TableCell className="border-bottom">
                      <Box
                        sx={{
                          border: "1px solid",
                          borderRadius: "30px",
                          backgroundColor:
                            row.status === "Completed"
                              ? "success.100"
                              : "error.100",
                          color:
                            row.status === "Completed"
                              ? "success.700"
                              : "error.700",
                          borderColor:
                            row.status === "Completed"
                              ? "success.300"
                              : "error.300",
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
              Add New Guest
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
                      Guest Name
                    </Typography>

                    <TextField
                      autoComplete="guestName"
                      name="guestName"
                      required
                      fullWidth
                      id="guestName"
                      label="Enter Guest Name"
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
                      Check In
                    </Typography>

                    <TextField
                      type="date"
                      autoComplete="checkIn"
                      name="checkIn"
                      required
                      fullWidth
                      id="checkIn"
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
                      Check Out
                    </Typography>

                    <TextField
                      type="date"
                      autoComplete="checkOut"
                      name="checkOut"
                      required
                      fullWidth
                      id="checkOut"
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
                      Room
                    </Typography>

                    <TextField
                      autoComplete="room"
                      name="room"
                      required
                      fullWidth
                      id="room"
                      label="Enter room"
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
                      Total Bill
                    </Typography>

                    <TextField
                      autoComplete="totalBill"
                      name="totalBill"
                      required
                      fullWidth
                      id="totalBill"
                      label="Enter Total Bill"
                      autoFocus
                      InputProps={{
                        style: { borderRadius: 8 },
                      }}
                    />
                  </Grid>

                  <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12 }}>
                    <Typography
                      component="h5"
                      sx={{
                        fontWeight: "500",
                        fontSize: "14px",
                        mb: "12px",
                      }}
                    >
                      Payment Status
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
                        <MenuItem value={0}>Completed</MenuItem>
                        <MenuItem value={1}>Pending</MenuItem>
                        <MenuItem value={2}>Failed</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>

                  <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12 }}>
                    <Box>
                      <Typography
                        component="h5"
                        sx={{ fontWeight: "500", fontSize: "14px", mb: "12px" }}
                      >
                        Avatar
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

export default GuestsListTable;
