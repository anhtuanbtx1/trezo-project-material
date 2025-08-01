"use client";

import React, { useState, useRef } from "react";
import { Box, Typography, Button, Grid } from "@mui/material";

const podcastData = [
  {
    category: "Marketing",
    items: [
      {
        id: 1,
        title: "Influencer Marketing",
        author: "Amanda Garcia",
        listens: "6,300",
        image: "/images/podcast/played-7.jpg",
        audio: "https://cldup.com/qR72ozoaiQ.mp3",
      },
      {
        id: 2,
        title: "SEO Strategies",
        author: "John Doe",
        listens: "4,200",
        image: "/images/podcast/played-8.jpg",
        audio: "https://cldup.com/qR72ozoaiQ.mp3",
      },
      {
        id: 3,
        title: "Content Creation Tips",
        author: "Sarah Smith",
        listens: "5,800",
        image: "/images/podcast/played-9.jpg",
        audio: "https://cldup.com/qR72ozoaiQ.mp3",
      },
      {
        id: 4,
        title: "Social Media Growth",
        author: "Michael Brown",
        listens: "7,100",
        image: "/images/podcast/played-10.jpg",
        audio: "https://cldup.com/qR72ozoaiQ.mp3",
      },
      {
        id: 5,
        title: "Analytics Deep Dive",
        author: "Emily Davis",
        listens: "3,900",
        image: "/images/podcast/played-11.jpg",
        audio: "https://cldup.com/qR72ozoaiQ.mp3",
      },
      {
        id: 6,
        title: "Customer Engagement",
        author: "David Wilson",
        listens: "4,500",
        image: "/images/podcast/played-12.jpg",
        audio: "https://cldup.com/qR72ozoaiQ.mp3",
      },
    ],
  },
  {
    category: "Content",
    items: [
      {
        id: 7,
        title: "Content Creation Tips",
        author: "Sarah Smith",
        listens: "5,800",
        image: "/images/podcast/played-8.jpg",
        audio: "https://cldup.com/qR72ozoaiQ.mp3",
      },
      {
        id: 8,
        title: "Social Media Growth",
        author: "Michael Brown",
        listens: "7,100",
        image: "/images/podcast/played-10.jpg",
        audio: "https://cldup.com/qR72ozoaiQ.mp3",
      },
      {
        id: 9,
        title: "Influencer Marketing",
        author: "Amanda Garcia",
        listens: "6,300",
        image: "/images/podcast/played-7.jpg",
        audio: "https://cldup.com/qR72ozoaiQ.mp3",
      },
      {
        id: 10,
        title: "SEO Strategies",
        author: "John Doe",
        listens: "4,200",
        image: "/images/podcast/played-9.jpg",
        audio: "https://cldup.com/qR72ozoaiQ.mp3",
      },
      {
        id: 11,
        title: "Analytics Deep Dive",
        author: "Emily Davis",
        listens: "3,900",
        image: "/images/podcast/played-11.jpg",
        audio: "https://cldup.com/qR72ozoaiQ.mp3",
      },
      {
        id: 12,
        title: "Trend Analysis",
        author: "Sophia Lee",
        listens: "6,700",
        image: "/images/podcast/played-12.jpg",
        audio: "https://cldup.com/qR72ozoaiQ.mp3",
      },
    ],
  },
  {
    category: "Social",
    items: [
      {
        id: 13,
        title: "Influencer Marketing",
        author: "Amanda Garcia",
        listens: "6,300",
        image: "/images/podcast/played-7.jpg",
        audio: "https://cldup.com/qR72ozoaiQ.mp3",
      },
      {
        id: 14,
        title: "SEO Strategies",
        author: "John Doe",
        listens: "4,200",
        image: "/images/podcast/played-8.jpg",
        audio: "https://cldup.com/qR72ozoaiQ.mp3",
      },
      {
        id: 15,
        title: "Content Creation Tips",
        author: "Sarah Smith",
        listens: "5,800",
        image: "/images/podcast/played-11.jpg",
        audio: "https://cldup.com/qR72ozoaiQ.mp3",
      },
      {
        id: 16,
        title: "Social Media Growth",
        author: "Michael Brown",
        listens: "7,100",
        image: "/images/podcast/played-9.jpg",
        audio: "https://cldup.com/qR72ozoaiQ.mp3",
      },
      {
        id: 17,
        title: "Analytics Deep Dive",
        author: "Emily Davis",
        listens: "3,900",
        image: "/images/podcast/played-10.jpg",
        audio: "https://cldup.com/qR72ozoaiQ.mp3",
      },
      {
        id: 18,
        title: "Trend Analysis",
        author: "Sophia Lee",
        listens: "6,700",
        image: "/images/podcast/played-12.jpg",
        audio: "https://cldup.com/qR72ozoaiQ.mp3",
      },
    ],
  },
  {
    category: "Analytics",
    items: [
      {
        id: 19,
        title: "Trend Analysis",
        author: "Sophia Lee",
        listens: "6,700",
        image: "/images/podcast/played-12.jpg",
        audio: "https://cldup.com/qR72ozoaiQ.mp3",
      },
      {
        id: 20,
        title: "Brand Building",
        author: "Chris Johnson",
        listens: "5,200",
        image: "/images/podcast/played-10.jpg",
        audio: "https://cldup.com/qR72ozoaiQ.mp3",
      },
      {
        id: 21,
        title: "Customer Engagement",
        author: "David Wilson",
        listens: "4,500",
        image: "/images/podcast/played-11.jpg",
        audio: "https://cldup.com/qR72ozoaiQ.mp3",
      },
      {
        id: 22,
        title: "Influencer Marketing",
        author: "Amanda Garcia",
        listens: "6,300",
        image: "/images/podcast/played-7.jpg",
        audio: "https://cldup.com/qR72ozoaiQ.mp3",
      },
      {
        id: 23,
        title: "SEO Strategies",
        author: "John Doe",
        listens: "4,200",
        image: "/images/podcast/played-8.jpg",
        audio: "https://cldup.com/qR72ozoaiQ.mp3",
      },
      {
        id: 24,
        title: "Content Creation Tips",
        author: "Sarah Smith",
        listens: "5,800",
        image: "/images/podcast/played-9.jpg",
        audio: "https://cldup.com/qR72ozoaiQ.mp3",
      },
    ],
  },
  {
    category: "Customer",
    items: [
      {
        id: 25,
        title: "Customer Engagement",
        author: "David Wilson",
        listens: "4,500",
        image: "/images/podcast/played-11.jpg",
        audio: "https://cldup.com/qR72ozoaiQ.mp3",
      },
      {
        id: 26,
        title: "Influencer Marketing",
        author: "Amanda Garcia",
        listens: "6,300",
        image: "/images/podcast/played-8.jpg",
        audio: "https://cldup.com/qR72ozoaiQ.mp3",
      },
      {
        id: 27,
        title: "Trend Analysis",
        author: "Sophia Lee",
        listens: "6,700",
        image: "/images/podcast/played-12.jpg",
        audio: "https://cldup.com/qR72ozoaiQ.mp3",
      },
      {
        id: 28,
        title: "Brand Building",
        author: "Chris Johnson",
        listens: "5,200",
        image: "/images/podcast/played-7.jpg",
        audio: "https://cldup.com/qR72ozoaiQ.mp3",
      },
      {
        id: 29,
        title: "SEO Strategies",
        author: "John Doe",
        listens: "4,200",
        image: "/images/podcast/played-10.jpg",
        audio: "https://cldup.com/qR72ozoaiQ.mp3",
      },
      {
        id: 30,
        title: "Content Creation Tips",
        author: "Sarah Smith",
        listens: "5,800",
        image: "/images/podcast/played-11.jpg",
        audio: "https://cldup.com/qR72ozoaiQ.mp3",
      },
    ],
  },
  {
    category: "Trends",
    items: [
      {
        id: 31,
        title: "Customer Engagement",
        author: "David Wilson",
        listens: "4,500",
        image: "/images/podcast/played-7.jpg",
        audio: "https://cldup.com/qR72ozoaiQ.mp3",
      },
      {
        id: 32,
        title: "Social Media Growth",
        author: "Michael Brown",
        listens: "7,100",
        image: "/images/podcast/played-8.jpg",
        audio: "https://cldup.com/qR72ozoaiQ.mp3",
      },
      {
        id: 33,
        title: "Analytics Deep Dive",
        author: "Emily Davis",
        listens: "3,900",
        image: "/images/podcast/played-9.jpg",
        audio: "https://cldup.com/qR72ozoaiQ.mp3",
      },
      {
        id: 34,
        title: "Influencer Marketing",
        author: "Amanda Garcia",
        listens: "6,300",
        image: "/images/podcast/played-10.jpg",
        audio: "https://cldup.com/qR72ozoaiQ.mp3",
      },
      {
        id: 35,
        title: "Trend Analysis",
        author: "Sophia Lee",
        listens: "6,700",
        image: "/images/podcast/played-11.jpg",
        audio: "https://cldup.com/qR72ozoaiQ.mp3",
      },
      {
        id: 36,
        title: "Brand Building",
        author: "Chris Johnson",
        listens: "5,200",
        image: "/images/podcast/played-12.jpg",
        audio: "https://cldup.com/qR72ozoaiQ.mp3",
      },
    ],
  },
];

const MostPopular = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [playingId, setPlayingId] = useState(null);
  const audioRefs = useRef({});

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const handlePlayAudio = (podcastId, audioSrc) => {
    // Pause the currently playing audio if it's different from the selected one
    if (playingId !== null && playingId !== podcastId) {
      audioRefs.current[playingId]?.pause();
    }

    // If the selected podcast is already playing, pause it
    if (playingId === podcastId) {
      audioRefs.current[podcastId]?.pause();
      setPlayingId(null);
    } else {
      // Play the selected podcast
      if (!audioRefs.current[podcastId]) {
        audioRefs.current[podcastId] = new Audio(audioSrc);
        audioRefs.current[podcastId].onended = () => setPlayingId(null);
      }
      audioRefs.current[podcastId].play();
      setPlayingId(podcastId);
    }
  };

  return (
    <>
      <Box
        className="bg-white border"
        sx={{
          boxShadow: "0px 3px 4px 0px rgba(0, 0, 0, 0.05)",
          borderRadius: "7px",
          paddingTop: { xs: "18px", sm: "20px", lg: "25px" },
          paddingX: { xs: "18px", sm: "20px", lg: "25px" },
          paddingBottom: "0",
          position: "relative",
          mb: "25px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "10px",
            mb: "15px",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: "16px", md: "18px" },
              mb: "0",
              fontWeight: 600,
            }}
          >
            Most Popular
          </Typography>

          <Button
            className="text-body -mr-10"
            sx={{
              textTransform: "capitalize",
              padding: "0",
              fontSize: "14px",
              fontWeight: 400,
            }}
          >
            <span>View All</span>
            <i
              className="ri-arrow-right-s-line"
              style={{ fontSize: "24px", lineHeight: "1" }}
            ></i>
          </Button>
        </Box>

        <Box
          className="most-popular-tabs"
          sx={{
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "10px",
            mb: "20px",
          }}
        >
          {podcastData.map((category, index) => (
            <Button
              key={index}
              onClick={() => handleTabClick(index)}
              className={`tab-btn ${activeTab === index ? "active" : ""}`}
              sx={{
                padding: "2px 12px",
                borderRadius: "30px",
                fontSize: "12px",
                fontWeight: 500,
                minWidth: "auto",
                textTransform: "capitalize",
              }}
            >
              {category.category}
            </Button>
          ))}
        </Box>

        <Box>
          <Grid container columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}>
            {podcastData[activeTab].items.map((podcast, index) => (
              <Grid key={index} size={{ xs: 12, sm: 6, md: 4, lg: 4, xl: 4 }}>
                <Box sx={{ mb: "24px" }}>
                  <Box
                    sx={{
                      backgroundImage: `url(${podcast.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center center",
                      borderRadius: "7px",
                      height: "183px",
                      position: "relative",
                      mb: "15px",
                    }}
                  >
                    <Box
                      className="po-left-15"
                      sx={{
                        position: "absolute",
                        bottom: "15px",
                      }}
                    >
                      <Button
                        onClick={() =>
                          handlePlayAudio(podcast.id, podcast.audio)
                        }
                        sx={{
                          backgroundColor: "primary.main",
                          color: "#fff !important",
                          width: "44px",
                          height: "44px",
                          lineHeight: "29px",
                          minWidth: "auto",
                          borderRadius: "50%",
                          padding: "0",
                          fontSize: "22px",
                        }}
                      >
                        <i
                          className={
                            playingId === podcast.id
                              ? "ri-pause-large-fill"
                              : "ri-play-large-fill"
                          }
                        ></i>
                      </Button>
                    </Box>
                  </Box>

                  <Typography
                    variant="h3"
                    sx={{
                      fontSize: "14px",
                      fontWeight: 500,
                      mb: "10px",
                    }}
                  >
                    {podcast.title}
                  </Typography>

                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      flexWrap: "wrap",
                      gap: { xs: "10px", sm: "20px" },
                    }}
                  >
                    <Typography fontSize={12}>By: {podcast.author}</Typography>

                    <Box
                      sx={{ display: "flex", alignItems: "center", gap: "8px" }}
                    >
                      <i
                        className="ri-customer-service-line text-primary"
                        style={{ fontSize: "15px", lineHeight: "1" }}
                      ></i>

                      <Typography component={"span"} sx={{ fontSize: "12px" }}>
                        {podcast.listens}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default MostPopular;
