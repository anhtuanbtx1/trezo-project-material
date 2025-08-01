"use client";

import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom"; 

const ManageYourNFT = () => {
  return (
    <>
      <Box
        sx={{
          p: { xs: "20px", md: "25px" },
          borderRadius: "7px",
          position: "relative",
          mb: "25px",
        }}
        style={{
          background: "linear-gradient(92deg, #23272E 7.31%, #3F5272 97.89%)",
        }}
      >
        <Box
          sx={{
            position: "relative",
            zIndex: "1",
            py: { md: "33px" },
            px: { md: "15px" },
            display: { lg: "flex" },
            gap: "5px",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box>
            <Typography
              variant="h3"
              sx={{
                fontSize: { xs: "25px", md: "28px" },
                mb: "5px",
                fontWeight: "600",
              }}
              className="text-white"
            >
              Manage Your NFT From One Place
            </Typography>

            <Typography className="text-gray-300" sx={{ mb: "0" }}>
              The world’s first and largest digital marketplace for discover,
              collect, sell and create your own NFTs.
            </Typography>
          </Box>

          <Box>
            <Link
              to="/nft/create/"
              className="text-[15px] md:text-md mt-[15px] lg:mt-0 rounded-[4px] bg-primary-500 text-white font-medium py-[7px] px-[30px] transition-all hover:bg-primary-400 inline-block"
            >
              <Button
                sx={{
                  fontSize: { xs: "12px", xl: "16px" },
                  mt: { xs: "15px", lg: "0px" },
                  borderRadius: "4px",
                  bgcolor: "primary.500",
                  color: "#fff !important",
                  fontWeight: "500",
                  py: "11px",
                  px: "30px",
                  textTransform: "capitalize",
                  lineHeight: "1",

                  "&:hover": {
                    bgcolor: "primary.400",
                  },
                }}
              >
                Create NFT
              </Button>
            </Link>
          </Box>
        </Box>

        <img
          src="/images/nfts/shape.png"
          className="po-right-0"
          alt="shape"
          width={210}
          height={180}
          style={{
            position: "absolute",
            top: "0",
            right: "0",
          }}
        />
      </Box>
    </>
  );
};

export default ManageYourNFT;
