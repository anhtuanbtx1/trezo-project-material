"use client";

import React, { useState } from "react";
import {
  Card,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
  IconButton,
  TableHead,
  Checkbox,
  Button,
  Typography,
} from "@mui/material";
import styles from "../Customers/Search.module.css";
import AddNewCustomerModal from "./AddNewCustomerModal";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const customers = [
  {
    id: "#TRE0010",
    name: "Sarah Johnson",
    location: "74 Grim Avenue, San Diego",
    joinDate: "30 Apr 2024",
    phone: "(123) 456-7890",
    email: "sarah@trezo.com",
    type: "Buyer",
    image: "/images/users/user1.jpg",
  },
  {
    id: "#TRE0011",
    name: "Pauline Knott",
    location: "9 Paul Wayne Haggerty Road",
    joinDate: "15 May 2024",
    phone: "(987) 654-3210",
    email: "pauline@trezo.com",
    type: "Seller",
    image: "/images/users/user2.jpg",
  },
  {
    id: "#TRE0012",
    name: "James Combs",
    location: "61 Ottis Street, Oklahoma City",
    joinDate: "01 Jun 2024",
    phone: "(555) 258-1598",
    email: "james@trezo.com",
    type: "Agent",
    image: "/images/users/user3.jpg",
  },
  {
    id: "#TRE0013",
    name: "Jason Lee",
    location: "Residential",
    joinDate: "27 Apr 2024",
    phone: "(444) 789-0123",
    email: "lee@trezo.com",
    type: "Investor",
    image: "/images/users/user4.jpg",
  },
  {
    id: "#TRE0014",
    name: "Ashley Davis",
    location: "01 Lakeland, Terrace Detroit",
    joinDate: "26 Apr 2024",
    phone: "(333) 456-3333",
    email: "davis@trezo.com",
    type: "Industrial",
    image: "/images/users/user5.jpg",
  },
  {
    id: "#TRE0015",
    name: "Shirley Cooper",
    location: "29 Aviation Way, Los Angeles",
    joinDate: "25 Apr 2024",
    phone: "(111) 775-8890",
    email: "cooper@trezo.com",
    type: "Buyer",
    image: "/images/users/user61.jpg",
  },
  {
    id: "#TRE0016",
    name: "Bret Brown",
    location: "2 Little Acres, Lane Mattoon",
    joinDate: "24 Apr 2024",
    phone: "(555) 222-3365",
    email: "bret@trezo.com",
    type: "Seller",
    image: "/images/users/user62.jpg",
  },
  {
    id: "#TRE0017",
    name: "Frances Mills",
    location: "74 Grim Avenue, San Diego",
    joinDate: "23 Apr 2024",
    phone: "(222) 722-8750",
    email: "mills@trezo.com",
    type: "Commercial",
    image: "/images/users/user63.jpg",
  },
  {
    id: "#TRE0018",
    name: "Anderson Johnson",
    location: "74 Grim Avenue, San Diego",
    joinDate: "30 Apr 2024",
    phone: "(123) 456-7890",
    email: "anderson@trezo.com",
    type: "Buyer",
    image: "/images/users/user64.jpg",
  },
  {
    id: "#TRE0019",
    name: "Anderson Knott",
    location: "9 Paul Wayne Haggerty Road",
    joinDate: "15 May 2024",
    phone: "(987) 654-3210",
    email: "anderson@trezo.com",
    type: "Seller",
    image: "/images/users/user65.jpg",
  },
  {
    id: "#TRE0020",
    name: "Gagnon Combs",
    location: "61 Ottis Street, Oklahoma City",
    joinDate: "01 Jun 2024",
    phone: "(555) 258-1598",
    email: "gagnon@trezo.com",
    type: "Agent",
    image: "/images/users/user66.jpg",
  },
  {
    id: "#TRE0021",
    name: "Wang Lee",
    location: "Residential",
    joinDate: "27 Apr 2024",
    phone: "(444) 789-0123",
    email: "wang@trezo.com",
    type: "Investor",
    image: "/images/users/user67.jpg",
  },
  {
    id: "#TRE0022",
    name: "Tremblay Davis",
    location: "01 Lakeland, Terrace Detroit",
    joinDate: "26 Apr 2024",
    phone: "(333) 456-3333",
    email: "tremblay@trezo.com",
    type: "Industrial",
    image: "/images/users/user68.jpg",
  },
  {
    id: "#TRE0023",
    name: "Jones Cooper",
    location: "29 Aviation Way, Los Angeles",
    joinDate: "25 Apr 2024",
    phone: "(111) 775-8890",
    email: "jones@trezo.com",
    type: "Buyer",
    image: "/images/users/user1.jpg",
  },
  {
    id: "#TRE0024",
    name: "Gelbero Brown",
    location: "2 Little Acres, Lane Mattoon",
    joinDate: "24 Apr 2024",
    phone: "(555) 222-3365",
    email: "gelbero@trezo.com",
    type: "Seller",
    image: "/images/users/user2.jpg",
  },
  {
    id: "#TRE0025",
    name: "Williams Mills",
    location: "74 Grim Avenue, San Diego",
    joinDate: "23 Apr 2024",
    phone: "(222) 722-8750",
    email: "williams@trezo.com",
    type: "Commercial",
    image: "/images/users/user3.jpg",
  },
];

const Customers = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredCustomers, setFilteredCustomers] = useState(customers);
  const [currentPage, setCurrentPage] = useState(1);
  const customersPerPage = 10;

  const handleSearchChange = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);

    const filtered = customers.filter(
      (customer) =>
        customer.name.toLowerCase().includes(query) ||
        customer.email.toLowerCase().includes(query) ||
        customer.location.toLowerCase().includes(query)
    );
    setFilteredCustomers(filtered);
    setCurrentPage(1); // Reset to the first page after search
  };

  const totalPages = Math.ceil(filteredCustomers.length / customersPerPage);
  const paginatedCustomers = filteredCustomers.slice(
    (currentPage - 1) * customersPerPage,
    currentPage * customersPerPage
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
          <form className={styles.searchBox}>
            <label>
              <i className="material-symbols-outlined">search</i>
            </label>
            <input
              type="text"
              className={styles.inputSearch}
              placeholder="Search customer here..."
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </form>

          <AddNewCustomerModal />
        </Box>

        {/* Table */}
        <Box
          sx={{
            marginLeft: "-25px",
            marginRight: "-25px",
          }}
        >
          <TableContainer
            component={Paper}
            sx={{
              boxShadow: "none",
              borderRadius: "0",
            }}
            className="rmui-table"
          >
            <Table sx={{ minWidth: 1400 }} aria-label="Customer List Table">
              <TableHead className="bg-primary-50">
                <TableRow
                  sx={{
                    "& th": {
                      fontWeight: "500",
                      padding: { xs: "10px 20px", xl: "10px 25px" },
                      fontSize: { xs: "13px", xl: "14px" },
                    },
                  }}
                >
                  <TableCell className="text-black border-bottom">
                    Customer ID
                  </TableCell>

                  <TableCell className="text-black border-bottom">
                    Customer Name
                  </TableCell>

                  <TableCell className="text-black border-bottom">
                    Location
                  </TableCell>

                  <TableCell className="text-black border-bottom">
                    Join Date
                  </TableCell>

                  <TableCell className="text-black border-bottom">
                    Phone Number
                  </TableCell>

                  <TableCell className="text-black border-bottom">
                    Email Address
                  </TableCell>

                  <TableCell className="text-black border-bottom">
                    Customer Type
                  </TableCell>

                  <TableCell className="text-black border-bottom text-end">
                    Action
                  </TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {paginatedCustomers.map((customer) => (
                  <TableRow
                    key={customer.id}
                    sx={{
                      "& td": {
                        padding: { xs: "10px 20px", xl: "10px 25px" },
                        fontSize: { xs: "13px", xl: "14px" },
                      },
                    }}
                  >
                    <TableCell className="border-bottom">
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: "2px",
                        }}
                      >
                        <Checkbox
                          sx={{ padding: "8px" }}
                          inputProps={{
                            "aria-label": `Select ${customer.name}`,
                          }}
                        />
                        <Typography>{customer.id}</Typography>
                      </Box>
                    </TableCell>

                    <TableCell className="border-bottom">
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                        }}
                      >
                        <Box sx={{ borderRadius: "7px", width: "40px" }}>
                          <img
                            src={customer.image}
                            alt={customer.name}
                            width={40}
                            height={40}
                            style={{
                              display: "inline-block",
                              borderRadius: "7px",
                            }}
                          />
                        </Box>
                        <Typography
                          variant="h3"
                          sx={{
                            fontSize: { xs: "13px", xl: "14px" },
                            fontWeight: "500",
                          }}
                        >
                          {customer.name}
                        </Typography>
                      </Box>
                    </TableCell>

                    <TableCell className="border-bottom">
                      <Box sx={{ maxWidth: "130px", fontSize: "13px" }}>
                        {customer.location}
                      </Box>
                    </TableCell>

                    <TableCell className="text-black border-bottom">
                      {customer.joinDate}
                    </TableCell>

                    <TableCell className="border-bottom text-black">
                      {customer.phone}
                    </TableCell>

                    <TableCell
                      className="border-bottom"
                      sx={{ color: "primary.main" }}
                    >
                      {customer.email}
                    </TableCell>

                    <TableCell className="border-bottom">
                      {customer.type}
                    </TableCell>

                    <TableCell className="border-bottom">
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "flex-end",
                        }}
                      >
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
                ))}

                <TableRow
                  sx={{
                    "& td": {
                      pt: { xs: "15px", xl: "20px" },
                      px: { xs: "20px", xl: "25px" },
                      pb: "0",
                      fontSize: { xs: "13px", xl: "14px" },
                    },
                  }}
                >
                  <TableCell colSpan={7} className="border-none">
                    <Typography sx={{ fontSize: { xs: "13px", md: "14px" } }}>
                      Showing{" "}
                      {Math.min(
                        currentPage * customersPerPage,
                        filteredCustomers.length
                      )}{" "}
                      of {filteredCustomers.length} results
                    </Typography>
                  </TableCell>

                  <TableCell className="border-none">
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "5px",
                        justifyContent: "flex-end",
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
                            bgcolor:
                              currentPage === index + 1
                                ? "primary.main"
                                : "inherit",
                            color:
                              currentPage === index + 1
                                ? "white !important"
                                : "text-body",
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
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Card>
    </>
  );
};

export default Customers;
