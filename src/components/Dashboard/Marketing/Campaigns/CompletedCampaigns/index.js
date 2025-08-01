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
  Avatar,
  Link,
} from "@mui/material"; 

// Example campaigns data (replace with API data if needed)
const campaigns = [
  {
    name: "Christmas Eve",
    duration: "From 10 Oct - 15 Oct, 24",
    status: {
      label: "Live Now",
      style: { bgcolor: "error.100", color: "error.main" },
    },
    icons: ["facebook3", "instagram2", "google3", "linkedin2"],
    users: [
      "/images/users/user53.jpg",
      "/images/users/user54.jpg",
      "/images/users/user56.jpg",
      "/images/users/user57.jpg",
    ],
    userExtra: "+3",
    highlightColor: "bg-orange-500",
  },
  {
    name: "Teacher’s Day",
    duration: "From 08 Oct - 12 Oct, 24",
    status: {
      label: "Live Now",
      style: { bgcolor: "error.100", color: "error.main" },
    },
    icons: ["facebook3", "instagram2"],
    users: [
      "/images/users/user53.jpg",
      "/images/users/user54.jpg",
      "/images/users/user56.jpg",
    ],
    highlightColor: "bg-primary-500",
  },
  {
    name: "ThanksGiving",
    duration: "From 01 Oct - 05 Oct, 24",
    status: {
      label: "Live Now",
      style: { bgcolor: "error.100", color: "error.main" },
    },
    icons: ["facebook3", "instagram2"],
    users: [
      "/images/users/user53.jpg",
      "/images/users/user54.jpg",
      "/images/users/user56.jpg",
    ],
    highlightColor: "bg-purple-500",
  },
];

const CompletedCampaigns = () => {
  return (
    <Box>
      <TableContainer
        component={Paper}
        sx={{ boxShadow: "none", borderRadius: "0" }}
        className="rmui-table"
      >
        <Table sx={{ minWidth: 700 }}>
          <TableBody>
            {campaigns.map((campaign, index) => (
              <TableRow
                key={index}
                sx={{
                  td: { padding: "9.3px 20px", fontSize: "14px" },
                }}
              >
                <TableCell className="border-bottom pl-0">
                  <Box
                    sx={{ position: "relative", py: "3.5px" }}
                    className="pl-13"
                  >
                    <Typography
                      component="span"
                      className="text-black"
                      sx={{ display: "block", fontWeight: "600", mb: "3px" }}
                    >
                      {campaign.name}
                    </Typography>
                    <Typography sx={{ display: "block", fontSize: "12px" }}>
                      {campaign.duration}
                    </Typography>
                    <Box
                      className={`left-0 ${campaign.highlightColor}`}
                      sx={{
                        position: "absolute",
                        top: "0",
                        bottom: "0",
                        width: "2px",
                      }}
                    ></Box>
                  </Box>
                </TableCell>
                <TableCell className="border-bottom">
                  <Box sx={{ display: "flex", gap: "10px" }}>
                    {campaign.icons.map((icon, i) => (
                      <Link key={i} href="#" target="_blank" rel="noreferrer">
                        <img
                          src={`/images/icons/${icon}.svg`}
                          alt={icon}
                          width={18}
                          height={18}
                        />
                      </Link>
                    ))}
                  </Box>
                </TableCell>
                <TableCell className="border-bottom">
                  <Box 
                    sx={{
                      px: "8px",
                      py: "3px",
                      display: "inline-block",
                      borderRadius: "2px",
                      fontWeight: "500",
                      fontSize: "12px",
                      ...campaign.status.style,
                    }}
                  >
                    {campaign.status.label}
                  </Box>
                </TableCell>
                <TableCell className="border-bottom">
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    {campaign.users.map((src, i) => (
                      <Avatar
                        key={i}
                        alt="user-image"
                        src={src}
                        sx={{
                          width: 26,
                          height: 26,
                          border: "1px solid white",
                          mr: "-7px",
                        }}
                      />
                    ))}
                    {campaign.userExtra && (
                      <Box
                        sx={{
                          width: 26,
                          height: 26,
                          fontSize: "0.75rem",
                          borderRadius: "50%",
                          border: "1px solid white",
                          bgcolor: "grey.700",
                          color: "white",
                          fontWeight: "medium",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        {campaign.userExtra}
                      </Box>
                    )}
                  </Box>
                </TableCell>
                <TableCell className="text-end border-bottom pr-0">
                  <Link
                    href="#"
                    sx={{
                      display: "inline-block",
                      width: "30px",
                      height: "30px",
                      borderRadius: "50%",
                      bgcolor: "grey.100",
                      color: "grey.400",
                      textAlign: "center",
                      lineHeight: "30px",
                      fontSize: "18px",
                      transition: "all 0.3s",
                      textDecoration: "none",
                      "&:hover": { bgcolor: "primary.main", color: "white !important" },
                    }}
                  >
                    <i className="ri-arrow-right-line"></i>
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default CompletedCampaigns;
