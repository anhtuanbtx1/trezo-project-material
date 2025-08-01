"use client";

import React from "react";
import { Grid, Box, Typography, Card } from "@mui/material";

const Stats = () => {
  return (
    <>
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
        <Grid
          container
          columnSpacing={{ xs: 3, lg: 2, xl: 3 }}
          spacing={"25px"}
        >
          <Grid size={{ xs: 12, sm: 4, md: 4, lg: 4, xl: 4 }}>
            <Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: { xs: "10px", xl: "15px" },
                }}
              >
                <img
                  src="/images/icons/graduation.svg"
                  alt="graduation"
                  width={42}
                  height={42}
                />

                <Box>
                  <Typography
                    sx={{ mb: "2px", fontSize: { xs: "13px", xl: "14px" } }}
                  >
                    Total Students
                  </Typography>

                  <Typography
                    variant="h5"
                    sx={{ mb: 0, fontSize: "20px", fontWeight: 600 }}
                  >
                    12,560
                  </Typography>
                </Box>
              </Box>

              <Box
                sx={{
                  mt: { xs: "15px", md: "42px" },
                  display: "flex",
                  alignItems: "center",
                  gap: "7px",
                }}
              >
                <Box
                  sx={{
                    bgcolor: "success.100",
                    color: "success.700",
                    borderRadius: "4px",
                    width: "26px",
                    height: "26px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "18px",
                  }}
                >
                  <i className="ri-arrow-right-up-line"></i>
                </Box>

                <Box>
                  <Typography
                    component={"span"}
                    sx={{ fontWeight: 500, color: "grey.700" }}
                  >
                    +12%
                  </Typography>{" "}
                  last year
                </Box>
              </Box>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, sm: 4, md: 4, lg: 4, xl: 4 }}>
            <Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: { xs: "10px", xl: "15px" },
                }}
              >
                <img
                  src="/images/icons/teacher.svg"
                  alt="teacher"
                  width={42}
                  height={42}
                />
                <Box>
                  <Typography
                    sx={{ mb: "2px", fontSize: { xs: "13px", xl: "14px" } }}
                  >
                    Total Teachers
                  </Typography>
                  <Typography
                    variant="h5"
                    sx={{
                      mb: 0,
                      fontSize: "20px",
                      fontWeight: 600,
                    }}
                  >
                    780
                  </Typography>
                </Box>
              </Box>

              <Box
                sx={{
                  mt: { xs: "15px", md: "42px" },
                  display: "flex",
                  alignItems: "center",
                  gap: "7px",
                }}
              >
                <Box
                  sx={{
                    bgcolor: "error.100",
                    color: "error.700",
                    borderRadius: "4px",
                    width: "26px",
                    height: "26px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "18px",
                  }}
                >
                  <i className="ri-arrow-right-down-line"></i>
                </Box>

                <Box>
                  <Typography
                    component={"span"}
                    sx={{ fontWeight: 500, color: "grey.700" }}
                  >
                    -10%
                  </Typography>{" "}
                  last year
                </Box>
              </Box>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, sm: 4, md: 4, lg: 4, xl: 4 }}>
            <Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: { xs: "10px", xl: "15px" },
                }}
              >
                <img
                  src="/images/icons/student.svg"
                  alt="student"
                  width={42}
                  height={42}
                />
                <Box>
                  <Typography
                    sx={{ mb: "2px", fontSize: { xs: "13px", xl: "14px" } }}
                  >
                    Attendance Today
                  </Typography>
                  <Typography
                    variant="h5"
                    sx={{
                      mb: 0,
                      fontSize: "20px",
                      fontWeight: 600,
                    }}
                  >
                    1,425
                  </Typography>
                </Box>
              </Box>

              <Box
                sx={{
                  mt: { xs: "15px", md: "42px" },
                  display: "flex",
                  alignItems: "center",
                  gap: "7px",
                }}
              >
                <Box
                  sx={{
                    bgcolor: "success.100",
                    color: "success.700",
                    borderRadius: "4px",
                    width: "26px",
                    height: "26px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "18px",
                  }}
                >
                  <i className="ri-arrow-right-up-line"></i>
                </Box>

                <Box>
                  <Typography
                    component={"span"}
                    sx={{ fontWeight: 500, color: "grey.700" }}
                  >
                    +25%
                  </Typography>{" "}
                  last month
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Box
          sx={{
            width: "1px",
            position: "absolute",
            top: "0",
            bottom: "0",
            transform: "translateX(-33.3333333333%)",
            display: { xs: "none", sm: "block" },
          }}
          className="po-left-32 bg-grey-100"
        ></Box>

        <Box
          sx={{
            width: "1px",
            position: "absolute",
            top: "0",
            bottom: "0",
            transform: "translateX(-33.3333333333%)",
            display: { xs: "none", sm: "block" },
          }}
          className="po-right-35 bg-grey-100"
        ></Box>
      </Card>
    </>
  );
};

export default Stats;
