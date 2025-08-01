"use client";

import React from "react";
import { Box, Typography, Grid } from "@mui/material";

const Welcome = () => {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#FE7A36",
          borderRadius: "7px",
          pt: { xs: "30px", sm: "35px" },
          px: { xs: "30px", sm: "40px", md: "45px", lg: "50px", xl: "100px" },
          pb: { xs: "30px", sm: "40px", md: "45px", lg: "50px", xl: "85px" },
        }}
      >
        <Grid container columnSpacing={{ xs: 3 }} alignItems={"center"}>
          <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
            <Box
              sx={{
                maxWidth: "480px",
                mx: { xs: "auto", lg: "0px" },
                textAlign: { xs: "center", md: "start" },
              }}
            >
              <Typography
                sx={{
                  backgroundColor: "#212529",
                  color: "#FFE8D4",
                  padding: "3px 13px",
                  marginBottom: "10px",
                  display: "inline-block",
                }}
              >
                Hello Olivia!
              </Typography>

              <Typography
                variant="h1"
                className="text-white"
                sx={{
                  fontSize: { xs: "22px", md: "32px" },
                  letterSpacing: "-0.5px",
                  fontWeight: 700,
                }}
              >
                Welcome Back! Ready to Close More Deals Today?
              </Typography>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
            <Box
              sx={{
                textAlign: { xs: "center", lg: "end" },
                mt: { xs: "30px", lg: "0px" },
              }}
            >
              <img
                src="/images/bank.png"
                alt="bank-image"
                width={470}
                height={175}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Welcome;
