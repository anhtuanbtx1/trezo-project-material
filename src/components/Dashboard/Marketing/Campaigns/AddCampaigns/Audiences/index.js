"use client";

import React, { useState } from "react";
import {
  Box,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  Slider,
  Select,
  MenuItem,
  FormControl,
} from "@mui/material";

const ConfigureAudiences = () => {
  const [gender, setGender] = useState("All");
  const [ageRange, setAgeRange] = useState([18, 50]);
  const [location, setLocation] = useState("Select");
  const [media, setMedia] = useState("Select");
  const [teamMember, setTeamMember] = useState("Select");

  const handleAgeChange = (event, newValue) => {
    setAgeRange(newValue);
  };

  return (
    <Box sx={{ maxWidth: "625px", mx: "auto" }}>
      <Typography
        variant="h5"
        sx={{
          fontSize: "18px",
          fontWeight: "700",
          mb: "20px",
        }}
      >
        Configure Audiences
      </Typography>

      {/* Gender Section */}
      <Box sx={{ mb: { xs: 3, md: 3, lg: 4 } }}>
        <Typography
          variant="subtitle1"
          sx={{ mb: 2, fontWeight: 600, color: "text.secondary" }}
        >
          Gender
        </Typography>
        <RadioGroup
          row
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          sx={{
            display: { xs: "block", sm: "grid" },
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 2,
          }}
        >
          {["All", "Male", "Female"].map((g) => (
            <Box
              key={g}
              sx={{
                border: "2px dashed",
                borderColor: "divider",
                borderRadius: 1,
                p: "5px 20px",
              }}
            >
              <FormControlLabel
                value={g}
                control={
                  <Radio
                    sx={{
                      "& .MuiSvgIcon-root": { fontSize: 22 },
                      "&.Mui-checked": { color: "primary.main" },
                    }}
                    className="dark-radio"
                  />
                }
                label={g}
              />
            </Box>
          ))}
        </RadioGroup>
      </Box>

      {/* Age Section */}
      <Box sx={{ mb: { xs: 2, md: 2, lg: 2 } }}>
        <Typography
          variant="subtitle1"
          sx={{ mb: 1, fontWeight: 600, color: "text.secondary" }}
        >
          Age
        </Typography>
        <Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mb: 2,
              color: "text.primary",
            }}
          >
            <Typography>{ageRange[0]}</Typography>
            <Typography>{ageRange[1]}</Typography>
          </Box>
          <Slider
            value={ageRange}
            onChange={handleAgeChange}
            min={1}
            max={50}
            step={1}
            valueLabelDisplay="auto"
            sx={{
              "& .MuiSlider-thumb": {
                bgcolor: "primary.main",
              },
            }}
          />
        </Box>
      </Box>

      {/* Location Section */}
      <Box sx={{ mb: { xs: 3, md: 3, lg: 4 } }}>
        <Typography
          variant="subtitle1"
          sx={{ mb: 1, fontWeight: 600, color: "text.secondary" }}
        >
          Location
        </Typography>
        <FormControl fullWidth>
          <Select value={location} onChange={(e) => setLocation(e.target.value)}>
            <MenuItem value="Select" disabled>
              Select
            </MenuItem>
            {["United States", "Switzerland", "Germany", "Sweden", "Denmark"].map(
              (loc) => (
                <MenuItem key={loc} value={loc}>
                  {loc}
                </MenuItem>
              )
            )}
          </Select>
        </FormControl>
      </Box>

      {/* Media Section */}
      <Box sx={{ mb: { xs: 3, md: 3, lg: 4 } }}>
        <Typography
          variant="subtitle1"
          sx={{ mb: 1, fontWeight: 600, color: "text.secondary" }}
        >
          Media
        </Typography>
        <FormControl fullWidth>
          <Select value={media} onChange={(e) => setMedia(e.target.value)}>
            <MenuItem value="Select" disabled>
              Select
            </MenuItem>
            {["Facebook", "Instagram", "LinkedIn", "Twitter", "Threads"].map(
              (mediaOption) => (
                <MenuItem key={mediaOption} value={mediaOption}>
                  {mediaOption}
                </MenuItem>
              )
            )}
          </Select>
        </FormControl>
      </Box>

      {/* Team Member Section */}
      <Box sx={{ mb: { xs: 3, md: 3, lg: 4 } }}>
        <Typography
          variant="subtitle1"
          sx={{ mb: 1, fontWeight: 600, color: "text.secondary" }}
        >
          Team Member
        </Typography>
        <FormControl fullWidth>
          <Select
            value={teamMember}
            onChange={(e) => setTeamMember(e.target.value)}
          >
            <MenuItem value="Select" disabled>
              Select
            </MenuItem>
            {[
              "Olivia Smith",
              "Jason Smith",
              "Alina Lyes",
              "Jonathon Ronan",
              "Walter White",
            ].map((member) => (
              <MenuItem key={member} value={member}>
                {member}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </Box>
  );
};

export default ConfigureAudiences;
