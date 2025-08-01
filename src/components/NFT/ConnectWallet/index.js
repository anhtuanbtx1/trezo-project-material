"use client";

import React from "react";
import { Box, Typography, Grid, Button } from "@mui/material";

const wallets = [
  {
    id: "1",
    name: "Metamask",
    description:
      "MetaMask is a software cryptocurrency wallet used to interact with the Ethereum blockchain.",
    image: "/images/wallet/metamask.svg",
  },
  {
    id: "2",
    name: "Binance",
    description:
      "Binance offers a relatively secure, versatile way to invest in and trade cryptocurrencies.",
    image: "/images/wallet/binance.svg",
  },
  {
    id: "3",
    name: "Coinbase",
    description:
      "Coinbase Wallet is a software product that gives you access to a wide spectrum.",
    image: "/images/wallet/coinbase.svg",
  },
  {
    id: "4",
    name: "Hello Thumbs",
    description:
      "MetaMask is a software cryptocurrency wallet used to interact with the Ethereum blockchain.",
    image: "/images/nfts/auction1.gif",
  },
  {
    id: "5",
    name: "Christmas Eve",
    description:
      "Binance offers a relatively secure, versatile way to invest in and trade cryptocurrencies.",
      image: "/images/nfts/auction2.gif",
  },
  {
    id: "6",
    name: "Humming Bird",
    description:
      "Coinbase Wallet is a software product that gives you access to a wide spectrum.",
      image: "/images/nfts/auction3.jpg",
  },
];

const ConnectWallet = () => {
  return (
    <Grid
      container
      columnSpacing={{ xs: 1, sm: 2, md: 3, lg: 3 }}
      justifyContent="center"
    >
      {wallets.map((wallet) => (
        <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 4 }} key={wallet.id}>
          <Box
            className="bg-white"
            sx={{
              p: { xs: "20px", md: "25px" },
              borderRadius: "7px",
              textAlign: "center",
              mb: "25px",
            }}
          >
            <Box sx={{ py: { md: "13px" } }}>
              <img
                src={wallet.image}
                className="inline-block"
                alt={wallet.name}
                width={54}
                height={54}
              />

              <Typography
                variant="h3"
                sx={{
                  fontSize: "18px",
                  mb: "12px",
                  mt: "18px !important",
                  fontWeight: "700",
                }}
              >
                {wallet.name}
              </Typography>

              <Typography
                sx={{
                  mx: "auto",
                  maxWidth: { md: "320px" },
                  lineHeight: "1.7",
                  mb: "20px",
                }}
              >
                {wallet.description}
              </Typography>

              <Button
                sx={{
                  fontSize: "15px",
                  borderRadius: "7px",
                  bgcolor: "primary.500",
                  color: "white !important",
                  fontWeight: "500",
                  py: "6px",
                  px: "40px",
                  transition: "all 0.3s ease-in-out",
                  textTransform: "capitalize",

                  "&:hover": {
                    bgcolor: "primary.400",
                  },
                }}
              >
                Connect
              </Button>
            </Box>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default ConnectWallet;
