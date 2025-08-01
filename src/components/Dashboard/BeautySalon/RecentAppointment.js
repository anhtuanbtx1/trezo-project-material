"use client";

import { Card, Grid, Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Calendar from "react-calendar";

// Sample data
const appointmentsData = [
  {
    id: 1,
    time: "10:00 AM",
    service: "Pedicure Treatment",
    status: "Done",
    statusColor: "#1e8308",
    statusBgColor: "#D8FFC8",
    client: {
      name: "Jonathon Ronan",
      image: "/images/beauty-salon/user-1.png",
    },
    servedBy: {
      name: "Zinia Andy",
      image: "/images/beauty-salon/user-2.png",
    },
    backgroundColor: "#DDE4FF",
    verifyIcon: "/images/beauty-salon/verify-icon.svg",
  },
  {
    id: 2,
    time: "11:00 AM",
    service: "Facial Treatment",
    status: "Upcoming",
    statusColor: "#3E2AD8",
    statusBgColor: "#DDE4FF",
    client: {
      name: "Angela Carter",
      image: "/images/beauty-salon/user-2.png",
    },
    servedBy: {
      name: "Skyler White",
      image: "/images/beauty-salon/user-3.png",
    },
    backgroundColor: "#F3E8FF",
    verifyIcon: "/images/beauty-salon/verify-border.svg",
  },
  {
    id: 3,
    time: "12:00 PM",
    service: "Hair Cut",
    status: "Done",
    statusColor: "#1e8308",
    statusBgColor: "#D8FFC8",
    client: {
      name: "Jane Ronan",
      image: "/images/beauty-salon/user-4.png",
    },
    servedBy: {
      name: "Zinia Andy",
      image: "/images/beauty-salon/user-5.png",
    },
    backgroundColor: "#DDE4FF",
    verifyIcon: "/images/beauty-salon/verify-icon.svg",
  },
  {
    id: 4,
    time: "01:00 PM",
    service: "Manicure",
    status: "Upcoming",
    statusColor: "#3E2AD8",
    statusBgColor: "#DDE4FF",
    client: {
      name: "Angel Peril",
      image: "/images/beauty-salon/user-6.png",
    },
    servedBy: {
      name: "Skyler White",
      image: "/images/beauty-salon/user-7.png",
    },
    backgroundColor: "#F3E8FF",
    verifyIcon: "/images/beauty-salon/verify-border.svg",
  },
];

const RecentAppointment = () => {
  const [currentDate, setCurrentDate] = useState("");
  const [value, setValue] = useState(new Date());

  // Function to format the current date
  const formatDate = (date) => {
    const options = {
      day: "numeric",
      month: "short",
      year: "numeric",
    };
    return new Intl.DateTimeFormat("en-US", options).format(date);
  };

  // Set the current date on component mount
  useEffect(() => {
    const today = new Date();
    setCurrentDate(formatDate(today));
  }, []);


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
        <Box className="p-4">
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: "5px",
              justifyContent: "space-between",
              alignItems: "center",
              mb: "30px",
            }}
          >
            <Typography
              variant="h3"
              sx={{
                fontSize: { xs: "16px", md: "18px" },
                fontWeight: 600,
                mb: 0,
              }}
            >
              Recent Appointment
            </Typography>

            <Box>
              <Box
                className="bg-eceef2"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  py: "8px",
                  px: "18px",
                  borderRadius: "5px",
                }}
              >
                {currentDate}
                <i className="ri-calendar-2-line ms-2"></i>
              </Box>
            </Box>
          </Box>

          <Grid
            container
            columnSpacing={{ xs: 1, sm: 2, md: 3, lg: 3 }}
            justifyContent="center"
          >
            <Grid size={{ xs: 12, sm: 6 }}>
              <Calendar
                onChange={(value) => setValue(value)}
                value={value}
                className={"ra-calendar"}
              />
            </Grid>

            <Grid size={{ xs: 12, sm: 6 }}>
              <Box
                className="bs-rs-appointments"
                sx={{
                  maxHeight: "290px",
                  overflowY: "auto",
                  mt: { xs: "20px", sm: "0" },
                }}
              >
                <div className="bs-rs-appointments-list">
                  {appointmentsData.map((appointment) => (
                    <Box
                      key={appointment.id}
                      sx={{
                        backgroundColor: appointment.backgroundColor,
                        p: { xs: "15px", sm: "24px" },
                        borderRadius: "7px",
                        mb: "20px",
                        position: "relative",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          flexWrap: "wrap",
                          gap: "5px",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <Box>
                          <Typography
                            sx={{
                              fontWeight: "600",
                              mb: "5px",
                              color: "#000 !important",
                              lineHeight: "1",
                            }}
                          >
                            {appointment.time}
                          </Typography>

                          <Typography
                            fontSize={"14px"}
                            fontWeight={600}
                            className="text-body"
                          >
                            {appointment.service}
                          </Typography>
                        </Box>

                        <Box
                          sx={{
                            backgroundColor: appointment.statusBgColor,
                            border: `1px solid ${appointment.statusColor}`,
                            color: appointment.statusColor,
                            fontSize: "12px",
                            padding: "3px 8px",
                            borderRadius: "30px",
                            lineHeight: "1",
                          }}
                        >
                          {appointment.status}
                        </Box>
                      </Box>

                      <Box
                        sx={{
                          display: "flex",
                          flexWrap: "wrap",
                          gap: "5px",
                          justifyContent: "space-between",
                          alignItems: "center",
                          mt: "10px",
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: "5px",
                          }}
                        >
                          <img
                            src={appointment.client.image}
                            className="border border-2 border-color-white"
                            alt="client"
                            width={26}
                            height={26}
                            style={{
                              borderRadius: "100%",
                            }}
                          />

                          <Box>
                            <Typography
                              component={"span"}
                              sx={{
                                fontSize: "10px",
                                fontWeight: 500,
                              }}
                            >
                              Client
                            </Typography>

                            <Typography 
                              sx={{
                                fontSize: "12px",
                                fontWeight: 700,
                                mb: 0,
                                color: "#000 !important",
                                lineHeight: "1",
                              }}
                            >
                              {appointment.client.name}
                            </Typography>
                          </Box>
                        </Box>

                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: "5px",
                          }}
                        >
                          <img
                            src={appointment.servedBy.image}
                            className="border border-2 border-color-white"
                            alt="served-by"
                            width={26}
                            height={26}
                            style={{
                              borderRadius: "100%",
                            }}
                          />
  
                          <Box>
                            <Typography
                              component={"span"}
                              sx={{
                                fontSize: "10px",
                                fontWeight: 500,
                              }}
                            >
                              Served by
                            </Typography>

                            <Typography
                              sx={{
                                fontSize: "12px",
                                fontWeight: 700,
                                mb: 0,
                                color: "#000 !important",
                                lineHeight: "1",
                              }}
                            >
                              {appointment.servedBy.name}
                            </Typography>
                          </Box>
                        </Box>
                      </Box>

                      <img
                        src={appointment.verifyIcon}
                        className="verifyIcon bg-white"
                        alt="verify"
                        width={24}
                        height={24}
                        style={{
                          position: "absolute",
                          top: "50%",
                          transform: "translate(-50%, -50%)",
                        }}
                      />
                    </Box>
                  ))}
                </div>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Card>
    </>
  );
};

export default RecentAppointment;
