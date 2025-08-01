"use client";

import React, { useState } from "react";
import {
  Box,
  Typography,
  IconButton,
  Dialog,
  Button,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import AddIcon from "@mui/icons-material/Add";
import ClearIcon from "@mui/icons-material/Clear";
import CampaignDetails from "./CampaignDetails";
import CreativeUploads from "./CreativeUploads";
import Audiences from "./Audiences";
import BudgetEstimates from "./BudgetEstimates";
import Completed from "./Completed";

// Modal
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialog-paper": {
    width: "100%", // Full width
    maxWidth: "100%", // Ensure no maximum width is applied
    borderRadius: 0, // Optional: Set border radius to 0 for a clean look
  },
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

// Main Component
const AddCampaigns = () => {
  const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleTabClick = (index) => setActiveTab(index);

  const handleNext = () => {
    if (activeTab < 5) setActiveTab((prev) => prev + 1);
  };

  const handleBack = () => {
    if (activeTab > 0) setActiveTab((prev) => prev - 1);
  };

  return (
    <>
      <Button
        onClick={handleClickOpen}
        type="submit"
        variant="outlined"
        sx={{
          textTransform: "capitalize",
          borderRadius: "8px",
          fontWeight: "500",
          fontSize: "14px",
          padding: "5px 14px",
          color: "primary.500",
        }}
      >
        <AddIcon /> Add Campaigns
      </Button>

      {/* Modal */}
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        fullWidth
        maxWidth={false} // Disable default maxWidth
        className="rmu-modal"
      >
        <Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              background: "#f6f7f9",
              padding: { xs: "15px 20px", md: "35px 45px" },
            }}
            className="rmu-modal-header"
          >
            <Typography
              id="modal-modal-title"
              variant="h6"
              sx={{
                fontWeight: "700",
                fontSize: { xs: "18px", md: "24px" },
              }}
              className="text-black"
            >
              Create Campaigns
            </Typography>

            <IconButton aria-label="remove" size="medium" onClick={handleClose}>
              <ClearIcon />
            </IconButton>
          </Box>

          <Box
            sx={{
              padding: { xs: "20px", sm: "40px" },
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
                gap: "15px",
                textAlign: "center",
                maxWidth: "960px",
                mx: "auto",
                mb: { xs: "20px", md: "30px", lg: "50px" },
              }}
            >
              <Box
                className={`text-black ${
                  activeTab === 0 ? "text-primary border-color-primary" : ""
                }`}
                onClick={() => handleTabClick(0)}
                sx={{
                  fontSize: "12px",
                  fontWeight: "500",
                  textTransform: "uppercase",
                  cursor: "pointer",
                  letterSpacing: "1px",
                  borderBottom: "2px solid transparent",
                  pb: "5px",

                  "&:hover": { color: "primary.main" },
                }}
              >
                CAMPAIGN DETAILS
              </Box>

              <Box
                className={`text-black ${
                  activeTab === 1 ? "text-primary border-color-primary" : ""
                }`}
                onClick={() => handleTabClick(1)}
                sx={{
                  fontSize: "12px",
                  fontWeight: "500",
                  textTransform: "uppercase",
                  cursor: "pointer",
                  letterSpacing: "1px",
                  borderBottom: "2px solid transparent",
                  pb: "5px",

                  "&:hover": { color: "primary.main" },
                }}
              >
                CREATIVE UPLOADS
              </Box>

              <Box
                className={`text-black ${
                  activeTab === 2 ? "text-primary border-color-primary" : ""
                }`}
                onClick={() => handleTabClick(2)}
                sx={{
                  fontSize: "12px",
                  fontWeight: "500",
                  textTransform: "uppercase",
                  cursor: "pointer",
                  letterSpacing: "1px",
                  borderBottom: "2px solid transparent",
                  pb: "5px",

                  "&:hover": { color: "primary.main" },
                }}
              >
                AUDIENCES
              </Box>

              <Box
                className={`text-black ${
                  activeTab === 3 ? "text-primary border-color-primary" : ""
                }`}
                onClick={() => handleTabClick(3)}
                sx={{
                  fontSize: "12px",
                  fontWeight: "500",
                  textTransform: "uppercase",
                  cursor: "pointer",
                  letterSpacing: "1px",
                  borderBottom: "2px solid transparent",
                  pb: "5px",

                  "&:hover": { color: "primary.main" },
                }}
              >
                BUDGET ESTIMATES
              </Box>

              <Box
                className={`text-black ${
                  activeTab === 4 ? "text-primary border-color-primary" : ""
                }`}
                onClick={() => handleTabClick(4)}
                sx={{
                  fontSize: "12px",
                  fontWeight: "500",
                  textTransform: "uppercase",
                  cursor: "pointer",
                  letterSpacing: "1px",
                  borderBottom: "2px solid transparent",
                  pb: "5px",

                  "&:hover": { color: "primary.main" },
                }}
              >
                COMPLETED
              </Box>
            </Box>

            <Box>
              {activeTab === 0 && <CampaignDetails />}
              {activeTab === 1 && <CreativeUploads />}
              {activeTab === 2 && <Audiences />}
              {activeTab === 3 && <BudgetEstimates />}
              {activeTab === 4 && <Completed />}

              {/* Back & Continue Button */}
              <Box
                className="buttons"
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  margin: "auto",
                  maxWidth: "625px",
                }}
              >
                <Button
                  id="prevButton"
                  variant="outlined"
                  onClick={handleBack}
                  disabled={activeTab === 0}
                  sx={{
                    textTransform: "capitalize",
                    borderRadius: "8px",
                    fontWeight: "500",
                    fontSize: "13px",
                    padding: "5px 20px",
                  }}
                >
                  Back
                </Button>
                <Button
                  id="nextButton"
                  variant="contained"
                  onClick={handleNext}
                  disabled={activeTab === 5}
                  sx={{
                    textTransform: "capitalize",
                    borderRadius: "8px",
                    fontWeight: "500",
                    fontSize: "13px",
                    padding: "5px 20px",
                    color: "#fff !important",
                  }}
                >
                  Continue
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </BootstrapDialog>
    </>
  );
};

export default AddCampaigns;
