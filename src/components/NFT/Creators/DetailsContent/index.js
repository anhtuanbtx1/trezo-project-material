"use client";

import { Box, Typography, Grid, Button, Card } from "@mui/material";
import Content from "./Content";

const DetailsContent = () => {
  return (
    <>
      <Grid
        container
        columnSpacing={{ xs: 1, sm: 2, md: 3, lg: 3 }}
        justifyContent="center"
      >
        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 4 }}>
          <Card
            sx={{
              position: "relative",
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
                gap: "17px",
                mb: { xs: "20px", md: "25px" },
              }}
            >
              <img
                src="/images/nfts/creator-author.jpg"
                alt="creator-author"
                width={65}
                height={65}
                style={{
                  borderRadius: "100%",
                }}
              />
              <Box>
                <Typography
                  component={"h4"}
                  sx={{
                    fontSize: { xs: "16px", md: "24px" },
                    mb: "4px",
                    fontWeight: "700",
                  }}
                >
                  Angela Carter
                </Typography>

                <Typography component={"span"} sx={{ fontSize: "12px" }}>
                  ID: 35246
                </Typography>
              </Box>
            </Box>

            <Box
              sx={{
                display: "flex",
                alignContent: "center",
                justifyContent: "space-between",
                mb: { xs: "20px", md: "25px" },
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: "14px" }}>
                <img
                  src="/images/icons/schedule.svg"
                  alt="schedule"
                  width={30}
                  height={30}
                />
                <Box>
                  <Typography
                    component={"span"}
                    sx={{ display: "block", fontSize: "12px" }}
                  >
                    Published
                  </Typography>

                  <Typography
                    component={"span"}
                    sx={{ display: "block", fontWeight: "600" }}
                    className="text-black"
                  >
                    23 June 2024
                  </Typography>
                </Box>
              </Box>

              <Button
                type="button"
                sx={{
                  borderRadius: "7px",
                  py: "6px",
                  px: "19px",
                  fontWeight: "500",
                  bgcolor: "primary.500",
                  color: "white !important",
                  textTransform: "capitalize",
                  fontSize: "14px",

                  "&:hover": {
                    bgcolor: "primary.400",
                  },
                }}
              >
                Follow
              </Button>
            </Box>

            <Box
              className="bg-gray-50"
              sx={{
                py: { xs: "20px", md: "25px" },
                px: { xs: "20px", md: "30px" },
                bgcolor: "gray.50",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "15px",
                borderRadius: "7px",
                textAlign: "center",
              }}
            >
              <Box>
                <Typography
                  component={"span"}
                  sx={{
                    display: "block",
                    fontSize: "12px",
                  }}
                >
                  Total NFT
                </Typography>

                <Typography
                  component={"span"}
                  sx={{
                    display: "block",
                    fontWeight: "600",
                    color: "primary.800",
                  }}
                >
                  156
                </Typography>
              </Box>

              <Box>
                <Typography
                  component={"span"}
                  sx={{
                    display: "block",
                    fontSize: "12px",
                  }}
                >
                  Total Earned
                </Typography>

                <Typography
                  component={"span"}
                  sx={{
                    display: "block",
                    fontWeight: "600",
                    color: "primary.800",
                  }}
                >
                  1234ETH
                </Typography>
              </Box>

              <Box>
                <Typography
                  component={"span"}
                  sx={{
                    display: "block",
                    fontSize: "12px",
                  }}
                >
                  Auction
                </Typography>
                <Typography
                  component={"span"}
                  sx={{
                    display: "block",
                    fontWeight: "600",
                    color: "primary.800",
                  }}
                >
                  45
                </Typography>
              </Box>
            </Box>

            <Typography
              variant="h3"
              className="text-lg mt-[20px] md:mt-[25px] mb-[10px]"
              sx={{
                fontSize: { xs: "16px", md: "18px" },
                mt: { xs: "20px !important", md: "25px !important" },
                mb: "10px",
                fontWeight: "700",
              }}
            >
              Description
            </Typography>

            <Typography sx={{ lineHeight: "1.7" }}>
              This NFT captures the essence of boundless potential, symbolized
              by a surreal landscape where the sky meets the earth in a dazzling
              fusion of colors. The intricate design features flowing lines that
              blend together, representing the limitless paths we can take in
              life.
            </Typography>
          </Card>
        </Grid>

        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 8 }}>
          <Content />
        </Grid>
      </Grid>
    </>
  );
};

export default DetailsContent;
