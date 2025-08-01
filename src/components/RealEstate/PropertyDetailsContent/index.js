"use client";

import { Typography, Box, Grid } from "@mui/material";
import Profile from "./Profile";

const PropertyDetailsContent = () => {
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
            <Box sx={{ position: "relative", borderRadius: "7px", mb: "15px" }}>
              <img
                src="/images/properties/property-details.jpg"
                alt="property-details-image"
                width={1037}
                height={600}
                style={{
                  borderRadius: "7px",
                  display: "inline-block",
                }}
              />

              <Typography
                component={"span"}
                className="po-right-20"
                sx={{
                  position: "absolute",
                  top: "20px",
                  inlineBlock: "inline-block",
                  fontSize: "12px",
                  borderRadius: "4px",
                  bgcolor: "success.100",
                  color: "success.600",
                  py: "1px",
                  px: "10px",
                }}
              >
                Sale
              </Typography>
            </Box>

            <Typography
              sx={{ fontWeight: "700", fontSize: "18px", mb: "10px" }}
              className="text-orange-500"
            >
              $18,000
            </Typography>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
              }}
            >
              <i
                className="material-symbols-outlined text-primary-500"
                style={{ fontSize: "19px" }}
              >
                location_on
              </i>
              35 Prince Consort Road
            </Box>

            <Box
              className="border-top border-bottom"
              sx={{
                mt: "17px",
                display: { sm: "flex" },
                alignItems: "center",
                justifyContent: "space-between",
                py: "10px",
                gap: "10px",
              }}
            >
              <Box
                sx={{
                  mb: { xs: "10px", sm: "0" },
                  display: "flex",
                  alignItems: "center",
                  gap: { xs: "10px", sm: "20px" },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                  }}
                >
                  <i
                    className="material-symbols-outlined text-primary-500"
                    style={{ fontSize: "18px" }}
                  >
                    bed
                  </i>
                  6Bed
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                  }}
                >
                  <i
                    className="material-symbols-outlined text-primary-500"
                    style={{ fontSize: "18px" }}
                  >
                    bathtub
                  </i>
                  5Bath
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                  }}
                >
                  <i
                    className="material-symbols-outlined text-primary-500"
                    style={{ fontSize: "18px" }}
                  >
                    square_foot
                  </i>
                  1800sqft
                </Box>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center", gap: "3px" }}>
                <i className="ri-star-fill text-orange-500"></i>
                <i className="ri-star-fill text-orange-500"></i>
                <i className="ri-star-fill text-orange-500"></i>
                <i className="ri-star-fill text-orange-500"></i>
                <i className="ri-star-fill text-orange-500"></i>

                <Typography component={"span"}>4.9(Review)</Typography>
              </Box>
            </Box>

            <Box
              sx={{
                "h1, h2, h3, h4, h5, h6": {
                  fontWeight: "700",
                  fontSize: "18px",
                  mb: "12px",
                  mt: { xs: "20px !important", md: "25px !important" },
                },
                p: {
                  lineHeight: "1.7",
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
              <Typography variant="h3">Description</Typography>

              <p>
                This stunning 4-bedroom, 3-bathroom residence offers 2,000
                square feet of modern living space in a quiet, family-friendly
                neighborhood. Built in 2010, the home features a spacious layout
                with a bright and airy living room, perfect for relaxation or
                entertaining guests. The beautifully updated kitchen includes
                granite countertops and stainless steel appliances, ideal for
                home cooking.
              </p>

              <p>
                The master suite boasts an en-suite bathroom and plenty of
                closet space, while the additional bedrooms are perfect for
                family or guests. Step outside to your private backyard,
                complete with a deck for outdoor dining and a well-maintained
                garden area.
              </p>

              <Typography variant="h3">Features</Typography>
              <ul>
                <li>Spacious living room with natural light</li>
                <li>Modern kitchen with granite countertops</li>
                <li>Master bedroom with en-suite bathroom</li>
                <li>Private backyard with deck</li>
                <li>2-car garage</li>
                <li>Central heating and air conditioning</li>
              </ul>

              <Typography variant="h3">Neighborhood</Typography>
              <ul>
                <li>Located in a quiet residential area with nearby parks</li>
                <li>
                  Close to schools, shopping centers, and public transportation
                </li>
                <li>Safe and family-friendly community</li>
              </ul>

              <Typography variant="h3">Location</Typography>

              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.94539481518!2d-74.26675559025065!3d40.69739290398433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1678355274384!5m2!1sen!2sbd"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Property Location Map"
                style={{
                  width: "100%",
                  borderRadius: "7px",
                  border: "none",
                  height: "250px",
                }}
              ></iframe>

              <Typography variant="h3">Recent Renovations</Typography>
              <ul>
                <li>New roof installed in 2023</li>
                <li>Fresh paint throughout the interior in 2024</li>
                <li>Updated appliances in the kitchen</li>
              </ul>
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

export default PropertyDetailsContent;
