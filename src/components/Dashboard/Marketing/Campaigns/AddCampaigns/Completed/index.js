"use client";

import React from "react";
import { Box, Typography, Button } from "@mui/material";

const Completed = () => {
  return (
    <Box
      sx={{
        maxWidth: "625px",
        mx: "auto",
        textAlign: "center",
        mb: 5,
      }}
    >
      {/* Image Section */}
      <Box sx={{ mb: 2 }}>
        <img
          src="/images/created.png"
          alt="crested"
          width={308}
          height={308}
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </Box>

      {/* Title */}
      <Typography
        variant="h4"
        sx={{ 
          mb: '10px', 
          fontWeight: 600,  
          fontSize: {xs: '20px', md: '24px'}
        }}
        className="text-black"
      >
        Campaign Completed!
      </Typography>

      {/* Description */}
      <Typography
        component='p'
        sx={{
          mx: "auto",
          mb: 4,
          maxWidth: "463px",
          color: "text.secondary",
        }}
      >
        You will receive an email with the summary of your newly created
        campaign!
      </Typography>

      {/* Buttons */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: 2,
        }}
      >
        <Button
          variant="contained"
          size="large"
          sx={{
            bgcolor: '#526077',
            color: "#fff !important", 
            textTransform: 'capitalize',
            boxShadow: 'none',
            borderRadius: '10px',
            fontSize: '15px'
          }}
        >
          Create New Campaign{" "}
          <Box
            component="i"
            className="ri-arrow-right-line"
            sx={{ ml: 1 }}
          ></Box>
        </Button>

        <Button
          variant="contained"
          size="large"
          sx={{
            bgcolor: "primary.main",
            color: "#fff !important", 
            textTransform: 'capitalize',
            boxShadow: 'none',
            borderRadius: '10px',
            fontSize: '15px'
          }}
        >
          View Campaign{" "}
          <Box
            component="i"
            className="ri-arrow-right-line"
            sx={{ ml: 1 }}
          ></Box>
        </Button>
      </Box>
    </Box>
  );
};

export default Completed;
