"use client";

import React, { useState, useRef } from "react";
import { Box, Typography, Paper } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import DeleteIcon from "@mui/icons-material/Delete";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import ImageIcon from "@mui/icons-material/Image";

const FileUpload = ({ onFileSelect }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const fileInputRef = useRef(null);

  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!isDragging) {
      setIsDragging(true);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFiles(e.dataTransfer.files);

      // Optional: Clear the input
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
  };

  const handleFileSelect = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      handleFiles(e.target.files);
    }
  };

  const handleFiles = (files) => {
    const newFiles = Array.from(files).map((file) => ({
      file,
      id: generateUniqueId(),
    }));

    setUploadedFiles((prev) => [...prev, ...newFiles]);

    if (onFileSelect) {
      onFileSelect(files);
    }
  };

  const generateUniqueId = () => {
    return Date.now().toString(36) + Math.random().toString(36).substring(2);
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return "0 Bytes";

    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  const handleDeleteFile = (id) => {
    setUploadedFiles((prev) => prev.filter((file) => file.id !== id));
  };

  const handleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const getFileIcon = (fileName) => {
    const extension = fileName.split(".").pop()?.toLowerCase();

    if (
      ["jpg", "jpeg", "png", "gif", "svg", "webp"].includes(extension || "")
    ) {
      return <ImageIcon fontSize="small" />;
    }

    return <InsertDriveFileIcon fontSize="small" />;
  };

  return (
    <>
      <Paper
        elevation={0}
        sx={{
          borderRadius: 1,
          p: 2,
          width: "100%",
          maxWidth: "100%",
          height: 150,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
          backgroundColor: "white",
          "&:hover": {
            backgroundColor: "#f5f5f5",
          },
          transition: "background-color 0.3s",
        }}
        onDragEnter={handleDragEnter}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={handleClick}
        className="upload-file-paper"
      >
        <input
          ref={fileInputRef}
          type="file"
          style={{ display: "none" }}
          onChange={handleFileSelect}
          multiple
        />

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 1,
          }}
        >
          <CloudUploadIcon
            sx={{
              fontSize: 30,
              color: "primary.main",
              mb: 1,
            }}
          />
          <Box>
            <Typography component="span" sx={{ display: "inline" }}>
              <Typography
                component="span"
                sx={{ fontWeight: 500 }}
                className="text-black"
              >
                Drag and drop{" "}
                <Typography component="span" color="text.secondary">
                  files <br /> or click here
                </Typography>
              </Typography>
            </Typography>
          </Box>
        </Box>
      </Paper>

      {/* Upload file list */}
      {uploadedFiles.map((fileItem) => (
        <Box
          key={fileItem.id}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "5px",
            mt: "10px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "10px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "30px",
                height: "30px",
                borderRadius: "5px",
                flexShrink: 0,
              }}
              className="border"
            >
              {getFileIcon(fileItem.file.name)}
            </Box>

            <Typography sx={{ fontSize: "12px" }}>
              {fileItem.file.name} ({formatFileSize(fileItem.file.size)})
            </Typography>
          </Box>

          <Box
            sx={{
              cursor: "pointer",
              ":hover": { color: "error.main" },
            }}
            onClick={() => handleDeleteFile(fileItem.id)}
          >
            <DeleteIcon fontSize="small" />
          </Box>
        </Box>
      ))}
    </>
  );
};

export default FileUpload;