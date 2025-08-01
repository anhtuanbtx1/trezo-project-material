"use client";

import React from "react";
import { Button, Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const ScheduleAppointment = () => {
  return (
    <>
      <Box 
        sx={{
          bgcolor: '#7C24CC',
          position: "relative",
          boxShadow: "none",
          borderRadius: "7px",
          mb: "25px",
          textAlign: 'center',
          padding: { xs: "18px", sm: "20px", lg: "25px" },
        }}
      >
        <Box>
          <Typography 
            component="h3" 
            className="text-white"
            sx={{
              fontWeight: '600',
              fontSize: {xs: '20px', md: '24px'},
              mb: '5px'
            }}
          >
            Schedule Appointment
          </Typography>

          <Typography 
            className="text-white ml-auto mr-auto"
            sx={{
              maxWidth: '275px',
              lineHeight: '1.6',
              mb: '28px',
              marginX: 'auto'
            }}
          >
            Quickly schedule an appointment for a patient with any available
            doctor.
          </Typography>
          
          <Box sx={{ textAlign: 'center' }}>
            <img
              src="/images/doctor.png"
              alt="doctor-image"
              width={175}
              height={187}
            />
          </Box>

          <Link to="#">
            <Button 
              variant="contained" 
              color="primary"
              sx={{
                boxShadow: 'none',
                textTransform: 'capitalize',
                fontSize: '16px',
                fontWeight: '500',
                padding: '4px 17px',
                mt: '28px',
                color: '#fff !important'
              }}
            >
              Book Appointment
            </Button>
          </Link>
        </Box>
      </Box>
    </>
  );
};

export default ScheduleAppointment;
