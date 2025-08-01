"use client";

import React, { useState } from "react";
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
  Button,
  MenuItem,
  IconButton,
  Menu,
} from "@mui/material"; 
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const initialPodcasts = [
  {
    id: 1,
    title: "Mastering Digital Marketing",
    artist: "Sarah Johnson",
    image: "/images/podcast/played-1.jpg",
    audioSrc: "https://cldup.com/qR72ozoaiQ.mp3",
    playedAgo: "Played 40 min. ago",
    listeners: 8200,
    duration: "45:30",
    isFavorite: false,
  },
  {
    id: 2,
    title: "The Future of AI",
    artist: "John Doe",
    image: "/images/podcast/played-2.jpg",
    audioSrc: "https://cldup.com/qR72ozoaiQ.mp3",
    playedAgo: "Played 1 hour ago",
    listeners: 9500,
    duration: "50:12",
    isFavorite: false,
  },
  {
    id: 3,
    title: "Exploring the Cosmos",
    artist: "Dr. Emily Carter",
    image: "/images/podcast/played-3.jpg",
    audioSrc: "https://cldup.com/qR72ozoaiQ.mp3",
    playedAgo: "Played 2 hours ago",
    listeners: 6700,
    duration: "42:15",
    isFavorite: false,
  },
  {
    id: 4,
    title: "History's Mysteries",
    artist: "Michael Stevens",
    image: "/images/podcast/played-4.jpg",
    audioSrc: "https://cldup.com/qR72ozoaiQ.mp3",
    playedAgo: "Played 3 hours ago",
    listeners: 7800,
    duration: "38:45",
    isFavorite: false,
  },
  {
    id: 5,
    title: "Health and Wellness Today",
    artist: "Dr. Lisa Wong",
    image: "/images/podcast/played-5.jpg",
    audioSrc: "https://cldup.com/qR72ozoaiQ.mp3",
    playedAgo: "Played 4 hours ago",
    listeners: 5600,
    duration: "47:20",
    isFavorite: false,
  },
  {
    id: 6,
    title: "Tech Innovations",
    artist: "Alex Rodriguez",
    image: "/images/podcast/played-6.jpg",
    audioSrc: "https://cldup.com/qR72ozoaiQ.mp3",
    playedAgo: "Played 5 hours ago",
    listeners: 8900,
    duration: "52:10",
    isFavorite: false,
  },
];

const RecentlyPlayed = () => {
  const [podcasts, setPodcasts] = useState(initialPodcasts);
  const [playingId, setPlayingId] = useState(null);
  const [audio, setAudio] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);

  // Handle play button click
  const handlePlay = (id, audioSrc) => {
    if (playingId === id) {
      if (audio) audio.pause();
      setPlayingId(null);
    } else {
      if (audio) audio.pause(); // Pause any existing audio
      const newAudio = new Audio(audioSrc);
      newAudio.play();
      setAudio(newAudio);
      setPlayingId(id);
    }
  };

  // Toggle favorite
  const toggleFavorite = (id) => {
    setPodcasts((prevPodcasts) =>
      prevPodcasts.map((podcast) =>
        podcast.id === id
          ? { ...podcast, isFavorite: !podcast.isFavorite }
          : podcast
      )
    );
  };

  // Dropdown menu handlers
  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Box
        className="bg-white border"
        sx={{
          boxShadow: "0px 3px 4px 0px rgba(0, 0, 0, 0.05)",
          borderRadius: "7px",
          padding: { xs: "18px", sm: "20px", lg: "25px" },
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
            Recently Played
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
          sx={{
            marginLeft: { xs: "-18px", sm: "-20px", lg: "-25px" },
            marginRight: { xs: "-18px", sm: "-20px", lg: "-25px" },
          }}
        >
          <TableContainer
            component={Paper}
            sx={{
              boxShadow: "none",
              borderRadius: "0",
            }}
            className="rmui-table"
          >
            <Table sx={{ minWidth: 1000 }} aria-label="simple table">
              <TableBody>
                {podcasts.map((podcast) => (
                  <TableRow
                    key={podcast.id}
                    className="tlc-td-bp-none"
                    sx={{
                      td: {
                        padding: "13px 25px",
                      },
                    }}
                  >
                    <TableCell className="border-bottom">
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                        }}
                      >
                        <Button
                          sx={{
                            fontSize: "24px",
                            padding: "0",
                            minWidth: "auto",
                            lineHeight: "1",
                          }}
                          onClick={() =>
                            handlePlay(podcast.id, podcast.audioSrc)
                          }
                        >
                          <i
                            className={
                              playingId === podcast.id
                                ? "ri-pause-large-fill"
                                : "ri-play-large-fill"
                            }
                          ></i>
                        </Button>

                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                          }}
                        >
                          <img
                            src={podcast.image}
                            alt={podcast.title}
                            width={34}
                            height={34}
                            style={{ borderRadius: "3px" }}
                          />

                          <Box>
                            <Typography
                              variant="h4"
                              sx={{
                                fontSize: "14px",
                                fontWeight: 500,
                                mb: "2px",
                              }}
                            >
                              {podcast.title}
                            </Typography>
                            <Typography sx={{ fontSize: "12px" }}>
                              {podcast.artist}
                            </Typography>
                          </Box>
                        </Box>
                      </Box>
                    </TableCell>

                    <TableCell className="border-bottom">
                      <Typography>{podcast.playedAgo}</Typography>
                    </TableCell>

                    <TableCell className="text-end border-bottom">
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                        }}
                      >
                        <i
                          className="ri-customer-service-line text-primary"
                          style={{ fontSize: "18px" }}
                        ></i>
                        <Typography>
                          {podcast.listeners.toLocaleString()}
                        </Typography>
                      </Box>
                    </TableCell>

                    <TableCell className="border-bottom">
                      <Button
                        sx={{
                          fontSize: "20px",
                          padding: "0",
                          minWidth: "auto",
                          lineHeight: "1",
                        }}
                        onClick={() => toggleFavorite(podcast.id)}
                      >
                        <i
                          className={
                            podcast.isFavorite
                              ? "ri-heart-fill text-primary"
                              : "ri-heart-line"
                          }
                        ></i>
                      </Button>
                    </TableCell>

                    <TableCell className="border-bottom">
                      <Typography>{podcast.duration}</Typography>
                    </TableCell>

                    <TableCell className="border-bottom">
                      <Box className="-mr-10">
                        <IconButton onClick={handleMenuClick} size="small">
                          <MoreHorizIcon sx={{ fontSize: "22px" }} />
                        </IconButton>

                        <Menu
                          anchorEl={anchorEl}
                          open={Boolean(anchorEl)}
                          onClose={handleMenuClose}
                          onClick={handleMenuClose}
                          PaperProps={{
                            elevation: 0,
                            sx: {
                              overflow: "visible",
                              boxShadow: "none",
                              border: "1px solid #eee",
                            },
                          }}
                          transformOrigin={{
                            horizontal: "right",
                            vertical: "top",
                          }}
                          anchorOrigin={{
                            horizontal: "right",
                            vertical: "bottom",
                          }}
                        >
                          <MenuItem>Add To Playlist</MenuItem>
                          <MenuItem>Go To Album</MenuItem>
                          <MenuItem>View Credits</MenuItem>
                        </Menu>
                      </Box>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </>
  );
};

export default RecentlyPlayed;
