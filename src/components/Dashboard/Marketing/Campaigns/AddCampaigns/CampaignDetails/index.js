"use client";

import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
} from "@mui/material";

const CampaignDetails = () => {
  const [image, setImage] = useState(null);
  const [selectedGoal, setSelectedGoal] = useState("");

  // Handle image upload
  const handleImageUpload = (event) => {
    const file = event.target.files?.[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle radio button selection
  const handleRadioChange = (event) => {
    setSelectedGoal(event.target.value);
  };

  return (
    <>
      <Box sx={{ maxWidth: "625px", margin: "0 auto" }}>
        <Box component="form" noValidate>
          <Typography
            variant="h5"
            sx={{
              fontSize: "18px",
              fontWeight: "700",
              mb: { xs: "20px", lg: "30px" },
            }}
          >
            Campaign Details
          </Typography>

          {/* Campaign Name */}
          <Box sx={{ mb: 4 }}>
            <FormControl fullWidth>
              <FormLabel sx={{ fontWeight: "bold", mb: 1 }}>
                Campaign Name <span style={{ color: "red" }}>*</span>
              </FormLabel>
              <TextField
                variant="outlined"
                placeholder="Christmas Eve"
                InputProps={{
                  style: { borderRadius: 8 },
                }}
              />
            </FormControl>
          </Box>

          {/* Company Logo */}
          <Box sx={{ mb: 4 }}>
            <FormLabel sx={{ fontWeight: "bold", mb: 1, display: "block" }}>
              Company Logo <span style={{ color: "red" }}>*</span>
            </FormLabel>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <input
                type="file"
                id="imageUpload"
                accept=".png, .jpg, .jpeg"
                onChange={handleImageUpload}
                style={{ display: "none" }}
              />
              <Box
                sx={{
                  width: 100,
                  height: 100,
                  borderRadius: "50%",
                  overflow: "hidden",
                  marginBottom: "10px",
                  backgroundImage: image
                    ? `url(${image})`
                    : "url(/images/admin.png)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  border: "1px solid #ddd",
                  boxShadow: "none",
                }}
              ></Box>

              <label htmlFor="imageUpload">
                <Button
                  variant="contained"
                  component="span"
                  sx={{ boxShadow: "none", textTransform: "capitalize" }}
                >
                  Upload Logo
                </Button>
              </label>
            </Box>
          </Box>

          {/* Campaign Goal */}
          <Box sx={{ mb: 4 }}>
            <FormControl component="fieldset" sx={{ width: "100%" }}>
              <FormLabel sx={{ fontWeight: "bold", mb: 1 }}>
                Campaign Goal <span style={{ color: "red" }}>*</span>
              </FormLabel>

              <RadioGroup
                value={selectedGoal}
                onChange={handleRadioChange}
                sx={{ gap: 2 }}
              >
                {[
                  {
                    id: "flexRadioDefault1",
                    label: "Get more visitors",
                    description:
                      "Increase impression traffic onto the platform",
                  },
                  {
                    id: "flexRadioDefault2",
                    label: "Get more messages on chat",
                    description:
                      "Increase community interaction and communication",
                  },
                  {
                    id: "flexRadioDefault3",
                    label: "Get more calls",
                    description:
                      "Boost telecommunication feedback to provide precise and accurate information",
                  },
                  {
                    id: "flexRadioDefault4",
                    label: "Get more likes",
                    description:
                      "Increase positive interactivity on social media platforms",
                  },
                  {
                    id: "flexRadioDefault5",
                    label: "Lead generation",
                    description:
                      "Collect contact information for potential customers",
                  },
                ].map((goal) => (
                  <Box
                    key={goal.id}
                    sx={{
                      paddingBottom: 2,
                    }}
                    className="campaign-goal border-bottom"
                  >
                    <FormControlLabel
                      value={goal.id}
                      control={<Radio className="dark-radio" />}
                      label={goal.label}
                    />
                    <Typography variant="body2" sx={{ ml: 2 }}>
                      {goal.description}
                    </Typography>
                  </Box>
                ))}
              </RadioGroup>
            </FormControl>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default CampaignDetails;
