"use client";

import React from "react";
import { Grid, Card, Box, Typography } from "@mui/material";
import DefaultSelect from "./DefaultSelect";
import MultipleSelect from "./MultipleSelect";
import MultipleSelectChip from "./MultipleSelectChip";

const Select = () => {
  return (
    <>
      <Card
        sx={{
          boxShadow: "none",
          borderRadius: "7px",
          mb: "25px",
          padding: { xs: "18px", sm: "20px", lg: "25px" },
        }}
        className="rmui-card"
      >
        <Box
          sx={{
            mb: "25px",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: "16px", md: "18px" },
              fontWeight: 700,
            }}
            className="text-black"
          >
            Select
          </Typography>
        </Box>

        <Grid
          container
          spacing={2}
          columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}
        >
          <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 4 }}>
            <DefaultSelect />
          </Grid>

          <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 4 }}>
            <MultipleSelect />
          </Grid>

          <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 4 }}>
            <MultipleSelectChip />
          </Grid>
        </Grid>
      </Card>
    </>
  );
};

export default Select;
