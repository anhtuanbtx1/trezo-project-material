"use client";

import React, { useState } from "react";
import {
  Grid,
  Card,
  Box,
  Button,
  Menu,
  IconButton,
  MenuItem,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const teamMembers = [
  {
    id: 1,
    name: "Ava Turner",
    role: "Business Analyst",
    joinedDate: "01 Jan 2024",
    email: "turner@trezo.com",
    phone: "+1 555-445-4455",
    location: "Washington D.C",
    image: "/images/users/user11.jpg",
    socialLinks: [
      { platform: "facebook", url: "https://www.facebook.com/" },
      { platform: "twitter", url: "https://twitter.com/" },
      { platform: "linkedin", url: "https://www.linkedin.com/in/" },
      { platform: "github", url: "https://github.com/" },
    ],
  },
  {
    id: 2,
    name: "Ethan Parker",
    role: "Project Manager",
    joinedDate: "10 Jan 2024",
    email: "parker@trezo.com",
    phone: "+1 555-445-7788",
    location: "San Diego",
    image: "/images/users/user12.jpg",
    socialLinks: [
      { platform: "facebook", url: "https://www.facebook.com/" },
      { platform: "twitter", url: "https://twitter.com/" },
      { platform: "linkedin", url: "https://www.linkedin.com/in/" },
      { platform: "github", url: "https://github.com/" },
    ],
  },
  {
    id: 3,
    name: "Isabella Lee",
    role: "Team Leader",
    joinedDate: "20 Jan 2024",
    email: "lee@trezo.com",
    phone: "+1 555-333-2288",
    location: "Los Angeles",
    image: "/images/users/user13.jpg",
    socialLinks: [
      { platform: "facebook", url: "https://www.facebook.com/" },
      { platform: "twitter", url: "https://twitter.com/" },
      { platform: "linkedin", url: "https://www.linkedin.com/in/" },
      { platform: "github", url: "https://github.com/" },
    ],
  },
  {
    id: 4,
    name: "Thompson Torres",
    role: "Designer",
    joinedDate: "1 Jan 2024",
    email: "thompson@trezo.com",
    phone: "+1 555-444-3355",
    location: "Boston",
    image: "/images/users/user14.jpg",
    socialLinks: [
      { platform: "facebook", url: "https://www.facebook.com/" },
      { platform: "twitter", url: "https://twitter.com/" },
      { platform: "linkedin", url: "https://www.linkedin.com/in/" },
      { platform: "github", url: "https://github.com/" },
    ],
  },
  {
    id: 5,
    name: "Lucas Lyon",
    role: "Technical Writer",
    joinedDate: "10 Jan 2024",
    email: "lucas@trezo.com",
    phone: "+1 555-444-9966",
    location: "Chicago",
    image: "/images/users/user15.jpg",
    socialLinks: [
      { platform: "facebook", url: "https://www.facebook.com/" },
      { platform: "twitter", url: "https://twitter.com/" },
      { platform: "linkedin", url: "https://www.linkedin.com/in/" },
      { platform: "github", url: "https://github.com/" },
    ],
  },
  {
    id: 6,
    name: "Morgan Sturges",
    role: "Data Analyst",
    joinedDate: "1 Mar 2024",
    email: "morgan@trezo.com",
    phone: "+1 555-444-7755",
    location: "Las Vegas",
    image: "/images/users/user16.jpg",
    socialLinks: [
      { platform: "facebook", url: "https://www.facebook.com/" },
      { platform: "twitter", url: "https://twitter.com/" },
      { platform: "linkedin", url: "https://www.linkedin.com/in/" },
      { platform: "github", url: "https://github.com/" },
    ],
  },
  {
    id: 7,
    name: "Sophia McNeel",
    role: "Sales Representative",
    joinedDate: "15 Jan 2024",
    email: "sophia@trezo.com",
    phone: "+1 555-444-8822",
    location: "San Francisco",
    image: "/images/users/user17.jpg",
    socialLinks: [
      { platform: "facebook", url: "https://www.facebook.com/" },
      { platform: "twitter", url: "https://twitter.com/" },
      { platform: "linkedin", url: "https://www.linkedin.com/in/" },
      { platform: "github", url: "https://github.com/" },
    ],
  },
  {
    id: 8,
    name: "Rodriguez Meade",
    role: "Manager",
    joinedDate: "01 Apr 2024",
    email: "rodriguez@trezo.com",
    phone: "+1 555-444-4411",
    location: "Houston",
    image: "/images/users/user18.jpg",
    socialLinks: [
      { platform: "facebook", url: "https://www.facebook.com/" },
      { platform: "twitter", url: "https://twitter.com/" },
      { platform: "linkedin", url: "https://www.linkedin.com/in/" },
      { platform: "github", url: "https://github.com/" },
    ],
  },
  {
    id: 9,
    name: "Michael Mackenzie",
    role: "Web Developer",
    joinedDate: "05 Apr 2024",
    email: "michael@trezo.com",
    phone: "+1 555-444-9922",
    location: "Oklahoma Cit",
    image: "/images/users/user19.jpg",
    socialLinks: [
      { platform: "facebook", url: "https://www.facebook.com/" },
      { platform: "twitter", url: "https://twitter.com/" },
      { platform: "linkedin", url: "https://www.linkedin.com/in/" },
      { platform: "github", url: "https://github.com/" },
    ],
  },
  {
    id: 10,
    name: "Charles Tharp",
    role: "Accountant",
    joinedDate: "01 May 2024",
    email: "charles@trezo.com",
    phone: "+1 555-444-2255",
    location: "Austin",
    image: "/images/users/user20.jpg",
    socialLinks: [
      { platform: "facebook", url: "https://www.facebook.com/" },
      { platform: "twitter", url: "https://twitter.com/" },
      { platform: "linkedin", url: "https://www.linkedin.com/in/" },
      { platform: "github", url: "https://github.com/" },
    ],
  },
  {
    id: 11,
    name: "Tina Bell",
    role: "Executive Assistant",
    joinedDate: "10 May 2024",
    email: "tina@trezo.com",
    phone: "+1 555-444-3399",
    location: "Portland",
    image: "/images/users/user21.jpg",
    socialLinks: [
      { platform: "facebook", url: "https://www.facebook.com/" },
      { platform: "twitter", url: "https://twitter.com/" },
      { platform: "linkedin", url: "https://www.linkedin.com/in/" },
      { platform: "github", url: "https://github.com/" },
    ],
  },
  {
    id: 12,
    name: "Melvin Larocque",
    role: "Business Analyst",
    joinedDate: "15 May 2024",
    email: "melvin@trezo.com",
    phone: "+1 555-444-4455",
    location: "Washington D.C",
    image: "/images/users/user12.jpg",
    socialLinks: [
      { platform: "facebook", url: "https://www.facebook.com/" },
      { platform: "twitter", url: "https://twitter.com/" },
      { platform: "linkedin", url: "https://www.linkedin.com/in/" },
      { platform: "github", url: "https://github.com/" },
    ],
  },
  {
    id: 13,
    name: "Morgan Sturges",
    role: "Data Analyst",
    joinedDate: "1 Mar 2024",
    email: "morgan@trezo.com",
    phone: "+1 555-444-7755",
    location: "Las Vegas",
    image: "/images/users/user16.jpg",
    socialLinks: [
      { platform: "facebook", url: "https://www.facebook.com/" },
      { platform: "twitter", url: "https://twitter.com/" },
      { platform: "linkedin", url: "https://www.linkedin.com/in/" },
      { platform: "github", url: "https://github.com/" },
    ],
  },
  {
    id: 14,
    name: "Rodriguez Meade",
    role: "Manager",
    joinedDate: "01 Apr 2024",
    email: "rodriguez@trezo.com",
    phone: "+1 555-444-4411",
    location: "Houston",
    image: "/images/users/user18.jpg",
    socialLinks: [
      { platform: "facebook", url: "https://www.facebook.com/" },
      { platform: "twitter", url: "https://twitter.com/" },
      { platform: "linkedin", url: "https://www.linkedin.com/in/" },
      { platform: "github", url: "https://github.com/" },
    ],
  },
  {
    id: 15,
    name: "Sophia McNeel",
    role: "Sales Representative",
    joinedDate: "15 Jan 2024",
    email: "sophia@trezo.com",
    phone: "+1 555-444-8822",
    location: "San Francisco",
    image: "/images/users/user17.jpg",
    socialLinks: [
      { platform: "facebook", url: "https://www.facebook.com/" },
      { platform: "twitter", url: "https://twitter.com/" },
      { platform: "linkedin", url: "https://www.linkedin.com/in/" },
      { platform: "github", url: "https://github.com/" },
    ],
  },
  {
    id: 16,
    name: "Charles Tharp",
    role: "Accountant",
    joinedDate: "01 May 2024",
    email: "charles@trezo.com",
    phone: "+1 555-444-2255",
    location: "Austin",
    image: "/images/users/user20.jpg",
    socialLinks: [
      { platform: "facebook", url: "https://www.facebook.com/" },
      { platform: "twitter", url: "https://twitter.com/" },
      { platform: "linkedin", url: "https://www.linkedin.com/in/" },
      { platform: "github", url: "https://github.com/" },
    ],
  },
];

const getSocialColor = (platform) => {
  switch (platform) {
    case "facebook":
      return "#3a559f";
    case "twitter":
      return "#03a9f4";
    case "linkedin":
      return "#007ab9";
    case "github":
      return "#000";
    default:
      return "#ccc";
  }
};

const TeamMembers = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12; // Adjust the number of items per page
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // Filter team members based on the search query
  const filteredMembers = teamMembers.filter(
    (member) =>
      member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredMembers.length / itemsPerPage);

  const paginatedMembers = filteredMembers.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  return (
    <>
      <Card
        sx={{
          boxShadow: "none",
          borderRadius: "7px",
          mb: "25px",
          padding: { xs: "18px", sm: "20px", lg: "25px" },
        }}
        className="rmui-card"
      >
        <Box
          sx={{
            display: { sm: "flex" },
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box
            component="form"
            className="t-search-form"
            sx={{
              width: { sm: "265px" },
              mb: { xs: "10px", sm: "0" },
            }}
          >
            <label>
              <i className="material-symbols-outlined">search</i>
            </label>
            <input
              type="text"
              className="t-input"
              placeholder="Search here..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </Box>

          <Box>
            <Link to="/users/add-user">
              <Button
                variant="outlined"
                sx={{
                  textTransform: "capitalize",
                  borderRadius: "7px",
                  fontWeight: "500",
                  fontSize: "13px",
                  padding: "6px 13px",
                }}
                color="primary"
              >
                <AddIcon sx={{ position: "relative", top: "-1px" }} /> Add New
                Member
              </Button>
            </Link>
          </Box>
        </Box>
      </Card>

      <Grid container columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}>
        {paginatedMembers.map((member) => (
          <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 3 }} key={member.id}>
            <Card
              sx={{
                boxShadow: "none",
                borderRadius: "7px",
                padding: { xs: "18px", sm: "20px", lg: "25px" },
                mb: "25px",
              }}
              className="rmui-card team-member-card"
            >
              <Box
                className="info d-flex align-items-center justify-content-between"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  mb: "15px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "15px",
                  }}
                >
                  <Box>
                    <img
                      src={member.image}
                      alt={member.name}
                      width={65}
                      height={65}
                      style={{
                        borderRadius: "100px",
                      }}
                    />
                  </Box>
                  <Box>
                    <Typography
                      variant="h6"
                      fontSize="16px"
                      className="text-black"
                    >
                      {member.name}
                    </Typography>
                    <Typography>{member.role}</Typography>
                  </Box>
                </Box>

                <Box>
                  <IconButton
                    onClick={handleClick}
                    size="small"
                    aria-controls={open ? "account-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                  >
                    <MoreHorizIcon sx={{ fontSize: "25px" }} />
                  </IconButton>

                  <Menu
                    anchorEl={anchorEl}
                    id="account-menu"
                    open={open}
                    onClose={handleClose}
                    onClick={handleClose}
                    PaperProps={{
                      elevation: 0,
                      sx: {
                        overflow: "visible",
                        boxShadow: "0px 1px 7px #ddd",
                        mt: 0,
                      },
                    }}
                    transformOrigin={{ horizontal: "right", vertical: "top" }}
                    anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                  >
                    <MenuItem>View</MenuItem>
                    <MenuItem>Edit</MenuItem>
                    <MenuItem>Delete</MenuItem>
                  </Menu>
                </Box>
              </Box>

              <Box mb="15px">
                <Box className="text-black" mt="10px">
                  Joined Date:
                  <span className="text-body ml-5">{member.joinedDate}</span>
                </Box>

                <Box className="text-black" mt="10px">
                  Email Address:
                  <span className="text-body ml-5">{member.email}</span>
                </Box>

                <Box className="text-black" mt="10px">
                  Phone Number:
                  <span className="text-body ml-5">{member.phone}</span>
                </Box>

                <Box className="text-black" mt="10px">
                  Location:
                  <span className="text-body ml-5">{member.location}</span>
                </Box>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                }}
              >
                {member.socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      display: "inline-block",
                      textAlign: "center",
                      borderRadius: "100%",
                      width: "28px",
                      height: "28px",
                      lineHeight: "28px",
                      color: "#fff",
                      background: getSocialColor(link.platform),
                    }}
                  >
                    <i className={`ri-${link.platform}-fill`}></i>
                  </a>
                ))}
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Pagination */}
      <Box
        className="bg-white"
        sx={{
          p: { xs: "20px", md: "25px" },
          display: { sm: "flex" },
          alignItems: { sm: "center" },
          justifyContent: "space-between",
          mb: "25px",
          borderRadius: "7px",
        }}
      >
        <Typography sx={{ fontSize: { xs: "13px", md: "14px" } }}>
          Showing {paginatedMembers.length} of {filteredMembers.length} results
        </Typography>

        <Box
          sx={{
            mt: { xs: "10px", sm: "0" },
            display: "flex",
            alignItems: "center",
            gap: "5px",
          }}
        >
          <Button
            className="border text-black"
            disabled={currentPage === 1}
            onClick={handlePreviousPage}
            sx={{
              minWidth: "auto",
              width: "30px",
              height: "30px",
              padding: "0",
              textAlign: "center",
              borderRadius: "4px",
              "&:hover": {
                backgroundColor: "primary.main",
                color: "#fff !important",
              },
            }}
          >
            <ChevronLeftIcon />
          </Button>

          {Array.from({ length: totalPages }, (_, index) => (
            <Button
              key={index}
              className="border"
              onClick={() => setCurrentPage(index + 1)}
              sx={{
                bgcolor: currentPage === index + 1 ? "primary.main" : "inherit",
                color:
                  currentPage === index + 1 ? "white !important" : "text-body",
                minWidth: "30px",
                height: "30px",
                "&:hover": {
                  bgcolor: "primary.main",
                  color: "white !important",
                },
              }}
            >
              {index + 1}
            </Button>
          ))}

          <Button
            className="border text-black"
            disabled={currentPage === totalPages}
            onClick={handleNextPage}
            sx={{
              minWidth: "auto",
              width: "30px",
              height: "30px",
              padding: "0",
              textAlign: "center",
              borderRadius: "4px",
              "&:hover": {
                backgroundColor: "primary.main",
                color: "#fff !important",
              },
            }}
          >
            <ChevronRightIcon />
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default TeamMembers;
