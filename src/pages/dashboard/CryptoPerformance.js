import * as React from "react";
import { Grid, Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import PerformancePerInvestment from "../../components/Dashboard/CryptoPerformance/PerformancePerInvestment";
import PortfolioValue from "../../components/Dashboard/CryptoPerformance/PortfolioValue";
import CryptoMarketCap from "../../components/Dashboard/CryptoPerformance/CryptoMarketCap";
import TransactionsHistory from "../../components/Dashboard/CryptoPerformance/TransactionsHistory";
import MarketPerformance from "../../components/Dashboard/CryptoPerformance/MarketPerformance";
import PerformanceMetrics from "../../components/Dashboard/CryptoPerformance/PerformanceMetrics";
import IndividualAssetPerformance from "../../components/Dashboard/CryptoPerformance/IndividualAssetPerformance";
import RiskStabilityIndicators from "../../components/Dashboard/CryptoPerformance/RiskStabilityIndicators";
import ComparativeAnalysis from "../../components/Dashboard/CryptoPerformance/ComparativeAnalysis";

export default function Page() {
  return (
    <>
      <Box
        className="breadcrumb-card"
        sx={{
          backgroundImage: "url(/images/sparklines/sparkline-bg.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "7px",
          mb: "25px",
          padding: { xs: "18px", sm: "20px", lg: "25px" },
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h5" className="text-white">
          Crypto Performance
        </Typography>

        <ol className="breadcrumb list-unstyled mt-0 mb-0 p-0">
          <li
            className="breadcrumb-item"
            style={{ position: "relative", display: "inline-block" }}
          >
            <Link
              to="/dashboard/ecommerce"
              className="text-white"
              style={{ position: "relative", display: "inline-block" }}
            >
              <i className="material-symbols-outlined text-white">home</i>
              Dashboard
            </Link>
          </li>
          <li
            className="breadcrumb-item text-white"
            style={{ position: "relative", display: "inline-block" }}
          >
            Crypto Performance
          </li>
        </ol>
      </Box>

      <Grid container columnSpacing={{ xs: 3 }}>
        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 6 }}>
          <PerformancePerInvestment />
        </Grid>

        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 6 }}>
          <Grid container columnSpacing={{ xs: 3 }}>
            <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 6 }}>
              <PortfolioValue />
            </Grid>

            <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 6 }}>
              <CryptoMarketCap />
            </Grid>
          </Grid>

          <TransactionsHistory />
        </Grid>
      </Grid>

      <Grid container columnSpacing={{ xs: 3 }}>
        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 5 }}>
          <MarketPerformance />
        </Grid>

        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 7 }}>
          <PerformanceMetrics />
        </Grid>
      </Grid>

      <IndividualAssetPerformance />

      <Grid container columnSpacing={{ xs: 3 }}>
        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 6, xl: 4 }}>
          <RiskStabilityIndicators />
        </Grid>

        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 6, xl: 8 }}>
          <ComparativeAnalysis />
        </Grid>
      </Grid>
    </>
  );
}
