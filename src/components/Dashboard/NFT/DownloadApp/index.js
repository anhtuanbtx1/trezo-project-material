"use client";

import * as React from "react";
import { Box, Typography, Link } from "@mui/material";

const DownloadApp = () => {
  return (
    <>
      <Box
        style={{
          background: "linear-gradient(153deg, #FAD2D2 0%, #6FA3EC 100%)",
        }}
        sx={{
          p: { xs: "20px", md: "25px" },
          textAlign: "center",
          borderRadius: "10px",
        }}
      >
        <Box
          className="py-px relative"
          sx={{
            maxWidth: { md: "245px" },
            mx: "auto",
          }}
        >
          <Typography
            component="h3"
            sx={{
              fontSize: { xs: "18px", md: "20px" },
              lineHeight: "1.2",
              mb: { xs: "15px", md: "20px" },
              fontWeight: "700",
            }}
          >
            <span style={{ fontWeight: "normal" }}>Have You Tried Our</span> New
            Mobile App?
          </Typography>

          <Box sx={{ textAlign: "center" }}>
            <img
              src="/images/nfts/nft-app.png"
              alt="nft-app-image"
              width={170}
              height={188}
              style={{ marginLeft: "áuto", marginRight: "áuto" }}
            />
          </Box>

          <Link
            href="#"
            target="_blank"
            rel="noreferrer"
            sx={{
              mt: { mt: "15px", md: "22px" },
              display: "inline-block",
              borderRadius: "10px",
              bgcolor: "primary.main",
              color: "#fff !important",
              fontSize: { xs: "15px", md: "16px" },
              fontWeight: "500",
              py: "6px",
              px: "16px",

              "&:hover": {
                opacity: ".9",
              },
            }}
          >
            Download App
          </Link>

          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 w-[201px] h-[201px] rounded-full bg-white opacity-[.15] -z-[1] mx-auto"></div>
        </Box>
      </Box>
    </>
  );
};

export default DownloadApp;
