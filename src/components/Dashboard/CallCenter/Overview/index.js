"use client";

import React, { useState } from "react";
import { Grid, Box, Typography, Card } from "@mui/material";
import CustomDropdown from "./CustomDropdown";
import TotalCalls from "./TotalCalls";
import AnsweredCalls from "./AnsweredCalls";
import MissedCalls from "./MissedCalls";

const Overview = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

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
            mb: "25px",
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
            Overview
          </Typography>

          <Box>
            <CustomDropdown
              options={["This Day", "This Week", "This Month", "This Year"]} // Need to change the options also in CustomDropdown file
              onSelect={(value) => console.log(value)}
              defaultLabel="This Year"
            />
          </Box>
        </Box>

        <Box className="overview-navs">
          <Grid container columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}>
            <Grid size={{ xs: 12, sm: 4, md: 4, lg: 4 }}>
              <Box
                onClick={() => handleTabClick(0)}
                sx={{
                  display: "block",
                  width: "100%",
                  py: "15px",
                  px: { xs: "15px", md: "20px" },
                  borderRadius: "7px",
                  textTransform: "capitalize",
                  cursor: "pointer",
                }}
                className={`bg-primary-50 ${activeTab === 0 ? "active" : ""}`}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Box>
                    <Typography
                      component={"span"}
                      sx={{
                        display: "block",
                        fontSize: { xs: "13px", md: "14px" },
                      }}
                    >
                      Total Calls
                    </Typography>

                    <Typography
                      component={"h5"}
                      sx={{
                        mb: "0",
                        fontSize: { xs: "16px", md: "24px" },
                        fontWeight: 600,
                      }}
                    >
                      26,435
                    </Typography>
                  </Box>

                  <img
                    src="/images/icons/call5.svg"
                    className="main-icon"
                    alt="call"
                    width={32}
                    height={32}
                  />

                  <img
                    src="/images/icons/call4.svg"
                    className="white-icon"
                    alt="call"
                    width={32}
                    height={32}
                  />
                </Box>

                <Typography
                  component={"span"}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                    fontWeight: 500,
                    mt: "32px",
                    fontSize: { xs: "12px", md: "14px" },
                  }}
                  className="text-black"
                >
                  <i
                    className="material-symbols-outlined text-success-600"
                    style={{ fontSize: "20px" }}
                  >
                    trending_up
                  </i>
                  +15%{" "}
                  <Typography
                    component={"span"}
                    className="text-body"
                    sx={{ textTransform: "lowercase" }}
                  >
                    last year
                  </Typography>
                </Typography>
              </Box>
            </Grid>

            <Grid size={{ xs: 12, sm: 4, md: 4, lg: 4 }}>
              <Box
                onClick={() => handleTabClick(1)}
                sx={{
                  display: "block",
                  width: "100%",
                  py: "15px",
                  px: { xs: "15px", md: "20px" },
                  borderRadius: "7px",
                  textTransform: "capitalize",
                  cursor: "pointer",
                }}
                className={`bg-purple-50 ${activeTab === 1 ? "active" : ""}`}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Box>
                    <Typography
                      component={"span"}
                      sx={{
                        display: "block",
                        fontSize: { xs: "13px", md: "14px" },
                      }}
                    >
                      Answered Calls
                    </Typography>
                    <Typography
                      component={"h5"}
                      sx={{
                        mb: "0",
                        fontSize: { xs: "16px", md: "24px" },
                        fontWeight: 600,
                      }}
                    >
                      18,520
                    </Typography>
                  </Box>

                  <img
                    src="/images/icons/call3.svg"
                    className="main-icon"
                    alt="call"
                    width={32}
                    height={32}
                  />
                  <img
                    src="/images/icons/call6.svg"
                    className="white-icon"
                    alt="call"
                    width={32}
                    height={32}
                  />
                </Box>

                <Typography
                  component={"span"}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                    fontWeight: 500,
                    mt: "32px",
                    fontSize: { xs: "12px", md: "14px" },
                  }}
                  className="text-black"
                >
                  <i
                    className="material-symbols-outlined text-success-600"
                    style={{ fontSize: "20px" }}
                  >
                    trending_up
                  </i>
                  +7.5%{" "}
                  <Typography
                    component={"span"}
                    className="text-body"
                    sx={{ textTransform: "lowercase" }}
                  >
                    last year
                  </Typography>
                </Typography>
              </Box>
            </Grid>

            <Grid size={{ xs: 12, sm: 4, md: 4, lg: 4 }}>
              <Box
                onClick={() => handleTabClick(2)}
                sx={{
                  display: "block",
                  width: "100%",
                  py: "15px",
                  px: { xs: "15px", md: "20px" },
                  borderRadius: "7px",
                  textTransform: "capitalize",
                  cursor: "pointer",
                }}
                className={`bg-orange-50 ${activeTab === 2 ? "active" : ""}`}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Box>
                    <Typography
                      component={"span"}
                      sx={{
                        display: "block",
                        fontSize: { xs: "13px", md: "14px" },
                      }}
                    >
                      Missed Calls
                    </Typography>
                    <Typography
                      component={"h5"}
                      sx={{
                        mb: "0",
                        fontSize: { xs: "16px", md: "24px" },
                        fontWeight: 600,
                      }}
                    >
                      3,735
                    </Typography>
                  </Box>

                  <img
                    src="/images/icons/call7.svg"
                    className="main-icon"
                    alt="call"
                    width={32}
                    height={32}
                  />
                  <img
                    src="/images/icons/call8.svg"
                    className="white-icon"
                    alt="call"
                    width={32}
                    height={32}
                  />
                </Box>

                <Typography
                  component={"span"}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                    fontWeight: 500,
                    mt: "32px",
                    fontSize: { xs: "12px", md: "14px" },
                  }}
                  className="text-black"
                >
                  <i
                    className="material-symbols-outlined text-orange-600"
                    style={{ fontSize: "20px" }}
                  >
                    trending_down
                  </i>
                  -25%{" "}
                  <Typography
                    component={"span"}
                    className="text-body"
                    sx={{ textTransform: "lowercase" }}
                  >
                    last year
                  </Typography>
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>

        <Box>
          {activeTab === 0 && <TotalCalls />}
          {activeTab === 1 && <AnsweredCalls />}
          {activeTab === 2 && <MissedCalls />}
        </Box>
      </Card>
    </>
  );
};

export default Overview;
