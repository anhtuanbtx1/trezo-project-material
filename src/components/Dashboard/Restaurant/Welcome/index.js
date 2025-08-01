"use client";

import { Box, Grid } from "@mui/material";
import styles from "./Welcome.module.css";

const Welcome = () => {
  return (
    <>
      <Box className={styles.restaurantWelcomeCard}>
        <div className={styles.trezoCardContent}>
          <Grid
            container
            alignItems={"center"}
            columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}
          >
            <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 6 }}>
              <div className={styles.content}>
                <span className={styles.subTitle}>Hello Olivia!</span>

                <h1>Here Your Restaurant Stats Today.</h1>

                <Box className={styles.stats}>
                  <div className={styles.item}>
                    <i className="material-symbols-outlined">order_approve</i>
                    <span className="d-block text-white">Total Orders</span>
                    <h6 className="text-white">12051+</h6>
                  </div>

                  <div className={styles.item}>
                    <i className="material-symbols-outlined">group</i>
                    <span className="d-block text-white">Total Users</span>
                    <h6 className="text-white">153k+</h6>
                  </div>
                </Box>
              </div>
            </Grid>

            <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 6 }}>
              <div className={styles.image}>
                <img
                  src="/images/chowmein.png"
                  className={styles.mainImage}
                  alt="chowmein"
                  width={185}
                  height={185}
                />
                <img
                  src="/images/icons/3dots1.png"
                  className={styles.shape1}
                  alt="3dots1"
                  width={40}
                  height={45}
                />
                <img
                  src="/images/icons/3dots2.png"
                  className={styles.shape2}
                  alt="3dots2"
                  width={40}
                  height={45}
                />
              </div>
            </Grid>
          </Grid>
        </div>
      </Box>
    </>
  );
};

export default Welcome;
