"use client";

import React, { useState } from "react";
import { Card, Box, Typography } from "@mui/material";

const SimpleFileUploader = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    const uploadedFile = event.target.files[0];
    if (uploadedFile) {
      setFile(URL.createObjectURL(uploadedFile)); // Generate file preview URL
    }
  };

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
            Simple File Uploader
          </Typography>
        </Box>

        <Box component="form">
          <input
            type="file"
            className="border"
            style={{
              width: "100%",
              padding: "20px",
            }}
            onChange={handleFileChange}
          />

          {file && (
            <Box
              sx={{
                mt: "15px",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <img
                src={file}
                alt="preview"
                width={60}
                height={60}
                style={{
                  borderRadius: "7px",
                }}
              />
            </Box>
          )}
        </Box>
      </Card>
    </>
  );
};

export default SimpleFileUploader;
