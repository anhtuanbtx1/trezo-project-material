"use client";

import { Card, Box, Typography } from "@mui/material";

const TotalExpenses = () => {
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
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box>
            <Typography sx={{ mb: "3px" }}>Total Expenses</Typography>

            <Typography
              variant="h5"
              sx={{
                mb: "0",
                fontSize: "20px",
                fontWeight: "700",
              }}
            >
              $251,952
            </Typography>
          </Box>

          <Box
            className="bg-purple-50"
            sx={{
              width: { xs: "55px", sm: "60px" },
              height: { xs: "55px", sm: "60px" },
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "purple.600",
            }}
          >
            <i className="material-symbols-outlined">account_balance_wallet</i>
          </Box>
        </Box>

        <Box
          sx={{
            mt: "15px",
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <Box
            sx={{
              display: "inline-block",
              px: "8.5px",
              color: "orange.700",
              border: "1px solid",
              borderColor: "orange.300",
              bgcolor: "orange.100",
              fontSize: "12px",
              borderRadius: "100px",
            }}
          >
            -28.5%
          </Box>

          <Typography sx={{ fontSize: "12px" }}>Last 30 days</Typography>
        </Box>
      </Card>
    </>
  );
};

export default TotalExpenses;
