import React from "react"; 
import { Link } from "react-router-dom";     
import Grid from "@mui/material/Grid";
import DownloadApp from "../../components/Dashboard/NFT/DownloadApp";
import HistoryOfBids from "../../components/Dashboard/NFT/HistoryOfBids";
import LiveAuctionTabs from "../../components/NFT/LiveAuctionTabs";

const LiveAuction = () => {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-card">
        <h5>Live Auction</h5>

        <ul className="breadcrumb">
          <li>
            <Link to="/dashboard/ecommerce/">
              <i className="material-symbols-outlined">home</i>
              Dashboard
            </Link>
          </li>
          <li>NFT</li> 
          <li>Live Auction</li>
        </ul>
      </div>

      <Grid
        container
        columnSpacing={{ xs: 1, sm: 2, md: 3, lg: 3 }}
        justifyContent="center"
      >
        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 9 }}>
          <LiveAuctionTabs />
        </Grid>

        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 3 }}>
          <Grid
            container 
            spacing={'25px'}
            justifyContent="center"
          >
            <Grid size={{ xs: 12, sm: 6, lg: 6, xl: 12 }}>
              <DownloadApp />
            </Grid>

            <Grid size={{ xs: 12, sm: 6, lg: 6, xl: 12 }}>
              <HistoryOfBids />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default LiveAuction;
