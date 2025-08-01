"use client";

import * as React from "react";
import {
  Card,
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
} from "@mui/material";

const mockData = [
  {
    name: "Goatseus Maximus",
    price: "$0.719",
    change: "+47.44%",
    isPositive: true,
  },
  {
    name: "Uniswap",
    price: "$9.15",
    change: "-31.87%",
    isPositive: false,
  },
  {
    name: "Aave",
    price: "$161.05",
    change: "+23.94%",
    isPositive: true,
  },
  {
    name: "Solana",
    price: "$145.67",
    change: "+12.30%",
    isPositive: true,
  },
  {
    name: "Bitcoin",
    price: "$68,500",
    change: "-2.15%",
    isPositive: false,
  },
  {
    name: "Ethereum",
    price: "$3,200",
    change: "+1.45%",
    isPositive: true,
  },
  {
    name: "Dogecoin",
    price: "$0.082",
    change: "+8.60%",
    isPositive: true,
  },
  {
    name: "Chainlink",
    price: "$15.20",
    change: "-4.22%",
    isPositive: false,
  },
  {
    name: "Litecoin",
    price: "$98.33",
    change: "-0.99%",
    isPositive: false,
  },
  {
    name: "Avalanche",
    price: "$39.75",
    change: "+5.23%",
    isPositive: true,
  },
];

const GainersLosers = () => {
  return (
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
          mb: "15px",
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
          Gainers & Losers
        </Typography>

        <Box>Timeframe: 24h</Box>
      </Box>

      <Box sx={{ marginLeft: "-25px", marginRight: "-25px" }}>
        <TableContainer
          component={Paper}
          sx={{ boxShadow: "none", borderRadius: "0" }}
          className="rmui-table"
        >
          <Table sx={{ minWidth: 400 }} aria-label="Gainers & Losers Table">
            <TableBody>
              {mockData.slice(0, 6).map((coin, index) => (
                <TableRow
                  key={index}
                  sx={{
                    "& td": {
                      padding: "10.4px 25px",
                      fontSize: "13px",
                      fontWeight: 500,
                    },
                  }}
                >
                  <TableCell className="text-black border-bottom">
                    {coin.name}
                  </TableCell>

                  <TableCell className="border-bottom">{coin.price}</TableCell>

                  <TableCell className="text-end text-black border-bottom">
                    <Typography
                      sx={{
                        color: coin.isPositive ? "success.main" : "error.main",
                      }}
                    >
                      {coin.change}
                    </Typography>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Card>
  );
};

export default GainersLosers;
