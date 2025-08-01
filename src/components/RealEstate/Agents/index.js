"use client";

import React, { useState } from "react";
import { Typography, Box, Grid, Button, Card } from "@mui/material";
import { Link } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import styles from "../../RealEstate/Search.module.css";

const agents = [
  {
    id: 1,
    name: "Sarah Johnson",
    email: "sarah@trezo.com",
    phone: "(123) 456-7890",
    location: "74 Grim Avenue San Diego",
    image: "/images/users/user1.jpg",
    socialLinks: [
      {
        icon: "ri-facebook-fill",
        url: "https://linkedin.com/",
        bgColor: "#3a559f",
      },
      {
        icon: "ri-twitter-x-fill",
        url: "https://twitter.com/",
        bgColor: "#03a9f4",
      },
      {
        icon: "ri-linkedin-fill",
        url: "https://facebook.com/",
        bgColor: "#007ab9",
      },
      {
        icon: "ri-whatsapp-line",
        url: "https://www.whatsapp.com/",
        bgColor: "#25d366",
      },
    ],
  },
  {
    id: 2,
    name: "Pauline Knott",
    email: "pauline@trezo.com",
    phone: "(987) 654-3210",
    location: "9 Paul Wayne Haggerty Road",
    image: "/images/users/user2.jpg",
    socialLinks: [
      {
        icon: "ri-facebook-fill",
        url: "https://linkedin.com/",
        bgColor: "#3a559f",
      },
      {
        icon: "ri-twitter-x-fill",
        url: "https://twitter.com/",
        bgColor: "#03a9f4",
      },
      {
        icon: "ri-linkedin-fill",
        url: "https://facebook.com/",
        bgColor: "#007ab9",
      },
      {
        icon: "ri-whatsapp-line",
        url: "https://www.whatsapp.com/",
        bgColor: "#25d366",
      },
    ],
  },
  {
    id: 3,
    name: "James Combs",
    email: "james@trezo.com",
    phone: "(555) 258-1598",
    location: "61 Ottis Street Oklahoma City",
    image: "/images/users/user3.jpg",
    socialLinks: [
      {
        icon: "ri-facebook-fill",
        url: "https://linkedin.com/",
        bgColor: "#3a559f",
      },
      {
        icon: "ri-twitter-x-fill",
        url: "https://twitter.com/",
        bgColor: "#03a9f4",
      },
      {
        icon: "ri-linkedin-fill",
        url: "https://facebook.com/",
        bgColor: "#007ab9",
      },
      {
        icon: "ri-whatsapp-line",
        url: "https://www.whatsapp.com/",
        bgColor: "#25d366",
      },
    ],
  },
  {
    id: 4,
    name: "Margaret Wade",
    email: "margaret@trezo.com",
    phone: "(431) 335-2321",
    location: "69 Leverton Cove Road Springfield",
    image: "/images/users/user4.jpg",
    socialLinks: [
      {
        icon: "ri-facebook-fill",
        url: "https://linkedin.com/",
        bgColor: "#3a559f",
      },
      {
        icon: "ri-twitter-x-fill",
        url: "https://twitter.com/",
        bgColor: "#03a9f4",
      },
      {
        icon: "ri-linkedin-fill",
        url: "https://facebook.com/",
        bgColor: "#007ab9",
      },
      {
        icon: "ri-whatsapp-line",
        url: "https://www.whatsapp.com/",
        bgColor: "#25d366",
      },
    ],
  },
  {
    id: 5,
    name: "Mike Harris",
    email: "harris@trezo.com",
    phone: "(605) 823-8868",
    location: "30 Hartway Street Mclaughlin",
    image: "/images/users/user5.jpg",
    socialLinks: [
      {
        icon: "ri-facebook-fill",
        url: "https://linkedin.com/",
        bgColor: "#3a559f",
      },
      {
        icon: "ri-twitter-x-fill",
        url: "https://twitter.com/",
        bgColor: "#03a9f4",
      },
      {
        icon: "ri-linkedin-fill",
        url: "https://facebook.com/",
        bgColor: "#007ab9",
      },
      {
        icon: "ri-whatsapp-line",
        url: "https://www.whatsapp.com/",
        bgColor: "#25d366",
      },
    ],
  },
  {
    id: 6,
    name: "Emily Jones",
    email: "emily@trezo.com",
    phone: "(617) 756-9911",
    location: "1654 Valley View Drive Brighton",
    image: "/images/users/user61.jpg",
    socialLinks: [
      {
        icon: "ri-facebook-fill",
        url: "https://linkedin.com/",
        bgColor: "#3a559f",
      },
      {
        icon: "ri-twitter-x-fill",
        url: "https://twitter.com/",
        bgColor: "#03a9f4",
      },
      {
        icon: "ri-linkedin-fill",
        url: "https://facebook.com/",
        bgColor: "#007ab9",
      },
      {
        icon: "ri-whatsapp-line",
        url: "https://www.whatsapp.com/",
        bgColor: "#25d366",
      },
    ],
  },
  {
    id: 7,
    name: "Trent Heiser",
    email: "heiser@trezo.com",
    phone: "(507) 646-1869",
    location: "46 Trymore Road Northfield",
    image: "/images/users/user62.jpg",
    socialLinks: [
      {
        icon: "ri-facebook-fill",
        url: "https://linkedin.com/",
        bgColor: "#3a559f",
      },
      {
        icon: "ri-twitter-x-fill",
        url: "https://twitter.com/",
        bgColor: "#03a9f4",
      },
      {
        icon: "ri-linkedin-fill",
        url: "https://facebook.com/",
        bgColor: "#007ab9",
      },
      {
        icon: "ri-whatsapp-line",
        url: "https://www.whatsapp.com/",
        bgColor: "#25d366",
      },
    ],
  },
  {
    id: 8,
    name: "Amiee Brown",
    email: "brown@trezo.com",
    phone: "(602) 525-5444",
    location: "79 Hall Street Las Vegas",
    image: "/images/users/user63.jpg",
    socialLinks: [
      {
        icon: "ri-facebook-fill",
        url: "https://linkedin.com/",
        bgColor: "#3a559f",
      },
      {
        icon: "ri-twitter-x-fill",
        url: "https://twitter.com/",
        bgColor: "#03a9f4",
      },
      {
        icon: "ri-linkedin-fill",
        url: "https://facebook.com/",
        bgColor: "#007ab9",
      },
      {
        icon: "ri-whatsapp-line",
        url: "https://www.whatsapp.com/",
        bgColor: "#25d366",
      },
    ],
  },
  {
    id: 9,
    name: "Edward Lebouef",
    email: "lebouef@trezo.com",
    phone: "(337) 456-7858",
    location: "05 Sherwood Circle Lafayette",
    image: "/images/users/user64.jpg",
    socialLinks: [
      {
        icon: "ri-facebook-fill",
        url: "https://linkedin.com/",
        bgColor: "#3a559f",
      },
      {
        icon: "ri-twitter-x-fill",
        url: "https://twitter.com/",
        bgColor: "#03a9f4",
      },
      {
        icon: "ri-linkedin-fill",
        url: "https://facebook.com/",
        bgColor: "#007ab9",
      },
      {
        icon: "ri-whatsapp-line",
        url: "https://www.whatsapp.com/",
        bgColor: "#25d366",
      },
    ],
  },
  {
    id: 10,
    name: "Marilyn Kelly",
    email: "marilyn@trezo.com",
    phone: "(864) 933-2339",
    location: "46 Brown Avenue Anderson",
    image: "/images/users/user65.jpg",
    socialLinks: [
      {
        icon: "ri-facebook-fill",
        url: "https://linkedin.com/",
        bgColor: "#3a559f",
      },
      {
        icon: "ri-twitter-x-fill",
        url: "https://twitter.com/",
        bgColor: "#03a9f4",
      },
      {
        icon: "ri-linkedin-fill",
        url: "https://facebook.com/",
        bgColor: "#007ab9",
      },
      {
        icon: "ri-whatsapp-line",
        url: "https://www.whatsapp.com/",
        bgColor: "#25d366",
      },
    ],
  },
  {
    id: 11,
    name: "Gary Manes",
    email: "manes@trezo.com",
    phone: "(603) 258-7598",
    location: "75 Wildrose Lane Southfield",
    image: "/images/users/user66.jpg",
    socialLinks: [
      {
        icon: "ri-facebook-fill",
        url: "https://linkedin.com/",
        bgColor: "#3a559f",
      },
      {
        icon: "ri-twitter-x-fill",
        url: "https://twitter.com/",
        bgColor: "#03a9f4",
      },
      {
        icon: "ri-linkedin-fill",
        url: "https://facebook.com/",
        bgColor: "#007ab9",
      },
      {
        icon: "ri-whatsapp-line",
        url: "https://www.whatsapp.com/",
        bgColor: "#25d366",
      },
    ],
  },
  {
    id: 12,
    name: "Francis Berg",
    email: "francis@trezo.com",
    phone: "(651) 778-2290",
    location: "93 Park Boulevard Ottumwa",
    image: "/images/users/user67.jpg",
    socialLinks: [
      {
        icon: "ri-facebook-fill",
        url: "https://linkedin.com/",
        bgColor: "#3a559f",
      },
      {
        icon: "ri-twitter-x-fill",
        url: "https://twitter.com/",
        bgColor: "#03a9f4",
      },
      {
        icon: "ri-linkedin-fill",
        url: "https://facebook.com/",
        bgColor: "#007ab9",
      },
      {
        icon: "ri-whatsapp-line",
        url: "https://www.whatsapp.com/",
        bgColor: "#25d366",
      },
    ],
  },
];

const Agents = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredAgents, setFilteredAgents] = useState(agents);
  const [currentPage, setCurrentPage] = useState(1);
  const agentsPerPage = 9;

  const handleSearchChange = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);

    const filtered = agents.filter(
      (agent) =>
        agent.name.toLowerCase().includes(query) ||
        agent.email.toLowerCase().includes(query) ||
        agent.location.toLowerCase().includes(query)
    );
    setFilteredAgents(filtered);
    setCurrentPage(1); // Reset to the first page after search
  };

  const totalPages = Math.ceil(filteredAgents.length / agentsPerPage);
  const paginatedAgents = filteredAgents.slice(
    (currentPage - 1) * agentsPerPage,
    currentPage * agentsPerPage
  );

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <>
      <Card
        sx={{
          boxShadow: "none",
          borderRadius: "7px",
          mb: "25px",
          padding: { xs: "18px", sm: "20px", lg: "25px" },
          display: { xs: "block", sm: "flex" },
          justifyContent: "space-between",
          alignItems: "center",
        }}
        className="rmui-card"
      >
        <Box
          component="form"
          className={styles.searchBox}
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
            className={styles.inputSearch}
            placeholder="Search agent here..."
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </Box>

        <Link to="/real-estate/agents/add/">
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
            <AddIcon sx={{ position: "relative", top: "-1px" }} /> Add Agent
          </Button>
        </Link>
      </Card>

      <Grid
        container
        columnSpacing={{ xs: 1, sm: 2, md: 3, lg: 3 }}
        justifyContent="center"
      >
        {paginatedAgents.map((agent) => (
          <Grid size={{ xs: 12, sm: 6, md: 4, lg: 4, xl: 4 }} key={agent.id}>
            <Box
              className="bg-white"
              sx={{
                mb: "25px",
                p: "20px",
                borderRadius: "7px",
              }}
            >
              <Box sx={{ position: "relative" }}>
                <Box sx={{ display: "flex" }}>
                  <Box
                    className="bg-gray-50 pr-10 -left-20"
                    sx={{
                      position: "relative",
                      top: "-20px",
                      width: "100px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      pb: "10px",
                      borderRadius: "7px",
                    }}
                  >
                    <img
                      src={agent.image}
                      alt={agent.name}
                      width={90}
                      height={90}
                      style={{
                        borderRadius: "7px",
                      }}
                    />
                  </Box>

                  <Box sx={{ pt: "10px" }}>
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: "500",
                        fontSize: { xs: "14px", md: "16px" },
                        mb: "2px",
                      }}
                    >
                      {agent.name}
                    </Typography>

                    <Typography>{agent.email}</Typography>
                  </Box>
                </Box>

                <Box>
                  <Box
                    className="text-black"
                    sx={{
                      fontWeight: "500",
                      mb: "5px",

                      "&:last-child": {
                        mb: 0,
                      },
                    }}
                  >
                    <Typography
                      component={"span"}
                      className="text-body mr-10"
                      sx={{
                        fontWeight: 400,
                      }}
                    >
                      Phone:
                    </Typography>
                    {agent.phone}
                  </Box>

                  <Box
                    className="text-black"
                    sx={{
                      fontWeight: "500",
                      mb: "5px",

                      "&:last-child": {
                        mb: 0,
                      },
                    }}
                  >
                    <Typography
                      component={"span"}
                      className="text-body mr-10"
                      sx={{
                        fontWeight: 400,
                      }}
                    >
                      Location:
                    </Typography>
                    {agent.location}
                  </Box>
                </Box>

                <Box
                  sx={{
                    my: { xs: "15px", md: "20px" },
                    display: "flex",
                    alignItems: "center",
                    gap: "7px",
                  }}
                >
                  {agent.socialLinks.map((link, idx) => (
                    <a
                      key={idx}
                      href={link.url}
                      target="_blank"
                      style={{
                        display: "inline-block",
                        textAlign: "center",
                        borderRadius: "100%",
                        width: "30px",
                        height: "30px",
                        lineHeight: "30px",
                        color: "#fff",
                        backgroundColor: `${link.bgColor}`,
                      }}
                      rel="noreferrer"
                    >
                      <i className={`${link.icon}`}></i>
                    </a>
                  ))}
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    gap: "15px",
                    alignItems: "center",
                    flexWrap: "wrap",
                  }}
                >
                  <a href={`mailto:${agent.email}`}>
                    <Button
                      sx={{
                        borderRadius: "7px",
                        fontWeight: "500",
                        bgcolor: "primary.500",
                        color: "#fff !important",
                        py: "4.5px",
                        px: "15.5px",
                        transition: "all 0.3s ease-in-out",
                        textTransform: "capitalize",
                        fontSize: "14px",

                        "&:hover": {
                          bgcolor: "primary.400",
                        },
                      }}
                    >
                      Message
                    </Button>
                  </a>

                  <Link to="/real-estate/agents/details">
                    <Button
                      variant="outlined"
                      sx={{
                        borderRadius: "7px",
                        fontWeight: "500",
                        color: "primary.500",
                        py: "3.3px",
                        px: "15.5px",
                        transition: "all 0.3s ease-in-out",
                        textTransform: "capitalize",
                        fontSize: "14px",

                        "&:hover": {
                          bgcolor: "primary.500",
                          color: "#fff !important",
                        },
                      }}
                    >
                      View Profile
                    </Button>
                  </Link>
                </Box>
              </Box>
            </Box>
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
          Showing {Math.min(currentPage * agentsPerPage, filteredAgents.length)}{" "}
          of {filteredAgents.length} results
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

export default Agents;
