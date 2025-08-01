import React from "react";
import { Grid } from "@mui/material";
import AdSpend from "../../components/Dashboard/Marketing/AdSpend";
import CostPerThousand from "../../components/Dashboard/Marketing/CostPerThousand";
import CostPerClick from "../../components/Dashboard/Marketing/CostPerClick";
import ClickThroughRate from "../../components/Dashboard/Marketing/ClickThroughRate";
import PerformanceOverview from "../../components/Dashboard/Marketing/PerformanceOverview";
import DownloadMobileApp from "../../components/Dashboard/Marketing/DownloadMobileApp";
import Highlights from "../../components/Dashboard/Marketing/Highlights";
import Channels from "../../components/Dashboard/Marketing/Channels";
import NewMarketingTool from "../../components/Dashboard/Marketing/NewMarketingTool";
import InstagramSubscriber from "../../components/Dashboard/Marketing/InstagramSubscriber";
import ExternalLinks from "../../components/Dashboard/Marketing/ExternalLinks";
import InstagramCampaigns from "../../components/Dashboard/Marketing/InstagramCampaigns";
import Campaigns from "../../components/Dashboard/Marketing/Campaigns";

const Marketing = () => {
  return (
    <>
      <Grid container columnSpacing={{ xs: 3 }}>
        <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 3 }}>
          <AdSpend />
        </Grid>

        <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 3 }}>
          <CostPerThousand />
        </Grid>

        <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 3 }}>
          <CostPerClick />
        </Grid>

        <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 3 }}>
          <ClickThroughRate />
        </Grid>
      </Grid>

      <Grid container columnSpacing={{ xs: 3 }}>
        <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 8 }}>
          <PerformanceOverview />
        </Grid>

        <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 4 }}>
          <DownloadMobileApp />
        </Grid>
      </Grid>

      <Grid container columnSpacing={{ xs: 3 }}>
        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 4 }}>
          <Highlights />

          <Channels />
        </Grid>

        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 8 }}>
          <Campaigns />

          <Grid container columnSpacing={{ xs: 3 }}>
            <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 6 }}>
              <ExternalLinks />
            </Grid>

            <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 6 }}>
              <InstagramCampaigns />
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid container columnSpacing={{ xs: 3 }}>
        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 3 }}>
          <NewMarketingTool />
        </Grid>

        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 9 }}>
          <InstagramSubscriber />
        </Grid>
      </Grid>
    </>
  );
};

export default Marketing;
