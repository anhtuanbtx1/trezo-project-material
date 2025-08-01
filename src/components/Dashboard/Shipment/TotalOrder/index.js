"use client";

import { Box, Typography, Card } from "@mui/material";

const TotalOrder = () => {
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
      >
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box>
            <Box
              sx={{
                display: "inline-block",
                px: "8.5px",
                color: "error.600",
                border: "1px solid",
                borderColor: "error.150",
                bgcolor: "error.50",
                fontSize: "12px",
                borderRadius: "100px",
              }}
            >
              -2.5%
            </Box>
          </Box>
          <Box className="text-end">
            <Typography
              component={"span"}
              sx={{
                display: "block",
                fontSize: "12px",
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
                color: "error.main",
                fontSize: "12px",
              }}
            >
              -140
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
            <Typography component={"span"} sx={{ display: "block", mb: "4px" }}>
              Total Order
            </Typography>

            <Typography
              variant="h3"
              sx={{
                mb: "0",
                fontSize: "20px",
                fontWeight: "bold",
              }}
            >
              49,120
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
              bgcolor: "orange.500",
            }}
          >
            <i
              className="material-symbols-outlined"
              style={{ fontSize: "28px" }}
            >
              deployed_code
            </i>
          </Box>
        </Box>
      </Card>
    </>
  );
};

export default TotalOrder;
