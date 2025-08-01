import React from "react";
import { Grid } from "@mui/material";
import ManageYourNFT from "../../components/Dashboard/NFT/ManageYourNFT";
import EthereumRate from "../../components/Dashboard/NFT/EthereumRate";
import FeaturedNFTArtworks from "../../components/Dashboard/NFT/FeaturedNFTArtworks";
import DownloadApp from "../../components/Dashboard/NFT/DownloadApp";
import MostPopularSellers from "../../components/Dashboard/NFT/MostPopularSellers";
import WorldwideTopCreators from "../../components/Dashboard/NFT/WorldwideTopCreators";
import TopCollections from "../../components/Dashboard/NFT/TopCollections";
import TopNFTs from "../../components/Dashboard/NFT/TopNFTs";
import HistoryOfBids from "../../components/Dashboard/NFT/HistoryOfBids";
import ActiveAuctions from "../../components/Dashboard/NFT/ActiveAuctions";

const NFT = () => {
  return (
    <>
      <ManageYourNFT />

      <Grid container columnSpacing={{ xs: 3 }}>
        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 4 }}>
          <EthereumRate />
        </Grid>

        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 8 }}>
          <ActiveAuctions />
        </Grid>
      </Grid>

      <Grid container columnSpacing={{ xs: 3 }}>
        <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 9 }}>
          <FeaturedNFTArtworks />
        </Grid>

        <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 3 }}>
          <DownloadApp />
        </Grid>
      </Grid>

      <Grid container columnSpacing={{ xs: 3 }}>
        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 8 }}>
          <MostPopularSellers />
        </Grid>

        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 4 }}>
          <WorldwideTopCreators />
        </Grid>
      </Grid>

      <Grid container columnSpacing={{ xs: 3 }} justifyContent="center">
        <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 3 }}>
          <TopCollections />
        </Grid>

        <Grid size={{ xs: 12, sm: 12, md: 8, lg: 8, xl: 6 }}>
          <TopNFTs />
        </Grid>

        <Grid size={{ xs: 12, sm: 12, md: 4, lg: 4, xl: 3 }}>
          <HistoryOfBids />
        </Grid>
      </Grid>
    </>
  );
};

export default NFT;
