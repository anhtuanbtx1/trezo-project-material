"use client";

import React, { useState } from "react";
import { Box, Card, Typography, Button } from "@mui/material";
import PlaceBids from "./PlaceBids";
import AdditionalInformation from "./AdditionalInformation";
import Details from "./Details";
import Countdown from "./Countdown";

const Content = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const futureTime = new Date();
  futureTime.setHours(futureTime.getHours() + 5); // Example: 5 hours from now

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
        <Box>
          <Typography
            component="span"
            sx={{ mb: "2px", display: "block", fontSize: "12px" }}
          >
            NFT ID: 35246
          </Typography>

          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "18px", lg: "24px" },
              fontWeight: 700,
            }}
            className="text-black"
          >
            Christmas Eve
          </Typography>

          <Box
            className="border-top"
            sx={{
              mt: "12px",
              mb: "15px",
            }}
          ></Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: { xs: "10px", sm: "40px" },
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <Box
                sx={{
                  position: "relative",
                }}
              >
                <img
                  src="/images/nfts/author.gif"
                  alt="author-image"
                  width={35}
                  height={35}
                  style={{
                    borderRadius: "100%",
                  }}
                />

                <img
                  src="/images/nfts/verified2.svg"
                  className="po-right-0"
                  alt="verified"
                  width={16}
                  height={16}
                  style={{
                    position: "absolute",
                    bottom: "2px",
                  }}
                />
              </Box>

              <Box>
                <Typography
                  component={"span"}
                  sx={{
                    display: "block",
                    fontSize: "12px",
                  }}
                >
                  Creator
                </Typography>

                <Typography
                  component={"span"}
                  className="text-black"
                  sx={{
                    fontWeight: "600",
                    fontSize: { xs: "12px", sm: "14px" },
                    display: "block",
                  }}
                >
                  Anan Loren
                </Typography>
              </Box>
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <img
                src="/images/icons/schedule.svg"
                alt="schedule"
                width={28}
                height={28}
              />

              <Box>
                <Typography
                  component={"span"}
                  sx={{
                    display: "block",
                    fontSize: "12px",
                  }}
                >
                  Published
                </Typography>

                <Typography
                  component={"span"}
                  className="text-black"
                  sx={{
                    fontWeight: "600",
                    fontSize: { xs: "12px", sm: "14px" },
                    display: "block",
                  }}
                >
                  23 June 2024
                </Typography>
              </Box>
            </Box>
          </Box>

          <Box
            className="bg-gray-50"
            sx={{
              mt: "20px",
              py: "19px",
              px: { xs: "20px", md: "25px" },
              borderRadius: "7px",
              display: { xs: "block", sm: "flex" },
              alignItems: "center",
              justifyContent: "space-between",
              gap: "15px",
              textAlign: "center",
            }}
          >
            <Box sx={{ my: { xs: "10px", sm: "0" } }}>
              <Typography
                component={"span"}
                sx={{ display: "block", fontSize: "12px" }}
              >
                Price:
              </Typography>

              <Typography
                component={"span"}
                sx={{
                  display: "block",
                  fontWeight: "600",
                  color: "primary.800",
                }}
              >
                5.50 ETH
              </Typography>
            </Box>

            <Box sx={{ my: { xs: "10px", sm: "0" } }}>
              <Typography
                component={"span"}
                sx={{ display: "block", fontSize: "12px" }}
              >
                Highest Bid:
              </Typography>

              <Typography
                component={"span"}
                sx={{
                  display: "block",
                  fontWeight: "600",
                }}
                className="text-black"
              >
                4.95 ETH
              </Typography>
            </Box>

            <Box sx={{ my: { xs: "10px", sm: "0" } }}>
              <Typography
                component={"span"}
                sx={{ display: "block", fontSize: "12px" }}
              >
                Stock:
              </Typography>

              <Typography
                component={"span"}
                sx={{
                  display: "block",
                  fontWeight: "600",
                }}
                className="text-black"
              >
                130/450
              </Typography>
            </Box>

            <Box sx={{ my: { xs: "10px", sm: "0" } }}>
              <Typography
                component={"span"}
                sx={{ display: "block", fontSize: "12px" }}
              >
                Auction End In:
              </Typography>

              <Countdown endTime={futureTime} />
            </Box>
          </Box>

          <Box>
            <Typography
              variant="h3"
              sx={{
                fontSize: "18px",
                fontWeight: 700,
                mt: { xs: "20px !important", md: "45px !important" },
                mb: "12px",
              }}
            >
              Description
            </Typography>

            <Typography>
              This NFT captures the essence of boundless potential, symbolized
              by a surreal landscape where the sky meets the earth in a dazzling
              fusion of colors. The intricate design features flowing lines that
              blend together, representing the limitless paths we can take in
              life.
            </Typography>
          </Box>

          <Box>
            <Typography
              variant="h3"
              sx={{
                fontSize: "18px",
                fontWeight: 700,
                mt: { xs: "20px !important", md: "45px !important" },
                mb: "12px",
              }}
            >
              Product Description
            </Typography>

            <Box
              sx={{
                display: 'flex',
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

                  "&:hover": {
                    color: "primary.500 !important",
                  },
                }}
                onClick={() => handleTabClick(0)}
                className={` ${activeTab === 0 ? "text-primary" : "text-body"}`}
              >
                Place Bids
              </Button>

              <Button
                type="button"
                sx={{
                  fontWeight: 600,
                  fontSize: "12px",
                  mt: { xs: "12px", sm: "0" },
                  p: "0",
                  letterSpacing: "0.5px",

                  "&:hover": {
                    color: "primary.500 !important",
                  },
                }}
                onClick={() => handleTabClick(1)}
                className={` ${activeTab === 1 ? "text-primary" : "text-body"}`}
              >
                Additional Information
              </Button>

              <Button
                type="button"
                sx={{
                  fontWeight: 600,
                  fontSize: "12px",
                  mt: { xs: "12px", sm: "0" },
                  p: "0",
                  letterSpacing: "0.5px",

                  "&:hover": {
                    color: "primary.500 !important",
                  },
                }}
                onClick={() => handleTabClick(2)}
                className={` ${activeTab === 2 ? "text-primary" : "text-body"}`}
              >
                Details
              </Button>
            </Box>

            <Box>
              {activeTab === 0 && <PlaceBids />}
              {activeTab === 1 && <AdditionalInformation />}
              {activeTab === 2 && <Details />}
            </Box>
          </Box>
        </Box>
      </Card>
    </>
  );
};

export default Content;
