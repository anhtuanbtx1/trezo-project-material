"use client";

import * as React from "react";
import { Link } from "react-router-dom";
import { Card, Box, Typography } from "@mui/material";

const externalLinksData = [
  {
    title: "Google Ad Analytics",
    iconSrc: "/images/icons/google3.svg",
    link: "#",
  },
  {
    title: "Instagram Ads",
    iconSrc: "/images/icons/instagram2.svg",
    link: "#",
  },
  {
    title: "Facebook Ads",
    iconSrc: "/images/icons/facebook3.svg",
    link: "#",
  },
];

const ExternalLinks = () => {
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
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mb: "25px",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: "16px", md: "18px" },
              fontWeight: 700,
            }}
            className="text-black"
          >
            External Links
          </Typography>
        </Box>

        <Box>
          {externalLinksData.map((item, index) => (
            <Box
              key={index}
              className="lcbpm-none border-bottom"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                pb: "14px",
                mb: "14px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <img
                  src={item.iconSrc}
                  alt={item.title}
                  width={18}
                  height={18}
                />
                <div className="text-primary">{item.title}</div>
              </Box>

              <Link
                to="#"
                style={{
                  display: "inline-block",
                  lineHeight: "1",
                }}
                className="text-body"
              >
                <i
                  className="material-symbols-outlined"
                  style={{ fontSize: "18px" }}
                >
                  open_in_new
                </i>
              </Link>
            </Box>
          ))}
        </Box>
      </Card>
    </>
  );
};

export default ExternalLinks;
