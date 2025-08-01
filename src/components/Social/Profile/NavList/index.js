"use client";

import * as React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./NavList.module.css";

const NavList = () => {
  const location = useLocation(); 
  const pathname = location.pathname; 

  return (
    <>
      <ul className={styles.profileNavLinks}>
        <li>
          <Link
            to="/social/profile/"
            className={`link ${
              pathname === "/social/profile/" ? `${styles.active}` : ""
            }`}
          >
            Timeline
          </Link>
        </li>

        <li>
          <Link
            to="/social/about/"
            className={`link ${
              pathname === "/social/about/" ? `${styles.active}` : ""
            }`}
          >
            About
          </Link>
        </li>

        <li>
          <Link
            to="/social/activity/"
            className={`link ${
              pathname === "/social/activity/" ? `${styles.active}` : ""
            }`}
          >
            Activity
          </Link>
        </li>
      </ul>
    </>
  );
};

export default NavList;
