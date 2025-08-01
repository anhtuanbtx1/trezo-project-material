"use client";

import { Card, Box, Typography } from "@mui/material";

const ClickThroughRate = () => {
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
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mb: "10px",
            gap: "10px",
          }}
        >
          <Box>
            <Typography sx={{ display: "block", mb: "6px" }}>
              Click Through Rate
            </Typography>
            <Typography
              component="h3"
              sx={{
                fontSize: { xs: "20px", md: "28px", lg: "32px" },
                mb: "0",
                fontWeight: 700,
                lineHeight: "1",
              }}
            >
              $2.95
            </Typography>
          </Box>
          <img
            src="/images/icons/ads2.gif"
            alt="ads2"
            width={60}
            height={60}
            className="-mr-10"
          />
        </Box>

        <Box 
          color="success"
          sx={{
            bgcolor: "#d8ffc8",
            border: "1px solid #82FC5A",
            borderRadius: "100px",
            fontSize: "13px",
            padding: "2.5px 8px",
            display: "inline-block",
            lineHeight: "1",
          }}
        >
          +7%
        </Box>

        <Typography
          component="span"
          sx={{
            display: "block",
            fontSize: "12px",
            mt: "10px",
          }}
        >
          vs previous 30 days
        </Typography>
      </Card>
    </>
  );
};

export default ClickThroughRate;
