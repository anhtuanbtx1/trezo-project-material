"use client";

import React from "react";
import { Box } from "@mui/material";
import { useTheme } from "../../../contexts/ThemeContext";

const DarkMode = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <Box>
      <div
        className={`th-toggle-mode ${isDarkMode ? "active" : ""}`}
        onClick={toggleTheme}
        style={{ cursor: 'pointer' }}
        title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      >
        <i className="ri-sun-line"></i>
        <i className="ri-moon-line"></i>
      </div>
    </Box>
  );
};

export default DarkMode;
