"use client";

import { Card, Box, Typography } from "@mui/material";

const CostPerThousand = () => {
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
          <div>
            <Typography sx={{ display: "block", mb: "6px" }}>
              Cost Per Thousand
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
              $3.95
            </Typography>
          </div>
          <img
            src="/images/icons/video-advertising.gif"
            alt="video-advertising"
            width={60}
            height={60}
            className="-mr-10"
          />
        </Box>

        <Typography
          component="span"
          className="text-danger"
          sx={{
            bgcolor: "#ffe1dd",
            border: "1px solid #ffcea9",
            borderRadius: "100px",
            fontSize: "13px",
            padding: "2.5px 8px",
            display: "inline-block",
            lineHeight: "1",
          }}
        >
          -1.4%
        </Typography>

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

export default CostPerThousand;
