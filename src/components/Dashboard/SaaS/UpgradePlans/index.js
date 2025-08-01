"use client";

import * as React from "react";
import { Box, Typography, Link } from "@mui/material";

const UpgradePlans = () => {
  return (
    <>
      <Box
        sx={{
          p: { xs: "20px", md: "25px" },
          borderRadius: "7px",
          textAlign: "center",
        }}
        style={{
          background: "linear-gradient(164deg, #B95232 3.1%, #EB6D5C 99.22%)",
        }}
      >
        <Box
          sx={{
            py: { md: "30px" },
            maxWidth: { md: "209px" },
            mx: "auto",
          }}
        >
          <Typography
            variant="h3"
            className="text-white"
            sx={{
              fontSize: { xs: "16px", md: "24px" },
              lineHeight: "1.3",
              mb: "16px",
              fontWeight: 700,
            }}
          >
            Have A Team More Than 10 Members?
          </Typography>

          <Link
            href="#"
            target="_blank"
            rel="noreferrer"
            sx={{
              display: "inline-block",
              borderRadius: "5px",
              bgcolor: "#23272e",
              color: "#fff !important",
              fontSize: {xs: '15px', md: '16px'}, 
              fontWeight: 500,
              py: "6px",
              px: "16.5px",
              mb: {xs: '15px', md: '32px' },	

              "&:hover": {
                bgcolor: "#3a4252",
              }
            }}
          >
            Upgrade Plans
          </Link>

          <img
            src="/images/paper.png"
            alt="paper-image"
            width={207}
            height={188}
            style={{
              marginLeft: "auto",
              marginRight: "auto",
              display: 'block'
            }}
          />
        </Box>
      </Box>
    </>
  );
};

export default UpgradePlans;
