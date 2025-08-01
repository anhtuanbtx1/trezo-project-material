"use client";

import * as React from "react";
import {
  Grid,
  Box,
  Typography,
  FormControl,
  TextField,
  Button,
} from "@mui/material";  

const ContactUs = () => {
  return (
    <>
      <Box
        className="contact-area"
        sx={{
          pb: { xs: "60px", sm: "60px", md: "80px", lg: "100px", xl: "150px" },
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
            <Grid size={{ xs: 12, sm: 12, md: 12, lg: 6 }}>
              <div className="fp-contact-image border-radius">
                <img
                  src="/images/front-pages/contact.jpg"
                  className="border-radius"
                  alt="contact-image"
                  width={813}
                  height={1083}
                />
              </div>
            </Grid>

            <Grid size={{ xs: 12, sm: 12, md: 12, lg: 6 }}>
              <div className="fp-contact-content">
                <div className="section-title">
                  <div className="sub-title">
                    <span className="d-inline-block position-relative text-purple">
                      Contact Us
                    </span>
                  </div>
                  <Typography
                    variant="h2"
                    sx={{
                      fontSize: {
                        xs: "24px",
                        md: "28px",
                        lg: "34px",
                        xl: "36px",
                      },
                    }}
                  >
                    How Can We Help? We Love to Hear From You. Send Us a
                    Message!
                  </Typography>
                </div>

                <Box component="form">
                  <Box mt="25px">
                    <FormControl fullWidth>
                      <Typography
                        component="label"
                        sx={{
                          fontWeight: "500",
                          fontSize: "14px",
                          mb: "10px",
                          display: "block",
                        }}
                        className="text-black"
                      >
                        Full Name
                      </Typography>

                      <TextField
                        label="Your full name"
                        variant="filled"
                        id="fullName"
                        name="fullName"
                        sx={{
                          "& .MuiInputBase-root": {
                            border: "1px solid #D5D9E2",
                            backgroundColor: "#fff",
                            borderRadius: "7px",
                          },
                          "& .MuiInputBase-root::before": {
                            border: "none",
                          },
                          "& .MuiInputBase-root:hover::before": {
                            border: "none",
                          },
                          "& .MuiInputBase-root:hover:hover:not(.Mui-disabled, .Mui-error)::before":
                            {
                              border: "none",
                            },
                        }}
                      />
                    </FormControl>
                  </Box>

                  <Box mt="25px">
                    <FormControl fullWidth>
                      <Typography
                        component="label"
                        sx={{
                          fontWeight: "500",
                          fontSize: "14px",
                          mb: "10px",
                          display: "block",
                        }}
                        className="text-black"
                      >
                        Email Address
                      </Typography>

                      <TextField
                        label="Your email address"
                        variant="filled"
                        id="email"
                        name="email"
                        type="email"
                        sx={{
                          "& .MuiInputBase-root": {
                            border: "1px solid #D5D9E2",
                            backgroundColor: "#fff",
                            borderRadius: "7px",
                          },
                          "& .MuiInputBase-root::before": {
                            border: "none",
                          },
                          "& .MuiInputBase-root:hover::before": {
                            border: "none",
                          },
                          "& .MuiInputBase-root:hover:hover:not(.Mui-disabled, .Mui-error)::before":
                            {
                              border: "none",
                            },
                        }}
                      />
                    </FormControl>
                  </Box>

                  <Box mt="25px">
                    <FormControl fullWidth>
                      <Typography
                        component="label"
                        sx={{
                          fontWeight: "500",
                          fontSize: "14px",
                          mb: "10px",
                          display: "block",
                        }}
                        className="text-black"
                      >
                        Phone Number
                      </Typography>

                      <TextField
                        label="Your phone number"
                        variant="filled"
                        id="email"
                        name="email"
                        sx={{
                          "& .MuiInputBase-root": {
                            border: "1px solid #D5D9E2",
                            backgroundColor: "#fff",
                            borderRadius: "7px",
                          },
                          "& .MuiInputBase-root::before": {
                            border: "none",
                          },
                          "& .MuiInputBase-root:hover::before": {
                            border: "none",
                          },
                          "& .MuiInputBase-root:hover:hover:not(.Mui-disabled, .Mui-error)::before":
                            {
                              border: "none",
                            },
                        }}
                      />
                    </FormControl>
                  </Box>

                  <Box mt="25px">
                    <FormControl fullWidth>
                      <Typography
                        component="label"
                        sx={{
                          fontWeight: "500",
                          fontSize: "14px",
                          mb: "10px",
                          display: "block",
                        }}
                        className="text-black"
                      >
                        Message
                      </Typography>

                      <textarea 
                        id="message" 
                        name="message" 
                        placeholder="Message"
                        rows={5}
                        style={{
                          width: '100%',
                          borderRadius: '6px',
                          padding: '10px 15px',
                          border: '1px solid #D5D9E2'
                        }} 
                      ></textarea> 
                    </FormControl>
                  </Box>

                  <Box mt="25px">
                    <Button
                      variant="contained"
                      sx={{
                        textTransform: "capitalize",
                        borderRadius: "6px",
                        fontWeight: "500",
                        fontSize: { xs: "13px", sm: "16px" },
                        padding: { xs: "10px 20px", sm: "10px 24px" },
                        color: "#fff !important",
                        boxShadow: "none",
                        width: "100%",
                      }}
                    >
                      <i className="material-symbols-outlined mr-5">
                        autorenew
                      </i>
                      Send
                    </Button>
                  </Box>
                </Box>
              </div>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default ContactUs;
