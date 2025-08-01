"use client";

import { Box, Typography, Card } from "@mui/material";

const AccountsReceivable = () => {
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
              Accounts Receivable
            </Typography>

            <Typography
              component={"h5"}
              sx={{ mb: "0", mt: "3px", fontSize: "20px", fontWeight: "700" }}
            >
              $15,990
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
              color: "primary.600",
              bgcolor: "primary.50",
            }}
          >
            <i className="material-symbols-outlined">money_bag</i>
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
            -5.8%
          </Box>

          <Box sx={{ fontSize: "12px" }}>Last 30 days</Box>
        </Box>
      </Card>
    </>
  );
};

export default AccountsReceivable;
