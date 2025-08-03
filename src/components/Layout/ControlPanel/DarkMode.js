"use client";

import React from "react";
import { useTheme } from "../../../contexts/ThemeContext";

const DarkMode = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <>
      <span className="title">Light/Dark Mode</span>

      <button
        className={`switch-btn light-dark-btn bg-transparent border-none ${
          isDarkMode ? "active" : ""
        }`} // Add active class when dark mode is enabled
        onClick={toggleTheme}
        title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      >
        <div className="first">
          <div className="box">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="sub-title">
            <div className="dot-checkbox"></div>
            <span style={{ display: "block", fontWeight: "600" }}>Light</span>
          </div>
        </div>

        <div className="second">
          <div className="box">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="sub-title">
            <div className="dot-checkbox"></div>
            <span style={{ display: "block", fontWeight: "600" }}>Dark</span>
          </div>
        </div>
      </button>
    </>
  );
};

export default DarkMode;
