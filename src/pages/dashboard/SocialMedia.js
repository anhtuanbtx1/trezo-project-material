import React from "react";
import { Grid } from "@mui/material"; 
import SocialPlatformFollowers from "../../components/Dashboard/SocialMedia/SocialPlatformFollowers";
import LinkedinNetFollowers from "../../components/Dashboard/SocialMedia/LinkedinNetFollowers";
import Suggestions from "../../components/Dashboard/SocialMedia/Suggestions";
import FollowersByGender from "../../components/Dashboard/SocialMedia/FollowersByGender";
import RecentInstagramFollowers from "../../components/Dashboard/SocialMedia/RecentInstagramFollowers";
import FacebookCampaignOverview from "../../components/Dashboard/SocialMedia/FacebookCampaignOverview";
import UpgradeYourPlan from "../../components/Dashboard/SocialMedia/UpgradeYourPlan";

const SocialMedia = () => {
  return (
    <> 
      <Grid
        container
        columnSpacing={{ xs: 1, sm: 2, md: 3, lg: 3 }}
        justifyContent="center"
      >
        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 6 }}>
          <SocialPlatformFollowers />
        </Grid>

        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 6 }}>
          <LinkedinNetFollowers />
        </Grid>
      </Grid>

      <Grid
        container
        columnSpacing={{ xs: 1, sm: 2, md: 3, lg: 3 }}
        justifyContent="center"
      >
        <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 4 }}>
          <Suggestions />
        </Grid>

        <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 4 }}>
          <FollowersByGender />
        </Grid>

        <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 4 }}>
          <RecentInstagramFollowers />
        </Grid>
      </Grid>

      <Grid
        container
        columnSpacing={{ xs: 1, sm: 2, md: 3, lg: 3 }}
        justifyContent="center"
      >
        <Grid size={{ xs: 12, sm: 12, md: 8, lg: 8, xl: 8 }}>
          <FacebookCampaignOverview />
        </Grid>

        <Grid size={{ xs: 12, sm: 12, md: 4, lg: 4, xl: 4 }}>
          <UpgradeYourPlan />
        </Grid> 
      </Grid> 
    </>
  );
};

export default SocialMedia;
