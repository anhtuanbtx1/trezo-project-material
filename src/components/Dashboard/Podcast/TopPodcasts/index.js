"use client";

import * as React from "react";
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
  TableHead,
} from "@mui/material";
import CustomDropdown from "./CustomDropdown";

const podcastsData = [
  {
    id: 1,
    name: "Tom Richards",
    episodes: 95,
    earnings: "$125,000",
    ratings: 5,
    image: "/images/podcast/user-129.png",
    role: "Content Strategist",
  },
  {
    id: 2,
    name: "Amanda Garcia",
    episodes: 110,
    earnings: "$140,000",
    ratings: 4,
    image: "/images/podcast/user-130.png",
    role: "Social Media",
  },
  {
    id: 3,
    name: "Lisa Kim",
    episodes: 85,
    earnings: "$160,000",
    ratings: 3,
    image: "/images/podcast/user-131.png",
    role: "Branding Consultant",
  },
  {
    id: 4,
    name: "Michael Young",
    episodes: 130,
    earnings: "$160,000",
    ratings: 2,
    image: "/images/podcast/user-132.png",
    role: "Data Analytics",
  },
  {
    id: 5,
    name: "Ravi Patel",
    episodes: 75,
    earnings: "$85,000",
    ratings: 1,
    image: "/images/podcast/user-133.png",
    role: "SEO & SEM",
  }, 
];

const TopPodcasts = () => {
  return (
    <>
      <Box
        className="bg-white border"
        sx={{
          boxShadow: "0px 3px 4px 0px rgba(0, 0, 0, 0.05)",
          borderRadius: "7px",
          padding: { xs: "18px", sm: "20px", lg: "25px" },
          position: "relative",
          mb: "25px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "10px",
            mb: "15px",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: "16px", md: "18px" },
              mb: "0",
              fontWeight: 600,
            }}
          >
            Top Podcasts
          </Typography>

          <Box className="-mr-10">
            <CustomDropdown
              options={[
                "Last 28 Day",
                "Last 48 Day",
                "Last 90 Day",
                "Last Year",
              ]} // Need to change the options also in CustomDropdown file
              onSelect={(value) => console.log(value)}
              defaultLabel="Last 28 Day"
            />
          </Box>
        </Box>

        <Box
          sx={{
            marginLeft: { xs: "-18px", sm: "-20px", lg: "-25px" },
            marginRight: { xs: "-18px", sm: "-20px", lg: "-25px" },
          }}
        >
          <TableContainer
            component={Paper}
            sx={{
              boxShadow: "none",
              borderRadius: "0",
            }}
            className="rmui-table"
          >
            <Table sx={{ minWidth: 500 }} aria-label="simple table">
              <TableHead className="bg-f6f7f9">
                <TableRow
                  sx={{
                    th: {
                      padding: "8px 25px",
                    },
                  }}
                >
                  <TableCell className="border-bottom">Name</TableCell>
                  <TableCell className="border-bottom">Episodes</TableCell>
                  <TableCell className="border-bottom">Earnings</TableCell>
                  <TableCell className="border-bottom">Ratings</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {podcastsData.map((podcast, index) => (
                  <TableRow
                    key={index}
                    className="tlc-td-bp-none"
                    sx={{
                      td: {
                        padding: "9.6px 25px",
                      },
                    }}
                  >
                    <TableCell className="border-bottom">
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                        }}
                      >
                        <Box sx={{ flexShrink: 0 }}>
                          <img
                            src={podcast.image}
                            className="rounded-circle"
                            alt="user"
                            width={44}
                            height={44}
                          />
                        </Box>
                        <Box>
                          <Typography
                            sx={{ mb: "0", fontSize: "14px", fontWeight: 500 }}
                            className="text-black"
                          >
                            {podcast.name}
                          </Typography>

                          <Typography fontSize={12}>{podcast.role}</Typography>
                        </Box>
                      </Box>
                    </TableCell>

                    <TableCell className="border-bottom">
                      <Typography
                        sx={{ mb: "0", fontSize: "14px", fontWeight: 500 }}
                        className="text-black"
                      >
                        {podcast.episodes}
                      </Typography>
                    </TableCell>

                    <TableCell className="border-bottom">
                      <Typography
                        sx={{ mb: "0", fontSize: "14px", fontWeight: 500 }}
                        className="text-black"
                      >
                        {podcast.earnings}
                      </Typography>
                    </TableCell>

                    <TableCell className="border-bottom">
                      <Box
                        sx={{
                          fontSize: "15px",
                          color: "#fe7a36",
                          display: "flex",
                          alignItems: "center",
                          gap: "3px",
                        }}
                      >
                        {[...Array(5)].map((_, i) => (
                          <i
                            key={i}
                            className={`ri-star-${
                              i < podcast.ratings ? "fill" : "line"
                            }`}
                          ></i>
                        ))}
                      </Box>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </>
  );
};

export default TopPodcasts;
