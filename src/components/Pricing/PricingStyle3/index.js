"use client";

import * as React from "react";
import { Grid, Typography, Button } from "@mui/material";
import styles from "./PricingStyle3.module.css";

const pricingPlans = [
  {
    id: 1,
    title: "Basic",
    price: "29",
    period: "/ per month",
    description: "For individual user",
    features: [
      "Basic Dashboard",
      "Task Management",
      "File Storage (5GB)",
      "Basic Reporting",
      "Email Integration",
      "Basic Support",
    ],
    isPopular: false,
  },
  {
    id: 2,
    title: "Standard",
    price: "49",
    period: "/ per month",
    description: "For team of 10 users",
    features: [
      "Advanced Dashboard",
      "Task Management",
      "File Storage (10GB)",
      "Advanced Reporting",
      "Email Integration",
      "Priority Support",
    ],
    isPopular: true,
    popularImage: "/images/icons/star-popular.svg",
  },
  {
    id: 3,
    title: "Premium",
    price: "79",
    period: "/ per month",
    description: "For team of 15 users",
    features: [
      "Customizable Dashboard",
      "Task Management",
      "File Storage (Unlimited)",
      "Custom Reporting",
      "Email Integration",
      "24/7 Premium Support",
    ],
    isPopular: false,
  },
];

const PricingStyle3 = () => {
  return (
    <div className={`border-radius bg-white ${styles.pricingStyle3Card}`}>
      <div className={styles.cardContent}>
        <Grid container columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}>
          {pricingPlans.map((plan) => (
            <Grid key={plan.id} size={{ xs: 12, sm: 6, md: 6, lg: 4 }}>
              <div className={styles.singlePricingBox}>
                <div className="text-center">
                  <div className={styles.title}>
                    <span>{plan.title}</span>
                  </div>

                  <div className={`text-black ${styles.price}`}>
                    ${plan.price} <span className="text-body">{plan.period}</span>
                  </div>

                  <Typography
                    sx={{ fontWeight: "500", display: "block", mb: "20px" }}
                  >
                    {plan.description}
                  </Typography>
                </div>

                <Button
                  type="button"
                  variant="contained"
                  sx={{
                    textTransform: "capitalize",
                    borderRadius: "6px",
                    fontWeight: "500",
                    fontSize: { xs: "13px", sm: "16px" },
                    padding: { xs: "10px 20px" },
                    color: "#fff !important",
                    boxShadow: "none",
                    display: "block",
                    width: "100%",
                  }}
                >
                  <i
                    className="material-symbols-outlined mr-5"
                    style={{ fontSize: "16px" }}
                  >
                    arrow_forward_ios
                  </i>
                  Buy Now
                </Button>

                <ul className={styles.featuresList}>
                  {plan.features.map((feature, index) => (
                    <li key={index}>
                      <i className="material-symbols-outlined">check</i>
                      {feature}
                    </li>
                  ))}
                </ul>

                {plan.isPopular && plan.popularImage && (
                  <div className={styles.popular}>
                    <img
                      src={plan.popularImage}
                      alt="popular"
                      width={81}
                      height={81}
                    />
                  </div>
                )}
              </div>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default PricingStyle3;
