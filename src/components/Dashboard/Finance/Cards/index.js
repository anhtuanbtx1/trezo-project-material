"use client";

import { Grid, Box, Typography, Card } from "@mui/material";
import AddCardModal from "./AddCardModal";

const Cards = () => {
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
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mb: "0",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: "16px", md: "18px" },
              fontWeight: 700,
            }}
            className="text-black"
          >
            Cards
          </Typography>

          <AddCardModal />
        </Box>

        <Grid container columnSpacing={{ xs: 3 }}>
          <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 6 }}>
            <Box
              sx={{
                mt: { xs: "20px", md: "25px" },
                p: { xs: "20px", md: "25px" },
                borderRadius: "16px",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
              style={{
                backgroundImage: "url(/images/wallet/card1.jpg)",
              }}
            >
              <Box
                sx={{
                  mb: "7px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  component={"span"}
                  sx={{
                    display: "block",
                    fontWeight: 500,
                    fontSize: "12px",
                  }}
                  className="text-white"
                >
                  Debit Card
                </Typography>
                <Box
                  sx={{ fontSize: "24px", lineHeight: "1", flexShrink: 0 }}
                  className="text-white"
                >
                  <i className="ri-visa-fill"></i>
                </Box>
              </Box>

              <img
                src="/images/icons/card-frame.png"
                alt="card-frame"
                width={45}
                height={30}
              />

              <Typography
                variant="h5"
                sx={{
                  fontWeight: 600,
                  fontSize: "18px",
                  mt: "10px !important",
                  mb: "50px",
                  lineHeight: "1",
                }}
                className="text-white"
                style={{ wordSpacing: "4px" }}
              >
                5322 0520 0744 1794
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  component={"span"}
                  sx={{ display: "block" }}
                  className="text-white"
                >
                  David Farrior
                </Typography>

                <Typography
                  sx={{ display: "block", fontWeight: 500, fontSize: "12px" }}
                  className="text-white"
                >
                  EXP : 12/30
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 6 }}>
            <Box
              sx={{
                mt: { xs: "20px", md: "25px" },
                p: { xs: "20px", md: "25px" },
                borderRadius: "16px",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
              style={{
                backgroundImage: "url(/images/wallet/card2.jpg)",
              }}
            >
              <Box
                sx={{
                  mb: "7px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  component={"span"}
                  sx={{
                    display: "block",
                    fontWeight: 500,
                    fontSize: "12px",
                  }}
                  className="text-white"
                >
                  Virtual Card
                </Typography>
                <Box
                  sx={{ fontSize: "24px", lineHeight: "1", flexShrink: 0 }}
                  className="text-white"
                >
                  <i className="ri-mastercard-fill"></i>
                </Box>
              </Box>

              <img
                src="/images/icons/card-frame.png"
                alt="card-frame"
                width={45}
                height={30}
              />

              <Typography
                variant="h5"
                sx={{
                  fontWeight: 600,
                  fontSize: "18px",
                  mt: "10px !important",
                  mb: "50px",
                  lineHeight: "1",
                }}
                className="text-white"
                style={{ wordSpacing: "4px" }}
              >
                .... .... .... 1794
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  component={"span"}
                  sx={{ display: "block" }}
                  className="text-white"
                >
                  David Farrior
                </Typography>

                <Typography
                  sx={{ display: "block", fontWeight: 500, fontSize: "12px" }}
                  className="text-white"
                >
                  EXP : 12/30
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Card>
    </>
  );
};

export default Cards;
