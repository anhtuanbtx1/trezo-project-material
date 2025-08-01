"use client";

import React from "react";
import { Card, Box, Typography } from "@mui/material";
import CustomDropdown from "./CustomDropdown";

// Dynamic data
const countries = [
  {
    name: "United States",
    flag: "/images/flags/usa.svg",
    calls: "1200",
    progress: 95,
    statusColor: "success",
  },
  {
    name: "Germany",
    flag: "/images/flags/germany.svg",
    calls: "800",
    progress: 85,
    statusColor: "primary",
  },
  {
    name: "United Kingdom",
    flag: "/images/flags/uk.svg",
    calls: "700",
    progress: 70,
    statusColor: "info",
  },
  {
    name: "Canada",
    flag: "/images/flags/canada.svg",
    calls: "500",
    progress: 50,
    statusColor: "warning",
  },
  {
    name: "Portugal",
    flag: "/images/flags/portugal.svg",
    calls: "300",
    progress: 30,
    statusColor: "error",
  },
];

const CallCenterGeography = () => {
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
            Call Center Geography
          </Typography>

          <Box>
            <CustomDropdown
              options={["Last Day", "Last Week", "Last Month", "Last Year"]} // Need to change the options also in CustomDropdown file
              onSelect={(value) => console.log(value)}
              defaultLabel="Last Year"
            />
          </Box>
        </Box>

        <Box>
          <Box sx={{ textAlign: "center", mt: "35px", mb: "25px" }}>
            <img src="/images/vector-map.png" alt="vector-map" />
          </Box>

          <Box>
            {countries.map((country, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  mt: "15px",
                  gap: "15px",
                }}
              >
                <Box
                  sx={{
                    flexShrink: "0",
                  }}
                >
                  <img
                    src={country.flag}
                    alt={country.name}
                    width={32}
                    height={32}
                  />
                </Box>

                <Box sx={{ flexGrow: "1" }}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "5px",
                      mb: "5px",
                    }}
                  >
                    <Typography sx={{ fontWeight: "500" }}>
                      {country.name}
                    </Typography>

                    <Typography sx={{ fontWeight: "500" }}>
                      {country.calls} calls
                    </Typography>

                    <Typography sx={{ fontWeight: "500" }}>
                      {country.progress}%
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      bgcolor: "#ecf0ff",
                      width: "100%",
                      height: "4px",
                      display: "block",
                      borderRadius: "30px",
                    }}
                  >
                    <Box
                      sx={{
                        bgcolor: `${country.statusColor}.main`,
                        width: `${country.progress}%`,
                        height: "4px",
                        borderRadius: "30px",
                      }}
                    ></Box>
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Card>
    </>
  );
};

export default CallCenterGeography;
