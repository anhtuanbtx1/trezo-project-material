"use client";

import React from "react";
import { Box, Typography } from "@mui/material"; 

const countriesData = [
  {
    name: "United States",
    flag: "/images/flags/usa.svg",
    progress: 85,
  },
  {
    name: "Germany",
    flag: "/images/flags/germany.svg",
    progress: 75,
  },
  {
    name: "United Kingdom",
    flag: "/images/flags/uk.svg",
    progress: 40,
  },
  {
    name: "Canada",
    flag: "/images/flags/canada.svg",
    progress: 10,
  },
];

const Content = () => {
  return (
    <Box>
      <Box 
        sx={{ 
          textAlign: "center",
        }}
      >
        <img src="/images/vector-map.png" alt="vector-map" />
      </Box>

      <Box>
        {countriesData.map((country, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              alignItems: "center",
              mt: index === 0 ? "10px" : "10px",
              gap: "15px",
            }}
          >
            <Box sx={{ flexShrink: "0" }}>
              <img
                src={country.flag}
                alt={country.name}
                width={32}
                height={32}
              />
            </Box>

            <Box sx={{ flexGrow: "1" }}>
              <Typography component="span" sx={{ fontWeight: "500", mb: "0" }}>
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
                      width: `${country.progress}%`,
                      height: "4px",
                      borderRadius: "30px",
                    }}
                  ></Box>
                </Box>

                <Typography component="span">{country.progress}%</Typography>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Content;
