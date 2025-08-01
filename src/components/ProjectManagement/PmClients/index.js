"use client";

import React, { useState } from "react";
import { Grid, Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const clients = [
  {
    id: 1,
    companyName: "CodeCraft",
    email: "info@codecraft.com",
    contactName: "Olivia Taylor",
    phone: "(555) 555-5555",
    projects: 12,
    image: "/images/clients/client1.jpg",
  },
  {
    id: 2,
    companyName: "ByteSavvy",
    email: "contact@bytesavvy.com",
    contactName: "David Smith",
    phone: "(555) 123-4567",
    projects: 16,
    image: "/images/clients/client2.jpg",
  },
  {
    id: 3,
    companyName: "DataTech",
    email: "hello@datatech.com",
    contactName: "Alice Johnson",
    phone: "(555) 234-5678",
    projects: 7,
    image: "/images/clients/client3.jpg",
  },
  {
    id: 4,
    companyName: "CyberByte",
    email: "support@cyberbyte.com",
    contactName: "Emily Brown",
    phone: "(555) 345-6789",
    projects: 5,
    image: "/images/clients/client4.jpg",
  },
  {
    id: 5,
    companyName: "AlphaTech",
    email: "contact@alphatech.com",
    contactName: "James Miller",
    phone: "(555) 456-7890",
    projects: 9,
    image: "/images/clients/client5.jpg",
  },
  {
    id: 6,
    companyName: "SoftSolutions",
    email: "info@softsolutions.com",
    contactName: "Sophia Davis",
    phone: "(555) 567-8901",
    projects: 6,
    image: "/images/clients/client6.jpg",
  },
  {
    id: 7,
    companyName: "CodeGen",
    email: "info@codegen.com",
    contactName: "Sophia Martinez",
    phone: "(555) 678-9012",
    projects: 34,
    image: "/images/clients/client7.jpg",
  },
  {
    id: 8,
    companyName: "WebWiz",
    email: "info@webwiz.com",
    contactName: "William Davis",
    phone: "(555) 789-0123",
    projects: 8,
    image: "/images/clients/client8.jpg",
  },
  {
    id: 9,
    companyName: "ByteTech",
    email: "info@bytetech.com",
    contactName: "Ava Anderson",
    phone: "(555) 890-1234",
    projects: 3,
    image: "/images/clients/client9.jpg",
  },
  {
    id: 10,
    companyName: "CloudFlex",
    email: "info@cloudflex.com",
    contactName: "Ethan Thomas",
    phone: "(555) 901-2345",
    projects: 10,
    image: "/images/clients/client10.jpg",
  },
  {
    id: 11,
    companyName: "WebWorx",
    email: "info@webworx.com",
    contactName: "Isabella Clark",
    phone: "(555) 012-3456",
    projects: 25,
    image: "/images/clients/client6.jpg",
  },
  {
    id: 12,
    companyName: "TechSync",
    email: "info@techsync.com",
    contactName: "Alexander Lewis",
    phone: "(555) 210-9876",
    projects: 5,
    image: "/images/clients/client12.jpg",
  },
  {
    id: 13,
    companyName: "CyberByte",
    email: "support@cyberbyte.com",
    contactName: "Emily Brown",
    phone: "(555) 345-6789",
    projects: 5,
    image: "/images/clients/client4.jpg",
  },
  {
    id: 14,
    companyName: "AlphaTech",
    email: "contact@alphatech.com",
    contactName: "James Miller",
    phone: "(555) 456-7890",
    projects: 9,
    image: "/images/clients/client5.jpg",
  },
  {
    id: 15,
    companyName: "SoftSolutions",
    email: "info@softsolutions.com",
    contactName: "Sophia Davis",
    phone: "(555) 567-8901",
    projects: 6,
    image: "/images/clients/client6.jpg",
  },
  {
    id: 16,
    companyName: "CodeGen",
    email: "info@codegen.com",
    contactName: "Sophia Martinez",
    phone: "(555) 678-9012",
    projects: 34,
    image: "/images/clients/client7.jpg",
  },
];

const PmClients = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const clientsPerPage = 12;

  const totalPages = Math.ceil(clients.length / clientsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const paginatedClients = clients.slice(
    (currentPage - 1) * clientsPerPage,
    currentPage * clientsPerPage
  );

  return (
    <>
      <Grid container columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}>
        {paginatedClients.map((client) => (
          <Grid key={client.id} size={{ xs: 12, sm: 6, md: 4, lg: 4, xl: 3 }}>
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
                      width: "90px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      pb: "10px",
                      borderRadius: "7px",
                    }}
                  >
                    <img
                      src={client.image}
                      alt={client.companyName}
                      width={90}
                      height={90}
                      style={{
                        borderRadius: "7px",
                      }}
                    />
                  </Box>

                  <Box>
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: "500",
                        fontSize: { xs: "14px", md: "16px" },
                        mb: "2px",
                      }}
                    >
                      {client.companyName}
                    </Typography>

                    <Typography>{client.email}</Typography>
                  </Box>
                </Box>

                <Box>
                  <Typography
                    sx={{
                      fontWeight: "500",
                      mb: "5px",
                    }}
                  >
                    Name: {client.contactName}
                  </Typography>

                  <Typography
                    sx={{
                      fontWeight: "500",
                      mb: "5px",
                    }}
                  >
                    Phone: {client.phone}
                  </Typography>

                  <Typography
                    sx={{
                      fontWeight: "500",
                      mb: "5px",
                    }}
                  >
                    Projects: {client.projects}
                  </Typography>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    gap: "15px",
                    alignItems: "center",
                    flexWrap: "wrap",
                    mt: "15px",
                  }}
                >
                  <a href={`mailto:${client.email}`}>
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

                  <Link to="#">
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
                      View Project
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
          Showing {Math.min(currentPage * clientsPerPage, clients.length)} of{" "}
          {clients.length} results
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
              className="border "
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

export default PmClients;
