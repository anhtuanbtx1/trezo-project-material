import React from "react";
import { Grid } from "@mui/material";
import FeaturedPodcast from "../../components/Dashboard/Podcast/FeaturedPodcast";
import PopularHosts from "../../components/Dashboard/Podcast/PopularHosts";
import RecentlyPlayed from "../../components/Dashboard/Podcast/RecentlyPlayed";
import Player from "../../components/Dashboard/Podcast/Player";
import UpcomingEpisodes from "../../components/Dashboard/Podcast/UpcomingEpisodes";
import TodaysEarnings from "../../components/Dashboard/Podcast/TodaysEarnings";
import ListenerAnalytics from "../../components/Dashboard/Podcast/ListenerAnalytics";
import TopPodcasts from "../../components/Dashboard/Podcast/TopPodcasts";
import MostPopular from "../../components/Dashboard/Podcast/MostPopular";

const Podcast = () => {
  return (
    <>
      <Grid container columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}>
        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 8 }}>
          <FeaturedPodcast />
        </Grid>

        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 4 }}>
          <PopularHosts />
        </Grid>
      </Grid>

      <Grid container columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}>
        <Grid size={{ xs: 12, sm: 12, md: 7, lg: 7, xl: 8 }}>
          <RecentlyPlayed />
        </Grid>

        <Grid size={{ xs: 12, sm: 12, md: 5, lg: 5, xl: 4 }}>
          <Player />
        </Grid>
      </Grid>

      <Grid container columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}>
        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 8 }}>
          <MostPopular />
        </Grid>

        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 4 }}>
          <UpcomingEpisodes />

          <TodaysEarnings />
        </Grid>
      </Grid>

      <Grid container columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}>
        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 6 }}>
          <ListenerAnalytics />
        </Grid>

        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 6 }}>
          <TopPodcasts />
        </Grid>
      </Grid>
    </>
  );
};

export default Podcast;
