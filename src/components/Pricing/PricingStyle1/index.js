"use client";

import * as React from "react";
import { Grid, Typography, Button } from "@mui/material";
import styles from "./PricingStyle1.module.css";

const pricingPlans = [
  {
    id: 1,
    title: "Standard",
    price: "89.99",
    description: "For individual user",
    features: [
      "Advanced Dashboard",
      "Task Management",
      "File Storage (5GB)",
      "Email Integration",
      "Mobile App Access",
      "Custom Branding",
    ],
    popular: true,
  },
  {
    id: 2,
    title: "Premium",
    price: "119.99",
    description: "For team of 10 users",
    features: [
      "Customizable Dashboard",
      "Task Management",
      "File Storage (Unlimited)",
      "Custom Reporting",
      "24/7 Premium Support",
      "White-label Solution",
    ],
    popular: false,
  },
];

const PricingStyle1 = () => {
  return (
    <Grid container columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}>
      {pricingPlans.map((plan) => (
        <Grid key={plan.id} size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 6 }}>
          <div className={`border-radius bg-white ${styles.pricingStyle1Card}`}>
            <div className={styles.cardContent}>
              <Grid container columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <div className={styles.info}>
                    <div className={styles.title}>
                      <span>{plan.title}</span>
                    </div>

                    <div className={`text-black ${styles.price}`}>
                      ${plan.price.split(".")[0]}
                      <span>.{plan.price.split(".")[1]}</span>
                    </div>

                    <Typography
                      component="span"
                      fontWeight={500}
                      display="block"
                      mb="20px"
                    >
                      {plan.description}
                    </Typography>

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

                    {plan.popular && (
                      <div className={styles.popular}>Most Popular</div>
                    )}
                  </div>
                </Grid>

                <Grid size={{ xs: 12, sm: 6 }}>
                  <ul className={styles.featuresList}>
                    {plan.features.map((feature, index) => (
                      <li key={index}>
                        <i className="material-symbols-outlined">check</i>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </Grid>
              </Grid>
            </div>
          </div>
        </Grid>
      ))}
    </Grid>
  );
};

export default PricingStyle1;
