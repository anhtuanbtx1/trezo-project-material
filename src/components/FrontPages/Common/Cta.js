"use client";

import * as React from "react";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";

const Cta = () => {
  return (
    <>
      <Box
        className="fp-cta-area"
        sx={{
          pb: { xs: "60px", sm: "60px", md: "80px", lg: "100px", xl: "150px" },
        }}
      >
        <Box
          sx={{
            maxWidth: {
              xs: "100%",
              sm: "540px",
              md: "720px",
              lg: "960px",
              xl: "1320px",
            },
            mx: "auto",
            px: "12px",
            position: "relative",
            zIndex: "1",
          }}
        >
          <div className="fp-cta-content text-center">
            <h2>Unlock a world of possibilities with Trezo Dashboard.</h2>
            <p>
              Experience the difference with Trezo Dashboard. Sign up for a free
              trial today and see how our intuitive platform can revolutionize
              your data analysis process.
            </p>

            <Link to="/dashboard/ecommerce/" className="cta-button">
              <i className="material-symbols-outlined">person</i>
              Get started - It is free
            </Link>
          </div>

          {/* shape Images */}
          <div className="shape1">
            <img
              src="/images/front-pages/shape1.png"
              alt="shape1"
              width={530}
              height={530}
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
        </Box>
      </Box>
    </>
  );
};

export default Cta;
