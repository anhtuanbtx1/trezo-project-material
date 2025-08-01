"use client";

import React from "react";
import { Card, Box, Typography } from "@mui/material";

const DailyLimit = () => {
  return (
    <>
      <Card
        sx={{
          boxShadow: "none",
          borderRadius: "7px",
          mb: "25px",
          padding: "10px",
        }}
        className="rmui-card"
      >
        <Box
          sx={{
            backgroundColor: "success.50",
            borderRadius: "7px",
            padding: { xs: "18px", sm: "20px", lg: "25px" },
            mb: "10px",
          }}
          className="for-dark-bg"
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Box>
              <Typography sx={{ mb: "3px" }}>Daily Limit</Typography>

              <Typography
                variant="h5"
                sx={{ fontWeight: 700, fontSize: "20px" }}
              >
                $5,000{" "}
                <Typography
                  component={"span"}
                  sx={{ fontSize: "14px", fontWeight: 400 }}
                  className="text-body"
                >
                  /$2250
                </Typography>
              </Typography>
            </Box>
            <Box>
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
                -45.9%
              </Box>
            </Box>
          </Box>

          <Box sx={{ mt: "13px" }}>
            <Box
              sx={{
                height: "10px",
                backgroundColor: "#B2FF97",
                borderRadius: "5px",
              }}
            >
              <Box
                sx={{
                  width: "85%",
                  height: "10px",
                  backgroundColor: "#37d80a",
                  borderRadius: "5px",
                }}
              ></Box>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "success.500",
            borderRadius: "7px",
            position: "relative",
            paddingX: { xs: "18px", sm: "20px", lg: "25px" },
            paddingY: { xs: "18px" },
          }}
        >
          <img
            src="/images/avatar-with-laptop.png"
            alt="avatar-with-laptop"
            width={75}
            height={85}
          />

          <Box>
            <Typography sx={{ color: "#fff !important" }}>
              Get a Platinum Card
            </Typography>
            <Typography
              component={"h5"}
              className="mb-0"
              sx={{
                fontSize: "20px",
                fontWeight: 700,
                color: "#fff !important",
              }}
            >
              <Typography
                component={"span"}
                sx={{ fontSize: "14px", color: "#fff !important" }}
              >
                For
              </Typography>{" "}
              Free
            </Typography>
          </Box>

          <Box
            className="po-right-0"
            sx={{
              position: "absolute",
              bottom: "-5px",
            }}
          >
            <img
              src="/images/icons/4dots.png"
              alt="4dots"
              width={68}
              height={68}
            />
          </Box>
        </Box>
      </Card>
    </>
  );
};

export default DailyLimit;
