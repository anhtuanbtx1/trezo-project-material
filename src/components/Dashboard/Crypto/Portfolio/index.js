"use client";

import React, { useState } from "react";
import {
  Card,
  Box,
  Typography,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
  TableHead,
} from "@mui/material";
import { Link } from "react-router-dom";
import styles from "./Portfolio.module.css";

const createData = (id, coinName, abbreviation, amount, totalValue) => {
  return { id, coinName, abbreviation, amount, totalValue };
};

const rows = [
  createData("1", "Bitcoin", "BTC", "0.50 BTC", "$13,500"),
  createData("2", "Ethereum", "ETH", "5.00 ETH", "$8,750"),
  createData("3", "Binance", "BNB", "100 SOL", "$250"),
  createData("4", "Tether", "USDT", "10 BNB", "$1.00"),
  createData("5", "XRP", "XRP", "1,000 ADA", "$0.50"),
  createData("6", "Solana", "SOL", "0.40 BTC", "$35"),
  createData("7", "USDC", "USDC", "3.00 USDC", "$0.9999"),
  createData("8", "Dogecoin", "DOGE", "3.00 DOGE", "$0,1221"),
  createData("9", "Toncoin", "TON", "3.00 TON", "$5.82"),
  createData("10", "Cardano", "ADA", "3.00 ADA", "$0,3884"),
].sort((b, a) => (a.id < b.id ? -1 : 1));

const Portfolio = () => {
  const [page] = useState(0);
  const [rowsPerPage] = useState(5);

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  return (
    <>
      <Card
        sx={{
          bgcolor: "#4936F5 !important",
          position: "relative",
          boxShadow: "none",
          borderRadius: "7px",
          mb: "25px",
          padding: { xs: "18px", sm: "20px", lg: "25px" },
        }}
        style={{
          backgroundImage: `url(/images/portfolio-bg.jpg)`,
          backgroundPosition: "left bottom",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundColor: "#4936F5",
        }}
        className="rmui-card"
      >
        <Typography
          variant="h5"
          sx={{
            fontSize: { xs: "16px", md: "18px" },
            fontWeight: 700,
            mb: "25px",
          }}
          className="text-white"
        >
          Portfolio
        </Typography>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            mb: "30px",
          }}
        >
          <img
            src="/images/icons/total-balance.svg"
            alt="total-balance"
            width={41}
            height={41}
          />

          <Box>
            <Typography
              component="span"
              className="text-white"
              sx={{
                display: "block",
                textTransform: "uppercase",
                fontWeight: "500",
              }}
            >
              Total balance
            </Typography>

            <Typography
              component="h4"
              sx={{
                fontWeight: "600",
                fontSize: "20px",
                mt: "5px",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                color: "#fff !important",
              }}
            >
              $78,350.00
              <Typography
                component="span"
                sx={{
                  color: "#d8ffc8 !important",
                  fontWeight: "500",
                  fontSize: "14px",
                  display: "flex",
                  alignItems: "center",
                  gap: "2px",
                }}
              >
                <i
                  className="bx bx-trending-up"
                  style={{ fontSize: "20px" }}
                ></i>
                +2.3%
              </Typography>
            </Typography>
          </Box>
        </Box>

        {/* Table */}
        <TableContainer
          component={Paper}
          sx={{
            bgcolor: "transparent !important",
            boxShadow: "none",
            borderRadius: "0",
          }}
          className="rmui-table table-bg-transparent"
        >
          <Table sx={{ minWidth: 400 }} className={styles.pTable}>
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{
                    padding: "0 14px 7px",
                    fontSize: "12px",
                    color: "#fff !important",
                    borderColor: "#757dff !important",
                  }}
                  className="border-bottom"
                >
                  Coin
                </TableCell>

                <TableCell
                  sx={{
                    padding: "0 14px 7px",
                    fontSize: "12px",
                    textAlign: "center",
                    color: "#fff !important",
                    borderColor: "#757dff !important",
                  }}
                  className="border-bottom"
                >
                  Amount
                </TableCell>

                <TableCell
                  sx={{
                    padding: "0 14px 7px",
                    fontSize: "12px",
                    textAlign: "end",
                    color: "#fff !important",
                    borderColor: "#757dff !important",
                  }}
                  className="border-bottom"
                >
                  Total Value
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {(rowsPerPage > 0
                ? rows.slice(
                    page * rowsPerPage,
                    page * rowsPerPage + rowsPerPage
                  )
                : rows
              ).map((row) => (
                <TableRow key={row.id}>
                  <TableCell
                    sx={{
                      padding: "10px 14px",
                      fontSize: "14px",
                      color: "#fff !important",
                      borderColor: "#757dff !important",
                    }}
                    className="border-bottom"
                  >
                    <Typography
                      sx={{
                        fontWeight: "500",
                        color: "#fff !important",
                      }}
                    >
                      {row.coinName}{" "}
                      <Typography
                        component="span"
                        sx={{
                          fontWeight: "400",
                          fontSize: "12px",
                          color: "#fff !important",
                        }}
                      >
                        {row.abbreviation}
                      </Typography>
                    </Typography>
                  </TableCell>

                  <TableCell
                    sx={{
                      padding: "10px 14px",
                      fontSize: "14px",
                      textAlign: "center",
                      fontWeight: "500",
                      color: "#fff !important",
                      borderColor: "#757dff !important",
                    }}
                    className="border-bottom"
                  >
                    {row.amount}
                  </TableCell>

                  <TableCell
                    sx={{
                      padding: "10px 14px",
                      fontSize: "14px",
                      textAlign: "end",
                      fontWeight: "500",
                      color: "#fff !important",
                      borderColor: "#757dff !important",
                    }}
                    className="border-bottom"
                  >
                    {row.totalValue}
                  </TableCell>
                </TableRow>
              ))}
              {emptyRows > 0 && (
                <TableRow style={{ height: 53 * emptyRows }}>
                  <TableCell className="border-bottom" colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>

        <div className="text-end">
          <Link to="/dashboard/crypto">
            <Button
              variant="outlined"
              sx={{
                borderColor: "#605DFF",
                color: "#fff !important",
                mt: "20px",
                textTransform: "capitalize",
                fontSize: "14px",
              }}
            >
              View All Portfolio{" "}
              <i
                className="ri-arrow-right-s-line"
                style={{ fontSize: "18px", lineHeight: "0" }}
              ></i>
            </Button>
          </Link>
        </div>

        <Box
          className={styles.shape}
          sx={{
            display: { xs: "none", xl: "block" },
          }}
        >
          <img
            src="/images/sphere-bowl.png"
            alt="sphere-bowl"
            width={130}
            height={107}
          />
        </Box>
      </Card>
    </>
  );
};

export default Portfolio;
