"use client";

import React, { useState } from "react";
import {
  Box,
  IconButton,
  Typography,
  Card,
  Menu,
  MenuItem,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
  TableHead,
  Checkbox,
  Button,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

// Dynamic data
const trackingOrder = [
  {
    id: "#OR045",
    customerName: "Mark Blake",
    orderDate: "30 Apr 2024",
    currentLocation: "Chicago, IL",
    trackingNumber: "TRK001",
    status: "Delivered",
    statusColor: "success",
  },
  {
    id: "#OR046",
    customerName: "Cheryl Myers",
    orderDate: "28 Apr 2024",
    currentLocation: "London, UK",
    trackingNumber: "TRK002",
    status: "In Transit",
    statusColor: "primary",
  },
  {
    id: "#OR047",
    customerName: "Marc Bradley",
    orderDate: "25 Apr 2024",
    currentLocation: "Paris, France",
    trackingNumber: "TRK003",
    status: "Canceled",
    statusColor: "orange",
  },
  {
    id: "#OR048",
    customerName: "Ryan Vasquez",
    orderDate: "27 Apr 2024",
    currentLocation: "N/A",
    trackingNumber: "TRK004",
    status: "Pending",
    statusColor: "warning",
  },
  {
    id: "#OR049",
    customerName: "Donald Ness",
    orderDate: "30 Apr 2024",
    currentLocation: "Tokyo, Japan",
    trackingNumber: "N/A",
    status: "Canceled",
    statusColor: "orange",
  },
  {
    id: "#OR050",
    customerName: "Wilson Johnson",
    orderDate: "30 Apr 2024",
    currentLocation: "Tokyo, Japan",
    trackingNumber: "TRK006",
    status: "Delivered",
    statusColor: "success",
  },
  {
    id: "#OR051",
    customerName: "Gagnon Smith",
    orderDate: "28 Apr 2024",
    currentLocation: "N/A",
    trackingNumber: "TRK007",
    status: "In Transit",
    statusColor: "primary",
  },
  {
    id: "#OR052",
    customerName: "Tremblay Brown",
    orderDate: "25 Apr 2024",
    currentLocation: "Paris, France",
    trackingNumber: "TRK008",
    status: "Canceled",
    statusColor: "orange",
  },
  {
    id: "#OR053",
    customerName: "Morton Lee",
    orderDate: "27 Apr 2024",
    currentLocation: "London, UK",
    trackingNumber: "TRK009",
    status: "Delivered",
    statusColor: "success",
  },
  {
    id: "#OR054",
    customerName: "Anderson Davis",
    orderDate: "28 Apr 2024",
    currentLocation: "Chicago, IL",
    trackingNumber: "TRK010",
    status: "Canceled",
    statusColor: "orange",
  },
];

const ITEMS_PER_PAGE = 5;

const TrackingOrder = () => {
  // Dropdown
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(trackingOrder.length / ITEMS_PER_PAGE);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const paginatedData = trackingOrder.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

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
            Tracking Order
          </Typography>

          <Box>
            <IconButton
              onClick={handleClick}
              size="small"
              aria-controls={open ? "account-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              sx={{
                borderRadius: "0.375rem",
                fontSize: "14px",
                p: "8px 19.5px",
                display: "flex",
                alignItems: "center",
                gap: "5px",

                "&:hover": {
                  bgcolor: "transparent",
                },
              }}
              className="border"
            >
              Last 30 Days <KeyboardArrowDownIcon sx={{ fontSize: "20px" }} />
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
                  width: "160px",
                },
              }}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
              <MenuItem>Last 7 Days</MenuItem>
              <MenuItem>Last 15 Days</MenuItem>
              <MenuItem>Last 30 Days</MenuItem>
            </Menu>
          </Box>
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
            <Table sx={{ minWidth: 900 }}>
              <TableHead className="bg-primary-50">
                <TableRow
                  sx={{
                    th: {
                      fontWeight: "400",
                      padding: "11px 20px",
                      fontSize: "14px",
                    },
                  }}
                >
                  <TableCell className="text-black border-bottom">
                    Order ID
                  </TableCell>
                  <TableCell className="text-black border-bottom">
                    Customer Name
                  </TableCell>
                  <TableCell className="text-black border-bottom">
                    Order Date
                  </TableCell>
                  <TableCell className="text-black border-bottom">
                    Current Location
                  </TableCell>
                  <TableCell className="text-black border-bottom">
                    Tracking Number
                  </TableCell>
                  <TableCell className="text-black border-bottom">
                    Status
                  </TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {paginatedData.map((order) => (
                  <TableRow
                    key={order.id}
                    sx={{
                      td: {
                        padding: "15px 20px",
                        fontSize: "14px",
                      },
                    }}
                  >
                    <TableCell className="border-bottom">
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Checkbox sx={{ padding: "7px" }} />
                        {order.id}
                      </Box>
                    </TableCell>

                    <TableCell className="border-bottom">
                      {order.customerName}
                    </TableCell>

                    <TableCell className="text-black border-bottom">
                      {order.orderDate}
                    </TableCell>

                    <TableCell className="text-black border-bottom">
                      {order.currentLocation}
                    </TableCell>

                    <TableCell className="border-bottom">
                      {order.trackingNumber}
                    </TableCell>

                    <TableCell className="border-bottom">
                      <Box
                        sx={{
                          px: "8px",
                          py: "3px",
                          display: "inline-block",
                          bgcolor: `${order.statusColor}.50`,
                          color: `${order.statusColor}.600`,
                          borderRadius: "3px",
                          fontSize: "12px",
                          fontWeight: 500,
                        }}
                      >
                        {order.status}
                      </Box>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>

        {/* Pagination */}
        <Box
          sx={{
            pt: "10px",
            display: { sm: "flex" },
            alignItems: { sm: "center" },
            justifyContent: "space-between",
          }}
        >
          <Typography sx={{ fontSize: "13px" }}>
            Showing {paginatedData.length} of {trackingOrder.length} results
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
              disabled={currentPage === 1}
              onClick={() => handlePageChange(currentPage - 1)}
              className="border text-black"
              sx={{
                minWidth: "auto",
                width: "30px",
                height: "30px",
                lineHeight: "30px",
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

            {Array.from({ length: totalPages }).map((_, idx) => (
              <Button
                key={idx}
                onClick={() => handlePageChange(idx + 1)}
                className="border"
                sx={{
                  minWidth: "30px",
                  height: "30px",
                  bgcolor:
                    idx + 1 === currentPage ? "primary.main" : "transparent",
                  color:
                    idx + 1 === currentPage
                      ? "white !important"
                      : "text.primary",
                  "&:hover": {
                    bgcolor: "primary.main",
                    color: "white !important",
                  },
                }}
              >
                {idx + 1}
              </Button>
            ))}

            <Button
              disabled={currentPage === totalPages}
              onClick={() => handlePageChange(currentPage + 1)}
              className="border text-black"
              sx={{
                minWidth: "auto",
                width: "30px",
                height: "30px",
                lineHeight: "30px",
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
      </Card>
    </>
  );
};

export default TrackingOrder;
