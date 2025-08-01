"use client";

import * as React from "react";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";

const HeroBanner = () => {
  return (
    <>
      <Box
        className="fp-banner-area"
        sx={{
          mb: { xs: "60px", sm: "60px", md: "80px", lg: "100px", xl: "150px" },
        }}
      >
        <Box
          sx={{
            maxWidth: {
              xs: "100%",
              sm: "720px",
              md: "960px",
              lg: "1140px",
              xl: "1320px",
            },
            mx: "auto",
            px: "12px",
            position: "relative",
            zIndex: "1",
          }}
        >
          <Box
            className="fp-banner-content"
            sx={{
              mx: "auto",
              textAlign: "center",
            }}
          >
            <h1>Insights On-the-Go: Access Your Dashboard Anywhere, Anytime</h1>
            <p>
              Our intuitive interface transforms complex data into actionable
              insights, empowering you to make informed decisions with
              confidence.
            </p>

            <Link to="/dashboard/ecommerce/" className="fp-banner-button">
              <i className="material-symbols-outlined">person</i>
              Get started - It is free
            </Link>
          </Box>

          <div className="banner-image text-center">
            <img
              src="/images/front-pages/dashboard.png"
              alt="dashboard-image"
              width={848}
              height={585}
            />
          </div>

          {/* Shape Images */}
          <div className="shape1">
            <img
              src="/images/front-pages/shape3.png"
              alt="shape3"
              width={685}
              height={685}
            />
          </div>
          <div className="shape2">
            <img
              src="/images/front-pages/shape2.png"
              alt="shape2"
              width={447}
              height={453}
            />
          </div>
          <div className="shape3">
            <img
              src="/images/front-pages/shape4.png"
              alt="shape4"
              width={171}
              height={171}
            />
          </div>
          <div className="shape4">
            <img
              src="/images/front-pages/shape5.png"
              alt="shape5"
              width={658}
              height={656}
            />
          </div>
        </Box>
      </Box>
    </>
  );
};

export default HeroBanner;
