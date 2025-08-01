"use client";

import * as React from "react";
import { Card, Grid, Typography } from "@mui/material";

const photoData = [
  { src: "/images/products/product6.jpg", alt: "Product 6", link: "#" },
  { src: "/images/products/product7.jpg", alt: "Product 7", link: "#" },
  { src: "/images/products/product8.jpg", alt: "Product 8", link: "#" },
  { src: "/images/products/product9.jpg", alt: "Product 9", link: "#" },
  { src: "/images/products/product10.jpg", alt: "Product 10", link: "#" },
  { src: "/images/products/product11.jpg", alt: "Product 11", link: "#" },
];

const Photos = () => {
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
        <Typography
          variant="h3"
          sx={{
            fontSize: { xs: "16px", md: "18px" },
            fontWeight: 700,
            mb: "25px",
          }}
          className="text-black"
        >
          Photos
        </Typography>

        <Grid container columnSpacing={{ xs: 1, sm: 1, md: 1, lg: 1 }}>
          {photoData.map((photo, index) => (
            <Grid size={{ xs: 4, sm: 4, md: 4, lg: 4, xl: 4 }} key={index}>
              <a href={photo.link} target="_blank" rel="noreferrer">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  width={160}
                  height={160}
                  style={{
                    borderRadius: "7px",
                  }}
                />
              </a>
            </Grid>
          ))}
        </Grid>
      </Card>
    </>
  );
};

export default Photos;
