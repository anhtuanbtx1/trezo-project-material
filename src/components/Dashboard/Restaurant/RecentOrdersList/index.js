"use client";

import { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Card,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
  Button,
  TableHead,
  IconButton,
} from "@mui/material";
import CustomDropdown from "./CustomDropdown";

const RecentOrdersList = () => {
  const [orders, setOrders] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    // Simulated API call
    const fetchData = async () => {
      const mockOrders = [
        {
          id: "1",
          code: "#001",
          item: { name: "Fish Cutlet", image: "/images/restaurant/order1.jpg" },
          quantity: 5,
          customer: "Johnna Loren",
          location: "Washington, D.C.",
          deliveryTime: "10:05 AM",
          price: 35.75,
          status: "Delivered",
        },
        {
          id: "2",
          code: "#002",
          item: {
            name: "Pea Creamy Soup",
            image: "/images/restaurant/order2.jpg",
          },
          quantity: 1,
          customer: "Skyler White",
          location: "Los Angeles, CA",
          deliveryTime: "11:15 AM",
          price: 24.3,
          status: "Processing",
        },
        {
          id: "3",
          code: "#003",
          item: {
            name: "Jonathon Watson",
            image: "/images/restaurant/order3.jpg",
          },
          quantity: 3,
          customer: "Jonathon Watson",
          location: "New York, NY",
          deliveryTime: "11:30 AM",
          price: 21.15,
          status: "Cancelled",
        },
        {
          id: "4",
          code: "#004",
          item: {
            name: "Grilled Salmon",
            image: "/images/restaurant/order4.jpg",
          },
          quantity: 2,
          customer: "Alice Johnson",
          location: "Chicago, IL",
          deliveryTime: "12:45 PM",
          price: 28.5,
          status: "Delivered",
        },
        {
          id: "5",
          code: "#005",
          item: {
            name: "Vegetable Stir Fry",
            image: "/images/restaurant/order5.jpg",
          },
          quantity: 4,
          customer: "Bob Smith",
          location: "Houston, TX",
          deliveryTime: "1:15 PM",
          price: 18.9,
          status: "Processing",
        },
        {
          id: "6",
          code: "#006",
          item: {
            name: "Chicken Alfredo",
            image: "/images/restaurant/order1.jpg",
          },
          quantity: 3,
          customer: "Charlie Brown",
          location: "Phoenix, AZ",
          deliveryTime: "2:00 PM",
          price: 22.75,
          status: "Delivered",
        },
        {
          id: "7",
          code: "#007",
          item: { name: "Beef Burger", image: "/images/restaurant/order2.jpg" },
          quantity: 1,
          customer: "Diana Prince",
          location: "Philadelphia, PA",
          deliveryTime: "2:30 PM",
          price: 15.25,
          status: "Cancelled",
        },
        {
          id: "8",
          code: "#008",
          item: {
            name: "Margherita Pizza",
            image: "/images/restaurant/order3.jpg",
          },
          quantity: 2,
          customer: "Ethan Hunt",
          location: "San Antonio, TX",
          deliveryTime: "3:00 PM",
          price: 19.99,
          status: "Processing",
        },
        {
          id: "9",
          code: "#009",
          item: {
            name: "Sushi Platter",
            image: "/images/restaurant/order4.jpg",
          },
          quantity: 5,
          customer: "Fiona Gallagher",
          location: "San Diego, CA",
          deliveryTime: "3:45 PM",
          price: 45.0,
          status: "Delivered",
        },
        {
          id: "10",
          code: "#010",
          item: {
            name: "Caesar Salad",
            image: "/images/restaurant/order5.jpg",
          },
          quantity: 1,
          customer: "George Lopez",
          location: "Dallas, TX",
          deliveryTime: "4:15 PM",
          price: 12.5,
          status: "Processing",
        },
      ];
      setOrders(mockOrders);
      setTotalItems(mockOrders.length); // Set total items from API response
    };

    fetchData();
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case "Delivered":
        return { color: "success.main", bg: "success.100" };
      case "Processing":
        return { color: "secondary.main", bg: "secondary.100" };
      case "Cancelled":
        return { color: "error.main", bg: "error.100" };
      default:
        return { color: "text.primary", bg: "grey.100" };
    }
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  // Calculate paginated data
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = orders.slice(indexOfFirstItem, indexOfLastItem);

  // Generate page numbers
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

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
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "15px",
            mb: "10px",
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
            Recent Orders List
          </Typography>

          <CustomDropdown
            options={["This Day", "This Week", "This Month", "This Year"]} // Need to change the options also in CustomDropdown file
            onSelect={(value) => console.log(value)}
            defaultLabel="This Month"
          />
        </Box>

        <TableContainer
          component={Paper}
          sx={{
            boxShadow: "none",
            borderRadius: "0",
          }}
          className="rmui-table"
        >
          <Table sx={{ minWidth: 900 }}>
            <TableHead>
              <TableRow
                className="border-bottom"
                sx={{
                  "& th": {
                    fontSize: "10px",
                    fontWeight: 700,
                    color: "text.primary",
                    padding: "15px 8px",

                    ":first-child": {
                      paddingLeft: "0",
                      paddingRight: "0",
                    },
                    ":last-child": {
                      paddingRight: "0",
                      paddingLeft: "0",
                    },
                  },
                }}
              >
                <th className="text-start">CODE</th>

                <th className="text-start">ITEM</th>

                <th className="text-start">QUANTITY</th>

                <th className="text-start">CUSTOMER</th>

                <th className="text-start">LOCATION</th>

                <th className="text-start">DELIVERY TIME</th>

                <th className="text-start">PRICE</th>

                <th className="text-start">STATUS</th>

                <th className="text-end">ACTION</th>
              </TableRow>
            </TableHead>

            <TableBody>
              {currentItems.map((order) => {
                const statusColors = getStatusColor(order.status);

                return (
                  <TableRow
                    key={order.id}
                    sx={{
                      "& td": {
                        padding: "13px 8px",
                        fontSize: "12px",
                        fontWeight: 600,

                        ":first-child": {
                          paddingLeft: "0",
                          paddingRight: "0",
                        },
                        ":last-child": {
                          paddingRight: "0",
                          paddingLeft: "0",
                        },
                      },
                    }}
                  >
                    <TableCell className="border-bottom">
                      {order.code}
                    </TableCell>

                    <TableCell className="border-bottom">
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                        }}
                      >
                        <img
                          src={order.item.image}
                          alt="order"
                          width={30}
                          height={30}
                          style={{
                            borderRadius: "50%",
                          }}
                        />

                        <Box>
                          <Typography
                            variant="h3"
                            sx={{
                              fontSize: { xs: "13px", md: "14px" },
                              fontWeight: 600,
                              mb: 0,
                            }}
                          >
                            {order.item.name}
                          </Typography>
                        </Box>
                      </Box>
                    </TableCell>

                    <TableCell className="border-bottom">
                      {order.quantity}
                    </TableCell>

                    <TableCell className="border-bottom">
                      {order.customer}
                    </TableCell>

                    <TableCell className="border-bottom">
                      {order.location}
                    </TableCell>

                    <TableCell className="border-bottom">
                      {order.deliveryTime}
                    </TableCell>

                    <TableCell className="border-bottom">
                      ${order.price.toFixed(2)}
                    </TableCell>

                    <TableCell className="border-bottom">
                      <Box
                        sx={{
                          fontSize: "12px",
                          fontWeight: 500,
                          padding: "4px 10px",
                          borderRadius: "30px",
                          color: statusColors.color,
                          backgroundColor: statusColors.bg,
                          display: "inline-block",
                          lineHeight: 1,
                        }}
                      >
                        {order.status}
                      </Box>
                    </TableCell>

                    <TableCell className="border-bottom">
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "end",
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
                );
              })}
            </TableBody>
          </Table>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "15px",
              mt: "15px",
            }}
          >
            <Typography fontSize={"12px"} fontWeight={500} mb={"0"}>
              Showing {indexOfFirstItem + 1}-
              {Math.min(indexOfLastItem, totalItems)} of {totalItems} results
            </Typography>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
              }}
            >
              <Button
                className="border text-body"
                sx={{
                  minWidth: "auto",
                  padding: "0",
                  width: { xs: "28px", md: "34px" },
                  height: { xs: "28px", md: "34px" },
                }}
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                <i className="material-symbols-outlined">keyboard_arrow_left</i>
              </Button>

              {pageNumbers.map((number) => (
                <Button
                  key={number}
                  onClick={() => handlePageChange(number)}
                  className="border"
                  sx={{
                    minWidth: "auto",
                    padding: "0",
                    width: { xs: "28px", md: "34px" },
                    height: { xs: "28px", md: "34px" },
                    backgroundColor:
                      number === currentPage ? "primary.main" : "transparent",
                    color: number === currentPage ? "white !important" : "text.primary",
                  }}
                >
                  {number}
                </Button>
              ))}

              <Button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === pageNumbers.length}
                className="border text-body"
                sx={{
                  minWidth: "auto",
                  padding: "0",
                  width: { xs: "28px", md: "34px" },
                  height: { xs: "28px", md: "34px" },
                }}
              >
                <i className="material-symbols-outlined">
                  keyboard_arrow_right
                </i>
              </Button>
            </Box>
          </Box>
        </TableContainer>
      </Card>
    </>
  );
};

export default RecentOrdersList;
