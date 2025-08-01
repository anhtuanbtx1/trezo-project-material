"use client";

import * as React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./NavList.module.css";

const NavList = () => {
  const location = useLocation(); // Use `useLocation` to get the current path
  const pathname = location.pathname; // Extract `pathname` from location

  return (
    <>
      <ul className={styles.navList}>
        <li>
          <Link
            to="/ecommerce/products-list/"
            className={`link ${
              pathname === "/ecommerce/products-list/" ? `${styles.active}` : ""
            }`}
          >
            All Products
          </Link>
        </li>
        <li>
          <Link
            to="/ecommerce/products-list/published/"
            className={`link ${
              pathname === "/ecommerce/products-list/published/"
                ? `${styles.active}`
                : ""
            }`}
          >
            Published Products
          </Link>
        </li>
        <li>
          <Link
            to="/ecommerce/products-list/draft/"
            className={`link ${
              pathname === "/ecommerce/products-list/draft/"
                ? `${styles.active}`
                : ""
            }`}
          >
            Draft Products
          </Link>
        </li>
      </ul>
    </>
  );
};

export default NavList;
