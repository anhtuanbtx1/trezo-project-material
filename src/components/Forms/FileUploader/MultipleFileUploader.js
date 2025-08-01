"use client";

import React, { useState } from "react";
import { Card, Box, Typography } from "@mui/material";

const MultipleFileUploader = () => {
  const [files, setFiles] = useState([]);

  const handleFileChange = (event) => {
    const selectedFiles = event.target.files;
    const fileArray = Array.from(selectedFiles).map((file) =>
      URL.createObjectURL(file)
    );
    setFiles(fileArray);
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
            Multiple File Uploader
          </Typography>
        </Box>

        <Box component="form">
          <input
            type="file"
            multiple
            className="border"
            style={{
              width: "100%",
              padding: "20px",
            }}
            onChange={handleFileChange}
          />

          <Box
            sx={{
              mt: "15px",
              display: "flex",
              flexWrap: "wrap",
              gap: "10px",
            }}
          >
            {files.map((file, index) => (
              <img
                key={index}
                src={file}
                alt={`uploaded-file-${index}`}
                width={60}
                height={60}
                style={{
                  borderRadius: "7px",
                }}
              />
            ))}
          </Box>
        </Box>
      </Card>
    </>
  );
};

export default MultipleFileUploader;
