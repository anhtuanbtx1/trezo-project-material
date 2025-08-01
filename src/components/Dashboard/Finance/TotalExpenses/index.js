"use client";

import { Box, Typography, Card } from "@mui/material";

const TotalExpenses = () => {
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
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Typography component={"span"} sx={{ display: "block" }}>
              Total Expenses
            </Typography>

            <Typography
              component={"h5"}
              sx={{ mb: "0", mt: "3px", fontSize: "20px", fontWeight: "700" }}
            >
              $251,952
            </Typography>
          </Box>

          <Box
            sx={{
              width: { xs: "55px", md: "60px" },
              height: { xs: "55px", md: "60px" },
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "100%",
              color: "purple.600",
              bgcolor: "purple.50",
            }}
          >
            <i className="material-symbols-outlined">account_balance_wallet</i>
          </Box>
        </Box>

        <Box
          sx={{
            mt: { xs: "15px", md: "20px" },
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <Box
            sx={{
              display: "inline-block",
              px: "8.5px",
              color: "error.700",
              border: "1px solid",
              borderColor: "error.300",
              bgcolor: "error.100",
              borderRadius: "100px",
              fontSize: "12px",
            }}
          >
            -28.5%
          </Box>

          <Box sx={{ fontSize: "12px" }}>Last 30 days</Box>
        </Box>
      </Card>
    </>
  );
};

export default TotalExpenses;
