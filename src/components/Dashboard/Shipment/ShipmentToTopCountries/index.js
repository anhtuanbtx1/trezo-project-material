"use client";

import React from "react";
import { Box, Typography, Card } from "@mui/material";

const ShipmentToTopCountries = () => {
  // Dynamic data for countries
  const countryData = [
    { name: "USA", flag: "/images/flags/usa.svg", percentage: 85 },
    { name: "Germany", flag: "/images/flags/germany.svg", percentage: 75 },
    { name: "Brazil", flag: "/images/flags/brazil.svg", percentage: 40 },
    { name: "Canada", flag: "/images/flags/canada.svg", percentage: 10 },
    { name: "Portugal", flag: "/images/flags/portugal.svg", percentage: 5 },
    { name: "Spain", flag: "/images/flags/spain.svg", percentage: 15 },
    { name: "France", flag: "/images/flags/france.svg", percentage: 25 },
    { name: "Australia", flag: "/images/flags/australia.svg", percentage: 55 },
  ];

  return (
    <>
      <Card
        sx={{
          boxShadow: "none",
          borderRadius: "7px",
          mb: "25px",
          padding: { xs: "25px" },
        }}
        style={{
          background: "linear-gradient(180deg, #757DFF 0%, #605DFF 100%)",
        }}
        className="rmui-card"
      >
        <Typography
          component={"h5"}
          sx={{
            color: "#fff !important",
            mb: "15px",
            mx: "auto",
            maxWidth: "250px",
            fontSize: "18px",
            lineHeight: "1.3",
            fontWeight: "700",
            textAlign: "center",
          }}
        >
          Shipment to top countries around the world
        </Typography>

        <Box sx={{ textAlign: "center", mb: "15px" }}>
          <img src="/images/vector-map2.png" alt="vector-map" />
        </Box>

        <Box sx={{ maxWidth: "310px", mx: "auto", width: "100%" }}>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "12px",
            }}
          >
            {countryData.map((country) => (
              <Box
                key={country.name}
                sx={{ display: "flex", alignItems: "center", gap: "8px" }}
              >
                <img
                  src={country.flag}
                  alt={country.name.toLowerCase()}
                  width={16}
                  height={16}
                  style={{
                    display: "inline-block",
                  }}
                />
                <Typography
                  component={"span"}
                  sx={{
                    display: "block",
                    color: "#fff !important",
                    fontSize: "12px",
                    fontWeight: "500",
                  }}
                >
                  {country.name} {country.percentage}%
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Card>
    </>
  );
};

export default ShipmentToTopCountries;
