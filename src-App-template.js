import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// Theme
import theme from "./theme";

// Layout Components (sẽ tạo sau)
// import LeftSidebarMenu from "./components/Layout/LeftSidebarMenu";
// import TopNavbar from "./components/Layout/TopNavbar";
// import Footer from "./components/Layout/Footer";

// Pages (sẽ tạo sau)
// import Dashboard from "./pages/dashboard/Dashboard";
// import Analytics from "./pages/dashboard/Analytics";
// import Calendar from "./pages/apps/Calendar";
// import Chat from "./pages/apps/Chat";

// Temporary components for initial setup
const Dashboard = () => <div style={{padding: '20px'}}><h1>Dashboard</h1><p>Welcome to your admin dashboard!</p></div>;
const Analytics = () => <div style={{padding: '20px'}}><h1>Analytics</h1><p>Analytics page coming soon...</p></div>;
const Calendar = () => <div style={{padding: '20px'}}><h1>Calendar</h1><p>Calendar app coming soon...</p></div>;

function App() {
  const [sidebarActive, setSidebarActive] = useState(false);

  const toggleSidebar = () => {
    setSidebarActive(!sidebarActive);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className={`main-wrapper-content ${sidebarActive ? "active" : ""}`}>
        <Router>
          {/* Uncomment when layout components are ready */}
          {/* <TopNavbar toggleActive={toggleSidebar} />
          <LeftSidebarMenu toggleActive={toggleSidebar} /> */}

          <div className="main-content">
            <Routes>
              {/* Dashboard Routes */}
              <Route path="/" element={<Dashboard />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/dashboard/analytics" element={<Analytics />} />
              
              {/* Apps Routes */}
              <Route path="/apps/calendar" element={<Calendar />} />
              
              {/* Add more routes as you build components */}
            </Routes>
          </div>

          {/* <Footer /> */}
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
