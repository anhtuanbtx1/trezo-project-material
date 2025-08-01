"use client";

import React from "react";
import { Typography, Box } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";

const TimePickerInput = () => {
  return (
    <>
      <Box>
        <Typography
          component="h5"
          sx={{
            fontWeight: "500",
            fontSize: "14px",
            mb: "15px",
          }}
          className="text-black"
        >
          Time Picker
        </Typography>

        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <TimePicker
            sx={{
              width: "100%",
              "& fieldset": {
                border: "1px solid rgba(0, 0, 0, 0.23)",
                borderRadius: "7px",
              },
            }}
            className="input-date-picker"
          />
        </LocalizationProvider>
      </Box>
    </>
  );
};

export default TimePickerInput;
