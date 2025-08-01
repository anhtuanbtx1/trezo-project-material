"use client";

import { Box, Grid } from "@mui/material";
import styles from "./Welcome.module.css";

const Welcome = () => {
  return (
    <>
      <Box
        className={styles.doctorWelcomeCard}
        sx={{
          background: "linear-gradient(272deg, #1F64F1 31.27%, #123A8B 98.4%)",
        }}
      >
        <div className={styles.trezoCardContent}>
          <Grid
            container
            columnSpacing={{ xs: 1, sm: 2, md: 3, lg: 3 }}
            justifyContent="center"
          >
            <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
              <div className={styles.content}>
                <span className={styles.subTitle}>Good Morning</span>

                <h1 className="text-white">Dr. Olivia John</h1>

                <span className={styles.designation}>
                  <img
                    src="/images/icons/heart.png"
                    alt="heart"
                    width={18}
                    height={18}
                  />
                  CARDIO SPECIALIST
                </span>
                <p>
                  Today you have <span>15</span> Consultations and{" "}
                  <span>12</span> Operations.
                </p>
              </div>
            </Grid>

            <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
              <div className={styles.image}>
                <img
                  src="/images/main-doctor.png"
                  alt="doctor-image"
                  width={210}
                  height={240}
                />
              </div>
            </Grid>
          </Grid>
        </div>

        <div className={styles.shape}>
          <img src="/images/line.png" alt="line" width={845} height={220} />
        </div>
        <div className={styles.star}>
          <img src="/images/star.png" alt="star" width={300} height={80} />
        </div>
      </Box>
    </>
  );
};

export default Welcome;
