"use client";

import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuItem,
  FormControl,
  TextField,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import styles from "./Exchange.module.css";

const Exchange = () => {
  // Dropdown 1
  const [anchorEl1, setAnchorEl1] = useState(null);
  const open1 = Boolean(anchorEl1);
  const handleClick1 = (event) => {
    setAnchorEl1(event.currentTarget);
  };
  const handleClose1 = () => {
    setAnchorEl1(null);
  };

  // Dropdown 2
  const [anchorEl2, setAnchorEl2] = useState(null);
  const open2 = Boolean(anchorEl2);
  const handleClick2 = (event) => {
    setAnchorEl2(event.currentTarget);
  };
  const handleClose2 = () => {
    setAnchorEl2(null);
  };

  return (
    <>
      <Box
        className="exchange-card"
        sx={{
          bgcolor: "#f3e8ff",
          mb: "25px",
          borderRadius: "7px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "25px 25px 10px",
            borderBottom: "1px solid #D5D9E2",
          }}
          className="dark-border"
        >
          <Box>
            <Typography
              variant="h3"
              sx={{
                fontSize: { xs: "16px", md: "18px" },
                fontWeight: 700,
                lineHeight: "normal",
              }}
              className="text-black"
            >
              Exchange
            </Typography>
          </Box>

          <Box>
            <Button
              type="button"
              sx={{
                padding: "0",
                m: "0",
                minWidth: "auto",
                color: "#5f6368",
              }}
            >
              <i className="material-symbols-outlined">refresh</i>
            </Button>
          </Box>
        </Box>

        <Box
          sx={{
            padding: "25px",
          }}
        >
          <Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography
                component="span"
                sx={{
                  display: "block",
                  textTransform: "uppercase",
                }}
              >
                Selling
              </Typography>

              <Typography
                component="span"
                sx={{
                  display: "block",
                  textTransform: "uppercase",
                }}
              >
                Max 4,238
              </Typography>
            </Box>

            <Box sx={{ mt: "10px" }}>
              <IconButton
                onClick={handleClick1}
                size="small"
                aria-controls={open1 ? "dropdown-menu-1" : undefined}
                aria-haspopup="true"
                aria-expanded={open1 ? "true" : undefined}
                sx={{
                  borderRadius: "0px",
                  padding: "1px 2px",
                  fontSize: "14px",
                  width: "100%",
                  display: "block",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    justifyContent: "space-between",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <img
                      src="/images/cryptocurrencies/big-ethereum.svg"
                      alt="ethereum"
                      width={42}
                      height={42}
                    />

                    <Typography
                      component="span"
                      sx={{
                        display: "block",
                        fontWeight: "600",
                        fontSize: { sx: "14px", xl: "16px" },
                        textTransform: "uppercase",
                      }}
                      className="text-black"
                    >
                      Ethereum{" "}
                      <span
                        className="text-body"
                        style={{ fontWeight: "normal" }}
                      >
                        (ETH)
                      </span>
                    </Typography>
                  </Box>

                  <Box>
                    <KeyboardArrowDownIcon sx={{ fontSize: "25px" }} />
                  </Box>
                </Box>
              </IconButton>

              <Menu
                anchorEl={anchorEl1}
                id="dropdown-menu-1"
                open={open1}
                onClose={handleClose1}
                onClick={handleClose1}
                PaperProps={{
                  elevation: 0,

                  sx: {
                    overflow: "visible",
                    boxShadow: "0 4px 45px #0000001a",
                    mt: 0,
                    width: "290px",
                  },
                }}
                transformOrigin={{ horizontal: "left", vertical: "top" }}
                anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
              >
                <MenuItem
                  sx={{
                    fontWeight: "500",
                    gap: "5px",
                    padding: "10px 22px",
                  }}
                  className="text-black"
                >
                  <img
                    src="/images/cryptocurrencies/ethereum.svg"
                    alt="ethereum"
                    width={22}
                    height={22}
                  />

                  <Box sx={{ textTransform: "uppercase" }}>
                    Ethereum{" "}
                    <Typography
                      component="span"
                      sx={{ fontWeight: "400" }}
                      className="text-body"
                    >
                      (ETH)
                    </Typography>
                  </Box>
                </MenuItem>

                <MenuItem
                  sx={{
                    fontWeight: "500",
                    gap: "5px",
                    padding: "10px 22px",
                  }}
                  className="text-black"
                >
                  <img
                    src="/images/cryptocurrencies/bitcoin.svg"
                    alt="bitcoin"
                    width={22}
                    height={22}
                  />

                  <Box sx={{ textTransform: "uppercase" }}>
                    Bitcoin{" "}
                    <Typography
                      component="span"
                      sx={{ fontWeight: "400" }}
                      className="text-body"
                    >
                      (BTC)
                    </Typography>
                  </Box>
                </MenuItem>

                <MenuItem
                  sx={{
                    fontWeight: "500",
                    gap: "5px",
                    padding: "10px 22px",
                  }}
                  className="text-black"
                >
                  <img
                    src="/images/cryptocurrencies/solana.svg"
                    alt="solana"
                    width={22}
                    height={22}
                  />

                  <Box sx={{ textTransform: "uppercase" }}>
                    Solana{" "}
                    <Typography
                      component="span"
                      sx={{ fontWeight: "400" }}
                      className="text-body"
                    >
                      (SOL)
                    </Typography>
                  </Box>
                </MenuItem>

                <MenuItem
                  sx={{
                    fontWeight: "500",
                    gap: "5px",
                    padding: "10px 22px",
                  }}
                  className="text-black"
                >
                  <img
                    src="/images/cryptocurrencies/cardano.png"
                    alt="cardano"
                    width={22}
                    height={22}
                  />

                  <Box sx={{ textTransform: "uppercase" }}>
                    Cardano{" "}
                    <Typography
                      component="span"
                      sx={{ fontWeight: "400" }}
                      className="text-body"
                    >
                      (ADA)
                    </Typography>
                  </Box>
                </MenuItem>

                <MenuItem
                  sx={{
                    fontWeight: "500",
                    gap: "5px",
                    padding: "10px 22px",
                  }}
                  className="text-black"
                >
                  <img
                    src="/images/cryptocurrencies/binance.svg"
                    alt="binance"
                    width={22}
                    height={22}
                  />

                  <Box sx={{ textTransform: "uppercase" }}>
                    Binance{" "}
                    <Typography
                      component="span"
                      sx={{ fontWeight: "400" }}
                      className="text-body"
                    >
                      (BNB)
                    </Typography>
                  </Box>
                </MenuItem>
              </Menu>
            </Box>

            <Box sx={{ mt: "15px" }}>
              <FormControl fullWidth sx={{ position: "relative" }}>
                <TextField
                  fullWidth
                  id="eth"
                  label="ETH"
                  name="eth"
                  autoComplete="eth"
                  InputProps={{
                    style: {
                      borderRadius: 8,
                      backgroundColor: "white", // Set the background to white
                    },
                  }}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "white", // Border color set to white
                      },
                      "&:hover fieldset": {
                        borderColor: "white", // Border color on hover remains white
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "white", // Border color on focus remains white
                      },
                    },
                  }}
                />

                <Box className={styles.price}>$1750</Box>
              </FormControl>
            </Box>
          </Box>

          <Box sx={{ mt: "25px" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography
                component="span"
                sx={{
                  display: "block",
                  textTransform: "uppercase",
                }}
              >
                Buying
              </Typography>
            </Box>

            <Box sx={{ mt: "10px" }}>
              <IconButton
                onClick={handleClick2}
                size="small"
                aria-controls={open2 ? "dropdown-menu-2" : undefined}
                aria-haspopup="true"
                aria-expanded={open2 ? "true" : undefined}
                sx={{
                  borderRadius: "0px",
                  padding: "1px 2px",
                  fontSize: "14px",
                  width: "100%",
                  display: "block",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    justifyContent: "space-between",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <img
                      src="/images/cryptocurrencies/big-solana.svg"
                      alt="solan"
                      width={42}
                      height={42}
                    />

                    <Typography
                      component="span"
                      sx={{
                        display: "block",
                        fontWeight: "600",
                        fontSize: { sx: "14px", xl: "16px" },
                        textTransform: "uppercase",
                      }}
                      className="text-black"
                    >
                      Solana{" "}
                      <span
                        className="text-body"
                        style={{ fontWeight: "normal" }}
                      >
                        (SOL)
                      </span>
                    </Typography>
                  </Box>

                  <Box>
                    <KeyboardArrowDownIcon sx={{ fontSize: "25px" }} />
                  </Box>
                </Box>
              </IconButton>

              <Menu
                anchorEl={anchorEl2}
                id="dropdown-menu-2"
                open={open2}
                onClose={handleClose2}
                onClick={handleClose2}
                PaperProps={{
                  elevation: 0,

                  sx: {
                    overflow: "visible",
                    boxShadow: "0 4px 45px #0000001a",
                    mt: 0,
                    width: "290px",
                  },
                }}
                transformOrigin={{ horizontal: "left", vertical: "top" }}
                anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
              >
                <MenuItem
                  sx={{
                    fontWeight: "500",
                    gap: "5px",
                    padding: "10px 22px",
                  }}
                  className="text-black"
                >
                  <img
                    src="/images/cryptocurrencies/ethereum.svg"
                    alt="ethereum"
                    width={22}
                    height={22}
                  />

                  <Box sx={{ textTransform: "uppercase" }}>
                    Ethereum{" "}
                    <Typography
                      component="span"
                      sx={{ fontWeight: "400" }}
                      className="text-body"
                    >
                      (ETH)
                    </Typography>
                  </Box>
                </MenuItem>

                <MenuItem
                  sx={{
                    fontWeight: "500",
                    gap: "5px",
                    padding: "10px 22px",
                  }}
                  className="text-black"
                >
                  <img
                    src="/images/cryptocurrencies/bitcoin.svg"
                    alt="bitcoin"
                    width={22}
                    height={22}
                  />

                  <Box sx={{ textTransform: "uppercase" }}>
                    Bitcoin{" "}
                    <Typography
                      component="span"
                      sx={{ fontWeight: "400" }}
                      className="text-body"
                    >
                      (BTC)
                    </Typography>
                  </Box>
                </MenuItem>

                <MenuItem
                  sx={{
                    fontWeight: "500",
                    gap: "5px",
                    padding: "10px 22px",
                  }}
                  className="text-black"
                >
                  <img
                    src="/images/cryptocurrencies/solana.svg"
                    alt="solana"
                    width={22}
                    height={22}
                  />

                  <Box sx={{ textTransform: "uppercase" }}>
                    Solana{" "}
                    <Typography
                      component="span"
                      sx={{ fontWeight: "400" }}
                      className="text-body"
                    >
                      (SOL)
                    </Typography>
                  </Box>
                </MenuItem>

                <MenuItem
                  sx={{
                    fontWeight: "500",
                    gap: "5px",
                    padding: "10px 22px",
                  }}
                  className="text-black"
                >
                  <img
                    src="/images/cryptocurrencies/cardano.png"
                    alt="cardano"
                    width={22}
                    height={22}
                  />

                  <Box sx={{ textTransform: "uppercase" }}>
                    Cardano{" "}
                    <Typography
                      component="span"
                      sx={{ fontWeight: "400" }}
                      className="text-body"
                    >
                      (ADA)
                    </Typography>
                  </Box>
                </MenuItem>

                <MenuItem
                  sx={{
                    fontWeight: "500",
                    gap: "5px",
                    padding: "10px 22px",
                  }}
                  className="text-black"
                >
                  <img
                    src="/images/cryptocurrencies/binance.svg"
                    alt="binance"
                    width={22}
                    height={22}
                  />

                  <Box sx={{ textTransform: "uppercase" }}>
                    Binance{" "}
                    <Typography
                      component="span"
                      sx={{ fontWeight: "400" }}
                      className="text-body"
                    >
                      (BNB)
                    </Typography>
                  </Box>
                </MenuItem>
              </Menu>
            </Box>

            <Box sx={{ mt: "15px" }}>
              <FormControl fullWidth sx={{ position: "relative" }}>
                <TextField
                  fullWidth
                  id="sol"
                  label="SOL"
                  name="sol"
                  autoComplete="sol"
                  InputProps={{
                    style: {
                      borderRadius: 8,
                      backgroundColor: "white", // Set the background to white
                    },
                  }}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "white", // Border color set to white
                      },
                      "&:hover fieldset": {
                        borderColor: "white", // Border color on hover remains white
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "white", // Border color on focus remains white
                      },
                    },
                  }}
                />

                <Box className={styles.price}>$35</Box>
              </FormControl>
            </Box>
          </Box>

          <Button
            type="button"
            variant="contained"
            color="primary"
            sx={{
              display: "block",
              width: "100%",
              boxShadow: "none",
              textTransform: "capitalize",
              mt: "25px",
              fontSize: "16px",
              padding: "9px 30px",
              color: "#fff !important",
            }}
          >
            Exchange
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Exchange;
