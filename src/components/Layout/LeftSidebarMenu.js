import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary, {
  accordionSummaryClasses,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&::before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  [`& .${accordionSummaryClasses.expandIconWrapper}.${accordionSummaryClasses.expanded}`]:
    {
      transform: "rotate(90deg)",
    },
  [`& .${accordionSummaryClasses.content}`]: {
    marginLeft: theme.spacing(1),
  },
  ...theme.applyStyles("dark", {
    backgroundColor: "rgba(255, 255, 255, .05)",
  }),
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

const LeftSidebarMenu = ({ toggleActive }) => {
  const [expanded, setExpanded] = useState("panel1");
  const location = useLocation(); // Get current location/pathname

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  // Function to check if current pathname matches the link path
  const isActiveLink = (path) => (location.pathname === path ? "active" : "");

  // Enable the dark sidebar exclusively for the /dashboard/beauty-salon/ page URL.
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Only check or set the theme if we're on the beauty-salon page.
    if (location.pathname === "/dashboard/beauty-salon/") {
      const storedTheme = localStorage.getItem("beautySalonSidebarTheme");
      if (storedTheme) {
        setIsDark(storedTheme === "dark-theme");
      } else {
        // Default to dark theme and persist it in localStorage
        setIsDark(true);
        localStorage.setItem("beautySalonSidebarTheme", "dark-theme");
      }
    } else {
      // For other pages, do not use localStorage for the theme
      setIsDark(false);
    }
  }, [location.pathname]);

  return (
    <Box
      className={`leftSidebarDark hide-for-horizontal-nav ${
        location.pathname === "/dashboard/beauty-salon/" && isDark
          ? "dark-theme"
          : ""
      }`}
    >
      <Box className="left-sidebar-menu">
        <Box className="logo">
          <Link to="/dashboard/ecommerce/">
            <img
              src="/images/logo-icon.svg"
              alt="logo-icon"
              width={26}
              height={26}
            />
            <Typography component={"span"}>Trezo</Typography>
          </Link>
        </Box>

        <Box className="burger-menu" onClick={toggleActive}>
          <Typography component={"span"} className="top-bar"></Typography>
          <Typography component={"span"} className="middle-bar"></Typography>
          <Typography component={"span"} className="bottom-bar"></Typography>
        </Box>

        <Box className="sidebar-inner">
          <Box className="sidebar-menu">
            <Typography
              className="sub-title"
              sx={{
                display: "block",
                fontWeight: "500",
                textTransform: "uppercase",
              }}
            >
              MAIN
            </Typography>

            <Accordion
              expanded={expanded === "panel1"}
              onChange={handleChange("panel1")}
              className="mat-accordion"
            >
              <AccordionSummary
                className="mat-summary"
                aria-controls="panel1d-content"
                id="panel1d-header"
              >
                <i className="material-symbols-outlined">dashboard</i>
                <Typography component={"span"} className="title">
                  Dashboard
                </Typography>
                <Typography component={"span"} className="trezo-badge">
                  30
                </Typography>
              </AccordionSummary>

              <AccordionDetails className="mat-details">
                <ul className="sidebar-sub-menu">
                  <li className="sidemenu-item">
                    <Link
                      to="/dashboard/ecommerce"
                      className={`sidemenu-link ${isActiveLink(
                        "/dashboard/ecommerce"
                      )}`}
                    >
                      eCommerce
                    </Link>
                  </li>

                  <li className="sidemenu-item">
                    <Link
                      to="/dashboard/crm/"
                      className={`sidemenu-link ${isActiveLink(
                        "/dashboard/crm/"
                      )}`}
                    >
                      CRM
                    </Link>
                  </li>

                  <li className="sidemenu-item">
                    <Link
                      to="/dashboard/project-management/"
                      className={`sidemenu-link ${isActiveLink(
                        "/dashboard/project-management/"
                      )}`}
                    >
                      Project Management
                    </Link>
                  </li>

                  <li className="sidemenu-item">
                    <Link
                      to="/dashboard/lms/"
                      className={`sidemenu-link ${isActiveLink(
                        "/dashboard/lms/"
                      )}`}
                    >
                      LMS
                    </Link>
                  </li>

                  <li className="sidemenu-item">
                    <Link
                      to="/dashboard/helpdesk/"
                      className={`sidemenu-link ${isActiveLink(
                        "/dashboard/helpdesk/"
                      )}`}
                    >
                      HelpDesk{" "}
                      <Typography component={"span"} className="trezo-badge">
                        Hot
                      </Typography>
                    </Link>
                  </li>

                  <li className="sidemenu-item">
                    <Link
                      to="/dashboard/analytics/"
                      className={`sidemenu-link ${isActiveLink(
                        "/dashboard/analytics/"
                      )}`}
                    >
                      Analytics
                    </Link>
                  </li>

                  <li className="sidemenu-item">
                    <Link
                      to="/dashboard/crypto/"
                      className={`sidemenu-link ${isActiveLink(
                        "/dashboard/crypto/"
                      )}`}
                    >
                      Crypto
                    </Link>
                  </li>

                  <li className="sidemenu-item">
                    <Link
                      to="/dashboard/sales/"
                      className={`sidemenu-link ${isActiveLink(
                        "/dashboard/sales/"
                      )}`}
                    >
                      Sales
                    </Link>
                  </li>

                  <li className="sidemenu-item">
                    <Link
                      to="/dashboard/hospital/"
                      className={`sidemenu-link ${isActiveLink(
                        "/dashboard/hospital/"
                      )}`}
                    >
                      Hospital
                    </Link>
                  </li>

                  <li className="sidemenu-item">
                    <Link
                      to="/dashboard/hrm/"
                      className={`sidemenu-link ${isActiveLink(
                        "/dashboard/hrm/"
                      )}`}
                    >
                      HRM
                    </Link>
                  </li>

                  <li className="sidemenu-item">
                    <Link
                      to="/dashboard/school/"
                      className={`sidemenu-link ${isActiveLink(
                        "/dashboard/school/"
                      )}`}
                    >
                      School
                    </Link>
                  </li>

                  <li className="sidemenu-item">
                    <Link
                      to="/dashboard/call-center/"
                      className={`sidemenu-link ${isActiveLink(
                        "/dashboard/call-center/"
                      )}`}
                    >
                      Call Center{" "}
                      <Typography
                        component={"span"}
                        className="trezo-badge style-two"
                      >
                        Popular
                      </Typography>
                    </Link>
                  </li>

                  <li className="sidemenu-item">
                    <Link
                      to="/dashboard/marketing/"
                      className={`sidemenu-link ${isActiveLink(
                        "/dashboard/marketing/"
                      )}`}
                    >
                      Marketing
                    </Link>
                  </li>

                  <li className="sidemenu-item">
                    <Link
                      to="/dashboard/nft/"
                      className={`sidemenu-link ${isActiveLink(
                        "/dashboard/nft/"
                      )}`}
                    >
                      NFT
                    </Link>
                  </li>

                  <li className="sidemenu-item">
                    <Link
                      to="/dashboard/saas/"
                      className={`sidemenu-link ${isActiveLink(
                        "/dashboard/saas/"
                      )}`}
                    >
                      SaaS
                    </Link>
                  </li>

                  <li className="sidemenu-item">
                    <Link
                      to="/dashboard/real-estate/"
                      className={`sidemenu-link ${isActiveLink(
                        "/dashboard/real-estate/"
                      )}`}
                    >
                      Real Estate{" "}
                      <Typography component={"span"} className="trezo-badge">
                        Top
                      </Typography>
                    </Link>
                  </li>

                  <li className="sidemenu-item">
                    <Link
                      to="/dashboard/shipment/"
                      className={`sidemenu-link ${isActiveLink(
                        "/dashboard/shipment/"
                      )}`}
                    >
                      Shipment
                    </Link>
                  </li>

                  <li className="sidemenu-item">
                    <Link
                      to="/dashboard/finance/"
                      className={`sidemenu-link ${isActiveLink(
                        "/dashboard/finance/"
                      )}`}
                    >
                      Finance
                    </Link>
                  </li>

                  <li className="sidemenu-item">
                    <Link
                      to="/dashboard/pos-system/"
                      className={`sidemenu-link ${isActiveLink(
                        "/dashboard/pos-system/"
                      )}`}
                    >
                      POS System
                    </Link>
                  </li>

                  <li className="sidemenu-item">
                    <Link
                      to="/dashboard/podcast/"
                      className={`sidemenu-link ${isActiveLink(
                        "/dashboard/podcast/"
                      )}`}
                    >
                      Podcast
                    </Link>
                  </li>

                  <li className="sidemenu-item">
                    <Link
                      to="/dashboard/social-media/"
                      className={`sidemenu-link ${isActiveLink(
                        "/dashboard/social-media/"
                      )}`}
                    >
                      Social Media
                    </Link>
                  </li>

                  <li className="sidemenu-item">
                    <Link
                      to="/dashboard/doctor/"
                      className={`sidemenu-link ${isActiveLink(
                        "/dashboard/doctor/"
                      )}`}
                    >
                      Doctor
                    </Link>
                  </li>

                  <li className="sidemenu-item">
                    <Link
                      to="/dashboard/beauty-salon/"
                      className={`sidemenu-link ${isActiveLink(
                        "/dashboard/beauty-salon/"
                      )}`}
                    >
                      Beauty Salon
                    </Link>
                  </li>

                  <li className="sidemenu-item">
                    <Link
                      to="/dashboard/store-analytics/"
                      className={`sidemenu-link ${isActiveLink(
                        "/dashboard/store-analytics/"
                      )}`}
                    >
                      Store Analytics
                    </Link>
                  </li>

                  <li className="sidemenu-item">
                    <Link
                      to="/dashboard/restaurant/"
                      className={`sidemenu-link ${isActiveLink(
                        "/dashboard/restaurant/"
                      )}`}
                    >
                      Restaurant
                    </Link>
                  </li>

                  <li className="sidemenu-item">
                    <Link
                      to="/dashboard/hotel/"
                      className={`sidemenu-link ${isActiveLink(
                        "/dashboard/hotel/"
                      )}`}
                    >
                      Hotel <span className="trezo-badge">New</span>
                    </Link>
                  </li>

                  <li className="sidemenu-item">
                    <Link
                      to="/dashboard/real-estate-agent/"
                      className={`sidemenu-link ${isActiveLink(
                        "/dashboard/real-estate-agent/"
                      )}`}
                    >
                      Real Estate Agent <span className="trezo-badge">New</span>
                    </Link>
                  </li>

                  <li className="sidemenu-item">
                    <Link
                      to="/dashboard/credit-card/"
                      className={`sidemenu-link ${isActiveLink(
                        "/dashboard/credit-card/"
                      )}`}
                    >
                      Credit Card <span className="trezo-badge">New</span>
                    </Link>
                  </li>

                  <li className="sidemenu-item">
                    <Link
                      to="/dashboard/crypto-trader/"
                      className={`sidemenu-link ${isActiveLink(
                        "/dashboard/crypto-trader/"
                      )}`}
                    >
                      Crypto Trader <span className="trezo-badge">New</span>
                    </Link>
                  </li>

                  <li className="sidemenu-item">
                    <Link
                      to="/dashboard/crypto-performance/"
                      className={`sidemenu-link ${isActiveLink(
                        "/dashboard/crypto-performance/"
                      )}`}
                    >
                      Crypto Perf. <span className="trezo-badge">New</span>
                    </Link>
                  </li>
                </ul>
              </AccordionDetails>
            </Accordion>

            <Accordion
              expanded={expanded === "panel2"}
              onChange={handleChange("panel2")}
              className="mat-accordion"
            >
              <AccordionSummary
                className="mat-summary"
                aria-controls="panel2d-content"
                id="panel2d-header"
              >
                <i className="material-symbols-outlined">note_stack</i>
                <Typography component={"span"} className="title">
                  Front Pages
                </Typography>
              </AccordionSummary>

              <AccordionDetails className="mat-details">
                <ul className="sidebar-sub-menu">
                  <li className="sidemenu-item">
                    <a href="/" className="sidemenu-link">
                      Home
                    </a>
                  </li>

                  <li className="sidemenu-item">
                    <a href="/features/" className="sidemenu-link">
                      Features
                    </a>
                  </li>

                  <li className="sidemenu-item">
                    <a href="/team/" className="sidemenu-link">
                      Our Team
                    </a>
                  </li>

                  <li className="sidemenu-item">
                    <a href="/faq/" className="sidemenu-link">
                      FAQ’s
                    </a>
                  </li>

                  <li className="sidemenu-item">
                    <a href="/contact/" className="sidemenu-link">
                      Contact
                    </a>
                  </li>
                </ul>
              </AccordionDetails>
            </Accordion>

            <Typography
              className="sub-title"
              sx={{
                display: "block",
                fontWeight: "500",
                textTransform: "uppercase",
              }}
            >
              APPS
            </Typography>

            <Link
              to="/apps/to-do-list/"
              className={`sidebar-menu-link ${isActiveLink(
                "/apps/to-do-list/"
              )}`}
            >
              <i className="material-symbols-outlined">format_list_bulleted</i>
              <Typography component={"span"} className="title">
                To Do List
              </Typography>
            </Link>

            <Link
              to="/apps/calendar/"
              className={`sidebar-menu-link ${isActiveLink("/apps/calendar/")}`}
            >
              <i className="material-symbols-outlined">date_range</i>
              <Typography component={"span"} className="title">
                Calendar
              </Typography>
            </Link>

            <Link
              to="/apps/contacts/"
              className={`sidebar-menu-link ${isActiveLink("/apps/contacts/")}`}
            >
              <i className="material-symbols-outlined">contact_page</i>
              <Typography component={"span"} className="title">
                Contacts
              </Typography>
            </Link>

            <Link
              to="/apps/chat/"
              className={`sidebar-menu-link ${isActiveLink("/apps/chat/")}`}
            >
              <i className="material-symbols-outlined">chat</i>
              <Typography component={"span"} className="title">
                Chat
              </Typography>
            </Link>

            <Accordion
              expanded={expanded === "panel3"}
              onChange={handleChange("panel3")}
              className="mat-accordion"
            >
              <AccordionSummary
                className="mat-summary"
                aria-controls="panel3d-content"
                id="panel3d-header"
              >
                <i className="material-symbols-outlined">mail</i>
                <Typography component={"span"} className="title">
                  Email
                </Typography>
                <Typography
                  component={"span"}
                  className="trezo-badge style-two"
                >
                  3
                </Typography>
              </AccordionSummary>

              <AccordionDetails className="mat-details">
                <ul className="sidebar-sub-menu">
                  <li className="sidemenu-item">
                    <Link
                      to="/apps/email/"
                      className={`sidemenu-link ${isActiveLink(
                        "/apps/email/"
                      )}`}
                    >
                      Inbox
                    </Link>
                  </li>
                  <li className="sidemenu-item">
                    <Link
                      to="/apps/email/compose/"
                      className={`sidemenu-link ${isActiveLink(
                        "/apps/email/compose/"
                      )}`}
                    >
                      Compose
                    </Link>
                  </li>
                  <li className="sidemenu-item">
                    <Link
                      to="/apps/email/read/"
                      className={`sidemenu-link ${isActiveLink(
                        "/apps/email/read/"
                      )}`}
                    >
                      Read
                    </Link>
                  </li>
                </ul>
              </AccordionDetails>
            </Accordion>

            <Link
              to="/apps/kanban-board/"
              className={`sidebar-menu-link ${isActiveLink(
                "/apps/kanban-board/"
              )}`}
            >
              <i className="material-symbols-outlined">team_dashboard</i>
              <Typography component={"span"} className="title">
                Kanban Board
              </Typography>
            </Link>

            <Accordion
              expanded={expanded === "panel4"}
              onChange={handleChange("panel4")}
              className="mat-accordion"
            >
              <AccordionSummary
                className="mat-summary"
                aria-controls="panel4d-content"
                id="panel4d-header"
              >
                <i className="material-symbols-outlined">folder_open</i>
                <Typography component={"span"} className="title">
                  File Manager
                </Typography>
                <Typography
                  component={"span"}
                  className="trezo-badge style-three"
                >
                  7
                </Typography>
              </AccordionSummary>

              <AccordionDetails className="mat-details">
                <ul className="sidebar-sub-menu">
                  <li className="sidemenu-item">
                    <Link
                      to="/apps/file-manager/"
                      className={`sidemenu-link ${isActiveLink(
                        "/apps/file-manager/"
                      )}`}
                    >
                      My Drive
                    </Link>
                  </li>

                  <li className="sidemenu-item">
                    <Link
                      to="/apps/file-manager/assets/"
                      className={`sidemenu-link ${isActiveLink(
                        "/apps/file-manager/assets/"
                      )}`}
                    >
                      Assets
                    </Link>
                  </li>

                  <li className="sidemenu-item">
                    <Link
                      to="/apps/file-manager/projects/"
                      className={`sidemenu-link ${isActiveLink(
                        "/apps/file-manager/projects/"
                      )}`}
                    >
                      Projects
                    </Link>
                  </li>

                  <li className="sidemenu-item">
                    <Link
                      to="/apps/file-manager/personal/"
                      className={`sidemenu-link ${isActiveLink(
                        "/apps/file-manager/personal/"
                      )}`}
                    >
                      Personal
                    </Link>
                  </li>

                  <li className="sidemenu-item">
                    <Link
                      to="/apps/file-manager/applications/"
                      className={`sidemenu-link ${isActiveLink(
                        "/apps/file-manager/applications/"
                      )}`}
                    >
                      Applications
                    </Link>
                  </li>

                  <li className="sidemenu-item">
                    <Link
                      to="/apps/file-manager/documents/"
                      className={`sidemenu-link ${isActiveLink(
                        "/apps/file-manager/documents/"
                      )}`}
                    >
                      Documents
                    </Link>
                  </li>

                  <li className="sidemenu-item">
                    <Link
                      to="/apps/file-manager/media/"
                      className={`sidemenu-link ${isActiveLink(
                        "/apps/file-manager/media/"
                      )}`}
                    >
                      Media
                    </Link>
                  </li>
                </ul>
              </AccordionDetails>
            </Accordion>

            <Typography
              className="sub-title"
              sx={{
                display: "block",
                fontWeight: "500",
                textTransform: "uppercase",
              }}
            >
              PAGES
            </Typography>

            <Accordion
              expanded={expanded === "panel5"}
              onChange={handleChange("panel5")}
              className="mat-accordion"
            >
              <AccordionSummary
                className="mat-summary"
                aria-controls="panel5d-content"
                id="panel5d-header"
              >
                <i className="material-symbols-outlined">shopping_cart</i>
                <Typography component={"span"} className="title">
                  eCommerce
                </Typography>
              </AccordionSummary>

              <AccordionDetails className="mat-details">
                <ul className="sidebar-sub-menu">
                  <li className="sidemenu-item">
                    <Link
                      to="/ecommerce/products-grid/"
                      className={`sidemenu-link ${isActiveLink(
                        "/ecommerce/products-grid/"
                      )}`}
                    >
                      Products Grid
                    </Link>
                  </li>

                  <li className="sidemenu-item">
                    <Link
                      to="/ecommerce/products-list/"
                      className={`sidemenu-link ${isActiveLink(
                        "/ecommerce/products-list/"
                      )}`}
                    >
                      Products List
                    </Link>
                  </li>

                  <li className="sidemenu-item">
                    <Link
                      to="/ecommerce/products-list/details/"
                      className={`sidemenu-link ${isActiveLink(
                        "/ecommerce/products-list/details/"
                      )}`}
                    >
                      Product Details
                    </Link>
                  </li>

                  <li className="sidemenu-item">
                    <Link
                      to="/ecommerce/create-product/"
                      className={`sidemenu-link ${isActiveLink(
                        "/ecommerce/create-product/"
                      )}`}
                    >
                      Create Product
                    </Link>
                  </li>

                  <li className="sidemenu-item">
                    <Link
                      to="/ecommerce/edit-product/"
                      className={`sidemenu-link ${isActiveLink(
                        "/ecommerce/edit-product/"
                      )}`}
                    >
                      Edit Product
                    </Link>
                  </li>

                  <li className="sidemenu-item">
                    <Link
                      to="/ecommerce/cart/"
                      className={`sidemenu-link ${isActiveLink(
                        "/ecommerce/cart/"
                      )}`}
                    >
                      Cart
                    </Link>
                  </li>

                  <li className="sidemenu-item">
                    <Link
                      to="/ecommerce/checkout/"
                      className={`sidemenu-link ${isActiveLink(
                        "/ecommerce/checkout/"
                      )}`}
                    >
                      Checkout
                    </Link>
                  </li>

                  <li className="sidemenu-item">
                    <Link
                      to="/ecommerce/orders/"
                      className={`sidemenu-link ${isActiveLink(
                        "/ecommerce/orders/"
                      )}`}
                    >
                      Orders
                    </Link>
                  </li>

                  <li className="sidemenu-item">
                    <Link
                      to="/ecommerce/orders/details/"
                      className={`sidemenu-link ${isActiveLink(
                        "/ecommerce/orders/details/"
                      )}`}
                    >
                      Order Details
                    </Link>
                  </li>

                  <li className="sidemenu-item">
                    <Link
                      to="/ecommerce/orders/create/"
                      className={`sidemenu-link ${isActiveLink(
                        "/ecommerce/orders/create/"
                      )}`}
                    >
                      Create Order
                    </Link>
                  </li>

                  <li className="sidemenu-item">
                    <Link
                      to="/ecommerce/orders/tracking/"
                      className={`sidemenu-link ${isActiveLink(
                        "/ecommerce/orders/tracking/"
                      )}`}
                    >
                      Order Tracking
                    </Link>
                  </li>

                  <li className="sidemenu-item">
                    <Link
                      to="/ecommerce/customers/"
                      className={`sidemenu-link ${isActiveLink(
                        "/ecommerce/customers/"
                      )}`}
                    >
                      Customers
                    </Link>
                  </li>

                  <li className="sidemenu-item">
                    <Link
                      to="/ecommerce/customers/details/"
                      className={`sidemenu-link ${isActiveLink(
                        "/ecommerce/customers/details/"
                      )}`}
                    >
                      Customer Details
                    </Link>
                  </li>

                  <li className="sidemenu-item">
                    <Link
                      to="/ecommerce/categories/"
                      className={`sidemenu-link ${isActiveLink(
                        "/ecommerce/categories/"
                      )}`}
                    >
                      Categories
                    </Link>
                  </li>

                  <li className="sidemenu-item">
                    <Link
                      to="/ecommerce/sellers/"
                      className={`sidemenu-link ${isActiveLink(
                        "/ecommerce/sellers/"
                      )}`}
                    >
                      Sellers
                    </Link>
                  </li>

                  <li className="sidemenu-item">
                    <Link
                      to="/ecommerce/sellers/details/"
                      className={`sidemenu-link ${isActiveLink(
                        "/ecommerce/sellers/details/"
                      )}`}
                    >
                      Seller Details
                    </Link>
                  </li>

                  <li className="sidemenu-item">
                    <Link
                      to="/ecommerce/sellers/create/"
                      className={`sidemenu-link ${isActiveLink(
                        "/ecommerce/sellers/create/"
                      )}`}
                    >
                      Create Seller
                    </Link>
                  </li>

                  <li className="sidemenu-item">
                    <Link
                      to="/ecommerce/reviews/"
                      className={`sidemenu-link ${isActiveLink(
                        "/ecommerce/reviews/"
                      )}`}
                    >
                      Reviews
                    </Link>
                  </li>

                  <li className="sidemenu-item">
                    <Link
                      to="/ecommerce/refunds/"
                      className={`sidemenu-link ${isActiveLink(
                        "/ecommerce/refunds/"
                      )}`}
                    >
                      Refunds
                    </Link>
                  </li>
                </ul>
              </AccordionDetails>
            </Accordion>

            <Accordion
              expanded={expanded === "panel6"}
              onChange={handleChange("panel6")}
              className="mat-accordion"
            >
              <AccordionSummary
                className="mat-summary"
                aria-controls="panel6d-content"
                id="panel6d-header"
              >
                <i className="material-symbols-outlined">handshake</i>
                <Typography component={"span"} className="title">
                  CRM
                </Typography>
              </AccordionSummary>

              <AccordionDetails className="mat-details">
                <ul className="sidebar-sub-menu">
                  <li className="sidemenu-item">
                    <Link
                      to="/crm/contacts/"
                      className={`sidemenu-link ${isActiveLink(
                        "/crm/contacts/"
                      )}`}
                    >
                      Contacts
                    </Link>
                  </li>

                  <li className="sidemenu-item">
                    <Link
                      to="/crm/customers/"
                      className={`sidemenu-link ${isActiveLink(
                        "/crm/customers/"
                      )}`}
                    >
                      Customers
                    </Link>
                  </li>

                  <li className="sidemenu-item">
                    <Link
                      to="/crm/leads/"
                      className={`sidemenu-link ${isActiveLink("/crm/leads/")}`}
                    >
                      Leads
                    </Link>
                  </li>

                  <li className="sidemenu-item">
                    <Link
                      to="/crm/deals/"
                      className={`sidemenu-link ${isActiveLink("/crm/deals/")}`}
                    >
                      Deals
                    </Link>
                  </li>
                </ul>
              </AccordionDetails>
            </Accordion>

            <Accordion
              expanded={expanded === "panel7"}
              onChange={handleChange("panel7")}
              className="mat-accordion"
            >
              <AccordionSummary
                className="mat-summary"
                aria-controls="panel7d-content"
                id="panel7d-header"
              >
                <i className="material-symbols-outlined">description</i>
                <Typography component={"span"} className="title">
                  Project Management
                </Typography>
              </AccordionSummary>

              <AccordionDetails className="mat-details">
                <ul className="sidebar-sub-menu">
                  <li className="sidemenu-item">
                    <Link
                      to="/project-management/project-overview/"
                      className={`sidemenu-link ${isActiveLink(
                        "/project-management/project-overview/"
                      )}`}
                    >
                      Project Overview
                    </Link>
                  </li>

                  <li className="sidemenu-item">
                    <Link
                      to="/project-management/projects-list/"
                      className={`sidemenu-link ${isActiveLink(
                        "/project-management/projects-list/"
                      )}`}
                    >
                      Projects List
                    </Link>
                  </li>

                  <li className="sidemenu-item">
                    <Link
                      to="/project-management/create-project/"
                      className={`sidemenu-link ${isActiveLink(
                        "/project-management/create-project/"
                      )}`}
                    >
                      Create Project
                    </Link>
                  </li>

                  <li className="sidemenu-item">
                    <Link
                      to="/project-management/clients/"
                      className={`sidemenu-link ${isActiveLink(
                        "/project-management/clients/"
                      )}`}
                    >
                      Clients
                    </Link>
                  </li>

                  <li className="sidemenu-item">
                    <Link
                      to="/project-management/teams/"
                      className={`sidemenu-link ${isActiveLink(
                        "/project-management/teams/"
                      )}`}
                    >
                      Teams
                    </Link>
                  </li>

                  <li className="sidemenu-item">
                    <Link
                      to="/project-management/kanban-board/"
                      className={`sidemenu-link ${isActiveLink(
                        "/project-management/kanban-board/"
                      )}`}
                    >
                      Kanban Board
                    </Link>
                  </li>

                  <li className="sidemenu-item">
                    <Link
                      to="/project-management/users/"
                      className={`sidemenu-link ${isActiveLink(
                        "/project-management/users/"
                      )}`}
                    >
                      Users
                    </Link>
                  </li>
                </ul>
              </AccordionDetails>
            </Accordion>

            <Accordion
              expanded={expanded === "panel8"}
              onChange={handleChange("panel8")}
              className="mat-accordion"
            >
              <AccordionSummary
                className="mat-summary"
                aria-controls="panel8d-content"
                id="panel8d-header"
              >
                <i className="material-symbols-outlined">auto_stories</i>
                <Typography component={"span"} className="title">
                  LMS
                </Typography>
              </AccordionSummary>

              <AccordionDetails className="mat-details">
                <ul className="sidebar-sub-menu">
                  <li className="sidemenu-item">
                    <Link
                      to="/lms/courses/"
                      className={`sidemenu-link ${isActiveLink(
                        "/lms/courses/"
                      )}`}
                    >
                      Courses List
                    </Link>
                  </li>

                  <li className="sidemenu-item">
                    <Link
                      to="/lms/courses/details/"
                      className={`sidemenu-link ${isActiveLink(
                        "/lms/courses/details/"
                      )}`}
                    >
                      Course Details
                    </Link>
                  </li>

                  <li className="sidemenu-item">
                    <Link
                      to="/lms/courses/lesson-preview/"
                      className={`sidemenu-link ${isActiveLink(
                        "/lms/courses/lesson-preview/"
                      )}`}
                    >
                      Lesson Preview
                    </Link>
                  </li>

                  <li className="sidemenu-item">
                    <Link
                      to="/lms/create-course/"
                      className={`sidemenu-link ${isActiveLink(
                        "/lms/create-course/"
                      )}`}
                    >
                      Create Course
                    </Link>
                  </li>

                  <li className="sidemenu-item">
                    <Link
                      to="/lms/edit-course/"
                      className={`sidemenu-link ${isActiveLink(
                        "/lms/edit-course/"
                      )}`}
                    >
                      Edit Course
                    </Link>
                  </li>

                  <li className="sidemenu-item">
                    <Link
                      to="/lms/instructors/"
                      className={`sidemenu-link ${isActiveLink(
                        "/lms/instructors/"
                      )}`}
                    >
                      Instructors
                    </Link>
                  </li>
                </ul>
              </AccordionDetails>
            </Accordion>

            <Accordion
              expanded={expanded === "panel9"}
              onChange={handleChange("panel9")}
              className="mat-accordion"
            >
              <AccordionSummary
                className="mat-summary"
                aria-controls="panel9d-content"
                id="panel9d-header"
              >
                <i className="material-symbols-outlined">support</i>
                <Typography component={"span"} className="title">
                  HelpDesk
                </Typography>
              </AccordionSummary>

              <AccordionDetails className="mat-details">
                <ul className="sidebar-sub-menu">
                  <li className="sidemenu-item">
                    <Link
                      to="/helpdesk/tickets/"
                      className={`sidemenu-link ${isActiveLink(
                        "/helpdesk/tickets/"
                      )}`}
                    >
                      Tickets
                    </Link>
                  </li>

                  <li className="sidemenu-item">
                    <Link
                      to="/helpdesk/tickets/details/"
                      className={`sidemenu-link ${isActiveLink(
                        "/helpdesk/tickets/details/"
                      )}`}
                    >
                      Ticket Details
                    </Link>
                  </li>

                  <li className="sidemenu-item">
                    <Link
                      to="/helpdesk/agents/"
                      className={`sidemenu-link ${isActiveLink(
                        "/helpdesk/agents/"
                      )}`}
                    >
                      Agents
                    </Link>
                  </li>

                  <li className="sidemenu-item">
                    <Link
                      to="/helpdesk/reports/"
                      className={`sidemenu-link ${isActiveLink(
                        "/helpdesk/reports/"
                      )}`}
                    >
                      Reports
                    </Link>
                  </li>
                </ul>
              </AccordionDetails>
            </Accordion>

            <Accordion
              expanded={expanded === "panel10"}
              onChange={handleChange("panel10")}
              className="mat-accordion"
            >
              <AccordionSummary
                className="mat-summary"
                aria-controls="panel10d-content"
                id="panel10d-header"
              >
                <i className="material-symbols-outlined">store</i>
                <Typography component={"span"} className="title">
                  NFT Marketplace
                </Typography>
              </AccordionSummary>

              <AccordionDetails className="mat-details">
                <ul className="sidebar-sub-menu">
                  <li className="sidemenu-item">
                    <Link
                      to="/nft/marketplace/"
                      className={`sidemenu-link ${isActiveLink(
                        "/nft/marketplace/"
                      )}`}
                    >
                      Marketplace
                    </Link>
                  </li>

                  <li className="sidemenu-item">
                    <Link
                      to="/nft/explore-all/"
                      className={`sidemenu-link ${isActiveLink(
                        "/nft/explore-all/"
                      )}`}
                    >
                      Explore All
                    </Link>
                  </li>

                  <li className="sidemenu-item">
                    <Link
                      to="/nft/live-auction/"
                      className={`sidemenu-link ${isActiveLink(
                        "/nft/live-auction/"
                      )}`}
                    >
                      Live Auction
                    </Link>
                  </li>

                  <li className="sidemenu-item">
                    <Link
                      to="/nft/details/"
                      className={`sidemenu-link ${isActiveLink(
                        "/nft/details/"
                      )}`}
                    >
                      NFT Details
                    </Link>
                  </li>

                  <li className="sidemenu-item">
                    <Link
                      to="/nft/creators/"
                      className={`sidemenu-link ${isActiveLink(
                        "/nft/creators/"
                      )}`}
                    >
                      Creators
                    </Link>
                  </li>

                  <li className="sidemenu-item">
                    <Link
                      to="/nft/creators/details/"
                      className={`sidemenu-link ${isActiveLink(
                        "/nft/creators/details/"
                      )}`}
                    >
                      Creator Details
                    </Link>
                  </li>

                  <li className="sidemenu-item">
                    <Link
                      to="/nft/wallet-connect/"
                      className={`sidemenu-link ${isActiveLink(
                        "/nft/wallet-connect/"
                      )}`}
                    >
                      Wallet Connect
                    </Link>
                  </li>

                  <li className="sidemenu-item">
                    <Link
                      to="/nft/create/"
                      className={`sidemenu-link ${isActiveLink(
                        "/nft/create/"
                      )}`}
                    >
                      Create NFT
                    </Link>
                  </li>
                </ul>
              </AccordionDetails>
            </Accordion>

            <Accordion
              expanded={expanded === "panel11"}
              onChange={handleChange("panel11")}
              className="mat-accordion"
            >
              <AccordionSummary
                className="mat-summary"
                aria-controls="panel11d-content"
                id="panel11d-header"
              >
                <i className="material-symbols-outlined">real_estate_agent</i>
                <Typography component={"span"} className="title">
                  Real Estate
                </Typography>
              </AccordionSummary>

              <AccordionDetails className="mat-details">
                <ul className="sidebar-sub-menu">
                  <li className="sidemenu-item">
                    <Link
                      to="/real-estate/property-list/"
                      className={`sidemenu-link ${isActiveLink(
                        "/real-estate/property-list/"
                      )}`}
                    >
                      Property List
                    </Link>
                  </li>

                  <li className="sidemenu-item">
                    <Link
                      to="/real-estate/property-details/"
                      className={`sidemenu-link ${isActiveLink(
                        "/real-estate/property-details/"
                      )}`}
                    >
                      Property Details
                    </Link>
                  </li>

                  <li className="sidemenu-item">
                    <Link
                      to="/real-estate/add-property/"
                      className={`sidemenu-link ${isActiveLink(
                        "/real-estate/add-property/"
                      )}`}
                    >
                      Add Property
                    </Link>
                  </li>

                  <li className="sidemenu-item">
                    <Link
                      to="/real-estate/agents/"
                      className={`sidemenu-link ${isActiveLink(
                        "/real-estate/agents/"
                      )}`}
                    >
                      Agents
                    </Link>
                  </li>

                  <li className="sidemenu-item">
                    <Link
                      to="/real-estate/agents/details/"
                      className={`sidemenu-link ${isActiveLink(
                        "/real-estate/agents/details/"
                      )}`}
                    >
                      Agent Details
                    </Link>
                  </li>

                  <li className="sidemenu-item">
                    <Link
                      to="/real-estate/agents/add/"
                      className={`sidemenu-link ${isActiveLink(
                        "/real-estate/agents/add/"
                      )}`}
                    >
                      Add Agent
                    </Link>
                  </li>

                  <li className="sidemenu-item">
                    <Link
                      to="/real-estate/customers/"
                      className={`sidemenu-link ${isActiveLink(
                        "/real-estate/customers/"
                      )}`}
                    >
                      Customers
                    </Link>
                  </li>
                </ul>
              </AccordionDetails>
            </Accordion>

            <Accordion
              expanded={expanded === "panel12"}
              onChange={handleChange("panel12")}
              className="mat-accordion"
            >
              <AccordionSummary
                className="mat-summary"
                aria-controls="panel12d-content"
                id="panel12d-header"
              >
                <i className="material-symbols-outlined">calculate</i>
                <Typography component={"span"} className="title">
                  Finance
                </Typography>
              </AccordionSummary>

              <AccordionDetails className="mat-details">
                <ul className="sidebar-sub-menu">
                  <li className="sidemenu-item">
                    <Link
                      to="/finance/wallet/"
                      className={`sidemenu-link ${isActiveLink(
                        "/finance/wallet/"
                      )}`}
                    >
                      Wallet
                    </Link>
                  </li>

                  <li className="sidemenu-item">
                    <Link
                      to="/finance/transactions/"
                      className={`sidemenu-link ${isActiveLink(
                        "/finance/transactions/"
                      )}`}
                    >
                      Transactions
                    </Link>
                  </li>
                </ul>
              </AccordionDetails>
            </Accordion>

            <Accordion
              expanded={expanded === "panel13"}
              onChange={handleChange("panel13")}
              className="mat-accordion"
            >
              <AccordionSummary
                className="mat-summary"
                aria-controls="panel13d-content"
                id="panel13d-header"
              >
                <i className="material-symbols-outlined">badge</i>
                <Typography component={"span"} className="title">
                  Doctor
                </Typography>
              </AccordionSummary>

              <AccordionDetails className="mat-details">
                <ul className="sidebar-sub-menu">
                  <li className="sidemenu-item">
                    <Link
                      to="/doctor/patients-list/"
                      className={`sidemenu-link ${isActiveLink(
                        "/doctor/patients-list/"
                      )}`}
                    >
                      Patients List
                    </Link>
                  </li>

                  <li className="sidemenu-item">
                    <Link
                      to="/doctor/add-patient/"
                      className={`sidemenu-link ${isActiveLink(
                        "/doctor/add-patient/"
                      )}`}
                    >
                      Add Patient
                    </Link>
                  </li>

                  <li className="sidemenu-item">
                    <Link
                      to="/doctor/patient-details/"
                      className={`sidemenu-link ${isActiveLink(
                        "/doctor/patient-details/"
                      )}`}
                    >
                      Patient Details
                    </Link>
                  </li>

                  <li className="sidemenu-item">
                    <Link
                      to="/doctor/appointments/"
                      className={`sidemenu-link ${isActiveLink(
                        "/doctor/appointments/"
                      )}`}
                    >
                      Appointments
                    </Link>
                  </li>

                  <li className="sidemenu-item">
                    <Link
                      to="/doctor/prescriptions/"
                      className={`sidemenu-link ${isActiveLink(
                        "/doctor/prescriptions/"
                      )}`}
                    >
                      Prescriptions
                    </Link>
                  </li>

                  <li className="sidemenu-item">
                    <Link
                      to="/doctor/write-prescription/"
                      className={`sidemenu-link ${isActiveLink(
                        "/doctor/write-prescription/"
                      )}`}
                    >
                      Write a Prescription
                    </Link>
                  </li>
                </ul>
              </AccordionDetails>
            </Accordion>

            <Accordion
              expanded={expanded === "panel14"}
              onChange={handleChange("panel14")}
              className="mat-accordion"
            >
              <AccordionSummary
                className="mat-summary"
                aria-controls="panel14d-content"
                id="panel14d-header"
              >
                <i className="material-symbols-outlined">lunch_dining</i>
                <Typography component={"span"} className="title">
                  Restaurant
                </Typography>
              </AccordionSummary>

              <AccordionDetails className="mat-details">
                <ul className="sidebar-sub-menu">
                  <li className="sidemenu-item">
                    <Link
                      to="/restaurant/menus/"
                      className={`sidemenu-link ${isActiveLink(
                        "/restaurant/menus/"
                      )}`}
                    >
                      Menus
                    </Link>
                  </li>

                  <li className="sidemenu-item">
                    <Link
                      to="/restaurant/dish-details/"
                      className={`sidemenu-link ${isActiveLink(
                        "/restaurant/dish-details/"
                      )}`}
                    >
                      Dish Details
                    </Link>
                  </li>
                </ul>
              </AccordionDetails>
            </Accordion>

            <Accordion
              expanded={expanded === "panel15"}
              onChange={handleChange("panel15")}
              className="mat-accordion"
            >
              <AccordionSummary
                className="mat-summary"
                aria-controls="panel15d-content"
                id="panel15d-header"
              >
                <i className="material-symbols-outlined">hotel</i>
                <Typography component={"span"} className="title">
                  Hotel
                </Typography>
              </AccordionSummary>

              <AccordionDetails className="mat-details">
                <ul className="sidebar-sub-menu">
                  <li className="sidemenu-item">
                    <Link
                      to="/hotel/rooms-list/"
                      className={`sidemenu-link ${isActiveLink(
                        "/hotel/rooms-list/"
                      )}`}
                    >
                      Rooms List
                    </Link>
                  </li>

                  <li className="sidemenu-item">
                    <Link
                      to="/hotel/room-details/"
                      className={`sidemenu-link ${isActiveLink(
                        "/hotel/room-details/"
                      )}`}
                    >
                      Room Details
                    </Link>
                  </li>

                  <li className="sidemenu-item">
                    <Link
                      to="/hotel/guests-list/"
                      className={`sidemenu-link ${isActiveLink(
                        "/hotel/guests-list/"
                      )}`}
                    >
                      Guests List
                    </Link>
                  </li>
                </ul>
              </AccordionDetails>
            </Accordion>

            <Accordion
              expanded={expanded === "panel16"}
              onChange={handleChange("panel16")}
              className="mat-accordion"
            >
              <AccordionSummary
                className="mat-summary"
                aria-controls="panel16d-content"
                id="panel16d-header"
              >
                <i className="material-symbols-outlined">location_away</i>
                <Typography component={"span"} className="title">
                  Real Estate Agent
                </Typography>
              </AccordionSummary>

              <AccordionDetails className="mat-details">
                <ul className="sidebar-sub-menu">
                  <li className="sidemenu-item">
                    <Link
                      to="/real-estate-agent/properties/"
                      className={`sidemenu-link ${isActiveLink(
                        "/real-estate-agent/properties/"
                      )}`}
                    >
                      Properties
                    </Link>
                  </li>

                  <li className="sidemenu-item">
                    <Link
                      to="/real-estate-agent/property-details/"
                      className={`sidemenu-link ${isActiveLink(
                        "/real-estate-agent/property-details/"
                      )}`}
                    >
                      Property Details
                    </Link>
                  </li>
                </ul>
              </AccordionDetails>
            </Accordion>

            <Accordion
              expanded={expanded === "panel17"}
              onChange={handleChange("panel17")}
              className="mat-accordion"
            >
              <AccordionSummary
                className="mat-summary"
                aria-controls="panel17d-content"
                id="panel17d-header"
              >
                <i className="material-symbols-outlined">paid</i>
                <Typography component={"span"} className="title">
                  Crypto Trader
                </Typography>
              </AccordionSummary>

              <AccordionDetails className="mat-details">
                <ul className="sidebar-sub-menu">
                  <li className="sidemenu-item">
                    <Link
                      to="/crypto-trader/transactions/"
                      className={`sidemenu-link ${isActiveLink(
                        "/crypto-trader/transactions/"
                      )}`}
                    >
                      Transactions
                    </Link>
                  </li>

                  <li className="sidemenu-item">
                    <Link
                      to="/crypto-trader/gainers-losers/"
                      className={`sidemenu-link ${isActiveLink(
                        "/crypto-trader/gainers-losers/"
                      )}`}
                    >
                      Gainers & Losers
                    </Link>
                  </li>

                  <li className="sidemenu-item">
                    <Link
                      to="/crypto-trader/wallet/"
                      className={`sidemenu-link ${isActiveLink(
                        "/crypto-trader/wallet/"
                      )}`}
                    >
                      Wallet
                    </Link>
                  </li>
                </ul>
              </AccordionDetails>
            </Accordion>

            <Accordion
              expanded={expanded === "panel18"}
              onChange={handleChange("panel18")}
              className="mat-accordion"
            >
              <AccordionSummary
                className="mat-summary"
                aria-controls="panel18d-content"
                id="panel18d-header"
              >
                <i className="material-symbols-outlined">local_activity</i>
                <Typography component={"span"} className="title">
                  Events
                </Typography>
              </AccordionSummary>

              <AccordionDetails className="mat-details">
                <ul className="sidebar-sub-menu">
                  <li className="sidemenu-item">
                    <Link
                      to="/events/"
                      className={`sidemenu-link ${isActiveLink("/events/")}`}
                    >
                      Events Grid
                    </Link>
                  </li>

                  <li className="sidemenu-item">
                    <Link
                      to="/events/events-list/"
                      className={`sidemenu-link ${isActiveLink(
                        "/events/events-list/"
                      )}`}
                    >
                      Events List
                    </Link>
                  </li>

                  <li className="sidemenu-item">
                    <Link
                      to="/events/events-details/"
                      className={`sidemenu-link ${isActiveLink(
                        "/events/events-details/"
                      )}`}
                    >
                      Events Details
                    </Link>
                  </li>

                  <li className="sidemenu-item">
                    <Link
                      to="/events/create-an-event/"
                      className={`sidemenu-link ${isActiveLink(
                        "/events/create-an-event/"
                      )}`}
                    >
                      Create An Event
                    </Link>
                  </li>

                  <li className="sidemenu-item">
                    <Link
                      to="/events/edit-an-event/"
                      className={`sidemenu-link ${isActiveLink(
                        "/events/edit-an-event/"
                      )}`}
                    >
                      Edit An Event
                    </Link>
                  </li>
                </ul>
              </AccordionDetails>
            </Accordion>

            <Accordion
              expanded={expanded === "panel19"}
              onChange={handleChange("panel19")}
              className="mat-accordion"
            >
              <AccordionSummary
                className="mat-summary"
                aria-controls="panel19d-content"
                id="panel19d-header"
              >
                <i className="material-symbols-outlined">share</i>
                <Typography component={"span"} className="title">
                  Social
                </Typography>
              </AccordionSummary>

              <AccordionDetails className="mat-details">
                <ul className="sidebar-sub-menu">
                  <li className="sidemenu-item">
                    <Link
                      to="/social/profile/"
                      className={`sidemenu-link ${isActiveLink(
                        "/social/profile/"
                      )}`}
                    >
                      Profile
                    </Link>
                  </li>

                  <li className="sidemenu-item">
                    <Link
                      to="/social/sttings/"
                      className={`sidemenu-link ${isActiveLink(
                        "/social/sttings/"
                      )}`}
                    >
                      Settings
                    </Link>
                  </li>
                </ul>
              </AccordionDetails>
            </Accordion>

            <Accordion
              expanded={expanded === "panel20"}
              onChange={handleChange("panel20")}
              className="mat-accordion"
            >
              <AccordionSummary
                className="mat-summary"
                aria-controls="panel20d-content"
                id="panel20d-header"
              >
                <i className="material-symbols-outlined">content_paste</i>
                <Typography component={"span"} className="title">
                  Invoices
                </Typography>
              </AccordionSummary>

              <AccordionDetails className="mat-details">
                <ul className="sidebar-sub-menu">
                  <li className="sidemenu-item">
                    <Link
                      to="/invoices/"
                      className={`sidemenu-link ${isActiveLink("/invoices/")}`}
                    >
                      Invoices
                    </Link>
                  </li>

                  <li className="sidemenu-item">
                    <Link
                      to="/invoices/invoices-details/"
                      className={`sidemenu-link ${isActiveLink(
                        "/invoices/invoices-details/"
                      )}`}
                    >
                      Invoice Details
                    </Link>
                  </li>

                  <li className="sidemenu-item">
                    <Link
                      to="/invoices/create-invoice/"
                      className={`sidemenu-link ${isActiveLink(
                        "/invoices/create-invoice/"
                      )}`}
                    >
                      Create Invoice
                    </Link>
                  </li>

                  <li className="sidemenu-item">
                    <Link
                      to="/invoices/edit-invoice/"
                      className={`sidemenu-link ${isActiveLink(
                        "/invoices/edit-invoice/"
                      )}`}
                    >
                      Edit Details
                    </Link>
                  </li>
                </ul>
              </AccordionDetails>
            </Accordion>

            <Accordion
              expanded={expanded === "panel21"}
              onChange={handleChange("panel21")}
              className="mat-accordion"
            >
              <AccordionSummary
                className="mat-summary"
                aria-controls="panel21d-content"
                id="panel21d-header"
              >
                <i className="material-symbols-outlined">person</i>
                <Typography component={"span"} className="title">
                  Users
                </Typography>
              </AccordionSummary>

              <AccordionDetails className="mat-details">
                <ul className="sidebar-sub-menu">
                  <li className="sidemenu-item">
                    <Link
                      to="/users/"
                      className={`sidemenu-link ${isActiveLink("/users/")}`}
                    >
                      Team Members
                    </Link>
                  </li>

                  <li className="sidemenu-item">
                    <Link
                      to="/users/users-list/"
                      className={`sidemenu-link ${isActiveLink(
                        "/users/users-list/"
                      )}`}
                    >
                      Users List
                    </Link>
                  </li>

                  <li className="sidemenu-item">
                    <Link
                      to="/users/add-user/"
                      className={`sidemenu-link ${isActiveLink(
                        "/users/add-user/"
                      )}`}
                    >
                      Add User
                    </Link>
                  </li>
                </ul>
              </AccordionDetails>
            </Accordion>

            <Accordion
              expanded={expanded === "panel22"}
              onChange={handleChange("panel22")}
              className="mat-accordion"
            >
              <AccordionSummary
                className="mat-summary"
                aria-controls="panel22d-content"
                id="panel22d-header"
              >
                <i className="material-symbols-outlined">account_box</i>
                <Typography component={"span"} className="title">
                  Profile
                </Typography>
              </AccordionSummary>

              <AccordionDetails className="mat-details">
                <ul className="sidebar-sub-menu">
                  <li className="sidemenu-item">
                    <Link
                      to="/profile/"
                      className={`sidemenu-link ${isActiveLink("/profile/")}`}
                    >
                      User Profile
                    </Link>
                  </li>

                  <li className="sidemenu-item">
                    <Link
                      to="/profile/teams/"
                      className={`sidemenu-link ${isActiveLink(
                        "/profile/teams/"
                      )}`}
                    >
                      Teams
                    </Link>
                  </li>

                  <li className="sidemenu-item">
                    <Link
                      to="/profile/projects/"
                      className={`sidemenu-link ${isActiveLink(
                        "/profile/projects/"
                      )}`}
                    >
                      Projects
                    </Link>
                  </li>
                </ul>
              </AccordionDetails>
            </Accordion>

            <Link
              to="/starter/"
              className={`sidebar-menu-link ${isActiveLink("/starter/")}`}
            >
              <i className="material-symbols-outlined">star_border</i>
              <Typography component={"span"} className="title">
                Starter
              </Typography>
            </Link>

            <Typography
              className="sub-title"
              sx={{
                display: "block",
                fontWeight: "500",
                textTransform: "uppercase",
              }}
            >
              MODULES
            </Typography>

            <Accordion
              expanded={expanded === "panel23"}
              onChange={handleChange("panel23")}
              className="mat-accordion"
            >
              <AccordionSummary
                className="mat-summary"
                aria-controls="panel23d-content"
                id="panel23d-header"
              >
                <i className="material-symbols-outlined">emoji_emotions</i>
                <Typography component={"span"} className="title">
                  Icons
                </Typography>
              </AccordionSummary>

              <AccordionDetails className="mat-details">
                <ul className="sidebar-sub-menu">
                  <li className="sidemenu-item">
                    <Link
                      to="/icons/material-symbols/"
                      className={`sidemenu-link ${isActiveLink(
                        "/icons/material-symbols/"
                      )}`}
                    >
                      Material Symbols
                    </Link>
                  </li>

                  <li className="sidemenu-item">
                    <Link
                      to="/icons/remixicon/"
                      className={`sidemenu-link ${isActiveLink(
                        "/icons/remixicon/"
                      )}`}
                    >
                      RemixIcon
                    </Link>
                  </li>
                </ul>
              </AccordionDetails>
            </Accordion>

            <Accordion
              expanded={expanded === "panel24"}
              onChange={handleChange("panel24")}
              className="mat-accordion"
            >
              <AccordionSummary
                className="mat-summary"
                aria-controls="panel24d-content"
                id="panel24d-header"
              >
                <i className="material-symbols-outlined">qr_code_scanner</i>
                <Typography component={"span"} className="title">
                  UI Elements
                </Typography>
              </AccordionSummary>

              <AccordionDetails className="mat-details">
                <ul className="sidebar-sub-menu">
                  <li className="sidemenu-item">
                    <Link
                      to="/ui-kit/autocomplete/"
                      className={`sidemenu-link ${isActiveLink(
                        "/ui-kit/autocomplete/"
                      )}`}
                    >
                      Autocomplete
                    </Link>
                  </li>

                  <li className="sidemenu-item">
                    <Link
                      to="/ui-kit/buttons/"
                      className={`sidemenu-link ${isActiveLink(
                        "/ui-kit/buttons/"
                      )}`}
                    >
                      Buttons
                    </Link>
                  </li>

                  <li className="sidemenu-item">
                    <Link
                      to="/ui-kit/checkbox/"
                      className={`sidemenu-link ${isActiveLink(
                        "/ui-kit/checkbox/"
                      )}`}
                    >
                      Checkbox
                    </Link>
                  </li>

                  <li className="sidemenu-item">
                    <Link
                      to="/ui-kit/radio/"
                      className={`sidemenu-link ${isActiveLink(
                        "/ui-kit/radio/"
                      )}`}
                    >
                      Radio
                    </Link>
                  </li>

                  <li className="sidemenu-item">
                    <Link
                      to="/ui-kit/rating/"
                      className={`sidemenu-link ${isActiveLink(
                        "/ui-kit/rating/"
                      )}`}
                    >
                      Rating
                    </Link>
                  </li>

                  <li className="sidemenu-item">
                    <Link
                      to="/ui-kit/select/"
                      className={`sidemenu-link ${isActiveLink(
                        "/ui-kit/select/"
                      )}`}
                    >
                      Select
                    </Link>
                  </li>

                  <li className="sidemenu-item">
                    <Link
                      to="/ui-kit/slider/"
                      className={`sidemenu-link ${isActiveLink(
                        "/ui-kit/slider/"
                      )}`}
                    >
                      Slider
                    </Link>
                  </li>

                  <li className="sidemenu-item">
                    <Link
                      to="/ui-kit/switch/"
                      className={`sidemenu-link ${isActiveLink(
                        "/ui-kit/switch/"
                      )}`}
                    >
                      Switch
                    </Link>
                  </li>

                  <li className="sidemenu-item">
                    <Link
                      to="/ui-kit/transfer-list/"
                      className={`sidemenu-link ${isActiveLink(
                        "/ui-kit/transfer-list/"
                      )}`}
                    >
                      Transfer List
                    </Link>
                  </li>

                  <li className="sidemenu-item">
                    <Link
                      to="/ui-kit/avatar/"
                      className={`sidemenu-link ${isActiveLink(
                        "/ui-kit/avatar/"
                      )}`}
                    >
                      Avatar
                    </Link>
                  </li>

                  <li className="sidemenu-item">
                    <Link
                      to="/ui-kit/badge/"
                      className={`sidemenu-link ${isActiveLink(
                        "/ui-kit/badge/"
                      )}`}
                    >
                      Badge
                    </Link>
                  </li>

                  <li className="sidemenu-item">
                    <Link
                      to="/ui-kit/chip/"
                      className={`sidemenu-link ${isActiveLink(
                        "/ui-kit/chip/"
                      )}`}
                    >
                      Chip
                    </Link>
                  </li>

                  <li className="sidemenu-item">
                    <Link
                      to="/ui-kit/divider/"
                      className={`sidemenu-link ${isActiveLink(
                        "/ui-kit/divider/"
                      )}`}
                    >
                      Divider
                    </Link>
                  </li>

                  <li className="sidemenu-item">
                    <Link
                      to="/ui-kit/table/"
                      className={`sidemenu-link ${isActiveLink(
                        "/ui-kit/table/"
                      )}`}
                    >
                      Table
                    </Link>
                  </li>

                  <li className="sidemenu-item">
                    <Link
                      to="/ui-kit/tooltip/"
                      className={`sidemenu-link ${isActiveLink(
                        "/ui-kit/tooltip/"
                      )}`}
                    >
                      Tooltip
                    </Link>
                  </li>

                  <li className="sidemenu-item">
                    <Link
                      to="/ui-kit/typography/"
                      className={`sidemenu-link ${isActiveLink(
                        "/ui-kit/typography/"
                      )}`}
                    >
                      Typography
                    </Link>
                  </li>

                  <li className="sidemenu-item">
                    <Link
                      to="/ui-kit/alerts/"
                      className={`sidemenu-link ${isActiveLink(
                        "/ui-kit/alerts/"
                      )}`}
                    >
                      Alerts
                    </Link>
                  </li>

                  <li className="sidemenu-item">
                    <Link
                      to="/ui-kit/dialog/"
                      className={`sidemenu-link ${isActiveLink(
                        "/ui-kit/dialog/"
                      )}`}
                    >
                      Dialog
                    </Link>
                  </li>

                  <li className="sidemenu-item">
                    <Link
                      to="/ui-kit/progress/"
                      className={`sidemenu-link ${isActiveLink(
                        "/ui-kit/progress/"
                      )}`}
                    >
                      Progress
                    </Link>
                  </li>

                  <li className="sidemenu-item">
                    <Link
                      to="/ui-kit/snackbar/"
                      className={`sidemenu-link ${isActiveLink(
                        "/ui-kit/snackbar/"
                      )}`}
                    >
                      Snackbar
                    </Link>
                  </li>

                  <li className="sidemenu-item">
                    <Link
                      to="/ui-kit/accordion/"
                      className={`sidemenu-link ${isActiveLink(
                        "/ui-kit/accordion/"
                      )}`}
                    >
                      Accordion
                    </Link>
                  </li>

                  <li className="sidemenu-item">
                    <Link
                      to="/ui-kit/card/"
                      className={`sidemenu-link ${isActiveLink(
                        "/ui-kit/card/"
                      )}`}
                    >
                      Card
                    </Link>
                  </li>

                  <li className="sidemenu-item">
                    <Link
                      to="/ui-kit/breadcrumbs/"
                      className={`sidemenu-link ${isActiveLink(
                        "/ui-kit/breadcrumbs/"
                      )}`}
                    >
                      Breadcrumbs
                    </Link>
                  </li>

                  <li className="sidemenu-item">
                    <Link
                      to="/ui-kit/pagination/"
                      className={`sidemenu-link ${isActiveLink(
                        "/ui-kit/pagination/"
                      )}`}
                    >
                      Pagination
                    </Link>
                  </li>

                  <li className="sidemenu-item">
                    <Link
                      to="/ui-kit/speed-dial/"
                      className={`sidemenu-link ${isActiveLink(
                        "/ui-kit/speed-dial/"
                      )}`}
                    >
                      Speed Dial
                    </Link>
                  </li>

                  <li className="sidemenu-item">
                    <Link
                      to="/ui-kit/stepper/"
                      className={`sidemenu-link ${isActiveLink(
                        "/ui-kit/stepper/"
                      )}`}
                    >
                      Stepper
                    </Link>
                  </li>

                  <li className="sidemenu-item">
                    <Link
                      to="/ui-kit/tabs/"
                      className={`sidemenu-link ${isActiveLink(
                        "/ui-kit/tabs/"
                      )}`}
                    >
                      Tabs
                    </Link>
                  </li>

                  <li className="sidemenu-item">
                    <Link
                      to="/ui-kit/image-list/"
                      className={`sidemenu-link ${isActiveLink(
                        "/ui-kit/image-list/"
                      )}`}
                    >
                      Image List
                    </Link>
                  </li>

                  <li className="sidemenu-item">
                    <Link
                      to="/ui-kit/transitions/"
                      className={`sidemenu-link ${isActiveLink(
                        "/ui-kit/transitions/"
                      )}`}
                    >
                      Transitions
                    </Link>
                  </li>

                  <li className="sidemenu-item">
                    <Link
                      to="/ui-kit/tree-view/"
                      className={`sidemenu-link ${isActiveLink(
                        "/ui-kit/tree-view/"
                      )}`}
                    >
                      Tree View
                    </Link>
                  </li>

                  <li className="sidemenu-item">
                    <Link
                      to="/ui-kit/masonry/"
                      className={`sidemenu-link ${isActiveLink(
                        "/ui-kit/masonry/"
                      )}`}
                    >
                      Masonry
                    </Link>
                  </li>

                  <li className="sidemenu-item">
                    <Link
                      to="/ui-kit/timeline/"
                      className={`sidemenu-link ${isActiveLink(
                        "/ui-kit/timeline/"
                      )}`}
                    >
                      Timeline
                    </Link>
                  </li>
                </ul>
              </AccordionDetails>
            </Accordion>

            <Accordion
              expanded={expanded === "panel25"}
              onChange={handleChange("panel25")}
              className="mat-accordion"
            >
              <AccordionSummary
                className="mat-summary"
                aria-controls="panel25d-content"
                id="panel25d-header"
              >
                <i className="material-symbols-outlined">table_chart</i>
                <Typography component={"span"} className="title">
                  Tables
                </Typography>
              </AccordionSummary>

              <AccordionDetails className="mat-details">
                <ul className="sidebar-sub-menu">
                  <li className="sidemenu-item">
                    <Link
                      to="/tables/basic-table/"
                      className={`sidemenu-link ${isActiveLink(
                        "/tables/basic-table/"
                      )}`}
                    >
                      Basic Tables
                    </Link>
                  </li>

                  <li className="sidemenu-item">
                    <Link
                      to="/tables/data-table/"
                      className={`sidemenu-link ${isActiveLink(
                        "/tables/data-table/"
                      )}`}
                    >
                      Data Table
                    </Link>
                  </li>
                </ul>
              </AccordionDetails>
            </Accordion>

            <Accordion
              expanded={expanded === "panel26"}
              onChange={handleChange("panel26")}
              className="mat-accordion"
            >
              <AccordionSummary
                className="mat-summary"
                aria-controls="panel26d-content"
                id="panel26d-header"
              >
                <i className="material-symbols-outlined">forum</i>
                <Typography component={"span"} className="title">
                  Forms
                </Typography>
              </AccordionSummary>

              <AccordionDetails className="mat-details">
                <ul className="sidebar-sub-menu">
                  <li className="sidemenu-item">
                    <Link
                      to="/forms/basic-elements/"
                      className={`sidemenu-link ${isActiveLink(
                        "/forms/basic-elements/"
                      )}`}
                    >
                      Basic Elements
                    </Link>
                  </li>

                  <li className="sidemenu-item">
                    <Link
                      to="/forms/advanced-elements/"
                      className={`sidemenu-link ${isActiveLink(
                        "/forms/advanced-elements/"
                      )}`}
                    >
                      Advanced Elements
                    </Link>
                  </li>

                  <li className="sidemenu-item">
                    <Link
                      to="/forms/editors/"
                      className={`sidemenu-link ${isActiveLink(
                        "/forms/editors/"
                      )}`}
                    >
                      Editors
                    </Link>
                  </li>

                  <li className="sidemenu-item">
                    <Link
                      to="/forms/file-uploader/"
                      className={`sidemenu-link ${isActiveLink(
                        "/forms/file-uploader/"
                      )}`}
                    >
                      File Uploader
                    </Link>
                  </li>
                </ul>
              </AccordionDetails>
            </Accordion>

            <Accordion
              expanded={expanded === "panel27"}
              onChange={handleChange("panel27")}
              className="mat-accordion"
            >
              <AccordionSummary
                className="mat-summary"
                aria-controls="panel27d-content"
                id="panel27d-header"
              >
                <i className="material-symbols-outlined">pie_chart</i>
                <Typography component={"span"} className="title">
                  Charts
                </Typography>
              </AccordionSummary>

              <AccordionDetails className="mat-details">
                <ul className="sidebar-sub-menu">
                  <li className="sidemenu-item">
                    <Link
                      to="/charts/line"
                      className={`sidemenu-link ${isActiveLink(
                        "/charts/line"
                      )}`}
                    >
                      Line
                    </Link>
                  </li>

                  <li className="sidemenu-item">
                    <Link
                      to="/charts/area"
                      className={`sidemenu-link ${isActiveLink(
                        "/charts/area"
                      )}`}
                    >
                      Area
                    </Link>
                  </li>

                  <li className="sidemenu-item">
                    <Link
                      to="/charts/column"
                      className={`sidemenu-link ${isActiveLink(
                        "/charts/column"
                      )}`}
                    >
                      Column
                    </Link>
                  </li>

                  <li className="sidemenu-item">
                    <Link
                      to="/charts/mixed"
                      className={`sidemenu-link ${isActiveLink(
                        "/charts/mixed"
                      )}`}
                    >
                      Mixed
                    </Link>
                  </li>

                  <li className="sidemenu-item">
                    <Link
                      to="/charts/radialbar"
                      className={`sidemenu-link ${isActiveLink(
                        "/charts/radialbar"
                      )}`}
                    >
                      RadialBar
                    </Link>
                  </li>

                  <li className="sidemenu-item">
                    <Link
                      to="/charts/radar"
                      className={`sidemenu-link ${isActiveLink(
                        "/charts/radar"
                      )}`}
                    >
                      Radar
                    </Link>
                  </li>

                  <li className="sidemenu-item">
                    <Link
                      to="/charts/pie"
                      className={`sidemenu-link ${isActiveLink("/charts/pie")}`}
                    >
                      Pie
                    </Link>
                  </li>

                  <li className="sidemenu-item">
                    <Link
                      to="/charts/polar"
                      className={`sidemenu-link ${isActiveLink(
                        "/charts/polar"
                      )}`}
                    >
                      Polar
                    </Link>
                  </li>

                  <li className="sidemenu-item">
                    <Link
                      to="/charts/more"
                      className={`sidemenu-link ${isActiveLink(
                        "/charts/more"
                      )}`}
                    >
                      More
                    </Link>
                  </li>
                </ul>
              </AccordionDetails>
            </Accordion>

            <Accordion
              expanded={expanded === "panel28"}
              onChange={handleChange("panel28")}
              className="mat-accordion"
            >
              <AccordionSummary
                className="mat-summary"
                aria-controls="panel28d-content"
                id="panel28d-header"
              >
                <i className="material-symbols-outlined">lock_open</i>
                <Typography component={"span"} className="title">
                  Authentication
                </Typography>
              </AccordionSummary>

              <AccordionDetails className="mat-details">
                <ul className="sidebar-sub-menu">
                  <li className="sidemenu-item">
                    <a
                      href="/authentication/sign-in/"
                      className="sidemenu-link"
                    >
                      Sign In
                    </a>
                  </li>

                  <li className="sidemenu-item">
                    <a
                      href="/authentication/sign-up/"
                      className="sidemenu-link"
                    >
                      Sign Up
                    </a>
                  </li>

                  <li className="sidemenu-item">
                    <a
                      href="/authentication/forgot-password/"
                      className="sidemenu-link"
                    >
                      Forgot Password
                    </a>
                  </li>

                  <li className="sidemenu-item">
                    <a
                      href="/authentication/reset-password/"
                      className="sidemenu-link"
                    >
                      Reset Password
                    </a>
                  </li>

                  <li className="sidemenu-item">
                    <a
                      href="/authentication/confirm-email/"
                      className="sidemenu-link"
                    >
                      Confirm Email
                    </a>
                  </li>

                  <li className="sidemenu-item">
                    <a
                      href="/authentication/lock-screen/"
                      className="sidemenu-link"
                    >
                      Lock Screen
                    </a>
                  </li>

                  <li className="sidemenu-item">
                    <a href="/authentication/logout/" className="sidemenu-link">
                      Logout
                    </a>
                  </li>
                </ul>
              </AccordionDetails>
            </Accordion>

            <Accordion
              expanded={expanded === "panel29"}
              onChange={handleChange("panel29")}
              className="mat-accordion"
            >
              <AccordionSummary
                className="mat-summary"
                aria-controls="panel29d-content"
                id="panel29d-header"
              >
                <i className="material-symbols-outlined">content_copy</i>
                <Typography component={"span"} className="title">
                  Extra Pages
                </Typography>
              </AccordionSummary>

              <AccordionDetails className="mat-details">
                <ul className="sidebar-sub-menu">
                  <li className="sidemenu-item">
                    <Link
                      to="/pricing/"
                      className={`sidemenu-link ${isActiveLink("/pricing/")}`}
                    >
                      Pricing
                    </Link>
                  </li>

                  <li className="sidemenu-item">
                    <Link
                      to="/timeline/"
                      className={`sidemenu-link ${isActiveLink("/timeline/")}`}
                    >
                      Timeline
                    </Link>
                  </li>

                  <li className="sidemenu-item">
                    <Link
                      to="/extra-faq/"
                      className={`sidemenu-link ${isActiveLink("/extra-faq/")}`}
                    >
                      FAQ's
                    </Link>
                  </li>

                  <li className="sidemenu-item">
                    <Link
                      to="/gallery/"
                      className={`sidemenu-link ${isActiveLink("/gallery/")}`}
                    >
                      Gallery
                    </Link>
                  </li>

                  <li className="sidemenu-item">
                    <Link
                      to="/testimonials/"
                      className={`sidemenu-link ${isActiveLink(
                        "/testimonials/"
                      )}`}
                    >
                      Testimonials
                    </Link>
                  </li>

                  <li className="sidemenu-item">
                    <Link
                      to="/search/"
                      className={`sidemenu-link ${isActiveLink("/search/")}`}
                    >
                      Search
                    </Link>
                  </li>

                  <li className="sidemenu-item">
                    <a href="/coming-soon/" className="sidemenu-link">
                      Coming Soon
                    </a>
                  </li>

                  <li className="sidemenu-item">
                    <Link
                      to="/blank-page/"
                      className={`sidemenu-link ${isActiveLink(
                        "/blank-page/"
                      )}`}
                    >
                      Blank Page
                    </Link>
                  </li>
                </ul>
              </AccordionDetails>
            </Accordion>

            <Accordion
              expanded={expanded === "panel30"}
              onChange={handleChange("panel30")}
              className="mat-accordion"
            >
              <AccordionSummary
                className="mat-summary"
                aria-controls="panel30d-content"
                id="panel30d-header"
              >
                <i className="material-symbols-outlined">error</i>
                <Typography component={"span"} className="title">
                  Errors
                </Typography>
              </AccordionSummary>

              <AccordionDetails className="mat-details">
                <ul className="sidebar-sub-menu">
                  <li className="sidemenu-item">
                    <Link
                      to="/not-found/"
                      className={`sidemenu-link ${isActiveLink("/not-found/")}`}
                    >
                      404 Error Page
                    </Link>
                  </li>

                  <li className="sidemenu-item">
                    <Link
                      to="/internal-error/"
                      className={`sidemenu-link ${isActiveLink(
                        "/internal-error/"
                      )}`}
                    >
                      Internal Error
                    </Link>
                  </li>
                </ul>
              </AccordionDetails>
            </Accordion>

            <Link
              to="/widgets/"
              className={`sidebar-menu-link ${isActiveLink("/widgets/")}`}
            >
              <i className="material-symbols-outlined">widgets</i>
              <Typography component={"span"} className="title">
                Widgets
              </Typography>
            </Link>

            <Link
              to="/maps/"
              className={`sidebar-menu-link ${isActiveLink("/maps/")}`}
            >
              <i className="material-symbols-outlined">map</i>
              <Typography component={"span"} className="title">
                Maps
              </Typography>
            </Link>

            <Link
              to="/notifications/"
              className={`sidebar-menu-link ${isActiveLink("/notifications/")}`}
            >
              <i className="material-symbols-outlined">notifications</i>
              <Typography component={"span"} className="title">
                Notifications
              </Typography>
            </Link>

            <Link
              to="/members/"
              className={`sidebar-menu-link ${isActiveLink("/members/")}`}
            >
              <i className="material-symbols-outlined">people</i>
              <Typography component={"span"} className="title">
                Members
              </Typography>
            </Link>

            <Typography
              className="sub-title"
              sx={{
                display: "block",
                fontWeight: "500",
                textTransform: "uppercase",
              }}
            >
              OTHERS
            </Typography>

            <Link
              to="/my-profile/"
              className={`sidebar-menu-link ${isActiveLink("/my-profile/")}`}
            >
              <i className="material-symbols-outlined">account_circle</i>
              <Typography component={"span"} className="title">
                My Profile
              </Typography>
            </Link>

            <Accordion
              expanded={expanded === "panel31"}
              onChange={handleChange("panel31")}
              className="mat-accordion"
            >
              <AccordionSummary
                className="mat-summary"
                aria-controls="panel31d-content"
                id="panel31d-header"
              >
                <i className="material-symbols-outlined">settings</i>
                <Typography component={"span"} className="title">
                  Settings
                </Typography>
              </AccordionSummary>

              <AccordionDetails className="mat-details">
                <ul className="sidebar-sub-menu">
                  <li className="sidemenu-item">
                    <Link
                      to="/settings/account-settings"
                      className={`sidemenu-link ${isActiveLink(
                        "/settings/account-settings"
                      )}`}
                    >
                      Account Settings
                    </Link>
                  </li>

                  <li className="sidemenu-item">
                    <Link
                      to="/settings/change-password/"
                      className={`sidemenu-link ${isActiveLink(
                        "/settings/change-password/"
                      )}`}
                    >
                      Change Password
                    </Link>
                  </li>

                  <li className="sidemenu-item">
                    <Link
                      to="/settings/connections/"
                      className={`sidemenu-link ${isActiveLink(
                        "/settings/connections/"
                      )}`}
                    >
                      Connections
                    </Link>
                  </li>

                  <li className="sidemenu-item">
                    <Link
                      to="/settings/privacy-policy/"
                      className={`sidemenu-link ${isActiveLink(
                        "/settings/privacy-policy/"
                      )}`}
                    >
                      Privacy Policy
                    </Link>
                  </li>

                  <li className="sidemenu-item">
                    <Link
                      to="/settings/terms-conditions/"
                      className={`sidemenu-link ${isActiveLink(
                        "/settings/terms-conditions/"
                      )}`}
                    >
                      Terms & Conditions
                    </Link>
                  </li>
                </ul>
              </AccordionDetails>
            </Accordion>

            <a href="/authentication/logout/" className="sidebar-menu-link">
              <i className="material-symbols-outlined">logout</i>
              <Typography component={"span"} className="title">
                Logout
              </Typography>
            </a>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default LeftSidebarMenu;
