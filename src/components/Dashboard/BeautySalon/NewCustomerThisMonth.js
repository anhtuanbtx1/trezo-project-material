"use client";

import React from "react";
import { Card, Box, Typography, Avatar, AvatarGroup } from "@mui/material";

const NewCustomerThisMonth = () => {
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
        <Typography
          className="fs-14 d-block mb-2"
          sx={{
            fontSize: "14px",
            mb: "10px",
          }}
        >
          New Customer This Month
        </Typography>

        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: "24px", md: "32px" },
            lineHeight: 1,
            fontWeight: 700,
            mb: "10px",
          }}
        >
          14.5K
        </Typography>

        <Box
          sx={{
            display: "inline-block",
            bgcolor: "success.100",
            border: "1px solid",
            borderColor: "success.700",
            borderRadius: "30px",
            color: "success.700",
            fontSize: "12px",
            fontWeight: 500,
            padding: "3px 8px",
            lineHeight: 1,
            mb: "10px",
          }}
        >
          +7%
        </Box>

        <Typography fontSize={12}>vs previous 30 days</Typography>

        <AvatarGroup
          max={5}
          sx={{ 
            justifyContent: "start", 
            mt: { xs: "20px", sm: "53px" },
            mb: '10px'
          }}
        >
          <Avatar alt="user" src="/images/beauty-salon/user-1.png" />
          <Avatar alt="user" src="/images/beauty-salon/user-2.png" />
          <Avatar alt="user" src="/images/beauty-salon/user-3.png" />
          <Avatar alt="user" src="/images/beauty-salon/user-4.png" />
          <Avatar alt="user" src="/images/beauty-salon/user-5.png" />
          <Avatar alt="user" src="/images/beauty-salon/user-6.png" />
        </AvatarGroup>

        <Typography 
          sx={{
            fontSize: "12px",
            fontWeight: 500,
            m: "0",
          }}
        >
          Joined Today
        </Typography>
      </Card>
    </>
  );
};

export default NewCustomerThisMonth;
