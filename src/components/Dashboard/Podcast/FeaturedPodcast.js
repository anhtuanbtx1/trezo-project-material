"use client";

import React, { useState, useRef } from "react";
import { Box, Typography, Grid, Button } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

const podcastData = [
  {
    id: 1,
    featured: true,
    title: "Mastering Digital Marketing",
    description:
      "Learn the latest digital marketing strategies with insights from SEO expert James Lee.",
    host: "Sarah J.",
    guest: "James Lee, SEO Expert",
    audioSrc: "https://cldup.com/qR72ozoaiQ.mp3",
    image: "/images/podcast/featured-podcast1.png",
    listens: 8200,
    likes: 1500,
    shares: 350,
    saveFor: "Later",
  },
  {
    id: 2,
    featured: true,
    title: "Content Marketing Essentials",
    description:
      "This episode covers creating impactful content that resonates with audiences.",
    host: "Tom R.",
    guest: "Lisa Kim",
    audioSrc: "https://cldup.com/qR72ozoaiQ.mp3",
    image: "/images/podcast/featured-podcast2.png",
    listens: 5200,
    likes: 1200,
    shares: 250,
    saveFor: "Later",
  },
  {
    id: 3,
    featured: true,
    title: "Social Media Trends",
    description:
      "Learn the latest digital marketing strategies with insights from SEO expert James Lee.",
    host: "Amanda G.",
    guest: "David Chen",
    audioSrc: "https://cldup.com/qR72ozoaiQ.mp3",
    image: "/images/podcast/featured-podcast3.png",
    listens: 3200,
    likes: 1100,
    shares: 150,
    saveFor: "Later",
  },
];

const FeaturedPodcast = () => {
  const [currentlyPlayingId, setCurrentlyPlayingId] = useState(null);
  const [audioStates, setAudioStates] = useState({});
  const audioRefs = useRef({});

  const handlePlay = (id) => {
    const audio = audioRefs.current[id];
    if (!audio) return;

    if (currentlyPlayingId === id) {
      audio.pause();
      setCurrentlyPlayingId(null);
    } else {
      if (currentlyPlayingId !== null) {
        const currentAudio = audioRefs.current[currentlyPlayingId];
        currentAudio?.pause();
      }
      audio.play();
      setCurrentlyPlayingId(id);
    }
  };

  const handleTimeUpdate = (id) => {
    const audio = audioRefs.current[id];
    if (audio) {
      const currentTime = audio.currentTime;
      const duration = audio.duration || 0;
      const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

      setAudioStates((prev) => ({
        ...prev,
        [id]: { progress, currentTime, duration },
      }));
    }
  };

  const handleEnded = (id) => {
    setCurrentlyPlayingId(null);
    setAudioStates((prev) => ({
      ...prev,
      [id]: { ...prev[id], progress: 0, currentTime: 0 },
    }));
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${String(seconds).padStart(2, "0")}`;
  };

  return (
    <Box
      sx={{
        background: "linear-gradient(84deg, #23272E 3.5%, #526077 94.93%)",
        borderRadius: "7px",
        padding: { xs: "18px", sm: "20px", lg: "25px" },
        position: "relative",
        mb: "25px",
      }}
    >
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mastering-digital-marketing-slide"
      >
        {podcastData.map((podcast) => (
          <SwiperSlide key={podcast.id}>
            <Grid
              container
              alignItems="end"
              columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}
            >
              <Grid size={{ xs: 12, sm: 8, md: 8, lg: 8, xl: 8 }}>
                <Box
                  sx={{
                    bgcolor: "#526077",
                    padding: "0 11px",
                    display: "inline-block",
                    color: "#fff",
                    fontWeight: 500,
                    borderRadius: "30px",
                    mb: "10px",
                  }}
                >
                  Featured
                </Box>

                <Typography
                  variant="h3"
                  sx={{
                    fontSize: { xs: "20px", md: "22px", lg: "28px" },
                    fontWeight: 500,
                    color: "#fff !important",
                    mb: "5px",
                  }}
                >
                  {podcast.title}
                </Typography>

                <Typography
                  sx={{
                    color: "#d5d9e2",
                    maxWidth: "370px",
                    marginBottom: "18px",
                    lineHeight: 1.6,
                  }}
                >
                  {podcast.description}
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "10px",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      border: "1px solid #64748B",
                      padding: "3.5px 12px",
                      borderRadius: "30px",
                      color: "#fff",
                      display: "flex",
                      alignItems: "center",
                      gap: "5px",
                    }}
                  >
                    <Typography component="span" sx={{ fontWeight: 600 }}>
                      Host:
                    </Typography>
                    <Typography component="span">{podcast.host}</Typography>
                  </Box>

                  <Box
                    sx={{
                      border: "1px solid #64748B",
                      padding: "3.5px 12px",
                      borderRadius: "30px",
                      color: "#fff",
                      display: "flex",
                      alignItems: "center",
                      gap: "5px",
                    }}
                  >
                    <Typography component="span" sx={{ fontWeight: 600 }}>
                      Guest:
                    </Typography>
                    <Typography component="span">{podcast.guest}</Typography>
                  </Box>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    my: { xs: "20px", md: "30px", lg: "46px" },
                  }}
                >
                  <Box sx={{ flexShrink: 0 }}>
                    <Button
                      onClick={() => handlePlay(podcast.id)}
                      sx={{
                        backgroundColor: "#C2CDFF",
                        width: "44px",
                        height: "44px",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        minWidth: "auto",
                      }}
                    >
                      <i
                        className={`play-icon ${
                          currentlyPlayingId === podcast.id
                            ? "ri-pause-large-fill"
                            : "ri-play-large-fill"
                        } text-primary`}
                        style={{ fontSize: "28px" }}
                      />
                    </Button>
                  </Box>

                  <Box>
                    <Box
                      sx={{
                        width: { xs: "200px", md: "325px" },
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "end",
                      }}
                    >
                      <Typography component="span" className="text-white">
                        {formatTime(audioStates[podcast.id]?.currentTime || 0)}
                      </Typography>
                    </Box>
                    <Box sx={{ height: "4px", backgroundColor: "#8695AA" }}>
                      <Box
                        sx={{
                          backgroundColor: "primary.main",
                          width: `${audioStates[podcast.id]?.progress || 0}%`,
                          height: "4px",
                        }}
                      ></Box>
                    </Box>
                  </Box>
                </Box>

                {/* Audio Element */}
                <audio
                  ref={(el) => {
                    audioRefs.current[podcast.id] = el;
                  }}
                  src={podcast.audioSrc}
                  onTimeUpdate={() => handleTimeUpdate(podcast.id)}
                  onEnded={() => handleEnded(podcast.id)}
                />

                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: { xs: "15px", md: "30px" },
                    alignItems: "center",
                    mb: { xs: "20px", sm: "0" },
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <Box
                      sx={{
                        flexShrink: 0,
                        fontSize: { xs: "24px", md: "28px" },
                      }}
                    >
                      <i className="ri-customer-service-line text-primary"></i>
                    </Box>

                    <Box>
                      <Typography
                        sx={{
                          fontSize: { xs: "10px", md: "12px" },
                          fontWeight: 600,
                          mb: "5px",
                          lineHeight: "1",
                          color: "#d5d9e2",
                        }}
                      >
                        Listens
                      </Typography>

                      <Typography
                        sx={{
                          fontSize: { xs: "12px", md: "14px" },
                          fontWeight: 500,
                          mb: "0",
                          lineHeight: "1",
                          color: "#fff",
                        }}
                      >
                        {podcast.listens.toLocaleString()}
                      </Typography>
                    </Box>
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <Box
                      sx={{
                        flexShrink: 0,
                        fontSize: { xs: "24px", md: "28px" },
                      }}
                    >
                      <i className="ri-thumb-up-line text-primary"></i>
                    </Box>

                    <Box>
                      <Typography
                        sx={{
                          fontSize: { xs: "10px", md: "12px" },
                          fontWeight: 600,
                          mb: "5px",
                          lineHeight: "1",
                          color: "#d5d9e2",
                        }}
                      >
                        Likes
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: { xs: "12px", md: "14px" },
                          fontWeight: 500,
                          mb: "0",
                          lineHeight: "1",
                          color: "#fff",
                        }}
                      >
                        {podcast.likes.toLocaleString()}
                      </Typography>
                    </Box>
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <Box
                      sx={{
                        flexShrink: 0,
                        fontSize: { xs: "24px", md: "28px" },
                      }}
                    >
                      <i className="ri-share-line text-primary"></i>
                    </Box>

                    <Box>
                      <Typography
                        sx={{
                          fontSize: { xs: "10px", md: "12px" },
                          fontWeight: 600,
                          mb: "5px",
                          lineHeight: "1",
                          color: "#d5d9e2",
                        }}
                      >
                        Shares
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: { xs: "12px", md: "14px" },
                          fontWeight: 500,
                          mb: "0",
                          lineHeight: "1",
                          color: "#fff",
                        }}
                      >
                        {podcast.shares.toLocaleString()}
                      </Typography>
                    </Box>
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <Box
                      sx={{
                        flexShrink: 0,
                        fontSize: { xs: "24px", md: "28px" },
                      }}
                    >
                      <i className="ri-bookmark-line text-primary"></i>
                    </Box>

                    <Box>
                      <Typography
                        sx={{
                          fontSize: { xs: "10px", md: "12px" },
                          fontWeight: 600,
                          mb: "5px",
                          lineHeight: "1",
                          color: "#d5d9e2",
                        }}
                      >
                        Save for
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: { xs: "12px", md: "14px" },
                          fontWeight: 500,
                          mb: "0",
                          lineHeight: "1",
                          color: "#fff",
                        }}
                      >
                        {podcast.saveFor}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Grid>

              <Grid size={{ xs: 12, sm: 4, md: 4, lg: 4, xl: 4 }}>
                <Box
                  sx={{
                    marginBottom: { xs: "-25px", sm: "-20px", lg: "-25px" },
                  }}
                >
                  <img
                    src={podcast.image}
                    alt={podcast.title}
                    width={364}
                    height={334}
                  />
                </Box>
              </Grid>
            </Grid>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default FeaturedPodcast;
