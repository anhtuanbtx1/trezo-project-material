"use client";

import * as React from "react";
import { Link, useLocation } from "react-router-dom"; // Updated import
import styles from "./InboxNavLinks.module.css";

const InboxNavLinks = () => {
  const location = useLocation(); // Use `useLocation` to get the current path
const pathname = location.pathname; // Extract `pathname` from location

  return (
    <>
      <ul className={styles.inboxNavLinks}>
        <li className="d-inline-block">
          <Link
            to="/apps/email/"
            className={`link ${
              pathname === "/apps/email/" ? `${styles.active}` : ""
            }`}
          >
            <i className="material-symbols-outlined">inbox</i>
            Primary
          </Link>
        </li>

        <li className="d-inline-block">
          <Link
            to="/apps/email/promotions/"
            className={`link ${
              pathname === "/apps/email/promotions/" ? `${styles.active}` : ""
            }`}
          >
            <i className="material-symbols-outlined">shoppingmode</i>
            Promotions
          </Link>
        </li>
      </ul>
    </>
  );
};

export default InboxNavLinks;
