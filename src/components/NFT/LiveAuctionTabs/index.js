"use client";

import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import AllItems from "./AllItems";
import UpTo15 from "./UpTo15";
import UpTo30 from "./UpTo30";
import UpTo50 from "./UpTo50";

const LiveAuctionTabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <>
      <Box
        className="bg-white"
        sx={{
          mb: "25px",
          p: { xs: "20px", md: "25px" },
          borderRadius: "7px",
        }}
      >
        <Box
          sx={{
            display: { xs: "block", md: "flex" },
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography
            variant="h5"
            sx={{
              mb: "0",
              fontWeight: 700,
              fontSize: "18px",
            }}
          >
            Live Auction
          </Typography>

          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              gap: { xs: "0", sm: "25px", lg: "35px" },
              mt: { xs: "15px", md: "0" },
            }}
          >
            <Button
              type="button"
              sx={{
                fontWeight: 600,
                fontSize: "12px",
                mt: { xs: "12px", sm: "0" },
                p: "0",

                "&:hover": {
                  color: "primary.500 !important",
                },
              }}
              onClick={() => handleTabClick(0)}
              className={` ${activeTab === 0 ? "text-primary" : "text-body"}`}
            >
              ALL ITEMS
            </Button>

            <Button
              type="button"
              sx={{
                fontWeight: 600,
                fontSize: "12px",
                mt: { xs: "12px", sm: "0" },
                p: "0",

                "&:hover": {
                  color: "primary.500 !important",
                },
              }}
              onClick={() => handleTabClick(1)}
              className={` ${activeTab === 1 ? "text-primary" : "text-body"}`}
            >
              UP TO 15%
            </Button>

            <Button
              type="button"
              sx={{
                fontWeight: 600,
                fontSize: "12px",
                mt: { xs: "12px", sm: "0" },
                p: "0",

                "&:hover": {
                  color: "primary.500 !important",
                },
              }}
              onClick={() => handleTabClick(2)}
              className={` ${activeTab === 2 ? "text-primary" : "text-body"}`}
            >
              UP TO 30%
            </Button>

            <Button
              type="button"
              sx={{
                fontWeight: 600,
                fontSize: "12px",
                mt: { xs: "12px", sm: "0" },
                p: "0",

                "&:hover": {
                  color: "primary.500 !important",
                },
              }}
              onClick={() => handleTabClick(3)}
              className={` ${activeTab === 3 ? "text-primary" : "text-body"}`}
            >
              UP TO 50%
            </Button>
          </Box>
        </Box>
      </Box>

      <Box>
        {activeTab === 0 && <AllItems />}
        {activeTab === 1 && <UpTo15 />}
        {activeTab === 2 && <UpTo30 />}
        {activeTab === 3 && <UpTo50 />}
      </Box>
    </>
  );
};

export default LiveAuctionTabs;
