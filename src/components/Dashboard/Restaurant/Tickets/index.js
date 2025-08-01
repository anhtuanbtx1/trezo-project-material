"use client";

import React, { useState, useEffect } from "react";
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
  Menu,
  MenuItem,
  IconButton,
} from "@mui/material";
import { MoreVert } from "@mui/icons-material";

const Tickets = () => {
  // Dropdown
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  // Data
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    // Simulated API call
    const fetchTickets = async () => {
      const mockTickets = [
        {
          id: "1",
          ticketNumber: "#3242",
          title: "Order delayed for 5 mins",
          updatedDate: "10 Nov, 2025",
          status: "Solved",
        },
        {
          id: "2",
          ticketNumber: "#3243",
          title: "Provide rotten Burger",
          updatedDate: "10 Nov, 2025",
          status: "Solved",
        },
        {
          id: "3",
          ticketNumber: "#3244",
          title: "Missing items in delivery",
          updatedDate: "11 Nov, 2025",
          status: "Pending",
        },
        {
          id: "4",
          ticketNumber: "#3245",
          title: "Damaged packaging",
          updatedDate: "12 Nov, 2025",
          status: "In Progress",
        },
        {
          id: "5",
          ticketNumber: "#3246",
          title: "Incorrect order received",
          updatedDate: "12 Nov, 2025",
          status: "Pending",
        },
        {
          id: "6",
          ticketNumber: "#3247",
          title: "App not working properly",
          updatedDate: "13 Nov, 2025",
          status: "Solved",
        },
        {
          id: "7",
          ticketNumber: "#3248",
          title: "Late refund process",
          updatedDate: "13 Nov, 2025",
          status: "In Progress",
        },
      ];
      setTickets(mockTickets);
    };

    fetchTickets();
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case "Solved":
        return { color: "success.main", bg: "success.100" };
      case "Pending":
        return { color: "purple.main", bg: "purple.100" };
      case "In Progress":
        return { color: "warning.main", bg: "warning.100" };
      default:
        return { color: "text.primary", bg: "grey.100" };
    }
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
            Tickets
          </Typography>

          <Box>
            <IconButton
              onClick={handleClick}
              size="small"
              aria-controls={open ? "account-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              sx={{ p: "0" }}
              className="-right-10"
            >
              <MoreVert sx={{ fontSize: "25px" }} />
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
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
              <MenuItem>This Day</MenuItem>
              <MenuItem>This Week</MenuItem>
              <MenuItem>This Month</MenuItem>
              <MenuItem>This Year</MenuItem>
            </Menu>
          </Box>
        </Box>

        <TableContainer
          component={Paper}
          sx={{
            boxShadow: "none",
            borderRadius: "0",
          }}
          className="rmui-table"
        >
          <Table sx={{ minWidth: 400 }}>
            <TableBody>
              {tickets.map((ticket) => {
                const statusColors = getStatusColor(ticket.status);

                return (
                  <TableRow
                    key={ticket.id}
                    sx={{
                      "& td": {
                        padding: "11.5px 8px",
                        fontSize: "12px",
                        fontWeight: 600,
                        verticalAlign: "top",

                        "&:first-child": {
                          paddingLeft: 0,
                        },
                        "&:last-child": {
                          paddingRight: 0,
                        },
                      },
                    }}
                  >
                    <TableCell className="border-bottom">
                      {ticket.ticketNumber}
                    </TableCell>

                    <TableCell className="border-bottom">
                      <Box>
                        <Typography
                          variant="h5"
                          sx={{ fontSize: "14px", mb: "4px", fontWeight: 500 }}
                        >
                          {ticket.title}{" "}
                        </Typography>
                        <Typography sx={{ fontSize: "12px" }}>
                          Updated on: {ticket.updatedDate}
                        </Typography>
                      </Box>
                    </TableCell>

                    <TableCell className="border-bottom text-end">
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
                        {ticket.status}
                      </Box>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    </>
  );
};

export default Tickets;
