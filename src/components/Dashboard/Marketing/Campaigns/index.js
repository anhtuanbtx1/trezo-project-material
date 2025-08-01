"use client";

import React, { useState } from "react";
import { Card, Box, Typography, Tabs, Tab } from "@mui/material";
import AllCampaigns from "./AllCampaigns";
import PendingCampaigns from "./PendingCampaigns";
import CompletedCampaigns from "./CompletedCampaigns";
import AddCampaigns from "./AddCampaigns";

const Campaigns = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
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
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mb: "0",
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
          Campaigns
        </Typography>

        <Box>
          <AddCampaigns />
        </Box>
      </Box>

      <Box>
        <Tabs
          value={selectedTab}
          onChange={handleTabChange}
          textColor="secondary"
          indicatorColor="secondary"
          className="border-bottom"
          sx={{
            mb: "5px",
            button: {
              fontWeight: "600",
              fontSize: "12px",
            },
          }}
        >
          <Tab label="All (05)" />
          <Tab label="Pending (34)" />
          <Tab label="Completed (07)" />
        </Tabs>

        <Box sx={{ height: "345px", overflowY: "auto" }}>
          {selectedTab === 0 && <AllCampaigns />}
          {selectedTab === 1 && <PendingCampaigns />}
          {selectedTab === 2 && <CompletedCampaigns />}
        </Box>
      </Box>
    </Card>
  );
};

export default Campaigns;
