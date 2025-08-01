"use client";

import React, { useState } from "react";
import { Grid, Box, Typography, Card } from "@mui/material";
import Reviews from "./Reviews";

const DishDetailsContent = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <>
      <Grid
        container
        columnSpacing={{ xs: 1, sm: 2, md: 3, lg: 3 }}
        justifyContent="center"
      >
        <Grid size={{ xs: 12, sm: 12, md: 4, lg: 4, xl: 4 }}>
          <Box sx={{ mb: "25px" }}>
            <Box
              className="bg-white"
              sx={{
                padding: "13px",
                borderRadius: "7px",
                mb: "15px",
              }}
            >
              {activeTab === 0 && (
                <img
                  src="/images/restaurant/dish-details1.jpg"
                  alt="dish"
                  width={640}
                  height={660}
                  style={{
                    borderRadius: "7px",
                    width: "100%",
                    display: "block",
                  }}
                />
              )}
              {activeTab === 1 && (
                <img
                  src="/images/restaurant/dish-details2.jpg"
                  alt="dish"
                  width={640}
                  height={660}
                  style={{
                    borderRadius: "7px",
                    width: "100%",
                    display: "block",
                  }}
                />
              )}
              {activeTab === 2 && (
                <img
                  src="/images/restaurant/dish-details3.jpg"
                  alt="dish"
                  width={640}
                  height={660}
                  style={{
                    borderRadius: "7px",
                    width: "100%",
                    display: "block",
                  }}
                />
              )}
              {activeTab === 3 && (
                <img
                  src="/images/restaurant/dish-details4.jpg"
                  alt="dish"
                  width={640}
                  height={660}
                  style={{
                    borderRadius: "7px",
                    width: "100%",
                    display: "block",
                  }}
                />
              )}
            </Box>

            <Box sx={{ display: "flex", alignContent: "center", gap: "10px" }}>
              <Box
                onClick={() => handleTabClick(0)}
                style={{ cursor: "pointer" }}
                className={`border border-radius ${
                  activeTab === 0 ? "border-color-primary" : ""
                }`}
              >
                <img
                  src="/images/restaurant/dish-details1.jpg"
                  alt="dish"
                  width={117}
                  height={120}
                  style={{
                    borderRadius: "7px",
                    display: "block",
                  }}
                />
              </Box>

              <Box
                onClick={() => handleTabClick(1)}
                style={{ cursor: "pointer" }}
                className={`border border-radius ${
                  activeTab === 1 ? "border-color-primary" : ""
                }`}
              >
                <img
                  src="/images/restaurant/dish-details2.jpg"
                  alt="dish"
                  width={117}
                  height={120}
                  style={{
                    borderRadius: "7px",
                    display: "block",
                  }}
                />
              </Box>

              <Box
                onClick={() => handleTabClick(2)}
                style={{ cursor: "pointer" }}
                className={`border border-radius ${
                  activeTab === 2 ? "border-color-primary" : ""
                }`}
              >
                <img
                  src="/images/restaurant/dish-details3.jpg"
                  alt="dish"
                  width={117}
                  height={120}
                  style={{
                    borderRadius: "7px",
                    display: "block",
                  }}
                />
              </Box>

              <Box
                onClick={() => handleTabClick(3)}
                style={{ cursor: "pointer" }}
                className={`border border-radius ${
                  activeTab === 3 ? "border-color-primary" : ""
                }`}
              >
                <img
                  src="/images/restaurant/dish-details4.jpg"
                  alt="dish"
                  width={117}
                  height={120}
                  style={{
                    borderRadius: "7px",
                    display: "block",
                  }}
                />
              </Box>
            </Box>
          </Box>
        </Grid>

        <Grid size={{ xs: 12, sm: 12, md: 8, lg: 8, xl: 8 }}>
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
              }}
            >
              <Box>
                <Typography fontSize={"12px"} mb={"10px"}>
                  Code: 3479
                </Typography>

                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: "600",
                    fontSize: { xs: "18px", sm: "24px" },
                    mb: "10px",
                  }}
                >
                  Beef Cheesy Burger
                </Typography>

                <Typography
                  sx={{ fontWeight: "600", fontSize: "16px", color: "#ec1f00" }}
                >
                  $11.50 USD
                </Typography>
              </Box>

              <Box
                sx={{
                  lineHeight: 1,
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                }}
              >
                <Box sx={{ color: "#fe7a36", fontSize: "15px" }}>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                </Box>

                <Typography sx={{ fontSize: "12px", lineHeight: 1 }}>
                  5.0
                </Typography>
              </Box>
            </Box>

            <Box className="border-top" sx={{ my: "25px" }}></Box>

            <Typography
              variant="h4"
              sx={{ fontWeight: 600, fontSize: "18px", mb: "12px" }}
            >
              Ingredients Details
            </Typography>

            <Typography>
              Spaghetti, shredded chicken, buffalo sauce, ranch dressing,
              mozzarella.
            </Typography>

            <Box sx={{ mb: "25px" }}></Box>

            <Typography
              variant="h4"
              sx={{ fontWeight: 600, fontSize: "18px", mb: "12px" }}
            >
              Nutrition Values
            </Typography>

            <Box sx={{ mt: "15px", mb: "25px" }}>
              <Grid container columnSpacing={{ xs: 0 }} justifyContent="center">
                <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 6 }}>
                  <Box
                    className="item border"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "10px 20px",
                      mt: "-1px",
                    }}
                  >
                    <Typography>Calories</Typography>
                    <Typography>
                      <span className="text-black">1200</span> Kcal
                    </Typography>
                  </Box>
                </Grid>

                <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 6 }}>
                  <Box
                    className="item border"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "10px 20px",
                      mt: "-1px",
                    }}
                  >
                    <Typography>Carbs</Typography>
                    <Typography>
                      <span className="text-black">120</span> gm
                    </Typography>
                  </Box>
                </Grid>

                <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 6 }}>
                  <Box
                    className="item border"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "10px 20px",
                      mt: "-1px",
                    }}
                  >
                    <Typography>Protein</Typography>
                    <Typography>
                      <span className="text-black">120</span> gm
                    </Typography>
                  </Box>
                </Grid>

                <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 6 }}>
                  <Box
                    className="item border"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "10px 20px",
                      mt: "-1px",
                    }}
                  >
                    <Typography>Fibres</Typography>
                    <Typography>
                      <span className="text-black">400</span> gm
                    </Typography>
                  </Box>
                </Grid>

                <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 6 }}>
                  <Box
                    className="item border"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "10px 20px",
                      mt: "-1px",
                    }}
                  >
                    <Typography>Fat</Typography>
                    <Typography>
                      <span className="text-black">890</span> gm
                    </Typography>
                  </Box>
                </Grid>

                <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 6 }}>
                  <Box
                    className="item border"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "10px 20px",
                      mt: "-1px",
                    }}
                  >
                    <Typography>Vitamins</Typography>
                    <Typography>
                      <span className="text-black">350</span> gm
                    </Typography>
                  </Box>
                </Grid>

                <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 6 }}>
                  <Box
                    className="item border"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "10px 20px",
                      mt: "-1px",
                    }}
                  >
                    <Typography>Sugar</Typography>
                    <Typography>
                      <span className="text-black">30</span> gm
                    </Typography>
                  </Box>
                </Grid>

                <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 6 }}>
                  <Box
                    className="item border"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "10px 20px",
                      mt: "-1px",
                    }}
                  >
                    <Typography>Minerals</Typography>
                    <Typography>
                      <span className="text-black">5</span> gm
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box>

            <Typography
              variant="h4"
              sx={{
                fontWeight: 600,
                fontSize: "18px",
                mb: "12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              Orders In Queue <span>17</span>
            </Typography>
          </Card>
        </Grid>
      </Grid>

      <Reviews />
    </>
  );
};

export default DishDetailsContent;
