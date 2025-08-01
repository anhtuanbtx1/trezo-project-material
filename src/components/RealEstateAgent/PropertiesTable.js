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
        gap: "5px",
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

const PropertiesTable = () => {
  // Sample data
  const initialRows = [
    {
      id: "1",
      code: "TRZ-32",
      name: "Luxury Apartment",
      type: "Apartment",
      title: "The Golden Haven",
      address: "123 Sunshine Boulevard, Vancouver, BC",
      views: 1450,
      date: "12 Nov, 25",
      status: "Active",
      image: "/images/properties/property15.jpg",
      link: "/real-estate-agent/property-details",
    },
    {
      id: "2",
      code: "TRZ-33",
      name: "Tranquil Meadows",
      type: "Villa",
      title: "High-End Villa",
      address: "456 Whispering Pines Lane, Toronto, ON",
      views: 1890,
      date: "11 Nov, 25",
      status: "Inactive",
      image: "/images/properties/property16.jpg",
      link: "/real-estate-agent/property-details",
    },
    {
      id: "3",
      code: "TRZ-34",
      name: "Urban Loft",
      type: "Loft",
      title: "Downtown Chic",
      address: "789 City Center Avenue, Montreal, QC",
      views: 1200,
      date: "10 Nov, 25",
      status: "Active",
      image: "/images/properties/property17.jpg",
      link: "/real-estate-agent/property-details",
    },
    {
      id: "4",
      code: "TRZ-35",
      name: "Seaside Retreat",
      type: "Cottage",
      title: "Ocean View Cottage",
      address: "101 Coastal Drive, Halifax, NS",
      views: 2100,
      date: "09 Nov, 25",
      status: "Active",
      image: "/images/properties/property18.jpg",
      link: "/real-estate-agent/property-details",
    },
    {
      id: "5",
      code: "TRZ-36",
      name: "Mountain View",
      type: "Cabin",
      title: "Alpine Getaway",
      address: "202 Summit Road, Banff, AB",
      views: 1750,
      date: "08 Nov, 25",
      status: "Inactive",
      image: "/images/properties/property19.jpg",
      link: "/real-estate-agent/property-details",
    },
    {
      id: "6",
      code: "TRZ-37",
      name: "City Heights",
      type: "Condominium",
      title: "Metropolitan Living",
      address: "303 Skyline Drive, Calgary, AB",
      views: 1950,
      date: "07 Nov, 25",
      status: "Active",
      image: "/images/properties/property20.jpg",
      link: "/real-estate-agent/property-details",
    },
    {
      id: "7",
      code: "TRZ-38",
      name: "Riverside Manor",
      type: "House",
      title: "Waterfront Estate",
      address: "404 Riverbend Road, Ottawa, ON",
      views: 2200,
      date: "06 Nov, 25",
      status: "Active",
      image: "/images/properties/property21.jpg",
      link: "/real-estate-agent/property-details",
    },
    {
      id: "8",
      code: "TRZ-39",
      name: "Garden Oasis",
      type: "Bungalow",
      title: "Private Sanctuary",
      address: "505 Green Valley Lane, Victoria, BC",
      link: "/real-estate-agent/property-details",
      views: 1600,
      date: "05 Nov, 25",
      status: "Inactive",
      image: "/images/properties/property22.jpg",
    },
    {
      id: "9",
      code: "TRZ-40",
      name: "Executive Suite",
      type: "Penthouse",
      title: "Luxury Downtown",
      address: "606 Business District, Edmonton, AB",
      views: 2300,
      date: "04 Nov, 25",
      status: "Active",
      image: "/images/properties/property23.jpg",
      link: "/real-estate-agent/property-details",
    },
    {
      id: "10",
      code: "TRZ-41",
      name: "Countryside Villa",
      type: "Farmhouse",
      title: "Rural Escape",
      address: "707 Farmland Road, Saskatoon, SK",
      views: 1400,
      date: "03 Nov, 25",
      status: "Active",
      image: "/images/properties/property24.jpg",
      link: "/real-estate-agent/property-details",
    },
    {
      id: "11",
      code: "TRZ-42",
      name: "Beachfront Paradise",
      type: "Beach House",
      title: "Ocean Breeze",
      address: "808 Coastal Highway, Tofino, BC",
      views: 2500,
      date: "02 Nov, 25",
      status: "Active",
      image: "/images/properties/property15.jpg",
      link: "/real-estate-agent/property-details",
    },
    {
      id: "12",
      code: "TRZ-43",
      name: "Modern Studio",
      type: "Studio",
      title: "Urban Minimalist",
      address: "909 Arts District, Winnipeg, MB",
      views: 1100,
      date: "01 Nov, 25",
      status: "Inactive",
      image: "/images/properties/property16.jpg",
      link: "/real-estate-agent/property-details",
    },
    {
      id: "13",
      code: "TRZ-44",
      name: "Historic Loft",
      type: "Loft",
      title: "Heritage Building",
      address: "1010 Old Town Square, Quebec City, QC",
      views: 1800,
      date: "31 Oct, 25",
      status: "Active",
      image: "/images/properties/property17.jpg",
      link: "/real-estate-agent/property-details",
    },
    {
      id: "14",
      code: "TRZ-45",
      name: "Ski Chalet",
      type: "Chalet",
      title: "Mountain Resort",
      address: "1111 Alpine Way, Whistler, BC",
      views: 2000,
      date: "30 Oct, 25",
      status: "Active",
      image: "/images/properties/property18.jpg",
      link: "/real-estate-agent/property-details",
    },
    {
      id: "15",
      code: "TRZ-46",
      name: "Lakefront Cottage",
      type: "Cottage",
      title: "Waterfront Retreat",
      address: "1212 Lakeshore Drive, Muskoka, ON",
      views: 1900,
      date: "29 Oct, 25",
      status: "Inactive",
      image: "/images/properties/property19.jpg",
      link: "/real-estate-agent/property-details",
    },
    {
      id: "16",
      code: "TRZ-47",
      name: "Golf Course Villa",
      type: "Villa",
      title: "Fairway Living",
      address: "1313 Greenway Road, Kelowna, BC",
      views: 1700,
      date: "28 Oct, 25",
      status: "Active",
      image: "/images/properties/property20.jpg",
      link: "/real-estate-agent/property-details",
    },
    {
      id: "17",
      code: "TRZ-48",
      name: "Downtown Apartment",
      type: "Apartment",
      title: "City Center",
      address: "1414 Main Street, Regina, SK",
      views: 1350,
      date: "27 Oct, 25",
      status: "Active",
      image: "/images/properties/property21.jpg",
      link: "/real-estate-agent/property-details",
    },
    {
      id: "18",
      code: "TRZ-49",
      name: "Wine Country Estate",
      type: "Estate",
      title: "Vineyard View",
      address: "1515 Winery Lane, Niagara-on-the-Lake, ON",
      views: 2100,
      date: "26 Oct, 25",
      status: "Inactive",
      image: "/images/properties/property22.jpg",
      link: "/real-estate-agent/property-details",
    },
    {
      id: "19",
      code: "TRZ-50",
      name: "Artist's Retreat",
      type: "Cottage",
      title: "Creative Space",
      address: "1616 Arts Colony Road, Salt Spring Island, BC",
      views: 1250,
      date: "25 Oct, 25",
      status: "Active",
      image: "/images/properties/property23.jpg",
      link: "/real-estate-agent/property-details",
    },
    {
      id: "20",
      code: "TRZ-51",
      name: "Executive Penthouse",
      type: "Penthouse",
      title: "Skyline View",
      address: "1717 Financial District, Toronto, ON",
      views: 2400,
      date: "24 Oct, 25",
      status: "Active",
      image: "/images/properties/property24.jpg",
      link: "/real-estate-agent/property-details",
    },
  ];

  // Table states
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [searchQuery, setSearchQuery] = React.useState("");
  const [rows, setRows] = React.useState(initialRows);
  const [selected, setSelected] = React.useState([]);

  // Filter rows based on search query
  const filteredRows = rows.filter((row) =>
    Object.values(row).some(
      (value) =>
        typeof value === "string" &&
        value.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  // Pagination
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

  // Checkbox functions
  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = filteredRows.map((n) => n.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const isSelected = (id) => selected.indexOf(id) !== -1;

  // Delete row function
  const handleDelete = (id) => {
    setRows(rows.filter((row) => row.id !== id));
    setSelected(selected.filter((selectedId) => selectedId !== id));
  };

  // Delete selected rows
  const handleDeleteSelected = () => {
    setRows(rows.filter((row) => !selected.includes(row.id)));
    setSelected([]);
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

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
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
              <AddIcon sx={{ position: "relative", top: "-1px" }} /> Add New
              Property
            </Button>

            {selected.length > 0 && (
              <IconButton
                aria-label="delete"
                color="error"
                onClick={handleDeleteSelected}
                sx={{ padding: "5px", borderRadius: "4px" }}
                title="Delete Selected"
              >
                <i
                  className="material-symbols-outlined"
                  style={{ fontSize: "20px" }}
                >
                  delete
                </i>
              </IconButton>
            )}
          </Box>
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
          <Table sx={{ minWidth: 1100 }} aria-label="Properties Table">
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
                      inputProps={{ "aria-label": "select all properties" }}
                    />
                    Code
                  </Box>
                </TableCell>

                <TableCell className="text-black border-bottom">
                  Property
                </TableCell>

                <TableCell className="text-black border-bottom">
                  Address
                </TableCell>

                <TableCell className="text-black border-bottom">
                  Views
                </TableCell>

                <TableCell className="text-black border-bottom">Date</TableCell>

                <TableCell className="text-black border-bottom">
                  Status
                </TableCell>

                <TableCell className="text-black border-bottom"></TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {filteredRows.length === 0 ? (
                <TableRow>
                  <TableCell
                    colSpan={7}
                    align="center"
                    className="border-bottom"
                    sx={{ py: 4 }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: 1,
                      }}
                    >
                      <i
                        className="material-symbols-outlined"
                        style={{ fontSize: "48px", color: "#9e9e9e" }}
                      >
                        search_off
                      </i>
                      <Typography variant="body1" color="textSecondary">
                        No properties found matching "{searchQuery}"
                      </Typography>
                      {searchQuery && (
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          sx={{ mt: 1 }}
                        >
                          Try a different search term
                        </Typography>
                      )}
                    </Box>
                  </TableCell>
                </TableRow>
              ) : (
                <>
                  {(rowsPerPage > 0
                    ? filteredRows.slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
                    : filteredRows
                  ).map((row) => {
                    const isItemSelected = isSelected(row.id);
                    return (
                      <TableRow
                        key={row.id}
                        sx={{
                          "& td": {
                            padding: "14px 20px",
                            fontSize: { xs: "13px", md: "14px" },
                          },
                        }}
                        hover
                        onClick={(event) => handleClick(event, row.id)}
                        role="checkbox"
                        aria-checked={isItemSelected}
                        selected={isItemSelected}
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
                              checked={isItemSelected}
                              inputProps={{
                                "aria-label": `select property ${row.code}`,
                              }}
                            />
                            {row.code}
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
                                alt="property"
                                width={60}
                                height={60}
                                style={{ borderRadius: "7px" }}
                              />
                            </Box>

                            <Box>
                              <Typography sx={{ fontSize: "12px", mb: "3px" }}>
                                {row.name}
                              </Typography>
                              <Link
                                to={row.link}
                                style={{
                                  fontSize: "15px",
                                  fontWeight: "600",
                                }}
                                className="text-black hover-text-color"
                              >
                                {row.title}
                              </Link>
                            </Box>
                          </Box>
                        </TableCell>

                        <TableCell className="text-black border-bottom">
                          {row.address}
                        </TableCell>

                        <TableCell className="text-black border-bottom">
                          {row.views}
                        </TableCell>

                        <TableCell className="text-black border-bottom">
                          {row.date}
                        </TableCell>

                        <TableCell className="border-bottom">
                          <Box
                            sx={{
                              border: "1px solid",
                              borderRadius: "30px",
                              backgroundColor:
                                row.status === "Active"
                                  ? "success.100"
                                  : "error.100",
                              color:
                                row.status === "Active"
                                  ? "success.700"
                                  : "error.700",
                              borderColor:
                                row.status === "Active"
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
                              onClick={(e) => {
                                e.stopPropagation();
                                handleDelete(row.id);
                              }}
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
                    );
                  })}
                  {emptyRows > 0 && (
                    <TableRow style={{ height: 53 * emptyRows }}>
                      <TableCell className="border-bottom" colSpan={7} />
                    </TableRow>
                  )}
                </>
              )}
            </TableBody>

            <TableFooter>
              <TableRow>
                <TablePagination
                  rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
                  colSpan={7}
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
              Add New Property
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
                      label="Enter code"
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
                      Property Name
                    </Typography>

                    <TextField
                      autoComplete="propertyName"
                      name="propertyName"
                      required
                      fullWidth
                      id="propertyName"
                      label="Enter property name"
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
                      Address
                    </Typography>

                    <TextField
                      autoComplete="address"
                      name="address"
                      required
                      fullWidth
                      id="address"
                      label="Enter address"
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
                      Views
                    </Typography>

                    <TextField
                      autoComplete="views"
                      name="views"
                      required
                      fullWidth
                      id="views"
                      label="Enter views"
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
                      Date
                    </Typography>

                    <TextField
                      type="date"
                      autoComplete="date"
                      name="date"
                      required
                      fullWidth
                      id="date"
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
                        <MenuItem value={0}>Active</MenuItem>
                        <MenuItem value={1}>Inactive</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>

                  <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12 }}>
                    <Box>
                      <Typography
                        component="h5"
                        sx={{ fontWeight: "500", fontSize: "14px", mb: "12px" }}
                      >
                        Upload Property Images
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

export default PropertiesTable;
