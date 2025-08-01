"use client";

import { Grid, Box, Typography, Card } from "@mui/material"; 

const Welcome = () => {
  return (
    <>
      <Card
        sx={{
          background: "linear-gradient(104deg, #361E7D 2.4%, #403CFF 112.33%)",
          padding: "24px",
          borderRadius: "10px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "15px",
          }}
        >
          <Box
            sx={{ 
              paddingX: { xs: "0", sm: "25px", xl: "25px" },
              pb: { xs: "0", sm: "30px" }
            }}
          >
            <Typography
              sx={{ color: "#C2CDFF !important", fontWeight: 500, mb: "5px" }}
            >
              Hello William ✋
            </Typography>

            <Typography
              variant="h3"
              sx={{
                fontSize: { xs: "20px", sm: "24px", md: "28px" },
                color: "#fff !important",
                fontWeight: 900,
                mb: 0,
              }}
            >
              <Typography
                component={"span"}
                sx={{
                  color: "#fff !important",
                  fontSize: { xs: "20px", sm: "24px", md: "28px" },
                }}
              >
                Welcome To
              </Typography>{" "}
              Your Store!
            </Typography>
          </Box>

          <Box sx={{ py: { xs: 0, sm: "4px" } }}>
            <img
              src="/images/store-analytics/store.png"
              alt="store"
              width={208}
              height={144}
            />
          </Box>
        </Box>
      </Card>

      <Box
        sx={{
          marginTop: "-48px",
          paddingX: { xs: "0", sm: "24px", xl: "48px" },
        }}
      >
        <Grid
          container
          columnSpacing={{ xs: 1, sm: 2, md: 3, lg: 3 }}
          justifyContent="center"
        >
          <Grid size={{ xs: 12, sm: 6, md: 4, lg: 4, xl: 4 }}>
            <Card
              sx={{
                boxShadow: "none",
                borderRadius: "7px",
                mb: "25px",
                padding: { xs: "18px", sm: "20px", lg: "25px" },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "5px",
                }}
              >
                <Box>
                  <Typography sx={{ mb: "5px" }}>New Customer</Typography>

                  <Typography
                    variant="h2"
                    sx={{
                      mb: "10px",
                      fontSize: { xs: "22px", sm: "28px" },
                      fontWeight: 700,
                    }}
                  >
                    14.5K
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
                </Box>

                <div className="flex-shrink-0">
                  <Box
                    sx={{
                      bgcolor: "#605dff40",
                      color: "primary.main",
                      width: "48px",
                      height: "48px",
                      lineHeight: "48px",
                      textAlign: "center",
                      borderRadius: "50%",
                      fontSize: "24px",
                    }}
                  >
                    <i className="ri-user-3-fill"></i>
                  </Box>
                </div>
              </Box>
            </Card>
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 4, lg: 4, xl: 4 }}>
            <Card
              sx={{
                boxShadow: "none",
                borderRadius: "7px",
                mb: "25px",
                padding: { xs: "18px", sm: "20px", lg: "25px" },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "5px",
                }}
              >
                <Box>
                  <Typography sx={{ mb: "5px" }}>Sales</Typography>

                  <Typography
                    variant="h2"
                    sx={{
                      mb: "10px",
                      fontSize: { xs: "22px", sm: "28px" },
                      fontWeight: 700,
                    }}
                  >
                    $64.5K
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

                <div className="flex-shrink-0">
                  <Box
                    sx={{
                      bgcolor: "#37d80a1a",
                      color: "success.main",
                      width: "48px",
                      height: "48px",
                      lineHeight: "48px",
                      textAlign: "center",
                      borderRadius: "50%",
                      fontSize: "24px",
                    }}
                  >
                    <i className="ri-money-dollar-circle-line"></i>
                  </Box>
                </div>
              </Box>
            </Card>
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 4, lg: 4, xl: 4 }}>
            <Card
              sx={{
                boxShadow: "none",
                borderRadius: "7px",
                mb: "25px",
                padding: { xs: "18px", sm: "20px", lg: "25px" },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "5px",
                }}
              >
                <Box>
                  <Typography sx={{ mb: "5px" }}>Products</Typography>

                  <Typography
                    variant="h2"
                    sx={{
                      mb: "10px",
                      fontSize: { xs: "22px", sm: "28px" },
                      fontWeight: 700,
                    }}
                  >
                    11.9K
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
                </Box>

                <div className="flex-shrink-0">
                  <Box
                    sx={{
                      bgcolor: "#ad63f640",
                      color: "purple.main",
                      width: "48px",
                      height: "48px",
                      lineHeight: "48px",
                      textAlign: "center",
                      borderRadius: "50%",
                      fontSize: "24px",
                    }}
                  >
                    <i className="ri-layout-grid-fill"></i>
                  </Box>
                </div>
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Welcome;
