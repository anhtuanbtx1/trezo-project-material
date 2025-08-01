"use client";

import React, { useRef, useState, useEffect } from "react";
import {
  Box,
  Typography,
  Button,
  MenuItem,
  IconButton,
  Menu,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const Player = () => {
  // Dropdown
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // Player
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState("0:00");
  const [duration, setDuration] = useState("0:00");
  const [progress, setProgress] = useState(0);

  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => {
      setCurrentTime(formatTime(audio.currentTime));
      setProgress((audio.currentTime / audio.duration) * 100);
    };

    const setAudioDuration = () => {
      setDuration(formatTime(audio.duration));
    };

    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("loadedmetadata", setAudioDuration);

    return () => {
      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener("loadedmetadata", setAudioDuration);
    };
  }, []);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (audioRef.current.paused) {
      audioRef.current.play();
      setIsPlaying(true);
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  const restartAudio = () => {
    if (!audioRef.current) return;

    audioRef.current.currentTime = 0;
    audioRef.current.play();
    setIsPlaying(true);
  };

  return (
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
          justifyContent: "space-between",
          alignItems: "center",
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
          Player
        </Typography>

        <Box className="-mr-10">
          <IconButton
            onClick={handleClick}
            size="small"
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            sx={{
              padding: "0",
            }}
          >
            <MoreVertIcon sx={{ fontSize: "22px" }} />
          </IconButton>

          <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
              elevation: 0,

              sx: {
                overflow: "visible",
                boxShadow: "0 4px 45px #0000001a",
                mt: 0,
                "& .MuiAvatar-root": {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
              },
            }}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          >
            <MenuItem>Today</MenuItem>
            <MenuItem>Last 7 Days</MenuItem>
            <MenuItem>Last Month</MenuItem>
            <MenuItem>Last 1 Year</MenuItem>
            <MenuItem>All Time</MenuItem>
          </Menu>
        </Box>
      </Box>

      <Box sx={{ marginBottom: "20px" }}>
        <Box sx={{ display: { xs: "block", lg: "none" } }}>
          <img
            src="/images/podcast/player.png"
            className="rounded-3 d-lg-none w-100"
            alt="player"
            width={888}
            height={600}
            style={{
              borderRadius: "7px",
            }}
          />
        </Box>
        <Box
          sx={{
            backgroundImage: "url(/images/podcast/player.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "201px",
            borderRadius: "7px",
            display: { xs: "none", lg: "block" },
          }}
        ></Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px",
          gap: "10px",
        }}
      >
        <Box>
          <Typography
            variant="h4"
            sx={{
              fontSize: "14px",
              fontWeight: 500,
              mb: "3px",
            }}
          >
            Building an Online Presence
          </Typography>
          <Typography fontSize={12}>Ethan Cooper</Typography>
        </Box>

        <Button
          className="favorite-button border-0 text-body-color-60 fs-14 bg-transparent p-0"
          sx={{
            padding: "0",
            minWidth: "auto",
            fontSize: "20px",
          }}
        >
          <i className="ri-heart-line text-body"></i>
          {/* <i className="ri-heart-fill text-primary"></i> */}
        </Button>
      </Box>

      <Box className="audio-player" id="audio_control">
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: "10px",
          }}
        >
          <Typography sx={{ fontSize: "12px" }}>{currentTime}</Typography>
          <Typography sx={{ fontSize: "12px" }}>{duration}</Typography>
        </Box>

        <Box
          sx={{
            bgcolor: "#ECF0FF",
            height: "4px",
            mb: "20px",
            borderRadius: "5px",
          }}
        >
          <Box
            sx={{
              backgroundColor: "primary.main",
              width: `${progress}%`,
              height: "4px",
              borderRadius: "5px",
            }}
          ></Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            gap: "10px",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Button
            sx={{
              padding: "0",
              minWidth: "auto",
              fontSize: "20px",
              color: "#9CAAFF",
              flexShrink: 0,
              lineHeight: 1,
            }}
          >
            <i className="ri-shuffle-line"></i>
          </Button>

          <Box sx={{ display: "flex", gap: "5px" }}>
            <Button
              sx={{
                padding: "0",
                minWidth: "auto",
                fontSize: "30px",
                color: "#9CAAFF",
                flexShrink: 0,
                lineHeight: 1,
              }}
            >
              <i className="ri-skip-left-fill"></i>
            </Button>

            <Button
              sx={{
                padding: "0",
                minWidth: "auto",
                fontSize: "30px",
                color: "#9CAAFF",
                flexShrink: 0,
                lineHeight: 1,
              }}
            >
              <i className="ri-arrow-left-s-fill"></i>
            </Button>

            <Button
              className="text-primary"
              sx={{
                backgroundColor: "#ECF0FF",
                width: "44px",
                height: "44px",
                flexShrink: 0,
                minWidth: "auto",
                fontSize: "30px",
                padding: "0",
                borderRadius: "50%",
                lineHeight: 1,
              }}
              onClick={togglePlay}
            >
              <i className={isPlaying ? "ri-pause-fill" : "ri-play-fill"}></i>
            </Button>

            <Button
              sx={{
                padding: "0",
                minWidth: "auto",
                fontSize: "30px",
                color: "#9CAAFF",
                flexShrink: 0,
                lineHeight: 1,
              }}
            >
              <i className="ri-arrow-right-s-fill"></i>
            </Button>

            <Button
              sx={{
                padding: "0",
                minWidth: "auto",
                fontSize: "30px",
                color: "#9CAAFF",
                flexShrink: 0,
                lineHeight: 1,
              }}
            >
              <i className="ri-skip-right-fill"></i>
            </Button>
          </Box>

          <Button
            sx={{
              padding: "0",
              minWidth: "auto",
              fontSize: "20px",
              color: "#9CAAFF",
              flexShrink: 0,
              lineHeight: 1,
            }}
            onClick={restartAudio}
          >
            <i className="ri-reset-right-line"></i>
          </Button>
        </Box>
      </Box>

      <audio ref={audioRef} src="https://cldup.com/qR72ozoaiQ.mp3"></audio>
    </Box>
  );
};

export default Player;
