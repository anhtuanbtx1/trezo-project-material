"use client";

import { Card, Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const NewMarketingTool = () => {
  return (
    <>
      <Card
        style={{
          background: "linear-gradient(162deg, #D7B5FD 3.82%, #9947F5 98.54%)",
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
            py: { md: "11px" },
            maxWidth: { md: "212px" },
          }}
        >
          <Typography
            component="h3"
            sx={{
              fontSize: { xs: "18px", md: "24px" },
              lineHeight: "1.3",
              mb: { xs: "15px", md: "30px" },
              fontWeight: "700",
              maxWidth: "185px",
              mx: "auto",
            }}
          >
            <span style={{ fontWeight: "400" }}>Want To Try</span> New Marketing
            Tool?
          </Typography>

          <img
            src="/images/marketing-tool.png"
            className="mx-auto"
            alt="marketing-tool"
            width={240}
            height={214}
          />

          <Link to="#" target="_blank" rel="noreferrer">
            <Button
              variant="contained"
              className="bg-purple-700"
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
              Contact Us
            </Button>
          </Link>
        </Box>
      </Card>
    </>
  );
};

export default NewMarketingTool;
