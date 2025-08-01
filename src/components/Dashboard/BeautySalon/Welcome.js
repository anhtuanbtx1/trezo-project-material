"use client";

import { Card, Box, Typography, Grid } from "@mui/material";

const Welcome = () => {
  return (
    <>
      <Card
        sx={{
          background: "linear-gradient(90deg, #EAB9D2 0%, #EBA2C7 100%)",
          border: "none",
          borderRadius: "10px",
          boxShadow: "none",
          overflow: "hidden",
          position: "relative",
          mb: "25px",
        }}
      >
        <Grid
          container
          columnSpacing={{ xs: 1, sm: 2, md: 3, lg: 3 }}
          justifyContent="center"
          alignItems={"end"}
        >
          <Grid size={{ xs: 12, sm: 7, md: 7, lg: 7, xl: 6 }}>
            <Box
              sx={{
                padding: { xs: "18px", sm: "20px", lg: "25px" },
              }}
            >
              <Box position={"relative"}>
                <img
                  src="/images/beauty-salon/shape-13.png"
                  className="po-left-0 p-5 px-4"
                  alt="shape"
                  width={60}
                  height={60}
                  style={{
                    position: "absolute",
                    top: "-20px",
                  }}
                />

                <Typography
                  sx={{
                    fontSize: { xs: "16px", md: "18px" },
                    mb: "15px",
                    color: "#000 !important",
                  }}
                >
                  Hello Joanna!
                </Typography>
              </Box>

              <Typography
                variant="h3"
                sx={{
                  fontSize: { xs: "22px", md: "28px" },
                  fontWeight: 900,
                  mb: "20px",
                  color: "#000 !important",
                }}
              >
                Welcome To Your Beauty Lounge
              </Typography>

              <Typography sx={{ color: "#3A4252 !important" }}>
                You have 15.7% more bookings today.
              </Typography>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, sm: 5, md: 5, lg: 5, xl: 6 }}>
            <Box
              className="text-end"
              sx={{
                mb: "-5px",
                paddingTop: { xs: "18px", sm: "20px", lg: "25px" },
                px: { xs: "18px", sm: "20px", lg: "25px" },
              }}
            >
              <img
                src="/images/beauty-salon/welcome.png"
                alt="beauty-salon"
                width={243}
                height={270}
              />
            </Box>
          </Grid>
        </Grid>
      </Card>
    </>
  );
};

export default Welcome;
