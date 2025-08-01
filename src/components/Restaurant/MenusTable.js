"use client";

import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Grid,
  Card,
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
  IconButton,
  TableHead,
  Button,
  Checkbox,
  Dialog,
  DialogTitle,
  TextField,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { styled } from "@mui/material/styles";
import ClearIcon from "@mui/icons-material/Clear";
import CloseIcon from "@mui/icons-material/Close";
import PropTypes from "prop-types";
import FileUpload from "../Forms/FileUpload";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

// Modal
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle({ children, onClose, ...other }) {
  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose && (
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
      )}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};
// End Modal

// Dynamic patient data
const menusData = [
  {
    id: 1,
    code: "#001",
    item: {
      image: "/images/restaurant/menu1.png",
      name: "Buffalo Chicken",
      viewLink: "/restaurant/dish-details/",
    },
    price: "$16.00",
    ingredients: "pan-seared chicken, lemon zest, garlic butter, parsley",
  },
  {
    id: 2,
    code: "#002",
    item: {
      image: "/images/restaurant/menu2.png",
      name: "Grilled Salmon",
      viewLink: "/restaurant/dish-details/",
    },
    price: "$22.00",
    ingredients: "fresh salmon, olive oil, lemon, dill",
  },
  {
    id: 3,
    code: "#003",
    item: {
      image: "/images/restaurant/menu3.png",
      name: "Beef Tacos",
      viewLink: "/restaurant/dish-details/",
    },
    price: "$12.00",
    ingredients: "ground beef, taco shells, lettuce, cheese, salsa",
  },
  {
    id: 4,
    code: "#004",
    item: {
      image: "/images/restaurant/menu4.png",
      name: "Margherita Pizza",
      viewLink: "/restaurant/dish-details/",
    },
    price: "$14.00",
    ingredients: "tomato sauce, mozzarella, basil, olive oil",
  },
  {
    id: 5,
    code: "#005",
    item: {
      image: "/images/restaurant/menu5.png",
      name: "Caesar Salad",
      viewLink: "/restaurant/dish-details/",
    },
    price: "$10.00",
    ingredients: "romaine lettuce, croutons, parmesan, caesar dressing",
  },
  {
    id: 6,
    code: "#006",
    item: {
      image: "/images/restaurant/menu6.png",
      name: "Spaghetti Bolognese",
      viewLink: "/restaurant/dish-details/",
    },
    price: "$18.00",
    ingredients: "spaghetti, ground beef, tomato sauce, parmesan",
  },
  {
    id: 7,
    code: "#007",
    item: {
      image: "/images/restaurant/menu7.png",
      name: "Vegetable Stir Fry",
      viewLink: "/restaurant/dish-details/",
    },
    price: "$15.00",
    ingredients: "broccoli, carrots, bell peppers, soy sauce",
  },
  {
    id: 8,
    code: "#008",
    item: {
      image: "/images/restaurant/menu8.png",
      name: "Chicken Alfredo",
      viewLink: "/restaurant/dish-details/",
    },
    price: "$17.00",
    ingredients: "fettuccine, chicken, alfredo sauce, parmesan",
  },
  {
    id: 9,
    code: "#009",
    item: {
      image: "/images/restaurant/menu9.png",
      name: "BBQ Ribs",
      viewLink: "/restaurant/dish-details/",
    },
    price: "$24.00",
    ingredients: "pork ribs, BBQ sauce, coleslaw, fries",
  },
  {
    id: 10,
    code: "#010",
    item: {
      image: "/images/restaurant/menu10.png",
      name: "Shrimp Scampi",
      viewLink: "/restaurant/dish-details/",
    },
    price: "$20.00",
    ingredients: "shrimp, garlic, butter, white wine, parsley",
  },
  {
    id: 11,
    code: "#011",
    item: {
      image: "/images/restaurant/menu1.png",
      name: "Vegetable Lasagna",
      viewLink: "/restaurant/dish-details/",
    },
    price: "$16.00",
    ingredients: "zucchini, eggplant, tomato sauce, ricotta, mozzarella",
  },
  {
    id: 12,
    code: "#012",
    item: {
      image: "/images/restaurant/menu2.png",
      name: "Fish and Chips",
      viewLink: "/restaurant/dish-details/",
    },
    price: "$19.00",
    ingredients: "cod, beer batter, fries, tartar sauce",
  },
  {
    id: 13,
    code: "#013",
    item: {
      image: "/images/restaurant/menu3.png",
      name: "Chicken Curry",
      viewLink: "/restaurant/dish-details/",
    },
    price: "$18.00",
    ingredients: "chicken, curry sauce, rice, naan bread",
  },
  {
    id: 14,
    code: "#014",
    item: {
      image: "/images/restaurant/menu4.png",
      name: "Beef Burger",
      viewLink: "/restaurant/dish-details/",
    },
    price: "$13.00",
    ingredients: "beef patty, lettuce, tomato, cheese, pickles",
  },
  {
    id: 15,
    code: "#015",
    item: {
      image: "/images/restaurant/menu5.png",
      name: "Vegetable Soup",
      viewLink: "/restaurant/dish-details/",
    },
    price: "$9.00",
    ingredients: "carrots, celery, potatoes, tomatoes, broth",
  },
  {
    id: 16,
    code: "#016",
    item: {
      image: "/images/restaurant/menu6.png",
      name: "Pesto Pasta",
      viewLink: "/restaurant/dish-details/",
    },
    price: "$16.00",
    ingredients: "penne, basil pesto, cherry tomatoes, parmesan",
  },
  {
    id: 17,
    code: "#017",
    item: {
      image: "/images/restaurant/menu7.png",
      name: "Steak Frites",
      viewLink: "/restaurant/dish-details/",
    },
    price: "$26.00",
    ingredients: "ribeye steak, fries, garlic butter, herbs",
  },
  {
    id: 18,
    code: "#018",
    item: {
      image: "/images/restaurant/menu8.png",
      name: "Vegetable Sushi",
      viewLink: "/restaurant/dish-details/",
    },
    price: "$14.00",
    ingredients: "avocado, cucumber, carrots, sushi rice, nori",
  },
  {
    id: 19,
    code: "#019",
    item: {
      image: "/images/restaurant/menu9.png",
      name: "Chicken Quesadilla",
      viewLink: "/restaurant/dish-details/",
    },
    price: "$12.00",
    ingredients: "chicken, cheese, tortilla, salsa, sour cream",
  },
  {
    id: 20,
    code: "#020",
    item: {
      image: "/images/restaurant/menu10.png",
      name: "Chocolate Lava Cake",
      viewLink: "/restaurant/dish-details/",
    },
    price: "$8.00",
    ingredients: "chocolate cake, molten chocolate center, vanilla ice cream",
  },
];

const MenusTable = () => {
  // Search term state
  const [searchTerm, setSearchTerm] = React.useState("");

  // Pagination state
  const [currentPage, setCurrentPage] = React.useState(1);
  const itemsPerPage = 10; // Number of items per page

  // Filter menus based on search term
  const filteredMenus = menusData.filter(
    (menu) =>
      menu.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
      menu.item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Calculate total pages
  const totalItems = filteredMenus.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // Get current Menus based on pagination
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentMenus = filteredMenus.slice(startIndex, endIndex);

  // Handle page change
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  // Generate page numbers for pagination controls
  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 3; // Show 3 page numbers at a time
    let startPage = Math.max(1, currentPage - 1);
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    return pages;
  };

  // Handle search input change
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1);
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
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </form>

          <Button
            variant="outlined"
            sx={{
              textTransform: "capitalize",
              borderRadius: "7px",
              fontWeight: "500",
              fontSize: "13px",
              padding: "6px 13px",
            }}
            color="primary"
            onClick={handleClickOpen}
          >
            <AddIcon sx={{ position: "relative", top: "-1px" }} /> Add New Dish
          </Button>
        </Box>

        {/* Table */}
        <TableContainer
          component={Paper}
          sx={{
            boxShadow: "none",
            borderRadius: "0",
          }}
          className="rmui-table"
        >
          <Table sx={{ minWidth: 950 }}>
            <TableHead>
              <TableRow
                sx={{
                  "& th": {
                    padding: "0 14px 7px",
                    fontSize: "10px",
                    textTransform: "uppercase",
                    color: "#8695aa",
                    fontWeight: 700,
                    letterSpacing: "1px",

                    "&:first-of-type": {
                      paddingLeft: "0",
                      paddingRight: "0",
                    },
                    "&:last-of-type": {
                      paddingRight: "0",
                      paddingLeft: "0",
                    },
                  },
                }}
              >
                <TableCell className="border-bottom">
                  <Checkbox
                    {...label}
                    sx={{
                      padding: 0,

                      "& .MuiSvgIcon-root": { fontSize: 18 },
                    }}
                  />{" "}
                </TableCell>
                <TableCell className="border-bottom">CODE</TableCell>
                <TableCell className="border-bottom">ITEMS</TableCell>
                <TableCell className="border-bottom">PRICE</TableCell>
                <TableCell className="border-bottom">INGREDIENTS</TableCell>
                <TableCell
                  sx={{
                    textAlign: "end",
                  }}
                  className="border-bottom"
                >
                  ACTION
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {currentMenus.map((menu) => (
                <TableRow
                  key={menu.id}
                  sx={{
                    td: {
                      padding: "10px 14px",
                      fontSize: { xs: "12px", md: "13px" },
                      fontWeight: 600,

                      "&:first-of-type": {
                        paddingLeft: "0",
                        paddingRight: "0",
                      },
                      "&:last-of-type": {
                        paddingRight: "0",
                        paddingLeft: "0",
                      },
                    },
                  }}
                >
                  <TableCell className="border-bottom">
                    <Checkbox
                      {...label}
                      sx={{
                        padding: 0,

                        "& .MuiSvgIcon-root": { fontSize: 18 },
                      }}
                    />{" "}
                  </TableCell>

                  <TableCell className="border-bottom">{menu.code}</TableCell>

                  <TableCell className="text-black border-bottom">
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                      }}
                    >
                      <img
                        src={menu.item.image}
                        alt="user"
                        width={30}
                        height={30}
                        style={{ borderRadius: "100px" }}
                      />

                      <Link to={menu.item.viewLink}>
                        <Typography
                          sx={{
                            fontWeight: "600",
                            fontSize: { xs: "12px", md: "14px" },
                          }}
                          className="text-black"
                        >
                          {menu.item.name}
                        </Typography>
                      </Link>
                    </Box>
                  </TableCell>

                  <TableCell className="border-bottom">{menu.price}</TableCell>

                  <TableCell className="border-bottom">
                    <Typography sx={{ fontSize: "12px", fontWeight: 600 }}>
                      {menu.ingredients}
                    </Typography>
                  </TableCell>

                  <TableCell className="text-black border-bottom">
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "end",
                      }}
                    >
                      <Link to={menu.item.viewLink}>
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
              ))}
            </TableBody>
          </Table>

          <Box
            sx={{
              display: { xs: "flex" },
              alignItems: "center",
              justifyContent: "space-between",
              mt: "15px",
            }}
          >
            <Typography sx={{ fontSize: "13px" }}>
              Showing {startIndex + 1} to {Math.min(endIndex, totalItems)} of{" "}
              {totalItems} results
            </Typography>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
              }}
            >
              <Button
                type="button"
                className="border text-body"
                sx={{
                  minWidth: "auto",
                  padding: 0,
                  width: { xs: "25px", sm: "30px" },
                  height: { xs: "25px", sm: "30px" },
                }}
                disabled={currentPage === 1}
                onClick={() => handlePageChange(currentPage - 1)}
              >
                <i className="material-symbols-outlined">chevron_left</i>
              </Button>

              {getPageNumbers().map((page) => (
                <Button
                  type="button"
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`border ${
                    currentPage === page
                      ? "bg-primary text-white border-color-primary"
                      : "text-body"
                  }`}
                  sx={{
                    minWidth: "auto",
                    padding: 0,
                    width: { xs: "25px", sm: "30px" },
                    height: { xs: "25px", sm: "30px" },
                  }}
                >
                  {page}
                </Button>
              ))}

              <Button
                type="button"
                className="border text-body"
                sx={{
                  minWidth: "auto",
                  padding: 0,
                  width: { xs: "25px", sm: "30px" },
                  height: { xs: "25px", sm: "30px" },
                }}
                disabled={currentPage === totalPages}
                onClick={() => handlePageChange(currentPage + 1)}
              >
                <i className="material-symbols-outlined">chevron_right</i>
              </Button>
            </Box>
          </Box>
        </TableContainer>
      </Card>

      {/* Modal */}
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        className="rmu-modal"
        sx={{
          "& .MuiPaper-root": {
            maxWidth: { sm: "800px" },
          },
        }}
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
              Add New Dish
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
                  <Grid size={{ xs: 12, sm: 6, md: 6, lg: 4 }}>
                    <Typography
                      component="h5"
                      sx={{
                        fontWeight: "500",
                        fontSize: "14px",
                        mb: "12px",
                      }}
                      className="text-black"
                    >
                      Dish Code
                    </Typography>

                    <TextField
                      autoComplete="dishCode"
                      name="dishCode"
                      required
                      fullWidth
                      id="dishCode"
                      label="Dish Code"
                      placeholder="E.g. #001"
                      autoFocus
                      InputProps={{
                        style: { borderRadius: 8 },
                      }}
                    />
                  </Grid>

                  <Grid size={{ xs: 12, sm: 6, md: 6, lg: 4 }}>
                    <Typography
                      component="h5"
                      sx={{
                        fontWeight: "500",
                        fontSize: "14px",
                        mb: "12px",
                      }}
                      className="text-black"
                    >
                      Name
                    </Typography>

                    <TextField
                      autoComplete="name"
                      name="name"
                      required
                      fullWidth
                      id="name"
                      label="Name"
                      placeholder="E.g. Parsley Chicken"
                      autoFocus
                      InputProps={{
                        style: { borderRadius: 8 },
                      }}
                    />
                  </Grid>

                  <Grid size={{ xs: 12, sm: 6, md: 6, lg: 4 }}>
                    <Typography
                      component="h5"
                      sx={{
                        fontWeight: "500",
                        fontSize: "14px",
                        mb: "12px",
                      }}
                      className="text-black"
                    >
                      Price
                    </Typography>

                    <TextField
                      autoComplete="price"
                      name="price"
                      required
                      fullWidth
                      id="price"
                      label="Price"
                      placeholder="E.g. $12.50"
                      autoFocus
                      InputProps={{
                        style: { borderRadius: 8 },
                      }}
                    />
                  </Grid>

                  <Grid size={{ xs: 12, sm: 6, md: 6, lg: 4 }}>
                    <Typography
                      component="h5"
                      sx={{
                        fontWeight: "500",
                        fontSize: "14px",
                        mb: "12px",
                      }}
                      className="text-black"
                    >
                      Calories
                    </Typography>

                    <TextField
                      autoComplete="calories"
                      name="calories"
                      required
                      fullWidth
                      id="calories"
                      label="Calories"
                      placeholder="E.g. 3215 Kcal"
                      autoFocus
                      InputProps={{
                        style: { borderRadius: 8 },
                      }}
                    />
                  </Grid>

                  <Grid size={{ xs: 12, sm: 6, md: 6, lg: 4 }}>
                    <Typography
                      component="h5"
                      sx={{
                        fontWeight: "500",
                        fontSize: "14px",
                        mb: "12px",
                      }}
                      className="text-black"
                    >
                      Carbs
                    </Typography>

                    <TextField
                      autoComplete="carbs"
                      name="carbs"
                      required
                      fullWidth
                      id="carbs"
                      label="Carbs"
                      placeholder="E.g. 525 gm"
                      autoFocus
                      InputProps={{
                        style: { borderRadius: 8 },
                      }}
                    />
                  </Grid>

                  <Grid size={{ xs: 12, sm: 6, md: 6, lg: 4 }}>
                    <Typography
                      component="h5"
                      sx={{
                        fontWeight: "500",
                        fontSize: "14px",
                        mb: "12px",
                      }}
                      className="text-black"
                    >
                      Protein
                    </Typography>

                    <TextField
                      autoComplete="protein"
                      name="protein"
                      required
                      fullWidth
                      id="protein"
                      label="Protein"
                      placeholder="E.g. 125 gm"
                      autoFocus
                      InputProps={{
                        style: { borderRadius: 8 },
                      }}
                    />
                  </Grid>

                  <Grid size={{ xs: 12, sm: 6, md: 6, lg: 4 }}>
                    <Typography
                      component="h5"
                      sx={{
                        fontWeight: "500",
                        fontSize: "14px",
                        mb: "12px",
                      }}
                      className="text-black"
                    >
                      Fibres
                    </Typography>

                    <TextField
                      autoComplete="fibres"
                      name="fibres"
                      required
                      fullWidth
                      id="fibres"
                      label="Fibres"
                      placeholder="E.g. 15 gm"
                      autoFocus
                      InputProps={{
                        style: { borderRadius: 8 },
                      }}
                    />
                  </Grid>

                  <Grid size={{ xs: 12, sm: 6, md: 6, lg: 4 }}>
                    <Typography
                      component="h5"
                      sx={{
                        fontWeight: "500",
                        fontSize: "14px",
                        mb: "12px",
                      }}
                      className="text-black"
                    >
                      Fat
                    </Typography>

                    <TextField
                      autoComplete="fat"
                      name="fat"
                      required
                      fullWidth
                      id="fat"
                      label="Fat"
                      placeholder="E.g. 25 gm"
                      autoFocus
                      InputProps={{
                        style: { borderRadius: 8 },
                      }}
                    />
                  </Grid>

                  <Grid size={{ xs: 12, sm: 6, md: 6, lg: 4 }}>
                    <Typography
                      component="h5"
                      sx={{
                        fontWeight: "500",
                        fontSize: "14px",
                        mb: "12px",
                      }}
                      className="text-black"
                    >
                      Vitamins
                    </Typography>

                    <TextField
                      autoComplete="vitamins"
                      name="vitamins"
                      required
                      fullWidth
                      id="vitamins"
                      label="Vitamins"
                      placeholder="E.g. 13 gm"
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
                      Sugar
                    </Typography>

                    <TextField
                      autoComplete="sugar"
                      name="sugar"
                      required
                      fullWidth
                      id="sugar"
                      label="Sugar"
                      placeholder="E.g. 200 gm"
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
                      Minerals
                    </Typography>

                    <TextField
                      autoComplete="minerals"
                      name="minerals"
                      required
                      fullWidth
                      id="minerals"
                      label="Minerals"
                      placeholder="E.g. 200 gm"
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
                      className="text-black"
                    >
                      Ingredients Details
                    </Typography>

                    <TextField
                      autoComplete="ingredientsDetails"
                      name="ingredientsDetails"
                      required
                      fullWidth
                      id="ingredientsDetails"
                      label="Ingredients Details"
                      placeholder="E.g. Parsley, chieken, mozzarella, buffalo sauce"
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
                      className="text-black"
                    >
                      Order In Queue
                    </Typography>

                    <TextField
                      autoComplete="orderInQueue"
                      name="orderInQueue"
                      required
                      fullWidth
                      id="orderInQueue"
                      label="Order In Queue"
                      placeholder="E.g. 17"
                      autoFocus
                      InputProps={{
                        style: { borderRadius: 8 },
                      }}
                    />
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
                      Upload Item Images
                    </Typography>

                    <FileUpload onFileSelect={handleFileSelect} />

                    <Box sx={{ mt: "10px" }}>
                      <img
                        src="/images/restaurant/dish-details1.jpg"
                        alt="user"
                        width={60}
                        height={60}
                        style={{ borderRadius: "50%" }}
                      />
                      <Typography sx={{ fontSize: "12px" }}>
                        Recommended size 650x650
                      </Typography>
                    </Box>
                  </Grid>

                  <Grid size={{ xs: 12 }} mt={1}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "end",
                        gap: "10px",
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
                          gap: "3px",
                        }}
                      >
                        <AddIcon />
                        Add Schedule
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

export default MenusTable;
