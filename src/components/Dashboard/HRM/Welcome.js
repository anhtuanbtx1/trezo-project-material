"use client";

import { Box, Typography, Button } from "@mui/material";

const Welcome = () => {
  return (
    <>
      <Box
        sx={{
          mb: "25px",
        }}
      >
        <Box
          sx={{
            display: { xs: "block", md: "flex" },
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box>
            <Typography
              variant="h5"
              sx={{
                mb: { xs: "6px", md: "3px" },
                fontWeight: "600",
                fontSize: "20px",
              }}
            >
              Welcome Back,{" "}
              <Typography
                component={"span"}
                sx={{
                  fontWeight: "600",
                  fontSize: "20px",
                }}
                className="text-primary"
              >
                Olivia!
              </Typography>
            </Typography>

            <Typography>
              Monitor and manage employee performance, attendance and more in
              one place.
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              mt: { xs: "12px", lg: "0" },
            }}
          >
            <Button
              type="button"
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "4px",
                color: "purple.700",
                bgcolor: "purple.100",
                borderRadius: "4px",
                py: "4.5px",
                px: { xs: "10px", md: "12.5px" },
                transition: "all 0.2s ease-in-out",
                textTransform: "capitalize",

                "&:hover": {
                  bgcolor: "purple.200",
                },
              }}
            >
              <img
                src="/images/icons/crown.svg"
                alt="crown"
                width={18}
                height={18}
              />
              Plan Upgrade
            </Button>

            <Button
              type="button"
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "4px",
                color: "orange.700",
                bgcolor: "orange.100",
                borderRadius: "4px",
                py: "4.5px",
                px: { xs: "10px", md: "12.5px" },
                transition: "all 0.2s ease-in-out",
                textTransform: "capitalize",

                "&:hover": {
                  bgcolor: "orange.200",
                },
              }}
            >
              <img
                src="/images/icons/file-download.svg"
                alt="file-download"
                width={18}
                height={18}
              />
              Export Reports
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Welcome;
