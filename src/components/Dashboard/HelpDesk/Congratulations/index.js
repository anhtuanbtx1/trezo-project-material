"use client";

import * as React from "react";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import styles from "./Congratulations.module.css";

const Congratulations = () => {
  return (
    <>
      <div className={`bg-white ${styles.congratulationsCard}`}>
        <div className={styles.content}>
          <Typography variant="h5" fontWeight={600} fontSize="18px">
            Congratulations, <span className="text-primary">Olivia!</span>
          </Typography>

          <Typography component="span" mb="10px" sx={{ display: "block" }}>
            Best agent of the month
          </Typography>

          <Typography
            variant="h6"
            sx={{
              fontSize: "20px",
              mb: "0",
              fontWeight: "700",
            }}
          >
            <span className="text-secondary">1.5k+</span>
          </Typography>

          <Typography component="span" sx={{ display: "block" }}>
            Ticket Solved
          </Typography>

          <Link to="/my-profile/">
            <Button
              variant="contained"
              color="primary"
              sx={{
                boxShadow: "none",
                marginTop: "14px",
                borderRadius: "7px",
                padding: "3px 12px",
                fontSize: "13px",
                fontWeight: "500",
                textTransform: "capitalize",
                color: "#fff !important",
              }}
            >
              View Profile
            </Button>
          </Link>

          <img
            src="/images/trophy.gif"
            alt="trophy-image"
            width={305}
            height={314}
          />
        </div>
      </div>
    </>
  );
};

export default Congratulations;
