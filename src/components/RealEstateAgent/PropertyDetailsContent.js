"use client";

import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
} from "@mui/material";

const PropertyDetailsContent = () => {
  const [activeTab, setActiveTab] = useState(0);

  // Dynamic image data
  const galleryImages = [
    {
      id: 1,
      src: "/images/rooms/room-details1.jpg",
      alt: "Living room view",
    },
    {
      id: 2,
      src: "/images/rooms/room-details2.jpg",
      alt: "Kitchen area",
    },
    {
      id: 3,
      src: "/images/rooms/room-details3.jpg",
      alt: "Bedroom view",
    },
    {
      id: 4,
      src: "/images/rooms/room-details4.jpg",
      alt: "Bathroom design",
    },
  ];

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <>
      <Box>
        <Grid container columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}>
          <Grid size={{ xs: 12, sm: 12, md: 5, lg: 4 }}>
            <Box sx={{ mb: "25px" }}>
              {/* Main image display */}
              <Box
                className="bg-white"
                sx={{
                  padding: "13px",
                  borderRadius: "7px",
                  mb: "15px",
                }}
              >
                <img
                  src={galleryImages[activeTab]?.src}
                  alt={galleryImages[activeTab]?.alt}
                  width={640}
                  height={660}
                  style={{
                    borderRadius: "7px",
                    width: "100%",
                    display: "block",
                  }}
                />
              </Box>

              {/* Thumbnail navigation */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "10px",
                  // flexWrap: "wrap",
                  overflowX: "auto",
                }}
              >
                {galleryImages.map((image, index) => (
                  <Box
                    key={image.id}
                    onClick={() => handleTabClick(index)}
                    className={`border ${
                      activeTab === index ? "border-color-primary" : ""
                    }`}
                    sx={{
                      cursor: "pointer",
                      borderRadius: "7px",
                      flex: "1 1 calc(25% - 10px)",
                      minWidth: "80px",
                      maxWidth: "120px",
                      aspectRatio: "1/1",
                      position: "relative",
                      overflow: "hidden",
                    }}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      fill
                      style={{
                        borderRadius: "7px",
                        objectFit: "cover",
                      }}
                    />
                  </Box>
                ))}
              </Box>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, sm: 12, md: 7, lg: 8 }}>
            <Box
              className="bg-white"
              sx={{
                borderRadius: "7px",
                mb: "25px",
                padding: { xs: "18px", sm: "20px", lg: "25px" },
              }}
            >
              <Box
                sx={{
                  display: { xs: "block", sm: "flex" },
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Box>
                  <Typography
                    sx={{
                      fontSize: "12px",
                      mb: "6px",
                    }}
                  >
                    Code: TRZ-32
                  </Typography>

                  <Typography
                    variant="h3"
                    sx={{
                      fontSize: { xs: "17px", md: "24px" },
                      mb: "10px",
                      fontWeight: 700,
                    }}
                  >
                    The Golden Haven
                  </Typography>

                  <Typography
                    sx={{
                      fontWeight: "600",
                      display: "flex",
                      alignItems: "center",
                      gap: "5px",
                    }}
                  >
                    <i
                      className="ri-map-pin-line text-primary"
                      style={{ fontSize: "17px" }}
                    ></i>
                    123 Sunshine Boulevard, Vancouver, BC
                  </Typography>
                </Box>

                <Box
                  sx={{
                    lineHeight: 1,
                    display: "flex",
                    alignItems: "center",
                    gap: "2px",
                    mt: { xs: "10px", sm: "0" },
                  }}
                >
                  <i className="ri-star-fill" style={{ color: "#fe7a36" }}></i>
                  <i className="ri-star-fill" style={{ color: "#fe7a36" }}></i>
                  <i className="ri-star-fill" style={{ color: "#fe7a36" }}></i>
                  <i className="ri-star-fill" style={{ color: "#fe7a36" }}></i>
                  <i className="ri-star-fill" style={{ color: "#fe7a36" }}></i>

                  <Typography
                    sx={{
                      fontSize: "12px",
                      lineHeight: 1,
                      position: "relative",
                      top: "1px",
                    }}
                    className="ml-2"
                  >
                    5.0
                  </Typography>
                </Box>
              </Box>

              <Box
                className="border-top border-bottom"
                sx={{
                  display: { xs: "block", sm: "flex" },
                  alignItems: "center",
                  justifyContent: "space-between",
                  my: "20px",
                  py: "15px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: { xs: "15px", md: "25px" },
                  }}
                >
                  <Box
                    sx={{ display: "flex", alignItems: "center", gap: "6px" }}
                  >
                    <i
                      className="material-symbols-outlined"
                      style={{ fontSize: "18px" }}
                    >
                      open_run
                    </i>
                    425 sft
                  </Box>

                  <Box
                    sx={{ display: "flex", alignItems: "center", gap: "6px" }}
                  >
                    <i
                      className="material-symbols-outlined"
                      style={{ fontSize: "18px" }}
                    >
                      bathtub
                    </i>
                    3 Beds
                  </Box>

                  <Box
                    sx={{ display: "flex", alignItems: "center", gap: "6px" }}
                  >
                    <i
                      className="material-symbols-outlined"
                      style={{ fontSize: "18px" }}
                    >
                      bathtub
                    </i>
                    2 Baths
                  </Box>
                </Box>

                <Box sx={{ mt: { xs: "10px", sm: "0" } }}>
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: "700",
                      fontSize: "18px",
                    }}
                  >
                    $4,274/m
                  </Typography>
                </Box>
              </Box>

              <Typography
                variant="h4"
                sx={{ fontSize: "18px", fontWeight: 700, mb: "12px" }}
              >
                Property Description
              </Typography>

              <p>
                Nestled in a serene neighborhood, this modern 3-bedroom home
                boasts an open-concept layout with abundant natural light. The
                chef’s kitchen features state-of-the-art appliances and a
                spacious island for entertaining.
              </p>
              <p>
                Enjoy the tranquility of a private backyard oasis with a patio
                and lush landscaping. Located minutes from top-rated schools,
                shopping, and parks, it offers convenience and comfort. This
                home is the perfect blend of style and functionality.
              </p>

              <Box sx={{ mb: "25px" }}></Box>

              <Typography
                variant="h4"
                sx={{ fontSize: "18px", fontWeight: 700, mb: "12px" }}
              >
                Property Details
              </Typography>

              <TableContainer
                component={Paper}
                sx={{
                  boxShadow: "none",
                  mb: "25px",
                }}
                className="rmui-table border"
              >
                <Table sx={{ minWidth: 500 }}>
                  <TableBody>
                    <TableRow
                      sx={{
                        "& td": {
                          padding: "10px 20px",
                          fontSize: { xs: "13px", lg: "14px" },
                        },
                      }}
                    >
                      <TableCell className="border-bottom">Beds</TableCell>
                      <TableCell className="border-bottom text-black text-end">
                        03
                      </TableCell>

                      <TableCell className="border-bottom">
                        Ceiling Height
                      </TableCell>
                      <TableCell className="border-bottom text-black text-end">
                        3.20 m
                      </TableCell>
                    </TableRow>

                    <TableRow
                      sx={{
                        "& td": {
                          padding: "10px 20px",
                          fontSize: { xs: "13px", lg: "14px" },
                        },
                      }}
                    >
                      <TableCell className="border-bottom">Baths</TableCell>
                      <TableCell className="border-bottom text-black text-end">
                        02
                      </TableCell>

                      <TableCell className="border-bottom">
                        Property Type
                      </TableCell>
                      <TableCell className="border-bottom text-black text-end">
                        Villa
                      </TableCell>
                    </TableRow>

                    <TableRow
                      sx={{
                        "& td": {
                          padding: "10px 20px",
                          fontSize: { xs: "13px", lg: "14px" },
                        },
                      }}
                    >
                      <TableCell className="border-bottom">Floor</TableCell>
                      <TableCell className="border-bottom text-black text-end">
                        Ground
                      </TableCell>

                      <TableCell className="border-bottom">
                        Year Built
                      </TableCell>
                      <TableCell className="border-bottom text-black text-end">
                        2010
                      </TableCell>
                    </TableRow>

                    <TableRow
                      sx={{
                        "& td": {
                          padding: "10px 20px",
                          fontSize: { xs: "13px", lg: "14px" },
                        },
                      }}
                    >
                      <TableCell className="border-bottom">Garage</TableCell>
                      <TableCell className="border-bottom text-black text-end">
                        03
                      </TableCell>

                      <TableCell className="border-bottom">Status</TableCell>
                      <TableCell className="border-bottom text-black text-end">
                        For Sale
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>

              <Typography
                variant="h4"
                sx={{ fontSize: "18px", fontWeight: 700, mb: "12px" }}
              >
                Amenities
              </Typography>
              <Box sx={{ mb: "25px" }}>
                <Grid
                  container
                  columnSpacing={{ xs: 1, sm: 2, md: 3, lg: 3 }}
                  justifyContent="center"
                >
                  <Grid size={{ xs: 6, sm: 6, md: 3, lg: 3, xl: 3 }}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "5px",
                        mb: "15px",
                      }}
                    >
                      <i
                        className="ri-check-line text-primary"
                        style={{ fontSize: "18px", lineHeight: 1 }}
                      ></i>
                      A/C & Heating
                    </Box>
                  </Grid>

                  <Grid size={{ xs: 6, sm: 6, md: 3, lg: 3, xl: 3 }}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "5px",
                        mb: "15px",
                      }}
                    >
                      <i
                        className="ri-check-line text-primary"
                        style={{ fontSize: "18px", lineHeight: 1 }}
                      ></i>
                      Parking
                    </Box>
                  </Grid>

                  <Grid size={{ xs: 6, sm: 6, md: 3, lg: 3, xl: 3 }}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "5px",
                        mb: "15px",
                      }}
                    >
                      <i
                        className="ri-check-line text-primary"
                        style={{ fontSize: "18px", lineHeight: 1 }}
                      ></i>
                      WiFi
                    </Box>
                  </Grid>

                  <Grid size={{ xs: 6, sm: 6, md: 3, lg: 3, xl: 3 }}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "5px",
                        mb: "15px",
                      }}
                    >
                      <i
                        className="ri-check-line text-primary"
                        style={{ fontSize: "18px", lineHeight: 1 }}
                      ></i>
                      Pet Friendly
                    </Box>
                  </Grid>

                  <Grid size={{ xs: 6, sm: 6, md: 3, lg: 3, xl: 3 }}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "5px",
                        mb: "15px",
                      }}
                    >
                      <i
                        className="ri-check-line text-primary"
                        style={{ fontSize: "18px", lineHeight: 1 }}
                      ></i>
                      Furniture
                    </Box>
                  </Grid>

                  <Grid size={{ xs: 6, sm: 6, md: 3, lg: 3, xl: 3 }}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "5px",
                        mb: "15px",
                      }}
                    >
                      <i
                        className="ri-check-line text-primary"
                        style={{ fontSize: "18px", lineHeight: 1 }}
                      ></i>
                      Ceiling Height
                    </Box>
                  </Grid>

                  <Grid size={{ xs: 6, sm: 6, md: 3, lg: 3, xl: 3 }}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "5px",
                        mb: "15px",
                      }}
                    >
                      <i
                        className="ri-check-line text-primary"
                        style={{ fontSize: "18px", lineHeight: 1 }}
                      ></i>
                      Play Ground
                    </Box>
                  </Grid>

                  <Grid size={{ xs: 6, sm: 6, md: 3, lg: 3, xl: 3 }}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "5px",
                        mb: "15px",
                      }}
                    >
                      <i
                        className="ri-check-line text-primary"
                        style={{ fontSize: "18px", lineHeight: 1 }}
                      ></i>
                      Elevator
                    </Box>
                  </Grid>

                  <Grid size={{ xs: 6, sm: 6, md: 3, lg: 3, xl: 3 }}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "5px",
                        mb: "15px",
                      }}
                    >
                      <i
                        className="ri-check-line text-primary"
                        style={{ fontSize: "18px", lineHeight: 1 }}
                      ></i>
                      Garage
                    </Box>
                  </Grid>

                  <Grid size={{ xs: 6, sm: 6, md: 3, lg: 3, xl: 3 }}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "5px",
                        mb: "15px",
                      }}
                    >
                      <i
                        className="ri-check-line text-primary"
                        style={{ fontSize: "18px", lineHeight: 1 }}
                      ></i>
                      Fireplace
                    </Box>
                  </Grid>

                  <Grid size={{ xs: 6, sm: 6, md: 3, lg: 3, xl: 3 }}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "5px",
                        mb: "15px",
                      }}
                    >
                      <i
                        className="ri-check-line text-primary"
                        style={{ fontSize: "18px", lineHeight: 1 }}
                      ></i>
                      Garden
                    </Box>
                  </Grid>

                  <Grid size={{ xs: 6, sm: 6, md: 3, lg: 3, xl: 3 }}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "5px",
                        mb: "15px",
                      }}
                    >
                      <i
                        className="ri-check-line text-primary"
                        style={{ fontSize: "18px", lineHeight: 1 }}
                      ></i>
                      Disabled Access
                    </Box>
                  </Grid>
                </Grid>
              </Box>

              <Box sx={{ mb: "25px" }}></Box>

              <Typography
                variant="h4"
                sx={{ fontSize: "18px", fontWeight: 700, mb: "12px" }}
              >
                Location
              </Typography>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.94539481518!2d-74.26675559025065!3d40.69739290398433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1678355274384!5m2!1sen!2sbd"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Property Location"
                style={{
                  width: "100%",
                  height: "250px",
                  border: "0",
                  borderRadius: "7px",
                }}
              ></iframe>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default PropertyDetailsContent;
