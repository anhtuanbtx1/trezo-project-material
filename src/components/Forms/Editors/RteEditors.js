"use client";

import React from "react";
import { Card, Box, Typography } from "@mui/material";
import CustomEditor from "./CustomEditor";

const RteEditors = () => {
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
            Rte Editors
          </Typography>
        </Box>

        <Box>
          <CustomEditor />
        </Box>
      </Card>
    </>
  );
};

export default RteEditors;
