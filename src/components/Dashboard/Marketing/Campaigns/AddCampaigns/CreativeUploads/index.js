"use client";

import React, { useState } from "react";
import {
  Box,
  Typography,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const CreativeUploads = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ maxWidth: "625px", margin: "0 auto" }}>
      {/* Upload Section */}
      <Box>
        <Typography
          variant="h6"
          sx={{
            fontSize: "18px",
            fontWeight: "700",
            mb: "20px",
          }}
        >
          Upload Files
        </Typography>

        <Box
          sx={{
            border: "2px dashed #5DA8FF",
            p: 4,
            borderRadius: 2,
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "5px",
          }}
        >
          <UploadFileIcon sx={{ fontSize: 46, color: "#5DA8FF" }} />
          <Box>
            <Typography variant="subtitle1">
              Drop campaign files here or click to upload.
            </Typography>
            <Typography variant="body2">
              Upload up to 12 files, max size each file: 5MB.
            </Typography>
          </Box>
          <input
            type="file"
            id="upload-files"
            multiple
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              opacity: 0,
              cursor: "pointer",
            }}
          />
        </Box>
      </Box>

      {/* Uploaded Files Section */}
      <Box sx={{ mt: 5 }}>
        <Typography
          variant="h6"
          sx={{
            fontSize: "18px",
            fontWeight: "700",
            mb: "20px",
          }}
        >
          Uploaded Files
        </Typography>

        {[
          {
            name: "Campaign Requirements",
            description: "Increase impression traffic onto the platform",
            icon: "/images/icons/pdf.png",
          },
          {
            name: "Campaign’s Mission and Vision",
            description: "Increase impression traffic onto the platform",
            icon: "/images/icons/doc.png",
          },
          {
            name: "Campaign Banner",
            description: "Increase impression traffic onto the platform",
            icon: "/images/icons/xl4.png",
          },
          {
            name: "Campaign Image",
            description: "Increase impression traffic onto the platform",
            icon: "/images/icons/jpg.png",
          },
        ].map((file, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 3,
              pb: 2,
            }}
            className="border-bottom"
          >
            {/* File Info */}
            <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <Box sx={{ flexShrink: 0 }}>
                <img src={file.icon} alt={file.name} width={35} height={35} />
              </Box>
              <Box>
                <Typography variant="subtitle1" sx={{ fontWeight: "600" }}>
                  {file.name}
                </Typography>
                <Typography component="p" color="textSecondary">
                  {file.description}
                </Typography>
              </Box>
            </Box>

            {/* Action Menu */}
            <IconButton onClick={handleMenuClick}>
              <MoreVertIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              PaperProps={{
                style: {
                  boxShadow: "none",
                  border: "1px solid #ccc",
                },
              }}
            >
              <MenuItem
                onClick={handleMenuClose}
                sx={{
                  fontSize: "13px",
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                }}
              >
                <EditIcon sx={{ fontSize: "15px" }} />
                Edit
              </MenuItem>
              <MenuItem
                onClick={handleMenuClose}
                sx={{
                  fontSize: "13px",
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                }}
              >
                <VisibilityIcon sx={{ fontSize: "15px" }} />
                View
              </MenuItem>
              <MenuItem
                onClick={handleMenuClose}
                sx={{
                  fontSize: "13px",
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                }}
              >
                <DeleteIcon sx={{ fontSize: "15px" }} />
                Delete
              </MenuItem>
            </Menu>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default CreativeUploads;
