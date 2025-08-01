import * as React from "react";
import { Grid } from "@mui/material";
import Stats from "../../components/Dashboard/CryptoTrader/Stats";
import PriceMovement from "../../components/Dashboard/CryptoTrader/PriceMovement";
import TradingVolume from "../../components/Dashboard/CryptoTrader/TradingVolume";
import PortfolioDistribution from "../../components/Dashboard/CryptoTrader/PortfolioDistribution";
import ProfitLoss from "../../components/Dashboard/CryptoTrader/ProfitLoss";
import RiskExposure from "../../components/Dashboard/CryptoTrader/RiskExposure";
import RecentTransactions from "../../components/Dashboard/CryptoTrader/RecentTransactions";
import LivePriceTracker from "../../components/Dashboard/CryptoTrader/LivePriceTracker";
import TradesPerMonth from "../../components/Dashboard/CryptoTrader/TradesPerMonth";
import AssetAllocation from "../../components/Dashboard/CryptoTrader/AssetAllocation";
import GainersLosers from "../../components/Dashboard/CryptoTrader/GainersLosers";
import MarketSentimentIndicator from "../../components/Dashboard/CryptoTrader/MarketSentimentIndicator";

export default function Page() {
  return (
    <>
      <Stats />

      <Grid container columnSpacing={{ xs: 3 }}>
        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 8 }}>
          <PriceMovement />
        </Grid>

        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 4 }}>
          <Grid container columnSpacing={{ xs: 3 }}>
            <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 12 }}>
              <TradingVolume />
            </Grid>

            <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 12 }}>
              <PortfolioDistribution />
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid container columnSpacing={{ xs: 3 }}>
        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 8 }}>
          <Grid container columnSpacing={{ xs: 3 }}>
            <Grid size={{ xs: 12, sm: 12, md: 12, lg: 6, xl: 6 }}>
              <ProfitLoss />
            </Grid>

            <Grid size={{ xs: 12, sm: 12, md: 12, lg: 6, xl: 6 }}>
              <RiskExposure />
            </Grid>
          </Grid>

          <RecentTransactions />
        </Grid>

        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 4 }}>
          <LivePriceTracker />

          <TradesPerMonth />
        </Grid>
      </Grid>

      <Grid container columnSpacing={{ xs: 3 }}>
        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 6, xl: 4 }}>
          <AssetAllocation />
        </Grid>

        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 6, xl: 4 }}>
          <GainersLosers />
        </Grid>

        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 6, xl: 4 }}>
          <MarketSentimentIndicator />
        </Grid>
      </Grid>
    </>
  );
}
