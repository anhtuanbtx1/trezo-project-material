// ============================================
// src/components/Layout/LeftSidebarMenu/index.js
// ============================================

import React from "react";
import { Box, Typography, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import ChatIcon from "@mui/icons-material/Chat";

const LeftSidebarMenu = ({ toggleActive }) => {
  const location = useLocation();

  const menuItems = [
    {
      title: "Dashboard",
      icon: <DashboardIcon />,
      path: "/dashboard",
    },
    {
      title: "Analytics", 
      icon: <AnalyticsIcon />,
      path: "/dashboard/analytics",
    },
    {
      title: "Calendar",
      icon: <CalendarTodayIcon />,
      path: "/apps/calendar",
    },
    {
      title: "Chat",
      icon: <ChatIcon />,
      path: "/apps/chat",
    },
  ];

  return (
    <Box
      sx={{
        width: 260,
        height: "100vh",
        backgroundColor: "#fff",
        borderRight: "1px solid #e0e0e0",
        position: "fixed",
        left: 0,
        top: 0,
        zIndex: 1000,
      }}
    >
      {/* Logo */}
      <Box sx={{ p: 3, borderBottom: "1px solid #e0e0e0" }}>
        <Typography variant="h5" fontWeight="bold" color="primary">
          My Dashboard
        </Typography>
      </Box>

      {/* Menu Items */}
      <List sx={{ p: 2 }}>
        {menuItems.map((item, index) => (
          <ListItem
            key={index}
            component={Link}
            to={item.path}
            sx={{
              borderRadius: "8px",
              mb: 1,
              backgroundColor: location.pathname === item.path ? "primary.50" : "transparent",
              color: location.pathname === item.path ? "primary.main" : "text.primary",
              "&:hover": {
                backgroundColor: "primary.50",
              },
            }}
          >
            <ListItemIcon sx={{ color: "inherit", minWidth: 40 }}>
              {item.icon}
            </ListItemIcon>
            <ListItemText primary={item.title} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default LeftSidebarMenu;

// ============================================
// src/components/Layout/TopNavbar/index.js
// ============================================

import React from "react";
import { AppBar, Toolbar, IconButton, Box, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Brightness4Icon from "@mui/icons-material/Brightness4";

const TopNavbar = ({ toggleActive }) => {
  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "#fff",
        color: "#333",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        zIndex: 1100,
        ml: "260px",
        width: "calc(100% - 260px)",
      }}
    >
      <Toolbar>
        {/* Menu Toggle */}
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={toggleActive}
          sx={{ mr: 2, display: { md: "none" } }}
        >
          <MenuIcon />
        </IconButton>

        {/* Title */}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Admin Dashboard
        </Typography>

        {/* Right side icons */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <IconButton color="inherit">
            <Brightness4Icon />
          </IconButton>
          
          <IconButton color="inherit">
            <NotificationsIcon />
          </IconButton>
          
          <IconButton color="inherit">
            <AccountCircleIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default TopNavbar;

// ============================================
// src/components/Layout/Footer/index.js
// ============================================

import React from "react";
import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        textAlign: "center",
        bgcolor: "#fff",
        borderRadius: "7px 7px 0 0",
        padding: "20px 25px",
        mt: "auto",
      }}
    >
      <Typography>
        © 2024 <span style={{ color: "#605DFF" }}>My Dashboard</span> - Built with React & Material-UI
      </Typography>
    </Box>
  );
};

export default Footer;

// ============================================
// USAGE INSTRUCTIONS
// ============================================

/*
1. Tạo các file tương ứng:
   - src/components/Layout/LeftSidebarMenu/index.js
   - src/components/Layout/TopNavbar/index.js  
   - src/components/Layout/Footer/index.js

2. Copy code tương ứng vào từng file

3. Update App.js để import và sử dụng:

import LeftSidebarMenu from "./components/Layout/LeftSidebarMenu";
import TopNavbar from "./components/Layout/TopNavbar";
import Footer from "./components/Layout/Footer";

// Uncomment trong App.js:
<TopNavbar toggleActive={toggleSidebar} />
<LeftSidebarMenu toggleActive={toggleSidebar} />
<Footer />

4. Update CSS để responsive:
   - Thêm styles cho mobile
   - Adjust margin cho main content
*/
