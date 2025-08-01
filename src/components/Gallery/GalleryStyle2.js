"use client";

import React from "react";
import { Grid, Card, Typography } from "@mui/material";

const GalleryStyle2 = () => {
  // Dynamic gallery data
  const galleryData = [
    { id: 1, src: "/images/gallery/gallery1.jpg", alt: "gallery-image-1" },
    { id: 2, src: "/images/gallery/gallery2.jpg", alt: "gallery-image-2" },
    { id: 3, src: "/images/gallery/gallery3.jpg", alt: "gallery-image-3" },
    { id: 4, src: "/images/gallery/gallery4.jpg", alt: "gallery-image-4" },
    { id: 5, src: "/images/gallery/gallery5.jpg", alt: "gallery-image-5" },
    { id: 6, src: "/images/gallery/gallery6.jpg", alt: "gallery-image-6" },
    { id: 7, src: "/images/gallery/gallery7.jpg", alt: "gallery-image-7" },
    { id: 8, src: "/images/gallery/gallery9.jpg", alt: "gallery-image-8" },
  ];

  return (
    <>
      <Card
        sx={{
          boxShadow: "none",
          borderRadius: "7px",
          mb: "25px",
          p: { xs: "18px", sm: "20px", lg: "25px" },
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
          Gallery Style - 2
        </Typography>

        <Grid
          container
          columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}
          spacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}
        >
          {galleryData.map((item) => (
            <Grid size={{ xs: 12, sm: 6, md: 4, lg: 4, xl: 4 }} key={item.id}>
              <img
                src={item.src}
                className="border-radius"
                alt={item.alt}
                width={760}
                height={760}
              />
            </Grid>
          ))}
        </Grid>
      </Card>
    </>
  );
};

export default GalleryStyle2;
