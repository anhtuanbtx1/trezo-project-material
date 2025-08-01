"use client";

import { Typography, Box, Grid } from "@mui/material";
import Profile from "./Profile";
import PropertiesForSale from "./PropertiesForSale";
import PropertiesForRent from "./PropertiesForRent";
import ClientTestimonials from "./ClientTestimonials";

const DetailsContent = () => {
  return (
    <>
      <Grid
        container
        columnSpacing={{ xs: 1, sm: 2, md: 3, lg: 3 }}
        justifyContent="center"
      >
        <Grid size={{ xs: 12, sm: 12, md: 8, lg: 8, xl: 8 }}>
          <Box
            className="bg-white"
            sx={{
              p: { xs: "15px", md: "25px" },
              borderRadius: "7px",
              mb: "25px",
            }}
          >
            <Typography
              variant="h3"
              sx={{
                fontSize: "18px",
                fontWeight: "700",
                mb: "15px",
              }}
            >
              About Harold Cook
            </Typography>

            <Box
              sx={{
                "h1, h2, h3, h4, h5, h6": {
                  fontWeight: "700",
                  fontSize: "18px",
                  mb: "12px",
                  mt: { xs: "20px !important", md: "25px !important" },
                },
                p: {
                  lineHeight: "1.8",
                },
                "ul, ol": {
                  marginBottom: "20px",
                  px: "18px",

                  "&:last-child": {
                    marginBottom: "0",
                  },
                  li: {
                    lineHeight: "1.7",
                    marginBottom: "10px",

                    "&:last-child": {
                      marginBottom: "0",
                    },
                  },
                },
              }}
            >
              <p>
                With over a decade of experience in the real estate market,
                Harold Cook has built a reputation for his in-depth knowledge of
                residential and commercial properties. His commitment to client
                satisfaction, combined with an extensive network, ensures a
                smooth and efficient process, whether buying or selling.
              </p>

              <p>
                Harold’s approach focuses on understanding each client’s unique
                needs and goals, providing tailored advice and insights. His
                market expertise and negotiation skills consistently deliver the
                best outcomes, helping clients make informed real estate
                decisions.
              </p>

              <Typography variant="h3">Property Status</Typography>
              <Grid
                container
                columnSpacing={{ xs: 1, sm: 2, md: 3, lg: 3 }}
                justifyContent="center"
              >
                <Grid size={{ xs: 12, sm: 6, md: 12, lg: 12, xl: 6 }}>
                  <PropertiesForSale />
                </Grid>

                <Grid size={{ xs: 12, sm: 6, md: 12, lg: 12, xl: 6 }}>
                  <PropertiesForRent />
                </Grid>
              </Grid>

              <Typography variant="h3">Specialization</Typography>
              <ul>
                <li>Expert in City A and surrounding neighborhoods</li>
                <li>
                  Proficient in handling first-time homebuyers, seasoned
                  investors, and luxury clients
                </li>
                <li>
                  Strong understanding of local market trends and pricing
                  strategies
                </li>
                <li>
                  Provides comprehensive property assessments and personalized
                  marketing plans
                </li>
              </ul>

              <Typography variant="h3">Recent Achievements</Typography>
              <ul>
                <li>Closed over $10 million in sales in 2023</li>
                <li>Top Agent Award at Prime Realty for 3 consecutive years</li>
                <li>
                  Successfully negotiated deals for 20+ residential and
                  commercial properties in the past year
                </li>
                <li>5-star client satisfaction rating</li>
              </ul>
 
              {/* ClientTestimonials */}
              <ClientTestimonials />
            </Box>
          </Box>
        </Grid>

        <Grid size={{ xs: 12, sm: 12, md: 4, lg: 4, xl: 4 }}>
          <Profile />
        </Grid>
      </Grid>
    </>
  );
};

export default DetailsContent;
