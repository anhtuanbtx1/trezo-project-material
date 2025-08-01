"use client";

import React from "react";
import { Grid, Box } from "@mui/material";
import { Link } from "react-router-dom";

const Footer = () => {
  // Data for the footer
  const footerData = {
    description:
      "With customizable dashboards tailored to your needs, collaborate effortlessly with your team and stay ahead with real-time updates.",
    socialLinks: [
      { href: "https://www.facebook.com/", icon: "ri-facebook-fill" },
      { href: "https://www.twitter.com/", icon: "ri-twitter-x-fill" },
      { href: "https://www.linkedin.com/", icon: "ri-linkedin-fill" },
      { href: "https://www.dribbble.com/", icon: "ri-dribbble-fill" },
    ],
    sections: [
      {
        title: "Our Products",
        links: [
          { text: "Trezo Dashboard", href: "#" },
          { text: "Tagus Admin", href: "#" },
          { text: "eCademy LMS", href: "#" },
          { text: "Admash Template", href: "#" },
        ],
      },
      {
        title: "Quick Links",
        links: [
          { text: "Home", href: "/" },
          { text: "Features", href: "/features" },
          { text: "Testimonials", href: "#" },
          { text: "Our Team", href: "/team" },
        ],
      },
      {
        title: "Privacy Policy",
        links: [
          { text: "Terms & Conditions", href: "#" },
          { text: "Cookie Policy", href: "#" },
          { text: "Notice at Collection", href: "#" },
          { text: "Privacy Policy", href: "#" },
        ],
      },
    ],
    copyright: {
      text: "© Trezo is Proudly Owned by ",
      owner: "EnvyTheme",
      ownerLink: "https://envytheme.com/",
    },
  };

  return (
    <Box
      className="fp-footer"
      sx={{
        pt: { xs: "60px", sm: "60px", md: "80px", lg: "100px", xl: "150px" }, 
      }}
    >
      <Box
        sx={{
          maxWidth: {
            xs: "100%",
            sm: "700px",
            md: "720px",
            lg: "1140px",
            xl: "1320px",
          },
          mx: "auto",
          px: "12px",
        }}
      >
        <Grid container columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}>
          {/* Logo and Description */}
          <Grid size={{ xs: 12, sm: 6, md: 6, lg: 3 }}>
            <div className="single-footer-widget">
              <Link to="/" className="logo">
                <img
                  src="/images/logo-big.svg"
                  alt="logo"
                  width={100}
                  height={26}
                />
                <img
                  src="/images/white-logo-big.svg"
                  className="d-none"
                  alt="logo"
                  width={142}
                  height={38}
                />
              </Link>
              <p>{footerData.description}</p>
              <div className="socials">
                {footerData.socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className={link.icon}></i>
                  </a>
                ))}
              </div>
            </div>
          </Grid>

          {/* Footer Sections */}
          {footerData.sections.map((section, index) => (
            <Grid key={index} size={{ xs: 12, sm: 6, md: 6, lg: 3, xl: 3 }}>
              <div className="single-footer-widget">
                <h3>{section.title}</h3>
                <ul className="custom-links">
                  {section.links.map((link, i) => (
                    <li key={i}>
                      <Link to={link.href}>{link.text}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Copyright Section */}
      <div className="copyright-area bg-white text-center">
        <div className="container">
          <p>
            {footerData.copyright.text}
            <a
              href={footerData.copyright.ownerLink}
              target="_blank"
              rel="noreferrer"
            >
              {footerData.copyright.owner}
            </a>
          </p>
        </div>
      </div>
    </Box>
  );
};

export default Footer;
