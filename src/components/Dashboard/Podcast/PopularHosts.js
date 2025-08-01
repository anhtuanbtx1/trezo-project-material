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
  Button,
} from "@mui/material"; 

const initialHostsData = [
  {
    id: 1,
    name: "Sarah W.",
    role: "Marketing",
    hostedCount: 25,
    following: false,
    imageUrl: "/images/podcast/user-124.png",
  },
  {
    id: 2,
    name: "Tom R.",
    role: "Blogging",
    hostedCount: 30,
    following: false,
    imageUrl: "/images/podcast/user-125.png",
  },
  {
    id: 3,
    name: "Amanda G.",
    role: "Branding",
    hostedCount: 28,
    following: true,
    imageUrl: "/images/podcast/user-126.png",
  },
  {
    id: 4,
    name: "Lisa Kim",
    role: "Storytelling",
    hostedCount: 20,
    following: false,
    imageUrl: "/images/podcast/user-127.png",
  },
  {
    id: 5,
    name: "David C.",
    role: "Social Media",
    hostedCount: 18,
    following: false,
    imageUrl: "/images/podcast/user-128.png",
  },
];

const PopularHosts = () => {
   // Track hosts' follow state dynamically
   const [hostsData, setHostsData] = React.useState(initialHostsData);

   // Handle Follow/Following toggle
   const handleFollowToggle = (id) => {
     setHostsData((prevData) =>
       prevData.map((host) =>
         host.id === id ? { ...host, following: !host.following } : host
       )
     );
   };

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
            Popular Hosts
          </Typography>

          <Button
            className="text-body -mr-10"
            sx={{
              textTransform: "capitalize",
              padding: "0",
              fontSize: "14px",
              fontWeight: 400,
            }}
          >
            <span>View All</span>
            <i
              className="ri-arrow-right-s-line"
              style={{ fontSize: "24px", lineHeight: "1" }}
            ></i>
          </Button>
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
              <TableBody>
                {hostsData.map((host) => (
                  <TableRow
                    key={host.id}
                    className="tlc-td-bp-none"
                    sx={{
                      td: {
                        padding: "8px 25px",
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
                            src={host.imageUrl}
                            alt={host.name}
                            width={40}
                            height={40}
                            style={{
                              borderRadius: "100%",
                            }}
                          />
                        </Box>
                        <Box>
                          <Typography
                            variant="h4"
                            sx={{
                              fontSize: "14px",
                              fontWeight: 500,
                              mb: "3px",
                            }}
                          >
                            {host.name}
                          </Typography>
                          <Typography sx={{ fontSize: "12px" }}>
                          {host.role}
                          </Typography>
                        </Box>
                      </Box>
                    </TableCell>

                    <TableCell className="border-bottom">
                      <Typography
                        sx={{ fontWeight: 500 }}
                        className="text-black"
                      >
                        {host.hostedCount}
                      </Typography>
                      <Typography sx={{ fontSize: "12px" }}>Hosted</Typography>
                    </TableCell>

                    <TableCell className="text-end border-bottom">
                      <Button
                        sx={{
                          backgroundColor: "#ECF0FF",
                          padding: "3px 10px",
                          borderRadius: "4px",
                          textTransform: "capitalize",
                          fontSize: "14px",
                          minWidth: "auto",
                        }}
                        className={host.following ? "bg-primary text-white" : "text-primary"}
                        onClick={() => handleFollowToggle(host.id)}
                      >
                        {host.following ? "Following" : "Follow"}
                      </Button>
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

export default PopularHosts;
