"use client";

import { Grid, Box, Typography, Card } from "@mui/material";

const CustomerVisit = () => {
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
        <Typography
          variant="h3"
          sx={{
            fontSize: { xs: "16px", md: "18px" },
            fontWeight: 700,
            mb: "25px",
          }}
          className="text-black"
        >
          Customer Visit
        </Typography>

        <Box sx={{ position: "relative", zIndex: 1 }}>
          <Grid container justifyContent="center">
            <Grid size={{ sm: 6 }}>
              <Box
                sx={{
                  backgroundColor: "#F6F7F9",
                  textAlign: "center",
                  borderRadius: "50%",
                  mb: "10px",
                  width: "25px",
                  height: "25px",
                }}
              >
                <i className="ri-user-3-fill"></i>
              </Box>

              <Typography sx={{ mb: "10px" }}>
                Walk-In <br /> Customer
              </Typography>

              <Typography
                variant="h3"
                sx={{
                  mb: "10px",
                  fontSize: { xs: "22px", sm: "28px" },
                  fontWeight: 700,
                }}
              >
                1.5K
              </Typography>

              <Box
                sx={{
                  bgcolor: "#37d80a1a",
                  color: "success.500",
                  border: "1px solid",
                  borderColor: "success.500",
                  padding: "3px 8px",
                  borderRadius: "30px",
                  fontSize: "12px",
                  fontWeight: "500",
                  display: "inline-block",
                  lineHeight: 1,
                }}
              >
                +7%
              </Box>
            </Grid>

            <Grid size={{ sm: 6 }} className="border-left">
              <Box className="text-end">
                <Box
                  sx={{
                    backgroundColor: "#F6F7F9",
                    textAlign: "center",
                    borderRadius: "50%",
                    mb: "10px",
                    width: "25px",
                    height: "25px",
                    display: "inline-block",
                  }}
                >
                  <i className="ri-user-received-2-fill"></i>
                </Box>

                <Typography sx={{ mb: "10px" }}>
                  Repeat <br /> Customer
                </Typography>

                <Typography
                  variant="h3"
                  sx={{
                    mb: "10px",
                    fontSize: { xs: "22px", sm: "28px" },
                    fontWeight: 700,
                  }}
                >
                  2.1K
                </Typography>

                <Box
                  sx={{
                    bgcolor: "#fd58121a",
                    color: "error.500",
                    border: "1px solid",
                    borderColor: "error.500",
                    padding: "3px 8px",
                    borderRadius: "30px",
                    fontSize: "12px",
                    fontWeight: "500",
                    display: "inline-block",
                    lineHeight: 1,
                  }}
                >
                  -1.4%
                </Box>
              </Box>
            </Grid>
          </Grid>

          <Box
            sx={{
              bgcolor: "#605dff1a",
              color: "primary.main",
              textAlign: "center",
              borderRadius: "50%",
              position: "absolute",
              top: "50%",
              transform: "translateY(-50%)",
              width: "33px",
              height: "33px",
              lineHeight: "45px",
              left: "0",
              right: "0",
              mx: "auto",
            }}
          >
            <span className="material-symbols-outlined">bolt</span>
          </Box>
        </Box>

        <Box sx={{ mt: "20px" }}>
          <Box
            sx={{
              bgcolor: "success.main",
              borderRadius: "30px",
              height: "8px",
            }}
          >
            <Box
              sx={{
                bgcolor: "primary.main",
                borderRadius: "30px",
                width: "32%",
                height: "8px",
              }}
            ></Box>
          </Box>

          <Box
            sx={{ display: "flex", justifyContent: "space-between", mt: "5px" }}
          >
            <Typography fontSize={"12px"}>32%</Typography>
            <Typography fontSize={"12px"}>64%</Typography>
          </Box>
        </Box>
      </Card>
    </>
  );
};

export default CustomerVisit;
