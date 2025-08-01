"use client";

import React from "react";
import { Card, Box, Typography } from "@mui/material";

const TotalExpense = () => {
  return (
    <>
      <Card
        sx={{
          background: "linear-gradient(90deg, #F3E8FF 0%, #FFF 100%)",
          boxShadow: "none",
          borderRadius: "7px",
          mb: "25px",
          padding: { xs: "18px", sm: "20px", lg: "25px" },
        }}
        className="rmui-card for-dark-bg"
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "10px",
          }}
        >
          <Box>
            <Typography sx={{ mb: "5px" }}>Total Expense</Typography>

            <Typography
              variant="h3"
              sx={{
                fontSize: { xs: "17px", md: "20px" },
                fontWeight: 700,
                mb: "22px",
              }}
            >
              $18,950
            </Typography>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <Box
                sx={{
                  border: "1px solid",
                  borderRadius: "30px",
                  backgroundColor: "error.50",
                  color: "error.main",
                  borderColor: "error.40",
                  lineHeight: 1,
                  fontSize: "12px",
                  display: "inline-block",
                  fontWeight: 500,
                  p: "3.5px 9px",
                  textTransform: "capitalize",
                }}
              >
                -18.1%
              </Box>

              <Typography sx={{ fontSize: "12px" }}>Last month</Typography>
            </Box>
          </Box>

          <Box
            sx={{
              width: "75px",
              height: "75px",
              backgroundColor: "purple.100",
              color: "purple.main",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <i
              className="material-symbols-outlined"
              style={{ fontSize: "35px" }}
            >
              payments
            </i>
          </Box>
        </Box>
      </Card>
    </>
  );
};

export default TotalExpense;
