"use client";

import { Card, Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const DownloadMobileApp = () => {
  return (
    <>
      <Card
        style={{
          background: "linear-gradient(150deg, #827CD8 0.57%, #2D2761 95.93%)",
        }}
        sx={{
          boxShadow: "none",
          borderRadius: "7px",
          mb: "25px",
          padding: { xs: "20px", lg: "25px" },
          textAlign: "center",
        }}
      >
        <Box
          sx={{
            mx: "auto",
            py: { md: "13px" },
            maxWidth: { width: "245px" },
          }}
        >
          <Typography
            component="h3"
            sx={{
              color: "#fff !important",
              fontSize: { xs: "18px", md: "24px" },
              lineHeight: "1.3",
              mb: { xs: "15px", md: "30px" },
              fontWeight: "700",
            }}
          >
            <span style={{ fontWeight: "400" }}>Have You Tried Our</span> New
            Mobile App?
          </Typography>

          <img
            src="/images/app.png"
            className="mx-auto"
            alt="app-image"
            width={240}
            height={214}
          />

          <Link to="#" target="_blank" rel="noreferrer">
            <Button
              variant="contained"
              color="primary"
              sx={{
                boxShadow: "none",
                borderRadius: "7px",
                padding: "4px 16px",
                fontSize: { xs: "13px", md: "16px" },
                fontWeight: "500",
                textTransform: "capitalize",
                color: "#fff !important",
                display: "inline-block",
                mt: { xs: "15px", md: "30px" },
              }}
            >
              Download Mobile App
            </Button>
          </Link>
        </Box>
      </Card>
    </>
  );
};

export default DownloadMobileApp;
