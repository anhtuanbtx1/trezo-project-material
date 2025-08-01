"use client";

import * as React from "react";
import { Grid, Box, Typography } from "@mui/material";
import styles from "./style.module.css";

const Welcome = () => {
  return (
    <>
      <Box
        className={styles.salesWelcomeCard}
        sx={{
          bgcolor: "#4936F5",
          boxShadow: "none",
          borderRadius: "7px",
          position: "relative",
          mb: "25px",
          padding: { xs: "18px", sm: "20px", xl: "25px" },
        }}
      >
        <Grid container columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}>
          <Grid size={{ xs: 12, sm: 7 }}>
            <Box>
              <Typography
                component="h3"
                className="text-white"
                sx={{
                  fontSize: "20px",
                  mb: "3px",
                  fontWeight: "700",
                }}
              >
                Hi, <span style={{ color: "#ffe8d4" }}>Dr. Olivia!</span>
              </Typography>

              <Typography className="text-white">
                Your schedule today
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "30px",
                  mt: { xs: "30px", sm: "65px" },
                  mb: { xs: "20px", sm: "0" },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                  }}
                >
                  <Box
                    className="text-orange bg-orange-100 border-radius"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "42px",
                      height: "42px",
                    }}
                  >
                    <i className="material-symbols-outlined">airplay</i>
                  </Box>

                  <Box>
                    <Typography
                      component="span"
                      className="text-white"
                      sx={{
                        display: "block",
                        fontWeight: "600",
                        fontSize: "18px",
                        mb: "0",
                        lineHeight: "normal",
                      }}
                    >
                      320
                    </Typography>
                    <Typography
                      sx={{
                        display: "block",
                        color: "#d5d9e2",
                      }}
                    >
                      Patients
                    </Typography>
                  </Box>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                  }}
                >
                  <Box
                    className="text-purple bg-purple-100 border-radius"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "42px",
                      height: "42px",
                    }}
                  >
                    <i className="material-symbols-outlined">local_library</i>
                  </Box>

                  <Box>
                    <Typography
                      component="span"
                      className="text-white"
                      sx={{
                        display: "block",
                        fontWeight: "600",
                        fontSize: "18px",
                        mb: "0",
                        lineHeight: "normal",
                      }}
                    >
                      18
                    </Typography>

                    <Typography
                      sx={{
                        display: "block",
                        color: "#d5d9e2",
                      }}
                    >
                      Surgeries
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, sm: 5 }}>
            <Box
              className="text-center"
              sx={{ position: "relative", zIndex: "5" }}
            >
              <img
                src="/images/female-doctor.png"
                alt="female-doctor"
                width={152}
                height={173}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Welcome;
