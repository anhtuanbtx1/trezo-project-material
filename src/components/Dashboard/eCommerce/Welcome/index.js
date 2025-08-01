"use client";

import * as React from "react";
import styles from "./Welcome.module.css";

const Welcome = () => {
  return (
    <>
      <div className={styles.welcomeCard}>
        <div className={styles.cardContent}>
          <div className={styles.content}>
            <h5>
              Good Morning, <span>Olivia!</span>
            </h5>
            <p>Here's what's happening with your store today.</p>

            <div className={styles.divider}></div>

            <div className={styles.itemBox}>
              <div className={styles.item}>
                <div
                  className={styles.icon}
                  style={{ backgroundColor: "#ECF0FF" }}
                >
                  <i className="material-symbols-outlined text-primary">
                    shopping_bag
                  </i>
                </div>
                <div>
                  <span className={styles.title}>86 New Orders</span>
                  <span style={{ display: "block" }}>Awaiting processing</span>
                </div>
              </div>

              <div className={styles.item}>
                <div
                  className={styles.icon}
                  style={{ backgroundColor: "#fff2f0" }}
                >
                  <i className="material-symbols-outlined text-danger">
                    chat_error
                  </i>
                </div>
                <div>
                  <span className={styles.title}>35 Products</span>
                  <span style={{ display: "block" }}>Out of stock</span>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.image}>
            <img
              src="/images/welcome.png"
              alt="welcome-image"
              width={418}
              height={336}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Welcome;
