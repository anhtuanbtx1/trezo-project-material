"use client";

import React, { useState } from "react";
import {
  Grid,
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
} from "@mui/material";

const RoomDetailsContent = () => {
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
      <Grid
        container
        columnSpacing={{ xs: 1, sm: 2, md: 3, lg: 3 }}
        justifyContent="center"
      >
        <Grid size={{ xs: 12, sm: 12, md: 5, lg: 4, xl: 4 }}>
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

        <Grid size={{ xs: 12, sm: 12, md: 7, lg: 8, xl: 8 }}>
          <Box
            className="bg-white"
            sx={{
              borderRadius: "7px",
              mb: "25px",
              padding: { xs: "18px", sm: "20px", lg: "25px" },
            }}
          >
            <Box
              className="border-bottom"
              sx={{
                gap: "15px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-center",
                pb: { xs: "15px", md: "20px" },
                mb: { xs: "15px", md: "20px" },
              }}
            >
              <Box
                flexShrink={0}
                sx={{
                  width: { xs: "60px", md: "85px" },
                  height: { xs: "60px", md: "85px" },
                }}
              >
                <img
                  src="/images/users/user80.jpg"
                  className="rounded-circle"
                  alt="user"
                  width={85}
                  height={85}
                />
              </Box>

              <Box>
                <Typography sx={{ fontSize: "12px", mb: "5px" }}>
                  Code: TRZ-32
                </Typography>

                <Typography
                  component={"h3"}
                  sx={{
                    fontSize: { xs: "16px", md: "24px" },
                    fontWeight: 700,
                    mb: "10px",
                    lineHeight: "1",
                  }}
                >
                  Serenity Suite
                </Typography>

                <Box
                  sx={{
                    flexWrap: "wrap",
                    display: "flex",
                    alignItems: "center",
                    gap: { xs: "10px", sm: "20px" },
                  }}
                >
                  <Box
                    sx={{ gap: "7px", display: "flex", alignItems: "center" }}
                  >
                    <i
                      className="ri-phone-fill text-danger"
                      style={{ fontSize: "18px" }}
                    ></i>
                    <Typography sx={{ fontSize: { xs: "13px", md: "14px" } }}>
                      +321 1245 6457
                    </Typography>
                  </Box>

                  <Box
                    sx={{ gap: "7px", display: "flex", alignItems: "center" }}
                  >
                    <i
                      className="ri-mail-line text-danger"
                      style={{ fontSize: "18px" }}
                    ></i>
                    <Typography sx={{ fontSize: { xs: "13px", md: "14px" } }}>
                      anderson350@gmail.com
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>

            <Box
              className="border-bottom"
              sx={{
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
                gap: { xs: "20px", sm: "30px", md: "40px" },
                pb: { xs: "15px", md: "20px" },
                mb: { xs: "15px", md: "20px" },
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <img
                  src="/images/icons/schedule.svg"
                  alt="schedule"
                  width={28}
                  height={28}
                />
                <Box>
                  <Typography fontSize={"12px"}>Check In</Typography>

                  <Typography fontWeight={600} className="text-black">
                    23 June 2025, 15:12 AM
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <img
                  src="/images/icons/schedule.svg"
                  alt="schedule"
                  width={28}
                  height={28}
                />
                <Box>
                  <Typography fontSize={"12px"}>Check Out</Typography>
                  <Typography fontWeight={600} className="text-black">
                    25 June 2025, 14:20 PM
                  </Typography>
                </Box>
              </Box>
            </Box>

            <Typography
              variant="h4"
              sx={{ fontSize: "18px", fontWeight: 700, mb: "12px" }}
            >
              Room Info
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
                    <TableCell className="border-bottom">Room Code</TableCell>
                    <TableCell className="border-bottom text-black text-end">
                      L1-15
                    </TableCell>

                    <TableCell className="border-bottom">Bathroom</TableCell>
                    <TableCell className="border-bottom text-black text-end">
                      2
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
                    <TableCell className="border-bottom">Room Name</TableCell>
                    <TableCell className="border-bottom text-black text-end">
                      Moonlight
                    </TableCell>

                    <TableCell className="border-bottom">
                      Air Conditioner
                    </TableCell>
                    <TableCell className="border-bottom text-black text-end">
                      Yes
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
                    <TableCell className="border-bottom">Rate</TableCell>
                    <TableCell className="border-bottom text-black text-end">
                      $156/night
                    </TableCell>

                    <TableCell className="border-bottom">Free WiFi</TableCell>
                    <TableCell className="border-bottom text-black text-end">
                      Yes
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
                    <TableCell className="border-bottom">Bed</TableCell>
                    <TableCell className="border-bottom text-black text-end">
                      2 Beds
                    </TableCell>

                    <TableCell className="border-bottom">Heater</TableCell>
                    <TableCell className="border-bottom text-black text-end">
                      No
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>

            <Typography
              variant="h4"
              sx={{ fontSize: "18px", fontWeight: 700, mb: "12px" }}
            >
              Description
            </Typography>

            <Box
              sx={{
                p: {
                  lineHeight: "1.6",
                },
              }}
            >
              <p>
                This room captures the essence of boundless potential,
                symbolized by a surreal landscape where the sky meets the earth
                in a dazzling fusion of colors. The intricate design features
                flowing lines that blend together, representing the limitless
                paths we can take in life.
              </p>

              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt.
              </p>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default RoomDetailsContent;
