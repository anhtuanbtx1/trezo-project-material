"use client";

import React, { useState } from "react";
import { Box, Card, Typography, Button } from "@mui/material";
import All from "./All";
import InAction from "./InAction";
import Sold from "./Sold";

const Content = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
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
        <Typography
          variant="h3"
          sx={{
            fontSize: "18px",
            fontWeight: 700,
            mb: "12px",
          }}
        >
          Angela’s NFTs
        </Typography>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: { xs: "15px", sm: "25px", lg: "35px" },
            mt: "20px",
            mb: "20px",
          }}
        >
          <Button
            type="button"
            sx={{
              fontWeight: 600,
              fontSize: "12px",
              mt: { xs: "12px", sm: "0" },
              p: "0",
              letterSpacing: "0.5px",
              minWidth: "auto",

              "&:hover": {
                color: "primary.500 !important",
              },
            }}
            onClick={() => handleTabClick(0)}
            className={` ${activeTab === 0 ? "text-primary" : "text-body"}`}
          >
            All
          </Button>

          <Button
            type="button"
            sx={{
              fontWeight: 600,
              fontSize: "12px",
              mt: { xs: "12px", sm: "0" },
              p: "0",
              letterSpacing: "0.5px",
              minWidth: "auto",

              "&:hover": {
                color: "primary.500 !important",
              },
            }}
            onClick={() => handleTabClick(1)}
            className={` ${activeTab === 1 ? "text-primary" : "text-body"}`}
          >
            IN AUCTION
          </Button>

          <Button
            type="button"
            sx={{
              fontWeight: 600,
              fontSize: "12px",
              mt: { xs: "12px", sm: "0" },
              p: "0",
              letterSpacing: "0.5px",
              minWidth: "auto",

              "&:hover": {
                color: "primary.500 !important",
              },
            }}
            onClick={() => handleTabClick(2)}
            className={` ${activeTab === 2 ? "text-primary" : "text-body"}`}
          >
            SOLD
          </Button>
        </Box>

        <Box>
          {activeTab === 0 && <All />}
          {activeTab === 1 && <InAction />}
          {activeTab === 2 && <Sold />}
        </Box>
      </Card>
    </>
  );
};

export default Content;
