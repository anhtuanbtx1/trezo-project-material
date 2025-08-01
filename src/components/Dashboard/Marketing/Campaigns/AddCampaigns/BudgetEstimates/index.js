"use client";

import React, { useState } from "react";
import {
  Box,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  Slider,
} from "@mui/material";

const BudgetEstimates = () => {
  const [dailyBudget, setDailyBudget] = useState(1000); // Default budget set to 1000
  const [budgetType, setBudgetType] = useState("continuous");

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
        Budget Estimates
      </Typography>

      {/* Budget Type Section */}
      <Box sx={{ mb: 3 }}>
        <RadioGroup
          row
          value={budgetType}
          onChange={(e) => setBudgetType(e.target.value)}
          sx={{
            display: { xs: "block", sm: "grid" },
            gridTemplateColumns: "1fr 1fr",
            gap: 2,
          }}
        >
          <Box
            sx={{
              border: "2px dashed",
              borderColor: "divider",
              borderRadius: 1,
              p: 2,
            }}
          >
            <FormControlLabel
              value="continuous"
              control={<Radio className="dark-radio" />}
              label={
                <Box>
                  <Typography
                    variant="h3"
                    sx={{ fontWeight: 500, fontSize: "15px", mb: "5px" }}
                    className="text-black"
                  >
                    Continuous Duration
                  </Typography>
                  <Typography component="p">
                    Your Ad will run continuously for a daily budget.
                  </Typography>
                </Box>
              }
            />
          </Box>

          <Box
            sx={{
              border: "2px dashed",
              borderColor: "divider",
              borderRadius: 1,
              p: 2,
            }}
          >
            <FormControlLabel
              value="fixed"
              control={<Radio className="dark-radio" />}
              label={
                <Box>
                  <Typography
                    variant="h3"
                    sx={{ fontWeight: 500, fontSize: "15px", mb: "5px" }}
                    className="text-black"
                  >
                    Fixed Duration
                  </Typography>
                  <Typography component="p">
                    Your Ad will run only on specified dates.
                  </Typography>
                </Box>
              }
            />
          </Box>
        </RadioGroup>
      </Box>

      {/* Daily Budget Section */}
      <Box sx={{ mb: 3 }}>
        <Typography variant="subtitle1" sx={{ fontWeight: 500 }}>
          Daily Budget
        </Typography>
        <Box>
          <Slider
            value={dailyBudget}
            min={100}
            max={10000}
            step={100}
            onChange={(e, newValue) => setDailyBudget(newValue)}
            valueLabelDisplay="auto"
            sx={{
              "& .MuiSlider-thumb": {
                bgcolor: "primary.main",
              },
            }}
          />
          <Typography
            variant="body1"
            sx={{
              mt: 2,
              textAlign: "center",
              fontWeight: 600,
              color: "text.primary",
            }}
          >
            Selected Daily Budget: <strong>${dailyBudget}</strong>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default BudgetEstimates;
