"use client";

import { Box, Typography } from "@mui/material";

const AdditionalInformation = () => {
  return (
    <>
      <Box>
        <Box
          className="border"
          sx={{
            py: "11px",
            px: "20px",
            fontSize: "12px",
            mb: "-1px",
          }}
        >
          <Typography
            component={"span"}
            className="text-black"
            sx={{ fontSize: "12px" }}
          >
            Brand:
          </Typography>{" "}
          Apple
        </Box>

        <Box
          className="border"
          sx={{
            py: "11px",
            px: "20px",
            fontSize: "12px",
            mb: "-1px",
          }}
        >
          <Typography
            component={"span"}
            className="text-black"
            sx={{ fontSize: "12px" }}
          >
            Model:
          </Typography>{" "}
          MacBook Pro
        </Box>

        <Box
          className="border"
          sx={{
            py: "11px",
            px: "20px",
            fontSize: "12px",
            mb: "-1px",
          }}
        >
          <Typography
            component={"span"}
            className="text-black"
            sx={{ fontSize: "12px" }}
          >
            Price:
          </Typography>{" "}
          $2499
        </Box>

        <Box
          className="border"
          sx={{
            py: "11px",
            px: "20px",
            fontSize: "12px",
            mb: "-1px",
          }}
        >
          <Typography
            component={"span"}
            className="text-black"
            sx={{ fontSize: "12px" }}
          >
            Dimensions (mm):
          </Typography>{" "}
          304.10 x 212.40 x 14.90
        </Box>

        <Box
          className="border"
          sx={{
            py: "11px",
            px: "20px",
            fontSize: "12px",
            mb: "-1px",
          }}
        >
          <Typography
            component={"span"}
            className="text-black"
            sx={{ fontSize: "12px" }}
          >
            Weight (kg):
          </Typography>{" "}
          1.37
        </Box>

        <Box
          className="border"
          sx={{
            py: "11px",
            px: "20px",
            fontSize: "12px",
            mb: "-1px",
          }}
        >
          <Typography
            component={"span"}
            className="text-black"
            sx={{ fontSize: "12px" }}
          >
            Colors:
          </Typography>{" "}
          Space Grey
        </Box>

        <Box
          className="border"
          sx={{
            py: "11px",
            px: "20px",
            fontSize: "12px",
            mb: "-1px",
          }}
        >
          <Typography
            component={"span"}
            className="text-black"
            sx={{ fontSize: "12px" }}
          >
            Operating system:
          </Typography>{" "}
          macOS
        </Box>

        <Box
          className="border"
          sx={{
            py: "11px",
            px: "20px",
            fontSize: "12px",
            mb: "-1px",
          }}
        >
          <Typography
            component={"span"}
            className="text-black"
            sx={{ fontSize: "12px" }}
          >
            Battery Life (up to hours):
          </Typography>{" "}
          10
        </Box>
      </Box>
    </>
  );
};

export default AdditionalInformation;
