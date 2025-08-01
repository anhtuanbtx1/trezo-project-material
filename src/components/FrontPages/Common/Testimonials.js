"use client";

import * as React from "react";
import { Grid, Box, Typography } from "@mui/material";

const testimonialsData = [
  {
    id: 1,
    rating: 5,
    text: "Trezo Dashboard Template has transformed how we manage our data. Its intuitive design and customizable features have streamlined our analytics process, enabling us to make informed decisions faster than ever before.",
    image: "/images/front-pages/user1.jpg",
    name: "Sarah Thompson",
    position: "Data Analyst",
  },
  {
    id: 2,
    rating: 4.5,
    text: "As a developer, I appreciate the flexibility and robustness of Trezo Dashboard Template. It offers a wide range of features that cater to our diverse needs, and its clean codebase has made customization a breeze. Highly recommended!",
    image: "/images/front-pages/user2.jpg",
    name: "John Smith",
    position: "Software Engineer",
  },
  {
    id: 3,
    rating: 4,
    text: "Trezo Dashboard Template has been a lifesaver for our organization. It's helped us streamline our reporting processes and communicate insights effectively across departments. The time saved has allowed us to focus more on strategic initiatives.",
    image: "/images/front-pages/user3.jpg",
    name: "Alex Rodriguez",
    position: "Marketing Director",
  },
  {
    id: 4,
    rating: 4.5,
    text: "I can't recommend the Trezo Template enough. It's helped us gain a deeper understanding of our business metrics and identify areas for improvement. The responsive support team is a bonus, we are always ready to assist whenever needed.",
    image: "/images/front-pages/user4.jpg",
    name: "Kevin Brown",
    position: "Jessica Martinez",
  },
  {
    id: 5,
    rating: 5,
    text: "Using Trezo Dashboard Template has been a game-changer for our team. The ability to customize widgets to suit our specific needs has allowed us to gain deeper insights into our performance metrics and drive business growth.",
    image: "/images/front-pages/user5.jpg",
    name: "Olivia Adams",
    position: "Marketing Coordinator",
  },
  {
    id: 6,
    rating: 3.5,
    text: "As a startup, we needed a dashboard solution that was both powerful and cost-effective. Trezo Dashboard Template checked all the boxes for us. It's helped us stay agile and competitive in a fast-paced market.",
    image: "/images/front-pages/user6.jpg",
    name: "Daniel Lee",
    position: "Co-founder, StartupX",
  },
];

const Testimonials = () => {
  return (
    <>
      <Box
        sx={{
          pb: { xs: "60px", sm: "70px", md: "80px", lg: "100px", xl: "120px" },
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
            position: "relative",
            zIndex: "1",
          }}
        >
          <div className="section-title text-center">
            <div className="sub-title">
              <span className="text-purple">Testimonials</span>
            </div>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "24px", md: "28px", lg: "34px", xl: "36px" },
              }}
            >
              Inspiring Feedback: What Users Love About Trezo Dashboard
            </Typography>
          </div>

          <Grid
            container
            alignItems="center"
            columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}
          >
            {testimonialsData.map((testimonial) => (
              <Grid size={{ xs: 12, sm: 12, md: 6, lg: 4, xl: 4 }} key={testimonial.id}>
                <div className="fp-single-testimonial-item bg-white border-radius">
                  <div className="ratings">
                    {[...Array(5)].map((_, index) => (
                      <i
                        key={index}
                        className={`ri-star-${index < testimonial.rating ? "fill" : "line"}`}
                      ></i>
                    ))}
                  </div>

                  <p>{testimonial.text}</p>

                  <div className="info">
                    <img
                      src={testimonial.image}
                      className="rounded-circle"
                      alt="user-image"
                      width={50}
                      height={50}
                    />
                    <div>
                      <h5>{testimonial.name}</h5>
                      <span>{testimonial.position}</span>
                    </div>
                  </div>
                </div>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Testimonials;
