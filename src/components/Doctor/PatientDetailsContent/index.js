"use client";

import { Grid, Box, Typography, Card } from "@mui/material";

const PatientDetailsContent = () => {
  return (
    <>
      <Grid
        container
        columnSpacing={{ xs: 1, sm: 2, md: 3, lg: 3 }}
        justifyContent="center"
      >
        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 4, xl: 4 }}>
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
                display: "flex",
                alignItems: "center",
                gap: { xs: "10px", sm: "20px" },
                mb: "25px",
              }}
            >
              <img
                src="/images/patient.jpg"
                alt="patient-image"
                className="rounded-circle"
                width={100}
                height={100}
              />
              <Box>
                <Typography
                  variant="h4"
                  sx={{
                    fontSize: { xs: "17px", md: "20px" },
                    fontWeight: "700",
                    mb: "7px",
                  }}
                >
                  Walter White
                </Typography>
                <Typography>
                  Patient ID: <span className="text-black">#P-3214</span>
                </Typography>
              </Box>
            </Box>

            <Typography
              variant="h4"
              sx={{
                fontSize: { xs: "16px", md: "18px" },
                fontWeight: "700",
                mb: "15px",
              }}
            >
              Personal Information
            </Typography>

            <Box
              sx={{
                div: {
                  mb: "12px",

                  ":last-child": {
                    mb: "0",
                  },
                },
              }}
            >
              <Box>
                Occupation: <span className="text-black">Teacher</span>
              </Box>
              <Box>
                Age: <span className="text-black">65 Years</span>
              </Box>
              <Box>
                Admitted On:{" "}
                <span className="text-black">21 October, 2025</span>
              </Box>
              <Box>
                Bed No: <span className="text-black">L2 - 205</span>
              </Box>
            </Box>
          </Card>

          <Card
            sx={{
              boxShadow: "none",
              borderRadius: "7px",
              mb: "25px",
              padding: { xs: "18px", sm: "20px", lg: "25px" },
            }}
            className="rmui-card"
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: "15px" }}>
              <img
                src="/images/icons/email.svg"
                alt="email"
                width={40}
                height={40}
              />
              <Box>
                <Typography>Email</Typography>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: "600",
                    fontSize: "16px",
                    mt: "3px !important",
                    mb: "0",
                  }}
                >
                  walter32&#64;gmail.com
                </Typography>
              </Box>
            </Box>
          </Card>

          <Card
            sx={{
              boxShadow: "none",
              borderRadius: "7px",
              mb: "25px",
              padding: { xs: "18px", sm: "20px", lg: "25px" },
            }}
            className="rmui-card"
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: "15px" }}>
              <img
                src="/images/icons/call9.svg"
                alt="call"
                width={40}
                height={40}
              />
              <Box>
                <Typography>Phone No</Typography>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: "600",
                    fontSize: "16px",
                    mt: "3px !important",
                    mb: "0",
                  }}
                >
                  +1 444 266 5599
                </Typography>
              </Box>
            </Box>
          </Card>

          <Card
            sx={{
              boxShadow: "none",
              borderRadius: "7px",
              mb: "25px",
              padding: { xs: "18px", sm: "20px", lg: "25px" },
            }}
            className="rmui-card"
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: "15px" }}>
              <img
                src="/images/icons/map.svg"
                alt="map"
                width={40}
                height={40}
              />
              <Box>
                <Typography>Address</Typography>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: "600",
                    fontSize: "16px",
                    mt: "3px !important",
                    mb: "0",
                  }}
                >
                  S. Arrowhead Court Branford9
                </Typography>
              </Box>
            </Box>
          </Card>
        </Grid>

        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 8, xl: 8 }}>
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
                'h1, h2, h3, h4, h5, h6' : {
                  mt: 0,
                  mb: '10px',
                  lineHeight: "1.4",
                },
                h1: {
                  fontSize: "20px",
                },
                h2: {
                  fontSize: "18px",
                },
                h3: {
                  fontSize: "17px",
                },
                h4: {
                  fontSize: "16px",
                },
                h5: {
                  fontSize: "15px",
                },
                h6: {
                  fontSize: "14px",
                },
                p: {
                  lineHeight: "1.8",
                },

                'ul, ol': {
                  'li': {
                    lineHeight: "1.8",
                    marginBottom: "10px",

                    '&:last-child': {
                      marginBottom: "0",
                    },
                  }
                }
              }}
            > 
              <h3>Disease History</h3>
           
              <p>
                Molestie tincidunt ut consequat a urna tortor. Vitae velit ac
                nisl velit mauris placerat nisi placerat. Pellentesque viverra
                lorem malesuada nunc tristique sapien. Imperdiet sit hendrerit
                tincidunt bibendum donec adipiscing.
              </p>

              <h3>Key Symptoms</h3>

              <ul>
                <li>Molestie tincidunt ut consequat a urna tortor.</li>
                <li>
                  Vitae velit ac nisl velit mauris placerat nisi placerat.
                  Pellentesque viverra lorem malesuada nunc tristique sapien.
                  Imperdiet sit hendrerit tincidunt bibendum donec adipiscing.
                </li>
                <li>
                  Ad minim veniam, quis nostrud exercitation ullamco laboris nis
                </li>
                <li>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum accusantium
                  doloremque laudantium.
                </li>
                <li>
                  Ipsam voluptatem quia voluptas sit aspernatur aut odit aut
                  fugit, sed quia consequuntur magni dolores eos qui ratione
                  voluptate.
                </li>
              </ul>
            </Box>
          </Card>

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
                'h1, h2, h3, h4, h5, h6' : {
                  mt: 0,
                  mb: '10px',
                  lineHeight: "1.4",
                },
                h1: {
                  fontSize: "20px",
                },
                h2: {
                  fontSize: "18px",
                },
                h3: {
                  fontSize: "17px",
                },
                h4: {
                  fontSize: "16px",
                },
                h5: {
                  fontSize: "15px",
                },
                h6: {
                  fontSize: "14px",
                },
                p: {
                  lineHeight: "1.8",
                },

                'ul, ol': {
                  'li': {
                    lineHeight: "1.8",
                    marginBottom: "10px",

                    '&:last-child': {
                      marginBottom: "0",
                    },
                  }
                }
              }}
            >
              <h3>Note For Patient</h3>
              <p>
                Molestie tincidunt ut consequat a urna tortor. Vitae velit ac
                nisl velit mauris placerat nisi placerat. Pellentesque viverra
                lorem malesuada nunc tristique sapien. Imperdiet sit hendrerit
                tincidunt bibendum donec adipiscing.
              </p>

              <h3>Advice:</h3>
              <ul>
                <li>
                  Molestie tincidunt ut consequat a urna tortor.
                </li>
                <li>
                  Vitae velit ac nisl velit mauris placerat nisi placerat.
                  Pellentesque viverra lorem malesuada nunc tristique sapien.
                  Imperdiet sit hendrerit tincidunt bibendum donec adipiscing.
                </li>
              </ul>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default PatientDetailsContent;
