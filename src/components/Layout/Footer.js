"use client";

import * as React from "react";
import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <>
      <Box
        className="footer-area"
        sx={{
          textAlign: "center",
          bgcolor: "#fff",
          borderRadius: "7px 7px 0 0",
          padding: "20px 25px",
        }}
      >
        <Typography>
          © <span className="text-purple">Trezo</span> is Proudly Owned by{" "}
          <a
            href="https://envytheme.com/"
            target="_blank"
            rel="noreferrer"
            className="text-primary"
            style={{
              textDecoration: "none",
            }}
          >
            EnvyTheme
          </a>
        </Typography>
      </Box>
    </>
  );
};

export default Footer;
