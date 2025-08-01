import React from "react";
import { Grid, Card } from "@mui/material";
import CryptocurrencyWatchlist from "../../components/Dashboard/Crypto/CryptocurrencyWatchlist";
import MarketPriceStatistics from "../../components/Dashboard/Crypto/MarketPriceStatistics";
import TransactionHistory from "../../components/Dashboard/Crypto/TransactionHistory";
import Portfolio from "../../components/Dashboard/Crypto/Portfolio";
import CryptoRankings from "../../components/Dashboard/Crypto/CryptoRankings";
import Exchange from "../../components/Dashboard/Crypto/Exchange";

const Crypto = () => {
  return (
    <>
      <Card
        sx={{
          position: "relative",
          boxShadow: "none",
          borderRadius: "7px",
          mb: "25px",
          paddingTop: { xs: "18px", sm: "20px", lg: "25px" },
          paddingX: { xs: "18px", sm: "20px", lg: "25px" },
        }}
        className="rmui-card"
      >
        <CryptocurrencyWatchlist />

        <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3, lg: 3 }}>
          <Grid size={{ xs: 12, sm: 12, md: 12, lg: 8, xl: 8 }}>
            <MarketPriceStatistics />
          </Grid>

          <Grid size={{ xs: 12, sm: 12, md: 12, lg: 4, xl: 4 }}>
            <Exchange />
          </Grid>
        </Grid>
      </Card>

      <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3, lg: 3 }}>
        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 7, xl: 7 }}>
          <TransactionHistory />
        </Grid>

        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 5, xl: 5 }}>
          <Portfolio />
        </Grid>
      </Grid>

      <CryptoRankings />
    </>
  );
};

export default Crypto;
