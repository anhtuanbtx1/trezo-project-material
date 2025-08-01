"use client";

import React, { useState } from "react";
import {
  Card,
  Typography,
  Box,
  Grid,
  Menu,
  MenuItem,
  IconButton,
  Button,
} from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Link } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import styles from "../../RealEstate/Search.module.css";

const properties = [
  {
    id: 1,
    city: "New York",
    price: "$18,000",
    status: "Sale",
    location: "35 Prince Consort Road",
    bedrooms: 6,
    bathrooms: 5,
    size: 1800,
    image: "/images/properties/property1.jpg",
    owner: {
      name: "Harold Cook",
      role: "Owner",
      image: "/images/users/user1.jpg",
    },
    viewDetails: "/real-estate/property-details/",
  },
  {
    id: 2,
    city: "London",
    price: "$220,000",
    status: "Rent",
    location: "58 Gateway Road Portland",
    bedrooms: 8,
    bathrooms: 6,
    size: 2000,
    image: "/images/properties/property2.jpg",
    owner: {
      name: "Debra Sisk",
      role: "Owner",
      image: "/images/users/user2.jpg",
    },
    viewDetails: "/real-estate/property-details/",
  },
  {
    id: 3,
    city: "France",
    price: "$350,000",
    status: "Sold",
    location: "18 Chemin Challet",
    bedrooms: 8,
    bathrooms: 7,
    size: 2200,
    image: "/images/properties/property3.jpg",
    owner: {
      name: "Herbert Rojas",
      role: "Owner",
      image: "/images/users/user3.jpg",
    },
    viewDetails: "/real-estate/property-details/",
  },
  {
    id: 4,
    city: "Australia",
    price: "$158,000",
    status: "Rent",
    location: "51 Decca Road GUNN",
    bedrooms: 8,
    bathrooms: 8,
    size: 2000,
    image: "/images/properties/property4.jpg",
    owner: {
      name: "Steven Bryant",
      role: "Owner",
      image: "/images/users/user4.jpg",
    },
    viewDetails: "/real-estate/property-details/",
  },
  {
    id: 5,
    city: "Italy",
    price: "$99,000",
    status: "Sold",
    location: "35 Vicolo Tre Marchetti",
    bedrooms: 6,
    bathrooms: 5,
    size: 1500,
    image: "/images/properties/property5.jpg",
    owner: {
      name: "Jannie James",
      role: "Owner",
      image: "/images/users/user5.jpg",
    },
    viewDetails: "/real-estate/property-details/",
  },
  {
    id: 6,
    city: "Germany",
    price: "$110,000",
    status: "Sale",
    location: "Ansbacher Strasse 44",
    bedrooms: 10,
    bathrooms: 10,
    size: 2500,
    image: "/images/properties/property6.jpg",
    owner: {
      name: "Larry Greenberg",
      role: "Owner",
      image: "/images/users/user6.jpg",
    },
    viewDetails: "/real-estate/property-details/",
  },
  {
    id: 7,
    city: "Poland",
    price: "$150,500",
    status: "Rent",
    location: "Czerwonych Beretów 124",
    bedrooms: 6,
    bathrooms: 5,
    size: 1800,
    image: "/images/properties/property7.jpg",
    owner: {
      name: "Kara Spangler",
      role: "Owner",
      image: "/images/users/user7.jpg",
    },
    viewDetails: "/real-estate/property-details/",
  },
  {
    id: 8,
    city: "Norway",
    price: "$120,000",
    status: "Rent",
    location: "Moeneveien 228 VARTEIG",
    bedrooms: 5,
    bathrooms: 5,
    size: 1400,
    image: "/images/properties/property8.jpg",
    owner: {
      name: "Benjamin Dinh",
      role: "Owner",
      image: "/images/users/user8.jpg",
    },
    viewDetails: "/real-estate/property-details/",
  },
  {
    id: 9,
    city: "Netherlands",
    price: "$190,000",
    status: "Sale",
    location: "Overburgkade 23",
    bedrooms: 6,
    bathrooms: 6,
    size: 1900,
    image: "/images/properties/property9.jpg",
    owner: {
      name: "Jane Wright",
      role: "Owner",
      image: "/images/users/user9.jpg",
    },
    viewDetails: "/real-estate/property-details/",
  },
  {
    id: 10,
    city: "Spain",
    price: "$155,000",
    status: "Sale",
    location: "Paseo Junquera, 98",
    bedrooms: 6,
    bathrooms: 5,
    size: 1800,
    image: "/images/properties/property10.jpg",
    owner: {
      name: "Kirk Jensen",
      role: "Owner",
      image: "/images/users/user10.jpg",
    },
    viewDetails: "/real-estate/property-details/",
  },
  {
    id: 11,
    city: "Hungary",
    price: "$340,000",
    status: "Sold",
    location: "8985 Becsvölgye Nyár utca",
    bedrooms: 10,
    bathrooms: 10,
    size: 2500,
    image: "/images/properties/property11.jpg",
    owner: {
      name: "Harold Cook",
      role: "Owner",
      image: "/images/users/user11.jpg",
    },
    viewDetails: "/real-estate/property-details/",
  },
  {
    id: 12,
    city: "Portugal",
    price: "$250,000",
    status: "Sold",
    location: "Largo Prazeres 32",
    bedrooms: 6,
    bathrooms: 5,
    size: 1800,
    image: "/images/properties/property12.jpg",
    owner: {
      name: "Judith Brooks",
      role: "Owner",
      image: "/images/users/user12.jpg",
    },
    viewDetails: "/real-estate/property-details/",
  },
];

const getStatusStyles = (status) => {
  switch (status) {
    case "Sale":
      return {
        backgroundColor: "success.100",
        color: "success.600",
      };
    case "Rent":
      return {
        backgroundColor: "primary.100",
        color: "primary.600",
      };
    case "Sold":
      return {
        backgroundColor: "orange.100",
        color: "orange.600",
      };
    default:
      return {};
  }
};

const PropertyListContent = () => {
  // Dropdown
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // searchQuery
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProperties, setFilteredProperties] = useState(properties);
  const [currentPage, setCurrentPage] = useState(1);
  const propertiesPerPage = 9;

  const handleSearchChange = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);

    const filtered = properties.filter(
      (property) =>
        property.city.toLowerCase().includes(query) ||
        property.location.toLowerCase().includes(query) ||
        property.status.toLowerCase().includes(query)
    );
    setFilteredProperties(filtered);
    setCurrentPage(1);
  };

  const totalPages = Math.ceil(filteredProperties.length / propertiesPerPage);
  const paginatedProperties = filteredProperties.slice(
    (currentPage - 1) * propertiesPerPage,
    currentPage * propertiesPerPage
  );

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <>
      <Card
        sx={{
          boxShadow: "none",
          borderRadius: "7px",
          mb: "25px",
          padding: { xs: "18px", sm: "20px", lg: "25px" },
          display: { xs: "block", sm: "flex" },
          justifyContent: "space-between",
          alignItems: "center",
        }}
        className="rmui-card"
      >
        <Box
          component="form"
          className={styles.searchBox}
          sx={{
            width: { sm: "265px" },
            mb: { xs: "10px", sm: "0" },
          }}
        >
          <label>
            <i className="material-symbols-outlined">search</i>
          </label>
          <input
            type="text"
            className={styles.inputSearch}
            placeholder="Search property here..."
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </Box>

        <Link to="/real-estate/add-property/">
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
          >
            <AddIcon sx={{ position: "relative", top: "-1px" }} /> Add Property
          </Button>
        </Link>
      </Card>

      <Grid
        container
        columnSpacing={{ xs: 1, sm: 2, md: 3, lg: 3 }}
        justifyContent="center"
      >
        {paginatedProperties.map((property) => (
          <Grid
            size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 4 }}
            key={property.id}
          >
            <Box
              className="bg-white"
              sx={{
                p: { xs: "20px", md: "25px" },
                borderRadius: "7px",
                mb: "25px",
              }}
            >
              <Box
                sx={{
                  mb: "20px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  variant="h5"
                  sx={{ fontWeight: "700", fontSize: "18px" }}
                >
                  {property.city}
                </Typography>

                <Box>
                  <IconButton
                    onClick={handleClick}
                    size="small"
                    aria-controls={open ? "property-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    sx={{ p: 0 }}
                  >
                    <MoreHorizIcon sx={{ fontSize: "25px" }} />
                  </IconButton>

                  <Menu
                    anchorEl={anchorEl}
                    id="property-menu"
                    open={open}
                    onClose={handleClose}
                    onClick={handleClose}
                    PaperProps={{
                      elevation: 0,
                      sx: {
                        boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                        mt: 0,
                        minWidth: "150px",

                        "& .MuiAvatar-root": {
                          width: 32,
                          height: 32,
                          ml: -0.5,
                          mr: 1,
                        },
                      },
                    }}
                    transformOrigin={{ horizontal: "right", vertical: "top" }}
                    anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                  >
                    <MenuItem>View</MenuItem>
                    <MenuItem>Edit</MenuItem>
                    <MenuItem>Delete</MenuItem>
                  </Menu>
                </Box>
              </Box>

              <Link
                to={property.viewDetails}
                style={{
                  display: "block",
                  borderRadius: "5px",
                }}
              >
                <img
                  src={property.image}
                  alt={`${property.city} property`}
                  width={620}
                  height={300}
                  style={{
                    width: "100%",
                    display: "inline-block",
                    borderRadius: "5px",
                  }}
                />
              </Link>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  mb: "9px",
                  mt: "15px",
                }}
              >
                <Typography
                  variant="h3"
                  className="text-orange-500"
                  sx={{
                    fontWeight: "700",
                    mb: "0px",
                    fontSize: { xs: "16px", md: "18px" },
                  }}
                >
                  {property.price}
                </Typography>

                <Box
                  sx={{
                    fontSize: "12px",
                    py: "1px",
                    px: "9px",
                    borderRadius: "4px",
                    ...getStatusStyles(property.status),
                  }}
                >
                  {property.status}
                </Box>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
                <i
                  className="material-symbols-outlined text-primary-500"
                  style={{ fontSize: "19px" }}
                >
                  location_on
                </i>
                {property.location}
              </Box>

              <Box
                className="mt-[17px] py-[10px] border-top border-bottom"
                sx={{
                  mt: "17px",
                  py: "10px",
                  display: "flex",
                  alignItems: "center",
                  gap: { xs: "10px", md: "20px" },
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
                  <i
                    className="material-symbols-outlined text-primary-500"
                    style={{ fontSize: "18px" }}
                  >
                    bed
                  </i>
                  {property.bedrooms}Bed
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
                  <i
                    className="material-symbols-outlined text-primary-500"
                    style={{ fontSize: "18px" }}
                  >
                    bathtub
                  </i>
                  {property.bathrooms}Bath
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
                  <i
                    className="material-symbols-outlined text-primary-500"
                    style={{ fontSize: "18px" }}
                  >
                    square_foot
                  </i>
                  {property.size}sqft
                </Box>
              </Box>

              <Box
                sx={{
                  mt: "20px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: "12px" }}
                >
                  <img
                    src={property.owner.image}
                    alt={property.owner.name}
                    width={40}
                    height={40}
                    style={{ borderRadius: "50%" }}
                  />
                  <Box>
                    <Typography
                      variant="h5"
                      sx={{
                        fontSize: { xs: "14px", sm: "15px", md: "16px" },
                        fontWeight: "600",
                      }}
                    >
                      {property.owner.name}
                    </Typography>
                    <Typography>{property.owner.role}</Typography>
                  </Box>
                </Box>

                <Link
                  to={property.viewDetails}
                  className="text-primary-500"
                  style={{
                    display: "inline-block",
                    fontWeight: "500",
                    fontSize: "15px",
                  }}
                >
                  View More
                </Link>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>

      {/* Pagination */}
      <Box
        className="bg-white"
        sx={{
          p: { xs: "20px", md: "25px" },
          display: { sm: "flex" },
          alignItems: { sm: "center" },
          justifyContent: "space-between",
          mb: "25px",
          borderRadius: "7px",
        }}
      >
        <Typography sx={{ fontSize: { xs: "13px", md: "14px" } }}>
          Showing{" "}
          {Math.min(currentPage * propertiesPerPage, filteredProperties.length)}{" "}
          of {filteredProperties.length} results
        </Typography>

        <Box
          sx={{
            mt: { xs: "10px", sm: "0" },
            display: "flex",
            alignItems: "center",
            gap: "5px",
          }}
        >
          <Button
            className="border text-black"
            disabled={currentPage === 1}
            onClick={handlePreviousPage}
            sx={{
              minWidth: "auto",
              width: "30px",
              height: "30px",
              padding: "0",
              textAlign: "center",
              borderRadius: "4px",
              "&:hover": {
                backgroundColor: "primary.main",
                color: "#fff !important",
              },
            }}
          >
            <ChevronLeftIcon />
          </Button>

          {Array.from({ length: totalPages }, (_, index) => (
            <Button
              key={index}
              className="border"
              onClick={() => setCurrentPage(index + 1)}
              sx={{
                bgcolor: currentPage === index + 1 ? "primary.main" : "inherit",
                color:
                  currentPage === index + 1 ? "white !important" : "text-body",
                minWidth: "30px",
                height: "30px",
                "&:hover": {
                  bgcolor: "primary.main",
                  color: "white !important",
                },
              }}
            >
              {index + 1}
            </Button>
          ))}

          <Button
            className="border text-black"
            disabled={currentPage === totalPages}
            onClick={handleNextPage}
            sx={{
              minWidth: "auto",
              width: "30px",
              height: "30px",
              padding: "0",
              textAlign: "center",
              borderRadius: "4px",
              "&:hover": {
                backgroundColor: "primary.main",
                color: "#fff !important",
              },
            }}
          >
            <ChevronRightIcon />
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default PropertyListContent;
