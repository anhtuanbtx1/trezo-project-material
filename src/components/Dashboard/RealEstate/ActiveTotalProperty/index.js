"use client";

import { Box, Typography, Card } from "@mui/material";

const ActiveTotalProperty = () => {
  return (
    <>
      <Card
        sx={{
          position: "relative",
          overflow: "hidden",
          boxShadow: "none",
          borderRadius: "7px",
          mb: "25px",
          px: { xs: "20px", md: "25px" },
          pt: { xs: "20px", md: "25px" },
        }}
        className="rmui-card"
        style={{
          background: "linear-gradient(101deg, #FE7A36 0%, #FD5812 100%)",
        }}
      >
        <Box
          sx={{
            mt: "-3px", 
          }}
        >
          <Box
            sx={{
              mb: "-3px",
            }}
          >
            <Typography
              sx={{ display: "block", mb: "0" }}
              className="text-white"
            >
              Active Total Property
            </Typography>

            <Typography
              component="h3"
              sx={{ mb: "0", fontWeight: "700", fontSize: "20px" }}
              className="text-white"
            >
              507,020
            </Typography>
          </Box>

          <Box className="-mb-5 -mr-25 text-end">
            <img
              src="/images/man-searching-house.png"
              alt="man-searching-house.png"
              width={188}
              height={125}
              style={{ display: "inline-block" }}
            />
          </Box>
        </Box>

        <img
          src="/images/icons/4dot2.svg"
          className="po-left-0"
          alt="4dot"
          style={{
            position: "absolute",
            bottom: "0",
          }}
          width={60}
          height={60}
        />
      </Card>
    </>
  );
};

export default ActiveTotalProperty;
