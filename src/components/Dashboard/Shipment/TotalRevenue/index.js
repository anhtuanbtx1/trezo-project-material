"use client";

import { Box, Typography, Card } from "@mui/material";

const TotalShipment = () => {
  return (
    <>
      <Card
        sx={{
          boxShadow: "none",
          borderRadius: "7px",
          mb: "25px",
          padding: { xs: "25px" },
        }}
        className="rmui-card"
        style={{
          background: "linear-gradient(108deg, #3A4252 0%, #23272E 100%)",
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box>
            <Box
              sx={{
                display: "inline-block",
                px: "8.5px",
                color: "success.600",
                border: "1px solid",
                borderColor: "success.300",
                bgcolor: "success.100",
                fontSize: "12px",
                borderRadius: "100px",
              }}
            >
              +30%
            </Box>
          </Box>
          <Box className="text-end">
            <Typography
              component={"span"}
              sx={{
                display: "block",
                fontSize: "12px",
                color: "grey.300",
                mb: "1px",
              }}
            >
              Last 30 days
            </Typography>

            <Typography
              component={"span"}
              sx={{
                display: "block",
                fontWeight: "bold",
                color: "success.500",
                fontSize: "12px",
              }}
            >
              $13,250
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            mt: { xs: "20px", md: "25px" },
            display: "flex",
            alignItems: "end",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Typography
              component={"span"}
              sx={{ display: "block", mb: "4px", color: "grey.300" }}
            >
              Total Revenue
            </Typography>

            <Typography
              variant="h3"
              sx={{
                mb: "0",
                fontSize: "20px",
                color: "white !important",
                fontWeight: "bold",
              }}
            >
              $99,590
            </Typography>
          </Box>

          <Box
            sx={{
              width: { xs: "55px", md: "60px" },
              height: { xs: "55px", md: "60px" },
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "100px",
              color: "white",
              bgcolor: "success.500",
            }}
          >
            <i
              className="material-symbols-outlined"
              style={{ fontSize: "28px" }}
            >
              attach_money
            </i>
          </Box>
        </Box>
      </Card>
    </>
  );
};

export default TotalShipment;
