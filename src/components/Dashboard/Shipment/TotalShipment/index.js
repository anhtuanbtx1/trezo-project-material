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
              +45%
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
                color: "purple.main",
                fontSize: "12px",
              }}
            >
              +20,300
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
              Total Shipment
            </Typography>

            <Typography
              variant="h3"
              sx={{
                mb: "0",
                fontSize: "20px",
                fontWeight: "bold",
              }}
            >
              175,950
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
              bgcolor: "purple.main",
            }}
          >
            <i
              className="material-symbols-outlined"
              style={{ fontSize: "28px" }}
            >
              local_shipping
            </i>
          </Box>
        </Box>
      </Card>
    </>
  );
};

export default TotalShipment;
