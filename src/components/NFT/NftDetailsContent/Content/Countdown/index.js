import React, { useState, useEffect } from "react";
import { Typography } from "@mui/material";

const calculateTimeLeft = (endTime) => {
  const now = new Date();
  const difference = new Date(endTime).getTime() - now.getTime();

  if (difference > 0) {
    return {
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }
  return { hours: 0, minutes: 0, seconds: 0 }; // Return zero when time is up
};

const Countdown = ({ endTime }) => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(endTime));
    }, 1000);

    return () => clearInterval(timer); // Cleanup the interval on component unmount
  }, [endTime]); // Dependency array includes 'endTime'

  return (
    <Typography
      component={"span"}
      sx={{
        display: "flex",
        justifyContent: "center",
        fontWeight: "600",
        gap: "5px",
      }}
      className="text-black"
    >
      <span className="hours-span">
        <span className="hours">{timeLeft.hours}</span>h
      </span>
      <span className="minutes-span">
        <span className="minutes">{timeLeft.minutes}</span>m
      </span>
      <span className="seconds-span">
        <span className="seconds">{timeLeft.seconds}</span>s
      </span>
    </Typography>
  );
};

export default Countdown;
