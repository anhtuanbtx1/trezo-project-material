import React from "react";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import PricingStyle1 from "../components/Pricing/PricingStyle1";
import PricingStyle2 from "../components/Pricing/PricingStyle2";
import PricingStyle3 from "../components/Pricing/PricingStyle3";

const Pricing = () => {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-card">
        <h5>Pricing</h5>

        <ul className="breadcrumb">
          <li>
            <Link to="/dashboard/ecommerce/">
              <i className="material-symbols-outlined">home</i>
              Dashboard
            </Link>
          </li>
          <li>Pricing</li>
        </ul>
      </div>

      <PricingStyle1 />

      <Typography
        variant="h3"
        className="text-black"
        sx={{
          fontWeight: "700",
          mb: "20px",
          fontSize: "18px",
        }}
      >
        Pricing Style - 2
      </Typography>

      <PricingStyle2 />

      <Typography
        variant="h3"
        className="text-black"
        sx={{
          fontWeight: "700",
          mb: "20px",
          fontSize: "18px",
        }}
      >
        Pricing Style - 3
      </Typography>

      <PricingStyle3 />
    </>
  );
};

export default Pricing;
