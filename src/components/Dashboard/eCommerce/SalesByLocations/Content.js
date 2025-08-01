"use client";

import React from "react";
import { Box, Typography } from "@mui/material"; 

const countryData = [
  {
    name: "United States",
    flag: "/images/flags/usa.svg",
    percentage: 85,
  },
  {
    name: "Germany",
    flag: "/images/flags/germany.svg",
    percentage: 75,
  },
  {
    name: "United Kingdom",
    flag: "/images/flags/uk.svg",
    percentage: 40,
  },
  {
    name: "Canada",
    flag: "/images/flags/canada.svg",
    percentage: 10,
  },
  {
    name: "Portugal",
    flag: "/images/flags/portugal.svg",
    percentage: 5,
  },
  {
    name: "Spain",
    flag: "/images/flags/spain.svg",
    percentage: 15,
  },
];

const Content = () => {
  return (
    <Box>
      <Box sx={{ textAlign: "center", mb: "20px" }}>
        <img src="/images/vector-map.png" alt="vector-map" />
      </Box>

      <Box>
        {countryData.map((country, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              alignItems: "center",
              mt: "10px",
              gap: "15px",
            }}
          >
            {/* Country Flag */}
            <Box sx={{ flexShrink: "0" }}>
              <img
                src={country.flag}
                alt={country.name}
                width={32}
                height={32}
              />
            </Box>

            {/* Country Details */}
            <Box sx={{ flexGrow: "1" }}>
              <Typography component="span" sx={{ fontWeight: "500" }}>
                {country.name}
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "15px",
                }}
              >
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
                      bgcolor: "#605dff",
                      width: `${country.percentage}%`,
                      height: "4px",
                      borderRadius: "30px",
                    }}
                  ></Box>
                </Box>

                <Typography component="span">{country.percentage}%</Typography>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Content;
